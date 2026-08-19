__d("WAWebPreviewGenericIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "preview-generic";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 110, 88, "0 0 88 110");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#FFF",
						fillRule: "evenodd",
						stroke: "#000",
						strokeOpacity: .08,
						d: "M7 2.5h56.93a5.5 5.5 0 0 1 3.89 1.61l15.07 15.07a5.5 5.5 0 0 1 1.61 3.9V104a3.5 3.5 0 0 1-3.5 3.5H7a3.5 3.5 0 0 1-3.5-3.5V6A3.5 3.5 0 0 1 7 2.5z"
					}),
					u.jsx("path", {
						fill: "#FFF",
						stroke: "#000",
						strokeOpacity: .12,
						d: "M65.5 3.5v15a3 3 0 0 0 3 3h15"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PreviewGenericIcon = d;
}), 98);
