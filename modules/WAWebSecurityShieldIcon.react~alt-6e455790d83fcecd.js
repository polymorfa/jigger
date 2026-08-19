__d("WAWebSecurityShieldIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "security-shield";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 74, 64, "0 0 64 74");
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
					d: "M0 8.22c12.06 0 22.72-2.74 32-8.22 9.28 5.48 19.94 8.22 32 8.22V32.9C64 52.07 53.33 65.78 32 74 10.67 65.78 0 52.07 0 32.89V8.22Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SecurityShieldIcon = d;
}), 98);
