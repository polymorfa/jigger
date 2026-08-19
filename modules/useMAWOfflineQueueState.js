__d("useMAWOfflineQueueState", [
	"CometRelay",
	"MAWOfflineQueueState",
	"react-compiler-runtime",
	"useMAWOfflineQueueStateQuery.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		var t, r = o("react-compiler-runtime").c(2), a, i;
		r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = e !== void 0 ? e : e = n("useMAWOfflineQueueStateQuery.graphql"), i = {}, r[0] = a, r[1] = i) : (a = r[0], i = r[1]);
		var l = o("CometRelay").useClientQuery(a, i);
		return (t = l.offlineQueueStats) != null ? t : o("MAWOfflineQueueState").EMPTY_STATE;
	}
	l.useMAWOfflineQueueState = s;
}), 98);
