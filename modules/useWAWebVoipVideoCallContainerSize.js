__d("useWAWebVoipVideoCallContainerSize", [
	"react",
	"react-compiler-runtime",
	"useWAWebVisibilityAwarePolling"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState;
	function _(e, t, n) {
		return e.width === t && e.height === n;
	}
	function f(e, t) {
		var n = o("react-compiler-runtime").c(11), a = m(null), i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			width: 0,
			height: 0
		}, n[0] = i) : i = n[0];
		var l = p(i), s = l[0], u = l[1], c = p(null), f = c[0], g = c[1], h;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (h = function(t) {
			if (a.current = t, g(t), t != null) {
				var e = t.getBoundingClientRect();
				u(function(t) {
					return _(t, e.width, e.height) ? t : {
						width: e.width,
						height: e.height
					};
				});
			}
		}, n[1] = h) : h = n[1];
		var y = h, C = t != null ? t : window, b, v;
		n[2] !== f || n[3] !== C ? (b = function() {
			if (f != null) {
				var e = null, t = new C.ResizeObserver(function(t) {
					e != null && C.cancelAnimationFrame(e), e = C.requestAnimationFrame(function() {
						e = null;
						var n = function() {
							var e = r.target.getBoundingClientRect();
							u(function(t) {
								return _(t, e.width, e.height) ? t : {
									width: e.width,
									height: e.height
								};
							});
						};
						for (var r of t) n();
					});
				});
				return t.observe(f), (function() {
					t.disconnect(), e != null && C.cancelAnimationFrame(e);
				});
			}
		}, v = [f, C], n[2] = f, n[3] = C, n[4] = b, n[5] = v) : (b = n[4], v = n[5]), d(b, v);
		var S;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (S = function() {
			var e = a.current;
			if (!e) return !0;
			var t = e.getBoundingClientRect();
			return t.width > 0 && t.height > 0 ? (u(function(e) {
				return _(e, t.width, t.height) ? e : {
					width: t.width,
					height: t.height
				};
			}), !1) : !0;
		}, n[6] = S) : S = n[6];
		var R;
		n[7] !== e ? (R = {
			callback: S,
			interval: 200,
			enabled: e
		}, n[7] = e, n[8] = R) : R = n[8], r("useWAWebVisibilityAwarePolling")(R);
		var L;
		return n[9] !== s ? (L = {
			canvasContainerRef: a,
			canvasContainerCallbackRef: y,
			containerSize: s
		}, n[9] = s, n[10] = L) : L = n[10], L;
	}
	l.default = f;
}), 98);
