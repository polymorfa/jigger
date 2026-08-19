__d("MWBlockingProtectionContext.react", [
	"emptyFunction",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useContext, m = u.useMemo, p = u.useState, _ = c({
		addMessageId: r("emptyFunction"),
		findMessageId: r("emptyFunction").thatReturnsFalse
	});
	function f(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [], t[0] = r) : r = t[0];
		var a = p(r), i = a[0], l = a[1], u;
		t[1] !== i ? (u = {
			addMessageId: function(t) {
				l([t].concat(i));
			},
			findMessageId: function(t) {
				return i.find(function(e) {
					return e === t;
				}) != null;
			}
		}, t[1] = i, t[2] = u) : u = t[2];
		var c = u, d;
		return t[3] !== n || t[4] !== c ? (d = s.jsx(_.Provider, {
			value: c,
			children: n
		}), t[3] = n, t[4] = c, t[5] = d) : d = t[5], d;
	}
	function g() {
		return d(_);
	}
	var h = {
		Provider: f,
		useHook: g
	};
	l.default = h;
}), 98);
