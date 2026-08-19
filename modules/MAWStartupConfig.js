__d("MAWStartupConfig", [
	"BackendInitLoggingUtils",
	"EBMinosCheckWasmFeatureSupport",
	"MAWConcurrent",
	"MAWDefinePersistedJob",
	"MAWFbCat",
	"MAWJobHandlers",
	"MAWRegisterBridgeHandlers",
	"MAWStartupComms",
	"MAWStartupDeferred",
	"MAWStartupMI",
	"MAWStartupScheduler",
	"MAWStartupState",
	"MAWStartupWiring",
	"WAArrayBufferUtils",
	"asyncToGeneratorRuntime",
	"cr:1027"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r, o) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r, a, i) {
			n("cr:1027") == null || n("cr:1027").overwriteSamplingRate(), o("BackendInitLoggingUtils").MAWMICPoint("backend_setup_start"), o("BackendInitLoggingUtils").MAWInitPoint("backend_setup_start"), o("MAWStartupScheduler").configureScheduler(), o("MAWFbCat").setFbCat(o("WAArrayBufferUtils").stringToArrayBuffer(e.fbCat));
			var l = o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupport(), s = yield o("MAWStartupComms").initComms(i, e, t);
			yield o("MAWConcurrent").concurrent(l, o("MAWStartupWiring").syncClockSkewWithUI(), o("MAWStartupWiring").wireOfflineQueues(s), o("MAWRegisterBridgeHandlers").registerBridgeHandlers(r, a, o("MAWStartupState").getWorkerHealthState), o("MAWDefinePersistedJob").setMsgrJobImplementations(o("MAWJobHandlers").getJobHandlers()), o("MAWStartupWiring").wireStateSync(), o("MAWStartupWiring").maybePreloadInMemoryThreads()), yield o("MAWStartupComms").startComms(s), o("MAWStartupMI").startEBUploadListeners(), o("MAWStartupDeferred").scheduleDeferredStartupWork(), o("MAWStartupMI").scheduleEBDeferredWork(e);
		}), s.apply(this, arguments);
	}
	l.startMAWBackendWithConfig = e;
}), 98);
