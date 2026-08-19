__d("WAWebVideoVolumeMutedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-volume-muted";
	function d(t) {
		var n = o("react-compiler-runtime").c(27), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 32, 32, "0 0 32 32"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsxs("filter", {
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
		}), n[12] = h) : h = n[12];
		var y;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsxs("defs", { children: [
			h,
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
		] }), n[13] = y) : y = n[13];
		var C;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsxs("g", {
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
		}), n[14] = C) : C = n[14];
		var b;
		n[15] !== l || n[16] !== s || n[17] !== d || n[18] !== m || n[19] !== p || n[20] !== g ? (b = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			children: [
				g,
				y,
				C
			]
		}), n[15] = l, n[16] = s, n[17] = d, n[18] = m, n[19] = p, n[20] = g, n[21] = b) : b = n[21];
		var v;
		return n[22] !== a || n[23] !== b || n[24] !== _ || n[25] !== f ? (v = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: b
		})), n[22] = a, n[23] = b, n[24] = _, n[25] = f, n[26] = v) : v = n[26], v;
	}
	l.VideoVolumeMutedIcon = d;
}), 98);
