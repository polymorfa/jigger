__d("MAWPersistedQueuesSetup", [
	"BackendInitLoggingUtils",
	"MAWCurrentUser",
	"MAWIndexedDbMetadata",
	"MAWODSProxy",
	"MessengerWebInitData",
	"PersistedQueueDB",
	"WAOdsEnums",
	"WormPersistedQueueDb",
	"asyncToGeneratorRuntime",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield o("BackendInitLoggingUtils").measureMawInit("persisted_queues_init", n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				return yield o("PersistedQueueDB").makePersistedQueues({
					blockingErrorThreshold: r("justknobx")._("3218"),
					dbName: o("MAWIndexedDbMetadata").persistedQueueDbName(o("MAWCurrentUser").getID()),
					onBlockingError: function(t) {
						o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.WORM,
							key: "reverb.unrecoverable." + t
						});
					},
					qplEvent: r("qpl")._(1056840657, "2716"),
					strEncKey: r("MessengerWebInitData").accountKeyV2
				}), o("WormPersistedQueueDb").makePersistedQueueDb({
					blockingErrorThreshold: r("justknobx")._("3218"),
					dbName: o("MAWIndexedDbMetadata").wormPersistedQueueDbName(o("MAWCurrentUser").getID()),
					onBlockingError: function(t) {
						o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.WORM,
							key: "reverb.unrecoverable." + t
						});
					},
					qplEvent: r("qpl")._(1056840657, "2716"),
					strEncKey: r("MessengerWebInitData").accountKeyV2
				});
			}));
		}), s.apply(this, arguments);
	}
	l.mawPersistedQueuesSetup = e;
}), 98);
