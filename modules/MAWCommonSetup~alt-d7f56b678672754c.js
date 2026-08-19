__d("MAWCommonSetup", [
	"EBInitializeMinosDb",
	"EBLogger",
	"EBMainThreadEBDBApiDeferred",
	"EBMainThreadListeners",
	"EBMinosCheckWasmFeatureSupport",
	"ExecutionEnvironment",
	"MAWBridgeFireAndForget",
	"MAWCacheServiceDB",
	"MAWCommonBackendSetup",
	"MAWCurrentUser",
	"MAWEncryptedBackupsStateManager",
	"MAWIndexedDbMetadata",
	"MAWInit",
	"MAWInitError",
	"MAWIsIDBOperational",
	"MAWIssueNewUserVisibleErrors",
	"MAWLoggerUtils",
	"MAWMIC",
	"MAWSetupBridgeOfflineConsumer",
	"MAWWaitForBackendSetup",
	"MessengerWebInitData",
	"MpsReverbInit",
	"WABridge",
	"WADynamicRouterSync",
	"WALogger",
	"cr:13007",
	"getErrorSafe",
	"isAppsSubdomain",
	"justknobx",
	"performance",
	"promiseDone",
	"qpl",
	"react",
	"requireDeferred",
	"useMWEncryptedBackupsProcessBackupIdsDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (c || (c = o("react"))).useEffect, m = r("requireDeferred")("FBLogger").__setRef("MAWCommonSetup"), p = n("cr:13007") == null ? void 0 : n("cr:13007").MAWInitialiseMAWDbInUI;
	r("requireDeferred")("MAWTimedJob").__setRef("MAWCommonSetup");
	var _ = !1, f = function() {
		return (s || (s = r("performance"))).now();
	}, g = function(t) {
		o("MAWEncryptedBackupsStateManager").setEncryptedBackupsState(t), o("MAWBridgeFireAndForget").fireAndForget("backend", "setEncryptedBackupsState", { newState: t });
	};
	function h() {
		o("MAWBridgeFireAndForget").fireAndForget("backend", "resendEBLSInWorkerEbEnabledState");
	}
	function y() {
		o("MAWBridgeFireAndForget").fireAndForget("backend", "resendWorkerStateManagerValuesToMainThread");
	}
	function C() {
		h(), y();
	}
	function b(e) {
		o("MAWLoggerUtils").initMessengerWebLogging();
		var t = o("MAWIsIDBOperational").useIsIDBOperational();
		d(function() {
			t && (u || (u = r("ExecutionEnvironment"))).isInBrowser && r("promiseDone")(v(e));
		}, [e, t]), d(function() {
			t && r("promiseDone")(o("EBMainThreadListeners").initEBListeners());
		}, [t]), r("useMWEncryptedBackupsProcessBackupIdsDeferred")(g), r("justknobx")._("4966") === !1 && C();
	}
	async function v(t) {
		var n = t.logout, a = t.reregisterDevice, i = t.rotateCryptoAuthToken, l = t.setupBridge;
		if (_) {
			m.load().then(function(e) {
				e("messenger_web").warn("Armadillo already setup - return");
			});
			return;
		}
		if (r("isAppsSubdomain")()) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Armadillo is disabled on apps subdomain"])));
			return;
		}
		_ = !0, o("MAWMIC").startMAWMICFlow(), o("MAWInit").MAWInit.start(), (u || (u = r("ExecutionEnvironment"))).isInBrowser && (await o("MpsReverbInit").initReverb({
			blockingErrorThreshold: r("justknobx")._("3218"),
			name: o("MAWIndexedDbMetadata").webReverDbbName(o("MAWCurrentUser").getID()),
			onBlockingError: function() {},
			qplEvent: r("qpl")._(1056840657, "2716"),
			strEncKey: r("MessengerWebInitData").accountKeyV2
		}), await o("MAWCacheServiceDB").getOrSetupMAWCacheDB(), p != null && r("promiseDone")(p(), function() {}, function(e) {
			return m.load().then(function(t) {
				return t("messenger_web").catching(e).mustfix("UI Dexie initialisation failed: %s", e.message);
			});
		})), o("WABridge").makeWABridge(new (o("WADynamicRouterSync")).DynamicRouterSync());
		try {
			o("MAWIssueNewUserVisibleErrors").deleteAllErrors(), await o("MAWCommonBackendSetup").setupArmadilloBackend(o("MAWInit").MAWInit, function(e) {
				return l({
					logout: n,
					reregisterDevice: a,
					rotateCryptoAuthToken: i,
					worker: e
				});
			}, function() {
				o("MAWSetupBridgeOfflineConsumer").processOfflineQueue({
					tag: "InitOfflineQueueSyncComplete",
					value: void 0
				}), r("justknobx")._("4966") === !0 && C(), o("MAWMIC").onConnectToExistingWorker();
			}, function() {
				o("MAWSetupBridgeOfflineConsumer").processOfflineQueue({
					tag: "InitOfflineQueueSyncComplete",
					value: void 0
				});
			}, "mawInit", function(e) {}), o("MAWInit").MAWInit.addIntAnnotation("endTimePageRelative", f()), o("MAWInit").MAWInit.endSuccess();
		} catch (e) {
			var s, c = r("getErrorSafe")(e), d = c instanceof o("MAWInitError").MAWInitError ? c.message : "maw_init_failure";
			c.message = (s = c.message) != null ? s : "Unknown";
			var g = c.message === "maw_appmutex_no_permission" && document.visibilityState !== "visible";
			throw g ? o("MAWInit").MAWInit.cancel(d, c) : (o("MAWWaitForBackendSetup").rejectBackendSetup(c), o("MAWInit").MAWInit.fail(d, c)), o("MAWIssueNewUserVisibleErrors").issueError(o("MAWIssueNewUserVisibleErrors").MAWGeneralErrorMsgBody, o("MAWIssueNewUserVisibleErrors").MAWGeneralErrorMsgTitle, o("MAWIssueNewUserVisibleErrors").MAWUserVisibleErrorPresentationType.BANNER, c.message), c && m.load().then(function(e) {
				e("messenger_web").catching(c).mustfix("MAW backend setup failed -- %s", c.message);
			}), c;
		}
		var h = await o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupportAndEBInitJK();
		h ? o("EBMainThreadEBDBApiDeferred").startListeningDeviceRegistrations() : o("EBLogger").EBLogger().warn("startListeningDeviceRegistrations: WASM not supported, skipping");
		var y = await o("EBMinosCheckWasmFeatureSupport").checkWasmAndMinosRolloutKeyCreateGK();
		y && o("EBInitializeMinosDb").initializeMinosDb();
	}
	l.useArmadillo = b;
}), 98);
