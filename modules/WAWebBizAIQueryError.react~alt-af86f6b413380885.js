__d("WAWebBizAIQueryError.react", [
	"fbt",
	"WDSButton.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onRetry, n = e.testid;
		return u.jsxs("div", {
			className: "x6s0dn4 x78zum5 xdt5ytf xl56j7k x1sk1jro x1ci70gm xdx6fka xvtqlqk x1f0uite",
			"data-testid": n,
			role: t != null ? "alert" : void 0,
			children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				textAlign: "center",
				type: "Body2",
				children: t != null ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}), t != null ? u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: t,
				testid: n + "-retry",
				variant: "borderless"
			}) : null]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
