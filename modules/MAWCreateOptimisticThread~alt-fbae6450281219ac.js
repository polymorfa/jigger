__d("MAWCreateOptimisticThread", [
	"I64",
	"LSAuthorityLevel",
	"LSCreateOfflineThreadingIDStoredProcedure",
	"LSFactory",
	"LSIntEnum",
	"LSMailboxType",
	"LSRtcCallState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	async function u(t) {
		var n = await r("LSCreateOfflineThreadingIDStoredProcedure")(r("LSFactory")(t), { timestampMs: (e || (e = o("I64"))).of_float(Date.now()) }), a = n[0];
		return a;
	}
	async function c(t, n) {
		var a = {
			authorityLevel: (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC),
			folderName: "inbox",
			lastReadWatermarkTimestampMs: (e || (e = o("I64"))).of_float(0),
			mailboxType: s.ofNumber(r("LSMailboxType").MESSENGER),
			ongoingCallState: s.ofNumber(r("LSRtcCallState").NO_ONGOING_CALL),
			parentThreadKey: e.zero,
			threadKey: n,
			threadType: s.ofNumber(15)
		};
		return await t.threads.put(a), n;
	}
	async function d(e) {
		var t = await u(e);
		return await c(e, t), t;
	}
	l.createOfflineThreadingId = u, l.createOptimisticThreadWithThreadKey = c, l.createOptimisticThread = d;
}), 98);
