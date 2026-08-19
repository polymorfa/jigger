__d("WAWebMediaEditorRotateRightIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "media-editor-rotate-right";
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
					fillRule: "evenodd",
					d: "M17.65 8.14c0-.4.32-.72.72-.72h.61c-.01-1.85-.45-3.18-1.32-4.05-.9-.9-2.25-1.34-4.15-1.34h-.12a.6.6 0 0 1-.6-.6V.82c0-.4.32-.73.72-.73 2.4 0 4.26.64 5.52 1.9 1.24 1.24 1.87 3.07 1.9 5.43h.96a.73.73 0 0 1 .56 1.19l-1.77 2.12a.72.72 0 0 1-1.11 0L17.81 8.6a.73.73 0 0 1-.16-.47Zm-3.01.76v8.35c0 1.36-1.1 2.46-2.47 2.46H3.86a2.47 2.47 0 0 1-2.47-2.46V8.9c0-1.37 1.1-2.47 2.47-2.47h8.31c1.37 0 2.47 1.1 2.47 2.47Zm-2.47 8.86a.5.5 0 0 0 .52-.51V8.9a.52.52 0 0 0-.52-.52H3.86a.52.52 0 0 0-.52.52v8.35c0 .28.23.51.52.51h8.31Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MediaEditorRotateRightIcon = d;
}), 98);
