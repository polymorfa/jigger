__d("WAWebOutlineSmoothIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "outline-smooth";
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
					d: "M12 6.8A2.4 2.4 0 1 0 12 2a2.4 2.4 0 0 0 0 4.8ZM2.4 18a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8ZM24 15.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM8.45 6.81a.8.8 0 1 0-.7-1.44c-.78.38-1.52.86-2.18 1.43A.8.8 0 1 0 6.6 8.02a8.68 8.68 0 0 1 1.85-1.2Zm7.79-1.44a.8.8 0 0 0-.7 1.44c.67.32 1.3.73 1.86 1.2a.8.8 0 0 0 1.03-1.21 9.95 9.95 0 0 0-2.19-1.43ZM4.88 9.95a.8.8 0 1 0-1.33-.88c-.47.7-.87 1.48-1.18 2.3a.8.8 0 1 0 1.5.57 9.3 9.3 0 0 1 1.01-1.99Zm15.57-.88a.8.8 0 0 0-1.33.88c.4.61.75 1.28 1.02 1.99a.8.8 0 1 0 1.5-.57 11.4 11.4 0 0 0-1.2-2.3Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.OutlineSmoothIcon = d;
}), 98);
