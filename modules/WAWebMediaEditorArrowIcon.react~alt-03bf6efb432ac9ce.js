__d("WAWebMediaEditorArrowIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "media-editor-arrow";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 48, 48, "0 0 48 48");
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
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeWidth: 3,
						d: "M8.44 39.56 39.56 8.44"
					}),
					u.jsx("path", {
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 3,
						d: "M39.61 8.5 28.3 11.33M39.61 8.5l-2.83 11.3"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MediaEditorArrowIcon = d;
}), 98);
