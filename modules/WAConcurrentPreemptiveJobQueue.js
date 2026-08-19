__d("WAConcurrentPreemptiveJobQueue", [
	"Promise",
	"WACustomError",
	"WAJobOrchestratorTypes",
	"WALogger",
	"WAPromiseTimeout",
	"WARandomHex",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = (function() {
		function t() {
			this.$1 = !1, this.$2 = 0, this.$3 = 0, this.$4 = {}, this.$5 = [], this.$6 = [];
		}
		var a = t.prototype;
		return a.init = function(t, n) {
			var e;
			if (this.$1) throw r("err")("ConcurrentPreemptiveJobQueue has already initialized");
			this.$2 = t.maxConcurrency, this.$3 = t.maxConcurrency, this.$4 = (e = t.maxConcurrencyPerJob) != null ? e : {}, this.$7 = n, this.$1 = !0;
		}, a.updateConfig = function(n) {
			var t;
			this.$3 += n.maxConcurrency - this.$2, this.$2 = n.maxConcurrency, this.$4 = (t = n.maxConcurrencyPerJob) != null ? t : {}, o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[job-orchestator]: updated ConcurrentPreemptiveJobQueue config"])));
		}, a.isInitialized = function() {
			return this.$1;
		}, a.clearQueueByPriority = function(t) {
			if (!this.$1) throw r("err")("ConcurrentPreemptiveJobQueue not initialized");
			this.$5 = this.$5.filter(function(e) {
				var n;
				return ((n = e.jobInfo) == null ? void 0 : n.priority) !== t;
			});
		}, a.clearQueue = function() {
			if (!this.$1) throw r("err")("ConcurrentPreemptiveJobQueue not initialized");
			this.$5 = [], this.$6 = [];
		}, a.enqueue = function(t, a, i) {
			var e, l = this;
			if (!this.$1) return (d || (d = n("Promise"))).reject(r("err")("ConcurrentPreemptiveJobQueue not initialized"));
			var s, u, c = new (d || (d = (n("Promise"))))(function(e, t) {
				s = e, u = t;
			}), m = babelHelpers.extends({ priority: o("WAJobOrchestratorTypes").DEFAULT_JOB_PRIORITY }, i), p = (e = i == null ? void 0 : i.jobId) != null ? e : o("WARandomHex").randomHex(8).substr(0, 64), _ = this.$8(t, m, p, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					l.$7.logJobStarted(p);
					var e = yield l.$9(a(), i == null ? void 0 : i.maxTimeoutMs);
					l.$7.logJobCompleted(p), s(e);
				} catch (e) {
					e instanceof o("WACustomError").TimeoutError ? l.$7.logJobTimeout(p) : l.$7.logJobError(p), u(e);
				}
			}));
			return i && i.priority === o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION && this.$10(_), this.$11(), c;
		}, a.getAvailableThreadsCount = function() {
			return this.$3;
		}, a.getJobMaxConcurrency = function() {
			return this.$4;
		}, a.getSnapshot = function(t) {}, a.$11 = function() {
			for (; this.$3 > 0;) {
				var e = this.$12();
				if (e == null) break;
				this.$10(e);
			}
		}, a.$9 = function(t, n) {
			return n !== void 0 ? o("WAPromiseTimeout").promiseTimeout(t, n) : t;
		}, a.$10 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = this;
				this.$3--, this.$13(e);
				var n = e.jobId, r = e.jobName, a = e.run;
				try {
					var i;
					yield this.$9(a(), ((i = e.jobInfo) == null ? void 0 : i.maxTimeoutMs) === void 0 ? o("WAJobOrchestratorTypes").DEFAULT_JOB_TIMEOUT_MS : void 0);
				} catch (e) {
					if (e instanceof o("WACustomError").TimeoutError) this.$7.logJobTimeout(n), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[job-orchestator]: ", " exceeding the timeout, release the thread."])), r);
					else throw e;
				} finally {
					this.$3++, this.$14(n), setTimeout(function() {
						return t.$11();
					}, 0);
				}
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.$8 = function(t, n, r, o) {
			var e = {
				jobId: r,
				jobInfo: n,
				jobName: t,
				run: o
			};
			return this.$7.logJobCreated({
				jobId: r,
				jobName: t,
				jobPriority: n.priority,
				pendingJobsCount: this.$5.length
			}), this.$5.push(e), e;
		}, a.$13 = function(t) {
			this.$6.includes(function(e) {
				return e.jobId === t.jobId;
			}) && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed::markJobTaskPending found jobId: ", " in pending tasks"])), t.jobId).sendLogs("JobOrchestrator::markJobTaskPending"), this.$6.push(t), this.$5 = this.$5.filter(function(e) {
				return e.jobId !== t.jobId;
			});
		}, a.$14 = function(t) {
			this.$6 = this.$6.filter(function(e) {
				return e.jobId !== t;
			}), this.$5.includes(function(e) {
				return e.jobId === t;
			}) && o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed::markJobTaskDone found jobId: ", " in scheduled tasks"])), t).sendLogs("JobOrchestrator::markJobTaskDone");
		}, a.$12 = function() {
			var e = this;
			if (this.$5.length === 0) return null;
			var t = this.$6.reduce(function(e, t) {
				var n, r = (n = e.get(t.jobName)) != null ? n : 0;
				return e.set(t.jobName, r + 1), e;
			}, new Map()), n = this.$5.filter(function(n) {
				var r, o;
				return ((r = t.get(n.jobName)) != null ? r : 0) < ((o = e.$4[n.jobName]) != null ? o : 1);
			});
			return n[0];
		}, t;
	})();
	l.WAConcurrentPreemptiveJobQueue = m;
}), 98);
