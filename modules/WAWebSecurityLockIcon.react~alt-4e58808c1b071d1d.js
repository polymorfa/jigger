__d("WAWebSecurityLockIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "security-lock";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 35, 28, "0 0 28 35");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M14 1.1c4.57 0 8.27 3.7 8.27 8.27v2.8l.09.01A4.86 4.86 0 0 1 27 17.04v12.43a4.86 4.86 0 0 1-4.86 4.86H5.86A4.86 4.86 0 0 1 1 29.47V17.04c0-2.64 2.1-4.8 4.73-4.86v-2.8C5.73 4.8 9.43 1.1 14 1.1Zm0 18.46a3.62 3.62 0 0 0-3.55 3.7c0 2.03 1.6 3.68 3.55 3.68a3.62 3.62 0 0 0 3.55-3.69c0-2.04-1.6-3.69-3.55-3.69Zm0-14.77c-2.54 0-4.6 2-4.72 4.51v2.88h9.45V9.52A4.73 4.73 0 0 0 14 4.8Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SecurityLockIcon = d;
}), 98);
