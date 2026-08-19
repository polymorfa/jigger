__d("WDSIconIcLanguage.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-language";
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
				d: "M12 22a10.14 10.14 0 0 1-9.21-6.13A9.68 9.68 0 0 1 2 12c0-1.38.26-2.68.79-3.89A10.18 10.18 0 0 1 8.13 2.8 9.68 9.68 0 0 1 12 2a9.6 9.6 0 0 1 3.89.79A10.18 10.18 0 0 1 21.2 8.1c.53 1.21.79 2.5.79 3.89a10.14 10.14 0 0 1-6.11 9.21c-1.21.53-2.5.79-3.89.79Zm0-2.05A12.7 12.7 0 0 0 13.9 16h-3.8a11.83 11.83 0 0 0 1.9 3.95Zm-2.6-.4A13.86 13.86 0 0 1 8.05 16H5.1a8.3 8.3 0 0 0 1.81 2.18 7.2 7.2 0 0 0 2.49 1.37Zm5.2 0a7.2 7.2 0 0 0 2.49-1.38A8.3 8.3 0 0 0 18.9 16h-2.95a14.69 14.69 0 0 1-1.35 3.55ZM4.25 14h3.4a13.78 13.78 0 0 1 0-4h-3.4a8.56 8.56 0 0 0-.19 3.01c.04.33.1.66.19.99Zm5.4 0h4.7a13.78 13.78 0 0 0 0-4h-4.7a13.78 13.78 0 0 0 0 4Zm6.7 0h3.4a8.57 8.57 0 0 0 .19-3.01 6.9 6.9 0 0 0-.19-.99h-3.4a13.78 13.78 0 0 1 0 4Zm-.4-6h2.95a8.3 8.3 0 0 0-1.81-2.17 7.2 7.2 0 0 0-2.49-1.38A13.86 13.86 0 0 1 15.95 8ZM10.1 8h3.8A11.83 11.83 0 0 0 12 4.05 12.7 12.7 0 0 0 10.1 8Zm-5 0h2.95A14.68 14.68 0 0 1 9.4 4.45a7.2 7.2 0 0 0-2.49 1.38A8.3 8.3 0 0 0 5.1 8Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
