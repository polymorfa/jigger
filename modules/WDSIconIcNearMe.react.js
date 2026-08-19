__d("WDSIconIcNearMe.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-near-me";
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
				d: "m10.05 13.95-6.47-2.63a.9.9 0 0 1-.48-.38 1 1 0 0 1 .01-1.07.98.98 0 0 1 .49-.4l15.35-5.7c.2-.08.4-.1.57-.04a1.05 1.05 0 0 1 .75.75c.05.18.04.37-.04.57l-5.7 15.35a.95.95 0 0 1-.4.49 1 1 0 0 1-1.07.01.9.9 0 0 1-.38-.47l-2.63-6.48Zm3.5 3.35L17.6 6.4 6.7 10.45l4.9 1.95 1.95 4.9Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
