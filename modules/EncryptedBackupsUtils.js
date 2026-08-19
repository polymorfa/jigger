__d("EncryptedBackupsUtils", ["WATimeUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		return Date.now() - t > o("WATimeUtils").DAY_MILLISECONDS * 30;
	};
	function s(e, t, n, r, o) {
		var a = {
			frankingTag: r == null ? void 0 : r.frankingTag,
			reportingTag: r == null ? void 0 : r.reportingTag
		}, i = {
			frankingMetadata: a,
			messageId: t,
			senderId: e,
			timestampMs: n
		};
		return {
			encryptedTransportMessage: o,
			metadata: i
		};
	}
	function u(e) {
		return JSON.stringify([
			e.author,
			e.chat,
			e.externalId
		]);
	}
	l.timestampOlderThan30Days = e, l.asBackupMessage = s, l.convertWAMsgIdToStringId = u;
}), 98);
