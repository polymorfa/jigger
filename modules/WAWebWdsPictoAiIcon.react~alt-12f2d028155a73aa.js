__d("WAWebWdsPictoAiIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-ai";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				id: "Layer_1",
				x: "0",
				y: "0",
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					d: "m49.2 22.2-2.8-.6c-1.6-.3-2.7-2-2.4-3.6.3-1.6 2-2.7 3.6-2.4l2.8.6.6-2.8c.3-1.6 2-2.7 3.6-2.4 1.6.3 2.7 2 2.4 3.6l-.6 2.8 2.7.6c1.6.3 2.7 2 2.4 3.6a3.1 3.1 0 0 1-3 2.4c-.2 0-.4 0-.6-.1l-2.7-.6-.6 2.7a3.1 3.1 0 0 1-3 2.4c-.2 0-.4 0-.6-.1-1.6-.3-2.7-2-2.4-3.6l.6-2.5zm25.5 9.4.9 10.4c.1 1.1-.4 2.1-1.3 2.7-.5.4-1.1.6-1.7.6-.4 0-.9-.1-1.3-.3l-9.5-4.4c-1-.5-1.7-1.4-1.7-2.5-.1-1.1.4-2.1 1.3-2.7l8.6-6c.9-.6 2-.7 3-.3.9.5 1.6 1.5 1.7 2.5zM19.5 40c4 0 7.2-3.2 7.2-7.2s-3.2-7.2-7.2-7.2-7.2 3.2-7.2 7.2 3.3 7.2 7.2 7.2zm41.7 9.9c2.4 1.1 2.6 3.3 2.6 4 0 .8-.3 3-2.6 4l-10.5 4.5c-.5.2-1 .7-1.3 1.3l-4.6 10.7c-1 2.4-3.4 2.6-4 2.6-.7 0-2.9-.2-4-2.6l-4.9-10.8c-.3-.6-.7-1-1.2-1.2L20.5 58c-2.4-1-2.6-3.3-2.6-4 0-.7.3-3 2.7-4l10.6-4.5c.5-.2 1-.7 1.3-1.3L37 33.8c1-2.5 3.4-2.7 4-2.7s3 .2 4 2.7l4.5 10.5c.2.5.7 1 1.2 1.2l10.5 4.4z",
					style: {
						fill: "#25d366",
						stroke: "#111b21",
						strokeWidth: 1.5
					}
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoAiIcon = d;
}), 98);
