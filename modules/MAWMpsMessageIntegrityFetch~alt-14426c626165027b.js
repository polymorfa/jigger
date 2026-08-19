__d("MAWMpsMessageIntegrityFetch", [
	"MAWCurrentUser",
	"MAWEBLSInWorkerSwitch",
	"MAWEBSwitch",
	"MAWMessageIntegrityFetchMessagesData",
	"MAWMessagesDirection",
	"MpsOverBridge",
	"MpsTypes",
	"WAPromiseDelays"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, n, a) {
		var i = o("MAWMessageIntegrityFetchMessagesData").getRangeDetailsFromMessageIntegrityFromReference(n), l = i.messageId, s = i.timestampMs;
		r("MAWEBSwitch").isEnabled() === !0 && await Promise.race([o("WAPromiseDelays").delayMs(1e4), await r("MAWEBLSInWorkerSwitch").waitForEBEnabled()]);
		var u = await o("MpsOverBridge").mps().loadMessages({
			config: {
				shouldFetchSupplementals: !1,
				shouldIgnoreLocalOnly: !0,
				strategy: "full-fetch"
			},
			debug: { purpose: "integrity-check" },
			direction: o("MAWMessagesDirection").translateMawDirectionToMwpDirection(t),
			from: [o("MpsTypes").toTimestamp(s), l],
			numMessages: a * 2,
			threadId: o("MpsTypes").toThreadId(e)
		});
		return u.success === !1 ? null : u.value.messages.filter(function(e) {
			return !o("MpsTypes").isVisibilityMetadataMessage(e);
		}).map(function(e) {
			return {
				externalId: e.toplevelProtobuf.messageId,
				isOutgoing: e.toplevelProtobuf.senderId !== o("MAWCurrentUser").getID(),
				msgType: "",
				sortOrderMs: e.toplevelProtobuf.timestampMs
			};
		});
	}
	l.mpsMessageIntegrityFetch = e;
}), 98);
