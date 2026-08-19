__d("WAWebIcAttachFileIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-attach-file";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null);
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
					d: "M18 15.75c0 1.73-.6 3.2-1.82 4.43A6.03 6.03 0 0 1 11.75 22a6 6 0 0 1-4.42-1.82 6.03 6.03 0 0 1-1.83-4.43V6.5c0-1.25.44-2.31 1.31-3.19A4.34 4.34 0 0 1 10 2c1.25 0 2.31.44 3.19 1.31A4.34 4.34 0 0 1 14.5 6.5v8.75c0 .77-.27 1.42-.8 1.95s-1.18.8-1.95.8-1.42-.27-1.95-.8a2.65 2.65 0 0 1-.8-1.95V7a1 1 0 0 1 2 0v8.25a.73.73 0 0 0 .75.75.73.73 0 0 0 .75-.75V6.5c-.02-.7-.26-1.3-.74-1.78A2.37 2.37 0 0 0 10 4c-.7 0-1.3.24-1.78.72A2.41 2.41 0 0 0 7.5 6.5v9.25a4 4 0 0 0 1.22 3.01A4.14 4.14 0 0 0 11.75 20c1.17 0 2.16-.41 2.97-1.24A4.3 4.3 0 0 0 16 15.75V7a1 1 0 1 1 2 0v8.75Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcAttachFileIcon = d;
}), 98);
