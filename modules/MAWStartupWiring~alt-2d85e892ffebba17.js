__d("MAWStartupWiring", [
	"BackendInitLoggingUtils",
	"MAWBridge",
	"MAWInMemoryThreadStore",
	"MAWPreloadEBMetadataCache",
	"MAWSharedOfflineQueueMetric",
	"MAWSharedOfflineResumeUINotifier",
	"MAWStateManagerSyncToMainThread",
	"MWFBLogger",
	"MawMpsCop",
	"WAGetClockSkewApi",
	"WAMessageLoggingPublisher",
	"WAPassiveMode",
	"WAWaitForUserUnblocked",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MWFBLogger").MWLogger().tags(["backend"]);
	async function u() {
		var e = await o("WAGetClockSkewApi").getClockSkew(), t = e.clockSkew;
		o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
			tag: "ClockSkewUpdated",
			value: t
		}] });
	}
	function c(e) {
		o("WAWaitForUserUnblocked").markOfflineQueueAsStarted(), o("MAWSharedOfflineQueueMetric").makeOfflineQueueMetric(e.oneQueue, o("WAPassiveMode").passiveModeNotifier, o("WAMessageLoggingPublisher").messageLoggingPublisher), o("MawMpsCop").mpsCop().subscribeToOfflineQueue(e.oneQueue), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToMawEvents(o("MawMpsCop").mpsCop()), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToWAEvents(e.oneQueue), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToMessageEvents(o("WAMessageLoggingPublisher").messageLoggingPublisher), o("BackendInitLoggingUtils").MAWInitPoint("backend_cop_ready");
	}
	function d() {
		o("MAWStateManagerSyncToMainThread").subscribeAndSyncStateManagerValuesToMainThread(), o("MAWPreloadEBMetadataCache").preloadEBMetadataCacheForVisibility();
	}
	async function m() {
		o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && await o("MAWInMemoryThreadStore").preloadWormPartialThreads().catch(function(t) {
			s.catching(r("getErrorSafe")(t)).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["unexpected error pulling threads data from WORM DB"])));
		});
	}
	l.syncClockSkewWithUI = u, l.wireOfflineQueues = c, l.wireStateSync = d, l.maybePreloadInMemoryThreads = m;
}), 98);
