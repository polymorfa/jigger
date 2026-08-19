__d("WAWebPreviewSlidesIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "preview-slides";
	function d(t) {
		var n = o("react-compiler-runtime").c(31), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 110, "0 0 110 88"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsxs("g", {
			transform: "translate(4 3)",
			children: [u.jsx("use", {
				xlinkHref: "#WAWebPreviewSlidesIcon__path-1",
				fill: "#000",
				filter: "url(#WAWebPreviewSlidesIcon__filter-2)"
			}), u.jsx("rect", {
				width: 105,
				height: 81,
				x: -.5,
				y: -.5,
				fill: "#FFF",
				stroke: "#000",
				strokeOpacity: .08,
				rx: 3
			})]
		}), n[12] = h) : h = n[12];
		var y, C, b, v, S;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx("rect", {
			width: 96,
			height: 56,
			fill: "#000",
			fillOpacity: .1,
			rx: 2
		}), y = u.jsx("rect", {
			width: 30,
			height: 2,
			x: 55,
			y: 19,
			fill: "#000",
			fillOpacity: .2,
			rx: .5
		}), C = u.jsx("rect", {
			width: 30,
			height: 2,
			x: 55,
			y: 24,
			fill: "#000",
			fillOpacity: .2,
			rx: .5
		}), b = u.jsx("rect", {
			width: 30,
			height: 2,
			x: 55,
			y: 29,
			fill: "#000",
			fillOpacity: .2,
			rx: .5
		}), v = u.jsx("rect", {
			width: 18,
			height: 2,
			x: 55,
			y: 34,
			fill: "#000",
			fillOpacity: .2,
			rx: .5
		}), n[13] = y, n[14] = C, n[15] = b, n[16] = v, n[17] = S) : (y = n[13], C = n[14], b = n[15], v = n[16], S = n[17]);
		var R;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [h, u.jsxs("g", {
				transform: "translate(8 15)",
				children: [
					S,
					y,
					C,
					b,
					v,
					u.jsxs("g", {
						transform: "translate(12 13)",
						children: [u.jsx("circle", {
							cx: 16,
							cy: 16,
							r: 16,
							fill: "#000",
							fillOpacity: .2
						}), u.jsx("path", {
							fill: "#FFF",
							d: "M32 16a16 16 0 0 1-16 16V16z"
						})]
					})
				]
			})]
		}), n[18] = R) : R = n[18];
		var L;
		n[19] !== l || n[20] !== s || n[21] !== d || n[22] !== m || n[23] !== p || n[24] !== g ? (L = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			children: [g, R]
		}), n[19] = l, n[20] = s, n[21] = d, n[22] = m, n[23] = p, n[24] = g, n[25] = L) : L = n[25];
		var E;
		return n[26] !== a || n[27] !== L || n[28] !== _ || n[29] !== f ? (E = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: L
		})), n[26] = a, n[27] = L, n[28] = _, n[29] = f, n[30] = E) : E = n[30], E;
	}
	l.PreviewSlidesIcon = d;
}), 98);
