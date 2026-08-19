__d("MAWJobManager", [
	"MAWBridge",
	"MAWDefinePersistedJob",
	"MAWJobPersistenceAccessorsApi",
	"MAWODSProxy",
	"WAOdsEnums",
	"WAPersistedJobManagerV2",
	"WAWaitForComms",
	"WAWaitForUserUnblocked"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new (o("WAPersistedJobManagerV2")).PersistedJobManager({
		accessors: o("MAWJobPersistenceAccessorsApi").getJobPersistenceAccessors(),
		deprecatedJobs: {
			deleteMsgsForMe: "NOOP",
			downloadAndHandleMedia: "NOOP",
			downloadAndRestoreMedia: "NOOP",
			handleFutureproofMsg: "NOOP",
			removeCurrentDevice: "NOOP"
		},
		ignoreForceNonPersistedJobList: [
			"sendMsg",
			"sendBumpMsg",
			"sendReactionMsg",
			"sendMediaMsg",
			"sendWrittenMsg"
		],
		isRestartAfterCrash: !1,
		listeners: {
			onJobFinished: function(t, n, r, a) {
				return o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
					key: n + ".finished"
				}), o("MAWBridge").getBridge().fireAndForget("event", "onJobFinished", {
					id: t,
					originalArgs: r,
					result: a,
					type: n
				}, !0), null;
			},
			onJobStarted: function(t, n) {
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
					key: n + ".started"
				});
			}
		},
		offlineQueueCompletePromise: o("WAWaitForUserUnblocked").waitForUserUnblocked(),
		unfinishedJobEntries: o("WAWaitForComms").waitForComms().then(function() {
			return o("MAWJobPersistenceAccessorsApi").getJobPersistenceAccessors().loadAllJobs();
		})
	});
	function s() {
		return o("MAWDefinePersistedJob").persistedJobsApi;
	}
	function u() {
		return e;
	}
	l.getPersistedJobsApi = s, l.getJobManager = u;
}), 98);
