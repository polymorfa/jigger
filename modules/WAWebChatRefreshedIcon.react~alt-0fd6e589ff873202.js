__d("WAWebChatRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "chat-refreshed";
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
						fillRule: "evenodd",
						d: "M3 9 .94 5.53A1 1 0 0 1 1.79 4h17.54C20.81 4 22 5.2 22 6.67v10.66c0 1.48-1.2 2.67-2.67 2.67H5.67A2.67 2.67 0 0 1 3 17.33V9Zm2-.55L3.53 6h15.8c.37 0 .67.3.67.67v10.66c0 .37-.3.67-.67.67H5.67a.67.67 0 0 1-.67-.67V8.45Z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						fill: "currentColor",
						d: "M7 10a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ChatRefreshedIcon = d;
}), 98);
