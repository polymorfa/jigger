__d("WDSIconIcTrophyFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-trophy-filled";
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
					id: "WDSIconIcTrophyFilled__a",
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
					mask: "url(#WDSIconIcTrophyFilled__a)",
					children: u.jsx("path", {
						fill: "currentColor",
						d: "M7 21v-2h4v-3.1a5.37 5.37 0 0 1-2.19-1.04 4.48 4.48 0 0 1-1.41-1.91 4.85 4.85 0 0 1-3.14-1.64A4.81 4.81 0 0 1 3 8V7c0-.55.2-1.02.59-1.41C3.98 5.19 4.45 5 5 5h2V3h10v2h2c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v1a4.8 4.8 0 0 1-1.26 3.31 4.85 4.85 0 0 1-3.14 1.64c-.3.77-.77 1.4-1.41 1.91-.64.51-1.37.86-2.19 1.04V19h4v2H7Zm0-10.2V7H5v1a3 3 0 0 0 2 2.8Zm10 0A3 3 0 0 0 19 8V7h-2v3.8Z"
					})
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
