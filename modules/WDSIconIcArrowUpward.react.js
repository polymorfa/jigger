__d("WDSIconIcArrowUpward.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-arrow-upward";
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
				d: "m11 7.83-4.9 4.9c-.2.2-.43.3-.7.28a1 1 0 0 1-.7-.31c-.18-.2-.28-.43-.29-.7 0-.27.09-.5.29-.7l6.6-6.6c.1-.1.2-.17.32-.21a1.2 1.2 0 0 1 .76 0c.11.04.22.11.32.21l6.6 6.6c.18.18.27.41.27.69a.97.97 0 0 1-.99 1.01.97.97 0 0 1-.7-.3L13 7.83V19c0 .28-.1.52-.29.71A.94.94 0 0 1 12 20a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 19V7.83Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
