__d("WAWebPreviewDocIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "preview-doc";
	function d(t) {
		var n = o("react-compiler-runtime").c(34), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 110, 88, "0 0 88 110"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsxs("defs", { children: [u.jsx("rect", {
			id: "WAWebPreviewDocIcon__b",
			width: 54,
			height: 36,
			x: 0,
			y: 0,
			rx: 2.37
		}), u.jsx("path", {
			id: "WAWebPreviewDocIcon__a",
			d: "M3 0h56.93a5 5 0 0 1 3.53 1.46l15.08 15.08A5 5 0 0 1 80 20.07V101a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"
		})] }), n[12] = h) : h = n[12];
		var y, C, b, v, S, R, L, E;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx("use", {
			xlinkHref: "#WAWebPreviewDocIcon__a",
			fill: "#000",
			filter: "url(#WAWebPreviewDocIcon__filter-3)"
		}), y = u.jsx("use", {
			xlinkHref: "#WAWebPreviewDocIcon__a",
			fill: "#FFF"
		}), C = u.jsx("path", {
			fill: "url(#WAWebPreviewDocIcon__linearGradient-1)",
			stroke: "#000",
			strokeOpacity: .08,
			d: "M3-.5h56.93a5.5 5.5 0 0 1 3.89 1.61l15.07 15.07a5.5 5.5 0 0 1 1.61 3.9V101a3.5 3.5 0 0 1-3.5 3.5H3A3.5 3.5 0 0 1-.5 101V3A3.5 3.5 0 0 1 3-.5z"
		}), b = u.jsx("rect", {
			width: 54,
			height: 2,
			x: 13,
			y: 84,
			fill: "#000",
			fillOpacity: .2,
			rx: .5
		}), v = u.jsx("rect", {
			width: 27,
			height: 2,
			x: 13,
			y: 89,
			fill: "#000",
			fillOpacity: .2,
			rx: .5
		}), S = u.jsx("rect", {
			width: 54,
			height: 2,
			x: 13,
			y: 24,
			fill: "#000",
			fillOpacity: .2,
			rx: .5
		}), R = u.jsx("rect", {
			width: 54,
			height: 2,
			x: 13,
			y: 29,
			fill: "#000",
			fillOpacity: .2,
			rx: .5
		}), L = u.jsx("rect", {
			width: 40,
			height: 2,
			x: 13,
			y: 34,
			fill: "#000",
			fillOpacity: .2,
			rx: .5
		}), n[13] = y, n[14] = C, n[15] = b, n[16] = v, n[17] = S, n[18] = R, n[19] = L, n[20] = E) : (y = n[13], C = n[14], b = n[15], v = n[16], S = n[17], R = n[18], L = n[19], E = n[20]);
		var k;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			transform: "translate(4 3)",
			children: [
				E,
				y,
				C,
				b,
				v,
				S,
				R,
				L,
				u.jsxs("g", {
					transform: "translate(13 42)",
					children: [
						u.jsx("mask", {
							id: "WAWebPreviewDocIcon__c",
							fill: "#fff",
							children: u.jsx("use", { xlinkHref: "#WAWebPreviewDocIcon__b" })
						}),
						u.jsx("use", {
							xlinkHref: "#WAWebPreviewDocIcon__b",
							fill: "#000",
							fillOpacity: .1
						}),
						u.jsx("circle", {
							cx: 37.5,
							cy: 11.5,
							r: 5.5,
							fill: "#000",
							fillOpacity: .1,
							mask: "url(#WAWebPreviewDocIcon__c)"
						}),
						u.jsx("path", {
							fill: "#000",
							fillOpacity: .1,
							d: "m34.56 31.2 7.92-7.9a2.37 2.37 0 0 1 3.34 0l25.15 25.08-26.82 26.74-19.56-19.5-11.26 11.23-26.81-26.75 25.14-25.07a2.37 2.37 0 0 1 3.35 0L31.2 31.2a2.37 2.37 0 0 0 3.35 0z",
							mask: "url(#WAWebPreviewDocIcon__c)"
						})
					]
				}),
				u.jsx("path", {
					fill: "#FFF",
					stroke: "#000",
					strokeOpacity: .12,
					d: "M61.5.5v15a3 3 0 0 0 3 3h15"
				})
			]
		}), n[21] = k) : k = n[21];
		var I;
		n[22] !== l || n[23] !== s || n[24] !== d || n[25] !== m || n[26] !== p || n[27] !== g ? (I = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			children: [
				g,
				h,
				k
			]
		}), n[22] = l, n[23] = s, n[24] = d, n[25] = m, n[26] = p, n[27] = g, n[28] = I) : I = n[28];
		var T;
		return n[29] !== a || n[30] !== I || n[31] !== _ || n[32] !== f ? (T = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: I
		})), n[29] = a, n[30] = I, n[31] = _, n[32] = f, n[33] = T) : T = n[33], T;
	}
	l.PreviewDocIcon = d;
}), 98);
