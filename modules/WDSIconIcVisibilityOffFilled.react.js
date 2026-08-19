__d("WDSIconIcVisibilityOffFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-visibility-off-filled";
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
					id: "WDSIconIcVisibilityOffFilled__a",
					width: 24,
					height: 24,
					x: 0,
					y: 0,
					maskUnits: "userSpaceOnUse",
					style: { maskType: "alpha" },
					children: u.jsx("path", {
						fill: "#ffffff",
						d: "M0 0h24v24H0z"
					})
				}),
				u.jsx("g", {
					mask: "url(#WDSIconIcVisibilityOffFilled__a)",
					children: u.jsx("path", {
						fill: "currentColor",
						d: "m19.8 22.6-4.2-4.15A12 12 0 0 1 12 19c-2.52 0-4.76-.7-6.72-2.09A11.9 11.9 0 0 1 1 11.5 11.85 11.85 0 0 1 4.15 7L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4ZM12 16a4.9 4.9 0 0 0 1.03-.13l-5.4-5.4a3.25 3.25 0 0 0-.13 1.03c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 12 16Zm7.3.45-3.18-3.15a4.2 4.2 0 0 0 .38-1.8c0-1.25-.44-2.31-1.31-3.19a4.34 4.34 0 0 0-4.13-1.21c-.29.07-.58.17-.86.3L7.65 4.85A11.08 11.08 0 0 1 12 4c2.52 0 4.76.7 6.73 2.09A11.9 11.9 0 0 1 23 11.5a11.7 11.7 0 0 1-3.7 4.95Zm-4.63-4.6-3-3c.47-.08.9-.05 1.3.11a2.84 2.84 0 0 1 1.62 1.73c.12.39.15.78.09 1.16Z"
					})
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
