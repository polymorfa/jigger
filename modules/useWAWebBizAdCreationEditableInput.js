__d("useWAWebBizAdCreationEditableInput", [
	"WAWebBizAdCreationEditableInputStyles",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useEffect, d = s.useRef, m = s.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(24), n = e.onSave, r = e.validateInput, a = m(!1), i = a[0], l = a[1], s = m(""), u = s[0], p = s[1], _ = d(null), f = d(!1), g = m(o("WAWebBizAdCreationEditableInputStyles").MIN_INPUT_WIDTH), h = g[0], y = g[1], C, b;
		t[0] !== u ? (C = function() {
			var e = o("WAWebBizAdCreationEditableInputStyles").getTextWidthFromElement(u || "0", _.current);
			y(Math.max(e + o("WAWebBizAdCreationEditableInputStyles").INPUT_PADDING, o("WAWebBizAdCreationEditableInputStyles").MIN_INPUT_WIDTH));
		}, b = [u], t[0] = u, t[1] = C, t[2] = b) : (C = t[1], b = t[2]), c(C, b);
		var v, S;
		t[3] !== i ? (v = function() {
			if (i && _.current != null) {
				var e = _.current;
				e.focus(), e.select();
			}
		}, S = [i], t[3] = i, t[4] = v, t[5] = S) : (v = t[4], S = t[5]), c(v, S);
		var R;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (R = function(t) {
			f.current = !1, p(t), l(!0);
		}, t[6] = R) : R = t[6];
		var L = R, E;
		t[7] !== u || t[8] !== n ? (E = function() {
			n(u), l(!1);
		}, t[7] = u, t[8] = n, t[9] = E) : E = t[9];
		var k = E, I;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			f.current = !0, l(!1);
		}, t[10] = I) : I = t[10];
		var T = I, D;
		t[11] !== k ? (D = function() {
			f.current || k();
		}, t[11] = k, t[12] = D) : D = t[12];
		var x = D, $;
		t[13] !== k ? ($ = function(t) {
			t.key === "Enter" ? (f.current = !0, k()) : t.key === "Escape" && T();
		}, t[13] = k, t[14] = $) : $ = t[14];
		var P = $, N;
		t[15] !== r ? (N = function(t) {
			var e = t.target.value;
			(r == null || r(e)) && p(e);
		}, t[15] = r, t[16] = N) : N = t[16];
		var M = N, w;
		return t[17] !== x || t[18] !== M || t[19] !== P || t[20] !== u || t[21] !== h || t[22] !== i ? (w = {
			handleBlur: x,
			handleInputChange: M,
			handleKeyDown: P,
			inputRef: _,
			inputValue: u,
			inputWidth: h,
			isEditing: i,
			startEditing: L
		}, t[17] = x, t[18] = M, t[19] = P, t[20] = u, t[21] = h, t[22] = i, t[23] = w) : w = t[23], w;
	}
	l.default = p;
}), 98);
