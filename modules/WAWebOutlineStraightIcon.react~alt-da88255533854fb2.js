__d("WAWebOutlineStraightIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "outline-straight";
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
					d: "M14.4 4.4a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Zm.72 2.41a.8.8 0 0 0-1.21 1.04l1.37 1.6a.8.8 0 1 0 1.21-1.04l-1.37-1.6ZM10.1 7.85a.8.8 0 0 0-1.22-1.04L7.5 8.41a.8.8 0 1 0 1.21 1.04l1.37-1.6Zm8.22 2.7a.8.8 0 0 0-1.21 1.04l1.37 1.6a.8.8 0 0 0 1.21-1.04l-1.37-1.6ZM6.9 11.59a.8.8 0 0 0-1.22-1.04l-1.37 1.6a.8.8 0 0 0 1.21 1.04l1.37-1.6ZM2.4 18a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm19.2 0a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.OutlineStraightIcon = d;
}), 98);
