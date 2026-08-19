__d("WDSIconIcPalette.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-palette";
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
				d: "M12 22a10.14 10.14 0 0 1-9.21-6.13A9.68 9.68 0 0 1 2 12c0-1.38.27-2.68.81-3.9a10.13 10.13 0 0 1 5.44-5.31 10.36 10.36 0 0 1 10.84 1.8 8.9 8.9 0 0 1 2.12 2.87 8.2 8.2 0 0 1 .79 3.59c0 1.92-.58 3.39-1.75 4.41A6.21 6.21 0 0 1 16 17h-1.85c-.15 0-.25.04-.31.13a.47.47 0 0 0-.09.27c0 .2.13.49.38.86.24.38.37.8.37 1.29 0 .83-.23 1.45-.69 1.85-.46.4-1.06.6-1.81.6Zm-5.5-9A1.46 1.46 0 0 0 8 11.5 1.46 1.46 0 0 0 6.5 10 1.46 1.46 0 0 0 5 11.5 1.46 1.46 0 0 0 6.5 13Zm3-4A1.46 1.46 0 0 0 11 7.5 1.46 1.46 0 0 0 9.5 6 1.46 1.46 0 0 0 8 7.5 1.46 1.46 0 0 0 9.5 9Zm5 0A1.46 1.46 0 0 0 16 7.5 1.46 1.46 0 0 0 14.5 6 1.46 1.46 0 0 0 13 7.5 1.46 1.46 0 0 0 14.5 9Zm3 4a1.46 1.46 0 0 0 1.5-1.5 1.46 1.46 0 0 0-1.5-1.5 1.46 1.46 0 0 0-1.5 1.5 1.46 1.46 0 0 0 1.5 1.5ZM12 20c.15 0 .27-.04.36-.13.1-.08.14-.19.14-.32 0-.23-.13-.5-.38-.82-.24-.32-.37-.8-.37-1.43 0-.7.24-1.26.72-1.68a2.62 2.62 0 0 1 1.78-.62H16a4.3 4.3 0 0 0 2.82-.96c.79-.64 1.18-1.64 1.18-2.99a6.4 6.4 0 0 0-2.31-5.04A8.09 8.09 0 0 0 12.2 4C9.93 4 8 4.78 6.4 6.33A7.6 7.6 0 0 0 4 12c0 2.22.78 4.1 2.34 5.66A7.71 7.71 0 0 0 12 20Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
