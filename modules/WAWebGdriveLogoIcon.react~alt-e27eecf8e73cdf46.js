__d("WAWebGdriveLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gdrive-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 78, 87.3, "0 0 87.3 78");
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
						fill: "#0066da",
						d: "m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z"
					}),
					u.jsx("path", {
						fill: "#00ac47",
						d: "M43.65 25 29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44A9.06 9.06 0 0 0 0 53h27.5z"
					}),
					u.jsx("path", {
						fill: "#ea4335",
						d: "M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.5z"
					}),
					u.jsx("path", {
						fill: "#00832d",
						d: "M43.65 25 57.4 1.2A8.8 8.8 0 0 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z"
					}),
					u.jsx("path", {
						fill: "#2684fc",
						d: "M59.8 53H27.5L13.75 76.8a8.8 8.8 0 0 0 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
					}),
					u.jsx("path", {
						fill: "#ffba00",
						d: "m73.4 26.5-12.7-22a9.08 9.08 0 0 0-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.GdriveLogoIcon = d;
}), 98);
