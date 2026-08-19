__d("MAWThreadEvent", [
	"MAWBridge",
	"MAWBridgeFireAndForget",
	"MAWContactRelationshipType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		o("MAWBridge").getBridge().setHandlers("threadEvent", { placeholderConvertSubscription: function(a) {
			var r = a.chatJid, i = a.msgId;
			e === r && o("MAWBridgeFireAndForget").fireAndForget("backend", "markThreadAsRead", {
				chatJid: r,
				isReadReceiptsDisabled: n,
				relationship: t != null ? o("MAWContactRelationshipType").getContactRelationshipType(t) : null
			});
		} });
	}
	l.setThreadEventHandler = e;
}), 98);
