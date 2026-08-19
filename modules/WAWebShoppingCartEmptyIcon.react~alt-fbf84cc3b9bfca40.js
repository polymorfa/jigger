__d("WAWebShoppingCartEmptyIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "shopping-cart-empty";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 90, 90, null);
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [u.jsx("title", { children: n.iconName }), u.jsxs("g", {
					fill: "currentColor",
					children: [u.jsx("path", { d: "M36.67 55a3.33 3.33 0 1 0 .02 6.66 3.33 3.33 0 0 0-.02-6.66zm-10-25c0 .92.75 1.67 1.66 1.67H30l6 12.65-2.25 4.06a3.34 3.34 0 0 0 2.92 4.95H55c.92 0 1.67-.75 1.67-1.66 0-.92-.75-1.67-1.67-1.67H36.67l1.83-3.33h12.42a3.3 3.3 0 0 0 2.91-1.72l5.97-10.82a1.66 1.66 0 0 0-1.45-2.46H33.68l-1.11-2.39a1.65 1.65 0 0 0-1.5-.95h-2.74c-.91 0-1.66.75-1.66 1.67zm26.66 25a3.33 3.33 0 1 0 .03 6.66 3.33 3.33 0 0 0-.03-6.66z" }), u.jsx("path", { d: "M44.96 2A42.98 42.98 0 0 0 2 45c0 23.74 19.22 43 42.96 43A43.02 43.02 0 0 0 88 45C88 21.26 68.74 2 44.96 2ZM45 90C20.14 90 0 69.86 0 45S20.14 0 45 0s45 20.14 45 45-20.14 45-45 45Z" })]
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ShoppingCartEmptyIcon = d;
}), 98);
