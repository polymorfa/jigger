__d("MAWPutMessagesToDB", [
	"MAWBridgeDeleteReactionHandler",
	"MAWBridgeEditMsgHistoryAddedHandler",
	"MAWBridgeMsgsStartCountdownHandler",
	"MAWBridgeNewMediaHandler",
	"MAWBridgeNewMsgHandler",
	"MAWBridgeNewPollHandler",
	"MAWBridgeNewReceiverFetchInfoHandler",
	"MAWBridgeNewXMAHandler",
	"MAWBridgeReactionUpsertHandler",
	"MAWDataSourceLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, n, r) {
		var a = n.editMsgHistory, i = n.expiringCountdown, l = n.medias, s = n.msgs, u = n.polls, c = n.quotedMsgs, d = n.reactions, m = n.receiverFetchInfoPayloads, p = n.xmas;
		r != null && o("MAWDataSourceLogger").logDispatchDownloadStateUpdatesStart(r), r != null && (o("MAWDataSourceLogger").logDispatchDownloadStateUpdatesEnd(r), o("MAWDataSourceLogger").logCallBridgeHandlersStart(r)), await Promise.all(l.map(function(e) {
			return o("MAWBridgeNewMediaHandler").call(t, e);
		})), c != null && c.length > 0 && await o("MAWBridgeNewMsgHandler").bulkCall(t, c), await o("MAWBridgeNewMsgHandler").bulkCall(t, s), await Promise.all(p.map(function(e) {
			return o("MAWBridgeNewXMAHandler").call(t, e);
		})), await Promise.all(m.map(function(e) {
			return o("MAWBridgeNewReceiverFetchInfoHandler").call(t, e);
		})), await Promise.all(u.map(function(e) {
			return o("MAWBridgeNewPollHandler").call(t, e);
		})), await o("MAWBridgeMsgsStartCountdownHandler").call(t, { msgs: i }), await Promise.all(d.map(function(e) {
			return e.type === "delete" ? o("MAWBridgeDeleteReactionHandler").call(t, e.reaction) : o("MAWBridgeReactionUpsertHandler").call(t, e.reaction);
		})), await o("MAWBridgeEditMsgHistoryAddedHandler").call(e, t, a), r != null && o("MAWDataSourceLogger").logCallBridgeHandlersEnd(r);
	}
	function s(t, n, r) {
		return t.runInTransaction(function(o) {
			return e(t, o, n, r);
		}, "readwrite", "ui", void 0, i.id + ":100");
	}
	l.insertMessageResponseIntoDatabase = s;
}), 98);
