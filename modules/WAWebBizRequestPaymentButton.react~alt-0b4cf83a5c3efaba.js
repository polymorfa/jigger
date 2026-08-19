__d("WAWebBizRequestPaymentButton.react", [
	"fbt",
	"WDSButton.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onPress;
		return u.jsx(r("WDSButton.react"), {
			testid: "request-payment-button",
			label: s._(
				/*BTDS*/
				""
			),
			onPress: t,
			variant: "outline",
			size: "small"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
