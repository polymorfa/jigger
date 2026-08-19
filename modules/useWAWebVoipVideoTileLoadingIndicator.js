__d("useWAWebVoipVideoTileLoadingIndicator", [
	"react",
	"react-compiler-runtime",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState, d = 300, m = 200, p = 1500;
	function _(e, t) {
		var n = o("react-compiler-runtime").c(27), r = t.surface === "self", a = c(!1), i = a[0], l = a[1], s;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = function() {
			return l(!0);
		}, n[0] = s) : s = n[0];
		var _ = o("useWAWebTimeout").useTimeout(s, d), f = _[0], g = _[1], h, y;
		n[1] !== g || n[2] !== e || n[3] !== r || n[4] !== f ? (h = function() {
			if (!(!r || e)) return f(), g;
		}, y = [
			r,
			e,
			f,
			g
		], n[1] = g, n[2] = e, n[3] = r, n[4] = f, n[5] = h, n[6] = y) : (h = n[5], y = n[6]), u(h, y);
		var C;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			return l(!1);
		}, n[7] = C) : C = n[7];
		var b = o("useWAWebTimeout").useTimeout(C, m), v = b[0], S = b[1], R, L;
		n[8] !== S || n[9] !== e || n[10] !== r || n[11] !== i || n[12] !== v ? (R = function() {
			if (!(!r || !e || !i)) return v(), S;
		}, L = [
			r,
			e,
			i,
			v,
			S
		], n[8] = S, n[9] = e, n[10] = r, n[11] = i, n[12] = v, n[13] = R, n[14] = L) : (R = n[13], L = n[14]), u(R, L);
		var E = t.surface === "peer" && (t.isGroupCall || t.isCameraMuted), k = c(E), I = k[0], T = k[1];
		E && !I && T(!0);
		var D;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			return T(!0);
		}, n[15] = D) : D = n[15];
		var x = o("useWAWebTimeout").useTimeout(D, p), $ = x[0], P = x[1], N, M;
		if (n[16] !== P || n[17] !== I || n[18] !== r || n[19] !== $ ? (N = function() {
			if (!(r || I)) return $(), P;
		}, M = [
			r,
			I,
			$,
			P
		], n[16] = P, n[17] = I, n[18] = r, n[19] = $, n[20] = N, n[21] = M) : (N = n[20], M = n[21]), u(N, M), r) {
			var w;
			return n[22] !== e || n[23] !== i ? (w = i ? {
				kind: "spinner",
				isFadingOut: e
			} : { kind: "none" }, n[22] = e, n[23] = i, n[24] = w) : w = n[24], w;
		}
		var A;
		return n[25] !== I ? (A = I ? { kind: "avatar" } : { kind: "none" }, n[25] = I, n[26] = A) : A = n[26], A;
	}
	l.default = _;
}), 98);
