__d("WAWebBizAdCreationConfigContextProvider.react", [
	"WAWebBizAdCreationConfigContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.children, a = e.entryMode, i = e.entryPoint, l = e.flow, u = e.flowID, c = e.pageID, d = e.product, m;
		t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== u || t[4] !== c || t[5] !== d ? (m = {
			entryMode: a,
			entryPoint: i,
			flow: l,
			flowID: u,
			pageID: c,
			product: d
		}, t[0] = a, t[1] = i, t[2] = l, t[3] = u, t[4] = c, t[5] = d, t[6] = m) : m = t[6];
		var p = m, _;
		return t[7] !== n || t[8] !== p ? (_ = s.jsx(r("WAWebBizAdCreationConfigContext").Provider, {
			value: p,
			children: n
		}), t[7] = n, t[8] = p, t[9] = _) : _ = t[9], _;
	}
	l.default = c;
}), 98);
