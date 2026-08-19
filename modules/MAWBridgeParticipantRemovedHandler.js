__d("MAWBridgeParticipantRemovedHandler", ["I64", "MAWMiActOnMiThreadExistsForJid__DO_NOT_USE"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, n.threadJid, "MAWBridgeParticipantRemovedHandler", function(t, r) {
			return t.participants.delete(r, (e || (e = o("I64"))).of_string(n.userId));
		});
	}
	l.call = s;
}), 98);
