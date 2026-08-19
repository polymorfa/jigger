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
	"cr:1027"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, r, a, i) {
		n("cr:1027") == null || n("cr:1027").overwriteSamplingRate(), o("BackendInitLoggingUtils").MAWMICPoint("backend_setup_start"), o("BackendInitLoggingUtils").MAWInitPoint("backend_setup_start"), o("MAWStartupScheduler").configureScheduler(), o("MAWFbCat").setFbCat(o("WAArrayBufferUtils").stringToArrayBuffer(e.fbCat));
		var l = o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupport(), s = await o("MAWStartupComms").initComms(i, e, t);
		await o("MAWConcurrent").concurrent(l, o("MAWStartupWiring").syncClockSkewWithUI(), o("MAWStartupWiring").wireOfflineQueues(s), o("MAWRegisterBridgeHandlers").registerBridgeHandlers(r, a, o("MAWStartupState").getWorkerHealthState), o("MAWDefinePersistedJob").setMsgrJobImplementations(o("MAWJobHandlers").getJobHandlers()), o("MAWStartupWiring").wireStateSync(), o("MAWStartupWiring").maybePreloadInMemoryThreads()), await o("MAWStartupComms").startComms(s), o("MAWStartupMI").startEBUploadListeners(), o("MAWStartupDeferred").scheduleDeferredStartupWork(), o("MAWStartupMI").scheduleEBDeferredWork(e);
	}
	l.startMAWBackendWithConfig = e;
}), 98);
