__d("MAWClearSignalAndTempStores", [
	"MAWDeleteOldLogsFromDisk",
	"MAWInMemoryGroupInfoStore",
	"MAWInMemoryParticipantStore",
	"MAWJobActionsV2",
	"MAWJobsIndexedDb",
	"MAWLoggingSwitches",
	"MAWTransactionMode",
	"Promise",
	"WAClearSignalStores",
	"WAClearSignalStoresV2",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWJobsIndexedDb").makeJobsTransactor("jobs", o("MAWTransactionMode").READWRITE, "clearJob")(o("MAWJobActionsV2").clearJobs), u = function() {
		return o("MAWInMemoryGroupInfoStore").clearInMemoryGroupInfoStore(), o("MAWInMemoryParticipantStore").clearInMemoryParticipantStore(), (e || (e = n("Promise"))).all([
			o("MAWLoggingSwitches").removeLoggingFromBridge && o("MAWDeleteOldLogsFromDisk").clearLogs(),
			o("WAClearSignalStores").clearSignalStores(),
			s(),
			o("WAClearSignalStoresV2").clearSignalStores()
		]).then(r("emptyFunction"));
	};
	l.clearSignalAndTempStores = u;
}), 98);
