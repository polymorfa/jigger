__d("WAWebContextualBannerWrapper.react", [
	"WAWebContextualBanner.react",
	"WAWebContextualBannerConfig",
	"WAWebVelocityTransitionGroup",
	"react",
	"react-compiler-runtime",
	"useVisibility",
	"useWAWebCallbackOnce",
	"useWAWebContextualBanner"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(31), n = e.bannerListOrderedByPriority, a;
		t[0] !== n ? (a = n.map(p), t[0] = n, t[1] = a) : a = t[1];
		var i = r("useWAWebContextualBanner")(a), l = i[0], u = i[1], c = i[2], m = i[3], _;
		t[2] !== n || t[3] !== l ? (_ = function() {
			return n.find(function(e) {
				var t = e.id;
				return l(t);
			});
		}, t[2] = n, t[3] = l, t[4] = _) : _ = t[4];
		var f = _, g = d(f), h = g[0], y = g[1], C;
		t[5] !== h ? (C = [h], t[5] = h, t[6] = C) : C = t[6];
		var b = r("useWAWebCallbackOnce")(u, C), v;
		t[7] !== h || t[8] !== b ? (v = { onVisible: function() {
			h && b(h.id);
		} }, t[7] = h, t[8] = b, t[9] = v) : v = t[9];
		var S = r("useVisibility")(v), R = S[0], L;
		t[10] !== f ? (L = function() {
			y(f());
		}, t[10] = f, t[11] = L) : L = t[11];
		var E = L;
		if (h != null) {
			var k;
			t[12] !== h.id || t[13] !== l ? (k = l(h.id), t[12] = h.id, t[13] = l, t[14] = k) : k = t[14];
			var I;
			t[15] !== h.id ? (I = o("WAWebContextualBannerConfig").getContextualBannerConfig(h.id), t[15] = h.id, t[16] = I) : I = t[16];
			var T;
			t[17] !== h || t[18] !== c || t[19] !== E ? (T = function() {
				c(h.id), h.onClick == null || h.onClick(), E();
			}, t[17] = h, t[18] = c, t[19] = E, t[20] = T) : T = t[20];
			var D;
			t[21] !== h.id || t[22] !== m || t[23] !== E ? (D = function() {
				m(h.id), E();
			}, t[21] = h.id, t[22] = m, t[23] = E, t[24] = D) : D = t[24];
			var x;
			if (t[25] !== k || t[26] !== I || t[27] !== T || t[28] !== D || t[29] !== R) {
				var $ = s.jsx(r("WAWebContextualBanner.react"), {
					ref: R,
					canShow: k,
					config: I,
					onClick: T,
					onDismiss: D
				});
				x = s.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "butterbar",
					children: $
				}), t[25] = k, t[26] = I, t[27] = T, t[28] = D, t[29] = R, t[30] = x;
			} else x = t[30];
			return x;
		}
	}
	function p(e) {
		return e.id;
	}
	l.default = m;
}), 98);
