__d("WAWebWdsPictoMetaDataDoubleChevronIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-meta-data-double-chevron";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 70, 70, "0 0 70 70");
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
						fill: "#25D366",
						d: "m19.84 43.66 8.66-8.68-8.65-8.64a3.34 3.34 0 1 1 4.72-4.73L35.6 32.64a3.34 3.34 0 0 1 0 4.72L24.56 48.41a3.34 3.34 0 0 1-4.72 0 3.4 3.4 0 0 1 0-4.75Z"
					}),
					u.jsx("path", {
						fill: "#25D366",
						d: "m45.25 34.98-8.66 8.68a3.4 3.4 0 0 0 0 4.75 3.34 3.34 0 0 0 4.72 0l11.04-11.05a3.34 3.34 0 0 0 0-4.72L41.32 21.6a3.34 3.34 0 1 0-4.72 4.73l8.65 8.64Z"
					}),
					u.jsx("path", {
						fill: "#25D366",
						fillRule: "evenodd",
						d: "M68.5 35a33.51 33.51 0 0 0-67 0 33.51 33.51 0 0 0 67 0ZM8.2 35a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1-53.6 0Z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "m19.84 43.66 8.66-8.68-8.65-8.64a3.34 3.34 0 1 1 4.72-4.73L35.6 32.64a3.34 3.34 0 0 1 0 4.72L24.56 48.41a3.34 3.34 0 0 1-4.72 0 3.4 3.4 0 0 1 0-4.75Z"
					}),
					u.jsx("path", {
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "m45.25 34.98-8.66 8.68a3.4 3.4 0 0 0 0 4.75 3.34 3.34 0 0 0 4.72 0l11.04-11.05a3.34 3.34 0 0 0 0-4.72L41.32 21.6a3.34 3.34 0 1 0-4.72 4.73l8.65 8.64Z"
					}),
					u.jsx("path", {
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "M68.5 35a33.51 33.51 0 0 0-67 0 33.51 33.51 0 0 0 67 0ZM8.2 35a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1-53.6 0Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoMetaDataDoubleChevronIcon = d;
}), 98);
