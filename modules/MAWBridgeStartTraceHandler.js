__d("MAWBridgeStartTraceHandler", [
	"ArmadilloDataTraceCheckPoint",
	"ArmadilloDataTraceType",
	"I64",
	"LSAppendDataTraceAddonStoredProcedure",
	"LSDataTraceTag",
	"LSFactory",
	"LSRequestId",
	"MAWAckLevel",
	"MAWBridgeTraceUtils",
	"MAWMsg",
	"MAWTimeUtils",
	"Promise",
	"gkx",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t, n) {
		return e.data_trace_meta.add({
			contextOne: void 0,
			contextThree: t.externalId,
			contextTwo: void 0,
			foregroundTimestampMs: (s || (s = o("I64"))).zero,
			initTimestampMs: o("MAWTimeUtils").toTimestamp(t.ts),
			predefinedId: void 0,
			shouldFlush: !1,
			traceId: n,
			traceType: t.traceType
		}).then(function() {
			return r("LSAppendDataTraceAddonStoredProcedure")(r("LSFactory")(e), {
				checkPointId: o("ArmadilloDataTraceCheckPoint").traceCreated,
				dataTraceId: n,
				syncChannel: (s || (s = o("I64"))).neg_one
			});
		}).then(function() {
			var a;
			if (!(t.threadKey == null || !r("gkx")("23995"))) return r("LSAppendDataTraceAddonStoredProcedure")(r("LSFactory")(e), {
				checkPointId: o("ArmadilloDataTraceCheckPoint").armadilloTlcControlOpenThread,
				dataTraceId: n,
				syncChannel: (s || (s = o("I64"))).neg_one,
				tags: (a = t.threadKey) != null ? a : void 0
			});
		});
	}
	function c(t, a) {
		var i = a.ack, l = a.traceType;
		return i === o("MAWAckLevel").ACK.clock ? o("MAWBridgeTraceUtils").getTraceId(t, a.externalId, a.traceType).then(function(i) {
			if (i == null) {
				var c = r("LSRequestId").generate();
				return (s || (s = o("I64"))).equal(l, o("ArmadilloDataTraceType").armadilloMessageSend) ? u(t, a, c).then(function() {
					var e = a.threadType;
					if (e !== "User") return r("LSAppendDataTraceAddonStoredProcedure")(r("LSFactory")(t), {
						checkPointId: o("ArmadilloDataTraceCheckPoint").traceGroupMessage,
						dataTraceId: c,
						syncChannel: (s || (s = o("I64"))).neg_one
					});
				}).then(function() {
					if (a.isFirstMsg) return r("LSAppendDataTraceAddonStoredProcedure")(r("LSFactory")(t), {
						checkPointId: o("ArmadilloDataTraceCheckPoint").armadilloActMessageSend,
						dataTraceId: c,
						syncChannel: (s || (s = o("I64"))).neg_one,
						tags: "first_msg=1"
					});
				}).then(function() {
					var i = a.type_, l = i === o("MAWMsg").text ? o("ArmadilloDataTraceCheckPoint").traceTextMessage : i === o("MAWMsg").ptt || i === o("MAWMsg").image || i === o("MAWMsg").video || i === o("MAWMsg").gif ? o("ArmadilloDataTraceCheckPoint").traceMediaMessage : void 0;
					return l == null || r("promiseDone")(r("LSAppendDataTraceAddonStoredProcedure")(r("LSFactory")(t), {
						checkPointId: l,
						dataTraceId: c,
						syncChannel: (s || (s = o("I64"))).neg_one
					})), (e || (e = n("Promise"))).resolve(l);
				}).then(function(e) {
					if (e != null && (s || (s = o("I64"))).equal(e, o("ArmadilloDataTraceCheckPoint").traceMediaMessage)) {
						var n = a.type_, i = n === o("MAWMsg").image ? o("LSDataTraceTag").image : n === o("MAWMsg").ptt ? o("LSDataTraceTag").audio : n === o("MAWMsg").video ? o("LSDataTraceTag").video : n === o("MAWMsg").gif ? o("LSDataTraceTag").animatedImage : o("LSDataTraceTag").none;
						return r("LSAppendDataTraceAddonStoredProcedure")(r("LSFactory")(t), {
							checkPointId: o("ArmadilloDataTraceCheckPoint").richMediaMediaSendAttachmentType,
							dataTraceId: c,
							syncChannel: (s || (s = o("I64"))).neg_one,
							tags: String(i)
						});
					}
				}) : u(t, a, c);
			}
		}) : (e || (e = n("Promise"))).resolve();
	}
	l.call = c;
}), 98);
