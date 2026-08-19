__d("WAWebMsgCheckIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "msg-check";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 11, 12, "0 0 12 11");
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
					fill: "currentcolor",
					d: "M11.15.65a.46.46 0 0 0-.3-.1.5.5 0 0 0-.38.18L4.28 8.37l-2.4-2.28a.46.46 0 0 0-.34-.15.47.47 0 0 0-.34.15l-.32.31c-.09.1-.14.2-.14.34s.05.25.14.34l3 3a.72.72 0 0 0 .8.13.6.6 0 0 0 .25-.2l6.64-8.41c.08-.1.11-.2.11-.3a.44.44 0 0 0-.19-.37l-.34-.28Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MsgCheckIcon = d;
}), 98);
