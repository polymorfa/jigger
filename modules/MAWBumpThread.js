__d("MAWBumpThread", [
	"ODS",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.description, r = t.lastActivityTs, a = t.lastMessageCtaType, i = t.lastReadTs, l = t.threadKey, s = t.txn, u = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(s.threads).getKeyRange(l));
			if (u == null) return (e || (e = o("ODS"))).bumpEntityKey(3185, "armadillo_thread_bump", "missing_thread");
			var c = babelHelpers.extends({}, u, {
				lastActivityTimestampMs: r != null ? r : u.lastActivityTimestampMs,
				lastMessageCtaType: a,
				lastReadWatermarkTimestampMs: i != null ? i : u.lastReadWatermarkTimestampMs
			});
			yield s.threads.put(c);
		}), u.apply(this, arguments);
	}
	l.threadMutation_DEPRECATED = s;
}), 98);
