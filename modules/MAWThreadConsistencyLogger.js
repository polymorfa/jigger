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
	"Promise",
	"ReQL",
	"WAArrayZip",
	"asyncToGeneratorRuntime",
	"clearInterval",
	"justknobx",
	"promiseDone",
	"setInterval"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = 20, m = r("justknobx")._("3207"), p = !1, _ = null;
	function f() {
		p || (p = !0, r("clearInterval")(_), _ = r("setInterval")(function() {
			document.visibilityState === "visible" && r("promiseDone")(g());
		}, m * 1e3));
	}
	function g() {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
			r("promiseDone")(t.runInTransaction((function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					(c || (c = o("ODS"))).bumpEntityKey(3185, "maw_tc_metric", "initiate_snapshot");
					var a = yield o("ReQL").toArrayAsync(o("ReQL").fromTableDescending(t.threads.index("lastActivityTimestampMs")).filter(y).take(d));
					if (a.length === 0) {
						(c || (c = o("ODS"))).bumpEntityKey(3185, "maw_tc_metric", "no_e2ee_threads_fetched_on_client");
						return;
					}
					var i = yield (e || (e = n("Promise"))).all(a.map(function(e) {
						return o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.messages.index("messageDisplayOrder")).getKeyRange(e.threadKey));
					})), l = o("WAArrayZip").zip(a, i).map(function(e) {
						var t = e[0], n = e[1];
						return o("LSShape").ofRecord({
							is_last_activity_optimistic: C(n),
							last_activity_timestamp_ms: t.lastActivityTimestampMs,
							last_read_timestamp_ms: t.lastReadWatermarkTimestampMs,
							thread_key: t.threadKey
						});
					});
					return r("LSCheckThreadConsistencyStoredProcedure")(r("LSFactory")(t), {
						metadata: o("LSShape").ofRecord({
							client_snapshot_timestamp_ms: (u || (u = o("I64"))).of_float(Date.now()),
							session_timestamp_ms: u.of_int32(Math.round(window.performance.now()))
						}),
						threads: r("LSVec").ofArray(l)
					});
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})(), "readonly", void 0, void 0, i.id + ":56"), function() {
				return (c || (c = o("ODS"))).bumpEntityKey(3185, "maw_tc_metric", "send_snapshot");
			}, function(e) {
				r("FBLogger")("maw_tc_metric").catching(e).warn("failed to send tc metric snapshot");
			});
		}), h.apply(this, arguments);
	}
	function y(e) {
		return o("LSMessagingThreadTypeUtil").isArmadilloSecure(e.threadType) && e.folderName === "inbox" && (u || (u = o("I64"))).to_int32(e.authorityLevel) >= r("LSAuthorityLevel").AUTHORITATIVE;
	}
	function C(e) {
		return e == null ? !1 : (u || (u = o("I64"))).to_int32(e.authorityLevel) < r("LSAuthorityLevel").AUTHORITATIVE;
	}
	l.startMAWThreadConsistencyLogger = f, l.MAWThreadConsistencyLoggerTakeSnapshot = g;
}), 98);
