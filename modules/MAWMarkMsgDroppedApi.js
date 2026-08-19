__d("MAWMarkMsgDroppedApi", [
	"MAWAckLevel",
	"MAWDbMsgTxns",
	"MAWDbReactionsTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWQplProxy",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		reactions: e.READWRITE,
		receiverFetchInfo: e.READONLY,
		threads: e.READWRITE,
		xma: e.READONLY
	}, "markMsgDropped", function(e) {
		return (function(t, n, r) {
			return r != null && o("MAWQplProxy").sendQplPointThroughBridge(r.qplEventType, "mark_msg_dropped_msg_and_reaction_fetch_start", { instanceKey: r.qplInstanceKey }), o("MAWDexieTable").dexieAll([o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(e, t), o("MAWDbReactionsTxns").maybeGetReactionByProtocolMsgId(e, t)]).then(function(t) {
				var a = t[0], i = t[1];
				if (r != null && o("MAWQplProxy").sendQplPointThroughBridge(r.qplEventType, "mark_msg_dropped_msg_and_reaction_fetch_end", { instanceKey: r.qplInstanceKey }), a != null) {
					var l = (n == null ? void 0 : n.isRetriable) === !0 ? o("MAWAckLevel").ACK.failedRetryable : o("MAWAckLevel").ACK.expired;
					return r != null && o("MAWQplProxy").sendQplPointThroughBridge(r.qplEventType, "mark_msg_dropped_update_system_ack_start", {
						annotations: { int: { ack: l } },
						instanceKey: r.qplInstanceKey
					}), o("MAWDbMsgTxns").updateSystemAck(e, a.msgId, l, void 0, void 0, void 0).then(function(e) {
						return r != null && o("MAWQplProxy").sendQplPointThroughBridge(r.qplEventType, "mark_msg_dropped_update_system_ack_end", { instanceKey: r.qplInstanceKey }), e == null ? "missing" : e.ack <= o("MAWAckLevel").ACK.clock ? "dropped" : "sent";
					});
				}
				return i != null ? (r != null && o("MAWQplProxy").sendQplPointThroughBridge(r.qplEventType, "mark_msg_dropped_update_delete_reaction_start", { instanceKey: r.qplInstanceKey }), o("MAWDbReactionsTxns").deleteReaction(e, i).then(function() {
					return r != null && o("MAWQplProxy").sendQplPointThroughBridge(r.qplEventType, "mark_msg_dropped_update_delete_reaction_end", { instanceKey: r.qplInstanceKey }), "dropped";
				})) : (r != null && o("MAWQplProxy").sendQplPointThroughBridge(r.qplEventType, "mark_msg_dropped_msg_and_reaction_missing", { instanceKey: r.qplInstanceKey }), "missing");
			});
		});
	});
	l.markMsgDropped = s;
}), 98);
