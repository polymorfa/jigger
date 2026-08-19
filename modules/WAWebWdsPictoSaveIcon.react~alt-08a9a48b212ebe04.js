__d("WAWebWdsPictoSaveIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-save";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, null);
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "#25D366",
					stroke: "#111B21",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: 1.5,
					d: "M63.82 75.49 44.46 62.21 25.09 75.49a1.33 1.33 0 0 1-2.09-1.1V19.87A6.88 6.88 0 0 1 29.87 13h29.18a6.88 6.88 0 0 1 6.87 6.87v54.51a1.33 1.33 0 0 1-2.09 1.1l-.01.01Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoSaveIcon = d;
}), 98);
