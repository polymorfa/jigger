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
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MWFBLogger").MWLogger().tags(["backend"]);
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAGetClockSkewApi").getClockSkew(), t = e.clockSkew;
			o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
				tag: "ClockSkewUpdated",
				value: t
			}] });
		}), c.apply(this, arguments);
	}
	function d(e) {
		o("WAWaitForUserUnblocked").markOfflineQueueAsStarted(), o("MAWSharedOfflineQueueMetric").makeOfflineQueueMetric(e.oneQueue, o("WAPassiveMode").passiveModeNotifier, o("WAMessageLoggingPublisher").messageLoggingPublisher), o("MawMpsCop").mpsCop().subscribeToOfflineQueue(e.oneQueue), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToMawEvents(o("MawMpsCop").mpsCop()), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToWAEvents(e.oneQueue), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToMessageEvents(o("WAMessageLoggingPublisher").messageLoggingPublisher), o("BackendInitLoggingUtils").MAWInitPoint("backend_cop_ready");
	}
	function m() {
		o("MAWStateManagerSyncToMainThread").subscribeAndSyncStateManagerValuesToMainThread(), o("MAWPreloadEBMetadataCache").preloadEBMetadataCacheForVisibility();
	}
	function p() {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && (yield o("MAWInMemoryThreadStore").preloadWormPartialThreads().catch(function(t) {
				s.catching(r("getErrorSafe")(t)).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["unexpected error pulling threads data from WORM DB"])));
			}));
		}), _.apply(this, arguments);
	}
	l.syncClockSkewWithUI = u, l.wireOfflineQueues = d, l.wireStateSync = m, l.maybePreloadInMemoryThreads = p;
}), 98);
