__d("BackendInitLoggingUtils", [
	"ErrorMetadata",
	"MAWCommonWebWorkerErrorLogging",
	"MAWLoggerUtils",
	"MAWQplProxy",
	"MAWWebWorkerLogger",
	"MWSetupDBEncryption",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t, n) {
		return o("MAWQplProxy").measurePerfInQPL_USE_WITH_CARE(r("qpl")._(25310776, "6155"), "backend_" + t, n);
	}, s = function(t) {
		return o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25310776, "6155"), t);
	}, u = function(t) {
		return o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(1056839232, "112"), t);
	};
	function c() {
		o("MAWWebWorkerLogger").setupWebWorkerWaLogger(), o("MAWCommonWebWorkerErrorLogging").init(), r("ErrorMetadata").addGlobalMetadata("MESSENGER_E2EE_WEB", "ENVIRONMENT", "worker"), o("MAWLoggerUtils").initMessengerWebLogging(), o("MWSetupDBEncryption").setPerformanceMeasurementTool(e);
	}
	l.measureMawInit = e, l.MAWInitPoint = s, l.MAWMICPoint = u, l.initializeBackendLogging = c;
}), 98);
