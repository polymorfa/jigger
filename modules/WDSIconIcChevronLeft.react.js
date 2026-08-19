__d("WDSIconIcChevronLeft.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-chevron-left";
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
				d: "m10.8 12 3.9 3.9c.18.18.28.42.28.7a.95.95 0 0 1-.97.97.95.95 0 0 1-.71-.27l-4.6-4.6a.88.88 0 0 1-.21-.32 1.1 1.1 0 0 1 0-.75.88.88 0 0 1 .21-.33l4.6-4.6a.95.95 0 0 1 .7-.27c.28 0 .52.09.7.27.18.18.28.42.28.7 0 .28-.1.52-.28.7L10.8 12Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
