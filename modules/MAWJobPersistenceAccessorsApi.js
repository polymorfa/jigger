__d("MAWJobPersistenceAccessorsApi", [
	"MAWJobActionsV2",
	"MAWJobsIndexedDb",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e, t, n;
		return {
			deletePersistedJob: (e = o("MAWJobsIndexedDb")).makeJobsTransactor("jobs", (t = o("MAWTransactionMode")).READWRITE, "deletePersistedJob")((n = o("MAWJobActionsV2")).deletePersistedJob),
			loadAllJobs: e.makeJobsTransactor("jobs", t.READONLY, "loadAllJobs")(n.readAllPersistedJobs),
			maybeCreateJob: e.makeJobsTransactor("jobs", t.READWRITE, "maybeCreateJob")(n.maybeCreateJob),
			readPersistedJob: e.makeJobsTransactor("jobs", t.READONLY, "readPersistedJob")(n.readPersistedJob),
			updatePersistedJob: e.makeJobsTransactor("jobs", t.READWRITE, "updatePersistedJob")(n.updatePersistedJob)
		};
	}
	l.getJobPersistenceAccessors = e;
}), 98);
