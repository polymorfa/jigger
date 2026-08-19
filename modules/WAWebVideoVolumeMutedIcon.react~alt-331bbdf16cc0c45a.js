__d("WAWebVideoVolumeMutedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-volume-muted";
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
					u.jsxs("defs", { children: [
						u.jsxs("filter", {
							id: "WAWebVideoVolumeMutedIcon__b",
							width: "177.8%",
							height: "144.4%",
							x: "-38.9%",
							y: "-16.5%",
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
						}),
						u.jsxs("filter", {
							id: "WAWebVideoVolumeMutedIcon__d",
							width: "175.9%",
							height: "175.9%",
							x: "-37.9%",
							y: "-27.1%",
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
						}),
						u.jsx("path", {
							id: "WAWebVideoVolumeMutedIcon__a",
							d: "M3 16.96c0 .61.5 1.1 1.13 1.1H7l4.1 4.04c.33.32.9.1.9-.37V8.52c0-.46-.57-.7-.9-.37L7 12.18H4.13c-.62 0-1.13.5-1.13 1.11v3.67Z"
						}),
						u.jsx("path", {
							id: "WAWebVideoVolumeMutedIcon__c",
							d: "m22.83 14.6 3.16 3.15c.28.29.28.75 0 1.03l-.2.2a.73.73 0 0 1-1.04 0l-3.16-3.15-3.16 3.16a.73.73 0 0 1-1.03 0l-.2-.2a.73.73 0 0 1 0-1.04l3.15-3.16-3.16-3.16a.73.73 0 0 1 0-1.03l.2-.2a.73.73 0 0 1 1.04 0l3.16 3.15 3.16-3.16a.73.73 0 0 1 1.03 0l.2.2c.3.3.3.75 0 1.04l-3.15 3.16Z"
						})
					] }),
					u.jsxs("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [
							u.jsx("use", {
								xlinkHref: "#WAWebVideoVolumeMutedIcon__a",
								fill: "black",
								filter: "url(#WAWebVideoVolumeMutedIcon__b)"
							}),
							u.jsx("use", {
								xlinkHref: "#WAWebVideoVolumeMutedIcon__a",
								fill: "#FFFFFF"
							}),
							u.jsx("use", {
								xlinkHref: "#WAWebVideoVolumeMutedIcon__c",
								fill: "black",
								filter: "url(#WAWebVideoVolumeMutedIcon__d)"
							}),
							u.jsx("use", {
								xlinkHref: "#WAWebVideoVolumeMutedIcon__c",
								fill: "#FFFFFF"
							})
						]
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.VideoVolumeMutedIcon = d;
}), 98);
