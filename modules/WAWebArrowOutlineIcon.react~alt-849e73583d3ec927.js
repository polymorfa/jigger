__d("WAWebArrowOutlineIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "arrow-outline";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 26, "0 0 26 24");
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
					fill: "#fff",
					stroke: "currentColor",
					strokeMiterlimit: 10,
					strokeWidth: 1.5,
					d: "m24.2 13.09.12-.13.19-.36s0-.06.06-.06c.12-.3.18-.61.18-.98 0-.36-.06-.67-.18-.97 0 0 0-.06-.06-.06l-.19-.37-.12-.12c-.06-.06-.12-.18-.18-.24L15.3 1.45a2.5 2.5 0 0 0-3.47 3.6l4.2 4.01H3.24a2.5 2.5 0 0 0-2.49 2.5 2.47 2.47 0 0 0 2.5 2.5h12.79l-4.2 4.02a2.5 2.5 0 0 0-.06 3.53c.48.5 1.15.8 1.76.8s1.22-.25 1.7-.68l8.72-8.34c.18-.12.24-.18.24-.3Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ArrowOutlineIcon = d;
}), 98);
