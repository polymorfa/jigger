__d("WDSIconIcBolt.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-bolt";
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
				d: "m10.55 18.2 5.17-6.2h-4l.73-5.67L7.82 13h3.48l-.75 5.2ZM9 15H5.9c-.4 0-.7-.18-.89-.54a.93.93 0 0 1 .06-1.03l7.48-10.75c.17-.24.38-.4.65-.5.27-.08.54-.08.83.02.28.1.49.28.62.53s.18.51.15.8L14 10h3.88c.43 0 .73.2.9.58.18.38.13.74-.16 1.07L10.4 21.5c-.18.22-.4.36-.68.43-.26.06-.52.04-.77-.08a1.3 1.3 0 0 1-.75-1.32L9 15Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
