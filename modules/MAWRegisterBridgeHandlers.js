__d("MAWRegisterBridgeHandlers", [
	"BackendInitLoggingUtils",
	"EBBridgedAPIHandler",
	"EBLogger",
	"EBMinosBridgedAPIHandler",
	"EBSMBridgeHandlers",
	"KeyTransparencyBridgeHandlers",
	"MAWJobManager",
	"MAWMpsBridgeHandlers",
	"MAWQplProxy",
	"MAWReliabilityMonitor",
	"MWFBLogger",
	"Promise",
	"WAAPIBridgeHandlers",
	"WABridgedAPIHandler",
	"WAMockServerShell",
	"WAWaitForComms",
	"asyncToGeneratorRuntime",
	"err",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	function d(t, a, i) {
		t.setHandlers("kt", o("KeyTransparencyBridgeHandlers").keyTransparencyBridgeHandlers), t.setHandlers("mps", o("MAWMpsBridgeHandlers").mpsBridgeHandlers), t.setHandlers("waapi", o("WAAPIBridgeHandlers").waapiBridgeHandlers), t.setHandlers("ebsmapi", o("EBSMBridgeHandlers").ebsmapiBridgeHandlers), t.setHandlers("backend", babelHelpers.extends({}, a.bridgeHandlers, {
			ebapi: (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					yield o("WAWaitForComms").waitForComms();
					var n = o("EBBridgedAPIHandler").ebapi[t.type];
					return n == null && o("EBLogger").EBLogger().tags(["EBBridgedAPI"]).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handle with type ", " not found"])), t.type), n.apply(void 0, t.args);
				});
				function r(e) {
					return t.apply(this, arguments);
				}
				return r;
			})(),
			igdapi: function() {
				return (c || (c = n("Promise"))).resolve();
			},
			initMockServer: function(t) {
				return o("WAMockServerShell").getMockServer == null ? (c || (c = n("Promise"))).reject("Mock server is not available. Make sure you use worker v2") : o("WAMockServerShell").getMockServer().init(t);
			},
			minosEBAPI: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield o("WAWaitForComms").waitForComms();
					var t = o("EBMinosBridgedAPIHandler").minosEBAPI[e.type];
					return t == null && o("EBLogger").EBLogger().tags(["EBMinosBridgedAPI"]).MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["handle with type ", " not found"])), e.type), t.apply(void 0, e.args);
				});
				function t(t) {
					return e.apply(this, arguments);
				}
				return t;
			})(),
			runJobFireAndForget: function(t) {
				return o("WAWaitForComms").waitForComms().then(function() {
					return i() !== o("MAWReliabilityMonitor").HealthReportState.OK && o("MWFBLogger").MWLogger().tags(["backend"]).mustfix("Job %s: backend is not ready: %s", t.type, String(i())), o("MAWJobManager").getJobManager().fireAndForget(t);
				});
			},
			runJobWaitUntilCompleted: function(t) {
				var e, n, a = typeof t.args == "object" && typeof t.args.args == "object" && typeof ((e = t.args) == null || (e = e.args) == null ? void 0 : e.s2sInstanceKey) == "number" ? (n = t.args) == null || (n = n.args) == null ? void 0 : n.s2sInstanceKey : null;
				return a != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25313175, "1551"), "backend_reached", {
					annotations: { bool: { backendSetupReadyFromWorker: !o("WAWaitForComms").isStillWaitingForComms() } },
					instanceKey: a
				}), o("WAWaitForComms").waitForComms().then(function() {
					return i() !== o("MAWReliabilityMonitor").HealthReportState.OK && o("MWFBLogger").MWLogger().tags(["backend"]).mustfix("Job %s: backend is not ready: %s", t.type, String(i())), o("MAWJobManager").getJobManager().waitUntilCompleted(t);
				});
			},
			runJobWaitUntilPersisted: function(t) {
				return o("WAWaitForComms").waitForComms().then(function() {
					return i() !== o("MAWReliabilityMonitor").HealthReportState.OK && o("MWFBLogger").MWLogger().tags(["backend"]).mustfix("Job %s: backend is not ready: %s", t.type, String(i())), o("MAWJobManager").getJobManager().waitUntilPersisted(t);
				});
			},
			runMock: function(t) {
				return o("WAMockServerShell").getMockServer == null ? (c || (c = n("Promise"))).reject("Mock server is not available. Make sure you use worker v2") : o("WAMockServerShell").getMockServer().runMock(t);
			},
			setMockVariables: function(t) {
				if (o("WAMockServerShell").getMockServer == null) throw r("err")("Mock server is not available. Make sure you use worker v2");
				o("WAMockServerShell").getMockServer().setVariables(t.variables);
			},
			waapi: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield o("WAWaitForComms").waitForComms();
					var t = o("WABridgedAPIHandler").waapi[e.type];
					return t == null && o("MWFBLogger").MWLogger().tags(["backend"]).tags(["WABridgedAPI"]).MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["handle with type ", " not found"])), e.type), t.apply(void 0, e.args);
				});
				function t(t) {
					return e.apply(this, arguments);
				}
				return t;
			})()
		})), o("BackendInitLoggingUtils").MAWInitPoint("backend_bridge_ready");
	}
	l.registerBridgeHandlers = d;
}), 98);
