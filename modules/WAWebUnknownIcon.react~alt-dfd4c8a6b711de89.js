__d("WAWebUnknownIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "unknown";
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
				version: "1.1",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 24 24",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M19.8 5H1l3.9 5.2V17c0 1.1.9 2 2 2h12.9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM17 14.8l-1 1-2.7-2.7-2.7 2.7-1-1 2.7-2.7-2.6-2.7 1-1 2.7 2.7 2.7-2.7 1 1-2.7 2.7 2.6 2.7z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.UnknownIcon = d;
}), 98);
