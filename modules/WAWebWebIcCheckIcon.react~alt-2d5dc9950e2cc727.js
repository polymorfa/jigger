__d("WAWebWebIcCheckIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "web-ic-check";
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
					d: "m9.55 15.15 8.47-8.47q.3-.3.7-.3t.7.3.3.7q0 .42-.3.72l-9.17 9.2q-.3.3-.7.3a.96.96 0 0 1-.7-.3L4.55 13a.93.93 0 0 1-.29-.71 1.02 1.02 0 0 1 .32-.71q.3-.3.7-.3.42 0 .72.3z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WebIcCheckIcon = d;
}), 98);
