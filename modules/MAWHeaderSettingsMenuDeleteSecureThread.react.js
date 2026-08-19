__d("MAWHeaderSettingsMenuDeleteSecureThread.react", [
	"MWChatSettingsDeleteConversation.react",
	"MWChatStateActions",
	"MWChatStateV2.react",
	"react",
	"react-compiler-runtime",
	"useMAWDeleteSecureThread"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(6), n = e.tab, a = e.thread, i = o("MWChatStateV2.react").useDispatch(), l;
		t[0] !== i || t[1] !== n.tabId ? (l = function() {
			return i(o("MWChatStateActions").closeTab(Date.now(), n.tabId));
		}, t[0] = i, t[1] = n.tabId, t[2] = l) : l = t[2];
		var u = r("useMAWDeleteSecureThread")(a, l), c;
		return t[3] !== u || t[4] !== a ? (c = s.jsx(r("MWChatSettingsDeleteConversation.react"), {
			entryPoint: "popup_chat_box",
			onClick: u,
			thread: a
		}), t[3] = u, t[4] = a, t[5] = c) : c = t[5], c;
	}
	l.default = u;
}), 98);
