__d("WAWebBizAIQueryError.react", [
	"fbt",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.onRetry, a = e.testid, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x6s0dn4 x78zum5 xdt5ytf xl56j7k x1sk1jro x1ci70gm xdx6fka xvtqlqk x1f0uite" }, t[0] = i) : i = t[0];
		var l = n != null ? "alert" : void 0, c;
		t[1] !== n ? (c = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			textAlign: "center",
			type: "Body2",
			children: n != null ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), t[1] = n, t[2] = c) : c = t[2];
		var d;
		t[3] !== n || t[4] !== a ? (d = n != null ? u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: n,
			testid: a + "-retry",
			variant: "borderless"
		}) : null, t[3] = n, t[4] = a, t[5] = d) : d = t[5];
		var m;
		return t[6] !== l || t[7] !== c || t[8] !== d || t[9] !== a ? (m = u.jsxs("div", babelHelpers.extends({}, i, {
			"data-testid": a,
			role: l,
			children: [c, d]
		})), t[6] = l, t[7] = c, t[8] = d, t[9] = a, t[10] = m) : m = t[10], m;
	}
	l.default = c;
}), 226);
