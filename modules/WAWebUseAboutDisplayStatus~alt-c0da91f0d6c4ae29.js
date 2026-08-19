__d("WAWebUseAboutDisplayStatus", [
	"WAWebFrontendContactGetters",
	"WAWebTextStatusGatingUtils",
	"WAWebTextStatusUtils",
	"useWAWebContactValues",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t, n = e.getStatus(), r = o("useWAWebModelValues").useModelValues(n, ["status"]), a = r.status, i = o("useWAWebContactValues").useContactValues(e.id, [
			(t = o("WAWebFrontendContactGetters")).getTextStatusString,
			t.getTextStatusEmoji,
			t.getTextStatusLastUpdateTime,
			t.getTextStatusExpiryTs,
			t.getTextStatusEphemeralDuration
		]), l = i[0], s = i[1], u = i[2], c = i[3], d = i[4], m = o("WAWebTextStatusUtils").shouldDisplayTextStatus(l, s, u, c, d), p = o("WAWebTextStatusUtils").hasEverHadTextStatus(u), _ = o("WAWebTextStatusUtils").isTextStatusNotFetched(u), f = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ? _ || m || !p && o("WAWebTextStatusUtils").hasCustomAboutSet(n) : a !== "";
		return {
			shouldRenderAboutSection: f,
			displayTextStatus: m,
			hasEverHadTextStatus: p
		};
	}
	l.useAboutDisplayStatus = e;
}), 98);
