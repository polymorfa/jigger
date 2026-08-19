__d("useDataLossChecker", [
	"FBLogger",
	"I64",
	"LSDatabaseSingleton",
	"LSFactory",
	"LSScheduleOccamThreadsIntegrityCheckerStoredProcedure",
	"MWChatDataLossCheckerUtil",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx",
	"justknobx",
	"promiseDone",
	"react-compiler-runtime",
	"useDataLossStatisticsStorageListener",
	"useOnMawSetupComplete.react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u() {
		var e = o("react-compiler-runtime").c(2);
		o("useDataLossStatisticsStorageListener").useDataLossStatisticsStorageListener();
		var t, n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = p(), n = [], e[0] = t, e[1] = n) : (t = e[0], n = e[1]), o("useOnMawSetupComplete.react").useOnMawSetupComplete(c, t, n);
	}
	function c() {
		r("promiseDone")(d()), p();
	}
	function d() {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
			yield o("MWChatDataLossCheckerUtil").fetchCountsAndLogDataLoss(t);
		}), m.apply(this, arguments);
	}
	function p() {
		try {
			var t = r("gkx")("24061"), a = r("justknobx")._("1683");
			t && a && r("promiseDone")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = yield (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
				return t.runInTransaction(function(e) {
					return r("LSScheduleOccamThreadsIntegrityCheckerStoredProcedure")(r("LSFactory")(e), {
						delayMs: (s || (s = o("I64"))).of_int32(6e4),
						maxThreadCount: s.of_int32(20)
					});
				}, "readonly", void 0, void 0, i.id + ":62");
			})());
		} catch (e) {
			var l = r("getErrorSafe")(e);
			r("FBLogger")("wmi_eb").warn("Error running thread integrity checker", l.message);
		}
	}
	l.default = u;
}), 98);
