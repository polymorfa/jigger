__d("WAPersistedJobManagerV2", [
	"QPLFlow",
	"WAJobOrchestratorTypes",
	"WAJobRequirement",
	"WALogger",
	"WAOrchestrator",
	"WAPersistedJobManager",
	"WAPromiseBackoffs",
	"WAResolvable",
	"WATimeUtils",
	"WaJobInMemoryAccessors",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F = 1;
	function O(e) {
		var t = e.code, n = e.annotations, r = n === void 0 ? {} : n, o = e.eventFlow, a = o === void 0 ? B(r) : o;
		return t(a).then(function(e) {
			return a.endSuccess(), e;
		}).catch(function(e) {
			throw a.endFail("error", { string: { error: "" + e } }), e;
		});
	}
	function B(e) {
		return e === void 0 && (e = {}), o("QPLFlow").startNoopQPLFlow();
	}
	var W = (function() {
		function t(t) {
			var n = this;
			this.$1 = [];
			var r = t.accessors, a = t.ignoreForceNonPersistedJobList, i = t.isRestartAfterCrash, l = t.unfinishedJobEntries;
			this.getOrchestratorDelegate = o("WAOrchestrator").getInstanceDelegate(), this.activeJobs = new Map(), this.implementationLoaders = new Map(), this.implementations = new Map(), this.stepBlockers = new WeakMap(), this.accessors = r, this.isRestartAfterCrash = i || !1, this.listeners = t.listeners, this.deprecatedJobs = t.deprecatedJobs, this.inMemoryAccessors = o("WaJobInMemoryAccessors").getJobInMemoryAccessors(), this.offlineQueueMode = !0, this.$1 = a, t.offlineQueueCompletePromise != null ? t.offlineQueueCompletePromise.finally(function() {
				n.offlineQueueMode = !1;
			}) : this.offlineQueueMode = !1, this.initialJobsPromise = l.then(function(t) {
				var r = [], a = [];
				return t.forEach(function(e) {
					e.stepHardStartCountAfterTimeout >= 5 ? r.push(e) : a.push(e);
				}), Promise.all(r.map(function(t) {
					return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"",
						": stuck on the step ",
						", aborting the job"
					])), U(t), t.step).sendLogs("job-stuck-" + t.type), n.accessors.deletePersistedJob(t.jobId);
				})).then(function() {
					a.forEach(function(e) {
						var t = n.$2(e.jobId);
						if (t.alreadyActive === !0) {
							o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[JOB MANAGER] Restarting job with the same id"])));
							return;
						}
						t.deferred.resolve(O({
							code: function(r) {
								return n.$3(e, n.accessors, { eventFlow: r });
							},
							annotations: {
								string: { name: e.type },
								bool: { offlineQueueMode: n.offlineQueueMode }
							}
						}));
					});
				});
			});
		}
		var n = t.prototype;
		return n.$4 = async function(t, n, a) {
			var e;
			a === void 0 && (a = {});
			var i = this.$2(t);
			if ((e = a.eventFlow) == null || e.addPoint("start_load_and_run", { bool: { skipped: i.alreadyActive } }), i.alreadyActive === !0) return i.deferred;
			var l = await n.readPersistedJob(t);
			if (l == null) throw o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Persisted job missing for given ID"]))).sendLogs("missing-job-entry"), r("err")("Persisted job missing for given ID " + t);
			return i.deferred.resolve(this.$3(l, n, a)), i.deferred.promise;
		}, n.$3 = function(t, n, r) {
			var e, a;
			return r === void 0 && (r = {}), (e = r.eventFlow) == null || e.addPoint("enqueueing_job", { string: { name: t.type } }), this.getOrchestratorDelegate(((a = t.scheduleConfig) == null ? void 0 : a.priority) === o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP, r.eventFlow).enqueue(t.type, this.$5(t, n, r), t.scheduleConfig, r.eventFlow);
		}, n.$6 = function(t, n, r) {
			var e = this;
			return r === void 0 && (r = {}), n.maybeCreateJob(t).then(function(t) {
				var o, a = t.id;
				return (o = r.eventFlow) == null || o.addPoint("job_persisted", {
					int: { jobId: a },
					bool: { nonPersisted: n === e.inMemoryAccessors }
				}), a;
			});
		}, n.$2 = function(t) {
			var e = this.activeJobs.get(t);
			if (e != null) return {
				alreadyActive: !0,
				deferred: e
			};
			var n = new (o("WAResolvable")).Resolvable();
			return this.activeJobs.set(t, n.promise), {
				alreadyActive: !1,
				deferred: n
			};
		}, n.$5 = function(t, n, r) {
			var e = this;
			return function() {
				return e.$7(t, n, r);
			};
		}, n.$8 = function(t) {
			var e = this.implementationLoaders, n = this.implementations, r = n.get(t);
			if (r) return r;
			var o = e.get(t);
			if (!o) return null;
			var a = o();
			return n.set(t, a), a;
		}, n.$9 = function(t, n) {
			if (n == null || n.length === 0) return Promise.resolve();
			var e = this.stepBlockers, r = e.get(n);
			return r == null && (r = o("WAJobRequirement").joinRequirements(n.map(function(e) {
				return e();
			}), H), e.set(n, r)), r(t);
		}, n.$10 = function(t, n, r, a, i) {
			var e, l = this;
			i === void 0 && (i = {});
			var s = t.step;
			(e = i.eventFlow) == null || e.addPoint("start_step");
			var u = n.findIndex(function(e) {
				return e.stepName === s;
			}), m = n[u].info(t.current, t.original, G(t, this.isRestartAfterCrash)), p = m.code, _ = m.requirements, f = this.$9(t, _);
			return a && (f = f.then(a)), f.then(function() {
				var e;
				return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ": running step"])), V(t)), (e = i.eventFlow) == null || e.addPoint("run_step"), p(t.current, t.original, G(t, l.isRestartAfterCrash, i.eventFlow));
			}).then(function(e) {
				var a;
				if ((a = i.eventFlow) == null || a.addPoint("step_is_complete"), e instanceof o("WAPersistedJobManager").InterruptJob) return o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ": InterruptJob"])), V(t)), e.result;
				var s = u + 1;
				if (s >= n.length) return e;
				var c = n[s];
				return t.step = c.stepName, t.current = e, t.stepHardStartCountAfterTimeout = 0, t.stepFirstStartTime = o("WATimeUtils").unixTime(), t.stepUnexpectedErrorCount = 0, t.waitUntil = null, t.backedOffCount = 0, r.updatePersistedJob(t).then(function() {
					return l.$10(t, n, r, void 0, i);
				});
			});
		}, n.$7 = async function(t, n, r) {
			var e, a, i = this;
			r === void 0 && (r = {});
			var l = this.activeJobs, s = this.deprecatedJobs, u = this.listeners, c = u.onJobFinished, d = u.onJobStarted;
			(e = r.eventFlow) == null || e.addPoint("run_job");
			var T = await this.$8(t.type), D = s[t.type];
			if (!T) {
				if (D) {
					if (D === "NOOP") return o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["No implementation for deprecated ", ", job deleted"])), t.type), await n.deletePersistedJob(t.jobId), null;
				} else return o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["No implementation for ", ". Maybe it should have been put to the deprecated list?"])), t.type).sendLogs("missing-job-implementation"), await n.deletePersistedJob(t.jobId), null;
				T = await D();
			}
			var x = T;
			D && o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Running deprecated job ", ""])), t.type);
			var $ = (a = t.stepFirstStartTime) != null ? a : o("WATimeUtils").unixTime();
			if (t.stepFirstStartTime = $, t.stepUnexpectedErrorCount = t.stepUnexpectedErrorCount || 0, t.backedOffCount = t.backedOffCount || 0, t.step === o("WAPersistedJobManager").FINISHED_JOB) {
				var P = t.waitUntil, N = o("WATimeUtils").secondsUntil($);
				return P != null && o("WATimeUtils").isInFuture(P) && N > 0 && (o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["", ": skew detected, adjusting accordingly"])), q(t)), P = o("WATimeUtils").castToUnixTime(P - N), o("WATimeUtils").isInFuture(P) && (t.stepFirstStartTime = o("WATimeUtils").castToUnixTime($ - N), t.waitUntil = P, await n.updatePersistedJob(t))), (P == null || !o("WATimeUtils").isInFuture(P)) && (o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["", ": removing completed, expired job from db"])), q(t)), await n.deletePersistedJob(t.jobId)), l.delete(t.jobId), t.current;
			}
			var M = t.step !== o("WAPersistedJobManager").UNSTARTED_JOB ? T.find(function(e) {
				return e.stepName === t.step;
			}) : T[0];
			if (!M) return o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
				"No implementation for ",
				".",
				""
			])), t.type, t.step).sendLogs("missing-job-step"), await n.deletePersistedJob(t.jobId), null;
			t.step = M.stepName;
			var w = function() {
				var e = t.waitUntil, a = Promise.resolve();
				if (e != null) {
					var l = o("WATimeUtils").futureUnixTime(o("WATimeUtils").DAY_SECONDS);
					e > l ? (o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
						"",
						": trim wait from ",
						" to ",
						""
					])), V(t), e, l), t.waitUntil = l, a = n.updatePersistedJob(t).then(function() {
						return o("WATimeUtils").delayUntil(l);
					})) : (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
						"",
						": delaying until ",
						""
					])), V(t), e), a = o("WATimeUtils").delayUntil(e));
				}
				return a.then(function() {
					var e = function() {
						return t.waitUntil = null, o("WATimeUtils").happenedWithin($, o("WATimeUtils").DAY_SECONDS) || t.stepHardStartCountAfterTimeout++, n.updatePersistedJob(t);
					};
					return i.$10(t, x, n, e, r).catch(function(e) {
						if (e instanceof o("WAPersistedJobManager").RetryOnBackoff) {
							var a;
							o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["", ": RetryOnBackoff"])), V(t)), (a = r.eventFlow) == null || a.addPoint("retry_on_backoff");
							var i = o("WAPromiseBackoffs").getDelay(++t.backedOffCount, e.backoffOptions);
							return t.waitUntil = o("WATimeUtils").futureUnixTime(Math.ceil(i / 1e3)), t.stepHardStartCountAfterTimeout > 0 && --t.stepHardStartCountAfterTimeout, n.updatePersistedJob(t).then(w);
						} else {
							if (!(e instanceof o("WAPersistedJobManager").NonRetryableError) && t.stepUnexpectedErrorCount < F) {
								var l;
								return (l = r.eventFlow) == null || l.addPoint("retry_on_unexpected_error"), o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose([
									"",
									": Unhandled exception. Tried ",
									" times"
								])), V(t), t.stepUnexpectedErrorCount), o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
									"",
									": Unhandled exception: ",
									""
								])), V(t), e), t.stepUnexpectedErrorCount++, n.updatePersistedJob(t).then(w);
							}
							throw e;
						}
					});
				});
			}, A = w(), O = A.then(async function(e) {
				o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["", ": finished job"])), V(t));
				var r = null;
				try {
					r = c(t.jobId, t.type, t.original, e);
				} catch (e) {
					o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
						"onJobFinished for ",
						" threw exception ",
						""
					])), t.type, e).sendLogs("onJobFinished-threw");
				}
				r != null && r > 0 ? (t.waitUntil = o("WATimeUtils").futureUnixTime(Math.ceil(r / 1e3)), t.step = o("WAPersistedJobManager").FINISHED_JOB, t.current = e, t.stepFirstStartTime = o("WATimeUtils").unixTime(), await n.updatePersistedJob(t)) : (await n.deletePersistedJob(t.jobId), l.delete(t.jobId));
			}, async function(e) {
				o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" failed with error ",
					""
				])), t.type, e).sendLogs("job-threw-exception-" + t.type);
				var r = x.find(function(e) {
					return e.stepName === t.step;
				});
				if (!r) o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose([
					"",
					": ",
					" step not found"
				])), t.type, t.step);
				else {
					var a = r.info(t.current, t.original, G(t, i.isRestartAfterCrash));
					a.stopRetryIf != null && await a.stopRetryIf.onStopRetry(t.current, t.original, G(t, i.isRestartAfterCrash));
				}
				await n.deletePersistedJob(t.jobId), l.delete(t.jobId);
			});
			try {
				d(t.jobId, t.type, t.original);
			} catch (e) {
				o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
					"onJobStarted for ",
					" threw exception ",
					""
				])), t.type, e).sendLogs("onJobStarted-threw");
			}
			return O.then(function() {
				return A;
			});
		}, n.addPersistedJobImplementation = function(t, n) {
			var e = this.deprecatedJobs, r = this.implementationLoaders;
			if (r.has(t)) {
				o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose(["addPersistedJobImplementation called twice for ", ""])), t).sendLogs("repeat-job-loader");
				return;
			}
			e && e[t], r.set(t, n);
		}, n.fireAndForget = function(t) {
			var e = this;
			if (this.$1.indexOf(t.type) === -1) {
				o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["", ": running in forced non-persisted mode"])), t.type), this.fireAndForgetNonPersisted(t);
				return;
			}
			o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["", ": running in persisted mode"])), t.type), O({
				code: async function(r) {
					var n = { eventFlow: r };
					return await e.initialJobsPromise, r.addPoint("initial_jobs_promise_fulfilled"), e.$6(t, e.accessors, n).then(function(t) {
						return e.$4(t, e.accessors, n);
					});
				},
				annotations: {
					string: { name: t.type },
					bool: { offlineQueueMode: this.offlineQueueMode }
				}
			});
		}, n.waitUntilPersisted = async function(t) {
			var e = this;
			if (this.$1.indexOf(t.type) === -1) return o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["", ": running in forced non-persisted mode"])), t.type), this.fireAndForgetNonPersisted(t), Promise.resolve();
			o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["", ": running in persisted mode"])), t.type);
			var n = B({
				string: { name: t.type },
				bool: { offlineQueueMode: this.offlineQueueMode }
			});
			return await this.initialJobsPromise, n.addPoint("initial_jobs_promise_fulfilled"), this.$6(t, this.accessors, { eventFlow: n }).then(function(t) {
				O({
					code: function(r) {
						var n = { eventFlow: r };
						return e.$4(t, e.accessors, n);
					},
					eventFlow: n
				});
			}).catch(function(e) {
				throw n.endFail("error", { string: { error: "" + e } }), e;
			});
		}, n.waitUntilCompleted = function(t) {
			var e = this;
			return this.$1.indexOf(t.type) === -1 ? (o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose(["", ": running in forced non-persisted mode"])), t.type), this.waitUntilCompletedNonPersisted(t)) : (o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose(["", ": running in persisted mode"])), t.type), O({
				code: async function(r) {
					var n = { eventFlow: r };
					return await e.initialJobsPromise, r.addPoint("initial_jobs_promise_fulfilled"), e.$6(t, e.accessors, n).then(function(t) {
						return e.$4(t, e.accessors, n);
					});
				},
				annotations: {
					string: { name: t.type },
					bool: { offlineQueueMode: this.offlineQueueMode }
				}
			}));
		}, n.fireAndForgetNonPersisted = function(t) {
			var e = this;
			O({
				code: async function(r) {
					var n = { eventFlow: r };
					return await e.initialJobsPromise, r.addPoint("initial_jobs_promise_fulfilled"), e.$6(t, e.inMemoryAccessors, n).then(function(t) {
						return e.$4(t, e.inMemoryAccessors, n);
					});
				},
				annotations: {
					string: { name: t.type },
					bool: { offlineQueueMode: this.offlineQueueMode }
				}
			});
		}, n.waitUntilCompletedNonPersisted = function(t) {
			var e = this;
			return O({
				code: async function(r) {
					var n = { eventFlow: r };
					return await e.initialJobsPromise, r.addPoint("initial_jobs_promise_fulfilled"), e.$6(t, e.inMemoryAccessors, n).then(function(t) {
						return e.$4(t, e.inMemoryAccessors, n);
					});
				},
				annotations: {
					string: { name: t.type },
					bool: { offlineQueueMode: this.offlineQueueMode }
				}
			});
		}, t;
	})();
	function q(e) {
		return "Job[" + e.jobId + "] (" + e.type + ")";
	}
	function U(e) {
		return "[Job " + e.type + "] ";
	}
	function V(e) {
		return "Job[" + e.jobId + "] (" + e.type + "." + e.step + ")";
	}
	function H(e, t, n) {
		e === "unsatisfiable" ? o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
			"",
			" halting because of ",
			""
		])), V(n), t) : e === "unsatisfied" && o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
			"",
			" waiting on ",
			""
		])), V(n), t);
	}
	function G(e, t, n) {
		return t === void 0 && (t = !1), {
			jobStartTime: e.startTime,
			afterCrash: t,
			interruptJob: z,
			eventFlow: n
		};
	}
	function z(e) {
		return new (o("WAPersistedJobManager")).InterruptJob(e);
	}
	l.PersistedJobManager = W;
}), 98);
