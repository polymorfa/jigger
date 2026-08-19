__d("WAWebPaymentVisaLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "payment-visa-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
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
					fill: "#1434CB",
					fillRule: "evenodd",
					d: "m17 8.97-.23 1.38-.16-.07a3.3 3.3 0 0 0-1.33-.24c-.7 0-1.02.28-1.02.55 0 .3.37.5 1 .79 1.02.45 1.5 1 1.49 1.74-.02 1.32-1.23 2.18-3.1 2.18-.8 0-1.56-.16-1.98-.34l.25-1.43.23.1c.59.24.96.34 1.68.34.5 0 1.05-.2 1.06-.63 0-.28-.23-.48-.92-.8-.68-.3-1.57-.81-1.56-1.73.01-1.24 1.25-2.11 3-2.11.7 0 1.24.14 1.6.27m-12.98 1.4A6.8 6.8 0 0 0 1 8.85l.02-.13H3.9c.38.01.7.13.8.54l.6 2.81.08.22.18.89L7.3 8.82h1.89l-2.8 6.38H4.5L2.9 9.6a5 5 0 0 1 1.13.77M23 15.2l-1.44-6.4H20.2c-.43 0-.75.12-.93.54l-2.64 5.86h1.86l.38-.96h2.27a85 85 0 0 1 .22.96zM9.9 8.8h1.77l-1.1 6.4h-1.8zm10.95 4.13h-1.48l.7-1.79.08-.19.16-.42.12.55z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PaymentVisaLogoIcon = d;
}), 98);
