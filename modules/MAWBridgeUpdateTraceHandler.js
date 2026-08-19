__d("MAWBridgeUpdateTraceHandler", [
	"ArmadilloDataTraceCheckPoint",
	"I64",
	"LSAppendDataTraceAddonStoredProcedure",
	"LSDataTraceCheckPoint",
	"LSFactory",
	"LSIntEnum",
	"MAWBridgeTraceEvent",
	"Promise",
	"ReQL",
	"emptyFunction",
	"updateAndFlushLSDataTrace"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(t, a, i) {
		return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.data_trace_meta).filter(function(e) {
			var t = e.contextThree;
			return t != null && a.externalIds.includes(t) && (u || (u = o("I64"))).equal(e.traceType, a.traceType) ? e.shouldFlush === !1 : !1;
		})).then(function(l) {
			var s = [];
			return l.reduce(function(e, n) {
				return e.then(function() {
					s.push(n.traceId);
					var e = a.errorMessage;
					return e != null ? r("LSAppendDataTraceAddonStoredProcedure")(r("LSFactory")(t), {
						checkPointId: i,
						dataTraceId: n.traceId,
						errorMessage: e,
						syncChannel: (u || (u = o("I64"))).neg_one
					}) : r("LSAppendDataTraceAddonStoredProcedure")(r("LSFactory")(t), {
						checkPointId: i,
						dataTraceId: n.traceId,
						syncChannel: (u || (u = o("I64"))).neg_one
					});
				});
			}, (e || (e = n("Promise"))).resolve()).then(function() {
				return s;
			});
		});
	}
	function d(t, o) {
		return o.reduce(function(e, n) {
			return e.then(function() {
				return r("updateAndFlushLSDataTrace")(t, n);
			});
		}, (e || (e = n("Promise"))).resolve());
	}
	function m(t, a) {
		var i = a.event;
		return i === r("MAWBridgeTraceEvent").ReceivedReceipt ? c(t, a, o("ArmadilloDataTraceCheckPoint").deliveryReceiptReceived).then(function(e) {
			return d(t, e);
		}) : i === r("MAWBridgeTraceEvent").ReceivedSent ? c(t, a, o("ArmadilloDataTraceCheckPoint").advancedCryptoMEMSendTaskComplete).then(r("emptyFunction")) : i === r("MAWBridgeTraceEvent").FlowEndForFailure ? c(t, a, (s || (s = o("LSIntEnum"))).ofNumber(r("LSDataTraceCheckPoint").FLOW_END_FOR_FAILURE)).then(function(e) {
			return d(t, e);
		}) : i === r("MAWBridgeTraceEvent").FlowEndForSuccess ? c(t, a, (s || (s = o("LSIntEnum"))).ofNumber(r("LSDataTraceCheckPoint").FLOW_END_AND_FLUSH)).then(function(e) {
			return d(t, e);
		}) : (e || (e = n("Promise"))).resolve();
	}
	l.call = m;
}), 98);
