__d("WAWebVideoExitFullscreenIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-exit-fullscreen";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsxs("defs", { children: [u.jsxs("filter", {
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
		})] }), n[12] = h) : h = n[12];
		var y;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsxs("g", {
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
		}), n[13] = y) : y = n[13];
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			children: [
				g,
				h,
				y
			]
		}), n[14] = l, n[15] = s, n[16] = d, n[17] = m, n[18] = p, n[19] = g, n[20] = C) : C = n[20];
		var b;
		return n[21] !== a || n[22] !== C || n[23] !== _ || n[24] !== f ? (b = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: C
		})), n[21] = a, n[22] = C, n[23] = _, n[24] = f, n[25] = b) : b = n[25], b;
	}
	l.VideoExitFullscreenIcon = d;
}), 98);
