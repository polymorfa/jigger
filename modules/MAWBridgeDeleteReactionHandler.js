__d("MAWBridgeDeleteReactionHandler", ["I64", "MAWMiActOnMiThreadExistsForJid__DO_NOT_USE"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, n.chatJid, "MAWBridgeDeleteReactionHandler", function(t, r) {
			return t.reactions.delete(r, n.messageId, (e || (e = o("I64"))).of_string(n.actorId));
		});
	}
	l.call = s;
}), 98);
