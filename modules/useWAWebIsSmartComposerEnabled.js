__d("useWAWebIsSmartComposerEnabled", [
	"WAWebBizAiSmartComposerGating",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"react-compiler-runtime",
	"useWAWebChatValues"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("react-compiler-runtime").c(3), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = [o("WAWebChatGetters").getCapiThreadControl], t[0] = n) : n = t[0], o("useWAWebChatValues").useChatValues(e, n);
		var r;
		if (t[1] !== e) {
			var a = o("WAWebChatCollection").ChatCollection.get(e);
			r = a != null && o("WAWebBizAiSmartComposerGating").isSmartComposerEnabledForChat(a), t[1] = e, t[2] = r;
		} else r = t[2];
		return r;
	}
	l.default = e;
}), 98);
