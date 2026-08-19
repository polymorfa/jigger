__d("WAWebMediaMultipleIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "media-multiple";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20");
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
					d: "M20 14V2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2ZM9.4 10.53l1.63 2.18 2.58-3.22a.5.5 0 0 1 .78 0l2.96 3.7a.5.5 0 0 1-.39.81H7a.5.5 0 0 1-.4-.8l2-2.67a.5.5 0 0 1 .8 0ZM0 18V5a1 1 0 0 1 1-1 1 1 0 0 1 1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 1 1 1 1 1 0 0 1-1 1H2a2 2 0 0 1-2-2Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MediaMultipleIcon = d;
}), 98);
