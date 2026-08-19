__d("FDSFacepilePhoto.react", [
	"BaseView.react",
	"FDSBadgeContainer.react",
	"FDSProfilePhoto_EXPERIMENTAL.react",
	"FDSText.react",
	"react",
	"react-compiler-runtime",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		item: {
			position: "x10l6tqk",
			$$css: !0
		},
		moreItem: {
			alignItems: "x6s0dn4",
			backgroundColor: "x1qhmfi1",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			height: "x5yr21d",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		moreItemFontWeight: {
			fontWeight: "x1s688f",
			$$css: !0
		},
		moreItemInsetBorder: {
			borderStartStartRadius: "x1fmog5m",
			borderStartEndRadius: "xu25z0z",
			borderEndEndRadius: "x140muxe",
			borderEndStartRadius: "xo1y3bh",
			bottom: "x1ey2m1c",
			boxShadow: "xlg9a9y",
			insetInlineEnd: "xtijo5x",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			position: "x10l6tqk",
			top: "x13vifvy",
			$$css: !0
		},
		smallBadgeFontSize: {
			fontSize: "x190qgfh",
			$$css: !0
		}
	}, c = 48, d = {
		20: {
			height: "x1qx5ct2",
			width: "xw4jnvo",
			$$css: !0
		},
		28: {
			height: "x1fgtraw",
			width: "xgd8bvy",
			$$css: !0
		},
		32: {
			height: "x10w6t97",
			width: "x1td3qas",
			$$css: !0
		},
		36: {
			height: "xc9qbxq",
			width: "x14qfxbe",
			$$css: !0
		},
		40: {
			height: "x1vqgdyp",
			width: "x100vrsf",
			$$css: !0
		},
		44: {
			height: "xn3w4p2",
			width: "x187nhsf",
			$$css: !0
		},
		48: {
			height: "xsdox4t",
			width: "x1useyqa",
			$$css: !0
		},
		56: {
			height: "xnnlda6",
			width: "x15yg21f",
			$$css: !0
		},
		60: {
			height: "xng8ra",
			width: "x1247r65",
			$$css: !0
		},
		72: {
			height: "xy75621",
			width: "xni59qk",
			$$css: !0
		},
		80: {
			height: "xwzfr38",
			width: "x1dmp6jm",
			$$css: !0
		},
		120: {
			height: "x1wkxgih",
			width: "xygnafs",
			$$css: !0
		}
	}, m = {
		1: {
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		2: {
			height: "x1auzw0x",
			width: "xqu606t",
			$$css: !0
		},
		3: {
			height: "xs1gewo",
			width: "x87lv02",
			$$css: !0
		},
		4: {
			height: "xs1gewo",
			width: "x87lv02",
			$$css: !0
		}
	}, p = {
		0: {
			borderTopColor: "x6zyg47",
			borderInlineEndColor: "x1lu4ftm",
			borderBottomColor: "xpn8fn3",
			borderInlineStartColor: "x114g2xr",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			bottom: "x1ey2m1c",
			boxSizing: "x1afcbsf",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			marginTop: "x1kgmq87",
			marginInlineEnd: "x11lt19s",
			marginBottom: "xmgb6t1",
			marginInlineStart: "xe9ewy2",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		1: {
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			top: "x13vifvy",
			$$css: !0
		}
	}, _ = {
		0: {
			borderTopColor: "x6zyg47",
			borderInlineEndColor: "x1lu4ftm",
			borderBottomColor: "xpn8fn3",
			borderInlineStartColor: "x114g2xr",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			bottom: "x1ey2m1c",
			boxSizing: "x1afcbsf",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			marginTop: "x1kgmq87",
			marginInlineEnd: "x11lt19s",
			marginBottom: "xmgb6t1",
			marginInlineStart: "xe9ewy2",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		1: {
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			top: "x13vifvy",
			$$css: !0
		}
	}, f = {
		0: {
			left: "x1nrll8i",
			insetInlineStart: null,
			insetInlineEnd: null,
			top: "xnfr1j",
			transform: "xuuh30",
			$$css: !0
		},
		1: {
			bottom: "x19ip775",
			insetInlineStart: "x14q0ukc",
			left: null,
			right: null,
			$$css: !0
		},
		2: {
			bottom: "x19ip775",
			insetInlineEnd: "x1h1655f",
			left: null,
			right: null,
			$$css: !0
		}
	}, g = {
		0: {
			insetInlineStart: "x14q0ukc",
			left: null,
			right: null,
			top: "xnfr1j",
			$$css: !0
		},
		1: {
			bottom: "x19ip775",
			insetInlineStart: "x14q0ukc",
			left: null,
			right: null,
			$$css: !0
		},
		2: {
			insetInlineEnd: "x1h1655f",
			left: null,
			right: null,
			top: "xnfr1j",
			$$css: !0
		},
		3: {
			bottom: "x19ip775",
			insetInlineEnd: "x1h1655f",
			left: null,
			right: null,
			$$css: !0
		}
	}, h = {
		circle: { $$css: !0 },
		rounded: {
			backgroundColor: "x1jx94hy",
			borderStartStartRadius: "x16qb05n",
			borderStartEndRadius: "xi7iut8",
			borderEndEndRadius: "x1dm3dyd",
			borderEndStartRadius: "x1pv694p",
			$$css: !0
		},
		square: {
			backgroundColor: "x1jx94hy",
			borderStartStartRadius: "x15mokao",
			borderStartEndRadius: "x1ga7v0g",
			borderEndEndRadius: "x16uus16",
			borderEndStartRadius: "xbiv7yw",
			$$css: !0
		}
	};
	function y(e) {
		var t = o("react-compiler-runtime").c(41), n = e.ariaHidden, a = e.badge, i = e.badgeAlign, l = e.expanding, y = e.label, C = e.orientation, b = e.shape, v = e.size, S = e.sources, R = e.totalItems, L = l === void 0 ? !1 : l, E = C === void 0 ? "ascending" : C, k = b === void 0 ? "circle" : b, I = S.length > 4 || R > S.length, T = Math.min(S.length + (I ? 1 : 0), 4), D, x, $, P, N, M;
		if (t[0] !== n || t[1] !== y || t[2] !== T || t[3] !== E || t[4] !== k || t[5] !== I || t[6] !== v || t[7] !== S || t[8] !== R) {
			var w;
			t[15] !== k ? (w = function(t, n) {
				return s.createElement(r("FDSProfilePhoto_EXPERIMENTAL.react"), babelHelpers.extends({}, typeof t == "object" ? t : { source: t }, {
					key: n,
					shape: k,
					size: "fill"
				}));
			}, t[15] = k, t[16] = w) : w = t[16];
			var A = S.slice(0, I ? T - 1 : T).map(w);
			if (I) {
				var F = v <= c && u.smallBadgeFontSize, O;
				t[17] !== F ? (O = [u.moreItemFontWeight, F], t[17] = F, t[18] = O) : O = t[18];
				var B = R - T + 1, W;
				t[19] !== O || t[20] !== B ? (W = s.jsx(r("FDSText.react"), {
					color: "secondary",
					type: "meta4",
					children: s.jsxs(o("react-strict-dom").html.span, {
						style: O,
						children: ["+", B]
					})
				}), t[19] = O, t[20] = B, t[21] = W) : W = t[21];
				var q;
				t[22] === Symbol.for("react.memo_cache_sentinel") ? (q = s.jsx(r("BaseView.react"), { xstyle: u.moreItemInsetBorder }), t[22] = q) : q = t[22];
				var U;
				t[23] !== W ? (U = s.jsxs(r("BaseView.react"), {
					xstyle: u.moreItem,
					children: [W, q]
				}, "more"), t[23] = W, t[24] = U) : U = t[24];
				var V = U;
				T === 4 ? A.splice(-1, 0, V) : A.push(V);
			}
			D = r("BaseView.react"), x = n, $ = y, P = y != null ? "img" : void 0, N = d[v];
			var H;
			t[25] !== T || t[26] !== E || t[27] !== k ? (H = function(t, n) {
				return s.jsx(r("BaseView.react"), {
					xstyle: [
						u.item,
						m[T],
						T === 4 && g[n] || T === 3 && f[n] || T === 2 && (E === "descending" ? _[n] : p[n]),
						n === 0 ? h[k] : void 0
					],
					children: t
				}, n);
			}, t[25] = T, t[26] = E, t[27] = k, t[28] = H) : H = t[28], M = A.map(H), t[0] = n, t[1] = y, t[2] = T, t[3] = E, t[4] = k, t[5] = I, t[6] = v, t[7] = S, t[8] = R, t[9] = D, t[10] = x, t[11] = $, t[12] = P, t[13] = N, t[14] = M;
		} else D = t[9], x = t[10], $ = t[11], P = t[12], N = t[13], M = t[14];
		var G;
		t[29] !== D || t[30] !== x || t[31] !== $ || t[32] !== P || t[33] !== N || t[34] !== M ? (G = s.jsx(D, {
			"aria-hidden": x,
			"aria-label": $,
			role: P,
			xstyle: N,
			children: M
		}), t[29] = D, t[30] = x, t[31] = $, t[32] = P, t[33] = N, t[34] = M, t[35] = G) : G = t[35];
		var z = G;
		if (a != null) {
			var j;
			return t[36] !== a || t[37] !== i || t[38] !== L || t[39] !== z ? (j = s.jsx(r("FDSBadgeContainer.react"), {
				badge: a,
				badgeAlign: i,
				expanding: L,
				children: z
			}), t[36] = a, t[37] = i, t[38] = L, t[39] = z, t[40] = j) : j = t[40], j;
		}
		return z;
	}
	l.default = y;
}), 98);
