__d("MAWBridgeCallRestoreNativeOpHandler", [
	"MAWMpsGating",
	"Promise",
	"WAJids",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("requireDeferred")("LSProtobufRestoreHandler").__setRef("MAWBridgeCallRestoreNativeOpHandler");
	function u(t) {
		var r = t.chatJid, a = t.decryptedMessagesProtobufs, i = t.isPointQuery, l = t.taskSource;
		return o("MAWMpsGating").isFullMpsEnabled() ? (e || (e = n("Promise"))).resolve() : s.load().then(function(e) {
			return e.handleProtobufRestoreHelper(o("WAJids").threadIdForChatJid(r), {
				convertedProtobufs: a,
				type: "convertedProtobufs"
			}, !1, void 0, !1, void 0, i, void 0, void 0, void 0, void 0, l, r);
		});
	}
	l.call = u;
}), 98);
