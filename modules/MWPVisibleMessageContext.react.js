__d("MWPVisibleMessageContext.react", [
	"ReQL",
	"ReQLSuspense",
	"emptyFunction",
	"react",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.createContext, m = c.useContext, p = c.useEffect, _ = c.useMemo, f = c.useState, g = {
		setVisibleMessage: r("emptyFunction"),
		visibleMessage: void 0
	}, h = d(g);
	function y(t) {
		var n, a = o("react-compiler-runtime").c(9), l = t.children, s = f(), c = s[0], d = s[1], m = (e || (e = r("useReStore")))(), _ = c == null ? void 0 : c.messageOtid, g = c == null ? void 0 : c.messageId, y = (n = o("ReQLSuspense").useFirst(function() {
			return _ != null ? o("ReQL").fromTableAscending(m.tables.messages.index("optimistic")).getKeyRange(_) : o("ReQL").empty();
		}, [m, _], i.id + ":65")) == null ? void 0 : n.messageId, C, b;
		a[0] !== g || a[1] !== y ? (C = function() {
			y != null && g == null && d(function(e) {
				return e == null ? null : babelHelpers.extends({}, e, { messageId: y });
			});
		}, b = [
			d,
			g,
			y
		], a[0] = g, a[1] = y, a[2] = C, a[3] = b) : (C = a[2], b = a[3]), p(C, b);
		var v;
		a[4] !== c ? (v = {
			setVisibleMessage: d,
			visibleMessage: c
		}, a[4] = c, a[5] = v) : v = a[5];
		var S = v, R;
		return a[6] !== l || a[7] !== S ? (R = u.jsx(h.Provider, {
			value: S,
			children: l
		}), a[6] = l, a[7] = S, a[8] = R) : R = a[8], R;
	}
	function C() {
		return m(h);
	}
	l.MWPVisibleMessageContextProvider = y, l.useMWPVisibleMessageContext = C;
}), 98);
