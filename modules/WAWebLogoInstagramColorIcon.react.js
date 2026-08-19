__d("WAWebLogoInstagramColorIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "logo-instagram-color";
	function d(t) {
		var n = o("react-compiler-runtime").c(30), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 22, 24, "0 0 24 22"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx("path", {
			fill: "url(#WAWebLogoInstagramColorIcon__a)",
			d: "M17.93 0H8.07A6.08 6.08 0 0 0 2 6.07v9.86A6.08 6.08 0 0 0 8.07 22h9.86A6.08 6.08 0 0 0 24 15.93V6.07A6.08 6.08 0 0 0 17.93 0Zm4.12 15.93a4.12 4.12 0 0 1-4.12 4.12H8.07a4.12 4.12 0 0 1-4.12-4.12V6.07a4.12 4.12 0 0 1 4.12-4.12h9.86a4.12 4.12 0 0 1 4.12 4.12v9.86Z"
		}), C = u.jsx("path", {
			fill: "url(#WAWebLogoInstagramColorIcon__b)",
			d: "M13 5.06a5.95 5.95 0 1 0 .01 11.9A5.95 5.95 0 0 0 13 5.05Zm0 9.83a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8Z"
		}), h = u.jsx("path", {
			fill: "url(#WAWebLogoInstagramColorIcon__c)",
			d: "M19.19 3.33a1.5 1.5 0 0 0-1.5 1.5 1.51 1.51 0 0 0 1.5 1.5 1.51 1.51 0 0 0 1.06-2.56 1.5 1.5 0 0 0-1.06-.44Z"
		}), n[12] = h, n[13] = y, n[14] = C) : (h = n[12], y = n[13], C = n[14]);
		var b;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsxs("linearGradient", {
			id: "WAWebLogoInstagramColorIcon__a",
			x1: 24,
			x2: 2,
			y1: 0,
			y2: 22,
			gradientUnits: "userSpaceOnUse",
			children: [
				u.jsx("stop", { stopColor: "#B630A1" }),
				u.jsx("stop", {
					offset: .49,
					stopColor: "#DB2F76"
				}),
				u.jsx("stop", {
					offset: 1,
					stopColor: "#FBB15B"
				})
			]
		}), n[15] = b) : b = n[15];
		var v;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsxs("linearGradient", {
			id: "WAWebLogoInstagramColorIcon__b",
			x1: 22,
			x2: 4,
			y1: 1.5,
			y2: 19.5,
			gradientUnits: "userSpaceOnUse",
			children: [u.jsx("stop", { stopColor: "#DA2E7A" }), u.jsx("stop", {
				offset: 1,
				stopColor: "#F06846"
			})]
		}), n[16] = v) : v = n[16];
		var S;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsxs("defs", { children: [
			b,
			v,
			u.jsxs("linearGradient", {
				id: "WAWebLogoInstagramColorIcon__c",
				x1: 21,
				x2: 17.5,
				y1: 3,
				y2: 6.5,
				gradientUnits: "userSpaceOnUse",
				children: [u.jsx("stop", { stopColor: "#BE3099" }), u.jsx("stop", {
					offset: 1,
					stopColor: "#E1406B"
				})]
			})
		] }), n[17] = S) : S = n[17];
		var R;
		n[18] !== l || n[19] !== s || n[20] !== d || n[21] !== m || n[22] !== p || n[23] !== g ? (R = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				y,
				C,
				h,
				S
			]
		}), n[18] = l, n[19] = s, n[20] = d, n[21] = m, n[22] = p, n[23] = g, n[24] = R) : R = n[24];
		var L;
		return n[25] !== a || n[26] !== R || n[27] !== _ || n[28] !== f ? (L = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: R
		})), n[25] = a, n[26] = R, n[27] = _, n[28] = f, n[29] = L) : L = n[29], L;
	}
	l.LogoInstagramColorIcon = d;
}), 98);
