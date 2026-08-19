__d("WAWebTailOutIosIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "tail-out-ios";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 15, 15, "0 0 15 15");
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
					d: "M9 0c0 6.41 3.32 11.42 5.58 13.7.36.37.07 1.17-.44 1.14C5.94 14.44 2.21 11.42.5 10L5 1l4-1Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.TailOutIosIcon = d;
}), 98);
