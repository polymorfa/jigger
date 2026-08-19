__d("WAWebVideoIosIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-ios";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 28, 29, "0 0 29 28");
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
					d: "M5.78 23.09c-2.62 0-4.19-1.53-4.19-4.14V9.57c0-2.62 1.69-4.15 4.2-4.15H17c2.62 0 4.19 1.53 4.19 4.15v1.47l4.06-3.43c.43-.36.9-.6 1.34-.6.95 0 1.57.7 1.57 1.7v11.1c0 1-.62 1.7-1.57 1.7-.44 0-.91-.25-1.34-.6l-4.06-3.44v1.48c0 2.61-1.57 4.14-4.2 4.14H5.79Zm.3-1.62h10.63c1.75 0 2.76-.9 2.76-2.78V9.82c0-1.86-1.01-2.77-2.76-2.77H6.08c-1.76 0-2.76.91-2.76 2.77v8.87c0 1.87 1 2.78 2.76 2.78Zm19.98-2.03c.1.07.16.13.26.13.13 0 .18-.1.18-.26V9.2c0-.16-.05-.25-.18-.25-.1 0-.16.04-.26.12l-4.86 4.01v2.35l4.86 4.01Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.VideoIosIcon = d;
}), 98);
