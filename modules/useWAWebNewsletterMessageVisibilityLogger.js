__d("useWAWebNewsletterMessageVisibilityLogger", [
	"WAWebMerlinImpressionManager",
	"react",
	"react-compiler-runtime",
	"useVPVDImpression"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useCallback;
	function u(e) {
		var t = o("react-compiler-runtime").c(12), n = e.aiProvenanceLabelEnabled, a = e.aiProvenanceLabelShown, i = e.channelUserType, l = e.cid, s = e.isOriginalAuthor, u = e.isStarredPost, c = e.isVpvImpression, d = e.mediaData, m = e.postId, p;
		t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== s || t[5] !== u || t[6] !== c || t[7] !== d || t[8] !== m ? (p = function(t) {
			var e = t.hiddenTime, r = t.visibleTime;
			o("WAWebMerlinImpressionManager").logNewsletterMessageVisibility({
				enter_ts: r,
				exit_ts: e,
				itemId: m,
				visibilityData: {
					cid: l,
					isOriginalAuthor: s,
					isStarredPost: u,
					isVpvImpression: c,
					postId: m,
					mediaData: d,
					channelUserType: i,
					aiProvenanceLabelShown: a,
					aiProvenanceLabelEnabled: n
				}
			});
		}, t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = s, t[5] = u, t[6] = c, t[7] = d, t[8] = m, t[9] = p) : p = t[9];
		var _ = p, f;
		return t[10] !== _ ? (f = { onVPVDEnd: _ }, t[10] = _, t[11] = f) : f = t[11], r("useVPVDImpression")(f);
	}
	l.default = u;
}), 98);
