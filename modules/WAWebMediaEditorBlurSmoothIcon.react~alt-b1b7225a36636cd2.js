__d("WAWebMediaEditorBlurSmoothIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "media-editor-blur-smooth";
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
					d: "M6 13a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm0 4a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm0-8a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm-3 .5a.5.5 0 0 0-.5.5c0 .28.22.5.5.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5ZM6 5a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm15 5.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5c0 .28.22.5.5.5ZM14 7a1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1 1 1 0 0 0 1 1Zm0-3.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5c0 .28.22.5.5.5Zm-11 10a.5.5 0 0 0-.5.5c0 .28.22.5.5.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5Zm7 7a.5.5 0 0 0-.5.5c0 .28.22.5.5.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5Zm0-17a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5c0 .28.22.5.5.5ZM10 7a1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1 1 1 0 0 0 1 1Zm0 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm8 .5a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm0 4a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm0-8a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm0-4a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm3 8.5a.5.5 0 0 0-.5.5c0 .28.22.5.5.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5ZM14 17a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm0 3.5a.5.5 0 0 0-.5.5c0 .28.22.5.5.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5Zm-4-12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 8.5a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm4-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MediaEditorBlurSmoothIcon = d;
}), 98);
