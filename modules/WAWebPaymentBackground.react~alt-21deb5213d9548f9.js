__d("WAWebPaymentBackground.react", [
	"WAWebPaymentBackground.stylex",
	"WAWebPaymentImageAssets.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n, a = (e || (e = r("stylex"))).props(o("WAWebPaymentBackground.stylex").styles.thumb, o("WAWebPaymentBackground.stylex").styles.backgroundContainer, t.isQuoted !== !0 && o("WAWebPaymentImageAssets.stylex").paymentImageAssetStyles.background, t.isQuoted === !0 && o("WAWebPaymentBackground.stylex").styles.thumbQuoted, t.isQuotedInComposeBox === !0 && o("WAWebPaymentBackground.stylex").styles.thumbQuotedInComposeBox, t.thumbXstyle);
		return u.jsx("div", babelHelpers.extends({}, e.props(o("WAWebPaymentBackground.stylex").styles.container, t.isQuoted === !0 && o("WAWebPaymentBackground.stylex").styles.isQuoted, t.isQuotedInComposeBox === !0 && o("WAWebPaymentBackground.stylex").styles.isQuotedInComposeBox), { children: u.jsx("div", {
			"data-testid": "payment-background-thumb",
			style: a.style,
			className: [t.isQuoted !== !0 ? "bg-payments" : "", (n = a.className) != null ? n : ""].filter(Boolean).join(" "),
			children: u.jsx("div", babelHelpers.extends({}, e.props(o("WAWebPaymentBackground.stylex").styles.foregroundData), { children: t.children }))
		}) }));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
