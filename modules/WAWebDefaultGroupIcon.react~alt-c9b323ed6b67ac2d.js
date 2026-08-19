__d("WAWebDefaultGroupIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-group";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 212, 212, "0 0 212 212");
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
						fill: "#DFE5E7",
						d: "M105.95.25C164.32.25 211.64 47.6 211.64 106s-47.32 105.75-105.7 105.75C47.57 211.75.25 164.4.25 106S47.57.25 105.95.25Z",
						className: s(n == null ? void 0 : n.background)
					}),
					c.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M102.28 77.29c0 10.67-8.42 19.28-18.94 19.28-10.51 0-19-8.61-19-19.28 0-10.68 8.49-19.29 19-19.29 10.52 0 18.94 8.61 18.94 19.29Zm48.07 2.85c0 9.8-7.74 17.72-17.4 17.72a17.56 17.56 0 0 1-17.45-17.72c0-9.8 7.8-17.71 17.45-17.71 9.66 0 17.4 7.91 17.4 17.71Zm-67.01 29.29c-14.76 0-44.34 7.52-44.34 22.5v11.78c0 3.54 2.85 4.29 6.33 4.29h76.02c3.48 0 6.33-.75 6.33-4.29v-11.78c0-14.98-29.58-22.5-44.34-22.5Zm43.46 1.42 2.2.04c14.76 0 45 6.06 45 21.04v9.64a6.4 6.4 0 0 1-6.33 6.43h-32.82c.7-2 1.15-4.18 1.15-6.43l-.25-10.5c0-9.56-5.61-13.21-11.59-17.1a84.1 84.1 0 0 1-4.22-2.9.6.6 0 0 0-.2-.18c1.6-.14 4.75-.08 7.06-.04Z",
						className: s(n == null ? void 0 : n.primary),
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.DefaultGroupIcon = m;
}), 98);
