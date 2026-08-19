__d("WDSIconIcArrowDropDown.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-arrow-drop-down";
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
				d: "m11.47 14.47-3.62-3.62a.47.47 0 0 1-.15-.35.5.5 0 0 1 .14-.35c.09-.1.21-.15.36-.15h7.6c.15 0 .27.05.36.15.1.1.14.22.14.35 0 .03-.05.15-.15.35l-3.62 3.63a.76.76 0 0 1-.25.17.73.73 0 0 1-.28.05c-.1 0-.2-.02-.28-.05a.76.76 0 0 1-.25-.18Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
