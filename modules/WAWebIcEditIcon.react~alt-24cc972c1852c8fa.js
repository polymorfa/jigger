__d("WAWebIcEditIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-edit";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null);
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
					d: "M5 19h1.4l9.8-9.8-1.4-1.4L5 17.6V19Zm-1 2a1 1 0 0 1-.7-.3A1 1 0 0 1 3 20v-2.4a2 2 0 0 1 .6-1.4L16.2 3.6l.7-.5a2 2 0 0 1 1.5 0l.7.5L20.4 5l.5.6a2.1 2.1 0 0 1 0 1.5l-.5.7L7.8 20.4a2 2 0 0 1-1.4.6H4Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcEditIcon = d;
}), 98);
