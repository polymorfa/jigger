__d("useMAWOverrideNonAddressableParticipantWithWAI", [
	"getMAWNonAddressableContactBannerStrings",
	"gkx",
	"react-compiler-runtime",
	"useHasNonAddressableParticipantWAI"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("react-compiler-runtime").c(8), n = e.bannerFromOccam, a = e.isGroup, i = e.isSecure, l = e.threadKey, s = n != null, u;
		t[0] !== s || t[1] !== a || t[2] !== i || t[3] !== l ? (u = {
			isComposerBlocked: s,
			isGroup: a,
			isSecure: i,
			threadKey: l
		}, t[0] = s, t[1] = a, t[2] = i, t[3] = l, t[4] = u) : u = t[4];
		var c = o("useHasNonAddressableParticipantWAI").useHasNonAddressableParticipantWAI(u);
		if (!i || c == null) return n;
		if (!c.hasNonAddressableParticipant && s) return null;
		if (c.hasNonAddressableParticipant && !s && !(a && r("gkx")("10382"))) {
			var d;
			return t[5] !== c.nonAddressableParticipantName || t[6] !== a ? (d = r("getMAWNonAddressableContactBannerStrings")(a, c.nonAddressableParticipantName), t[5] = c.nonAddressableParticipantName, t[6] = a, t[7] = d) : d = t[7], d;
		}
		return n;
	}
	l.default = e;
}), 98);
