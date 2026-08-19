__d("WAWebMsgVideoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "msg-video";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 14, 16, "0 0 16 14");
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
				enableBackground: "new 0 0 16 14",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M14.99 2.67 11.5 5.76V3.49a1.2 1.2 0 0 0-1.2-1.19H1.7c-.67 0-1.2.53-1.2 1.19v7.14c0 .65.53 1.19 1.19 1.19h8.63a1.2 1.2 0 0 0 1.19-1.2v-2.3l3.48 3.1V2.67z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MsgVideoIcon = d;
}), 98);
