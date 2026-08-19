__d("MAWMPSCreateBackupDirective", [
	"EBLogger",
	"MpsMessageToBridgeWrapper",
	"MpsTypes",
	"WAStanzaUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("EBLogger").EBLogger().tags(["mps"]);
	function s(t) {
		switch (t) {
			case o("MpsTypes").ActionType.UpsertTopLevel: return 1;
			case o("MpsTypes").ActionType.UpsertSupplemental: return 2;
			case o("MpsTypes").ActionType.DeleteTopLevel: return 3;
			case o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder: return 4;
			case o("MpsTypes").ActionType.DeleteSupplemental:
			case o("MpsTypes").ActionType.Preprocess:
			case o("MpsTypes").ActionType.Noop:
			case o("MpsTypes").ActionType.DeleteThread:
			case o("MpsTypes").ActionType.Unknown: return e.warn("Action type %d not supported on EB upload", t), 0;
		}
	}
	function u(t, n) {
		var r = s(t.actionType);
		if (r === 0) {
			e.warn("Unknown EB upload action type - cannot upload message");
			return;
		}
		var o = {
			actionType: r,
			originalMsgProtocolId: n
		};
		return t.supplementalKey != null && (o = babelHelpers.extends({}, o, { supplementalKey: t.supplementalKey })), o;
	}
	function c(e, t) {
		var n = o("MpsMessageToBridgeWrapper").MpsMessageToBridgeWrapper.fromTopLevel(t);
		return {
			author: n.getAuthor(),
			chat: n.getChatJid(),
			externalId: o("WAStanzaUtils").toStanzaId(e.targetMessageId)
		};
	}
	l.createBackupDirectiveFromMPSMessage = u, l.getTargetProtocolMsgIdForMessage = c;
}), 98);
