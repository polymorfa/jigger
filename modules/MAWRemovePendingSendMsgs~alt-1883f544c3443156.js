__d("MAWRemovePendingSendMsgs", [
	"FBLogger",
	"MAWAckLevel",
	"MAWDbVersionList",
	"MAWGetDbVersion",
	"MAWIndexedDb",
	"MAWMessageSendScheduler",
	"MAWTransactionMode",
	"TaskSchedulerPriority",
	"WALogger",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		return async function() {
			var n = await o("MAWMessageSendScheduler").messageSendScheduler().run(async function() {
				var n = o("MAWGetDbVersion").getArmadilloDbVersion() >= o("MAWDbVersionList").VERSION.V119 ? o("MAWIndexedDb").makeMsgrTransactor({ messages: o("MAWTransactionMode").READWRITE }, "removePendingSendMessages", function(n) {
					return function() {
						return n.messages.where("ack").equals(o("MAWAckLevel").ACK.clock).toArray().then(function(a) {
							var i = a.filter(function(e) {
								return e.sortOrderMs != null && e.sortOrderMs < t;
							}).map(function(e) {
								return {
									changes: { ack: o("MAWAckLevel").ACK.failed },
									key: e.rowId
								};
							});
							return n.messages.bulkUpdate(i).then(function(t) {
								return t !== a.length && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
									"removePendingSendMessages: Failed to update messages.                          Expected number of messages updated: ",
									", Actual: ",
									""
								], [
									`removePendingSendMessages: Failed to update messages.\\
                          Expected number of messages updated: `,
									", Actual: ",
									""
								])), a.length, t), t > 0 && r("FBLogger")("hanging_sending_cleanup").mustfix("Sending messages are cleaned up: %s messages", t), t;
							});
						});
					};
				}) : function() {
					return Promise.resolve(0);
				}, a = await n();
				return a;
			}, {
				name: "remove-pending-msgs",
				priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
			}).promise;
			return n;
		};
	}
	var u = s(o("WATimeUtils").millisTime());
	l.removePendingSendMessages = u;
}), 98);
