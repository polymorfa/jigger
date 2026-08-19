__d("MAWHeaderSettingsMenuDeleteSecureThread.react", [
	"MWChatSettingsDeleteConversation.react",
	"MWChatStateActions",
	"MWChatStateV2.react",
	"react",
	"useMAWDeleteSecureThread"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.tab, n = e.thread, a = o("MWChatStateV2.react").useDispatch(), i = r("useMAWDeleteSecureThread")(n, function() {
			return a(o("MWChatStateActions").closeTab(Date.now(), t.tabId));
		});
		return s.jsx(r("MWChatSettingsDeleteConversation.react"), {
			entryPoint: "popup_chat_box",
			onClick: i,
			thread: n
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
