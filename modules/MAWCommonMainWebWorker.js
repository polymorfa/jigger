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
	"asyncToGeneratorRuntime",
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
		var a = t.currentWorker, i = o("MAWBackendBridgeSetup").initWorkerBridge(a);
		o("MessengerInfraQplReportInWorker").initializeWorkerLogger(), R(a), a.addMessageListener("worker-setup", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield _(e, t, i);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})()), o("MAWWorkerEBDeps").initEBDeps(), d = r("BrowserLockManager") != null && !u ? L() : null, a.addMessageListener("force-flush-data", function() {
			self.dispatchEvent(new CustomEvent("force-flush-logs")), r("promiseDone")(o("MAWDataSyncQueue").forceFlushDataSyncQueue());
		}), a.addMessageListener("force-flush-logs-only", function() {
			self.dispatchEvent(new CustomEvent("force-flush-logs"));
		}), m = !0;
	}
	function _(e, t, n) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a = t.config, i = t.currentWorker, l = new (o("MAWSetupWorkerMsg")).WorkerSetupComms(e.setupHash, i);
			l.postAck(), o("MAWQplProxy").resolveWorkerBridge();
			var s = o("MAWWorkerSetupArgs").getWorkerSetupArgs();
			try {
				s == null ? yield g(e, t, n, l) : yield y(s, e, a, l);
			} catch (e) {
				throw r("gkx")("23986") && r("promiseDone")(o("MAWWebWorkerLogger").flushLogs()), l.postFailure(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e)), e;
			}
		}), f.apply(this, arguments);
	}
	function g(e, t, n, r) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a, i) {
			var l;
			if (!a.success) {
				var s, u;
				i.postFailure((s = (u = a.payload) == null ? void 0 : u.message) != null ? s : "bridge_setup_fail");
				return;
			}
			var m = t.config, p = t.initBackend, _ = t.makeLowLevelApi;
			o("MAWWorkerSetupArgs").setWorkerSetupArgs(e.content), i.postBackendState("starting_new_setup"), b(e.content.vaultMaterials, i), o("MAWGetDbVersion").setArmadilloDbVersionForTest(e.content.testDbVersion), d = d != null ? d : L(), c = d.then(function(e) {
				var t = e.hmacKey, n = e.regData;
				return p(n, t, o("MAWBridge").getBridge(), _(n.regInfo), m);
			}), o("MAWLoggingSwitches").removeLoggingFromBridge && o("MAWDeleteOldLogsFromDisk").deleteOldLogsOnStartup(), v(e.content.devToolMessageChannelPort2);
			var f;
			if (((l = o("MAWWorkerSetupArgs").getWorkerSetupArgs()) == null ? void 0 : l.ebState) != null && k()) {
				var g;
				f = o("QPLFlow").startQPLFlow(r("qpl")._(521478131, "1562"), { annotations: {
					bool: { main_thread_state: (g = o("MAWWorkerSetupArgs").getWorkerSetupArgs()) == null ? void 0 : g.ebState },
					string: { source: "worker_startup" }
				} });
			}
			o("EBLS").init().then((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					if (f != null) {
						var t, n = yield o("EBIsEbEnabled").isEbEnabledLS(e.db.tables), a = r("MAWEBLSInWorkerSwitch").isEnabled();
						f.addAnnotations({ bool: {
							worker_state: n,
							worker_switch_state: a
						} }), ((t = o("MAWWorkerSetupArgs").getWorkerSetupArgs()) == null ? void 0 : t.ebState) === n ? f.endSuccess() : f.endFail("inconsistent_state");
					}
					o("EBIsEbEnabledSubscriber").initIsEbEnabledPubSub(e.db), o("EBStateConsistencyMonitor").startEBStateConsistencyMonitoring();
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()).catch(function() {
				o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25310776, "6155"), "ebls_init_failed");
			}), yield c, r("registerMAWExecutionContext")(), i.postSuccess();
		}), h.apply(this, arguments);
	}
	function y(e, t, n, r) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a) {
			if (!n.isSharedWorkerContext()) throw r("FBLogger")("messenger_web").mustfixThrow("only shared workers can perform re-init!");
			var i = o("MAWCompareWorkerSetupArgs").didWorkerSetupArgsChange(e, t.content);
			if (i.hasArgsChanged) {
				if (a.postRebootRequired(i.reason), n.isSharedWorkerContext()) {
					var l = "update-required-" + i.reason;
					o("MAWSetupWorkerMsg").shutdownSharedWorker(l);
				} else self.close();
				return;
			}
			c == null && a.postFailure("No setup happened"), a.postBackendState("setup_ongoing"), yield c, a.postNoActionRequired();
		}), C.apply(this, arguments);
	}
	function b(e, t) {
		if (r("gkx")("23909")) {
			if (e == null || e.encryptionKey == null || e.prefixAndSuffix == null) throw t.postFailure("null_vault_materials"), r("FBLogger")("messenger_web").mustfixThrow("Vault materials was null in worker setup");
			o("MAWVaultMaterials").initializeVaultMaterials(e);
		} else o("IGDWebUtils").isOnInstagramWeb() || r("FBLogger")("messenger_web").mustfix("[Vaulting] Vaulting GK disabled on worker init");
	}
	function v(e) {
		if (r("gkx")("3282")) if (e == null) o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Missing DevTool port. Not able to setup DevTool"])));
		else {
			var t = o("WACrossWorkerPortal").attachPortal(o("WADevToolsBridge").getDevToolBridge(), ["devtool", "mawDbDevTool"], function(e, t) {
				return e.push(t), e;
			}, r("pageID"));
			t.setPort(e);
		}
	}
	function S(e, t) {
		c = e, m = t;
	}
	function R(e) {
		e.postMessage({
			status: "worker-ready",
			type: "worker-setup"
		});
	}
	function L() {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			return r("promiseDone")(o("MAWRotateDTSG").tryRotateDTSG()), yield o("MAWSetupAllDatabases").setupAllDatabases(), o("BackendInitLoggingUtils").MAWMICPoint("backend_db_ready"), o("MAWDeviceRegistrationInitWorker").registerDevice().then(function(e) {
				return o("BackendInitLoggingUtils").MAWMICPoint("backend_device_ready"), e;
			});
		}), E.apply(this, arguments);
	}
	function k() {
		return o("Random").random() < r("justknobx")._("3951") / 100;
	}
	l.initWorker = p, l.presetBackend_TEST_ONLY = S;
}), 98);
