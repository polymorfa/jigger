__d("WAWebIcChatlistEventIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-chatlist-event";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 16, "0 0 16 20");
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
					d: "M10 15c-.55 0-1.03-.2-1.42-.58A1.92 1.92 0 0 1 8 13a1.98 1.98 0 0 1 2-2 1.98 1.98 0 0 1 2 2 1.98 1.98 0 0 1-2 2Zm-7.5 3c-.41 0-.77-.15-1.06-.45-.3-.3-.44-.65-.44-1.05v-11c0-.4.15-.75.44-1.05.3-.3.65-.45 1.06-.45H4V2.75c0-.21.07-.4.21-.53A.72.72 0 0 1 4.75 2c.2 0 .39.07.53.22a.7.7 0 0 1 .22.53V4h5V2.75c0-.21.07-.4.21-.53a.72.72 0 0 1 .54-.22c.2 0 .39.07.53.22a.7.7 0 0 1 .22.53V4h1.5c.41 0 .77.15 1.06.45.3.3.44.65.44 1.05v11c0 .4-.15.75-.44 1.05-.3.3-.65.45-1.06.45h-11Zm0-1.5h11V9h-11v7.5Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcChatlistEventIcon = d;
}), 98);
