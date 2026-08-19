__d("WDSIconIcHowToReg.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-how-to-reg";
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
				u.jsx("mask", {
					id: "WDSIconIcHowToReg__a",
					width: 24,
					height: 24,
					x: 0,
					y: 0,
					maskUnits: "userSpaceOnUse",
					style: { maskType: "alpha" },
					children: u.jsx("path", {
						fill: "#D9D9D9",
						d: "M0 0h24v24H0z"
					})
				}),
				u.jsx("g", {
					mask: "url(#WDSIconIcHowToReg__a)",
					children: u.jsx("path", {
						fill: "currentColor",
						d: "M4 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-.8c0-.55.14-1.07.42-1.55.29-.48.68-.85 1.18-1.1.85-.43 1.8-.8 2.87-1.1a13 13 0 0 1 4.43-.4c.27.03.49.16.66.38.18.21.25.45.21.72-.03.23-.13.43-.3.6a.91.91 0 0 1-.67.25H10a11.87 11.87 0 0 0-5.5 1.35.97.97 0 0 0-.5.85v.8h6.75c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71a.94.94 0 0 1-.71.29H4Zm11.55-2.4 4.35-4.35a.95.95 0 0 1 .7-.28.95.95 0 0 1 .97.97c0 .3-.09.53-.27.71l-5.05 5.05a.96.96 0 0 1-1.4 0l-2.05-2.05a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.97c.3 0 .53.09.71.27l1.35 1.35ZM10 12a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 6 8c0-1.1.4-2.04 1.17-2.83A3.85 3.85 0 0 1 10 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 14 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 10 12Zm0-2c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59-.55 0-1.02.2-1.41.59C8.19 6.98 8 7.45 8 8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59Z"
					})
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
