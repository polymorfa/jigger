__d("WAWebVideoFullscreenIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-fullscreen";
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
						id: "WAWebVideoFullscreenIcon__b",
						width: "150%",
						height: "150%",
						x: "-25%",
						y: "-17.9%",
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
						id: "WAWebVideoFullscreenIcon__a",
						d: "M14 5.6v.59c0 .33.27.6.6.6h2.61V9.4c0 .33.27.6.6.6h.59a.6.6 0 0 0 .6-.6V5h-4.4a.6.6 0 0 0-.6.6ZM5 5v4.4c0 .33.27.6.6.6h.59a.6.6 0 0 0 .6-.6V6.79H9.4a.6.6 0 0 0 .6-.6V5.6a.6.6 0 0 0-.6-.6H5Zm12.21 9.6v2.61H14.6a.6.6 0 0 0-.6.6v.59c0 .33.27.6.6.6H19v-4.4a.6.6 0 0 0-.6-.6h-.59a.6.6 0 0 0-.6.6ZM5 14.6V19h4.4a.6.6 0 0 0 .6-.6v-.59a.6.6 0 0 0-.6-.6H6.79V14.6a.6.6 0 0 0-.6-.6H5.6a.6.6 0 0 0-.6.6Z"
					})] }),
					u.jsxs("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [u.jsx("use", {
							xlinkHref: "#WAWebVideoFullscreenIcon__a",
							fill: "black",
							filter: "url(#WAWebVideoFullscreenIcon__b)"
						}), u.jsx("use", {
							xlinkHref: "#WAWebVideoFullscreenIcon__a",
							fill: "#FFFFFF"
						})]
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.VideoFullscreenIcon = d;
}), 98);
