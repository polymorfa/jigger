//! What each factory parameter is actually used as, resolved through the symbol
//! table.
//!
//! Metro documents the calling convention as
//! `factory(global, require, importDefault, importAll, module, exports, dependencyMap)`.
//! This bundle comes from Meta's own fork and its factories have arities from 6
//! to 9, so the documented order is a hypothesis and the code is the evidence.
//!
//! Counting by *name* does not work and produces confident nonsense: parameters
//! are single letters and the same letters are reused as locals inside nested
//! functions, so `function u(t)` shadows parameter `t` and every use of the
//! local is credited to position 0. Every count here is keyed on the parameter's
//! `SymbolId`, so a shadowed name is a different symbol and never counted.

use std::collections::{BTreeMap, HashMap};
use std::env;
use std::fs;

use oxc_allocator::Allocator;
use oxc_ast::ast::*;
use oxc_ast_visit::{Visit, walk};
use oxc_parser::Parser;
use oxc_semantic::{Scoping, SemanticBuilder, SymbolId};
use oxc_span::SourceType;

#[derive(Default, Debug, Clone, Copy)]
struct Use {
    /// `p("SomeModule")` — called with exactly one string literal.
    called_with_name: u32,
    /// `p.foo = …` — assigned onto. The exports object, in practice.
    assigned_onto: u32,
    /// `p.exports` — the CommonJS module object.
    dot_exports: u32,
    /// `p[3]` — the dependency map.
    indexed: u32,
    referenced: u32,
}

struct Scan<'s> {
    scoping: &'s Scoping,
    /// Parameter symbol -> its position. Only these symbols are ever counted.
    slots: HashMap<SymbolId, usize>,
    uses: Vec<Use>,
}

impl<'s> Scan<'s> {
    fn slot_of(&self, r: &IdentifierReference) -> Option<usize> {
        let sym = r.reference_id.get().and_then(|id| self.scoping.get_reference(id).symbol_id())?;
        self.slots.get(&sym).copied()
    }
}

impl<'a, 's> Visit<'a> for Scan<'s> {
    fn visit_call_expression(&mut self, call: &CallExpression<'a>) {
        if let Expression::Identifier(id) = &call.callee
            && call.arguments.len() == 1
            && matches!(call.arguments[0].as_expression(), Some(Expression::StringLiteral(_)))
            && let Some(i) = self.slot_of(id)
        {
            self.uses[i].called_with_name += 1;
        }
        walk::walk_call_expression(self, call);
    }

    fn visit_assignment_expression(&mut self, e: &AssignmentExpression<'a>) {
        if let AssignmentTarget::StaticMemberExpression(m) = &e.left
            && let Expression::Identifier(obj) = &m.object
            && let Some(i) = self.slot_of(obj)
        {
            self.uses[i].assigned_onto += 1;
        }
        walk::walk_assignment_expression(self, e);
    }

    fn visit_static_member_expression(&mut self, m: &StaticMemberExpression<'a>) {
        if m.property.name == "exports"
            && let Expression::Identifier(obj) = &m.object
            && let Some(i) = self.slot_of(obj)
        {
            self.uses[i].dot_exports += 1;
        }
        walk::walk_static_member_expression(self, m);
    }

    fn visit_computed_member_expression(&mut self, m: &ComputedMemberExpression<'a>) {
        if matches!(m.expression, Expression::NumericLiteral(_))
            && let Expression::Identifier(obj) = &m.object
            && let Some(i) = self.slot_of(obj)
        {
            self.uses[i].indexed += 1;
        }
        walk::walk_computed_member_expression(self, m);
    }

    fn visit_identifier_reference(&mut self, r: &IdentifierReference<'a>) {
        if let Some(i) = self.slot_of(r) {
            self.uses[i].referenced += 1;
        }
    }
}

fn main() {
    // Keyed by (arity, position): position 5 of a 6-parameter factory and
    // position 5 of an 8-parameter one are not the same slot, and averaging
    // them together is how the shape of this gets missed.
    let mut totals: BTreeMap<(usize, usize), Use> = BTreeMap::new();
    let mut arity: BTreeMap<usize, u32> = BTreeMap::new();
    let mut modules = 0u32;

    for path in env::args().skip(1) {
        let Ok(src) = fs::read_to_string(&path) else { continue };
        let alloc = Allocator::default();
        let parsed = Parser::new(&alloc, &src, SourceType::cjs()).parse();
        if parsed.panicked {
            continue;
        }
        let semantic = SemanticBuilder::new().with_build_nodes(true).build(&parsed.program).semantic;

        for stmt in &parsed.program.body {
            let Statement::ExpressionStatement(es) = stmt else { continue };
            let Expression::CallExpression(call) = &es.expression else { continue };
            let Expression::Identifier(callee) = &call.callee else { continue };
            if callee.name != "__d" || call.arguments.len() < 3 {
                continue;
            }
            let Some(arg) = call.arguments[2].as_expression() else { continue };
            // The factory is written parenthesized and oxc keeps the wrapper.
            let Expression::FunctionExpression(f) = arg.get_inner_expression() else { continue };

            let mut slots = HashMap::new();
            for (i, p) in f.params.items.iter().enumerate() {
                if let BindingPattern::BindingIdentifier(id) = &p.pattern
                    && let Some(sym) = id.symbol_id.get()
                {
                    slots.insert(sym, i);
                }
            }
            let n = f.params.items.len();
            *arity.entry(n).or_default() += 1;

            let mut scan = Scan { scoping: semantic.scoping(), slots, uses: vec![Use::default(); n] };
            if let Some(body) = &f.body {
                scan.visit_function_body(body);
            }
            for (i, u) in scan.uses.iter().enumerate() {
                let e = totals.entry((n, i)).or_default();
                e.called_with_name += u.called_with_name;
                e.assigned_onto += u.assigned_onto;
                e.dot_exports += u.dot_exports;
                e.indexed += u.indexed;
                e.referenced += u.referenced;
            }
            modules += 1;
        }
    }

    println!("{modules} module factories");
    println!("arity distribution: {arity:?}");
    let mut last = 0;
    for ((a, i), u) in &totals {
        if *a != last {
            println!(
                "\n--- arity {a} ({} modules) ---\n{:<4} {:>13} {:>12} {:>10} {:>11} {:>11}",
                arity.get(a).copied().unwrap_or(0),
                "pos",
                "require(str)",
                "assigned.x",
                ".exports",
                "indexed[n]",
                "referenced"
            );
            last = *a;
        }
        println!(
            "{:<4} {:>13} {:>12} {:>10} {:>11} {:>11}",
            i, u.called_with_name, u.assigned_onto, u.dot_exports, u.indexed, u.referenced
        );
    }
}
