__d("WAWebReturnIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "return";
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
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M19.77 11.73c0 1.64-.5 2.95-1.48 3.89a5.65 5.65 0 0 1-3.75 1.41H9.01v-2.1h5.46c.05 0 1.47.04 2.38-.84.55-.53.82-1.32.82-2.37 0-1.27-.33-2.23-.99-2.84-.98-.92-2.43-.85-2.44-.85h-4.23v3.1L4 7.07 10.01 3v2.93h4.16c.03 0 2.29-.13 3.95 1.42 1.09 1.03 1.65 2.5 1.65 4.38z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ReturnIcon = d;
}), 98);
