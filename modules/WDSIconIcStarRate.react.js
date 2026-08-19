__d("WDSIconIcStarRate.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-star-rate";
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
				d: "M9.6 15.65 12 13.8l2.4 1.85-.9-3.05 2.25-1.6h-2.8L12 7.9l-.95 3.1h-2.8l2.25 1.6-.9 3.05Zm2.4.65-3.7 2.82a.87.87 0 0 1-.6.22 1.08 1.08 0 0 1-.96-.66.83.83 0 0 1-.02-.66l1.43-4.62-3.63-2.58a.85.85 0 0 1-.37-.52 1.04 1.04 0 0 1 .37-1.09.9.9 0 0 1 .6-.21H9.6l1.45-4.8c.08-.23.21-.41.39-.54a.95.95 0 0 1 .56-.19c.2 0 .39.07.56.2.18.12.3.3.39.53L14.4 9h4.47a.9.9 0 0 1 .6.21 1.04 1.04 0 0 1 .38 1.09.85.85 0 0 1-.38.53l-3.62 2.57 1.42 4.62c.09.24.08.46 0 .66-.1.2-.23.35-.4.47a1 1 0 0 1-.57.19.87.87 0 0 1-.6-.21L12 16.3Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
