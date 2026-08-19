__d("WAWebDeactivateBadgeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "deactivate-badge";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 42, 42, "0 0 42 42");
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
						fill: "#ea0038",
						stroke: "white",
						strokeWidth: 3,
						d: "M22.06 22.76 21 21.7l-1.06 1.06L15.7 27c-.2.2-.5.2-.7 0a.5.5 0 0 1 0-.7l4.24-4.24L20.3 21l-1.06-1.06-4.26-4.24a.5.5 0 0 1 0-.7c.2-.2.5-.2.7 0l4.26 4.24L21 20.3l1.06-1.06L26.3 15c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-4.24 4.24L21.7 21l1.06 1.06L27 26.3l.01.01c.2.2.2.52 0 .7-.18.2-.5.2-.69 0l-4.26-4.25ZM26.8 1.5H15.2c-1.46 0-2.86.58-3.9 1.62l-8.2 8.2a5.5 5.5 0 0 0-1.6 3.88v11.6c0 1.45.57 2.86 1.63 3.89l8.18 8.18a5.43 5.43 0 0 0 3.89 1.63h11.6c1.45 0 2.86-.57 3.89-1.63l8.18-8.18a5.43 5.43 0 0 0 1.63-3.89V15.2c0-1.45-.57-2.86-1.63-3.89L30.7 3.13a5.43 5.43 0 0 0-3.9-1.63Z"
					}),
					u.jsx("path", {
						fill: "white",
						d: "M28.08 28.08a2 2 0 0 1-2.82 0L21 23.82l-4.24 4.24a2 2 0 1 1-2.82-2.82L18.18 21l-4.26-4.24a2 2 0 1 1 2.82-2.82L21 18.18l4.24-4.24a2 2 0 1 1 2.82 2.82L23.82 21l4.24 4.24a2 2 0 0 1 .02 2.84Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.DeactivateBadgeIcon = d;
}), 98);
