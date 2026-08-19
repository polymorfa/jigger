__d("MAWBridgeReceivedReceiptHandler", [
	"I64",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWTimeUtils",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
			var a = (e || (e = o("I64"))).of_string(n.fbid), i = o("MAWTimeUtils").toTimestamp(n.deliveredWatermarkTs), l = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.participants).getKeyRange(r, a));
			l != null && (yield t.participants.put({
				authorityLevel: l.authorityLevel,
				contactId: l.contactId,
				deliveredWatermarkTimestampMs: (e || (e = o("I64"))).equal(i, (e || (e = o("I64"))).zero) ? l.deliveredWatermarkTimestampMs : i,
				groupParticipantJoinState: l.groupParticipantJoinState,
				isAdmin: l.isAdmin,
				isModerator: l.isModerator,
				isSuperAdmin: l.isSuperAdmin,
				nickname: l.nickname,
				normalizedSearchTerms: l.normalizedSearchTerms,
				participantCapabilities: l.participantCapabilities,
				readActionTimestampMs: l.readActionTimestampMs,
				readWatermarkTimestampMs: l.readWatermarkTimestampMs,
				subscribeSource: l.subscribeSource,
				threadKey: l.threadKey,
				threadRoles: (e || (e = o("I64"))).zero
			}));
		}), u.apply(this, arguments);
	}
	function c(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.chatJid, "MAWBridgeReceivedReceiptHandler", function(e, n) {
			return s(e, t, n);
		});
	}
	l.callWithoutWaitingForAnything = s, l.call = c;
}), 98);
