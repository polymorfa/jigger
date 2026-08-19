__d("WDSIconIcVisibilityOn.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-visibility-on";
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
				d: "M12 16c1.25 0 2.31-.44 3.19-1.31a4.34 4.34 0 0 0 1.31-3.19c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 12 7c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 7.5 11.5c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 12 16Zm0-1.8a2.6 2.6 0 0 1-1.91-.79 2.6 2.6 0 0 1-.79-1.91c0-.75.26-1.39.79-1.91A2.6 2.6 0 0 1 12 8.8c.75 0 1.39.26 1.91.79.53.52.79 1.16.79 1.91a2.6 2.6 0 0 1-.79 1.91 2.6 2.6 0 0 1-1.91.79Zm0 4.8c-2.43 0-4.65-.68-6.65-2.04A11.6 11.6 0 0 1 1 11.5a11.6 11.6 0 0 1 4.35-5.46C7.35 4.68 9.57 4 12 4c2.43 0 4.65.68 6.65 2.04A11.6 11.6 0 0 1 23 11.5a11.6 11.6 0 0 1-4.35 5.46C16.65 18.32 14.43 19 12 19Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
