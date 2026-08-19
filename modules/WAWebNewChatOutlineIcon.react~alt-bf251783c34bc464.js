__d("WAWebNewChatOutlineIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "new-chat-outline";
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
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "currentColor",
						d: "M9.53 13h1.98v1.97c0 .43.25.85.67.98a1 1 0 0 0 1.31-.94v-2.02h1.98c.43 0 .85-.25.98-.67a1 1 0 0 0-.94-1.31h-2.02V9.03c0-.43-.25-.85-.67-.98a1 1 0 0 0-1.31.94v2.02H9.49a1 1 0 0 0-.94 1.31c.13.42.55.67.98.67Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M.94 5.53 3 8.85v8.48C3 18.81 4.2 20 5.67 20h13.66c1.48 0 2.67-1.2 2.67-2.67V6.67C22 5.19 20.8 4 19.33 4H1.8a1 1 0 0 0-.85 1.53ZM5 8.28v9.05c0 .37.3.67.67.67h13.66c.37 0 .67-.3.67-.67V6.67c0-.37-.3-.67-.67-.67H3.6L5 8.28Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.NewChatOutlineIcon = d;
}), 98);
