__d("WDSIconIcSentimentDissatisfied.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-sentiment-dissatisfied";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", {
				fill: "currentColor",
				d: "M12 13.5c-.9 0-1.75.2-2.54.59a4.7 4.7 0 0 0-1.91 1.71.78.78 0 0 0-.08.8c.14.27.36.4.66.4a.75.75 0 0 0 .64-.35A4.08 4.08 0 0 1 12 15a4.08 4.08 0 0 1 3.22 1.65.71.71 0 0 0 .63.35c.3 0 .52-.14.65-.41a.85.85 0 0 0-.07-.84 4.7 4.7 0 0 0-1.92-1.68A5.7 5.7 0 0 0 12 13.5Zm3.5-2.5c.42 0 .77-.15 1.06-.44.3-.29.44-.64.44-1.06 0-.42-.15-.77-.44-1.06A1.4 1.4 0 0 0 15.5 8c-.42 0-.77.15-1.06.44-.3.29-.44.64-.44 1.06 0 .42.15.77.44 1.06.29.3.64.44 1.06.44Zm-7 0c.42 0 .77-.15 1.06-.44.3-.29.44-.64.44-1.06 0-.42-.15-.77-.44-1.06A1.4 1.4 0 0 0 8.5 8c-.42 0-.77.15-1.06.44-.3.29-.44.64-.44 1.06 0 .42.15.77.44 1.06.29.3.64.44 1.06.44ZM12 22a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm0-2c2.23 0 4.13-.77 5.68-2.32A7.72 7.72 0 0 0 20 12a7.7 7.7 0 0 0-2.32-5.67A7.72 7.72 0 0 0 12 4a7.7 7.7 0 0 0-5.67 2.33A7.72 7.72 0 0 0 4 12c0 2.23.78 4.13 2.33 5.68A7.72 7.72 0 0 0 12 20Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
