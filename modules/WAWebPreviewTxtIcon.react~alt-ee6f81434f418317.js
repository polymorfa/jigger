__d("WAWebPreviewTxtIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "preview-txt";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 110, 88, "0 0 88 110");
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
					u.jsx("defs", { children: u.jsx("path", {
						id: "WAWebPreviewTxtIcon__a",
						d: "M3 0h56.93a5 5 0 0 1 3.53 1.46l15.08 15.08A5 5 0 0 1 80 20.07V101a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"
					}) }),
					u.jsxs("g", {
						fill: "none",
						fillRule: "evenodd",
						transform: "translate(4 3)",
						children: [
							u.jsx("use", {
								xlinkHref: "#WAWebPreviewTxtIcon__a",
								fill: "#000",
								filter: "url(#WAWebPreviewTxtIcon__filter-3)"
							}),
							u.jsx("use", {
								xlinkHref: "#WAWebPreviewTxtIcon__a",
								fill: "#FFF"
							}),
							u.jsx("path", {
								fill: "url(#WAWebPreviewTxtIcon__linearGradient-1)",
								stroke: "#000",
								strokeOpacity: .08,
								d: "M3-.5h56.93a5.5 5.5 0 0 1 3.89 1.61l15.07 15.07a5.5 5.5 0 0 1 1.61 3.9V101a3.5 3.5 0 0 1-3.5 3.5H3A3.5 3.5 0 0 1-.5 101V3A3.5 3.5 0 0 1 3-.5z"
							}),
							u.jsx("rect", {
								width: 52,
								height: 2,
								x: 13,
								y: 28,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 52,
								height: 2,
								x: 13,
								y: 33,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 52,
								height: 2,
								x: 13,
								y: 38,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 40,
								height: 2,
								x: 13,
								y: 43,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 52,
								height: 2,
								x: 13,
								y: 53,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 52,
								height: 2,
								x: 13,
								y: 58,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 52,
								height: 2,
								x: 13,
								y: 63,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 52,
								height: 2,
								x: 13,
								y: 68,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 52,
								height: 2,
								x: 13,
								y: 73,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 27,
								height: 2,
								x: 13,
								y: 78,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("path", {
								fill: "#FFF",
								stroke: "#000",
								strokeOpacity: .12,
								d: "M61.5.5v15a3 3 0 0 0 3 3h15"
							})
						]
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PreviewTxtIcon = d;
}), 98);
