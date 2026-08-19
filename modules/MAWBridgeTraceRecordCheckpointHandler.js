__d("MAWBridgeTraceRecordCheckpointHandler", [
	"I64",
	"LSAppendDataTraceAddonStoredProcedure",
	"LSDatabaseSingleton",
	"LSFactory",
	"LSFlushDataTrace.nop"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n) {
		var a = n.checkPointId, i = n.dataTraceId, l = n.errorMessage, s = n.tags;
		return r("LSAppendDataTraceAddonStoredProcedure")(r("LSFactory")(t), {
			checkPointId: a,
			dataTraceId: i,
			errorMessage: l,
			syncChannel: (e || (e = o("I64"))).neg_one,
			tags: s
		}).then(function() {
			if (n.shouldFlush) return r("LSFlushDataTrace.nop")(t, 0, i);
		});
	}
	function c(e) {
		return (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(function(t) {
			return t.runInTransaction(function(t) {
				return u(t, e);
			}, "readwrite", void 0, void 0, i.id + ":43");
		});
	}
	l.call = u, l.callWithoutTxn = c;
}), 98);
