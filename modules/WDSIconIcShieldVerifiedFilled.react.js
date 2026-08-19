__d("WDSIconIcShieldVerifiedFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-shield-verified-filled";
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
					id: "WDSIconIcShieldVerifiedFilled__a",
					width: 24,
					height: 24,
					x: 0,
					y: 0,
					maskUnits: "userSpaceOnUse",
					style: { maskType: "alpha" },
					children: u.jsx("path", {
						fill: "#d9d9d9",
						d: "M0 0h24v24H0z"
					})
				}),
				u.jsx("g", {
					mask: "url(#WDSIconIcShieldVerifiedFilled__a)",
					children: u.jsx("path", {
						fill: "currentColor",
						d: "m10.95 12.7-1.4-1.4a.96.96 0 0 0-1.4 0q-.3.3-.3.71 0 .42.3.72l2.1 2.12a.96.96 0 0 0 1.4 0l4.25-4.25q.3-.3.3-.71 0-.42-.3-.71a1 1 0 0 0-.71-.3q-.41 0-.71.3zM12 21.9a2 2 0 0 1-.62-.1A10 10 0 0 1 6 17.64Q4 14.6 4 11.1V6.38q0-.63.36-1.13t.94-.72l6-2.25a2 2 0 0 1 1.4 0l6 2.25q.57.22.94.72.36.49.36 1.13v4.72q0 3.5-2 6.54a10 10 0 0 1-5.68 4.24z"
					})
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
