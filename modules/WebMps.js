__d("WebMps", [
	"DateConsts",
	"MpsDeletedCleaner",
	"MpsEphemeralCleaner",
	"MpsLogger",
	"MpsReverbDbDump",
	"MpsReverbInit",
	"MpsTypes",
	"Promise",
	"QPLFlow",
	"TaskSchedulerPriority",
	"WAPromiseQueue",
	"WAResultOrError",
	"WATimeUtils",
	"WAWaitForUserUnblocked",
	"WebMpsBatchLoadMessage",
	"WebMpsBatchLoadMessages",
	"WebMpsInsertionCleaners",
	"WebMpsInsertionFlow",
	"WebMpsLoadDeletedMessages",
	"WebMpsPostprocess",
	"WebMpsPurgeDeletedPayload",
	"WebMpsPurgeDeletions",
	"WebMpsPurgeExpiredMessages",
	"WebMpsScheduler",
	"WmiMultiQplTracker",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe",
	"getSafeQplErrorMessage",
	"justknobx",
	"memoizeWithArgsLFUCache",
	"mergeMaps",
	"qpl",
	"schedulePeriodicTask"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["debug"], s = ["config"], u = ["debug"], c, d;
	function m(e) {
		return JSON.stringify(e);
	}
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.db, n = e.dependencies, a = e.getMpsExtensionConfiguration;
			if (d != null) throw r("err")("MPS already initialised");
			yield o("MpsReverbInit").initReverb(t);
			var i = new f(a(), n);
			return d = i, i;
		}), _.apply(this, arguments);
	}
	var f = (function() {
		function t(t, a) {
			var i = this;
			this.$3 = [], this.$6 = new (o("WAPromiseQueue")).PromiseQueue(), this.batchLoadMessage = function(e) {
				var t, n, a, l, s = e.config, u = e.debug, c = e.messageIds, d = e.threadId, m = {
					persistToReverb: (t = s == null ? void 0 : s.persistToReverb) != null ? t : "persist",
					shouldFetchSupplementals: (n = s == null ? void 0 : s.shouldFetchSupplementals) != null ? n : !0,
					shouldFetchTags: (a = s == null ? void 0 : s.shouldFetchTags) != null ? a : !0,
					strategy: (l = s == null ? void 0 : s.strategy) != null ? l : "full-fetch"
				};
				return o("WebMpsScheduler").mpsScheduler().run(function() {
					return i.$2.batchLoad({
						config: m,
						messageIds: c,
						metric: null,
						threadId: d
					});
				}, {
					metrics: {
						annotations: { string: {
							purpose: u.purpose,
							strategy: m.strategy
						} },
						customFlags: { runtimeReliability: !0 },
						eventSamplingRate: r("justknobx")._("4538")
					},
					name: "batch-load-message",
					priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY
				}).promise.then(function(e) {
					return i.$10(e.filter(Boolean), m), o("WAResultOrError").makeResult(e);
				}).catch(function(e) {
					var t = r("getErrorSafe")(e);
					return o("MpsLogger").MpsLogger().catching(t).mustfix("Runtime error in batchLoadMessage"), o("WAResultOrError").DEPRECATED_makeError("runtime-error", t);
				});
			}, this.$11 = r("memoizeWithArgsLFUCache")(function(e) {
				var t, a, l, s, u = e.config, c = e.debug, d = e.messageId, m = e.threadId, p = {
					persistToReverb: (t = u == null ? void 0 : u.persistToReverb) != null ? t : "persist",
					shouldFetchSupplementals: (a = u == null ? void 0 : u.shouldFetchSupplementals) != null ? a : !0,
					shouldFetchTags: (l = u == null ? void 0 : u.shouldFetchTags) != null ? l : !0,
					strategy: (s = u == null ? void 0 : u.strategy) != null ? s : "full-fetch"
				};
				return o("WebMpsScheduler").mpsScheduler().run(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield i.$2.load({
						config: p,
						messageId: d,
						metric: null,
						threadId: m
					});
					return e != null && i.$10([e], p), e;
				}), {
					metrics: {
						annotations: { string: {
							purpose: c.purpose,
							strategy: p.strategy
						} },
						customFlags: { runtimeReliability: !0 },
						eventSamplingRate: r("justknobx")._("4536")
					},
					name: "load-message",
					priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY
				}).promise;
			}, function(t) {
				var n = t.debug, r = babelHelpers.objectWithoutPropertiesLoose(t, e);
				return m(babelHelpers.extends({}, r, { ebEnabled: i.$1.eb.isEbEnabled() }));
			}, 1, function(e) {
				i.$3.push(e);
			}), this.loadMessage = function(e) {
				return i.$11(e).then(function(e) {
					return o("WAResultOrError").makeResult(e);
				}).catch(function(e) {
					i.$7();
					var t = r("getErrorSafe")(e);
					return o("MpsLogger").MpsLogger().catching(t).mustfix("Runtime error in loadMessage"), o("WAResultOrError").DEPRECATED_makeError("runtime-error", t);
				});
			}, this.$12 = function(e) {
				var t, n, a = e.config, l = e.debug, s = e.ranges;
				return o("WebMpsScheduler").mpsScheduler().run(function() {
					return o("WebMpsBatchLoadMessages").batchLoadMessages(s.map(function(e) {
						var t = e.direction, n = e.from, r = e.numMessages, a = e.threadId;
						return {
							direction: t,
							from: [o("MpsTypes").toTimestamp(o("WATimeUtils").miAdjustTimestamp(n[0])), n[1]],
							numMessages: r,
							threadId: a
						};
					}), i.$1, a, null);
				}, {
					metrics: {
						annotations: { string: {
							purpose: l.purpose,
							strategy: (t = a == null ? void 0 : a.strategy) != null ? t : "full-fetch"
						} },
						customFlags: { runtimeReliability: !0 },
						eventSamplingRate: r("justknobx")._("4538")
					},
					name: "batch-load-messages",
					priority: (n = a.priority) != null ? n : o("TaskSchedulerPriority").BLOCKING_PRIORITY
				}).promise;
			}, this.batchLoadMessages = function(e) {
				var t, n, a, l, u, c, d, m, p = e.config, _ = babelHelpers.objectWithoutPropertiesLoose(e, s), f = {
					persistToReverb: (t = p == null ? void 0 : p.persistToReverb) != null ? t : "persist",
					priority: (n = p == null ? void 0 : p.priority) != null ? n : o("TaskSchedulerPriority").BLOCKING_PRIORITY,
					shouldFetchSupplementals: (a = p == null ? void 0 : p.shouldFetchSupplementals) != null ? a : !0,
					shouldFetchTags: (l = p == null ? void 0 : p.shouldFetchTags) != null ? l : !0,
					shouldIgnoreLocalOnly: (u = p == null ? void 0 : p.shouldIgnoreLocalOnly) != null ? u : !1,
					strategy: (c = p == null ? void 0 : p.strategy) != null ? c : "full-fetch",
					tagsFilter: (d = p == null ? void 0 : p.tagsFilter) != null ? d : "all",
					useMessageVisibility: (m = p == null ? void 0 : p.useMessageVisibility) != null ? m : !1
				};
				return i.$12(babelHelpers.extends({}, _, { config: f })).then(function(e) {
					var t = e.flatMap(function(e) {
						return e.messages;
					});
					return i.$10(t, f), o("WAResultOrError").makeResult(e);
				}).catch(function(e) {
					var t = r("getErrorSafe")(e);
					return o("MpsLogger").MpsLogger().catching(t).mustfix("Runtime error in batchLoadMessages"), o("WAResultOrError").DEPRECATED_makeError("runtime-error", t);
				});
			}, this.$13 = r("memoizeWithArgsLFUCache")(function(e) {
				var t, n, a, l, s, u, c, d, m = e.config, p = e.debug, _ = e.direction, f = e.from, g = e.numMessages, h = e.source, y = e.threadId, C = {
					persistToReverb: (t = m == null ? void 0 : m.persistToReverb) != null ? t : "persist",
					shouldFetchSupplementals: (n = m == null ? void 0 : m.shouldFetchSupplementals) != null ? n : !0,
					shouldFetchTags: (a = m == null ? void 0 : m.shouldFetchTags) != null ? a : !0,
					shouldIgnoreLocalOnly: (l = m == null ? void 0 : m.shouldIgnoreLocalOnly) != null ? l : !1,
					source: h,
					strategy: (s = m == null ? void 0 : m.strategy) != null ? s : "full-fetch",
					tagsFilter: (u = m == null ? void 0 : m.tagsFilter) != null ? u : "all",
					useMessageVisibility: (c = m == null ? void 0 : m.useMessageVisibility) != null ? c : !1
				};
				return o("WebMpsScheduler").mpsScheduler().run(function() {
					return o("WebMpsBatchLoadMessages").batchLoadMessages([{
						direction: _,
						from: [o("MpsTypes").toTimestamp(o("WATimeUtils").miAdjustTimestamp(f[0])), f[1]],
						numMessages: g,
						threadId: y
					}], i.$1, C, null).then(function(e) {
						e.length > 1 && o("MpsLogger").MpsLogger().mustfix("loadMessages returned more than one range");
						var t = e.at(0);
						if (t == null) throw r("err")("loadMessages returned no result. Likely this is the result of both reverb and EB queries failing");
						return i.$10(t.messages, C), t;
					});
				}, {
					metrics: {
						annotations: { string: {
							purpose: p.purpose,
							strategy: C.strategy
						} },
						customFlags: { runtimeReliability: !0 },
						eventSamplingRate: r("justknobx")._("4538")
					},
					name: "load-messages",
					priority: (d = m == null ? void 0 : m.priority) != null ? d : o("TaskSchedulerPriority").BLOCKING_PRIORITY
				}).promise;
			}, function(e) {
				var t, n = e.debug, r = babelHelpers.objectWithoutPropertiesLoose(e, u);
				return m(babelHelpers.extends({}, r, {
					config: babelHelpers.extends({}, r.config, { tagsFilter: (function(e) {
						if (e === "all" || e === void 0) return "all";
						{
							var t = e;
							return Array.from(t.values());
						}
					})((t = r.config) == null ? void 0 : t.tagsFilter) }),
					ebEnabled: i.$1.eb.isEbEnabled()
				}));
			}, 10 / 60, function(e) {
				i.$3.push(e);
			}), this.loadMessages = function(e) {
				return i.$13(e).then(function(e) {
					return o("WAResultOrError").makeResult(e);
				}).catch(function(e) {
					i.$7();
					var t = r("getErrorSafe")(e);
					return o("MpsLogger").MpsLogger().catching(t).mustfix("Runtime error in loadMessages"), o("WAResultOrError").DEPRECATED_makeError("runtime-error", t);
				});
			}, this.extensionConfiguration = t, this.$1 = a, this.$2 = new (o("WebMpsBatchLoadMessage")).WebMpsPointQueryApi(a), this.$4(), this.$5(function(e) {
				return a.generateDeletionMessage(e);
			});
		}
		var a = t.prototype;
		return a.saveNewMessages = function(t, a) {
			var e = this, i = (function() {
				var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					e.$7();
					var n = { messageToQpl: o("WmiMultiQplTracker").WmiMultiQplTracker.from(t.map(function(e) {
						return [e.message.messageId, o("QPLFlow").startQPLFlow(r("qpl")._(1056834650, "494"), { annotations: { string: {
							messageId: e.message.messageId,
							senderId: e.message.senderId,
							threadId: e.message.threadId
						} } })];
					})) };
					n.messageToQpl.all(t.map(function(e) {
						return e.message.messageId;
					})).addPoint("preprocess_start");
					var a = yield e.extensionConfiguration.preprocessors.run({
						ctx: n,
						payloadList: t
					}), i = a.errors, l = a.payloadList;
					n.messageToQpl.all(l.map(function(e) {
						return e.message.messageId;
					})).addPoint("preprocess_end"), i.entries().forEach(function(e) {
						var t = e[0], r = e[1];
						n.messageToQpl.endFail(t, "preprocess-error", o("getSafeQplErrorMessage").getSafeQPLErrorMessage(r));
					}), n.messageToQpl.all(l.map(function(e) {
						return e.message.messageId;
					})).addPoint("schedule_cleaners_start"), yield o("WebMpsInsertionCleaners").scheduleCleaners(l), n.messageToQpl.all(l.map(function(e) {
						return e.message.messageId;
					})).addPoint("schedule_cleaners_end"), n.messageToQpl.all(l.map(function(e) {
						return e.message.messageId;
					})).addPoint("persist_start");
					var s = yield o("WebMpsInsertionFlow").persistNewMessages(l), u = s.errors, c = s.msgs;
					n.messageToQpl.all(c.map(function(e) {
						return e.message.messageId;
					})).addPoint("persist_end"), u.entries().forEach(function(e) {
						var t = e[0], r = e[1];
						n.messageToQpl.endFail(t, "persist-error", o("getSafeQplErrorMessage").getSafeQPLErrorMessage(r));
					}), n.messageToQpl.all(c.map(function(e) {
						return e.message.messageId;
					})).addPoint("persisted"), n.messageToQpl.all(c.map(function(e) {
						return e.message.messageId;
					})).addPoint("critical_postprocess_start");
					var d = yield e.$8(c, n);
					return n.messageToQpl.all(c.map(function(e) {
						return e.message.messageId;
					})).addPoint("critical_postprocess_end"), n.messageToQpl.all(c.map(function(e) {
						return e.message.messageId;
					})).addPoint("non_critical_postprocess_start"), e.$9(c, n), n.messageToQpl.all(c.map(function(e) {
						return e.message.messageId;
					})).addPoint("non_critical_postprocess_end"), c.forEach(function(e) {
						n.messageToQpl.endSuccess(e.message.messageId);
					}), r("mergeMaps")(i, u, d);
				});
				return function() {
					return a.apply(this, arguments);
				};
			})();
			return this.$6.enqueue(function() {
				return o("WebMpsScheduler").mpsScheduler().run(i, {
					metrics: {
						annotations: { string: { source: a.source } },
						customFlags: { runtimeReliability: !0 },
						eventSamplingRate: r("justknobx")._("4535")
					},
					name: "save-new-messages",
					priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY
				}).promise;
			});
		}, a.$9 = function(t, n) {
			o("WebMpsPostprocess").runNonCriticalPostprocessor(t, this.extensionConfiguration.postProcessors.nonCritical, n).catch(function(e) {
				var t = r("getErrorSafe")(e);
				o("MpsLogger").MpsLogger().catching(t).mustfix("Non-critical postprocessor failed with runtime error");
			});
		}, a.$8 = function(t, n) {
			return o("WebMpsPostprocess").runCriticalPostprocessor(t, this.extensionConfiguration.postProcessors.critical, n).catch(function(e) {
				var t = r("getErrorSafe")(e);
				return o("MpsLogger").MpsLogger().catching(t).mustfix("Critical postprocessor failed with runtime error"), new Map();
			});
		}, a.purgeDeletions = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					return yield o("WAWaitForUserUnblocked").waitForUserUnblocked(), o("WebMpsScheduler").mpsScheduler().run(o("WebMpsPurgeDeletions").purgeDeletions, {
						name: "purge-deletions",
						priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
					}).promise;
				} catch (e) {
					return o("MpsLogger").MpsLogger().catching(r("getErrorSafe")(e)).mustfix("failed running purgeDeletions"), 0;
				}
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.purgeDeletedPayload = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					return yield o("WAWaitForUserUnblocked").waitForUserUnblocked(), o("WebMpsScheduler").mpsScheduler().run(o("WebMpsPurgeDeletedPayload").purgeDeletedPayload, {
						name: "purge-deleted-payload",
						priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
					}).promise;
				} catch (e) {
					return o("MpsLogger").MpsLogger().catching(r("getErrorSafe")(e)).mustfix("failed running purgeDeletedPayload"), 0;
				}
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.getNextDeletionTimestampMs = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					return yield o("WAWaitForUserUnblocked").waitForUserUnblocked(), o("WebMpsScheduler").mpsScheduler().run(o("WebMpsPurgeDeletedPayload").getNextDeletionTimestampMs, {
						name: "get-next-deletion-timestamp-ms",
						priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
					}).promise;
				} catch (e) {
					o("MpsLogger").MpsLogger().catching(r("getErrorSafe")(e)).mustfix("failed running getNextDeletionTimestampMs");
				}
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.purgeExpiredMessages = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					return yield o("WAWaitForUserUnblocked").waitForUserUnblocked(), o("WebMpsScheduler").mpsScheduler().run(function() {
						return o("WebMpsPurgeExpiredMessages").purgeExpiredMessages(e, null);
					}, {
						metrics: { eventSamplingRate: r("justknobx")._("4539") },
						name: "purge-expired-messages",
						priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
					}).promise;
				} catch (e) {
					return o("MpsLogger").MpsLogger().catching(r("getErrorSafe")(e)).mustfix("failed running purgeExpiredMessages"), 0;
				}
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.getNextExpiryTimestampMs = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					return yield o("WAWaitForUserUnblocked").waitForUserUnblocked(), o("WebMpsScheduler").mpsScheduler().run(o("WebMpsPurgeExpiredMessages").getNextExpiryTimestampMs, {
						metrics: { eventSamplingRate: r("justknobx")._("4539") },
						name: "get-next-expire-timestamp-ms",
						priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
					}).promise;
				} catch (e) {
					o("MpsLogger").MpsLogger().catching(r("getErrorSafe")(e)).mustfix("failed running getNextExpiryTimestampMs");
				}
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.debugDbDump = function() {
			return o("MpsReverbDbDump").debugGetReverbDbDump();
		}, a.spamReportLoadMessages = function(t) {
			var e = this;
			return o("WebMpsScheduler").mpsScheduler().run(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var r = yield (c || (c = n("Promise"))).all([e.$13({
					config: {
						persistToReverb: "no-persist",
						shouldFetchSupplementals: !0,
						shouldFetchTags: !1,
						shouldIgnoreLocalOnly: !1,
						strategy: "local-only",
						tagsFilter: "all"
					},
					debug: { purpose: "get-latest-msgs-for-spam-report" },
					direction: "desc",
					from: [o("MpsTypes").toTimestamp(Number.MAX_SAFE_INTEGER), null],
					numMessages: t.numMessages,
					threadId: t.threadId
				}), o("WebMpsLoadDeletedMessages").loadDeletedMessages(t, e.$1.decryptedProtobufToFullMessage)]), a = r[0], i = r[1], l = a.messages.filter(function(e) {
					return !i.tombstones.has(e.toplevelProtobuf.messageId);
				});
				return [].concat(l, i.messages).toSorted(function(e, t) {
					return t.toplevelProtobuf.timestampMs - e.toplevelProtobuf.timestampMs;
				}).slice(0, t.numMessages);
			}), { name: "get-latest-msgs-for-spam-report" }).promise;
		}, a.$7 = function() {
			this.$3.forEach(function(e) {
				return e();
			});
		}, a.$10 = function(t, n) {
			var e = this.extensionConfiguration.readSideEffects, a = t.filter(function(e) {
				return !o("MpsTypes").isVisibilityMetadataMessage(e);
			});
			if (!(e == null || a.length === 0)) try {
				e(a, n);
			} catch (e) {
				o("MpsLogger").MpsLogger().catching(r("getErrorSafe")(e)).mustfix("readSideEffects failed");
			}
		}, a.$4 = function() {
			var e = this;
			o("schedulePeriodicTask").schedulePeriodicTask(function() {
				return e.purgeDeletions();
			}, o("DateConsts").MS_PER_MIN * 20);
		}, a.$5 = function(t) {
			var e = this;
			o("MpsEphemeralCleaner").startMpsEphemeralCleaner({
				getNextTs: function() {
					return e.getNextExpiryTimestampMs();
				},
				purgeEnabled: function() {
					return !0;
				},
				removeExpired: function() {
					return e.purgeExpiredMessages(t);
				}
			}), o("MpsDeletedCleaner").startMpsDeletedCleaner({
				getNextTs: function() {
					return e.getNextDeletionTimestampMs();
				},
				purgeEnabled: function() {
					return !0;
				},
				removeExpired: function() {
					return e.purgeDeletedPayload();
				}
			});
		}, t;
	})();
	function g() {
		if (d == null) throw r("err")("MPS not initialised");
		return d;
	}
	function h() {
		d = void 0;
	}
	l.makeMps = p, l.mps = g, l.resetMps_TEST_ONLY = h;
}), 98);
