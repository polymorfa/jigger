__d("MAWMessageIntegrityDebugInfoFromWorker", [
	"MAWEBInitRestoreLogging",
	"Promise",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			return (e || (e = n("Promise"))).resolve({ initRestore: yield o("MAWEBInitRestoreLogging").getInitRestoreDebugInfo() });
		}), u.apply(this, arguments);
	}
	l.getWorkerBasedMessageIntegrityDebugInfo = s;
}), 98);
