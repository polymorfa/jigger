__d("WAWebVideoFullscreenIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-fullscreen";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsxs("defs", { children: [u.jsxs("filter", {
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
		})] }), n[12] = h) : h = n[12];
		var y;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsxs("g", {
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
	l.VideoFullscreenIcon = d;
}), 98);
