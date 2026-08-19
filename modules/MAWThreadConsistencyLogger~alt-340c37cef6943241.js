__d("MAWThreadConsistencyLogger", [
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSCheckThreadConsistencyStoredProcedure",
	"LSDatabaseSingleton",
	"LSFactory",
	"LSMessagingThreadTypeUtil",
	"LSShape",
	"LSVec",
	"ODS",
	"ReQL",
	"WAArrayZip",
	"clearInterval",
	"justknobx",
	"promiseDone",
	"setInterval"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = 20, d = r("justknobx")._("3207"), m = !1, p = null;
	function _() {
		m || (m = !0, r("clearInterval")(p), p = r("setInterval")(function() {
			document.visibilityState === "visible" && r("promiseDone")(f());
		}, d * 1e3));
	}
	async function f() {
		var t = await (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
		r("promiseDone")(t.runInTransaction(async function(e) {
			(s || (s = o("ODS"))).bumpEntityKey(3185, "maw_tc_metric", "initiate_snapshot");
			var t = await o("ReQL").toArrayAsync(o("ReQL").fromTableDescending(e.threads.index("lastActivityTimestampMs")).filter(g).take(c));
			if (t.length === 0) {
				(s || (s = o("ODS"))).bumpEntityKey(3185, "maw_tc_metric", "no_e2ee_threads_fetched_on_client");
				return;
			}
			var n = await Promise.all(t.map(function(t) {
				return o("ReQL").firstAsync(o("ReQL").fromTableDescending(e.messages.index("messageDisplayOrder")).getKeyRange(t.threadKey));
			})), a = o("WAArrayZip").zip(t, n).map(function(e) {
				var t = e[0], n = e[1];
				return o("LSShape").ofRecord({
					is_last_activity_optimistic: h(n),
					last_activity_timestamp_ms: t.lastActivityTimestampMs,
					last_read_timestamp_ms: t.lastReadWatermarkTimestampMs,
					thread_key: t.threadKey
				});
			});
			return r("LSCheckThreadConsistencyStoredProcedure")(r("LSFactory")(e), {
				metadata: o("LSShape").ofRecord({
					client_snapshot_timestamp_ms: (u || (u = o("I64"))).of_float(Date.now()),
					session_timestamp_ms: u.of_int32(Math.round(window.performance.now()))
				}),
				threads: r("LSVec").ofArray(a)
			});
		}, "readonly", void 0, void 0, i.id + ":56"), function() {
			return (s || (s = o("ODS"))).bumpEntityKey(3185, "maw_tc_metric", "send_snapshot");
		}, function(e) {
			r("FBLogger")("maw_tc_metric").catching(e).warn("failed to send tc metric snapshot");
		});
	}
	function g(e) {
		return o("LSMessagingThreadTypeUtil").isArmadilloSecure(e.threadType) && e.folderName === "inbox" && (u || (u = o("I64"))).to_int32(e.authorityLevel) >= r("LSAuthorityLevel").AUTHORITATIVE;
	}
	function h(e) {
		return e == null ? !1 : (u || (u = o("I64"))).to_int32(e.authorityLevel) < r("LSAuthorityLevel").AUTHORITATIVE;
	}
	l.startMAWThreadConsistencyLogger = _, l.MAWThreadConsistencyLoggerTakeSnapshot = f;
}), 98);
