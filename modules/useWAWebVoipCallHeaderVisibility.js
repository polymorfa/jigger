__d("useWAWebVoipCallHeaderVisibility", [
	"react",
	"react-compiler-runtime",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useEffect, d = s.useState, m = 3e3;
	function p(e) {
		var t = o("react-compiler-runtime").c(13), n = d(!0), r = n[0], a = n[1], i = d(e), l = i[0], s = i[1];
		l !== e && (s(e), e && a(!0));
		var u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = function() {
			a(!1);
		}, t[0] = u) : u = t[0];
		var p = o("useWAWebTimeout").useManualTimeout(u), _ = p[0], f = p[1], g;
		t[1] !== f || t[2] !== e || t[3] !== _ ? (g = function() {
			a(!0), e ? f() : _(m);
		}, t[1] = f, t[2] = e, t[3] = _, t[4] = g) : g = t[4];
		var h = g, y, C;
		t[5] !== f || t[6] !== e || t[7] !== _ ? (y = function() {
			e ? f() : _(m);
		}, C = [
			f,
			e,
			_
		], t[5] = f, t[6] = e, t[7] = _, t[8] = y, t[9] = C) : (y = t[8], C = t[9]), c(y, C);
		var b = r || e, v;
		return t[10] !== h || t[11] !== b ? (v = [b, h], t[10] = h, t[11] = b, t[12] = v) : v = t[12], v;
	}
	l.CALL_HEADER_AUTO_HIDE_DELAY_MS = m, l.useWAWebVoipCallHeaderVisibility = p;
}), 98);
