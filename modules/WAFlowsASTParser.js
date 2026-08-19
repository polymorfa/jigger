__d("WAFlowsASTParser", [
	"WAFlowsDynamicDataUtils",
	"WATypeUtils",
	"jsep"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t, n, r) {
		return r === void 0 && (r = "object"), t.name === "screen" && r === "object" ? n : n == null ? void 0 : n[t.name];
	};
	function s(e, t) {
		var n = C(e.object, t, "object");
		if (e.computed) {
			var r = C(e.property, t, "property");
			return n == null ? void 0 : n[r];
		} else return n == null ? void 0 : n[e.property.name];
	}
	function u(e, t) {
		return e.body.map(function(e) {
			return C(e, t);
		}).join("");
	}
	function c(e, t) {
		var n = C(e.argument, t);
		switch (e.operator) {
			case "!": return !n;
			case "-": return -+n;
			case "+":
			default: return n;
		}
	}
	function d(e) {
		return e != null && e !== 0;
	}
	function m(e) {
		return e == null || e === "";
	}
	function p(e, t, n, r) {
		return n ? m(e) && m(t) : r ? +e == +t : e === t;
	}
	var _ = {
		"<": function(t, n) {
			return t < n;
		},
		"<=": function(t, n) {
			return t <= n;
		},
		">": function(t, n) {
			return t > n;
		},
		">=": function(t, n) {
			return t >= n;
		}
	};
	function f(e, t, n, r, o) {
		if (n || !r) return !1;
		var a = _[o];
		return a != null ? a(+e, +t) : !1;
	}
	function g(e, t) {
		if (t === void 0 && (t = 2), !o("WATypeUtils").isNumber(e)) return e;
		var n = Math.pow(10, t);
		return Math.round(e * n) / n;
	}
	function h(e, t) {
		var n = C(e.left, t), r = C(e.right, t), a = o("WATypeUtils").isNumber(n) || o("WATypeUtils").isNumber(r), i = n == null || r == null || n === "" || r === "", l = n != null && n !== "" ? n : 0, s = r != null && r !== "" ? r : 0;
		switch (e.operator) {
			case "+": return +l + +s;
			case "-": return +l - +s;
			case "*": return +l * +s;
			case "/": return d(r) ? +l / +r : 0;
			case "%": return d(r) ? +l % +r : 0;
			case "==": return p(n, r, i, a);
			case "!=": return !p(n, r, i, a);
			case "<":
			case "<=":
			case ">":
			case ">=": return f(n, r, i, a, e.operator);
			default: return "";
		}
	}
	function y(e, t) {
		var n = !!C(e.left, t), r = !!C(e.right, t);
		switch (e.operator) {
			case "||": return n || r;
			case "&&":
			default: return n && r;
		}
	}
	function C(t, n, r) {
		switch (r === void 0 && (r = "object"), t.type) {
			case "Literal": return t.value;
			case "Identifier": return e(t, n, r);
			case "MemberExpression": return s(t, n);
			case "Compound": return u(t, n);
			case "UnaryExpression": return c(t, n);
			case "BinaryExpression": return g(h(t, n));
			case "LogicalExpression": return y(t, n);
			default: {
				var o = new Error("Operation " + t.type + " is not supported");
				throw o.stack, o;
			}
		}
	}
	function b(e, t, n, o) {
		try {
			var a = r("jsep")(v(e, t, o == null ? void 0 : o.getVersion()));
			return C(a, n);
		} catch (t) {
			var i = new Error("Error while parsing dynamic expression - " + e + ".", { cause: t });
			throw i.stack, i;
		}
	}
	function v(e, t, n) {
		var r = e;
		o("WAFlowsDynamicDataUtils").isNestedExpressionValue(e) && S(n) ? r = e.slice(1, -1) : !o("WAFlowsDynamicDataUtils").isBindingValue(e) && o("WATypeUtils").isString(e) && (r = "'" + e.replaceAll("'", "\\'") + "'");
		var a = r.replace(/\$\{(screen|data|form|external_data)/g, function(e) {
			var n = {
				"${screen": "screen",
				"${data": "screen." + t + ".data",
				"${form": "screen." + t + ".form",
				"${external_data": "screen." + t + ".external_data"
			};
			return n[e];
		}).replace(/\}/g, "");
		return a.endsWith("\\'") && (a = a.slice(0, -2) + "\\\\'"), a;
	}
	function S(e) {
		return e != null && e >= 600;
	}
	l.parseFlowDynamicExpression = b, l.cleanExpressionForJSEP = v;
}), 98);
