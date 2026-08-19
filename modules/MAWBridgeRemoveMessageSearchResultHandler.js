__d("MAWBridgeRemoveMessageSearchResultHandler", [
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, a) {
		return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var r = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.message_search_results).filter(function(e) {
				return a.includes(e.messageOtid);
			}));
			yield (e || (e = n("Promise"))).all(r.map(function(e) {
				return t.message_search_results.delete(e.type_, e.query, e.threadKey, e.globalIndex);
			}));
		})().then(r("emptyFunction"));
	}
	l.call = s;
}), 98);
