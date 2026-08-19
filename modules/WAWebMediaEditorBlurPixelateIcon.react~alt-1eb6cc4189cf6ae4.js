__d("WAWebMediaEditorBlurPixelateIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "media-editor-blur-pixelate";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
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
					fill: "currentColor",
					d: "M4.5 4.5h3v3h-3zm0 6h3v3h-3zm0 6h3v3h-3zm3-9h3v3h-3zm0 6h3v3h-3zm6-6h3v3h-3zm0 6h3v3h-3zm-3-9h3v3h-3zm0 6h3v3h-3zm0 6h3v3h-3zm6-12h3v3h-3zm0 6h3v3h-3zm0 6h3v3h-3z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MediaEditorBlurPixelateIcon = d;
}), 98);
