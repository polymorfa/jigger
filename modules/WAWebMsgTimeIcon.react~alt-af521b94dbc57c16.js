__d("WAWebMsgTimeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "msg-time";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 15, 16, "0 0 16 15");
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
				enableBackground: "new 0 0 16 15",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M9.75 7.71h-1.5V5.36a.5.5 0 0 0-.5-.5h-.1a.5.5 0 0 0-.5.5V8.3c0 .27.22.5.5.5h2.1a.5.5 0 0 0 .5-.5v-.1a.5.5 0 0 0-.5-.5zm0-5.26h-3.5a3.3 3.3 0 0 0-3.3 3.3v3.5a3.3 3.3 0 0 0 3.3 3.3h3.5a3.3 3.3 0 0 0 3.3-3.3v-3.5a3.3 3.3 0 0 0-3.3-3.3zm2 6.8a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2h3.5a2 2 0 0 1 2 2v3.5z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MsgTimeIcon = d;
}), 98);
