__d("MAWMessageRangeDataSourceV2", [
	"I64",
	"LSDatabaseSingleton",
	"MAWEBCombinedSwitch",
	"MAWMessageIntegrityTruncateStatus",
	"MAWMessageRangeDataExternalObservables",
	"MAWMessagesPaginationUtils",
	"MAWMessagesRangesUtils",
	"MAWPutMessagesToDB",
	"MAWSubscribeToLSTruncateMetadataThreads",
	"MAWWaitForACTThreadReadyForMLv2",
	"MLV2DataSourceLogger",
	"MLV2RangeExtensionLogger",
	"MessageRangeSet",
	"MpsLoadMessagesStep",
	"Promise",
	"asyncToGeneratorRuntime",
	"err",
	"gkx",
	"nullthrows",
	"relay-runtime",
	"switchMap"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = 5, d = (function() {
		function t(t, a) {
			var i = this;
			this.$2 = new (o("MessageRangeSet")).MessageRangeSet(), this.$3 = c, this.$4 = new (o("MAWMessageRangeDataExternalObservables")).MAWMessageRangeDataExternalObservables(), this.getOrCreateMessageRangeCoveringCursor = function(e, t) {
				var n, r;
				t == null || t.annotateMessageRangesDataSource("MAWMessageRangeDataSourceV2"), t == null || t.markQPLPoint("maw_get_or_create_range_start");
				var a = i.$2.getRangeForTimestamp(e.timestampMs);
				if (a != null) {
					t == null || t.markQPLPoint("maw_preexisting_range"), t == null || t.markQPLPoint("maw_get_or_create_range_end");
					var l = {
						maxExternalId: null,
						minExternalId: null
					};
					return i.$4.getOrCreateExternalObservableForRange(a, l);
				}
				var s = (u || (u = o("I64"))).equal(e.timestampMs, u.max_int), c = {
					hasMoreAfter: !s,
					hasMoreBefore: !0,
					isLoadingAfter: !1,
					isLoadingBefore: !1,
					maxMessageId: (n = e.messageId) != null ? n : "",
					maxTimestampMs: e.timestampMs,
					minMessageId: (r = e.messageId) != null ? r : "",
					minTimestampMs: e.timestampMs,
					threadKey: i.$1
				}, d = i.$2.upsertRange(c);
				return o("MAWMessageIntegrityTruncateStatus").setThreadLastUpsertedRange(i.$1, c, {
					maxExternalId: e == null ? void 0 : e.externalId,
					minExternalId: e == null ? void 0 : e.externalId
				}), t == null || t.markQPLPoint("maw_range_created"), t == null || t.markQPLPoint("maw_get_or_create_range_end"), i.$4.getOrCreateExternalObservableForRange(d, {
					maxExternalId: e == null ? void 0 : e.externalId,
					minExternalId: e == null ? void 0 : e.externalId
				});
			}, this.$5 = function(e) {
				var t = o("MLV2DataSourceLogger").getMLV2LoggerForThread(i.$1, e), n = o("MLV2RangeExtensionLogger").getRangeExtensionLoggerForThread(i.$1, e), r = {
					addQPLAnnotations: function(r) {
						t == null || t.addQPLAnnotations(r), n == null || n.addQPLAnnotations(r);
					},
					annotateMessageRangesDataSource: function(r) {
						t == null || t.annotateMessageRangesDataSource(r), n == null || n.annotateMessageRangesDataSource(r);
					},
					getInstanceKey: function() {
						var e;
						return (e = t == null ? void 0 : t.getInstanceKey()) != null ? e : 0;
					},
					markQPLCancel: function(r) {
						t == null || t.markQPLCancel(r), n == null || n.markQPLCancel(r);
					},
					markQPLFailure: function(r) {
						t == null || t.markQPLFailure(r), n == null || n.markQPLFailure(r);
					},
					markQPLFailureWithMsg: function(r) {
						t == null || t.markQPLFailureWithMsg(r), n == null || n.markQPLFailureWithMsg(r);
					},
					markQPLPoint: function(r, o) {
						t == null || t.markQPLPoint(r, o), n == null || n.markQPLPoint(r, o);
					},
					markQPLSuccess: function(r) {
						t == null || t.markQPLSuccess(r), n == null || n.markQPLSuccess();
					}
				};
				return r;
			}, this.extendRange = (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a, l) {
					var s = i.$5(a);
					s.annotateMessageRangesDataSource("MAWMessageRangeDataSourceV2"), s.markQPLPoint("maw_v2_extend_range_start");
					var c = i.$2.getRangeForTimestamp(t.minTimestampMs);
					if (c == null) return s.markQPLPoint("extend_range_invalid"), (e || (e = n("Promise"))).resolve();
					var d = c.value;
					s.markQPLPoint("get_range_external_ids_start");
					var m = yield o("MAWMessagesPaginationUtils").getMessagesRangesV2ExternalIdsIfChanged(t, d, r);
					if (s.markQPLPoint("get_range_external_ids_end"), a === "asc" && (!d.hasMoreAfter || d.isLoadingAfter) || a === "desc" && (!d.hasMoreBefore || d.isLoadingBefore)) return s.markQPLPoint("extend_range_skipped"), (e || (e = n("Promise"))).resolve();
					var p = i.$4.getOrCreateExternalObservableForRange(c, m);
					p.next({
						range: babelHelpers.extends({}, d, {
							isLoadingAfter: d.isLoadingAfter || a === "asc",
							isLoadingBefore: d.isLoadingBefore || a === "desc"
						}),
						rangeExternalIds: m
					});
					var _ = {
						maxMessageId: c.value.maxMessageId,
						maxTimestampMs: c.value.maxTimestampMs,
						minMessageId: c.value.minMessageId,
						minTimestampMs: c.value.minTimestampMs
					};
					return s.markQPLPoint("perf_range_extension_start"), i.$6(c.value, m, p, a, l).then(function() {
						var e = (u || (u = o("I64"))).equal(_.maxTimestampMs, c.value.maxTimestampMs) && (u || (u = o("I64"))).equal(_.minTimestampMs, c.value.minTimestampMs) && c.value.maxMessageId === _.maxMessageId && c.value.minMessageId === _.minMessageId;
						s.markQPLPoint("perf_range_extension_end"), s.addQPLAnnotations({ bool: { extended_range_is_identical: e } });
					}).catch(function(e) {
						throw s.markQPLPoint("extend_range_failed"), s.addQPLAnnotations({ string: { range_extension_error: e instanceof Error ? e.message : "unknown_error" } }), e;
					});
				});
				return function(e, n, r, o) {
					return t.apply(this, arguments);
				};
			})(), this.$6 = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a) {
					var l = yield (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton, u = i.$5(r);
					u == null || u.markQPLPoint("maw_wait_act_thread_start");
					var c = yield o("MAWWaitForACTThreadReadyForMLv2").waitForACTThreadReadyForMLv2(l.tables, i.$1, "MAWMessageRangeDataSourceV2", u).then(function(e) {
						return e.chatJid;
					});
					u == null || u.markQPLPoint("maw_wait_act_thread_end");
					var d = i.$7(), m = null;
					for (var p of d) {
						var _ = p.name, f = p.step, g = yield i.$8(f, _, {
							chatJid: c,
							count: a,
							db: l,
							direction: r,
							logger: u,
							oldRange: e,
							oldRangeExternalIds: t,
							prevResponse: m
						}, n);
						if (g.shouldTerminate) return;
						m = g.extension;
					}
				});
				return function(t, n, r, o, a) {
					return e.apply(this, arguments);
				};
			})(), this.$8 = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a) {
					var l = n.db, s = n.direction, u = n.logger, c = n.oldRange, d = n.oldRangeExternalIds;
					u == null || u.markQPLPoint("maw_range_" + t + "_start");
					var m = yield e(n);
					if (u == null || u.markQPLPoint("maw_range_" + t + "_end"), m.status === "try_again") {
						if (u == null || u.markQPLPoint("maw_range_" + t + "_retry"), r("gkx")("7409") && i.$3 > 0) return u == null || u.markQPLPoint("maw_range_" + t + "_timed_out"), i.$3 -= 1, a.next({
							range: babelHelpers.extends({}, c, {
								isLoadingAfter: !1,
								isLoadingBefore: !1
							}),
							rangeExternalIds: d
						}), { shouldTerminate: !0 };
						throw r("err")("Timed out for step: " + t);
					}
					return m.status === "complete" ? (u == null || u.markQPLPoint("insert_msgs_to_lsdb_start"), u == null || u.addQPLAnnotations({ int: { num_msgs_to_insert: m.extension.msgs.length } }), yield o("MAWPutMessagesToDB").insertMessageResponseIntoDatabase(l, m.extension, u == null ? void 0 : u.getInstanceKey()), u == null || u.markQPLPoint("insert_msgs_to_lsdb_end"), u == null || u.markQPLPoint("maw_upsert_range_start"), i.$9(c, d, a, s, m.extension), u == null || u.markQPLPoint("maw_upsert_range_end"), { shouldTerminate: !0 }) : m.status === "complete_with_range_override" ? (u == null || u.markQPLPoint("insert_msgs_to_lsdb_start"), u == null || u.addQPLAnnotations({ int: { num_msgs_to_insert: m.extension.msgs.length } }), yield o("MAWPutMessagesToDB").insertMessageResponseIntoDatabase(l, m.extension, u == null ? void 0 : u.getInstanceKey()), u == null || u.markQPLPoint("insert_msgs_to_lsdb_end"), u == null || u.markQPLPoint("maw_upsert_range_start"), i.$10(a, m.updatedRange, m.updatedRangeExternalIds), u == null || u.markQPLPoint("maw_upsert_range_end"), { shouldTerminate: !0 }) : {
						extension: m.extension,
						shouldTerminate: !1
					};
				});
				return function(t, n, r, o) {
					return e.apply(this, arguments);
				};
			})(), this.$9 = function(e, t, n, r, a) {
				var l = o("MAWMessagesRangesUtils").mergeMoreMessagesResponseIntoRange(e, t, a, r), s = l[0], u = l[1];
				i.$10(n, s, u);
			}, this.$1 = t, this.isEBEnabled = a;
		}
		var a = t.prototype;
		return a.$7 = function() {
			var t = {
				name: "fallback",
				step: function(o) {
					var t = o.prevResponse;
					return (e || (e = n("Promise"))).resolve({
						extension: r("nullthrows")(t),
						status: "complete"
					});
				}
			};
			return [{
				name: "mps_load_messages",
				step: o("MpsLoadMessagesStep").MpsLoadMessagesStep
			}, t];
		}, a.$10 = function(t, n, r) {
			var e = this.$2.upsertRange(n);
			o("MAWMessageIntegrityTruncateStatus").setThreadLastUpsertedRange(this.$1, n, r), t.next({
				range: e.value,
				rangeExternalIds: r
			});
		}, t;
	})();
	function m() {
		return o("relay-runtime").Observable.create(function(e) {
			var t = o("MAWEBCombinedSwitch").MAWEBCombinedSwitch.onSet(function(t) {
				e.next(t === !0);
			});
			return e.next(o("MAWEBCombinedSwitch").MAWEBCombinedSwitch.isEnabled()), function() {
				t();
			};
		});
	}
	var p = (function() {
		function t(t) {
			var a = this;
			this.$1 = new Map(), this.$3 = null, this.getOrCreateMessageRangeCoveringCursor = function(e, t) {
				var n = e.threadKey;
				return r("switchMap")(a.$2, function(r) {
					return a.$4(n, r).getOrCreateMessageRangeCoveringCursor(e, t);
				});
			}, this.extendRange = function(t, i, l, s) {
				var c = t.threadKey, d = o("MLV2RangeExtensionLogger").startRangeExtensionLoggerForThread(c, l, t, s);
				return a.$1.has((u || (u = o("I64"))).to_string(c)) ? r("nullthrows")(a.$1.get((u || (u = o("I64"))).to_string(c))).extendRange(t, i, l, s).then(function() {
					d.markQPLSuccess();
				}).catch(function(e) {
					throw d.markQPLFailure(e), e;
				}) : (d.markQPLFailure(r("err")("thread range not found in cache")), (e || (e = n("Promise"))).resolve());
			}, this.$2 = m(), this.$3 = o("MAWSubscribeToLSTruncateMetadataThreads").subscribeToLSTruncateMetadataThreads(t, function(e, t) {
				var n = (u || (u = o("I64"))).to_string(t);
				a.$1.delete(n) && o("MAWMessageIntegrityTruncateStatus").setThreadThuncated(t);
			});
		}
		var a = t.prototype;
		return a.$4 = function(t, n) {
			var e = (u || (u = o("I64"))).to_string(t);
			if (!this.$1.has(e)) {
				var a = new d(t, n);
				this.$1.set(e, a);
			}
			var i = r("nullthrows")(this.$1.get(e));
			return i.isEBEnabled !== n && (i = new d(t, n), this.$1.set(e, i)), i;
		}, t;
	})(), _, f;
	function g(e) {
		return (_ == null || f !== e) && (f = e, _ = new p(e)), _;
	}
	l.default = g;
}), 98);
