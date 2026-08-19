__d("WAWebWdsIllAiChatsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-ai-chats";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 120, 140, "0 0 140 120");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						d: "M71.9.9C35.9.9 6.6 23.5 6.6 51.4c0 6.9 1.8 13.5 5 19.4L1.5 87.6c-1.4 2.4.4 5.6 3 5.5l27-2.1c11.1 6.8 25.1 10.8 40.4 10.8 36 0 65.3-22.6 65.3-50.5C137.2 23.5 108 .9 71.9.9z",
						style: {
							fill: "#e6ffda",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeLinejoin: "round",
							strokeMiterlimit: 10
						}
					}),
					u.jsx("path", {
						d: "m138.6 77.9-1.1-12.1c-.1-1.2-.9-2.3-2-2.9-1.1-.5-2.5-.4-3.5.3l-9.9 7c-1 .7-1.6 1.9-1.5 3.2.1 1.2.9 2.3 2 2.9l11 5.1q.75.3 1.5.3c.7 0 1.4-.2 2-.6 1.1-.7 1.7-1.9 1.5-3.2",
						style: {
							fillRule: "evenodd",
							clipRule: "evenodd",
							fill: "#afe966",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}
					}),
					u.jsx("path", {
						d: "m104.8 54.3 3.3.7-.6 3.1c-.4 1.9.8 3.8 2.7 4.2.2 0 .5.1.7.1 1.6 0 3.1-1.1 3.4-2.8l.6-3.1 3.1.6c.2 0 .5.1.7.1 1.6 0 3.1-1.1 3.4-2.8.4-1.9-.8-3.8-2.7-4.2l-3.1-.6.7-3.3c.4-1.9-.8-3.8-2.7-4.2s-3.8.8-4.2 2.7l-.7 3.3-3.3-.7c-1.9-.4-3.8.8-4.2 2.7-.2 1.9 1 3.8 2.9 4.2q0 0 0 0",
						style: {
							fillRule: "evenodd",
							clipRule: "evenodd",
							fill: "#fff",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}
					}),
					u.jsx("path", {
						d: "M73.8 75.6c4.6 0 8.3-3.7 8.3-8.3S78.4 59 73.8 59s-8.3 3.7-8.3 8.3c0 4.5 3.7 8.3 8.3 8.3",
						style: {
							fill: "#06ce9c",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}
					}),
					u.jsx("path", {
						d: "m122 87-12.2-5.2h0c-.7-.3-1.2-.8-1.4-1.4l-5.2-12.1a5.12 5.12 0 0 0-9.4 0l-5.2 12q-.45 1.05-1.5 1.5L74.9 87c-2.8 1.2-3.1 3.8-3.1 4.6s.3 3.5 3.1 4.7l11.7 5.1c.6.3 1.1.8 1.4 1.4l5.7 12.5h0c1.2 2.7 3.8 3 4.6 3s3.4-.2 4.7-3l5.3-12.3q.45-1.05 1.5-1.5l12.2-5.2h0c2.7-1.2 3-3.7 3-4.6s-.3-3.5-3-4.7q0 0 0 0",
						style: {
							fillRule: "evenodd",
							clipRule: "evenodd",
							fill: "#25d366",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsIllAiChatsIcon = d;
}), 98);
