__d("MAWStartupComms", [
	"BackendInitLoggingUtils",
	"MAWBackendHandlers",
	"MAWReliabilityMonitor",
	"MAWStartupState",
	"MAWWAComms",
	"MWFBLogger",
	"WAServerRemoteProceduresHandlers",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MWFBLogger").MWLogger().tags(["backend"]);
	function s(e, t, n) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = o("WAServerRemoteProceduresHandlers").makeServerRemoteProcedureHandlers(o("MAWBackendHandlers").serverRpcHandlers), a = yield o("MAWWAComms").initWAService(e, t, n, r);
			return o("MAWStartupState").setStartupComms({
				startComms: a.startComms,
				stopComms: a.stopComms
			}), a;
		}), u.apply(this, arguments);
	}
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			try {
				o("BackendInitLoggingUtils").MAWInitPoint("backend_comms_start"), yield t.startComms(), o("MAWStartupState").setWorkerHealthState(o("MAWReliabilityMonitor").HealthReportState.OK), o("BackendInitLoggingUtils").MAWMICPoint("backend_setup_end"), o("BackendInitLoggingUtils").MAWInitPoint("backend_comms_end");
			} catch (t) {
				var n, a;
				throw o("MAWStartupState").setWorkerHealthState(o("MAWReliabilityMonitor").HealthReportState.ERROR), e.catching(r("getErrorSafe")(t)).mustfixThrow("Failed to init comms - errorType: %s", (n = (a = r("getErrorSafe")(t)) == null ? void 0 : a.name) != null ? n : "UnknownError");
			}
		}), d.apply(this, arguments);
	}
	l.initComms = s, l.startComms = c;
}), 98);
