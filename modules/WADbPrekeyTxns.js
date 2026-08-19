__d("WADbPrekeyTxns", [
	"WAGetPrekeyIdsInRange",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield e.prekeyGeneration.get(t);
			if (n == null) throw r("err")("Expected a prekey generation row");
			var a = o("WAGetPrekeyIdsInRange").getPrekeyIdsInRange(n.startingId, n.endingId), i = yield e.prekey.bulkGet(a);
			return i.filter(Boolean).map(function(e) {
				return e.encoded;
			});
		}), s.apply(this, arguments);
	}
	l.getPrekeysForGeneration = e;
}), 98);
