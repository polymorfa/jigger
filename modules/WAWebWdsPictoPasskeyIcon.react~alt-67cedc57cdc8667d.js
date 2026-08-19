__d("WAWebWdsPictoPasskeyIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-passkey";
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
					u.jsx("path", {
						fill: "#e6ffda",
						stroke: "#111b21",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M72.46 49.27A11.11 11.11 0 1 0 57.3 59.6v14l4.05 3.4 6.38-5.78-2.32-3.54v-2.14l2.32-2.8-2.32-3.04v-.11a11.1 11.1 0 0 0 7.05-10.34zm-11.11-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
					}),
					u.jsx("path", {
						fill: "#25d366",
						d: "M40.4 39.42a14.2 14.2 0 1 0 .02-28.4 14.2 14.2 0 0 0-.02 28.4m5.53 4.51q-.98 2.5-1 5.32c0 6.2 4.25 12 7.98 13.64v5.62h-32a5.3 5.3 0 0 1-5.3-5.16c-.17-5.86.01-7.29.08-7.77q.15-1.1.54-2.2c1.93-5.38 7.98-7.14 10.28-7.8l.02-.01a51 51 0 0 1 19.4-1.64"
					}),
					u.jsx("path", {
						stroke: "#111b21",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M40.4 39.42a14.2 14.2 0 1 0 .02-28.4 14.2 14.2 0 0 0-.02 28.4Zm5.53 4.51q-.98 2.5-1 5.32c0 6.2 4.25 12 7.98 13.64v5.62h-32a5.3 5.3 0 0 1-5.3-5.16c-.17-5.86.01-7.29.08-7.77q.15-1.1.54-2.2c1.93-5.38 7.98-7.14 10.28-7.8l.02-.01a51 51 0 0 1 19.4-1.64Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoPasskeyIcon = d;
}), 98);
