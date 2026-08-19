__d("updateAndFlushLSDataTrace", [
	"FBLogger",
	"I64",
	"LSAppendDataTraceAddonStoredProcedure",
	"LSDataTraceCheckPoint",
	"LSFactory",
	"LSIntEnum",
	"Promise",
	"ReQLTable",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = r("requireDeferred")("LSDataTraceFlush").__setRef("updateAndFlushLSDataTrace");
	function d(t, a) {
		return a == null ? (u || (u = n("Promise"))).resolve() : r("LSAppendDataTraceAddonStoredProcedure")(r("LSFactory")(t), {
			checkPointId: (e || (e = o("LSIntEnum"))).ofNumber(r("LSDataTraceCheckPoint").CLIENT_READY_TO_FLUSH),
			dataTraceId: a,
			syncChannel: (s || (s = o("I64"))).neg_one
		}).then(function() {
			return o("ReQLTable").update(t.data_trace_meta, [a], function(e) {
				if (e != null) return {
					contextOne: e.contextOne,
					contextThree: e.contextThree,
					contextTwo: e.contextTwo,
					foregroundTimestampMs: e.foregroundTimestampMs,
					initTimestampMs: e.initTimestampMs,
					predefinedId: e.predefinedId,
					shouldFlush: !0,
					traceId: e.traceId,
					traceType: e.traceType
				};
				throw r("FBLogger")("messenger_web").mustfixThrow("Data trace is missing, id: \"%s\"", a);
			}).then(function() {
				return c.load().then(function(e) {
					return e.flush(t, a);
				});
			});
		});
	}
	l.default = d;
}), 98);
