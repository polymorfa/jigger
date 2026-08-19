__d("WDSIconIcPlayArrow.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-play-arrow";
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
					id: "WDSIconIcPlayArrow__a",
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
					mask: "url(#WDSIconIcPlayArrow__a)",
					children: u.jsx("path", {
						fill: "currentColor",
						d: "M8 17.18V6.82c0-.28.1-.52.3-.7a.98.98 0 0 1 .96-.26c.1.03.18.06.27.11l8.15 5.18a1.05 1.05 0 0 1 .34 1.32.97.97 0 0 1-.35.38l-8.15 5.17a1.04 1.04 0 0 1-.52.16c-.27 0-.5-.1-.7-.3a.95.95 0 0 1-.3-.7Zm2-1.83L15.25 12 10 8.65v6.7Z"
					})
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
