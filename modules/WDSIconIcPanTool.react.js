__d("WDSIconIcPanTool.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-pan-tool";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 -960 960 960");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", { d: "M402-40q-30 0-56-13.5T303-92L67-438q-8-12-7-26t12-24q19-19 45-22t47 12l116 81v-383q0-17 11.5-28.5T320-840t28.5 11.5T360-800v460q0 24-21.5 35.5T297-307l-85-60 157 229q5 8 14 13t19 5h278q33 0 56.5-23.5T760-200v-560q0-17 11.5-28.5T800-800t28.5 11.5T840-760v560q0 66-47 113T680-40zm106.5-868.5Q520-897 520-880v360q0 17-11.5 28.5T480-480t-28.5-11.5T440-520v-360q0-17 11.5-28.5T480-920t28.5 11.5m160 40Q680-857 680-840v320q0 17-11.5 28.5T640-480t-28.5-11.5T600-520v-320q0-17 11.5-28.5T640-880t28.5 11.5M486-300" })]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
