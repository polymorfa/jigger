__d("WAWebNumberedListMutatorComponent.react", [
	"WAWebL10N",
	"WAWebTextMutatorComponentUtils",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { marginInlineStart30: {
		marginInlineStart: "xymharo",
		$$css: !0
	} }, d = { ol: {
		wordBreak: "x13faqbe",
		whiteSpace: "xeaf4i8",
		position: "x1n2onr6",
		listStyleType: "x3yw8vx",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(4), a = t.children, i = t.inline, l = t.largerIndentation, s = t.quoted, m = a === void 0 ? "" : a, p = i === void 0 ? !1 : i, _ = l === void 0 ? !1 : l, f = s === void 0 ? !1 : s;
		if (p) return m;
		var g;
		return n[0] !== m || n[1] !== _ || n[2] !== f ? (g = [], o("WAWebTextMutatorComponentUtils").groupListChildren(m).forEach(function(t, n) {
			t.isList ? g.push(u.jsx("ol", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.ol, c.marginInlineStart30, !f && o("WDSMargins.stylex").wdsMargins.marginVer4, _ ? c.marginInlineStart30 : o("WDSMargins.stylex").wdsMargins.marginStart20), {
				dir: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
				children: t.children
			}), n)) : g.push(t.children);
		}), n[0] = m, n[1] = _, n[2] = f, n[3] = g) : g = n[3], g;
	}
	m.displayName = "NumberedList", l.default = m;
}), 98);
