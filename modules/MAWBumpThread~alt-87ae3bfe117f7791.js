__d("MAWBumpThread", ["ODS", "ReQL"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(t) {
		var n = t.description, r = t.lastActivityTs, a = t.lastMessageCtaType, i = t.lastReadTs, l = t.threadKey, s = t.txn, u = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(s.threads).getKeyRange(l));
		if (u == null) return (e || (e = o("ODS"))).bumpEntityKey(3185, "armadillo_thread_bump", "missing_thread");
		var c = babelHelpers.extends({}, u, {
			lastActivityTimestampMs: r != null ? r : u.lastActivityTimestampMs,
			lastMessageCtaType: a,
			lastReadWatermarkTimestampMs: i != null ? i : u.lastReadWatermarkTimestampMs
		});
		await s.threads.put(c);
	}
	l.threadMutation_DEPRECATED = s;
}), 98);
