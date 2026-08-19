__d("MAWAdminWriteChangeParticipantsAdminMsgTxn", [
	"FBLogger",
	"MAWAdminAddParticipantMsg",
	"MAWAdminRemoveParticipantMsg",
	"MAWDbThreadTxns",
	"MAWLocalizationUtils",
	"MAWUserJidWrapper",
	"MAWWriteMsgTxns",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return u(e, t, o("MAWAdminAddParticipantMsg").createAddParticipantsAdminMessage);
	}
	function s(e, t) {
		return u(e, t, o("MAWAdminRemoveParticipantMsg").createRemoveParticipantsAdminMessage);
	}
	function u(e, t, n) {
		var a = t.admin, i = t.chatJid, l = t.participants, s = t.serverTs;
		if (l.length === 0) throw r("FBLogger")("messenger_web").mustfixThrow("invalid number of participants when writing participants change admin msg");
		return o("MAWDbThreadTxns").getThread(e, i).then(function(i) {
			if (!i.success) throw r("FBLogger")("messenger_web").mustfixThrow("no thread when writing participants change admin msg");
			var u = i.value, c = o("MAWUserJidWrapper").getMyUserJid(), d = a === "@me" ? c : a;
			if (d != null) {
				var m = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg(n(d, l), u.jid, t.externalId, s);
				return o("MAWWriteMsgTxns").writeMsg(e, m, u).then(r("emptyFunction"));
			}
		});
	}
	l.writeAddParticipantAdminMsg = e, l.writeRemoveParticipantAdminMsg = s;
}), 98);
