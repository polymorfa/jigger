__d("MAWRemovePendingSendMsgs", [
	"FBLogger",
	"MAWAckLevel",
	"MAWDbVersionList",
	"MAWGetDbVersion",
	"MAWIndexedDb",
	"MAWMessageSendScheduler",
	"MAWTransactionMode",
	"Promise",
	"TaskSchedulerPriority",
	"WALogger",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var a = yield o("MAWMessageSendScheduler").messageSendScheduler().run(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var a = o("MAWGetDbVersion").getArmadilloDbVersion() >= o("MAWDbVersionList").VERSION.V119 ? o("MAWIndexedDb").makeMsgrTransactor({ messages: o("MAWTransactionMode").READWRITE }, "removePendingSendMessages", function(n) {
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
									"removePendingSendMessages: Failed to update messages.\\\n                          Expected number of messages updated: ",
									", Actual: ",
									""
								])), a.length, t), t > 0 && r("FBLogger")("hanging_sending_cleanup").mustfix("Sending messages are cleaned up: %s messages", t), t;
							});
						});
					};
				}) : function() {
					return (s || (s = n("Promise"))).resolve(0);
				}, i = yield a();
				return i;
			}), {
				name: "remove-pending-msgs",
				priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
			}).promise;
			return a;
		});
	}
	var c = u(o("WATimeUtils").millisTime());
	l.removePendingSendMessages = c;
}), 98);
