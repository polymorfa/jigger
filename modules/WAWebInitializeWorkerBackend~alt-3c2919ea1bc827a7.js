__d("WAWebInitializeWorkerBackend", [
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
	"WAWebWorkerResumeManager"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	function c(e) {
		return Promise.resolve(o("WAGzip").inflate(e));
	}
	function d(t) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["comms change: ", ""])), t), t === "connected" && (o("WAComms").startHandlingRequests(), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logSocketConnect(), o("WAWebWorkerClientPayload").incrementSuccessfulLoginCounter());
	}
	function m(e) {
		o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["comms optimistic change: ", ""])), e);
	}
	async function p() {
		o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(o("WAWebBackendEventBus").BackendEventBus), o("WAWebHistorySyncProgress").initHistorySyncProgressListeners(), o("WAWebCrashlog").registerCrashlogUploadIsUserInExternalBetaFunction(o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb), await o("WAWebGlobalsInitialize").initializeGlobals(), o("WAWebABPropsCache").initializeABPropsCache(), o("WACryptoLibraryConfig").setCryptoLibraryConfig({
			signalFutureMessagesMax: o("WAWebABProps").getABPropConfigValue("web_signal_future_messages_max"),
			S508658AutoAcknowledgeStaleSessions: !0,
			isPqKeysUploadEnabled: o("WAWebPQGatingUtils").isPqKeysUploadEnabled(),
			isPq1on1MessageEnabled: o("WAWebPQGatingUtils").isPq1on1MessageEnabled(),
			loadPqKeysForDigest: o("WAWebKyberPreKeyStore").loadKyberKeysForDigest
		}), o("WAWebEventSamplingCache").initializeEventSamplingCache(), o("WAWebInitWaitForEvents").initOfflineResumeWaitForEvents(), await Promise.all([o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(), o("WAWebApiContact").warmUpAllLidPnMappings()]), await o("WAWebEventSamplingCache").updateEventSamplingFromStorage(), await o("WAWebSignalProtocolStore").enableMemSignalStore(), await o("WAWebInitChatThreadLogging").initChatThreadLogging();
		var e = o("WAWebBridgeInitialization").makeBridge();
		o("WAWebBackendApi").setApi(e), o("WAWebWorkerHeadlessApi").attachHeadlessHandlers(e);
		var t = await o("WAWebUserPrefsGeneral").getLastMobilePlatform();
		if (t == null) return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[worker] platform not found in UserPrefs."]))), o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.UnknownCompanion);
		o("WAWebCrashlog").registerCrashlogUploadInformationalLoggingFunction(function() {
			return { platform: t };
		}), o("WAWebMobilePlatforms").setMobilePlatform(t), await o("WAWebPersistedJobManager").startWebPersistedJobManager(), o("WAWebPersistedJobManagerWorkerCompatible").setInstance(o("WAWebPersistedJobManager").getJobManager()), o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").setInstance(o("WAWebMessageInsertDebugPlaceholder").maybeInsertDebugPlaceholder), o("WAWebOfflineHandler").OfflineMessageHandler.initState({ getBlockingStageManager: function() {
			return new (o("WAWebWorkerResumeManager")).OfflineWorkerResumeStageManager();
		} });
		var n = await o("WAWebWorkerChatSocketPlatformDetails").getChatSocketPlatformDetails(), a = {
			healthCheckInterval: 20,
			deadSocketTime: 2e4,
			maxSocketLoopWaitTime: 6e4,
			openChatSocket: function(t) {
				return o("WAOpenChatSocket").openChatSocket(n, t);
			},
			shouldCloseStaleSocket: !0,
			shouldBlockReceivingUntilSuccess: !0,
			handlers: {
				onConnectionChange: d,
				onOptimisticConnectionChange: m
			},
			maxRetries: Number.MAX_SAFE_INTEGER
		};
		o("WAWebGetMessageCache").setMessageCache(o("WAWebMessageProcessorCache").messageProcessorCache), o("WAWebSyncdOrphanWorkerCompatible").setInstance(function() {
			return Promise.resolve();
		}), o("WAWebIdentityChangeApiWorkerCompatible").setInstance({
			handleNewIdentity: o("WAWebIdentityChangeApi").handleNewIdentityImpl,
			clearDeviceRecordForIdentityChange: o("WAWebIdentityChangeApi").clearDeviceRecordForIdentityChangeImpl
		}), o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").setInstance(o("WAWebOfflineResumeMsgProcessReporter").msgProcessReporter), o("WAWebWamLoginMetricUtils").markLoginStartT(), o("WAComms").startComms(r("WAWebWorkerHandleStanza"), a, c);
	}
	l.startBackendWorker = p;
}), 98);
