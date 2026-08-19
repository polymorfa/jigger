__d("ReQLTable", ["asyncToGeneratorRuntime"], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e, t, n) {
		return l.apply(this, arguments);
	}
	function l() {
		return l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield e.get.apply(e, t), o = n(r);
			yield e.upsert(t, o);
		}), l.apply(this, arguments);
	}
	i.update = e;
}), 66);
