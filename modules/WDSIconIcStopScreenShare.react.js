__d("WDSIconIcStopScreenShare.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-stop-screen-share";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 -960 960 960");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", { d: "M577-497 474-600h46v-56q0-7 6-9.5t11 2.5l89 89q6 6 6 14t-6 14zm251 251-74-74h46v-440H314l-80-80h566q33 0 56.5 23.5T880-760v440q0 26-14.5 45.5T828-246M728-120H80q-17 0-28.5-11.5T40-160t11.5-28.5T80-200h567l-40-40H160q-33 0-56.5-23.5T80-320v-446l-25-26q-11-12-11-28t12-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28-28 11-28-11zM400-446v6q0 17-11.5 28.5T360-400t-28.5-11.5T320-440v-40q0-11 1-21t6-19L160-687v367h366zm-57-58" })]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
