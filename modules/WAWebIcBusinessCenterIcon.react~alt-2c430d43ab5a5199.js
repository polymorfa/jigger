__d("WAWebIcBusinessCenterIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-business-center";
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
					d: "M4 21a2 2 0 0 1-1.4-.6A2 2 0 0 1 2 19V8c0-.5.2-1 .6-1.4A2 2 0 0 1 4 6h4V4c0-.5.2-1 .6-1.4A2 2 0 0 1 10 2h4c.6 0 1 .2 1.4.6.4.4.6.9.6 1.4v2h4c.6 0 1 .2 1.4.6.4.4.6.9.6 1.4v11c0 .6-.2 1-.6 1.4a2 2 0 0 1-1.4.6H4Zm6-15h4V4h-4v2Zm10 9h-5v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-4a1 1 0 0 1-.7-.3A1 1 0 0 1 9 16v-1H4v4h16v-4Zm-9 0h2v-2h-2v2Zm-7-2h5v-1c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h4c.3 0 .5.1.7.3.2.2.3.4.3.7v1h5V8H4v5Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcBusinessCenterIcon = d;
}), 98);
