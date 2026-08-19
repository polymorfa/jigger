__d("WAWebMultiSelectIconFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "multi-select-icon-filled";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 12, 19, null);
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
						fill: "#0A1014",
						d: "m12.3 6.9-1.08-1.07a.47.47 0 0 0-.35-.14.47.47 0 0 0-.34.14c-.1.09-.14.2-.14.35 0 .14.04.25.13.35l1.43 1.42a.48.48 0 0 0 .7 0l2.82-2.82c.1-.1.14-.21.14-.35a.47.47 0 0 0-.13-.35.47.47 0 0 0-.36-.14.47.47 0 0 0-.34.14zM13 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 8.4 4.05 5.05 5.05 0 0 1 13 1a4.87 4.87 0 0 1 3.54 1.46 5.05 5.05 0 0 1 1.07 5.49A5.05 5.05 0 0 1 13 11",
						className: s(n == null ? void 0 : n.background)
					}),
					c.jsx("path", {
						fill: "#0A1014",
						d: "M8.72 10.2A4.87 4.87 0 0 1 6 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 1.4 4.05 5.05 5.05 0 0 1 6 1a4.87 4.87 0 0 1 2.71.8 5.98 5.98 0 0 0-1.65 3.34L5.3 6.9 4.22 5.83a.47.47 0 0 0-.34-.14.47.47 0 0 0-.35.14c-.1.09-.14.2-.14.35 0 .14.04.25.13.35l1.43 1.42a.48.48 0 0 0 .7 0l1.38-1.38a5.93 5.93 0 0 0 1.69 3.63",
						className: s(n == null ? void 0 : n.background)
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.MultiSelectIconFilledIcon = m;
}), 98);
