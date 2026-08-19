__d("MAWEBInitRestoreLogging", ["MAWDebugInfoDb", "WATimeUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		restoredInSession: !1,
		restoreMethod: null,
		restoreTimeMs: null
	};
	async function s(t) {
		var n = t.method;
		e.restoredInSession = !0;
		var r = o("WATimeUtils").millisTime();
		e.restoreMethod = n, e.restoreTimeMs = r;
		var a = await o("MAWDebugInfoDb").getMAWDebugInfoDb();
		await a.runInTransaction(["initRestore"], "readwrite", async function(e) {
			await e.stores.initRestore.bulkPut([{
				data: {
					restoreMethod: n,
					restoreTimeMs: r
				},
				key: "initRestoreDebugInfo"
			}]);
		}, "logInitRestoreMethodForDebugging");
	}
	async function u() {
		var t = await c();
		return babelHelpers.extends({}, e, t);
	}
	async function c() {
		var e = await o("MAWDebugInfoDb").getMAWDebugInfoDb(), t = await e.runInTransaction(["initRestore"], "readonly", function(e) {
			return e.stores.initRestore.get("initRestoreDebugInfo");
		}, "getInitRestoreDebugInfo");
		return t == null ? {} : babelHelpers.extends({}, t.data);
	}
	l.logInitRestoreMethodForDebugging = s, l.getInitRestoreDebugInfo = u;
}), 98);
