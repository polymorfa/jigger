__d("WAWebWdsPictoDisappearingMessagesIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-disappearing-messages";
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
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#25d366",
						stroke: "#111b21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M77.5 44a33.5 33.5 0 1 1-67 0 33.5 33.5 0 0 1 67 0z"
					}),
					u.jsx("path", {
						fill: "none",
						stroke: "#111b21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M43.3 16.5c-14.1.9-25.4 11.3-27 23.8-2 14.8 10 29.9 27 31.3"
					}),
					u.jsx("path", {
						fill: "none",
						stroke: "#111b21",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M56.5 22.2c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7.1.9.8 1.7 1.7 1.7zm10.1 10.2c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7s.8 1.7 1.7 1.7zm3.7 13.8c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7 0 .9.8 1.7 1.7 1.7zm-3.7 13.7c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7.1 1 .8 1.7 1.7 1.7zM57 69.5c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7.1 1 .8 1.7 1.7 1.7z"
					}),
					u.jsx("path", {
						fill: "none",
						stroke: "#111b21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M55.8 33.6c-.6-.6-1.6-.7-2.2-.2l-12.3 9.2a3.54 3.54 0 0 0-.4 5.3l.5.5c1.5 1.5 4 1.3 5.3-.4L56 35.8c.5-.7.4-1.6-.2-2.2h0z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoDisappearingMessagesIcon = d;
}), 98);
