__d("WAWebBizCard.react", [
	"WAWebBizErrorBoundary.react",
	"WAWebBizGenericErrorCard.react",
	"WAWebBizSectionDivider.react",
	"WAWebBizShimmerRows.react",
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.Suspense, d = u.useRef, m = {
		content: {
			rowGap: "x8a3fw1",
			width: "xh8yej3",
			$$css: !0
		},
		header: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			justifyContent: "x1qughib",
			width: "xh8yej3",
			$$css: !0
		},
		headerContent: {
			rowGap: "x1b73lln",
			$$css: !0
		},
		titleRow: {
			columnGap: "x1trrmfo",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(40), n = e.children, a = e.ctaButton, i = e.fallback, l = e.header, u = e.headerTestid, p = e.showAccessoryOnHover, _ = e.subtitle, f = e.subtitleTestid, g = e.testid, h = e.tip, y = e.titleAccessory, C = p === void 0 ? !0 : p, b = y != null && C, v = d(null), S = o("useWAWebHover").useWAWebHover(v), R;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "xqjyukv x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x1p57kb1 xvtqlqk xvpt6g3 xdx6fka" }, t[0] = R) : R = t[0];
		var L = g != null ? g : void 0, E;
		t[1] !== l || t[2] !== u || t[3] !== h ? (E = s.jsx(r("WAWebBizSectionDivider.react"), {
			title: l,
			tip: h,
			testid: u
		}), t[1] = l, t[2] = u, t[3] = h, t[4] = E) : E = t[4];
		var k;
		t[5] !== S || t[6] !== b || t[7] !== y ? (k = y != null && s.jsx("span", babelHelpers.extends({}, {
			0: { className: "x3nfvp2 xx6bhzk x19991ni" },
			1: { className: "x3nfvp2 xx6bhzk x19991ni xg01cxk" }
		}[!!(b && !S) << 0], { children: y })), t[5] = S, t[6] = b, t[7] = y, t[8] = k) : k = t[8];
		var I;
		t[9] !== E || t[10] !== k ? (I = s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: m.titleRow,
			align: "center",
			children: [E, k]
		}), t[9] = E, t[10] = k, t[11] = I) : I = t[11];
		var T;
		t[12] !== _ || t[13] !== f ? (T = _ != null && s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			testid: f != null ? f : void 0,
			children: _
		}), t[12] = _, t[13] = f, t[14] = T) : T = t[14];
		var D;
		t[15] !== I || t[16] !== T ? (D = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.headerContent,
			children: [I, T]
		}), t[15] = I, t[16] = T, t[17] = D) : D = t[17];
		var x;
		t[18] !== a ? (x = a != null && s.jsx("div", {
			className: "x2lah0s",
			children: a
		}), t[18] = a, t[19] = x) : x = t[19];
		var $;
		t[20] !== D || t[21] !== x ? ($ = s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: m.header,
			children: [D, x]
		}), t[20] = D, t[21] = x, t[22] = $) : $ = t[22];
		var P;
		t[23] !== l ? (P = l.toString(), t[23] = l, t[24] = P) : P = t[24];
		var N;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (N = s.jsx(r("WAWebBizGenericErrorCard.react"), {}), t[25] = N) : N = t[25];
		var M;
		t[26] !== i ? (M = i != null ? i : s.jsx(r("WAWebBizShimmerRows.react"), {
			count: 3,
			height: 16
		}), t[26] = i, t[27] = M) : M = t[27];
		var w;
		t[28] !== n || t[29] !== M ? (w = s.jsx(c, {
			fallback: M,
			children: n
		}), t[28] = n, t[29] = M, t[30] = w) : w = t[30];
		var A;
		t[31] !== P || t[32] !== w ? (A = s.jsx(r("WAWebBizErrorBoundary.react"), {
			name: P,
			fallback: N,
			children: w
		}), t[31] = P, t[32] = w, t[33] = A) : A = t[33];
		var F;
		t[34] !== $ || t[35] !== A ? (F = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.content,
			align: "stretch",
			children: [$, A]
		}), t[34] = $, t[35] = A, t[36] = F) : F = t[36];
		var O;
		return t[37] !== F || t[38] !== L ? (O = s.jsx("div", babelHelpers.extends({ ref: v }, R, {
			"data-testid": L,
			children: F
		})), t[37] = F, t[38] = L, t[39] = O) : O = t[39], O;
	}
	l.default = p;
}), 98);
