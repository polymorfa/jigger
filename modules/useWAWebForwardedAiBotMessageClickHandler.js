__d("useWAWebForwardedAiBotMessageClickHandler", [
	"WAWebBotBaseGating",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebBotUtils",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebForwardedBotMessageUtils",
	"WAWebFrontendContactGetters",
	"WAWebOpenChatWithContactAction",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("react-compiler-runtime").c(2), n = e.forwardedAiBotMessageInfo;
		if (!o("WAWebBotBaseGating").isAiForwardAttributionEnabled() || n == null) return null;
		var r = e.senderObj != null && o("WAWebFrontendContactGetters").getIsMyContact(e.senderObj), a = o("WAWebForwardedBotMessageUtils").getForwardedBotDisplayMode(n.validationStatus, r, e.unifiedResponse);
		if (a !== "normal") return null;
		var i = n.botId, l;
		t[0] !== i ? (l = function() {
			o("WAWebBotUtils").isMetaAiBot(i) && o("WAWebBotGating").isAiChatThreadsEnabled() ? o("WAWebBotFrontendUtils").getMetaAiChat().then(u) : o("WAWebOpenChatWithContactAction").openChatWithContact(i, "newChatFlow", o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedAiBotMessage, { onOpened: s });
		}, t[0] = i, t[1] = l) : l = t[1];
		var c = l;
		return c;
	}
	function s() {
		return o("WAWebCmd").Cmd.scrollToActiveChat();
	}
	function u(e) {
		o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, { type: "ForwardedAiBotMessage" });
	}
	l.useForwardedAiBotMessageClickHandler = e;
}), 98);
