__d("WAWebMsgAudioIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "msg-audio";
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
					d: "M8 1a5.19 5.19 0 0 0-5.21 5.21v4.05c0 .99.75 1.74 1.74 1.74h1.73V7.37H3.95V6.2c0-2.26 1.8-4.05 4.05-4.05s4.05 1.8 4.05 4.05v1.16H9.74V12h1.73a1.7 1.7 0 0 0 1.74-1.74V6.21C13.21 3.31 10.9 1 8 1z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MsgAudioIcon = d;
}), 98);
