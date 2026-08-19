__d("MAWStartupComms", [
	"BackendInitLoggingUtils",
	"MAWBackendHandlers",
	"MAWReliabilityMonitor",
	"MAWStartupState",
	"MAWWAComms",
	"MWFBLogger",
	"WAServerRemoteProceduresHandlers",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MWFBLogger").MWLogger().tags(["backend"]);
	async function s(e, t, n) {
		var r = o("WAServerRemoteProceduresHandlers").makeServerRemoteProcedureHandlers(o("MAWBackendHandlers").serverRpcHandlers), a = await o("MAWWAComms").initWAService(e, t, n, r);
		return o("MAWStartupState").setStartupComms({
			startComms: a.startComms,
			stopComms: a.stopComms
		}), a;
	}
	async function u(t) {
		try {
			o("BackendInitLoggingUtils").MAWInitPoint("backend_comms_start"), await t.startComms(), o("MAWStartupState").setWorkerHealthState(o("MAWReliabilityMonitor").HealthReportState.OK), o("BackendInitLoggingUtils").MAWMICPoint("backend_setup_end"), o("BackendInitLoggingUtils").MAWInitPoint("backend_comms_end");
		} catch (t) {
			var n, a;
			throw o("MAWStartupState").setWorkerHealthState(o("MAWReliabilityMonitor").HealthReportState.ERROR), e.catching(r("getErrorSafe")(t)).mustfixThrow("Failed to init comms - errorType: %s", (n = (a = r("getErrorSafe")(t)) == null ? void 0 : a.name) != null ? n : "UnknownError");
		}
	}
	l.initComms = s, l.startComms = u;
}), 98);
