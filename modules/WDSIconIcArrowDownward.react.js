__d("WDSIconIcArrowDownward.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-arrow-downward";
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
				d: "M11 16.18V5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v11.18l4.9-4.9c.2-.2.43-.3.7-.3a1 1 0 0 1 .7.32c.18.2.28.43.29.7 0 .27-.09.5-.29.7l-6.6 6.6a.8.8 0 0 1-.32.21 1.1 1.1 0 0 1-.38.06 1.1 1.1 0 0 1-.38-.06.88.88 0 0 1-.32-.21l-6.6-6.6a.93.93 0 0 1-.28-.69c0-.27.1-.51.28-.71.2-.2.44-.3.71-.3.28 0 .51.1.71.3L11 16.18Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
