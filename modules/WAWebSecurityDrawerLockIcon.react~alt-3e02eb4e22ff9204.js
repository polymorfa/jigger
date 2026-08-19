__d("WAWebSecurityDrawerLockIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "security-drawer-lock";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 84, 84, "0 0 84 84");
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
						cx: 42,
						cy: 42,
						r: 42,
						fill: "#07CD9E"
					}),
					u.jsx("path", {
						fill: "white",
						d: "M53.24 33.43c0-2.08-.5-3.99-1.52-5.73a11.1 11.1 0 0 0-4.1-4.15 10.69 10.69 0 0 0-5.6-1.55 11.34 11.34 0 0 0-11.25 11.43v4.38a5.66 5.66 0 0 0-2.94 2.66c-.3.56-.51 1.18-.64 1.86C27.06 43 27 44 27 45.35v8.53c0 1.34.06 2.34.19 3.02.13.68.34 1.3.64 1.86A5.9 5.9 0 0 0 32 61.81c.69.13 1.68.19 2.98.19h14.06c1.3 0 2.28-.06 2.95-.2a5.9 5.9 0 0 0 4.19-3.04c.3-.56.51-1.18.64-1.86.13-.68.19-1.68.19-3.02v-8.53c0-1.34-.06-2.35-.19-3.02a6.44 6.44 0 0 0-.64-1.86 5.67 5.67 0 0 0-2.93-2.66v-4.38Zm-17.98 0c0-1.24.3-2.38.9-3.43A6.73 6.73 0 0 1 42 26.57 6.73 6.73 0 0 1 47.84 30c.6 1.05.9 2.2.9 3.43v3.8H35.26v-3.8Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SecurityDrawerLockIcon = d;
}), 98);
