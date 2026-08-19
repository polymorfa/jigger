__d("MAWCommonMainWebWorker", [
	"BackendInitLoggingUtils",
	"BrowserLockManager",
	"EBIsEbEnabled",
	"EBIsEbEnabledSubscriber",
	"EBLS",
	"EBStateConsistencyMonitor",
	"FBLogger",
	"IGDWebUtils",
	"MAWBackendBridgeSetup",
	"MAWBridge",
	"MAWCompareWorkerSetupArgs",
	"MAWDataSyncQueue",
	"MAWDeleteOldLogsFromDisk",
	"MAWDeviceRegistrationInitWorker",
	"MAWEBLSInWorkerSwitch",
	"MAWGetDbVersion",
	"MAWLoggingSwitches",
	"MAWQplProxy",
	"MAWRotateDTSG",
	"MAWSetupAllDatabases",
	"MAWSetupWorkerMsg",
	"MAWVaultMaterials",
	"MAWWebWorkerLogger",
	"MAWWorkerEBDeps",
	"MAWWorkerSetupArgs",
	"MessengerInfraQplReportInWorker",
	"QPLFlow",
	"Random",
	"WACrossWorkerPortal",
	"WADevToolsBridge",
	"WALogger",
	"getSafeQplErrorMessage",
	"gkx",
	"justknobx",
	"pageID",
	"promiseDone",
	"qpl",
	"registerMAWExecutionContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("justknobx")._("1495"), c, d, m = !1;
	o("BackendInitLoggingUtils").initializeBackendLogging();
	function p(t) {
		if (m) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Worker should not run initWorker() more than once."])));
			return;
		}
		var n = t.currentWorker, a = o("MAWBackendBridgeSetup").initWorkerBridge(n);
		o("MessengerInfraQplReportInWorker").initializeWorkerLogger(), b(n), n.addMessageListener("worker-setup", async function(e) {
			await _(e, t, a);
		}), o("MAWWorkerEBDeps").initEBDeps(), d = r("BrowserLockManager") != null && !u ? v() : null, n.addMessageListener("force-flush-data", function() {
			self.dispatchEvent(new CustomEvent("force-flush-logs")), r("promiseDone")(o("MAWDataSyncQueue").forceFlushDataSyncQueue());
		}), n.addMessageListener("force-flush-logs-only", function() {
			self.dispatchEvent(new CustomEvent("force-flush-logs"));
		}), m = !0;
	}
	async function _(e, t, n) {
		var a = t.config, i = t.currentWorker, l = new (o("MAWSetupWorkerMsg")).WorkerSetupComms(e.setupHash, i);
		l.postAck(), o("MAWQplProxy").resolveWorkerBridge();
		var s = o("MAWWorkerSetupArgs").getWorkerSetupArgs();
		try {
			s == null ? await f(e, t, n, l) : await g(s, e, a, l);
		} catch (e) {
			throw r("gkx")("23986") && r("promiseDone")(o("MAWWebWorkerLogger").flushLogs()), l.postFailure(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e)), e;
		}
	}
	async function f(e, t, n, a) {
		var i;
		if (!n.success) {
			var l, s;
			a.postFailure((l = (s = n.payload) == null ? void 0 : s.message) != null ? l : "bridge_setup_fail");
			return;
		}
		var u = t.config, m = t.initBackend, p = t.makeLowLevelApi;
		o("MAWWorkerSetupArgs").setWorkerSetupArgs(e.content), a.postBackendState("starting_new_setup"), h(e.content.vaultMaterials, a), o("MAWGetDbVersion").setArmadilloDbVersionForTest(e.content.testDbVersion), d = d != null ? d : v(), c = d.then(function(e) {
			var t = e.hmacKey, n = e.regData;
			return m(n, t, o("MAWBridge").getBridge(), p(n.regInfo), u);
		}), o("MAWLoggingSwitches").removeLoggingFromBridge && o("MAWDeleteOldLogsFromDisk").deleteOldLogsOnStartup(), y(e.content.devToolMessageChannelPort2);
		var _;
		if (((i = o("MAWWorkerSetupArgs").getWorkerSetupArgs()) == null ? void 0 : i.ebState) != null && S()) {
			var f;
			_ = o("QPLFlow").startQPLFlow(r("qpl")._(521478131, "1562"), { annotations: {
				bool: { main_thread_state: (f = o("MAWWorkerSetupArgs").getWorkerSetupArgs()) == null ? void 0 : f.ebState },
				string: { source: "worker_startup" }
			} });
		}
		o("EBLS").init().then(async function(e) {
			if (_ != null) {
				var t, n = await o("EBIsEbEnabled").isEbEnabledLS(e.db.tables), a = r("MAWEBLSInWorkerSwitch").isEnabled();
				_.addAnnotations({ bool: {
					worker_state: n,
					worker_switch_state: a
				} }), ((t = o("MAWWorkerSetupArgs").getWorkerSetupArgs()) == null ? void 0 : t.ebState) === n ? _.endSuccess() : _.endFail("inconsistent_state");
			}
			o("EBIsEbEnabledSubscriber").initIsEbEnabledPubSub(e.db), o("EBStateConsistencyMonitor").startEBStateConsistencyMonitoring();
		}).catch(function() {
			o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25310776, "6155"), "ebls_init_failed");
		}), await c, r("registerMAWExecutionContext")(), a.postSuccess();
	}
	async function g(e, t, n, a) {
		if (!n.isSharedWorkerContext()) throw r("FBLogger")("messenger_web").mustfixThrow("only shared workers can perform re-init!");
		var i = o("MAWCompareWorkerSetupArgs").didWorkerSetupArgsChange(e, t.content);
		if (i.hasArgsChanged) {
			if (a.postRebootRequired(i.reason), n.isSharedWorkerContext()) {
				var l = "update-required-" + i.reason;
				o("MAWSetupWorkerMsg").shutdownSharedWorker(l);
			} else self.close();
			return;
		}
		c == null && a.postFailure("No setup happened"), a.postBackendState("setup_ongoing"), await c, a.postNoActionRequired();
	}
	function h(e, t) {
		if (r("gkx")("23909")) {
			if (e == null || e.encryptionKey == null || e.prefixAndSuffix == null) throw t.postFailure("null_vault_materials"), r("FBLogger")("messenger_web").mustfixThrow("Vault materials was null in worker setup");
			o("MAWVaultMaterials").initializeVaultMaterials(e);
		} else o("IGDWebUtils").isOnInstagramWeb() || r("FBLogger")("messenger_web").mustfix("[Vaulting] Vaulting GK disabled on worker init");
	}
	function y(e) {
		if (r("gkx")("3282")) if (e == null) o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Missing DevTool port. Not able to setup DevTool"])));
		else {
			var t = o("WACrossWorkerPortal").attachPortal(o("WADevToolsBridge").getDevToolBridge(), ["devtool", "mawDbDevTool"], function(e, t) {
				return e.push(t), e;
			}, r("pageID"));
			t.setPort(e);
		}
	}
	function C(e, t) {
		c = e, m = t;
	}
	function b(e) {
		e.postMessage({
			status: "worker-ready",
			type: "worker-setup"
		});
	}
	async function v() {
		return r("promiseDone")(o("MAWRotateDTSG").tryRotateDTSG()), await o("MAWSetupAllDatabases").setupAllDatabases(), o("BackendInitLoggingUtils").MAWMICPoint("backend_db_ready"), o("MAWDeviceRegistrationInitWorker").registerDevice().then(function(e) {
			return o("BackendInitLoggingUtils").MAWMICPoint("backend_device_ready"), e;
		});
	}
	function S() {
		return o("Random").random() < r("justknobx")._("3951") / 100;
	}
	l.initWorker = p, l.presetBackend_TEST_ONLY = C;
}), 98);
