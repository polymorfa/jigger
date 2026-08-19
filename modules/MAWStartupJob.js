__d("MAWStartupJob", [
	"MAWDeleteDanglingParticipantsStartupJob",
	"MAWQplProxy",
	"Promise",
	"asyncToGeneratorRuntime",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = [r("MAWDeleteDanglingParticipantsStartupJob")];
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25310776, "6155"), "backend_startup_jobs"), yield (e || (e = n("Promise"))).all(s.map(function(e) {
				return e.run();
			}));
		}), c.apply(this, arguments);
	}
	l.runMAWStartupJobs = u;
}), 98);
