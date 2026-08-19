__d("WAWebVideoVolumeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-volume";
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
							id: "WAWebVideoVolumeIcon__b",
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
							id: "WAWebVideoVolumeIcon__d",
							width: "190.6%",
							height: "141.7%",
							x: "-43.9%",
							y: "-10.5%",
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
							id: "WAWebVideoVolumeIcon__f",
							width: "230.1%",
							height: "130.4%",
							x: "-63.5%",
							y: "-7.7%",
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
							id: "WAWebVideoVolumeIcon__a",
							d: "M3 16.96c0 .61.5 1.1 1.13 1.1H7l4.1 4.04c.33.32.9.1.9-.37V8.52c0-.46-.57-.7-.9-.37L7 12.18H4.13c-.62 0-1.13.5-1.13 1.11v3.67Z"
						}),
						u.jsx("path", {
							id: "WAWebVideoVolumeIcon__c",
							d: "M18.93 19.5a.65.65 0 0 1-.44-.17l-.3-.27a.56.56 0 0 1-.17-.43c0-.16.07-.3.2-.4a3.97 3.97 0 0 0 1.52-3.1c0-1.2-.56-2.33-1.53-3.1a.53.53 0 0 1-.21-.4c0-.16.06-.32.18-.43l.3-.28a.66.66 0 0 1 .83-.04 5.47 5.47 0 0 1 2.07 4.25 5.5 5.5 0 0 1-2.05 4.24.63.63 0 0 1-.4.13m2.9 2.75a.64.64 0 0 1-.43-.17l-.3-.28a.55.55 0 0 1 .02-.82 7.77 7.77 0 0 0 2.73-5.85c0-2.22-1-4.35-2.74-5.86a.55.55 0 0 1-.02-.82l.3-.28a.65.65 0 0 1 .87-.01 9.28 9.28 0 0 1 3.24 6.97 9.28 9.28 0 0 1-3.23 6.96.65.65 0 0 1-.43.16"
						}),
						u.jsx("path", {
							id: "WAWebVideoVolumeIcon__e",
							d: "M24.83 24.5a.55.55 0 0 1-.4-.17l-.25-.27a.58.58 0 0 1-.17-.4c0-.16.07-.3.17-.4a11.9 11.9 0 0 0-.01-17.02.55.55 0 0 1-.17-.4c0-.15.06-.3.16-.4l.27-.27c.1-.11.24-.17.4-.17a.6.6 0 0 1 .4.17 13.26 13.26 0 0 1 4.02 9.59c0 3.65-1.43 7.05-4.01 9.58a.61.61 0 0 1-.4.16"
						})
					] }),
					u.jsxs("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [
							u.jsx("use", {
								xlinkHref: "#WAWebVideoVolumeIcon__a",
								fill: "black",
								filter: "url(#WAWebVideoVolumeIcon__b)"
							}),
							u.jsx("use", {
								xlinkHref: "#WAWebVideoVolumeIcon__a",
								fill: "#FFFFFF"
							}),
							u.jsx("use", {
								xlinkHref: "#WAWebVideoVolumeIcon__c",
								fill: "black",
								filter: "url(#WAWebVideoVolumeIcon__d)"
							}),
							u.jsx("use", {
								xlinkHref: "#WAWebVideoVolumeIcon__c",
								fill: "#FFFFFF"
							}),
							u.jsx("use", {
								xlinkHref: "#WAWebVideoVolumeIcon__e",
								fill: "black",
								filter: "url(#WAWebVideoVolumeIcon__f)"
							}),
							u.jsx("use", {
								xlinkHref: "#WAWebVideoVolumeIcon__e",
								fill: "#FFFFFF"
							})
						]
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.VideoVolumeIcon = d;
}), 98);
