__d("WAWebVideoPipIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-pip";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("defs", { children: u.jsxs("filter", {
			id: "WAWebVideoPipIcon__a",
			width: "173.7%",
			height: "200%",
			x: "-39.5%",
			y: "-46.4%",
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
					result: "shadowMatrixOuter1",
					values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
				}),
				u.jsxs("feMerge", { children: [u.jsx("feMergeNode", { in: "shadowMatrixOuter1" }), u.jsx("feMergeNode", { in: "SourceGraphic" })] })
			]
		}) }), n[12] = h) : h = n[12];
		var y;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsxs("g", {
			fill: "#FFFFFF",
			fillRule: "evenodd",
			filter: "url(#WAWebVideoPipIcon__a)",
			transform: "translate(3 4)",
			children: [u.jsx("path", { d: "M11.35 6h6c.66 0 1.2-.54 1.2-1.2V1.2c0-.66-.54-1.2-1.2-1.2h-6c-.66 0-1.2.54-1.2 1.2v3.6c0 .66.54 1.2 1.2 1.2" }), u.jsx("path", {
				fillRule: "nonzero",
				d: "M8.65 1.87v1.5H1.2c-.25 0-.45.2-.45.45v8.6c0 .25.2.45.45.45h13.4c.25 0 .45-.2.45-.45V7.17h1.5v5.25c0 1.08-.87 1.95-1.95 1.95H1.2a1.95 1.95 0 0 1-1.95-1.95v-8.6c0-1.07.87-1.95 1.95-1.95h7.45Z"
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
	l.VideoPipIcon = d;
}), 98);
