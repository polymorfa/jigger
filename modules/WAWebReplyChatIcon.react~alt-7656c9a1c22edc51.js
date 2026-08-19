__d("WAWebReplyChatIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "reply-chat";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 25, 25, "0 0 25 25");
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
				enableBackground: "new 0 0 25 25",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M9.72 7.43C17 8.47 20.5 13.3 21.93 18.48c.1.36-.36.59-.6.32-2.77-3.16-6.51-4.61-11.6-4.61v2.73a.8.8 0 0 1-1.38.57L2.3 11.44a.8.8 0 0 1 0-1.15l6.05-6.05a.8.8 0 0 1 1.38.57v2.62z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ReplyChatIcon = d;
}), 98);
