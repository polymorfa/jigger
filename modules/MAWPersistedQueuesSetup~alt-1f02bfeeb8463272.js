__d("MAWPersistedQueuesSetup", [
	"BackendInitLoggingUtils",
	"MAWCurrentUser",
	"MAWIndexedDbMetadata",
	"MAWODSProxy",
	"MessengerWebInitData",
	"PersistedQueueDB",
	"WAOdsEnums",
	"WormPersistedQueueDb",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e() {
		await o("BackendInitLoggingUtils").measureMawInit("persisted_queues_init", async function() {
			return await o("PersistedQueueDB").makePersistedQueues({
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
		});
	}
	l.mawPersistedQueuesSetup = e;
}), 98);
