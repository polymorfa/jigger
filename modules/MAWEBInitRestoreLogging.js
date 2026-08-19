__d("MAWEBInitRestoreLogging", [
	"MAWDebugInfoDb",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		restoredInSession: !1,
		restoreMethod: null,
		restoreTimeMs: null
	};
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = t.method;
			e.restoredInSession = !0;
			var a = o("WATimeUtils").millisTime();
			e.restoreMethod = r, e.restoreTimeMs = a;
			var i = yield o("MAWDebugInfoDb").getMAWDebugInfoDb();
			yield i.runInTransaction(["initRestore"], "readwrite", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield e.stores.initRestore.bulkPut([{
						data: {
							restoreMethod: r,
							restoreTimeMs: a
						},
						key: "initRestoreDebugInfo"
					}]);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "logInitRestoreMethodForDebugging");
		}), u.apply(this, arguments);
	}
	function c() {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield m();
			return babelHelpers.extends({}, e, t);
		}), d.apply(this, arguments);
	}
	function m() {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("MAWDebugInfoDb").getMAWDebugInfoDb(), t = yield e.runInTransaction(["initRestore"], "readonly", function(e) {
				return e.stores.initRestore.get("initRestoreDebugInfo");
			}, "getInitRestoreDebugInfo");
			return t == null ? {} : babelHelpers.extends({}, t.data);
		}), p.apply(this, arguments);
	}
	l.logInitRestoreMethodForDebugging = s, l.getInitRestoreDebugInfo = c;
}), 98);
