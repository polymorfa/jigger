__d("WAWebFormatInkHighlighterIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "format-ink-highlighter";
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
					d: "M4 24c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59h16c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm10.6-12L12 9.4l-4 4 2.57 2.6 4.03-4Zm-1.17-4L16 10.57l4-3.97L17.4 4l-3.97 4Zm-2.1-.72 5.4 5.4L12 17.43c-.4.4-.87.6-1.41.6-.54 0-1.02-.2-1.41-.6l-.13.1a2.22 2.22 0 0 1-1.27.47H4.71c-.23 0-.4-.1-.48-.3-.1-.2-.06-.38.11-.55l2.3-2.27c-.4-.4-.6-.88-.63-1.44A1.9 1.9 0 0 1 6.59 12l4.72-4.72Zm0 0L16 2.6c.4-.4.87-.6 1.41-.6.54 0 1.02.2 1.41.6l2.6 2.57c.4.4.6.88.6 1.42 0 .54-.2 1.01-.6 1.41l-4.7 4.68-5.4-5.4Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.FormatInkHighlighterIcon = d;
}), 98);
