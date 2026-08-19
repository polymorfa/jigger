__d("WAWebWdsPictoChatlockIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-chatlock";
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
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#25d366",
						fillRule: "evenodd",
						stroke: "#111b21",
						strokeWidth: 1.5,
						d: "M62.82 25.63v-3.02A18.7 18.7 0 0 0 44 4a18.7 18.7 0 0 0-18.83 18.61v3.02h-4.32c-4.99 0-9.03 4-9.03 8.93V65.8a9 9 0 0 0 9.03 8.93h4.54v5.94c0 2.6 2.93 4.18 5.19 2.84l11.75-8.77h24.82c4.99 0 9.03-4 9.03-8.94V34.56a9 9 0 0 0-9.03-8.93zm-5.08 0v-3.02c0-7.5-6.15-13.59-13.74-13.59s-13.75 6.09-13.75 13.6v3.01z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						stroke: "#111b21",
						strokeLinecap: "round",
						strokeWidth: 1.5,
						d: "M25.49 43.9h37.57M25.49 54.84H52.7"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoChatlockIcon = d;
}), 98);
