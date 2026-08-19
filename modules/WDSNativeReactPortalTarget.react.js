__d("WDSNativeReactPortalTarget.react", [
	"ReactDOM",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useLayoutEffect, m = c.useState;
	function p(e) {
		return document.querySelector("#" + e);
	}
	function _(e) {
		e != null && e.parentNode && e.parentNode.removeChild(e);
	}
	function f(e, t, n) {
		var r = document.createElement("div");
		r.setAttribute("id", e), n && (r.style.display = "none");
		var o = p(t);
		return o == null || o.appendChild(r), r;
	}
	function g(e) {
		return e;
	}
	function h(e) {
		var t = e.children, n = e.idFunc, r = n === void 0 ? g : n, a = e.ref, i = e.targetId, l = e.wrapperId, s = m(null), u = s[0], c = s[1], h = l != null ? r(l) : r(i) + "-wrapper";
		return d(function() {
			var e = document.getElementById(h);
			return e = f(h, r(i), !!e), c(e), a && (a.current = p(r(i))), function() {
				_(e);
				var t = document.getElementById(h);
				t && (t.style.display = "block");
			};
		}, [
			i,
			h,
			a,
			r
		]), u != null ? o("ReactDOM").createPortal(t, u) : null;
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.id, o = t.idFunc, a = o === void 0 ? g : o, i = t.testId, l = t.xstyle;
		return u.jsx("div", babelHelpers.extends({
			id: a(n),
			"data-testid": void 0
		}, (e || (e = r("stylex"))).props(l)));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.WDSNativeReactPortal = h, l.WDSPortalTarget = y;
}), 98);
