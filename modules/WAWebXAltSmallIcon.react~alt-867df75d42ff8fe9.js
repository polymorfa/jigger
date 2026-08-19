__d("WAWebXAltSmallIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "x-alt-small";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 16, 16, "0 0 16 16");
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
				enableBackground: "new 0 0 16 16",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "m12.17 4.66-.83-.83L8 7.16 4.66 3.83l-.83.83L7.16 8l-3.33 3.34.83.83L8 8.84l3.34 3.33.83-.83L8.84 8l3.33-3.34z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.XAltSmallIcon = d;
}), 98);
