__d("WDSIconWdsIcMoodAdd.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-mood-add";
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
					d: "M20.98 10.47c.53.02.97.41 1 .94L22 12a10.1 10.1 0 0 1-6.1 9.21c-1.23.53-2.56.8-3.9.79a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21 9.74 9.74 0 0 1 4.68-.76c.7.05 1.07.8.78 1.43a1 1 0 0 1-.98.56L12 4c-2.23 0-4.12.77-5.67 2.32A7.72 7.72 0 0 0 4 12c0 2.23.78 4.13 2.33 5.68A7.72 7.72 0 0 0 12 20c2.23 0 4.13-.77 5.68-2.32a7.72 7.72 0 0 0 2.31-6.13c-.03-.58.41-1.1.99-1.08Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M16.56 10.56a1.45 1.45 0 0 1-1.06.44c-.42 0-.77-.15-1.06-.44A1.45 1.45 0 0 1 14 9.5c0-.42.15-.77.44-1.06A1.45 1.45 0 0 1 15.5 8c.42 0 .77.15 1.06.44.3.29.44.64.44 1.06 0 .42-.14.77-.44 1.06Zm-7 0A1.45 1.45 0 0 1 8.5 11c-.42 0-.77-.15-1.06-.44A1.45 1.45 0 0 1 7 9.5c0-.42.15-.77.44-1.06A1.45 1.45 0 0 1 8.5 8c.42 0 .77.15 1.06.44.3.29.44.64.44 1.06 0 .42-.15.77-.44 1.06Zm5.12 6.24c-.82.47-1.71.7-2.68.7a5.5 5.5 0 0 1-4.65-2.6.6.6 0 0 1 .02-.6.57.57 0 0 1 .53-.3h8.2c.23 0 .4.1.52.3.12.2.13.4.03.6a5.6 5.6 0 0 1-1.97 1.9Zm.6-12.26a.98.98 0 0 0 1 1h2v2a.98.98 0 0 0 1 1 .98.98 0 0 0 1-1v-2h2a.98.98 0 0 0 1-.99.98.98 0 0 0-1-1h-2v-2a.98.98 0 0 0-1-1 .98.98 0 0 0-1 1v2h-2a.98.98 0 0 0-1 1Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
