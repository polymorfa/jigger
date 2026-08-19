__d("WAWebInitializeWorkerBackend", [
	"Promise",
	"WAComms",
	"WACryptoLibraryConfig",
	"WAGzip",
	"WALogger",
	"WAOpenChatSocket",
	"WAWebABProps",
	"WAWebABPropsCache",
	"WAWebABPropsUpdateFromStorage",
	"WAWebApiContact",
	"WAWebBackendApi",
	"WAWebBackendEventBus",
	"WAWebBackendEventBusWorkerCompatible",
	"WAWebBridgeInitialization",
	"WAWebCrashlog",
	"WAWebEventSamplingCache",
	"WAWebGetMessageCache",
	"WAWebGlobalsInitialize",
	"WAWebHistorySyncProgress",
	"WAWebIdentityChangeApi",
	"WAWebIdentityChangeApiWorkerCompatible",
	"WAWebInitChatThreadLogging",
	"WAWebInitWaitForEvents",
	"WAWebKyberPreKeyStore",
	"WAWebLogoutReasonConstants",
	"WAWebMessageInsertDebugPlaceholder",
	"WAWebMessageInsertDebugPlaceholderWorkerCompatible",
	"WAWebMessageProcessorCache",
	"WAWebMobilePlatforms",
	"WAWebOfflineHandler",
	"WAWebOfflineResumeMsgProcessReporter",
	"WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
	"WAWebPQGatingUtils",
	"WAWebPersistedJobManager",
	"WAWebPersistedJobManagerWorkerCompatible",
	"WAWebSignalProtocolStore",
	"WAWebSocketLogoutJob",
	"WAWebSyncdOrphanWorkerCompatible",
	"WAWebUserPrefsGeneral",
	"WAWebWamLoginMetricUtils",
	"WAWebWamWorkerOfflineProcessReporter",
	"WAWebWorkerChatSocketPlatformDetails",
	"WAWebWorkerClientPayload",
	"WAWebWorkerHandleStanza",
	"WAWebWorkerHeadlessApi",
	"WAWebWorkerResumeManager",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c;
	function d(e) {
		return (c || (c = n("Promise"))).resolve(o("WAGzip").inflate(e));
	}
	function m(t) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["comms change: ", ""])), t), t === "connected" && (o("WAComms").startHandlingRequests(), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logSocketConnect(), o("WAWebWorkerClientPayload").incrementSuccessfulLoginCounter());
	}
	function p(e) {
		o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["comms optimistic change: ", ""])), e);
	}
	function _() {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(o("WAWebBackendEventBus").BackendEventBus), o("WAWebHistorySyncProgress").initHistorySyncProgressListeners(), o("WAWebCrashlog").registerCrashlogUploadIsUserInExternalBetaFunction(o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb), yield o("WAWebGlobalsInitialize").initializeGlobals(), o("WAWebABPropsCache").initializeABPropsCache(), o("WACryptoLibraryConfig").setCryptoLibraryConfig({
				signalFutureMessagesMax: o("WAWebABProps").getABPropConfigValue("web_signal_future_messages_max"),
				S508658AutoAcknowledgeStaleSessions: !0,
				isPqKeysUploadEnabled: o("WAWebPQGatingUtils").isPqKeysUploadEnabled(),
				isPq1on1MessageEnabled: o("WAWebPQGatingUtils").isPq1on1MessageEnabled(),
				loadPqKeysForDigest: o("WAWebKyberPreKeyStore").loadKyberKeysForDigest
			}), o("WAWebEventSamplingCache").initializeEventSamplingCache(), o("WAWebInitWaitForEvents").initOfflineResumeWaitForEvents(), yield (c || (c = n("Promise"))).all([o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(), o("WAWebApiContact").warmUpAllLidPnMappings()]), yield o("WAWebEventSamplingCache").updateEventSamplingFromStorage(), yield o("WAWebSignalProtocolStore").enableMemSignalStore(), yield o("WAWebInitChatThreadLogging").initChatThreadLogging();
			var e = o("WAWebBridgeInitialization").makeBridge();
			o("WAWebBackendApi").setApi(e), o("WAWebWorkerHeadlessApi").attachHeadlessHandlers(e);
			var t = yield o("WAWebUserPrefsGeneral").getLastMobilePlatform();
			if (t == null) return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[worker] platform not found in UserPrefs."]))), o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.UnknownCompanion);
			o("WAWebCrashlog").registerCrashlogUploadInformationalLoggingFunction(function() {
				return { platform: t };
			}), o("WAWebMobilePlatforms").setMobilePlatform(t), yield o("WAWebPersistedJobManager").startWebPersistedJobManager(), o("WAWebPersistedJobManagerWorkerCompatible").setInstance(o("WAWebPersistedJobManager").getJobManager()), o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").setInstance(o("WAWebMessageInsertDebugPlaceholder").maybeInsertDebugPlaceholder), o("WAWebOfflineHandler").OfflineMessageHandler.initState({ getBlockingStageManager: function() {
				return new (o("WAWebWorkerResumeManager")).OfflineWorkerResumeStageManager();
			} });
			var a = yield o("WAWebWorkerChatSocketPlatformDetails").getChatSocketPlatformDetails(), i = {
				healthCheckInterval: 20,
				deadSocketTime: 2e4,
				maxSocketLoopWaitTime: 6e4,
				openChatSocket: function(t) {
					return o("WAOpenChatSocket").openChatSocket(a, t);
				},
				shouldCloseStaleSocket: !0,
				shouldBlockReceivingUntilSuccess: !0,
				handlers: {
					onConnectionChange: m,
					onOptimisticConnectionChange: p
				},
				maxRetries: Number.MAX_SAFE_INTEGER
			};
			o("WAWebGetMessageCache").setMessageCache(o("WAWebMessageProcessorCache").messageProcessorCache), o("WAWebSyncdOrphanWorkerCompatible").setInstance(function() {
				return (c || (c = n("Promise"))).resolve();
			}), o("WAWebIdentityChangeApiWorkerCompatible").setInstance({
				handleNewIdentity: o("WAWebIdentityChangeApi").handleNewIdentityImpl,
				clearDeviceRecordForIdentityChange: o("WAWebIdentityChangeApi").clearDeviceRecordForIdentityChangeImpl
			}), o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").setInstance(o("WAWebOfflineResumeMsgProcessReporter").msgProcessReporter), o("WAWebWamLoginMetricUtils").markLoginStartT(), o("WAComms").startComms(r("WAWebWorkerHandleStanza"), i, d);
		}), f.apply(this, arguments);
	}
	l.startBackendWorker = _;
}), 98);
