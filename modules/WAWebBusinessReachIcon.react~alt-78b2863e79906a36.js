__d("WAWebBusinessReachIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "business-reach";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 16, 20, "0 0 20 16");
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
					d: "M7.83 8 6.5 12.5 5.17 8 .67 6.67l4.5-1.34L6.5.83l1.33 4.5 4.5 1.34L7.83 8Zm5.34 3.83L16.5 10l-1.83 3.33 1.83 3.34-3.33-1.84-3.34 1.84 1.84-3.34L9.83 10l3.34 1.83Zm-5.84 1.5-1.41 2.5 1.41 2.5-2.5-1.41-2.5 1.41 1.42-2.5-1.42-2.5 2.5 1.42 2.5-1.42Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.BusinessReachIcon = d;
}), 98);
