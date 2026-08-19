__d("WDSIconWdsIcBroadcastMessageFill.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-broadcast-message-fill";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [
				u.jsx("title", { children: c }),
				u.jsx("path", {
					fill: "currentColor",
					d: "M17.52 3c1.5 0 2.7 1.2 2.7 2.7v1.6c-.6.02-1.2.21-1.7.6l-.13.1c-.5.42-.83.97-.97 1.56a3 3 0 0 0-2.04.6l-.12.1c-.45.37-.76.86-.92 1.38a3 3 0 1 0-.16 5.97c.1.43.28.83.56 1.2H10.8l-3.5 3a.9.9 0 0 1-.5.2 1 1 0 0 1-1-1v-2.2H4.5c-1.5 0-2.7-1.2-2.7-2.7L1.6 5.7C1.6 4.2 2.8 3 4.3 3h13.22Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M16.55 11.77a1 1 0 0 1 1.4.13 4.25 4.25 0 0 1-.16 5.76 1 1 0 1 1-1.38-1.44c.67-.64.9-2 .02-3.04a1 1 0 0 1 .12-1.4Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M19.68 9.52a1 1 0 0 1 1.41.12l.26.32a7.7 7.7 0 0 1-.29 9.85l-.23.23a1 1 0 0 1-1.39-1.44l.17-.17a5.71 5.71 0 0 0-.05-7.5l-.06-.09a1 1 0 0 1 .18-1.32Zm-4.96 5.8a1 1 0 1 1-1.42-1.42 1 1 0 0 1 1.42 1.42Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
