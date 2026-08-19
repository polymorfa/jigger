__d("useLSMessagingSource", ["IGDWebUtils", "MWLSThreadDisplayContext"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), t = o("IGDWebUtils").isOnInstagramWeb();
		switch (e) {
			case "Inbox": return "inboxInThread";
			case "FullscreenChat": return "fullscreenChat";
			case "ChatTab": return t ? "igdChatTabsThreadView" : "chatInThread";
			default: return "unknown";
		}
	}
	l.default = e;
}), 98);
