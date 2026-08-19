__d("WAWebVideoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "video";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 28, 46, "0 0 46 28");
		return c.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, i.otherProps, {
			name: i.iconName,
			children: c.jsxs("svg", {
				viewBox: i.viewBox,
				height: i.height,
				width: i.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (s || (s = r("stylex")))(i.iconXstyle),
				fill: "currentColor",
				children: [
					c.jsx("title", { children: i.iconName }),
					c.jsx("path", {
						d: "M.63 3.06C0 4.26 0 5.82 0 8.96v10.08c0 3.14 0 4.7.63 5.9a5.7 5.7 0 0 0 2.54 2.45C4.4 28 6.03 28 9.28 28h14.3c3.26 0 4.88 0 6.12-.61a5.7 5.7 0 0 0 2.54-2.45c.63-1.2.63-2.76.63-5.9V8.96c0-3.14 0-4.7-.63-5.9A5.7 5.7 0 0 0 29.7.6C28.46 0 26.84 0 23.6 0H9.29C6.02 0 4.4 0 3.16.61A5.7 5.7 0 0 0 .63 3.06Z",
						className: s(n == null ? void 0 : n.primary)
					}),
					c.jsx("path", {
						d: "M36.7 8.42c-.4.35-.62.85-.62 1.37v8.42c0 .52.23 1.02.63 1.37l5.19 4.61c1.24 1.1 3.24.25 3.24-1.37V5.18c0-1.62-2-2.47-3.24-1.37l-5.2 4.61Z",
						className: s(n == null ? void 0 : n.secondary)
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.VideoIcon = m;
}), 98);
