__d("WAWebPreviewDocIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "preview-doc";
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
					u.jsxs("defs", { children: [u.jsx("rect", {
						id: "WAWebPreviewDocIcon__b",
						width: 54,
						height: 36,
						x: 0,
						y: 0,
						rx: 2.37
					}), u.jsx("path", {
						id: "WAWebPreviewDocIcon__a",
						d: "M3 0h56.93a5 5 0 0 1 3.53 1.46l15.08 15.08A5 5 0 0 1 80 20.07V101a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"
					})] }),
					u.jsxs("g", {
						fill: "none",
						fillRule: "evenodd",
						transform: "translate(4 3)",
						children: [
							u.jsx("use", {
								xlinkHref: "#WAWebPreviewDocIcon__a",
								fill: "#000",
								filter: "url(#WAWebPreviewDocIcon__filter-3)"
							}),
							u.jsx("use", {
								xlinkHref: "#WAWebPreviewDocIcon__a",
								fill: "#FFF"
							}),
							u.jsx("path", {
								fill: "url(#WAWebPreviewDocIcon__linearGradient-1)",
								stroke: "#000",
								strokeOpacity: .08,
								d: "M3-.5h56.93a5.5 5.5 0 0 1 3.89 1.61l15.07 15.07a5.5 5.5 0 0 1 1.61 3.9V101a3.5 3.5 0 0 1-3.5 3.5H3A3.5 3.5 0 0 1-.5 101V3A3.5 3.5 0 0 1 3-.5z"
							}),
							u.jsx("rect", {
								width: 54,
								height: 2,
								x: 13,
								y: 84,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 27,
								height: 2,
								x: 13,
								y: 89,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 54,
								height: 2,
								x: 13,
								y: 24,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 54,
								height: 2,
								x: 13,
								y: 29,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 40,
								height: 2,
								x: 13,
								y: 34,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsxs("g", {
								transform: "translate(13 42)",
								children: [
									u.jsx("mask", {
										id: "WAWebPreviewDocIcon__c",
										fill: "#fff",
										children: u.jsx("use", { xlinkHref: "#WAWebPreviewDocIcon__b" })
									}),
									u.jsx("use", {
										xlinkHref: "#WAWebPreviewDocIcon__b",
										fill: "#000",
										fillOpacity: .1
									}),
									u.jsx("circle", {
										cx: 37.5,
										cy: 11.5,
										r: 5.5,
										fill: "#000",
										fillOpacity: .1,
										mask: "url(#WAWebPreviewDocIcon__c)"
									}),
									u.jsx("path", {
										fill: "#000",
										fillOpacity: .1,
										d: "m34.56 31.2 7.92-7.9a2.37 2.37 0 0 1 3.34 0l25.15 25.08-26.82 26.74-19.56-19.5-11.26 11.23-26.81-26.75 25.14-25.07a2.37 2.37 0 0 1 3.35 0L31.2 31.2a2.37 2.37 0 0 0 3.35 0z",
										mask: "url(#WAWebPreviewDocIcon__c)"
									})
								]
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
	d.displayName = d.name + " [from " + i.id + "]", l.PreviewDocIcon = d;
}), 98);
