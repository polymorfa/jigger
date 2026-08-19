__d("MAWGetThreadLastMessageTsApi", [
	"MAWDbMsgTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READONLY,
		threads: o("MAWTransactionMode").READONLY
	}, "getThreadLastMessageTs", function(e) {
		return (function(t) {
			return e.threads.get({ authoritativeThreadKey: t }).then(function(t) {
				if (t != null) return o("MAWDbMsgTxns").getThreadNewestMessageBySortOrder(e, t.jid).then(function(e) {
					var t;
					return e == null ? null : o("WATimeUtils").castUnixTimeToMillisTime((t = e.serverTs) != null ? t : o("WATimeUtils").castToUnixTime(0));
				});
			});
		});
	});
	l.getThreadLastMessageTs = e;
}), 98);
