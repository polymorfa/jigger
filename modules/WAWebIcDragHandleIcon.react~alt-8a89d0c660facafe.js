__d("WAWebIcDragHandleIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-drag-handle";
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
					d: "M5 15a1 1 0 0 1-.7-.3A1 1 0 0 1 4 14c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h14c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3H5Zm0-4a1 1 0 0 1-.7-.3A1 1 0 0 1 4 10c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h14c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3H5Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcDragHandleIcon = d;
}), 98);
