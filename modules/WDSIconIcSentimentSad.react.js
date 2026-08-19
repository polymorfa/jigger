__d("WDSIconIcSentimentSad.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-sentiment-sad";
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
				d: "M12 11.5c1.08 0 2.02.37 2.8 1.1a4.46 4.46 0 0 1 1.4 2.72c.03.2.13.37.28.5A.8.8 0 0 0 17 16c.2 0 .38-.07.54-.2a.5.5 0 0 0 .19-.5 5.94 5.94 0 0 0-1.87-3.78A5.42 5.42 0 0 0 12 10c-1.5 0-2.79.5-3.86 1.53a5.94 5.94 0 0 0-1.87 3.77.5.5 0 0 0 .2.5c.15.13.33.2.53.2a.8.8 0 0 0 .8-.68 4.47 4.47 0 0 1 1.4-2.72 3.96 3.96 0 0 1 2.8-1.1Zm-1.45-3.97c.15-.14.22-.3.21-.52 0-.2-.1-.38-.26-.51a.75.75 0 0 0-.55-.17 1 1 0 0 0-.55.22 5.12 5.12 0 0 1-1.78 1 1 1 0 0 0-.48.38.73.73 0 0 0-.14.57.7.7 0 0 0 .3.5c.17.12.34.14.53.07.5-.16.98-.37 1.45-.63.46-.26.89-.56 1.27-.91Zm2.9 0a6.96 6.96 0 0 0 2.68 1.52c.2.07.38.05.56-.06A.67.67 0 0 0 17 8.5a.71.71 0 0 0-.15-.58c-.13-.16-.3-.29-.5-.37a6.05 6.05 0 0 1-1.75-1 1 1 0 0 0-.55-.22.75.75 0 0 0-.55.17.66.66 0 0 0-.26.51c-.01.21.06.38.21.52ZM12 22a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm0-2c2.23 0 4.13-.77 5.68-2.32A7.72 7.72 0 0 0 20 12a7.7 7.7 0 0 0-2.32-5.67A7.72 7.72 0 0 0 12 4a7.7 7.7 0 0 0-5.67 2.33A7.72 7.72 0 0 0 4 12c0 2.23.78 4.13 2.33 5.68A7.72 7.72 0 0 0 12 20Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
