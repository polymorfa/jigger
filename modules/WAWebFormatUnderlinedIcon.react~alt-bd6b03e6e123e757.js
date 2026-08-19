__d("WAWebFormatUnderlinedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "format-underlined";
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
					d: "M6 21a.97.97 0 0 1-.71-.29A.97.97 0 0 1 5 20c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h12c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 18 21H6Zm6-4c-1.68 0-3-.52-3.93-1.57a6.05 6.05 0 0 1-1.4-4.18V4.28c0-.36.13-.66.4-.9.25-.25.55-.38.9-.38s.66.13.9.38c.26.25.38.54.38.9v7.12c0 .93.23 1.7.7 2.28.47.58 1.15.87 2.05.87.9 0 1.58-.3 2.05-.88.47-.58.7-1.34.7-2.27V4.27c0-.34.13-.64.39-.9.26-.25.56-.37.91-.37s.65.13.9.38.38.54.38.9v6.97c0 1.73-.47 3.13-1.4 4.18A4.98 4.98 0 0 1 12 17Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.FormatUnderlinedIcon = d;
}), 98);
