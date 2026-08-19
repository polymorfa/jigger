__d("MAWPostOfflineQueueCompleteActions", ["MAWMediaWorkerPoolExpander"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		o("MAWMediaWorkerPoolExpander").getWorkerInitPolicy("silent") === o("MAWMediaWorkerPoolExpander").WorkerInitPolicy.EAGER ? o("MAWMediaWorkerPoolExpander").expandAndPreparePool() : o("MAWMediaWorkerPoolExpander").prewarmPool();
	}
	l.runPostOfflineQueueCompleteActions = e;
}), 98);
