__d("FtsIndexEntity", [
	"WATimeUtils",
	"WormPersistedQueue",
	"WormPersistedQueueSchema"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("WATimeUtils").millisTime();
		return {
			addedAtMs: t,
			id: e,
			kind: "INDEX_MESSAGE",
			queueId: o("WormPersistedQueueSchema").toWormPersistedQueueId(e + "." + t.toString())
		};
	}
	function s(e) {
		var t = o("WATimeUtils").millisTime();
		return {
			addedAtMs: t,
			id: e,
			kind: "PURGE_MESSAGE",
			queueId: o("WormPersistedQueueSchema").toWormPersistedQueueId(e + "." + t.toString())
		};
	}
	function u(e) {
		var t = o("WATimeUtils").millisTime();
		return {
			addedAtMs: t,
			id: e,
			kind: "PURGE_THREAD",
			queueId: o("WormPersistedQueueSchema").toWormPersistedQueueId(e + "." + t.toString())
		};
	}
	function c(e) {
		return e;
	}
	var d = null;
	function m() {
		return d == null && (d = new (o("WormPersistedQueue")).WormPersistedQueue("ftsIndexQueue")), d;
	}
	l.toIndexMessageEntity = e, l.toPurgeMessageEntity = s, l.toPurgeThreadEntity = u, l.toFtsIndexId = c, l.getFtsIndexQueue = m;
}), 98);
