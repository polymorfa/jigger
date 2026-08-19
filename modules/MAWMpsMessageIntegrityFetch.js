__d("MAWMpsMessageIntegrityFetch", [
	"MAWCurrentUser",
	"MAWEBLSInWorkerSwitch",
	"MAWEBSwitch",
	"MAWMessageIntegrityFetchMessagesData",
	"MAWMessagesDirection",
	"MpsOverBridge",
	"MpsTypes",
	"Promise",
	"WAPromiseDelays",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, r) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l) {
			var s = o("MAWMessageIntegrityFetchMessagesData").getRangeDetailsFromMessageIntegrityFromReference(i), u = s.messageId, c = s.timestampMs;
			r("MAWEBSwitch").isEnabled() === !0 && (yield (e || (e = n("Promise"))).race([o("WAPromiseDelays").delayMs(1e4), yield r("MAWEBLSInWorkerSwitch").waitForEBEnabled()]));
			var d = yield o("MpsOverBridge").mps().loadMessages({
				config: {
					shouldFetchSupplementals: !1,
					shouldIgnoreLocalOnly: !0,
					strategy: "full-fetch"
				},
				debug: { purpose: "integrity-check" },
				direction: o("MAWMessagesDirection").translateMawDirectionToMwpDirection(a),
				from: [o("MpsTypes").toTimestamp(c), u],
				numMessages: l * 2,
				threadId: o("MpsTypes").toThreadId(t)
			});
			return d.success === !1 ? null : d.value.messages.filter(function(e) {
				return !o("MpsTypes").isVisibilityMetadataMessage(e);
			}).map(function(e) {
				return {
					externalId: e.toplevelProtobuf.messageId,
					isOutgoing: e.toplevelProtobuf.senderId !== o("MAWCurrentUser").getID(),
					msgType: "",
					sortOrderMs: e.toplevelProtobuf.timestampMs
				};
			});
		}), u.apply(this, arguments);
	}
	l.mpsMessageIntegrityFetch = s;
}), 98);
