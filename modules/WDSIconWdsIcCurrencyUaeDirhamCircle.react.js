__d("WDSIconWdsIcCurrencyUaeDirhamCircle.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-currency-uae-dirham-circle";
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
				d: "M8.02 15.64c.36-.03.83.05 1.06.35.12.17-.03.67-.2.77-.18.1-.42-.04-.6-.1-.27-.1-.8.11-.6.45.2.33.73.31 1.07.26.28-.05.85-.32.78.22-.05.4-.08.51-.45.67-.74.16-1.51.37-2.24.56-.18-.08-.24-.13-.26-.33a.74.74 0 0 1 .16-.53v-.01c.1-.12.2-.08.26-.16-.07-.1-.24-.34-.27-.44-.2-.96.48-1.51 1.29-1.7Zm2.95-2.3a.92.92 0 1 1 .17 1.83.92.92 0 0 1-.17-1.83ZM16 8.48c.3 0 .63.28.81.5a5.69 5.69 0 0 1 1.4 3.86c-.05.6-.29 1.18-.76 1.55a3.9 3.9 0 0 1-2.6.6c-.7-.08-1.24-.27-1.68-.82a1.89 1.89 0 0 1-.35-1.07c-.04-.52.15-1.22.8-1.23.12 0 .23.04.33.1.4.24.16.61.44.89.24.24.74.26 1.07.25.45-.03.9-.1 1.23-.44 0-.7-.59-1.76-1.07-2.29-.6-.66-.65-.92-.02-1.67a.8.8 0 0 1 .4-.23Zm-7.99-3.3c.56-.05.75.24.77.75.04 1.41.02 2.82.02 4.23l.01 1.8c0 .47.02 1.03-.01 1.5-.02.28-.08.55-.18.8a1.2 1.2 0 0 1-.67.74h-.4c-.2-.1-.36-.25-.37-.5-.01-.37 0-.75 0-1.12v-2.54c-.01-1.5-.07-3.02-.04-4.52.02-.59.25-1.04.87-1.14Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
