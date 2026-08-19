__d("WDSIconIcShowChart.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-show-chart";
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
				d: "M2.75 17.75a1.03 1.03 0 0 1 0-1.5l5.32-5.32c.39-.39.86-.58 1.43-.58s1.04.2 1.43.58l2.57 2.57 6.4-7.23a.89.89 0 0 1 .71-.32 1 1 0 0 1 1.03.96c0 .26-.08.49-.27.69l-6.47 7.3c-.38.43-.86.66-1.43.69A1.9 1.9 0 0 1 12 15l-2.5-2.5-5.25 5.25a1.03 1.03 0 0 1-1.5 0Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
