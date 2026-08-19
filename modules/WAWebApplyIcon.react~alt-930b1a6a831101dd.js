__d("WAWebApplyIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "apply";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 18, 18, "0 0 18 18");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				color: "#010101",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M9 17.47A8.53 8.53 0 0 1 .53 9.01 8.53 8.53 0 0 1 9 .54a8.54 8.54 0 0 1 8.48 8.47A8.52 8.52 0 0 1 9 17.47Zm0-1.4A7.05 7.05 0 1 0 1.95 9 7.02 7.02 0 0 0 9 16.06Zm-2.9-5c-.37 0-.61-.28-.61-.67V6.5c0-.5.26-.7.69-.7h3.94c.38 0 .63.24.63.6 0 .38-.26.62-.65.62H8.58L7.36 6.9l1.3 1.2 3.05 3.07c.12.11.2.27.2.44 0 .37-.24.62-.61.62a.63.63 0 0 1-.47-.2L7.77 8.98 6.57 7.7l.13 1.28v1.44c0 .4-.24.65-.6.65Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ApplyIcon = d;
}), 98);
