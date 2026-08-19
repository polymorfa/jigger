__d("WARequestKeys", [
	"WABulkRequestKeys",
	"WAPromiseManagement",
	"WARequestKeysBatcher",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("WARequestKeysBatcher").makeSimpleBatcher((function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("WABulkRequestKeys").bulkRequestKeys(e);
			return t.success === !1 ? e.map(function() {
				return t;
			}) : e.map(function(e) {
				var n = t.value.get(e);
				return n ? o("WAResultOrError").makeResult(n) : o("WAResultOrError").makeError("errRequestKeysNoKeys");
			});
		});
		return function(t) {
			return e.apply(this, arguments);
		};
	})()), s = o("WAPromiseManagement").cacheWhilePending(function(e) {
		return e;
	}, e);
	l.requestKeys = s;
}), 98);
