__d("WDSIconIcSportsBasketball.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-sports-basketball";
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
				d: "M4.05 11H6.9a5.84 5.84 0 0 0-1.65-3.25c-.3.48-.55 1-.76 1.54A7.7 7.7 0 0 0 4.05 11Zm13.05 0h2.85a7.7 7.7 0 0 0-.44-1.71 9.1 9.1 0 0 0-.76-1.54A5.88 5.88 0 0 0 17.1 11ZM5.25 16.25A5.88 5.88 0 0 0 6.9 13H4.05a8.48 8.48 0 0 0 1.2 3.25Zm13.5 0c.3-.48.55-1 .76-1.54a7.4 7.4 0 0 0 .44-1.71H17.1a5.84 5.84 0 0 0 1.65 3.25ZM8.95 11H11V4.05a8.8 8.8 0 0 0-2.46.74A7.5 7.5 0 0 0 6.5 6.2 8.01 8.01 0 0 1 8.95 11ZM13 11h2.05a8.01 8.01 0 0 1 2.45-4.8 7.5 7.5 0 0 0-2.04-1.41A8.8 8.8 0 0 0 13 4.05V11Zm-2 8.95V13H8.95a8.01 8.01 0 0 1-2.45 4.8 7.5 7.5 0 0 0 2.04 1.41c.76.36 1.58.6 2.46.74Zm2 0a8.8 8.8 0 0 0 2.46-.74 7.5 7.5 0 0 0 2.04-1.41 8.01 8.01 0 0 1-2.45-4.8H13v6.95ZM12 22a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
