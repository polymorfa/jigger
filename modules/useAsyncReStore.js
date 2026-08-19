__d("useAsyncReStore", [
	"LSDatabaseSingleton",
	"Promise",
	"ReStoreProvider.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = s || (s = o("react")), m = d.useContext, p = d.useMemo;
	function _() {
		var t = o("react-compiler-runtime").c(2), r = m((c || (c = o("ReStoreProvider.react"))).context), a;
		e: {
			if (r != null) {
				var i;
				t[0] !== r ? (i = (e || (e = n("Promise"))).resolve(r), t[0] = r, t[1] = i) : i = t[1], a = i;
				break e;
			}
			a = (u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
		}
		return a;
	}
	l.default = _;
}), 98);
