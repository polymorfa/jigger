__d("WDSIconIcDuration.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-duration";
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
				d: "M8 20h8v-3q0-1.65-1.18-2.83T12 13t-2.83 1.18T8 17zm6.83-10.18Q16 8.65 16 7V4H8v3q0 1.65 1.18 2.83T12 11t2.83-1.18M5 22a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 21q0-.42.29-.71A.97.97 0 0 1 5 20h1v-3q0-1.52.71-2.86A5.57 5.57 0 0 1 8.7 12a5.57 5.57 0 0 1-1.99-2.14A6 6 0 0 1 6 7V4H5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 3q0-.42.29-.71A.97.97 0 0 1 5 2h14q.42 0 .71.29T20 3q0 .42-.29.71A.97.97 0 0 1 19 4h-1v3q0 1.52-.71 2.86A5.57 5.57 0 0 1 15.3 12a5.57 5.57 0 0 1 1.99 2.14Q18 15.48 18 17v3h1q.42 0 .71.29T20 21q0 .42-.29.71A.97.97 0 0 1 19 22z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
