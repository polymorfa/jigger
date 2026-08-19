__d("WAWebDesktopSharerSlot.react", [
	"WAWebDesktopSharerContext.react",
	"react",
	"react-compiler-runtime",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef;
	function p(e) {
		var t = o("react-compiler-runtime").c(22), n = e.inline, a = e.measureRef, i = e.onSessionReady, l = e.visible, u = l === void 0 ? !0 : l, c = m(null), p = m(null), _ = o("WAWebDesktopSharerContext.react").useDesktopSharerContext(), f = _.createSession, g = _.hideSession, h = _.updateSessionPosition, y = r("useWAWebWindowSize")(), C = y.height, b = y.width, v;
		t[0] !== a ? (v = function() {
			var e, t = (e = a == null ? void 0 : a.current) != null ? e : c.current;
			if (t == null) return null;
			var n = t.getBoundingClientRect(), r = n.height, o = n.left, i = n.top, l = n.width;
			return {
				top: i,
				left: o,
				width: l,
				height: r
			};
		}, t[0] = a, t[1] = v) : v = t[1];
		var S = v, R, L;
		t[2] !== f || t[3] !== S || t[4] !== n || t[5] !== i ? (R = function() {
			if (p.current == null) {
				var e = S();
				if (e != null) {
					var t = f(e, {
						inline: n,
						onViewerReady: i
					});
					p.current = t;
				}
			}
		}, L = [
			n,
			i,
			f,
			S
		], t[2] = f, t[3] = S, t[4] = n, t[5] = i, t[6] = R, t[7] = L) : (R = t[6], L = t[7]), d(R, L);
		var E, k;
		t[8] !== S || t[9] !== g || t[10] !== h || t[11] !== u ? (E = function() {
			var e = p.current;
			if (e != null) {
				if (u !== !0) {
					g(e);
					return;
				}
				var t = S();
				t != null && h(e, t);
			}
		}, k = [
			u,
			g,
			h,
			S
		], t[8] = S, t[9] = g, t[10] = h, t[11] = u, t[12] = E, t[13] = k) : (E = t[12], k = t[13]), d(E, k);
		var I, T;
		t[14] !== S || t[15] !== C || t[16] !== h || t[17] !== u || t[18] !== b ? (I = function() {
			var e = p.current;
			if (!(e == null || u !== !0 || b <= 0 || C <= 0)) {
				var t = S();
				t != null && h(e, t);
			}
		}, T = [
			b,
			C,
			u,
			h,
			S
		], t[14] = S, t[15] = C, t[16] = h, t[17] = u, t[18] = b, t[19] = I, t[20] = T) : (I = t[19], T = t[20]), d(I, T);
		var D;
		return t[21] === Symbol.for("react.memo_cache_sentinel") ? (D = s.jsx("div", {
			ref: c,
			"data-testid": "webtp-desktop-sharer-slot",
			className: "x5yr21d xh8yej3"
		}), t[21] = D) : D = t[21], D;
	}
	l.default = p;
}), 98);
