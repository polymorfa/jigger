__d("WAWebVideoPlayIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-play";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 32, 32, "0 0 32 32");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsxs("defs", { children: [u.jsxs("filter", {
						id: "WAWebVideoPlayIcon__b",
						width: "142.7%",
						height: "138.1%",
						x: "-21.4%",
						y: "-13.6%",
						filterUnits: "objectBoundingBox",
						children: [
							u.jsx("feOffset", {
								dy: 1,
								in: "SourceAlpha",
								result: "shadowOffsetOuter1"
							}),
							u.jsx("feGaussianBlur", {
								in: "shadowOffsetOuter1",
								result: "shadowBlurOuter1",
								stdDeviation: 1
							}),
							u.jsx("feColorMatrix", {
								in: "shadowBlurOuter1",
								values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
							})
						]
					}), u.jsx("path", {
						id: "WAWebVideoPlayIcon__a",
						d: "m24.4 14.8-13-7.5C10.1 6.6 9 7.2 9 8.7v15c0 1.5 1.1 2.1 2.4 1.4l13-7.5c1.3-.9 1.3-2.1 0-2.8Z"
					})] }),
					u.jsxs("g", {
						fill: "none",
						children: [u.jsx("use", {
							xlinkHref: "#WAWebVideoPlayIcon__a",
							fill: "black",
							filter: "url(#WAWebVideoPlayIcon__b)"
						}), u.jsx("use", {
							xlinkHref: "#WAWebVideoPlayIcon__a",
							fill: "#FFFFFF",
							fillRule: "evenodd"
						})]
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.VideoPlayIcon = d;
}), 98);
