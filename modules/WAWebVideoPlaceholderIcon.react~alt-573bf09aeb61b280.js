__d("WAWebVideoPlaceholderIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-placeholder";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 28, 46, "0 0 46 28");
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
					d: "M.63 3.06C0 4.26 0 5.82 0 8.96v10.08c0 3.14 0 4.7.63 5.9a5.7 5.7 0 0 0 2.54 2.45C4.4 28 6.03 28 9.28 28h14.3c3.26 0 4.88 0 6.12-.61a5.7 5.7 0 0 0 2.54-2.45c.63-1.2.63-2.76.63-5.9V8.96c0-3.14 0-4.7-.63-5.9A5.7 5.7 0 0 0 29.7.6C28.46 0 26.84 0 23.6 0H9.29C6.02 0 4.4 0 3.16.61A5.7 5.7 0 0 0 .63 3.06ZM36.7 8.42c-.4.35-.62.85-.62 1.37v8.42c0 .52.23 1.02.63 1.37l5.19 4.61c1.24 1.1 3.24.25 3.24-1.37V5.18c0-1.62-2-2.47-3.24-1.37l-5.2 4.61Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.VideoPlaceholderIcon = d;
}), 98);
