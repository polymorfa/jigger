__d("WAWebImageIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "image";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 42, 42, "0 0 42 42");
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
					fillRule: "evenodd",
					d: "M42 4.67v32.66C42 39.9 39.9 42 37.33 42H4.67A4.68 4.68 0 0 1 0 37.33V4.67C0 2.1 2.1 0 4.67 0h32.66C39.9 0 42 2.1 42 4.67ZM18.67 31.52l-4.9-5.9a1.15 1.15 0 0 0-1.82.05l-5.81 7.46c-.61.77-.07 1.9.9 1.9h27.98c.96 0 1.52-1.1.94-1.87l-8.2-10.92a1.17 1.17 0 0 0-1.86-.03l-7.23 9.31Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ImageIcon = d;
}), 98);
