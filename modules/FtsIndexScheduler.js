__d("FtsIndexScheduler", [
	"FBLogger",
	"FtsIndexEntity",
	"MAWFTSVersionsInformation",
	"MAWMessageSearchManifestReader",
	"MAWMessageSearchManifestWriter",
	"MAWQplProxy",
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"TaskScheduler",
	"TaskSchedulerPriority",
	"WAFtsQuickSwitchOrchestrator",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"nullthrows",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = function() {
		return r("FBLogger")("wmi").tags(["fts_index", "fts_index_scheduler"]);
	}, c = null, d = 3, m = null;
	function p() {
		if (m == null) {
			var e = o("TaskScheduler").taskScheduler("FtsIndexQueue", {
				concurrency: 1,
				failOnTimeout: !0,
				promotionTimeoutMs: 6e4,
				timeoutMs: 12e4
			}, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
			e.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener()), m = e;
		}
		return m;
	}
	function _() {
		o("FtsIndexEntity").getFtsIndexQueue().subscribe(function(e) {
			e: {
				if (e.type === "new_entities") {
					f({ attempt: 0 });
					break e;
				}
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e.type);
			}
		});
	}
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.attempt, a = t.lastError;
			if (n >= d) {
				u().warn("aborting fts indexing: max attempts (" + d + ") reached" + (a != null ? "; lastError=" + a : ""));
				return;
			}
			if (c == null) try {
				yield C();
			} catch (t) {
				var i = r("getErrorSafe")(t);
				u().FATAL(e || (e = babelHelpers.taggedTemplateLiteralLoose(["failed to initialize orchestrator: ", ""])), i.message);
				return;
			}
			var l = p().run(function() {
				return h();
			}, {
				name: "fts_index_queue",
				priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
			}), s = l.promise;
			try {
				var m = yield s;
				m != null && f({
					attempt: n + 1,
					lastError: m
				});
			} catch (e) {
				var _ = r("getErrorSafe")(e).message;
				f({
					attempt: n + 1,
					lastError: _
				});
			}
		}), g.apply(this, arguments);
	}
	function h() {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("FtsIndexEntity").getFtsIndexQueue().read();
			if (e.length === 0) return null;
			var t = [], n = [], a = [];
			for (var i of e) e: {
				if (i.kind === "INDEX_MESSAGE") {
					t.push(i);
					break e;
				}
				if (i.kind === "PURGE_MESSAGE") {
					n.push(i);
					break e;
				}
				if (i.kind === "PURGE_THREAD") {
					a.push(i);
					break e;
				}
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i.kind);
			}
			var l = o("MAWQplProxy").startQplUserFlow(r("qpl")._(25304096, "2398"), {
				int: { estimatedNumMessages: e.length },
				string: {
					type: "LOCAL",
					useWormPersistedQueue: "true"
				}
			}), s = r("nullthrows")(c), d = [];
			if (l.addPoint("indexing_start"), t.length > 0) {
				var m = yield s.incremental(void 0, o("TaskSchedulerPriority").BACKGROUND_PRIORITY);
				if (!m) {
					var p = "message indexing failed for: [" + t.map(function(e) {
						return e.id;
					}).join(", ") + "]";
					d.push(p), u().warn(p);
				}
			}
			l.addPoint("indexing_end"), l.addPoint("purge_start");
			var _ = [];
			if (n.length > 0) {
				var f = yield s.purge(n.map(function(e) {
					return e.id;
				}));
				if (f) _.push.apply(_, n.map(function(e) {
					return e.queueId;
				}));
				else {
					var g = "message purging failed for: [" + n.map(function(e) {
						return e.id;
					}).join(", ") + "]";
					d.push(g), u().warn(g);
				}
			}
			for (var h of a) {
				var y = yield s.purgeChat(h.id);
				if (y) _.push(h.queueId);
				else {
					var C = "thread purging failed for: [" + h.id + "]";
					d.push(C), u().warn(C);
				}
			}
			if (l.addPoint("purge_end"), yield o("FtsIndexEntity").getFtsIndexQueue().ack(_).catch(function(e) {
				var t = "queue cleanup failed for [" + _.join(", ") + "] :" + r("getErrorSafe")(e).message;
				d.push(t), u().warn(t);
			}), d.length > 0) {
				l.endFail("unknown", { string_array: { errorDescription: d } });
				var b = d.join("; ");
				return b;
			}
			return l.endSuccess(), null;
		}), y.apply(this, arguments);
	}
	function C() {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (c == null) {
				var e = new (r("MAWMessageSearchManifestWriter"))(), t = new (r("MAWMessageSearchManifestReader"))();
				yield e.setLatestVersion(o("MAWFTSVersionsInformation").LATEST_INDEXER_VERSION, o("MAWFTSVersionsInformation").LATEST_TOKENIZER_VERSION), c = new (r("WAFtsQuickSwitchOrchestrator"))(t, e, o("MAWFTSVersionsInformation").VERSIONS_INFO), u().DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["FTS orchestrator initialized"])));
			}
		}), b.apply(this, arguments);
	}
	function v() {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield C(), yield h(), c = null;
		}), S.apply(this, arguments);
	}
	l.subscribeToFtsQueueUpdates = _, l.runFtsSchedulerTaskInTest_DO_NOT_USE = v;
}), 98);
