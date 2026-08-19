__d("MAWBuildIncomingMsgs", [
	"MAWAckLevel",
	"MAWDbMsg",
	"MAWMsgType",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 6 * o("WATimeUtils").HOUR_SECONDS;
	function s(e, t) {
		var n = e.author, r = e.externalId;
		return {
			ack: o("MAWAckLevel").ACK.received,
			altIndex: void 0,
			author: n,
			externalId: r,
			serverTs: t,
			ts: t,
			type: o("MAWMsgType").MSG_TYPE.CIPHERTEXT
		};
	}
	function u(e, t) {
		var n = e.author, r = e.externalId;
		return {
			ack: o("MAWAckLevel").ACK.failed,
			altIndex: void 0,
			author: n,
			externalId: r,
			serverTs: t,
			ts: t,
			type: o("MAWMsgType").MSG_TYPE.UNAVAILABLE
		};
	}
	function c(t, n) {
		var r;
		return {
			ack: t.ack,
			author: t.author,
			externalId: t.externalId,
			messageDeleteForMeTs: o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + e),
			msgContent: (r = o("MAWDbMsg").getMsgContent(t)) == null ? void 0 : r.content,
			threadJid: n.jid,
			ts: t.ts,
			type: o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME
		};
	}
	function d(t, n, r) {
		return {
			ack: t.ack,
			altIndex: void 0,
			author: t.author,
			externalId: r.externalId,
			msgContent: o("MAWDbMsg").getMsgContent(t),
			originalTs: t.ts,
			revokedExternalId: r.revokedExternalId,
			threadJid: n.jid,
			ts: r.ts,
			type: o("MAWMsgType").MSG_TYPE.REVOKED,
			unsendMsgContentDeleteTs: o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + e)
		};
	}
	l.REVOKE_CONTENT_EXPIRATION_IN_SEC = e, l.buildUnstoredCiphertextMsg = s, l.buildUnstoredUnavailableMsg = u, l.buildUnstoredDeleteForMeMsg = c, l.buildUnstoredRevokedMsg = d;
}), 98);
