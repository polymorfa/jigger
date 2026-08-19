__d("WDSNativeFocusTrap.react", ["react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef;
	function p(e) {
		var t = e.children, n = e.disableTrap, r = n === void 0 ? !1 : n, o = e.onFocusOutNext, a = m(null);
		d(function() {
			if (!(!a.current || r)) {
				var e = document.activeElement, t = _(a.current);
				return t == null || t.focus(), function() {
					e == null || e.focus();
				};
			}
		}, [r]);
		var i = c(function() {
			if (a.current) {
				var e = f(a.current);
				e == null || e.focus();
			}
		}, []), l = c(function() {
			if (o == null || o(), !(!a.current || r)) {
				var e = _(a.current);
				e == null || e.focus();
			}
		}, [o, r]);
		return s.jsxs(s.Fragment, { children: [
			s.jsx("div", {
				tabIndex: 0,
				onFocus: i
			}),
			s.jsx("div", {
				ref: a,
				children: t
			}),
			s.jsx("div", {
				tabIndex: 0,
				onFocus: l
			})
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])");
		return t.length > 0 ? t[0] : null;
	}
	function f(e) {
		var t = e.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])");
		return t.length > 0 ? t[t.length - 1] : null;
	}
	l.default = p;
}), 98);
