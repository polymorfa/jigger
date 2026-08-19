__d("WAGetUserDevices", ["asyncToGeneratorRuntime"], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e, t) {
		return l.apply(this, arguments);
	}
	function l() {
		return l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield t.storage.bulkLoadIdentities(e);
			return Array.from(n).flatMap(function(e) {
				var t = e[1];
				return Array.from(t.keys());
			});
		}), l.apply(this, arguments);
	}
	i.getUserDevices = e;
}), 66);
