__d("WAWebOnedriveLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "onedrive-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20.5, 32, "0 5.5 32 20.5");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#0364b8",
						d: "m12.2 11.2 6.72 4.02 4-1.69A6.5 6.5 0 0 1 25.5 13l.44.02A10 10 0 0 0 7.9 10H8a7.96 7.96 0 0 1 4.2 1.2"
					}),
					u.jsx("path", {
						fill: "#0078d4",
						d: "M12.2 11.2A7.96 7.96 0 0 0 8 10h-.1a8 8 0 0 0-6.46 12.57l5.92-2.49 2.63-1.1 5.87-2.48 3.06-1.28Z"
					}),
					u.jsx("path", {
						fill: "#1490df",
						d: "M25.94 13.02a7 7 0 0 0-.44-.02 6.5 6.5 0 0 0-2.58.53l-4 1.69 1.16.7 3.8 2.27 1.67 1 5.67 3.4a6.5 6.5 0 0 0-5.28-9.57"
					}),
					u.jsx("path", {
						fill: "#28a8ea",
						d: "m25.55 19.18-1.66-.99-3.8-2.28-1.17-.7-3.06 1.3-5.87 2.46-2.63 1.11-5.92 2.5A7.99 7.99 0 0 0 8 26h17.5a6.5 6.5 0 0 0 5.72-3.42Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.OnedriveLogoIcon = d;
}), 98);
