__d("WDSIconIcVisibility.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-visibility";
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
				d: "M12 16c1.25 0 2.31-.44 3.19-1.31a4.34 4.34 0 0 0 1.31-3.19c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 12 7c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 7.5 11.5c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 12 16Zm0-1.8a2.6 2.6 0 0 1-1.91-.79 2.6 2.6 0 0 1-.79-1.91c0-.75.26-1.39.79-1.91A2.6 2.6 0 0 1 12 8.8c.75 0 1.39.26 1.91.79.53.52.79 1.16.79 1.91a2.6 2.6 0 0 1-.79 1.91 2.6 2.6 0 0 1-1.91.79Zm0 4.8c-2.23 0-4.27-.6-6.11-1.8a12.93 12.93 0 0 1-4.37-4.75 2 2 0 0 1-.25-.95 1.9 1.9 0 0 1 .25-.95A12.93 12.93 0 0 1 5.9 5.8 10.9 10.9 0 0 1 12 4c2.23 0 4.27.6 6.11 1.8 1.84 1.2 3.3 2.78 4.37 4.75a2 2 0 0 1 .25.95 1.9 1.9 0 0 1-.25.95 12.93 12.93 0 0 1-4.37 4.75A10.96 10.96 0 0 1 12 19Zm0-2a9.77 9.77 0 0 0 8.8-5.5 9.77 9.77 0 0 0-17.6 0A9.77 9.77 0 0 0 12 17Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
