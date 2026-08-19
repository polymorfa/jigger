__d("WAWebBizAIQueryRefreshBanner.react", [
	"fbt",
	"WDSBanner.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.onRetry, a = e.testid, i, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), l = s._(
			/*BTDS*/
			""
		), t[0] = i, t[1] = l) : (i = t[0], l = t[1]);
		var c;
		return t[2] !== n || t[3] !== a ? (c = u.jsx(r("WDSBanner.react"), {
			actionText: i,
			body: l,
			onAction: n,
			testid: a,
			type: "warning"
		}), t[2] = n, t[3] = a, t[4] = c) : c = t[4], c;
	}
	l.default = c;
}), 226);
