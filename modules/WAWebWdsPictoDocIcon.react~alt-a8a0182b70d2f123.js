__d("WAWebWdsPictoDocIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-doc";
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
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						d: "M49 10.9H24.3c-2 0-3.8.7-5.2 2.2a7.26 7.26 0 0 0-2.2 5.2v51.4c0 2 .7 3.8 2.2 5.2 1.4 1.4 3.2 2.2 5.2 2.2h39.4c2 0 3.8-.7 5.2-2.2s2.2-3.2 2.2-5.2V33z",
						style: {
							fill: "#25d366",
							stroke: "#111b21",
							strokeWidth: 1.5
						}
					}),
					u.jsx("path", {
						d: "M49 10.9v14.8c0 4 3.3 7.3 7.3 7.3h14.1",
						style: {
							fill: "none",
							stroke: "#111b21",
							strokeWidth: 1.5
						}
					}),
					u.jsx("path", {
						d: "M29.3 29.3h9.8M29.3 44H59M29.3 58.7H59",
						style: {
							fill: "none",
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
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoDocIcon = d;
}), 98);
