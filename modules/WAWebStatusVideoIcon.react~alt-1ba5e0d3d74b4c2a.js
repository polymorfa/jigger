__d("WAWebStatusVideoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "status-video";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 16, "0 0 16 20");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 16 20",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "m15.24 5.87-3.48 3.09V6.69c0-.66-.53-1.19-1.19-1.19H1.94C1.3 5.5.77 6.03.77 6.69v7.14c0 .65.53 1.19 1.19 1.19h8.62c.66 0 1.2-.54 1.2-1.2v-2.3l3.47 3.1V5.87z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StatusVideoIcon = d;
}), 98);
