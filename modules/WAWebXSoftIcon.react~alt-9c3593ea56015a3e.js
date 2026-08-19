__d("WAWebXSoftIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "x-soft";
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
					d: "M8.79 15.54a1 1 0 0 1 0-1.42L10.9 12 8.78 9.88a1 1 0 0 1 1.42-1.42l2.12 2.13 2.12-2.13a1 1 0 0 1 1.42 1.42L13.73 12l2.13 2.12a1 1 0 1 1-1.42 1.42l-2.12-2.13-2.12 2.13a1 1 0 0 1-1.41 0Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.XSoftIcon = d;
}), 98);
