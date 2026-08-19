__d("useWAWebIsNewsletterMsgPinned", [
	"WATimeUtils",
	"WAWebFrontendMsgGetters",
	"WAWebNewsletterPinDisplay",
	"WAWebNewsletterPinGatingUtils",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t, n, r = o("react-compiler-runtime").c(4), a;
		r[0] !== e ? (a = o("WAWebFrontendMsgGetters").getMaybeChat(e), r[0] = e, r[1] = a) : a = r[1];
		var i = a, l = (t = (n = o("useWAWebModelValues").useOptionalModelValues(i == null ? void 0 : i.newsletterMetadata, ["pinnedMessages"])) == null ? void 0 : n.pinnedMessages) != null ? t : [], s = e.serverId;
		if (s == null || !o("WAWebNewsletterPinGatingUtils").isChannelMessagePinReadEnabled()) return !1;
		var u;
		return r[2] !== s ? (u = function(t) {
			return t.serverId === s;
		}, r[2] = s, r[3] = u) : u = r[3], o("WAWebNewsletterPinDisplay").filterActiveNewsletterPins(l, o("WATimeUtils").unixTime()).some(u);
	}
	l.default = e;
}), 98);
