__d("WAWebHighlyForwardedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "highly-forwarded";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 16, 20, "0 0 20 16");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "currentColor",
						fillOpacity: .25,
						d: "M13.6 5.26h.03l.04-1.44c.02-.85.52-1.05 1.11-.44l3.63 3.69c.3.3.3.8.01 1.11l-3.65 3.85c-.59.61-1.06.42-1.06-.43V9.94l1.16-1.23c.58-.6.57-1.58-.02-2.18l-1.24-1.27Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillOpacity: .4,
						d: "M9.56 3.82c.02-.85.52-1.05 1.1-.44l3.64 3.69c.3.3.3.8.01 1.11l-3.65 3.85c-.59.61-1.07.42-1.07-.43V9.87s-4.56-.37-7.16 2.51c-.6.52-.77.58-.96.48-.14-.12-.19-.48.26-1.6 1.83-5.56 7.79-6 7.79-6l.04-1.44Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.HighlyForwardedIcon = d;
}), 98);
