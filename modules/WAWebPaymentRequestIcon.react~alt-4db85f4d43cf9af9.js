__d("WAWebPaymentRequestIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "payment-request";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 22, 24, "0 0 24 22");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M1.42 3h16.4A4.2 4.2 0 0 1 22 7.19v7.65c0 2.3-1.86 4.17-4.17 4.17H7.05a4.17 4.17 0 0 1-4.17-4.17V7.67L.73 4.27a.82.82 0 0 1 .7-1.26Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PaymentRequestIcon = d;
}), 98);
