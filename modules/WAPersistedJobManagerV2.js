__d("WAPersistedJobManagerV2", [
	"Promise",
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
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O = 1;
	function B(e) {
		var t = e.code, n = e.annotations, r = n === void 0 ? {} : n, o = e.eventFlow, a = o === void 0 ? W(r) : o;
		return t(a).then(function(e) {
			return a.endSuccess(), e;
		}).catch(function(e) {
			throw a.endFail("error", { string: { error: "" + e } }), e;
		});
	}
	function W(e) {
		return e === void 0 && (e = {}), o("QPLFlow").startNoopQPLFlow();
	}
	var q = (function() {
		function t(t) {
			var r = this;
			this.$1 = [];
			var a = t.accessors, i = t.ignoreForceNonPersistedJobList, l = t.isRestartAfterCrash, u = t.unfinishedJobEntries;
			this.getOrchestratorDelegate = o("WAOrchestrator").getInstanceDelegate(), this.activeJobs = new Map(), this.implementationLoaders = new Map(), this.implementations = new Map(), this.stepBlockers = new WeakMap(), this.accessors = a, this.isRestartAfterCrash = l || !1, this.listeners = t.listeners, this.deprecatedJobs = t.deprecatedJobs, this.inMemoryAccessors = o("WaJobInMemoryAccessors").getJobInMemoryAccessors(), this.offlineQueueMode = !0, this.$1 = i, t.offlineQueueCompletePromise != null ? t.offlineQueueCompletePromise.finally(function() {
				r.offlineQueueMode = !1;
			}) : this.offlineQueueMode = !1, this.initialJobsPromise = u.then(function(t) {
				var a = [], i = [];
				return t.forEach(function(e) {
					e.stepHardStartCountAfterTimeout >= 5 ? a.push(e) : i.push(e);
				}), (F || (F = n("Promise"))).all(a.map(function(t) {
					return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"",
						": stuck on the step ",
						", aborting the job"
					])), V(t), t.step).sendLogs("job-stuck-" + t.type), r.accessors.deletePersistedJob(t.jobId);
				})).then(function() {
					i.forEach(function(e) {
						var t = r.$2(e.jobId);
						if (t.alreadyActive === !0) {
							o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[JOB MANAGER] Restarting job with the same id"])));
							return;
						}
						t.deferred.resolve(B({
							code: function(n) {
								return r.$3(e, r.accessors, { eventFlow: n });
							},
							annotations: {
								string: { name: e.type },
								bool: { offlineQueueMode: r.offlineQueueMode }
							}
						}));
					});
				});
			});
		}
		var a = t.prototype;
		return a.$4 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
				var a;
				n === void 0 && (n = {});
				var i = this.$2(e);
				if ((a = n.eventFlow) == null || a.addPoint("start_load_and_run", { bool: { skipped: i.alreadyActive } }), i.alreadyActive === !0) return i.deferred;
				var l = yield t.readPersistedJob(e);
				if (l == null) throw o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Persisted job missing for given ID"]))).sendLogs("missing-job-entry"), r("err")("Persisted job missing for given ID " + e);
				return i.deferred.resolve(this.$3(l, t, n)), i.deferred.promise;
			});
			function t(t, n, r) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.$3 = function(t, n, r) {
			var e, a;
			return r === void 0 && (r = {}), (e = r.eventFlow) == null || e.addPoint("enqueueing_job", { string: { name: t.type } }), this.getOrchestratorDelegate(((a = t.scheduleConfig) == null ? void 0 : a.priority) === o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP, r.eventFlow).enqueue(t.type, this.$5(t, n, r), t.scheduleConfig, r.eventFlow);
		}, a.$6 = function(t, n, r) {
			var e = this;
			return r === void 0 && (r = {}), n.maybeCreateJob(t).then(function(t) {
				var o, a = t.id;
				return (o = r.eventFlow) == null || o.addPoint("job_persisted", {
					int: { jobId: a },
					bool: { nonPersisted: n === e.inMemoryAccessors }
				}), a;
			});
		}, a.$2 = function(t) {
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
		}, a.$5 = function(t, n, r) {
			var e = this;
			return function() {
				return e.$7(t, n, r);
			};
		}, a.$8 = function(t) {
			var e = this.implementationLoaders, n = this.implementations, r = n.get(t);
			if (r) return r;
			var o = e.get(t);
			if (!o) return null;
			var a = o();
			return n.set(t, a), a;
		}, a.$9 = function(t, r) {
			if (r == null || r.length === 0) return (F || (F = n("Promise"))).resolve();
			var e = this.stepBlockers, a = e.get(r);
			return a == null && (a = o("WAJobRequirement").joinRequirements(r.map(function(e) {
				return e();
			}), G), e.set(r, a)), a(t);
		}, a.$10 = function(t, n, r, a, i) {
			var e, l = this;
			i === void 0 && (i = {});
			var s = t.step;
			(e = i.eventFlow) == null || e.addPoint("start_step");
			var u = n.findIndex(function(e) {
				return e.stepName === s;
			}), m = n[u].info(t.current, t.original, z(t, this.isRestartAfterCrash)), p = m.code, _ = m.requirements, f = this.$9(t, _);
			return a && (f = f.then(a)), f.then(function() {
				var e;
				return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ": running step"])), H(t)), (e = i.eventFlow) == null || e.addPoint("run_step"), p(t.current, t.original, z(t, l.isRestartAfterCrash, i.eventFlow));
			}).then(function(e) {
				var a;
				if ((a = i.eventFlow) == null || a.addPoint("step_is_complete"), e instanceof o("WAPersistedJobManager").InterruptJob) return o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ": InterruptJob"])), H(t)), e.result;
				var s = u + 1;
				if (s >= n.length) return e;
				var c = n[s];
				return t.step = c.stepName, t.current = e, t.stepHardStartCountAfterTimeout = 0, t.stepFirstStartTime = o("WATimeUtils").unixTime(), t.stepUnexpectedErrorCount = 0, t.waitUntil = null, t.backedOffCount = 0, r.updatePersistedJob(t).then(function() {
					return l.$10(t, n, r, void 0, i);
				});
			});
		}, a.$7 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
				var a, i, l = this;
				r === void 0 && (r = {});
				var s = this.activeJobs, u = this.deprecatedJobs, c = this.listeners, d = c.onJobFinished, T = c.onJobStarted;
				(a = r.eventFlow) == null || a.addPoint("run_job");
				var D = yield this.$8(e.type), x = u[e.type];
				if (!D) {
					if (x) {
						if (x === "NOOP") return o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["No implementation for deprecated ", ", job deleted"])), e.type), yield t.deletePersistedJob(e.jobId), null;
					} else return o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["No implementation for ", ". Maybe it should have been put to the deprecated list?"])), e.type).sendLogs("missing-job-implementation"), yield t.deletePersistedJob(e.jobId), null;
					D = yield x();
				}
				var $ = D;
				x && o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Running deprecated job ", ""])), e.type);
				var P = (i = e.stepFirstStartTime) != null ? i : o("WATimeUtils").unixTime();
				if (e.stepFirstStartTime = P, e.stepUnexpectedErrorCount = e.stepUnexpectedErrorCount || 0, e.backedOffCount = e.backedOffCount || 0, e.step === o("WAPersistedJobManager").FINISHED_JOB) {
					var N = e.waitUntil, M = o("WATimeUtils").secondsUntil(P);
					return N != null && o("WATimeUtils").isInFuture(N) && M > 0 && (o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["", ": skew detected, adjusting accordingly"])), U(e)), N = o("WATimeUtils").castToUnixTime(N - M), o("WATimeUtils").isInFuture(N) && (e.stepFirstStartTime = o("WATimeUtils").castToUnixTime(P - M), e.waitUntil = N, yield t.updatePersistedJob(e))), (N == null || !o("WATimeUtils").isInFuture(N)) && (o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["", ": removing completed, expired job from db"])), U(e)), yield t.deletePersistedJob(e.jobId)), s.delete(e.jobId), e.current;
				}
				var w = e.step !== o("WAPersistedJobManager").UNSTARTED_JOB ? D.find(function(t) {
					return t.stepName === e.step;
				}) : D[0];
				if (!w) return o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
					"No implementation for ",
					".",
					""
				])), e.type, e.step).sendLogs("missing-job-step"), yield t.deletePersistedJob(e.jobId), null;
				e.step = w.stepName;
				var A = function() {
					var a = e.waitUntil, i = (F || (F = n("Promise"))).resolve();
					if (a != null) {
						var s = o("WATimeUtils").futureUnixTime(o("WATimeUtils").DAY_SECONDS);
						a > s ? (o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
							"",
							": trim wait from ",
							" to ",
							""
						])), H(e), a, s), e.waitUntil = s, i = t.updatePersistedJob(e).then(function() {
							return o("WATimeUtils").delayUntil(s);
						})) : (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
							"",
							": delaying until ",
							""
						])), H(e), a), i = o("WATimeUtils").delayUntil(a));
					}
					return i.then(function() {
						var n = function() {
							return e.waitUntil = null, o("WATimeUtils").happenedWithin(P, o("WATimeUtils").DAY_SECONDS) || e.stepHardStartCountAfterTimeout++, t.updatePersistedJob(e);
						};
						return l.$10(e, $, t, n, r).catch(function(n) {
							if (n instanceof o("WAPersistedJobManager").RetryOnBackoff) {
								var a;
								o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["", ": RetryOnBackoff"])), H(e)), (a = r.eventFlow) == null || a.addPoint("retry_on_backoff");
								var i = o("WAPromiseBackoffs").getDelay(++e.backedOffCount, n.backoffOptions);
								return e.waitUntil = o("WATimeUtils").futureUnixTime(Math.ceil(i / 1e3)), e.stepHardStartCountAfterTimeout > 0 && --e.stepHardStartCountAfterTimeout, t.updatePersistedJob(e).then(A);
							} else {
								if (!(n instanceof o("WAPersistedJobManager").NonRetryableError) && e.stepUnexpectedErrorCount < O) {
									var l;
									return (l = r.eventFlow) == null || l.addPoint("retry_on_unexpected_error"), o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose([
										"",
										": Unhandled exception. Tried ",
										" times"
									])), H(e), e.stepUnexpectedErrorCount), o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
										"",
										": Unhandled exception: ",
										""
									])), H(e), n), e.stepUnexpectedErrorCount++, t.updatePersistedJob(e).then(A);
								}
								throw n;
							}
						});
					});
				}, B = A(), W = B.then((function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
						o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["", ": finished job"])), H(e));
						var r = null;
						try {
							r = d(e.jobId, e.type, e.original, n);
						} catch (t) {
							o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
								"onJobFinished for ",
								" threw exception ",
								""
							])), e.type, t).sendLogs("onJobFinished-threw");
						}
						r != null && r > 0 ? (e.waitUntil = o("WATimeUtils").futureUnixTime(Math.ceil(r / 1e3)), e.step = o("WAPersistedJobManager").FINISHED_JOB, e.current = n, e.stepFirstStartTime = o("WATimeUtils").unixTime(), yield t.updatePersistedJob(e)) : (yield t.deletePersistedJob(e.jobId), s.delete(e.jobId));
					});
					return function(e) {
						return r.apply(this, arguments);
					};
				})(), (function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
						o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
							"",
							" failed with error ",
							""
						])), e.type, n).sendLogs("job-threw-exception-" + e.type);
						var r = $.find(function(t) {
							return t.stepName === e.step;
						});
						if (!r) o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose([
							"",
							": ",
							" step not found"
						])), e.type, e.step);
						else {
							var a = r.info(e.current, e.original, z(e, l.isRestartAfterCrash));
							a.stopRetryIf != null && (yield a.stopRetryIf.onStopRetry(e.current, e.original, z(e, l.isRestartAfterCrash)));
						}
						yield t.deletePersistedJob(e.jobId), s.delete(e.jobId);
					});
					return function(e) {
						return r.apply(this, arguments);
					};
				})());
				try {
					T(e.jobId, e.type, e.original);
				} catch (t) {
					o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
						"onJobStarted for ",
						" threw exception ",
						""
					])), e.type, t).sendLogs("onJobStarted-threw");
				}
				return W.then(function() {
					return B;
				});
			});
			function t(t, n, r) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.addPersistedJobImplementation = function(t, n) {
			var e = this.deprecatedJobs, r = this.implementationLoaders;
			if (r.has(t)) {
				o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose(["addPersistedJobImplementation called twice for ", ""])), t).sendLogs("repeat-job-loader");
				return;
			}
			e && e[t], r.set(t, n);
		}, a.fireAndForget = function(t) {
			var e = this;
			if (this.$1.indexOf(t.type) === -1) {
				o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["", ": running in forced non-persisted mode"])), t.type), this.fireAndForgetNonPersisted(t);
				return;
			}
			o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["", ": running in persisted mode"])), t.type), B({
				code: (function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
						var r = { eventFlow: n };
						return yield e.initialJobsPromise, n.addPoint("initial_jobs_promise_fulfilled"), e.$6(t, e.accessors, r).then(function(t) {
							return e.$4(t, e.accessors, r);
						});
					});
					function o(e) {
						return r.apply(this, arguments);
					}
					return o;
				})(),
				annotations: {
					string: { name: t.type },
					bool: { offlineQueueMode: this.offlineQueueMode }
				}
			});
		}, a.waitUntilPersisted = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = this;
				if (this.$1.indexOf(e.type) === -1) return o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["", ": running in forced non-persisted mode"])), e.type), this.fireAndForgetNonPersisted(e), (F || (F = n("Promise"))).resolve();
				o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["", ": running in persisted mode"])), e.type);
				var r = W({
					string: { name: e.type },
					bool: { offlineQueueMode: this.offlineQueueMode }
				});
				return yield this.initialJobsPromise, r.addPoint("initial_jobs_promise_fulfilled"), this.$6(e, this.accessors, { eventFlow: r }).then(function(e) {
					B({
						code: function(r) {
							var n = { eventFlow: r };
							return t.$4(e, t.accessors, n);
						},
						eventFlow: r
					});
				}).catch(function(e) {
					throw r.endFail("error", { string: { error: "" + e } }), e;
				});
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.waitUntilCompleted = function(t) {
			var e = this;
			return this.$1.indexOf(t.type) === -1 ? (o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose(["", ": running in forced non-persisted mode"])), t.type), this.waitUntilCompletedNonPersisted(t)) : (o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose(["", ": running in persisted mode"])), t.type), B({
				code: (function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
						var r = { eventFlow: n };
						return yield e.initialJobsPromise, n.addPoint("initial_jobs_promise_fulfilled"), e.$6(t, e.accessors, r).then(function(t) {
							return e.$4(t, e.accessors, r);
						});
					});
					function o(e) {
						return r.apply(this, arguments);
					}
					return o;
				})(),
				annotations: {
					string: { name: t.type },
					bool: { offlineQueueMode: this.offlineQueueMode }
				}
			}));
		}, a.fireAndForgetNonPersisted = function(t) {
			var e = this;
			B({
				code: (function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
						var r = { eventFlow: n };
						return yield e.initialJobsPromise, n.addPoint("initial_jobs_promise_fulfilled"), e.$6(t, e.inMemoryAccessors, r).then(function(t) {
							return e.$4(t, e.inMemoryAccessors, r);
						});
					});
					function o(e) {
						return r.apply(this, arguments);
					}
					return o;
				})(),
				annotations: {
					string: { name: t.type },
					bool: { offlineQueueMode: this.offlineQueueMode }
				}
			});
		}, a.waitUntilCompletedNonPersisted = function(t) {
			var e = this;
			return B({
				code: (function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
						var r = { eventFlow: n };
						return yield e.initialJobsPromise, n.addPoint("initial_jobs_promise_fulfilled"), e.$6(t, e.inMemoryAccessors, r).then(function(t) {
							return e.$4(t, e.inMemoryAccessors, r);
						});
					});
					function o(e) {
						return r.apply(this, arguments);
					}
					return o;
				})(),
				annotations: {
					string: { name: t.type },
					bool: { offlineQueueMode: this.offlineQueueMode }
				}
			});
		}, t;
	})();
	function U(e) {
		return "Job[" + e.jobId + "] (" + e.type + ")";
	}
	function V(e) {
		return "[Job " + e.type + "] ";
	}
	function H(e) {
		return "Job[" + e.jobId + "] (" + e.type + "." + e.step + ")";
	}
	function G(e, t, n) {
		e === "unsatisfiable" ? o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
			"",
			" halting because of ",
			""
		])), H(n), t) : e === "unsatisfied" && o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
			"",
			" waiting on ",
			""
		])), H(n), t);
	}
	function z(e, t, n) {
		return t === void 0 && (t = !1), {
			jobStartTime: e.startTime,
			afterCrash: t,
			interruptJob: j,
			eventFlow: n
		};
	}
	function j(e) {
		return new (o("WAPersistedJobManager")).InterruptJob(e);
	}
	l.PersistedJobManager = q;
}), 98);
