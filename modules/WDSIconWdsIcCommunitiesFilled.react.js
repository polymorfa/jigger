__d("WDSIconWdsIcCommunitiesFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-communities-filled";
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
					d: "M4.76 13.4a7.39 7.39 0 0 0-2.34.27c-.47.13-1 .35-1.44.69a2.3 2.3 0 0 0-.95 1.6c-.04.33-.03 1.06-.02 1.46.02.73.61 1.58 1.33 1.58H4.3a4.58 4.58 0 0 1-.3-1.51c0-.44-.04-1.61.05-2.24a4.48 4.48 0 0 1 .7-1.85ZM19.69 19h2.97c.72 0 1.31-.85 1.33-1.58.01-.4.02-1.13-.02-1.46a2.34 2.34 0 0 0-.95-1.6 4.29 4.29 0 0 0-1.44-.7 7.49 7.49 0 0 0-2.34-.26 4.17 4.17 0 0 1 .7 1.85c.09.63.05 1.8.04 2.24a4.58 4.58 0 0 1-.3 1.51Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M8.53 12.99a12.56 12.56 0 0 1 6.94 0c.43.12.95.3 1.41.58a2.68 2.68 0 0 1 1.3 1.92c.06.44.04 1.44.03 1.94-.03.73-.62 1.57-1.33 1.57H7.12c-.7 0-1.3-.84-1.33-1.57-.01-.5-.03-1.5.03-1.94.02-.2.07-.38.13-.55.23-.65.7-1.08 1.17-1.37.46-.28.98-.46 1.4-.58Zm8.36-3.66a2.66 2.66 0 1 1 5.32 0 2.66 2.66 0 0 1-5.32 0ZM8.44 7.56a3.56 3.56 0 1 1 7.12 0 3.56 3.56 0 0 1-7.12 0ZM1.78 9.33a2.66 2.66 0 1 1 5.32 0 2.66 2.66 0 0 1-5.32 0Z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
