__d("WDSIconWdsIcCurrencyRealFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-currency-real-filled";
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
					d: "M7.29 9.27v2.68h1.5c.97 0 1.5-.46 1.5-1.32 0-.86-.54-1.36-1.46-1.36H7.29Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm4-5.49c0 .32-.2.47-.46.47s-.46-.15-.46-.47v-.53a3.33 3.33 0 0 1-1.87-.72c-.36-.3-.57-.67-.57-1 0-.34.23-.54.53-.54.2 0 .32.06.58.36.52.61 1.1.89 1.84.89.98 0 1.54-.45 1.54-1.18 0-.55-.36-.88-1.22-1.09l-1.22-.3c-1.24-.3-1.91-1.03-1.91-2.09 0-1.23.91-2.08 2.34-2.21v-.5c0-.32.2-.47.46-.47s.46.15.46.47v.51c.68.1 1.3.35 1.7.75.33.31.53.67.53.99 0 .3-.21.5-.5.5-.23 0-.4-.1-.63-.37-.5-.62-.96-.86-1.65-.86-.86 0-1.42.45-1.42 1.1 0 .53.37.9 1.1 1.07l1.2.3c1.39.32 2.04.99 2.04 2.09 0 1.28-.92 2.15-2.41 2.3v.53Zm-8.71-3.54v2.34c0 .44-.24.7-.64.7-.42 0-.65-.26-.65-.7V9.2c0-.71.31-1.03 1.06-1.03H9c1.6 0 2.6.9 2.6 2.36 0 1-.53 1.8-1.4 2.14l1.2 2.26c.08.14.12.31.12.45 0 .35-.27.6-.63.6-.34 0-.52-.15-.74-.58l-1.23-2.44H7.29Z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
