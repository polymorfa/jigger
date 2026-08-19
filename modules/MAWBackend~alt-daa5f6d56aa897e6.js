__d("MAWBackend", [
	"ACTSanitizerApiLazyLoader",
	"BackendInitLoggingUtils",
	"DeidentifiedGraphQLFetch",
	"EBInitializeMinosCryptoLibrary",
	"EBMinosCheckWasmFeatureSupport",
	"EBPrewarmMinosWasm",
	"EBPrewarmSenderUploadQueue",
	"EBSenderUploadQueueOperations",
	"EBWorkerEBDBApiDeferred",
	"EncryptedBackupsUploadQueueV3Scheduler",
	"JSResourceForInteraction",
	"MAWBackendCleaners",
	"MAWBackendHandlers",
	"MAWBackendReceiverFetchPrefetchExperiment",
	"MAWBridge",
	"MAWDBMigration",
	"MAWDefinePersistedJob",
	"MAWFTSDataSync",
	"MAWFbCat",
	"MAWForwardEBLSEbEnabledStateChangesToMainThread",
	"MAWInMemoryThreadStore",
	"MAWJobHandlers",
	"MAWMediaReceiverFetchDeidentifiedRelayEnvironment",
	"MAWPreloadEBMetadataCache",
	"MAWRegisterBridgeHandlers",
	"MAWReliabilityMonitor",
	"MAWRemovePendingSendMsgs",
	"MAWSharedOfflineQueueMetric",
	"MAWSharedOfflineResumeUINotifier",
	"MAWStateManagerSyncToMainThread",
	"MAWTaskDefinitions",
	"MAWWAComms",
	"MAWWarmInMemoryParticipantStore",
	"MAWXMAReceiverFetchDeidentifiedRelayEnvironment",
	"MWFBLogger",
	"MawMpsCop",
	"MsgrSchedulerQPL",
	"QPLFlow",
	"QuickPerformanceLogger",
	"WAArrayBufferUtils",
	"WAGetClockSkewApi",
	"WAGetMediaRoute",
	"WAMessageLoggingPublisher",
	"WAMockServerShell",
	"WAPassiveMode",
	"WAServerRemoteProceduresHandlers",
	"WAWaitForComms",
	"WAWaitForUserUnblocked",
	"WmiMediaServiceDownloadQueueScheduler",
	"cr:1027",
	"getErrorSafe",
	"gkx",
	"promiseDone",
	"qpl",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = r("requireDeferred")("WorkerRelayNetwork").__setRef("MAWBackend"), g = r("gkx")("23903") && r("JSResourceForInteraction")("MAWDebugDefineFunctions").__setRef("MAWBackend"), h = r("gkx")("23903") && r("JSResourceForInteraction")("WADebugTools").__setRef("MAWBackend"), y = o("MWFBLogger").MWLogger().tags(["backend"]);
	function C() {
		return Promise.all([o("DeidentifiedGraphQLFetch").prewarmDeidentifiedTokenCache(o("MAWMediaReceiverFetchDeidentifiedRelayEnvironment").MAWMediaReceiverFetchDeidentifiedRelayEnvironmentConfig.acsProjectName), o("DeidentifiedGraphQLFetch").prewarmDeidentifiedTokenCache(o("MAWXMAReceiverFetchDeidentifiedRelayEnvironment").MAWXMAReceiverFetchDeidentifiedRelayEnvironmentConfig.acsProjectName)]).then(function() {});
	}
	var b = o("MAWReliabilityMonitor").HealthReportState.UNKNOWN, v = o("MAWReliabilityMonitor").MAWReliabilityMonitorSingleton.startMonitoring("worker_startup", function() {
		return {
			reason: String(b),
			state: b
		};
	});
	o("MAWReliabilityMonitor").MAWReliabilityMonitorSingleton.onAggregatedReportChange(function(t) {
		y.tags(["WorkerStatus"]).DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), t.toString());
	});
	function S(e) {
		b = e, v.updateState();
	}
	var R = null;
	function L() {
		return R;
	}
	async function E(e, t, a, i, l) {
		n("cr:1027") == null || n("cr:1027").overwriteSamplingRate(), y.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["MAWBackend; deviceJid: ", " "])), e.deviceJid), o("BackendInitLoggingUtils").MAWMICPoint("backend_setup_start"), o("BackendInitLoggingUtils").MAWInitPoint("backend_setup_start"), o("MsgrSchedulerQPL").configMsgrScheduler({ qpl: {
			eventType: r("qpl")._(1056838280, "1566"),
			qplFlowStarter: o("QPLFlow").startQplFlowWithCoinflip
		} }), (_ || (_ = r("QuickPerformanceLogger"))).setAlwaysOnSampleRate(r("qpl")._(1056838280, "1566"), 1), r("promiseDone")(o("ACTSanitizerApiLazyLoader").loadACTSanitizerApi());
		var p = o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupport();
		o("MAWFbCat").setFbCat(o("WAArrayBufferUtils").stringToArrayBuffer(e.fbCat));
		var v = o("WAServerRemoteProceduresHandlers").makeServerRemoteProcedureHandlers(o("MAWBackendHandlers").serverRpcHandlers), L = await o("MAWWAComms").initWAService(l, e, t, v);
		R = {
			startComms: L.startComms,
			stopComms: L.stopComms
		}, await k(), await p, o("EBPrewarmMinosWasm").prewarmMinosWasm(), o("EBInitializeMinosCryptoLibrary").initializeMinosCryptoLibrary({ transportSigningKeypair: e.regInfo.staticKeyPair }).catch(function(e) {
			y.catching(r("getErrorSafe")(e)).MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["unexpected error initializing minos crypto library"])));
		}), o("EBPrewarmSenderUploadQueue").prewarmSenderUploadQueue(), o("WAGetMediaRoute").getCachedOrFreshMediaAccess().catch(function(e) {
			y.catching(r("getErrorSafe")(e)).MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Error prewarming media routes"])));
		}), o("WAWaitForUserUnblocked").markOfflineQueueAsStarted(), o("MAWSharedOfflineQueueMetric").makeOfflineQueueMetric(L.oneQueue, o("WAPassiveMode").passiveModeNotifier, o("WAMessageLoggingPublisher").messageLoggingPublisher), o("MawMpsCop").mpsCop().subscribeToOfflineQueue(L.oneQueue), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToMawEvents(o("MawMpsCop").mpsCop()), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToWAEvents(L.oneQueue), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToMessageEvents(o("WAMessageLoggingPublisher").messageLoggingPublisher), o("BackendInitLoggingUtils").MAWInitPoint("backend_cop_ready"), r("promiseDone")(o("MAWRemovePendingSendMsgs").removePendingSendMessages()), r("promiseDone")(o("MAWWarmInMemoryParticipantStore").warmInMemoryParticipantStoreFromRecentThreads()), o("MAWBackendCleaners").setupCleaners(), o("MAWDefinePersistedJob").setMsgrJobImplementations(o("MAWJobHandlers").getJobHandlers()), o("WAMockServerShell").isMockServerMode || r("promiseDone")(o("WAWaitForComms").waitForComms().then(function() {
			return o("MAWTaskDefinitions").registerTasks(o("WAWaitForUserUnblocked").waitForUserUnblocked());
		})), r("promiseDone")(f.load().then(function(e) {
			var t = e.createWorkerNetworkExecute;
			t(), o("MAWBackendReceiverFetchPrefetchExperiment").isMawBackendReceiverFetchPrefetchEnabled() && r("promiseDone")(C().catch(function(e) {
				y.catching(r("getErrorSafe")(e)).warn("Failed to prewarm MPS receiver fetch ACS token caches");
			}));
		})), o("MAWRegisterBridgeHandlers").registerBridgeHandlers(a, i, function() {
			return b;
		}), o("MAWReliabilityMonitor").MAWReliabilityMonitorSingleton.onAggregatedReportChange(function(e) {
			a.setAckPayload(e.toAckPayloadFormat());
		}), r("promiseDone")(o("MAWFTSDataSync").initFTS().then(function(e) {
			o("BackendInitLoggingUtils").MAWInitPoint(e ? "backend_search_ready" : "backend_search_failed");
		})), r("promiseDone")(o("MAWDBMigration").startMigration()), h && h != null && g && g != null && r("promiseDone")(Promise.all([g.load(), h.load()]).then(function(e) {
			var t = e[0].getAllDebugFunctions, n = e[1].initDebugFunctions;
			n(t());
		}));
		var E = async function() {
			try {
				o("BackendInitLoggingUtils").MAWInitPoint("backend_comms_start"), await L.startComms(), y.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Worker inited"]))), S(o("MAWReliabilityMonitor").HealthReportState.OK), o("BackendInitLoggingUtils").MAWMICPoint("backend_setup_end"), o("BackendInitLoggingUtils").MAWInitPoint("backend_comms_end");
			} catch (n) {
				var e, t;
				throw S(o("MAWReliabilityMonitor").HealthReportState.ERROR), y.catching(r("getErrorSafe")(n)).mustfixThrow("Failed to init comms - errorType: %s", (e = (t = r("getErrorSafe")(n)) == null ? void 0 : t.name) != null ? e : "UnknownError");
			}
		}, I = o("EBMinosCheckWasmFeatureSupport").getWasmFeatureSupport();
		return I && (o("EBWorkerEBDBApiDeferred").startListeningEBDeviceRegistrations(), o("MAWForwardEBLSEbEnabledStateChangesToMainThread").listenForEBLSEbEnabledStateChangesAndSendToMainThread(), o("MAWPreloadEBMetadataCache").preloadEBMetadataCacheAfterEbEnabled()), o("MAWStateManagerSyncToMainThread").subscribeAndSyncStateManagerValuesToMainThread(), o("MAWPreloadEBMetadataCache").preloadEBMetadataCacheForVisibility(), o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && await o("MAWInMemoryThreadStore").preloadWormPartialThreads().catch(function(e) {
			y.catching(r("getErrorSafe")(e)).MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["unexpected error pulling threads data from WORM DB"])));
		}), o("WmiMediaServiceDownloadQueueScheduler").subscribeToDownloadQueueUpdates(), E().then(function() {
			I && (o("EncryptedBackupsUploadQueueV3Scheduler").subscribeToUploadQueueUpdates(), r("gkx")("11214") && o("EBSenderUploadQueueOperations").listenForEbUploadQueueFlush());
		});
	}
	async function k() {
		var e = await o("WAGetClockSkewApi").getClockSkew(), t = e.clockSkew;
		y.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["MAWBackend; sync clock skew with UI, clockSkew: ", " "])), t), o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
			tag: "ClockSkewUpdated",
			value: t
		}] });
	}
	l.getWaComms = L, l.startMAWBackend = E;
}), 98);
