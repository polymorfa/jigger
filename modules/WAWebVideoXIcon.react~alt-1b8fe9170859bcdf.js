__d("WAWebVideoXIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-x";
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
						id: "WAWebVideoXIcon__b",
						width: "146.3%",
						height: "146.3%",
						x: "-23.2%",
						y: "-15.6%",
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
						id: "WAWebVideoXIcon__a",
						d: "m17.53 5.42-4.89 4.9-4.89-4.9a.6.6 0 0 0-.85 0l-.48.48a.6.6 0 0 0 0 .85l4.9 4.89-4.9 4.89a.6.6 0 0 0 0 .84l.48.48a.6.6 0 0 0 .85 0l4.89-4.88 4.89 4.88a.6.6 0 0 0 .85 0l.47-.48a.6.6 0 0 0 0-.84l-4.88-4.9 4.88-4.88a.6.6 0 0 0 0-.85l-.47-.48a.6.6 0 0 0-.85 0Z"
					})] }),
					u.jsxs("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [u.jsx("use", {
							xlinkHref: "#WAWebVideoXIcon__a",
							fill: "black",
							filter: "url(#WAWebVideoXIcon__b)"
						}), u.jsx("use", {
							xlinkHref: "#WAWebVideoXIcon__a",
							fill: "#FFFFFF"
						})]
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.VideoXIcon = d;
}), 98);
