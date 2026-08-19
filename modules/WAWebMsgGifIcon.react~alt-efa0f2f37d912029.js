__d("WAWebMsgGifIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "msg-gif";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 14, 21, "0 0 21 14");
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
				enableBackground: "new 0 0 21 14",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M17.5 1.1H3.4C2 1.1.8 2.3.8 3.7v5.8c0 1.4 1.2 2.6 2.6 2.6h14.1c1.4 0 2.6-1.2 2.6-2.6V3.7c0-1.4-1.2-2.6-2.6-2.6zm-8.4 6c0 1.6-1 2.5-2.6 2.5-1.8 0-2.8-1.1-2.8-3s1.1-3 2.8-3c1.4 0 2.4.8 2.6 2H7.6c-.2-.5-.6-.8-1.2-.8-.8 0-1.3.7-1.3 1.8s.5 1.8 1.4 1.8c.7 0 1.1-.4 1.2-1v-.1H6.4v-1h2.7v.8zm2.6 2.4h-1.5V3.7h1.5v5.8zm5.2-4.6h-2.4v1.3h2.2v1.1h-2.2v2.1H13V3.7h3.9v1.2z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MsgGifIcon = d;
}), 98);
