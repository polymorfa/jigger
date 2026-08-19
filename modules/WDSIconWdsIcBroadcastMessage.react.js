__d("WDSIconWdsIcBroadcastMessage.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-broadcast-message";
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
					d: "M17.52 3c1.5 0 2.7 1.2 2.7 2.7v1.36a.95.95 0 0 1-1.9 0V5.7c0-.4-.3-.7-.7-.7H4.29c-.4 0-.7.3-.7.7l.21 10.48c0 .4.3.7.7.7h3.3l-.08 2.13 2.38-2.13h1.85a.95.95 0 0 1-.1 1.9H10.8l-3.5 3a.9.9 0 0 1-.5.2 1 1 0 0 1-1-1v-2.2H4.5c-1.5 0-2.7-1.2-2.7-2.7L1.6 5.71A2.7 2.7 0 0 1 4.3 3h13.22Zm2.16 6.52a1 1 0 0 1 1.41.12l.25.32a7.7 7.7 0 0 1-.28 9.85l-.23.23a1 1 0 0 1-1.39-1.44l.17-.17a5.71 5.71 0 0 0-.05-7.5l-.06-.09a1 1 0 0 1 .18-1.32Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M16.55 11.77a1 1 0 0 1 1.4.13 4.25 4.25 0 0 1-.16 5.76 1 1 0 1 1-1.38-1.44c.67-.64.9-2 .02-3.04a1 1 0 0 1 .12-1.4ZM13.3 13.9a1 1 0 1 1 1.42 1.42 1 1 0 0 1-1.42-1.42Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
