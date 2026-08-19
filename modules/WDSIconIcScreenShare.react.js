__d("WDSIconIcScreenShare.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-screen-share";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 -960 960 960");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", { d: "M440-520h80v56q0 7 6 9.5t11-2.5l89-89q6-6 6-14t-6-14l-89-89q-5-5-11-2.5t-6 9.5v56h-80q-50 0-85 35t-35 85v40q0 17 11.5 28.5T360-400t28.5-11.5T400-440v-40q0-17 11.5-28.5T440-520M80-120q-17 0-28.5-11.5T40-160t11.5-28.5T80-200h800q17 0 28.5 11.5T920-160t-11.5 28.5T880-120zm80-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240zm0-80h640v-440H160zm0 0v-440z" })]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
