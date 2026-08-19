__d("WAWebMsgDblcheckIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "msg-dblcheck";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 11, 16, "0 0 16 11");
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
					d: "M11.07.65a.46.46 0 0 0-.3-.1.5.5 0 0 0-.38.18l-6.2 7.64-2.4-2.28a.46.46 0 0 0-.34-.15.47.47 0 0 0-.34.15l-.3.31c-.1.1-.15.2-.15.34s.05.25.14.34l3 3a.72.72 0 0 0 .8.13c.1-.04.18-.11.24-.2L11.5 1.6c.07-.1.1-.2.1-.3a.44.44 0 0 0-.18-.37l-.34-.28ZM8.62 8.33l-.54-.36a.43.43 0 0 0-.32-.12.46.46 0 0 0-.36.16l-.3.33a.48.48 0 0 0 .02.67l1.08 1.07c.13.13.3.2.5.2a.7.7 0 0 0 .54-.26l6.62-8.4a.4.4 0 0 0 .11-.3.49.49 0 0 0-.18-.37l-.35-.27a.49.49 0 0 0-.67.08L8.62 8.32Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MsgDblcheckIcon = d;
}), 98);
