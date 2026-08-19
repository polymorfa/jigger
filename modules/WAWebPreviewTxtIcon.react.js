__d("WAWebPreviewTxtIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "preview-txt";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 110, 88, "0 0 88 110"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("defs", { children: u.jsx("path", {
			id: "WAWebPreviewTxtIcon__a",
			d: "M3 0h56.93a5 5 0 0 1 3.53 1.46l15.08 15.08A5 5 0 0 1 80 20.07V101a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"
		}) }), n[12] = h) : h = n[12];
		var y;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			transform: "translate(4 3)",
			children: [
				u.jsx("use", {
					xlinkHref: "#WAWebPreviewTxtIcon__a",
					fill: "#000",
					filter: "url(#WAWebPreviewTxtIcon__filter-3)"
				}),
				u.jsx("use", {
					xlinkHref: "#WAWebPreviewTxtIcon__a",
					fill: "#FFF"
				}),
				u.jsx("path", {
					fill: "url(#WAWebPreviewTxtIcon__linearGradient-1)",
					stroke: "#000",
					strokeOpacity: .08,
					d: "M3-.5h56.93a5.5 5.5 0 0 1 3.89 1.61l15.07 15.07a5.5 5.5 0 0 1 1.61 3.9V101a3.5 3.5 0 0 1-3.5 3.5H3A3.5 3.5 0 0 1-.5 101V3A3.5 3.5 0 0 1 3-.5z"
				}),
				u.jsx("rect", {
					width: 52,
					height: 2,
					x: 13,
					y: 28,
					fill: "#000",
					fillOpacity: .2,
					rx: .5
				}),
				u.jsx("rect", {
					width: 52,
					height: 2,
					x: 13,
					y: 33,
					fill: "#000",
					fillOpacity: .2,
					rx: .5
				}),
				u.jsx("rect", {
					width: 52,
					height: 2,
					x: 13,
					y: 38,
					fill: "#000",
					fillOpacity: .2,
					rx: .5
				}),
				u.jsx("rect", {
					width: 40,
					height: 2,
					x: 13,
					y: 43,
					fill: "#000",
					fillOpacity: .2,
					rx: .5
				}),
				u.jsx("rect", {
					width: 52,
					height: 2,
					x: 13,
					y: 53,
					fill: "#000",
					fillOpacity: .2,
					rx: .5
				}),
				u.jsx("rect", {
					width: 52,
					height: 2,
					x: 13,
					y: 58,
					fill: "#000",
					fillOpacity: .2,
					rx: .5
				}),
				u.jsx("rect", {
					width: 52,
					height: 2,
					x: 13,
					y: 63,
					fill: "#000",
					fillOpacity: .2,
					rx: .5
				}),
				u.jsx("rect", {
					width: 52,
					height: 2,
					x: 13,
					y: 68,
					fill: "#000",
					fillOpacity: .2,
					rx: .5
				}),
				u.jsx("rect", {
					width: 52,
					height: 2,
					x: 13,
					y: 73,
					fill: "#000",
					fillOpacity: .2,
					rx: .5
				}),
				u.jsx("rect", {
					width: 27,
					height: 2,
					x: 13,
					y: 78,
					fill: "#000",
					fillOpacity: .2,
					rx: .5
				}),
				u.jsx("path", {
					fill: "#FFF",
					stroke: "#000",
					strokeOpacity: .12,
					d: "M61.5.5v15a3 3 0 0 0 3 3h15"
				})
			]
		}), n[13] = y) : y = n[13];
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
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
	l.PreviewTxtIcon = d;
}), 98);
