__d("WAWebVideoExitFullscreenIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-exit-fullscreen";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
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
						id: "WAWebVideoExitFullscreenIcon__b",
						width: "131.8%",
						height: "131.8%",
						x: "-15.9%",
						y: "-11.4%",
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
						id: "WAWebVideoExitFullscreenIcon__a",
						d: "M15.04 1.94v7.02h7.02c.52 0 .94-.42.94-.94V7.1a.94.94 0 0 0-.94-.94h-4.2V1.94A.94.94 0 0 0 16.9 1h-.93a.94.94 0 0 0-.94.94Zm-8.9 0v4.2h-4.2A.94.94 0 0 0 1 7.1v.93c0 .52.42.94.94.94h7.02V1.94A.94.94 0 0 0 8.02 1H7.1a.94.94 0 0 0-.94.94Zm8.9 13.1v7.02c0 .52.42.94.94.94h.93c.52 0 .94-.42.94-.94v-4.2h4.21c.52 0 .94-.43.94-.95v-.93a.94.94 0 0 0-.94-.94h-7.02ZM1 15.98v.93c0 .52.42.94.94.94h4.2v4.21c0 .52.43.94.95.94h.93c.52 0 .94-.42.94-.94v-7.02H1.94a.94.94 0 0 0-.94.94Z"
					})] }),
					u.jsxs("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [u.jsx("use", {
							xlinkHref: "#WAWebVideoExitFullscreenIcon__a",
							fill: "black",
							filter: "url(#WAWebVideoExitFullscreenIcon__b)"
						}), u.jsx("use", {
							xlinkHref: "#WAWebVideoExitFullscreenIcon__a",
							fill: "#FFFFFF"
						})]
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.VideoExitFullscreenIcon = d;
}), 98);
