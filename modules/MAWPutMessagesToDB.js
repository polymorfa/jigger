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
	"MAWDataSourceLogger",
	"Promise",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, r) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a, i) {
			var l = a.editMsgHistory, s = a.expiringCountdown, u = a.medias, c = a.msgs, d = a.polls, m = a.quotedMsgs, p = a.reactions, _ = a.receiverFetchInfoPayloads, f = a.xmas;
			i != null && o("MAWDataSourceLogger").logDispatchDownloadStateUpdatesStart(i), i != null && (o("MAWDataSourceLogger").logDispatchDownloadStateUpdatesEnd(i), o("MAWDataSourceLogger").logCallBridgeHandlersStart(i)), yield (e || (e = n("Promise"))).all(u.map(function(e) {
				return o("MAWBridgeNewMediaHandler").call(r, e);
			})), m != null && m.length > 0 && (yield o("MAWBridgeNewMsgHandler").bulkCall(r, m)), yield o("MAWBridgeNewMsgHandler").bulkCall(r, c), yield e.all(f.map(function(e) {
				return o("MAWBridgeNewXMAHandler").call(r, e);
			})), yield e.all(_.map(function(e) {
				return o("MAWBridgeNewReceiverFetchInfoHandler").call(r, e);
			})), yield e.all(d.map(function(e) {
				return o("MAWBridgeNewPollHandler").call(r, e);
			})), yield o("MAWBridgeMsgsStartCountdownHandler").call(r, { msgs: s }), yield e.all(p.map(function(e) {
				return e.type === "delete" ? o("MAWBridgeDeleteReactionHandler").call(r, e.reaction) : o("MAWBridgeReactionUpsertHandler").call(r, e.reaction);
			})), yield o("MAWBridgeEditMsgHistoryAddedHandler").call(t, r, l), i != null && o("MAWDataSourceLogger").logCallBridgeHandlersEnd(i);
		}), u.apply(this, arguments);
	}
	function c(e, t, n) {
		return e.runInTransaction(function(r) {
			return s(e, r, t, n);
		}, "readwrite", "ui", void 0, i.id + ":100");
	}
	l.insertMessageResponseIntoDatabase = c;
}), 98);
