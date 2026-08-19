__d("WAWebWdsIllFavoritesIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "wds-ill-favorites";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 152, 228, "0 0 228 152");
		return c.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, i.otherProps, {
			name: i.iconName,
			children: c.jsxs("svg", {
				viewBox: i.viewBox,
				height: i.height,
				width: i.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (s || (s = r("stylex")))(i.iconXstyle),
				fill: "none",
				strokeWidth: "1.5",
				children: [
					c.jsx("title", { children: i.iconName }),
					c.jsx("path", {
						fill: "#25D366",
						stroke: "#111B21",
						d: "m57.17 40.42-6.46 70.79a21.41 21.41 0 0 0 19.37 23.27l48.26 4.4a21.41 21.41 0 0 0 23.27-19.37l6.46-70.78a21.41 21.41 0 0 0-19.37-23.27l-48.26-4.41a21.41 21.41 0 0 0-23.27 19.37Z",
						className: s(n == null ? void 0 : n.backpage)
					}),
					c.jsx("path", {
						fill: "#AFE966",
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M172.5 58.07c-12.95-1.96-15.67 12.17-15.67 12.17.67-1.39-3.52-13.97-16.26-11.15-7.58 1.63-10.51 7.87-10.05 13.73.7 9.2 8.7 16.68 17.35 21.95 1.7 1.11 9.99 5.6 9.99 5.6s.05-.14.25-.23l.09.2s8.02-5.05 9.74-6.2c8.43-5.71 15.9-13.71 15.88-23-.12-5.9-3.63-11.89-11.32-13.07Z",
						className: s(n == null ? void 0 : n.heart)
					}),
					c.jsx("path", {
						fill: "#E6FFDA",
						stroke: "#111B21",
						d: "M100.46 13.35 52.7 21.58a21.41 21.41 0 0 0-17.46 24.74l12.08 70.04a21.4 21.4 0 0 0 24.73 17.47l47.76-8.24a21.41 21.41 0 0 0 17.46-24.73L125.19 30.8a21.41 21.41 0 0 0-24.73-17.46Z"
					}),
					c.jsx("path", {
						fill: "#E6FFDA",
						fillRule: "evenodd",
						stroke: "#111B21",
						d: "M104.02 50.68a19.89 19.89 0 1 1-39.18 6.86 19.89 19.89 0 0 1 39.18-6.86Z",
						clipRule: "evenodd"
					}),
					c.jsx("path", {
						fill: "#E6FFDA",
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M85.51 58.7a9 9 0 1 0-3.1-17.72 9 9 0 0 0 3.1 17.72Z",
						className: s(n == null ? void 0 : n.avatar)
					}),
					c.jsx("path", {
						fill: "#E6FFDA",
						fillRule: "evenodd",
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M87.85 73.7a19.84 19.84 0 0 0 13.44-9.06c-2-1.96-4.99-2.29-6.25-2.43a32.25 32.25 0 0 0-17.32 3.03c-1.19.59-4.12 2.02-5.23 4.79a19.82 19.82 0 0 0 15.35 3.67h.01Z",
						className: s(n == null ? void 0 : n.avatar),
						clipRule: "evenodd"
					}),
					c.jsx("path", {
						stroke: "#111B21",
						strokeLinecap: "round",
						d: "m67.15 88.76 42.2-7.27M68.8 98.31l42.19-7.27m-27.8 14.62 18.31-3.15"
					}),
					c.jsx("path", {
						fill: "white",
						stroke: "#111B21",
						d: "m33.26 61 9.55-1.65a3.64 3.64 0 0 1 1.24 7.16l-9.55 1.65A3.64 3.64 0 0 1 33.26 61Zm3.02 17.51 9.55-1.65a3.64 3.64 0 0 1 1.24 7.16l-9.55 1.65a3.64 3.64 0 0 1-1.24-7.16Zm3.03 17.51 9.55-1.65a3.64 3.64 0 0 1 1.24 7.16l-9.55 1.65a3.64 3.64 0 0 1-1.24-7.16Z"
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.WdsIllFavoritesIcon = m;
}), 98);
