__d("WAWebPreviewCompressedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "preview-compressed";
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
						id: "WAWebPreviewCompressedIcon__a",
						d: "M3 0h56.93a5 5 0 0 1 3.53 1.46l15.08 15.08A5 5 0 0 1 80 20.07V101a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"
					}) }),
					u.jsxs("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [
							u.jsxs("g", {
								transform: "translate(4 3)",
								children: [
									u.jsx("use", {
										xlinkHref: "#WAWebPreviewCompressedIcon__a",
										fill: "#000",
										filter: "url(#WAWebPreviewCompressedIcon__filter-3)"
									}),
									u.jsx("use", {
										xlinkHref: "#WAWebPreviewCompressedIcon__a",
										fill: "#FFF"
									}),
									u.jsx("path", {
										fill: "url(#WAWebPreviewCompressedIcon__linearGradient-1)",
										stroke: "#000",
										strokeOpacity: .08,
										d: "M3-.5h56.93a5.5 5.5 0 0 1 3.89 1.61l15.07 15.07a5.5 5.5 0 0 1 1.61 3.9V101a3.5 3.5 0 0 1-3.5 3.5H3A3.5 3.5 0 0 1-.5 101V3A3.5 3.5 0 0 1 3-.5z"
									})
								]
							}),
							u.jsxs("g", {
								fill: "#000",
								transform: "translate(39 44)",
								children: [
									u.jsx("rect", {
										width: 5,
										height: 2,
										y: 61,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										x: 5,
										y: 58,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										y: 55,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										x: 5,
										y: 52,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										y: 49,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										x: 5,
										y: 46,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										y: 43,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										x: 5,
										y: 40,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										y: 37,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										x: 5,
										y: 34,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										y: 31,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										x: 5,
										y: 28,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										y: 25,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										x: 5,
										y: 22,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										y: 19,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("rect", {
										width: 5,
										height: 3,
										x: 5,
										y: 16,
										fillOpacity: .1,
										rx: .5
									}),
									u.jsx("path", {
										fillOpacity: .2,
										d: "M8 0a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6zM7 2H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
									})
								]
							}),
							u.jsx("path", {
								fill: "#FFF",
								stroke: "#000",
								strokeOpacity: .12,
								d: "M65.5 3.5v15a3 3 0 0 0 3 3h15"
							})
						]
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PreviewCompressedIcon = d;
}), 98);
