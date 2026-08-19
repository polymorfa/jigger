__d("WDSIconIcTrendingUp.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-trending-up";
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
				d: "M2.7 17.63a.93.93 0 0 1-.29-.72c.01-.27.1-.5.29-.68l5.27-5.36c.39-.38.86-.57 1.43-.57s1.04.2 1.42.57l2.58 2.6 5.2-5.14H17a.97.97 0 0 1-.71-.3.97.97 0 0 1-.29-.7.98.98 0 0 1 1-1h4a.97.97 0 0 1 1 1v4c0 .28-.1.52-.29.7-.19.2-.43.3-.71.3a.97.97 0 0 1-.71-.3.97.97 0 0 1-.29-.7v-1.6l-5.18 5.17c-.38.38-.85.57-1.42.57s-1.04-.19-1.43-.57L9.4 12.32l-5.3 5.3a.95.95 0 0 1-.7.28.95.95 0 0 1-.7-.27Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
