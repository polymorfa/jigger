__d("useWAWebDeveloperDraggableWindow.react", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(29), n = c(0), r = n[0], a = n[1], i = c(0), l = i[0], s = i[1], d = c(!1), p = d[0], _ = d[1], f = c(!1), g = f[0], h = f[1], y;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (y = {
			top: "50px",
			left: "100px"
		}, t[0] = y) : y = t[0];
		var C = c(y), b = C[0], v = C[1], S;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (S = { bottom: "0px" }, t[1] = S) : S = t[1];
		var R = c(S), L = R[0], E = R[1], k = c(null), I = k[0], T = k[1], D, x;
		t[2] !== e ? (D = function() {
			T(document.getElementById(e));
		}, x = [e], t[2] = e, t[3] = D, t[4] = x) : (D = t[3], x = t[4]), u(D, x);
		var $;
		t[5] !== g || t[6] !== I ? ($ = function(t) {
			I && !g && (a(t.screenX - I.getBoundingClientRect().left), s(t.screenY - I.getBoundingClientRect().top), _(!0));
		}, t[5] = g, t[6] = I, t[7] = $) : $ = t[7];
		var P = $, N;
		t[8] !== r || t[9] !== l || t[10] !== p || t[11] !== g || t[12] !== I ? (N = function(t) {
			if (p && !g) {
				var e = m(t, r, l, I), n = e.left, o = e.top;
				v({
					left: n + "px",
					top: o + "px"
				});
			}
		}, t[8] = r, t[9] = l, t[10] = p, t[11] = g, t[12] = I, t[13] = N) : N = t[13];
		var M = N, w;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (w = function() {
			_(!1), h(!1);
		}, t[14] = w) : w = t[14];
		var A = w, F;
		t[15] !== I ? (F = function() {
			I != null && E({ bottom: "-" + I.scrollTop + "px" });
		}, t[15] = I, t[16] = F) : F = t[16];
		var O = F, B, W;
		t[17] !== r || t[18] !== l || t[19] !== p || t[20] !== I ? (B = function() {
			var e = function(t) {
				if (p) {
					var e = m(t, r, l, I), n = e.left, o = e.top;
					v({
						left: n + "px",
						top: o + "px"
					});
				}
			}, t = function() {
				p && (_(!1), h(!1));
			};
			return window.addEventListener("mousemove", e), window.addEventListener("mouseup", t), (function() {
				window.removeEventListener("mousemove", e), window.removeEventListener("mouseup", t);
			});
		}, W = [
			r,
			l,
			p,
			I
		], t[17] = r, t[18] = l, t[19] = p, t[20] = I, t[21] = B, t[22] = W) : (B = t[21], W = t[22]), u(B, W);
		var q;
		return t[23] !== P || t[24] !== b || t[25] !== M || t[26] !== L || t[27] !== O ? (q = {
			scroll: O,
			dragStyles: b,
			dragStart: P,
			setDragStyles: v,
			dragEnd: A,
			dragging: M,
			setIsResizing: h,
			setIsDragging: _,
			resizeDetectorStyles: L
		}, t[23] = P, t[24] = b, t[25] = M, t[26] = L, t[27] = O, t[28] = q) : q = t[28], q;
	}
	function m(e, t, n, r) {
		var o = e.screenX - t, a = e.screenY - n;
		return o < 0 && (o = 0), a < 0 && (a = 0), r != null && r.offsetWidth && r != null && r.offsetHeight && (o + r.offsetWidth > window.innerWidth && (o = window.innerWidth - r.offsetWidth), a + r.offsetHeight > window.innerHeight && (a = window.innerHeight - (r == null ? void 0 : r.offsetHeight))), {
			left: o,
			top: a
		};
	}
	l.default = d;
}), 98);
