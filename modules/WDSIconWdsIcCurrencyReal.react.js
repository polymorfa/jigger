__d("WDSIconWdsIcCurrencyReal.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-currency-real";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [
				u.jsx("title", { children: c }),
				u.jsx("path", {
					fill: "currentColor",
					d: "M15.54 16.98c.27 0 .46-.15.46-.47V16c1.5-.16 2.41-1.03 2.41-2.31 0-1.1-.65-1.77-2.04-2.1l-1.2-.29c-.73-.16-1.1-.54-1.1-1.06 0-.66.56-1.11 1.42-1.11.7 0 1.16.24 1.65.86.24.27.4.36.63.36.29 0 .5-.2.5-.5s-.2-.67-.53-.98a3.01 3.01 0 0 0-1.7-.75v-.5c0-.33-.2-.48-.46-.48s-.46.15-.46.47v.5c-1.43.13-2.34.98-2.34 2.21 0 1.06.67 1.8 1.9 2.09l1.23.3c.86.21 1.22.54 1.22 1.1 0 .72-.56 1.17-1.54 1.17-.75 0-1.32-.28-1.84-.9-.26-.3-.38-.35-.58-.35-.3 0-.53.2-.53.54 0 .33.21.7.57 1 .45.4 1.13.65 1.87.72v.53c0 .32.2.47.46.47Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M7.29 15.3v-2.33h1.63l1.23 2.44c.22.43.4.58.74.58.36 0 .63-.25.63-.6a.98.98 0 0 0-.11-.45l-1.21-2.26a2.2 2.2 0 0 0 1.4-2.14c0-1.45-1-2.36-2.6-2.36H7.06C6.3 8.18 6 8.5 6 9.22v6.09c0 .44.24.7.65.7.4 0 .64-.26.64-.7Zm0-3.35V9.27h1.54c.92 0 1.47.5 1.47 1.36 0 .86-.54 1.32-1.5 1.32H7.29Z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10 8a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
