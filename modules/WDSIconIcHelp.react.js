__d("WDSIconIcHelp.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-help";
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
				d: "M11.95 18c.35 0 .65-.12.89-.36s.36-.54.36-.89-.12-.65-.36-.89a1.2 1.2 0 0 0-.89-.36c-.35 0-.65.12-.89.36a1.2 1.2 0 0 0-.36.89c0 .35.12.65.36.89s.54.36.89.36Zm.05 4a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm0-2c2.23 0 4.13-.77 5.68-2.32A7.72 7.72 0 0 0 20 12a7.7 7.7 0 0 0-2.32-5.67A7.72 7.72 0 0 0 12 4a7.7 7.7 0 0 0-5.67 2.33A7.72 7.72 0 0 0 4 12c0 2.23.78 4.13 2.33 5.68A7.72 7.72 0 0 0 12 20Zm.1-12.3c.42 0 .78.13 1.09.4.3.27.46.6.46 1 0 .37-.11.7-.34.97-.22.29-.48.55-.76.8-.38.34-.72.7-1.01 1.1-.3.4-.44.85-.44 1.35 0 .24.09.43.26.6.18.15.38.23.62.23s.46-.08.63-.25c.18-.17.29-.38.34-.63a2 2 0 0 1 .45-.93c.23-.28.48-.54.75-.79.38-.37.71-.77.99-1.2a2.69 2.69 0 0 0-.63-3.54A3.8 3.8 0 0 0 12.1 6a4.2 4.2 0 0 0-1.81.4 2.8 2.8 0 0 0-1.31 1.22.9.9 0 0 0-.12.64c.04.23.16.4.34.52.23.13.48.17.73.12a1 1 0 0 0 .62-.43 1.95 1.95 0 0 1 1.55-.77Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
