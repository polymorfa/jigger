__d("MAWBridgeRemoveMessageSearchResultHandler", ["ReQL", "emptyFunction"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return (async function() {
			var n = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.message_search_results).filter(function(e) {
				return t.includes(e.messageOtid);
			}));
			await Promise.all(n.map(function(t) {
				return e.message_search_results.delete(t.type_, t.query, t.threadKey, t.globalIndex);
			}));
		})().then(r("emptyFunction"));
	}
	l.call = e;
}), 98);
