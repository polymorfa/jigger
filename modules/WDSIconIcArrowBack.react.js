__d("WDSIconIcArrowBack.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-arrow-back";
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
				d: "m7.82 13 4.9 4.9c.2.2.3.43.3.7a1 1 0 0 1-.32.7c-.2.18-.43.28-.7.29a.92.92 0 0 1-.7-.29l-6.6-6.6a.88.88 0 0 1-.21-.32 1.1 1.1 0 0 1-.07-.38c0-.13.03-.26.07-.38a.88.88 0 0 1 .21-.32l6.6-6.6a.93.93 0 0 1 .69-.27.97.97 0 0 1 1.01.99c0 .27-.1.5-.3.7L7.82 11H19c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 13H7.82Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
