__d("WDSIconIcSearch.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-search";
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
				d: "M9.5 16a6.27 6.27 0 0 1-4.61-1.89A6.27 6.27 0 0 1 3 9.5c0-1.82.63-3.35 1.89-4.61A6.27 6.27 0 0 1 9.5 3c1.82 0 3.35.63 4.61 1.89A6.27 6.27 0 0 1 16 9.5a6.1 6.1 0 0 1-1.3 3.8l5.6 5.6c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27l-5.6-5.6A5.96 5.96 0 0 1 9.5 16Zm0-2c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 14 9.5c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 9.5 5c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 5 9.5c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 9.5 14Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
