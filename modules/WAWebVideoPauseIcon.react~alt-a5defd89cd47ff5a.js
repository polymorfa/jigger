__d("WAWebVideoPauseIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-pause";
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
						id: "WAWebVideoPauseIcon__b",
						width: "147.8%",
						height: "142.5%",
						x: "-23.9%",
						y: "-15.2%",
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
						id: "WAWebVideoPauseIcon__a",
						d: "M22.55 8H19.8c-.62 0-1.11.5-1.11 1.1v14.26c0 .6.5 1.1 1.1 1.1h2.77c.61 0 1.1-.5 1.1-1.1V9.1c0-.61-.49-1.1-1.1-1.1m-9.69 0h-2.76C9.5 8 9 8.5 9 9.1v14.26c0 .6.5 1.1 1.1 1.1h2.77c.61 0 1.1-.5 1.1-1.1V9.1a1.1 1.1 0 0 0-1.1-1.11"
					})] }),
					u.jsxs("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [u.jsx("use", {
							xlinkHref: "#WAWebVideoPauseIcon__a",
							fill: "black",
							filter: "url(#WAWebVideoPauseIcon__b)"
						}), u.jsx("use", {
							xlinkHref: "#WAWebVideoPauseIcon__a",
							fill: "#FFFFFF"
						})]
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.VideoPauseIcon = d;
}), 98);
