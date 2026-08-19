__d("WDSIconIcDirectionsCar.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-directions-car";
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
				d: "M6 19v.5c0 .42-.15.77-.44 1.06-.29.3-.64.44-1.06.44-.42 0-.77-.15-1.06-.44A1.4 1.4 0 0 1 3 19.5v-7.15a2.47 2.47 0 0 1 .1-.67l1.87-5.33c.14-.4.38-.72.73-.97S6.44 5 6.87 5h10.25a1.97 1.97 0 0 1 1.9 1.35l1.88 5.33.08.32.02.35v7.15c0 .42-.15.77-.44 1.06-.29.3-.64.44-1.06.44-.42 0-.77-.15-1.06-.44A1.4 1.4 0 0 1 18 19.5V19H6Zm-.2-9h12.4l-1.05-3H6.85L5.8 10Zm1.7 6c.42 0 .77-.15 1.06-.44.3-.29.44-.64.44-1.06 0-.42-.15-.77-.44-1.06A1.4 1.4 0 0 0 7.5 13c-.42 0-.77.15-1.06.44-.3.29-.44.64-.44 1.06 0 .42.15.77.44 1.06.29.3.64.44 1.06.44Zm9 0c.42 0 .77-.15 1.06-.44.3-.29.44-.64.44-1.06 0-.42-.15-.77-.44-1.06A1.4 1.4 0 0 0 16.5 13c-.42 0-.77.15-1.06.44-.3.29-.44.64-.44 1.06 0 .42.15.77.44 1.06.29.3.64.44 1.06.44ZM5 17h14v-5H5v5Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
