__d("WAWebMediaEditorCircleIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "media-editor-circle";
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
				children: [u.jsx("title", { children: n.iconName }), u.jsx("rect", {
					width: 36.23,
					height: 36.23,
					x: 5.89,
					y: 5.89,
					stroke: "currentColor",
					strokeLinejoin: "round",
					strokeWidth: 3,
					rx: 18.11
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MediaEditorCircleIcon = d;
}), 98);
