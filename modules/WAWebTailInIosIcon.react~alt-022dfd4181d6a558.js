__d("WAWebTailInIosIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "tail-in-ios";
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
					d: "M6 0C6 6.41 2.68 11.42.42 13.7c-.36.37-.07 1.17.44 1.14 8.2-.4 11.93-3.42 13.64-4.84L10 1 6 0Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.TailInIosIcon = d;
}), 98);
