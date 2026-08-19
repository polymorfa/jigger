__d("WAWebDefaultCommunityRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-community-refreshed";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 212, 212, "0 0 48 48");
		return c.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, i.otherProps, {
			name: i.iconName,
			children: c.jsxs("svg", {
				viewBox: i.viewBox,
				height: i.height,
				width: i.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (s || (s = r("stylex")))(i.iconXstyle),
				fill: "none",
				children: [
					c.jsx("title", { children: i.iconName }),
					c.jsx("path", {
						fill: "#606263",
						d: "M15.03 24.9a9.5 9.5 0 0 0-2.97.35c-.59.16-1.26.44-1.82.87a2.96 2.96 0 0 0-1.2 2.02C8.98 28.57 9 29.5 9 30c.02.93.78 2 1.69 2h3.76a5.83 5.83 0 0 1-.37-1.92c-.02-.55-.06-2.04.05-2.83.05-.4.15-.8.28-1.15a5.4 5.4 0 0 1 .6-1.2M33.95 32h3.76c.91 0 1.67-1.07 1.69-2 .01-.51.02-1.43-.02-1.86a2.97 2.97 0 0 0-1.2-2.02 5.44 5.44 0 0 0-1.83-.87 9.5 9.5 0 0 0-2.97-.35 5.17 5.17 0 0 1 .9 2.35c.1.8.06 2.28.04 2.83a5.83 5.83 0 0 1-.37 1.92",
						className: s(n == null ? void 0 : n.primary)
					}),
					c.jsx("path", {
						fill: "#606263",
						fillRule: "evenodd",
						d: "M19.8 24.38a16 16 0 0 1 4.4-.61c1.82 0 3.34.3 4.4.61.54.16 1.2.39 1.78.75.6.36 1.19.9 1.48 1.73q.12.32.17.7c.08.56.05 1.82.03 2.46-.03.91-.78 1.98-1.68 1.98H18.02c-.9 0-1.65-1.07-1.68-1.98-.02-.64-.05-1.9.03-2.46q.05-.38.17-.7a3.4 3.4 0 0 1 1.48-1.73 7.28 7.28 0 0 1 1.78-.75m10.6-4.63a3.37 3.37 0 0 1 3.37-3.37 3.37 3.37 0 0 1 3.38 3.37 3.38 3.38 0 0 1-3.38 3.38 3.38 3.38 0 0 1-3.38-3.38m-10.7-2.24A4.51 4.51 0 0 1 24.2 13a4.51 4.51 0 0 1 4.5 4.51 4.5 4.5 0 0 1-4.5 4.5 4.5 4.5 0 0 1-4.5-4.5m-8.45 2.24a3.37 3.37 0 0 1 3.38-3.37 3.37 3.37 0 0 1 3.38 3.37 3.38 3.38 0 0 1-3.38 3.38 3.38 3.38 0 0 1-3.38-3.38",
						className: s(n == null ? void 0 : n.primary),
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.DefaultCommunityRefreshedIcon = m;
}), 98);
