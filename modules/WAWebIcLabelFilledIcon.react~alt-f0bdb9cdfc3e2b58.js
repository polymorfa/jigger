__d("WAWebIcLabelFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-label-filled";
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
					d: "m20.18 13.15-3.53 5a1.9 1.9 0 0 1-.71.63A2 2 0 0 1 15 19H5q-.82 0-1.41-.59A1.93 1.93 0 0 1 3 17V7q0-.82.59-1.41A1.93 1.93 0 0 1 5 5h10q.5 0 .94.23t.71.62l3.53 5q.37.53.37 1.15t-.38 1.15"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcLabelFilledIcon = d;
}), 98);
