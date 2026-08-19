__d("WAWebShopFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "shop-filled";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M18.28 5.72c0-3.06-2.66-5.55-5.95-5.55C9.05.17 6.4 2.66 6.4 5.72H3.86c-1.25 0-2.3.91-2.37 2.09L.67 19.96c-.12 1.84 1.38 3.42 3.34 3.53l.23.01h16.19C22.4 23.5 24 22 24 20.17v-.21L23.17 7.8a2.32 2.32 0 0 0-2.37-2.09h-2.53ZM12.33 2.4c1.98 0 3.57 1.49 3.57 3.33H8.77c0-1.84 1.59-3.33 3.56-3.33Zm0 11.11c-2.84 0-5.23-1.77-5.9-4.17-.2-.7.39-1.39 1.18-1.39.58 0 1.04.38 1.2.9a3.62 3.62 0 0 0 3.53 2.44c1.68 0 3.1-1.04 3.52-2.45.16-.5.63-.89 1.2-.89.8 0 1.38.7 1.18 1.4-.67 2.4-3.06 4.16-5.9 4.16Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ShopFilledIcon = d;
}), 98);
