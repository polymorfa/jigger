__d("WDSIconIcToggleOff.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-toggle-off";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 -960 960 960");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", { d: "M280-240q-100 0-170-70T40-480t70-170 170-70h400q100 0 170 70t70 170-70 170-170 70zm0-80h400q66 0 113-47t47-113-47-113-113-47H280q-66 0-113 47t-47 113 47 113 113 47m85-75q35-35 35-85t-35-85-85-35-85 35-35 85 35 85 85 35 85-35m115-85" })]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
