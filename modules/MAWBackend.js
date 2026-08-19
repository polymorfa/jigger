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
	"Promise",
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
	"asyncToGeneratorRuntime",
	"cr:1027",
	"getErrorSafe",
	"gkx",
	"promiseDone",
	"qpl",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g = r("requireDeferred")("WorkerRelayNetwork").__setRef("MAWBackend"), h = r("gkx")("23903") && r("JSResourceForInteraction")("MAWDebugDefineFunctions").__setRef("MAWBackend"), y = r("gkx")("23903") && r("JSResourceForInteraction")("WADebugTools").__setRef("MAWBackend"), C = o("MWFBLogger").MWLogger().tags(["backend"]);
	function b() {
		return (f || (f = n("Promise"))).all([o("DeidentifiedGraphQLFetch").prewarmDeidentifiedTokenCache(o("MAWMediaReceiverFetchDeidentifiedRelayEnvironment").MAWMediaReceiverFetchDeidentifiedRelayEnvironmentConfig.acsProjectName), o("DeidentifiedGraphQLFetch").prewarmDeidentifiedTokenCache(o("MAWXMAReceiverFetchDeidentifiedRelayEnvironment").MAWXMAReceiverFetchDeidentifiedRelayEnvironmentConfig.acsProjectName)]).then(function() {});
	}
	var v = o("MAWReliabilityMonitor").HealthReportState.UNKNOWN, S = o("MAWReliabilityMonitor").MAWReliabilityMonitorSingleton.startMonitoring("worker_startup", function() {
		return {
			reason: String(v),
			state: v
		};
	});
	o("MAWReliabilityMonitor").MAWReliabilityMonitorSingleton.onAggregatedReportChange(function(t) {
		C.tags(["WorkerStatus"]).DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), t.toString());
	});
	function R(e) {
		v = e, S.updateState();
	}
	var L = null;
	function E() {
		return L;
	}
	function k(e, t, n, r, o) {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a, i, l) {
			n("cr:1027") == null || n("cr:1027").overwriteSamplingRate(), C.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["MAWBackend; deviceJid: ", " "])), e.deviceJid), o("BackendInitLoggingUtils").MAWMICPoint("backend_setup_start"), o("BackendInitLoggingUtils").MAWInitPoint("backend_setup_start"), o("MsgrSchedulerQPL").configMsgrScheduler({ qpl: {
				eventType: r("qpl")._(1056838280, "1566"),
				qplFlowStarter: o("QPLFlow").startQplFlowWithCoinflip
			} }), (_ || (_ = r("QuickPerformanceLogger"))).setAlwaysOnSampleRate(r("qpl")._(1056838280, "1566"), 1), r("promiseDone")(o("ACTSanitizerApiLazyLoader").loadACTSanitizerApi());
			var p = o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupport();
			o("MAWFbCat").setFbCat(o("WAArrayBufferUtils").stringToArrayBuffer(e.fbCat));
			var S = o("WAServerRemoteProceduresHandlers").makeServerRemoteProcedureHandlers(o("MAWBackendHandlers").serverRpcHandlers), E = yield o("MAWWAComms").initWAService(l, e, t, S);
			L = {
				startComms: E.startComms,
				stopComms: E.stopComms
			}, yield T(), yield p, o("EBPrewarmMinosWasm").prewarmMinosWasm(), o("EBInitializeMinosCryptoLibrary").initializeMinosCryptoLibrary({ transportSigningKeypair: e.regInfo.staticKeyPair }).catch(function(e) {
				C.catching(r("getErrorSafe")(e)).MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["unexpected error initializing minos crypto library"])));
			}), o("EBPrewarmSenderUploadQueue").prewarmSenderUploadQueue(), o("WAGetMediaRoute").getCachedOrFreshMediaAccess().catch(function(e) {
				C.catching(r("getErrorSafe")(e)).MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Error prewarming media routes"])));
			}), o("WAWaitForUserUnblocked").markOfflineQueueAsStarted(), o("MAWSharedOfflineQueueMetric").makeOfflineQueueMetric(E.oneQueue, o("WAPassiveMode").passiveModeNotifier, o("WAMessageLoggingPublisher").messageLoggingPublisher), o("MawMpsCop").mpsCop().subscribeToOfflineQueue(E.oneQueue), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToMawEvents(o("MawMpsCop").mpsCop()), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToWAEvents(E.oneQueue), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.subscribeToMessageEvents(o("WAMessageLoggingPublisher").messageLoggingPublisher), o("BackendInitLoggingUtils").MAWInitPoint("backend_cop_ready"), r("promiseDone")(o("MAWRemovePendingSendMsgs").removePendingSendMessages()), r("promiseDone")(o("MAWWarmInMemoryParticipantStore").warmInMemoryParticipantStoreFromRecentThreads()), o("MAWBackendCleaners").setupCleaners(), o("MAWDefinePersistedJob").setMsgrJobImplementations(o("MAWJobHandlers").getJobHandlers()), o("WAMockServerShell").isMockServerMode || r("promiseDone")(o("WAWaitForComms").waitForComms().then(function() {
				return o("MAWTaskDefinitions").registerTasks(o("WAWaitForUserUnblocked").waitForUserUnblocked());
			})), r("promiseDone")(g.load().then(function(e) {
				var t = e.createWorkerNetworkExecute;
				t(), o("MAWBackendReceiverFetchPrefetchExperiment").isMawBackendReceiverFetchPrefetchEnabled() && r("promiseDone")(b().catch(function(e) {
					C.catching(r("getErrorSafe")(e)).warn("Failed to prewarm MPS receiver fetch ACS token caches");
				}));
			})), o("MAWRegisterBridgeHandlers").registerBridgeHandlers(a, i, function() {
				return v;
			}), o("MAWReliabilityMonitor").MAWReliabilityMonitorSingleton.onAggregatedReportChange(function(e) {
				a.setAckPayload(e.toAckPayloadFormat());
			}), r("promiseDone")(o("MAWFTSDataSync").initFTS().then(function(e) {
				o("BackendInitLoggingUtils").MAWInitPoint(e ? "backend_search_ready" : "backend_search_failed");
			})), r("promiseDone")(o("MAWDBMigration").startMigration()), y && y != null && h && h != null && r("promiseDone")((f || (f = n("Promise"))).all([h.load(), y.load()]).then(function(e) {
				var t = e[0].getAllDebugFunctions, n = e[1].initDebugFunctions;
				n(t());
			}));
			var k = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						o("BackendInitLoggingUtils").MAWInitPoint("backend_comms_start"), yield E.startComms(), C.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Worker inited"]))), R(o("MAWReliabilityMonitor").HealthReportState.OK), o("BackendInitLoggingUtils").MAWMICPoint("backend_setup_end"), o("BackendInitLoggingUtils").MAWInitPoint("backend_comms_end");
					} catch (n) {
						var e, t;
						throw R(o("MAWReliabilityMonitor").HealthReportState.ERROR), C.catching(r("getErrorSafe")(n)).mustfixThrow("Failed to init comms - errorType: %s", (e = (t = r("getErrorSafe")(n)) == null ? void 0 : t.name) != null ? e : "UnknownError");
					}
				});
				return function() {
					return e.apply(this, arguments);
				};
			})(), I = o("EBMinosCheckWasmFeatureSupport").getWasmFeatureSupport();
			return I && (o("EBWorkerEBDBApiDeferred").startListeningEBDeviceRegistrations(), o("MAWForwardEBLSEbEnabledStateChangesToMainThread").listenForEBLSEbEnabledStateChangesAndSendToMainThread(), o("MAWPreloadEBMetadataCache").preloadEBMetadataCacheAfterEbEnabled()), o("MAWStateManagerSyncToMainThread").subscribeAndSyncStateManagerValuesToMainThread(), o("MAWPreloadEBMetadataCache").preloadEBMetadataCacheForVisibility(), o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && (yield o("MAWInMemoryThreadStore").preloadWormPartialThreads().catch(function(e) {
				C.catching(r("getErrorSafe")(e)).MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["unexpected error pulling threads data from WORM DB"])));
			})), o("WmiMediaServiceDownloadQueueScheduler").subscribeToDownloadQueueUpdates(), k().then(function() {
				I && (o("EncryptedBackupsUploadQueueV3Scheduler").subscribeToUploadQueueUpdates(), r("gkx")("11214") && o("EBSenderUploadQueueOperations").listenForEbUploadQueueFlush());
			});
		}), I.apply(this, arguments);
	}
	function T() {
		return D.apply(this, arguments);
	}
	function D() {
		return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAGetClockSkewApi").getClockSkew(), t = e.clockSkew;
			C.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["MAWBackend; sync clock skew with UI, clockSkew: ", " "])), t), o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
				tag: "ClockSkewUpdated",
				value: t
			}] });
		}), D.apply(this, arguments);
	}
	l.getWaComms = E, l.startMAWBackend = k;
}), 98);
