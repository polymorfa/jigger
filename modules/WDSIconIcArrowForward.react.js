__d("WDSIconIcArrowForward.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-arrow-forward";
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
				d: "M16.18 13H5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 12c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h11.18l-4.9-4.9a.92.92 0 0 1-.3-.7 1 1 0 0 1 .32-.7c.2-.18.43-.28.7-.29.27 0 .5.09.7.29l6.6 6.6c.1.1.17.2.21.32a1.2 1.2 0 0 1 0 .76.88.88 0 0 1-.21.32l-6.6 6.6a.93.93 0 0 1-.69.27.97.97 0 0 1-1.01-.99c0-.27.1-.5.3-.7L16.18 13Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
