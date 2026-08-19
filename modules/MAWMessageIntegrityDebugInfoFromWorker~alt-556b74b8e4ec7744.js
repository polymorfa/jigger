__d("MAWMessageIntegrityDebugInfoFromWorker", ["MAWEBInitRestoreLogging"], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		return Promise.resolve({ initRestore: await o("MAWEBInitRestoreLogging").getInitRestoreDebugInfo() });
	}
	l.getWorkerBasedMessageIntegrityDebugInfo = e;
}), 98);
