__d("WAWebWdsPictoCommunitiesHeartIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-communities-heart";
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
						d: "M10.9 67.9c-2.4 0-4.4-1.9-4.5-4.4 0-1.4-.1-3.8.1-5 .3-2.4 1.7-4.2 3.2-5.4 2.9-2.2 7.2-3.3 11.7-3.3 5.6 0 23.4 3.3 23.4 3.3s17.8-3.3 23.4-3.3c4.5 0 8.8 1 11.7 3.3 1.5 1.2 2.9 2.9 3.2 5.4.1 1.1.1 3.6.1 5-.1 2.5-2.1 4.4-4.5 4.4z",
						className: "st0"
					}),
					u.jsx("path", {
						fill: "#25d366",
						stroke: "#111b21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M61.8 67.9c2.4 0 4.4-1.9 4.5-4.4.3-6.2-.3-7.8-.5-8.4-2.2-6.7-15.4-8.2-20.4-8.2S27.1 48.4 25 55.1c-.2.6-.8 2.3-.5 8.4.1 2.4 2 4.4 4.5 4.4zm6.8-21c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9m-23.3-3c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12m-23.2 3c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9",
						className: "st0"
					}),
					u.jsx("path", {
						fill: "#e6ffda",
						stroke: "#111b21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M60.2 73.6c6.6-5.7 11.1-9.4 11.1-13.3 0-4.7-4.1-5.7-5.8-5.7-3.5 0-5.3 2.7-5.3 2.7s-1.9-2.7-5.3-2.7c-1.7 0-5.8 1-5.8 5.7 0 3.9 4.5 7.6 11.1 13.3"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoCommunitiesHeartIcon = d;
}), 98);
