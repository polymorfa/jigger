__d("WDSIconIcCheck.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-check";
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
				d: "m9.55 15.15 8.47-8.48c.2-.2.44-.3.72-.3.27 0 .51.1.71.3.2.2.3.44.3.72 0 .27-.1.51-.3.71l-9.2 9.2a.96.96 0 0 1-1.4 0L4.55 13a.93.93 0 0 1-.29-.71c.01-.28.12-.51.32-.71a.97.97 0 0 1 1.42 0l3.55 3.57Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
