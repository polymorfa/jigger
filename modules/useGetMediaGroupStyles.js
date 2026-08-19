__d("useGetMediaGroupStyles", [
	"MWLSThreadDisplayContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useMemo, u = 180, c = 120;
	function d(e, t) {
		var n = o("react-compiler-runtime").c(40), r = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext() === "ChatTab", a = null, i;
		if (t === 2 && r) {
			var l;
			n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = "x78zum5 xdt5ytf x6ikm8r x10wlt62 x1isuwpm xq1dxzn", n[0] = l) : l = n[0], a = l;
		} else if (t === 2 && !r) {
			var s;
			n[1] === Symbol.for("react.memo_cache_sentinel") ? (s = "x78zum5 xdt5ytf x6ikm8r x10wlt62 x1en3kgc xafpxmx", n[1] = s) : s = n[1], a = s;
		} else if (t === 3 && r) {
			var d;
			n[2] === Symbol.for("react.memo_cache_sentinel") ? (d = "x78zum5 xdt5ytf x6ikm8r x10wlt62 xu3xrit xq1dxzn", n[2] = d) : d = n[2], a = d;
		} else if (t === 3 && !r) {
			var m;
			n[3] === Symbol.for("react.memo_cache_sentinel") ? (m = "x78zum5 xdt5ytf x6ikm8r x10wlt62 x1egiwwb xafpxmx", n[3] = m) : m = n[3], a = m;
		} else if (t === 4 && r) {
			var p;
			n[4] === Symbol.for("react.memo_cache_sentinel") ? (p = "x78zum5 xdt5ytf x6ikm8r x10wlt62 x89wwaf xh6lk7j xdj266r", n[4] = p) : p = n[4], a = p;
		} else if (t === 4 && !r) {
			var _;
			n[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = "x78zum5 xdt5ytf x6ikm8r x10wlt62 x1gyaxfs xt4sqew xdj266r", n[5] = _) : _ = n[5], a = _;
		}
		if (r) {
			var f;
			n[6] === Symbol.for("react.memo_cache_sentinel") ? (f = "x6s0dn4 x1exxf4d xpv9jar x1nb4dca x1nmn18 xpilrb4 x1lun4ml x1xn7y0n x1uxb8k9 x1vmbcc8 x16xm01d x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x78zum5 xl56j7k x6ikm8r x10wlt62 x10l6tqk x1wkxgih x1mu601j x2aouup xi3av73 x1i9suas xygnafs", n[6] = f) : f = n[6], i = f;
		} else {
			var g;
			n[7] === Symbol.for("react.memo_cache_sentinel") ? (g = "x6s0dn4 x1exxf4d xpv9jar x1nb4dca x1nmn18 xpilrb4 x1lun4ml x1xn7y0n x1uxb8k9 x1vmbcc8 x16xm01d x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x78zum5 x1b51vyi xl56j7k x19aweqf x1e4dklr x1shn012 xfb3i0g x6ikm8r x10wlt62 x10l6tqk xzjbwwf", n[7] = g) : g = n[7], i = g;
		}
		var h;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (h = [
			{
				bottom: 0,
				left: 17
			},
			{
				bottom: 6,
				left: 8,
				transform: "rotate(-4deg)"
			},
			{
				bottom: 12,
				right: 8,
				transform: "rotate(4deg)"
			},
			{
				bottom: 18,
				left: 8,
				transform: "rotate(-4deg)"
			}
		], n[8] = h) : h = n[8];
		var y = e ? null : 0, C = e ? 0 : null, b;
		n[9] !== y || n[10] !== C ? (b = {
			left: y,
			right: C,
			top: 0
		}, n[9] = y, n[10] = C, n[11] = b) : b = n[11];
		var v = e ? 0 : null, S = e ? null : 0, R = r ? 100 : 160, L;
		n[12] !== v || n[13] !== S || n[14] !== R ? (L = {
			left: v,
			right: S,
			top: R
		}, n[12] = v, n[13] = S, n[14] = R, n[15] = L) : L = n[15];
		var E = e ? null : 0, k = e ? 0 : null, I;
		n[16] !== E || n[17] !== k ? (I = {
			bottom: 0,
			left: E,
			right: k
		}, n[16] = E, n[17] = k, n[18] = I) : I = n[18];
		var T;
		n[19] !== I || n[20] !== b || n[21] !== L ? (T = [
			b,
			L,
			I
		], n[19] = I, n[20] = b, n[21] = L, n[22] = T) : T = n[22];
		var D = e ? 0 : null, x = e ? null : 0, $;
		n[23] !== D || n[24] !== x ? ($ = {
			left: D,
			right: x,
			top: 0
		}, n[23] = D, n[24] = x, n[25] = $) : $ = n[25];
		var P = e ? null : 0, N = e ? 0 : null, M;
		n[26] !== P || n[27] !== N ? (M = {
			bottom: 0,
			left: P,
			right: N
		}, n[26] = P, n[27] = N, n[28] = M) : M = n[28];
		var w;
		n[29] !== $ || n[30] !== M ? (w = [$, M], n[29] = $, n[30] = M, n[31] = w) : w = n[31];
		var A;
		n[32] !== T || n[33] !== w ? (A = {
			fourImageTile: h,
			threeImageTile: T,
			twoImageTile: w
		}, n[32] = T, n[33] = w, n[34] = A) : A = n[34];
		var F = A, O = t === 2 ? F.twoImageTile : t === 3 ? F.threeImageTile : F.fourImageTile, B = r ? c : u, W;
		return n[35] !== a || n[36] !== O || n[37] !== B || n[38] !== i ? (W = {
			containerStyles: a,
			coordinations: O,
			imageSize: B,
			wrapperStyles: i
		}, n[35] = a, n[36] = O, n[37] = B, n[38] = i, n[39] = W) : W = n[39], W;
	}
	function m(e, t, n) {
		var r = o("react-compiler-runtime").c(4), a = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext() === "ChatTab", i = 1, l = 1;
		if (e !== !0 || t === 0 || n === 0) {
			var s;
			return r[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
				resizeRatio: 1,
				scaleRatio: 1
			}, r[0] = s) : s = r[0], s;
		}
		e === !0 && t != null && n != null && (t >= n ? i = Math.ceil((a ? c : u) / n) : i = Math.ceil((a ? c : u) / t)), e === !0 && i === 1 && t != null && n != null && (l = t > n ? t / n : n / t);
		var d;
		return r[1] !== i || r[2] !== l ? (d = {
			resizeRatio: i,
			scaleRatio: l
		}, r[1] = i, r[2] = l, r[3] = d) : d = r[3], d;
	}
	l.IMAGE_SIZE = u, l.IMAGE_SIZE_CHAT_TAB = c, l.useGetMediaGroupStyles = d, l.useGetMediaGroupTileImageRatios = m;
}), 98);
