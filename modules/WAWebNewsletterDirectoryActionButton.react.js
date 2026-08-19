__d("WAWebNewsletterDirectoryActionButton.react", [
	"WAWebNewsletterQuickFollowButton.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n, a = o("react-compiler-runtime").c(16), i = e.directoryFunnelLogger, l = e.loggingOptions, u = e.newsletter, c = e.ref, d;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (d = ["isPreview", "membershipType"], a[0] = d) : d = a[0];
		var m = o("useWAWebModelValues").useOptionalModelValues(u.newsletterMetadata, d);
		if (m == null || (t = m == null ? void 0 : m.iAmOwner()) != null && t || (n = m == null ? void 0 : m.iAmAdmin()) != null && n) return null;
		var p;
		a[1] !== i || a[2] !== l || a[3] !== u.id ? (p = function() {
			i == null || i.logNewsletterFollow(u.id, l.directoryChannelIndex);
		}, a[1] = i, a[2] = l, a[3] = u.id, a[4] = p) : p = a[4];
		var _ = p, f;
		a[5] !== i || a[6] !== l || a[7] !== u.id ? (f = function() {
			i == null || i.logNewsletterUnfollow(u.id, l.directoryChannelIndex);
		}, a[5] = i, a[6] = l, a[7] = u.id, a[8] = f) : f = a[8];
		var g = f, h = m.isPreview === !1, y;
		return a[9] !== _ || a[10] !== g || a[11] !== l || a[12] !== u || a[13] !== c || a[14] !== h ? (y = s.jsx(r("WAWebNewsletterQuickFollowButton.react"), {
			ref: c,
			confirmUnfollow: !0,
			hasBorder: !0,
			onFollowAction: _,
			onUnfollowAction: g,
			following: h,
			loggingOptions: l,
			newsletter: u
		}), a[9] = _, a[10] = g, a[11] = l, a[12] = u, a[13] = c, a[14] = h, a[15] = y) : y = a[15], y;
	}
	l.default = u;
}), 98);
