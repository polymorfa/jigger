__d("WAWebPaymentBoletoLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "payment-boleto-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 14, 22, "0 0 22 14");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					d: "M0 14V0h2v14zm3 0V0h2v14zm3 0V0h1v14zm3 0V0h2v14zm3 0V0h3v14zm4 0V0h1v14zm3 0V0h3v14z",
					style: { fill: "color(display-p3 .1098 .1059 .1216)" }
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PaymentBoletoLogoIcon = d;
}), 98);
