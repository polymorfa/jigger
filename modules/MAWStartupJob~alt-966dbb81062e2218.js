__d("MAWStartupJob", [
	"MAWDeleteDanglingParticipantsStartupJob",
	"MAWQplProxy",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [r("MAWDeleteDanglingParticipantsStartupJob")];
	async function s() {
		o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25310776, "6155"), "backend_startup_jobs"), await Promise.all(e.map(function(e) {
			return e.run();
		}));
	}
	l.runMAWStartupJobs = s;
}), 98);
