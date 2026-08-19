__d("MAWBridgeGroupInviteUpdateHandler", [
	"I64",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWUpdateLSThreadCapabilities",
	"Promise",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, a) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, a.threadJid, "MAWBridgeGroupInviteUpdateHandler", function(t, i) {
			var l = (s || (s = o("I64"))).of_string(a.inviterId);
			return (e || (e = n("Promise"))).all([o("MAWUpdateLSThreadCapabilities").setGroupInviteTxn(t, i, l)]).then(r("emptyFunction"));
		});
	}
	l.call = u;
}), 98);
