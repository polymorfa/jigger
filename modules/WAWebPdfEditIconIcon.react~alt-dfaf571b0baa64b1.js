__d("WAWebPdfEditIconIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "pdf-edit-icon";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 17, 17, "0 0 17 17");
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
					d: "M16.63 10.35c-1.27-1.32-4.73-.78-5.57-.69A15 15 0 0 1 8.72 6.6a14 14 0 0 0 .78-4.05C9.5 1.32 9 0 7.64 0a1.4 1.4 0 0 0-1.17.68c-.58 1.02-.34 3.08.58 5.18a35 35 0 0 1-2.39 5.57C3.25 12 .27 13.38.03 14.84c-.1.45.05.91.39 1.22.34.3.77.45 1.22.44 1.8 0 3.56-2.49 4.78-4.6a33 33 0 0 1 4.25-1.12c1.9 1.66 3.57 1.9 4.45 1.9 1.17 0 1.61-.48 1.75-.92a1.27 1.27 0 0 0-.24-1.41m-1.22.83c-.05.34-.5.68-1.27.49a6.7 6.7 0 0 1-2.49-1.27c.64-.1 2.05-.24 3.07-.05.4.1.78.34.69.83M7.25 1.12a.5.5 0 0 1 .4-.25c.43 0 .54.54.54.98a10.8 10.8 0 0 1-.59 3.03c-.74-1.95-.6-3.32-.35-3.76m-.1 9.47q.64-1.33 1.13-2.73c.45.72.98 1.39 1.56 2 0 .05-1.51.34-2.68.73m-2.88 1.96c-1.13 1.85-2.3 3.02-2.94 3.02a.8.8 0 0 1-.3-.1.37.37 0 0 1-.14-.43c.16-.69 1.42-1.61 3.38-2.5"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PdfEditIconIcon = d;
}), 98);
