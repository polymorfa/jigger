__d("WAWebWdsIllBellNotificationsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-bell-notifications";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("circle", {
						cx: 44,
						cy: 69.76,
						r: 10.81,
						fill: "#25D366",
						stroke: "#111B21",
						strokeWidth: 1.5
					}),
					u.jsx("path", {
						fill: "#25D366",
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "M16.57 69.44c-3.72 0-6.07-2.15-6.07-5.32 0-3.76 3.14-6.9 6.3-9.77 2.53-2.32 3.04-7.27 3.62-12.28.72-12.02 4.57-20.69 13.2-23.8 1.5-4.53 5.35-7.94 10.4-7.94 5 0 8.9 3.4 10.4 7.95 8.59 3.1 12.44 11.77 13.16 23.79.58 5.01 1.12 9.96 3.65 12.28 3.13 2.87 6.27 6.01 6.27 9.77 0 3.17-2.32 5.32-6.04 5.32h-54.9Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsIllBellNotificationsIcon = d;
}), 98);
