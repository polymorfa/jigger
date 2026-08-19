__d("WDSIconWdsIcAiFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-ai-filled";
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
				d: "M15.63 4.73a2.73 2.73 0 1 1-5.45 0 2.73 2.73 0 0 1 5.45 0Zm4.47 1.43c.35.11.62.4.7.77l1.17 5.22a1.05 1.05 0 0 1-1.33 1.24l-5.1-1.6a1.05 1.05 0 0 1-.4-1.78l3.93-3.62c.28-.26.67-.34 1.02-.23ZM7.86 9A1.05 1.05 0 0 1 9.8 9l1.39 3.24c.1.25.3.45.55.55L15 14.2c.85.36.85 1.56 0 1.92l-3.25 1.4c-.25.1-.44.3-.55.55l-1.42 3.3c-.36.84-1.55.86-1.93.02l-1.52-3.35c-.11-.23-.3-.42-.54-.52l-3.15-1.39a1.05 1.05 0 0 1 0-1.92l3.29-1.4c.25-.11.44-.31.55-.56L7.87 9Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
