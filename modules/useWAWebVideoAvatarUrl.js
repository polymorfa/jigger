__d("useWAWebVideoAvatarUrl", [
	"WAWebAIHatchIdentityStore",
	"WAWebBotUtils",
	"WAWebHatchGating",
	"WAWebNoop",
	"react",
	"react-compiler-runtime",
	"useWAWebHatchSecureMediaUrl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useSyncExternalStore, d = "idle";
	function m(e) {
		var t, n, a, i = o("react-compiler-runtime").c(6), l;
		i[0] !== e ? (l = o("WAWebBotUtils").isHatchBot(e), i[0] = e, i[1] = l) : l = i[1];
		var s = l, u;
		i[2] !== s ? (u = function(t) {
			return s ? o("WAWebAIHatchIdentityStore").subscribeToIdentityChanges(t) : r("WAWebNoop");
		}, i[2] = s, i[3] = u) : u = i[3];
		var m = u, p;
		i[4] !== s ? (p = function() {
			return s ? o("WAWebAIHatchIdentityStore").getCachedHatchIdentity() : null;
		}, i[4] = s, i[5] = p) : p = i[5];
		var _ = p, f = c(m, _), g = s && o("WAWebHatchGating").isHatchVideoAvatarEnabled(), h = r("useWAWebHatchSecureMediaUrl")(g ? f == null || (t = f.secureVideoVariants) == null ? void 0 : t[d] : null);
		return g && (n = h != null ? h : f == null || (a = f.videoVariants) == null ? void 0 : a[d]) != null ? n : null;
	}
	l.default = m;
}), 98);
