__d("WAWebWdsPictoMetaDataChevronIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-meta-data-chevron";
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
						fill: "#25D366",
						d: "m46.93 43.98-8.66 8.68a3.4 3.4 0 0 0 0 4.75 3.34 3.34 0 0 0 4.72 0l11.04-11.05a3.34 3.34 0 0 0 0-4.72L43 30.6a3.34 3.34 0 1 0-4.72 4.73l8.65 8.64Z"
					}),
					u.jsx("path", {
						fill: "#25D366",
						fillRule: "evenodd",
						d: "M44 10.5a33.51 33.51 0 0 1 0 67 33.51 33.51 0 0 1 0-67Zm0 6.7a26.8 26.8 0 1 0 0 53.6 26.8 26.8 0 1 0 0-53.6Z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						stroke: "#111B21",
						strokeWidth: 1.47,
						d: "m46.93 43.98-8.66 8.68a3.4 3.4 0 0 0 0 4.75 3.34 3.34 0 0 0 4.72 0l11.04-11.05a3.34 3.34 0 0 0 0-4.72L43 30.6a3.34 3.34 0 1 0-4.72 4.73l8.65 8.64Z"
					}),
					u.jsx("path", {
						stroke: "#111B21",
						strokeWidth: 1.47,
						d: "M44 10.5a33.51 33.51 0 0 1 0 67 33.51 33.51 0 0 1 0-67Zm0 6.7a26.8 26.8 0 1 0 0 53.6 26.8 26.8 0 1 0 0-53.6Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoMetaDataChevronIcon = d;
}), 98);
