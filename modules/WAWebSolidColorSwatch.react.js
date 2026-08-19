__d("WAWebSolidColorSwatch.react", [
	"WAWebUnstyledButton.react",
	"WDSFlex.stylex",
	"WDSIconIcCheckCircleFilled.react",
	"bx",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = r("bx").getURL(r("bx")("89515")), d = "200% auto", m = {
		cardWrapper: {
			width: "xh8yej3",
			maxWidth: "x1kbpmyu",
			$$css: !0
		},
		card: {
			position: "x1n2onr6",
			boxSizing: "x9f619",
			width: "xh8yej3",
			maxWidth: "x1kbpmyu",
			aspectRatio: "xoob0kj",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			cursor: "x1ypdohk",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			boxShadow: "xvg832a",
			$$css: !0
		},
		cardDefault: {
			backgroundColor: "x1q80dvb",
			$$css: !0
		},
		cardSelected: {
			outlineWidth: "x1de99jn",
			outlineStyle: "xaatb59",
			outlineColor: "xkco1y8 xtnn1bt",
			outlineOffset: "x1hl8ikr",
			$$css: !0
		},
		cardHover: {
			outlineWidth: "x1vhszaq",
			outlineStyle: "xt4zopc",
			outlineColor: "xz0q4bt",
			outlineOffset: "x1kduly6",
			$$css: !0
		},
		cardFocusRing: {
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			outlineWidth: "x784prv",
			outlineStyle: "x9v5kkp",
			outlineColor: "xtnn1bt",
			outlineOffset: "x7s97pk",
			$$css: !0
		},
		dynamicBg: function(t) {
			return [{
				backgroundColor: t != null ? "xl8spv7" : t,
				$$css: !0
			}, { "--x-backgroundColor": t != null ? t : void 0 }];
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(33), a = t.colorHex, i = t.colorName, l = t.doodleOpacity, s = t.isDefault, p = t.isSelected, _ = t.onBlur, f = t.onClick, g = t.onFocus, h = t.ref, y = t.role, C = t.showDoodle, b = t.tabIndex, v = y === void 0 ? "radio" : y, S = C, R = "url(\"" + c + "\")", L = s ? void 0 : "white", E;
		n[0] !== l || n[1] !== L ? (E = {
			opacity: l,
			backgroundColor: L,
			WebkitMaskImage: R,
			maskImage: R,
			WebkitMaskRepeat: "repeat",
			maskRepeat: "repeat",
			WebkitMaskSize: d,
			maskSize: d,
			WebkitMaskMode: "alpha",
			maskMode: "alpha"
		}, n[0] = l, n[1] = L, n[2] = E) : E = n[2];
		var k = E, I = v === "radio" ? p : void 0, T = "solid-color-swatch-" + (s ? "default" : a), D = p && m.cardSelected, x;
		n[3] !== D ? (x = [
			m.cardWrapper,
			m.cardFocusRing,
			D
		], n[3] = D, n[4] = x) : x = n[4];
		var $ = p ? void 0 : f, P;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (P = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumnCenter), n[5] = P) : P = n[5];
		var N;
		n[6] !== a || n[7] !== s || n[8] !== p ? (N = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, m.card, s && m.cardDefault, !s && m.dynamicBg(a), !p && m.cardHover), n[6] = a, n[7] = s, n[8] = p, n[9] = N) : N = n[9];
		var M;
		n[10] !== p ? (M = p && u.jsx("div", {
			"aria-hidden": "true",
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k x1vjfegm x14ug900",
			children: u.jsx(r("WDSIconIcCheckCircleFilled.react"), {})
		}), n[10] = p, n[11] = M) : M = n[11];
		var w;
		n[12] !== k || n[13] !== s || n[14] !== S ? (w = S && u.jsx("span", {
			className: {
				0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1fmog5m xu25z0z x140muxe xo1y3bh",
				1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1fmog5m xu25z0z x140muxe xo1y3bh x1fast2d"
			}[!!s << 0],
			style: k
		}), n[12] = k, n[13] = s, n[14] = S, n[15] = w) : w = n[15];
		var A;
		n[16] !== i || n[17] !== N || n[18] !== M || n[19] !== w ? (A = u.jsx("span", babelHelpers.extends({}, P, { children: u.jsxs("span", babelHelpers.extends({ title: i }, N, { children: [M, w] })) })), n[16] = i, n[17] = N, n[18] = M, n[19] = w, n[20] = A) : A = n[20];
		var F;
		return n[21] !== i || n[22] !== _ || n[23] !== g || n[24] !== h || n[25] !== v || n[26] !== A || n[27] !== I || n[28] !== T || n[29] !== x || n[30] !== $ || n[31] !== b ? (F = u.jsx(r("WAWebUnstyledButton.react"), {
			ref: h,
			role: v,
			"aria-checked": I,
			"aria-label": i,
			tabIndex: b,
			testid: T,
			xstyle: x,
			onClick: $,
			onFocus: g,
			onBlur: _,
			children: A
		}), n[21] = i, n[22] = _, n[23] = g, n[24] = h, n[25] = v, n[26] = A, n[27] = I, n[28] = T, n[29] = x, n[30] = $, n[31] = b, n[32] = F) : F = n[32], F;
	}
	l.default = p;
}), 98);
