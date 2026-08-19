__d("WAWebDeactivateIconIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "deactivate-icon";
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
					d: "M14.9 3H9.1a2 2 0 0 0-1.42.59l-4.1 4.1A2 2 0 0 0 3 9.1v5.8c0 .53.21 1.04.59 1.41l4.1 4.1c.37.38.88.59 1.41.59h5.8c.53 0 1.04-.21 1.41-.59l4.1-4.1c.38-.37.59-.88.59-1.41V9.1c0-.53-.21-1.04-.59-1.41l-4.1-4.1A1.97 1.97 0 0 0 14.9 3Zm.64 12.54a1 1 0 0 1-1.41 0L12 13.41l-2.12 2.12a1 1 0 1 1-1.41-1.41L10.59 12 8.46 9.88a1 1 0 1 1 1.41-1.41L12 10.59l2.12-2.12a1 1 0 1 1 1.41 1.41L13.41 12l2.12 2.12a1 1 0 0 1 .01 1.42Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.DeactivateIconIcon = d;
}), 98);
