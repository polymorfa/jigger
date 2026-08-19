__d("WAWebShoppingCartRefreshedThinIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "shopping-cart-refreshed-thin";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 17, "0 0 17 20");
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
					d: "M4.5 18c-.42 0-.77-.15-1.06-.44-.3-.3-.44-.65-.44-1.06 0-.42.15-.77.44-1.06.3-.3.65-.44 1.06-.44.42 0 .77.15 1.06.44.3.3.44.65.44 1.06 0 .42-.15.77-.44 1.06-.3.3-.65.44-1.06.44Zm9 0c-.42 0-.77-.15-1.06-.44-.3-.3-.44-.65-.44-1.06 0-.42.15-.77.44-1.06.3-.3.65-.44 1.06-.44.42 0 .77.15 1.06.44.3.3.44.65.44 1.06 0 .42-.15.77-.44 1.06-.3.3-.65.44-1.06.44ZM4.27 5.5 6 9.5h6.27l1.7-4h-9.7ZM3.63 4H15.5c.2 0 .34.08.43.23.09.15.1.31.03.48l-2.32 5.37a1.5 1.5 0 0 1-1.37.92H5.6l-.87 1.5h9.52c.21 0 .4.07.53.21.15.15.22.32.22.54 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22h-9.5a1.4 1.4 0 0 1-1.32-.75c-.29-.5-.28-1 0-1.5l1.1-1.88L1.78 3.5H.75a.73.73 0 0 1-.53-.21.72.72 0 0 1-.22-.54c0-.2.07-.39.22-.53A.72.72 0 0 1 .75 2h1.52c.15 0 .29.04.4.13.13.08.22.19.29.33L3.63 4Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ShoppingCartRefreshedThinIcon = d;
}), 98);
