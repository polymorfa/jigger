__d("WAWebPreviewSlidesIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "preview-slides";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 110, "0 0 110 88");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [u.jsx("title", { children: n.iconName }), u.jsxs("g", {
					fill: "none",
					fillRule: "evenodd",
					children: [u.jsxs("g", {
						transform: "translate(4 3)",
						children: [u.jsx("use", {
							xlinkHref: "#WAWebPreviewSlidesIcon__path-1",
							fill: "#000",
							filter: "url(#WAWebPreviewSlidesIcon__filter-2)"
						}), u.jsx("rect", {
							width: 105,
							height: 81,
							x: -.5,
							y: -.5,
							fill: "#FFF",
							stroke: "#000",
							strokeOpacity: .08,
							rx: 3
						})]
					}), u.jsxs("g", {
						transform: "translate(8 15)",
						children: [
							u.jsx("rect", {
								width: 96,
								height: 56,
								fill: "#000",
								fillOpacity: .1,
								rx: 2
							}),
							u.jsx("rect", {
								width: 30,
								height: 2,
								x: 55,
								y: 19,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 30,
								height: 2,
								x: 55,
								y: 24,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 30,
								height: 2,
								x: 55,
								y: 29,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsx("rect", {
								width: 18,
								height: 2,
								x: 55,
								y: 34,
								fill: "#000",
								fillOpacity: .2,
								rx: .5
							}),
							u.jsxs("g", {
								transform: "translate(12 13)",
								children: [u.jsx("circle", {
									cx: 16,
									cy: 16,
									r: 16,
									fill: "#000",
									fillOpacity: .2
								}), u.jsx("path", {
									fill: "#FFF",
									d: "M32 16a16 16 0 0 1-16 16V16z"
								})]
							})
						]
					})]
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PreviewSlidesIcon = d;
}), 98);
