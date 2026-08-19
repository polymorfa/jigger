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
	"err",
	"gkx",
	"nullthrows",
	"relay-runtime",
	"switchMap"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 5, c = (function() {
		function t(t, n) {
			var a = this;
			this.$2 = new (o("MessageRangeSet")).MessageRangeSet(), this.$3 = u, this.$4 = new (o("MAWMessageRangeDataExternalObservables")).MAWMessageRangeDataExternalObservables(), this.getOrCreateMessageRangeCoveringCursor = function(t, n) {
				var r, i;
				n == null || n.annotateMessageRangesDataSource("MAWMessageRangeDataSourceV2"), n == null || n.markQPLPoint("maw_get_or_create_range_start");
				var l = a.$2.getRangeForTimestamp(t.timestampMs);
				if (l != null) {
					n == null || n.markQPLPoint("maw_preexisting_range"), n == null || n.markQPLPoint("maw_get_or_create_range_end");
					var s = {
						maxExternalId: null,
						minExternalId: null
					};
					return a.$4.getOrCreateExternalObservableForRange(l, s);
				}
				var u = (e || (e = o("I64"))).equal(t.timestampMs, e.max_int), c = {
					hasMoreAfter: !u,
					hasMoreBefore: !0,
					isLoadingAfter: !1,
					isLoadingBefore: !1,
					maxMessageId: (r = t.messageId) != null ? r : "",
					maxTimestampMs: t.timestampMs,
					minMessageId: (i = t.messageId) != null ? i : "",
					minTimestampMs: t.timestampMs,
					threadKey: a.$1
				}, d = a.$2.upsertRange(c);
				return o("MAWMessageIntegrityTruncateStatus").setThreadLastUpsertedRange(a.$1, c, {
					maxExternalId: t == null ? void 0 : t.externalId,
					minExternalId: t == null ? void 0 : t.externalId
				}), n == null || n.markQPLPoint("maw_range_created"), n == null || n.markQPLPoint("maw_get_or_create_range_end"), a.$4.getOrCreateExternalObservableForRange(d, {
					maxExternalId: t == null ? void 0 : t.externalId,
					minExternalId: t == null ? void 0 : t.externalId
				});
			}, this.$5 = function(e) {
				var t = o("MLV2DataSourceLogger").getMLV2LoggerForThread(a.$1, e), n = o("MLV2RangeExtensionLogger").getRangeExtensionLoggerForThread(a.$1, e), r = {
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
			}, this.extendRange = async function(t, n, r, i) {
				var l = a.$5(r);
				l.annotateMessageRangesDataSource("MAWMessageRangeDataSourceV2"), l.markQPLPoint("maw_v2_extend_range_start");
				var s = a.$2.getRangeForTimestamp(t.minTimestampMs);
				if (s == null) return l.markQPLPoint("extend_range_invalid"), Promise.resolve();
				var u = s.value;
				l.markQPLPoint("get_range_external_ids_start");
				var c = await o("MAWMessagesPaginationUtils").getMessagesRangesV2ExternalIdsIfChanged(t, u, n);
				if (l.markQPLPoint("get_range_external_ids_end"), r === "asc" && (!u.hasMoreAfter || u.isLoadingAfter) || r === "desc" && (!u.hasMoreBefore || u.isLoadingBefore)) return l.markQPLPoint("extend_range_skipped"), Promise.resolve();
				var d = a.$4.getOrCreateExternalObservableForRange(s, c);
				d.next({
					range: babelHelpers.extends({}, u, {
						isLoadingAfter: u.isLoadingAfter || r === "asc",
						isLoadingBefore: u.isLoadingBefore || r === "desc"
					}),
					rangeExternalIds: c
				});
				var m = {
					maxMessageId: s.value.maxMessageId,
					maxTimestampMs: s.value.maxTimestampMs,
					minMessageId: s.value.minMessageId,
					minTimestampMs: s.value.minTimestampMs
				};
				return l.markQPLPoint("perf_range_extension_start"), a.$6(s.value, c, d, r, i).then(function() {
					var t = (e || (e = o("I64"))).equal(m.maxTimestampMs, s.value.maxTimestampMs) && (e || (e = o("I64"))).equal(m.minTimestampMs, s.value.minTimestampMs) && s.value.maxMessageId === m.maxMessageId && s.value.minMessageId === m.minMessageId;
					l.markQPLPoint("perf_range_extension_end"), l.addQPLAnnotations({ bool: { extended_range_is_identical: t } });
				}).catch(function(e) {
					throw l.markQPLPoint("extend_range_failed"), l.addQPLAnnotations({ string: { range_extension_error: e instanceof Error ? e.message : "unknown_error" } }), e;
				});
			}, this.$6 = async function(e, t, n, r, i) {
				var l = await (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton, u = a.$5(r);
				u == null || u.markQPLPoint("maw_wait_act_thread_start");
				var c = await o("MAWWaitForACTThreadReadyForMLv2").waitForACTThreadReadyForMLv2(l.tables, a.$1, "MAWMessageRangeDataSourceV2", u).then(function(e) {
					return e.chatJid;
				});
				u == null || u.markQPLPoint("maw_wait_act_thread_end");
				var d = a.$7(), m = null;
				for (var p of d) {
					var _ = p.name, f = p.step, g = await a.$8(f, _, {
						chatJid: c,
						count: i,
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
			}, this.$8 = async function(e, t, n, i) {
				var l = n.db, s = n.direction, u = n.logger, c = n.oldRange, d = n.oldRangeExternalIds;
				u == null || u.markQPLPoint("maw_range_" + t + "_start");
				var m = await e(n);
				if (u == null || u.markQPLPoint("maw_range_" + t + "_end"), m.status === "try_again") {
					if (u == null || u.markQPLPoint("maw_range_" + t + "_retry"), r("gkx")("7409") && a.$3 > 0) return u == null || u.markQPLPoint("maw_range_" + t + "_timed_out"), a.$3 -= 1, i.next({
						range: babelHelpers.extends({}, c, {
							isLoadingAfter: !1,
							isLoadingBefore: !1
						}),
						rangeExternalIds: d
					}), { shouldTerminate: !0 };
					throw r("err")("Timed out for step: " + t);
				}
				return m.status === "complete" ? (u == null || u.markQPLPoint("insert_msgs_to_lsdb_start"), u == null || u.addQPLAnnotations({ int: { num_msgs_to_insert: m.extension.msgs.length } }), await o("MAWPutMessagesToDB").insertMessageResponseIntoDatabase(l, m.extension, u == null ? void 0 : u.getInstanceKey()), u == null || u.markQPLPoint("insert_msgs_to_lsdb_end"), u == null || u.markQPLPoint("maw_upsert_range_start"), a.$9(c, d, i, s, m.extension), u == null || u.markQPLPoint("maw_upsert_range_end"), { shouldTerminate: !0 }) : m.status === "complete_with_range_override" ? (u == null || u.markQPLPoint("insert_msgs_to_lsdb_start"), u == null || u.addQPLAnnotations({ int: { num_msgs_to_insert: m.extension.msgs.length } }), await o("MAWPutMessagesToDB").insertMessageResponseIntoDatabase(l, m.extension, u == null ? void 0 : u.getInstanceKey()), u == null || u.markQPLPoint("insert_msgs_to_lsdb_end"), u == null || u.markQPLPoint("maw_upsert_range_start"), a.$10(i, m.updatedRange, m.updatedRangeExternalIds), u == null || u.markQPLPoint("maw_upsert_range_end"), { shouldTerminate: !0 }) : {
					extension: m.extension,
					shouldTerminate: !1
				};
			}, this.$9 = function(e, t, n, r, i) {
				var l = o("MAWMessagesRangesUtils").mergeMoreMessagesResponseIntoRange(e, t, i, r), s = l[0], u = l[1];
				a.$10(n, s, u);
			}, this.$1 = t, this.isEBEnabled = n;
		}
		var n = t.prototype;
		return n.$7 = function() {
			var e = {
				name: "fallback",
				step: function(t) {
					var e = t.prevResponse;
					return Promise.resolve({
						extension: r("nullthrows")(e),
						status: "complete"
					});
				}
			};
			return [{
				name: "mps_load_messages",
				step: o("MpsLoadMessagesStep").MpsLoadMessagesStep
			}, e];
		}, n.$10 = function(t, n, r) {
			var e = this.$2.upsertRange(n);
			o("MAWMessageIntegrityTruncateStatus").setThreadLastUpsertedRange(this.$1, n, r), t.next({
				range: e.value,
				rangeExternalIds: r
			});
		}, t;
	})();
	function d() {
		return o("relay-runtime").Observable.create(function(e) {
			var t = o("MAWEBCombinedSwitch").MAWEBCombinedSwitch.onSet(function(t) {
				e.next(t === !0);
			});
			return e.next(o("MAWEBCombinedSwitch").MAWEBCombinedSwitch.isEnabled()), function() {
				t();
			};
		});
	}
	var m = (function() {
		function t(t) {
			var n = this;
			this.$1 = new Map(), this.$3 = null, this.getOrCreateMessageRangeCoveringCursor = function(e, t) {
				var o = e.threadKey;
				return r("switchMap")(n.$2, function(r) {
					return n.$4(o, r).getOrCreateMessageRangeCoveringCursor(e, t);
				});
			}, this.extendRange = function(t, a, i, l) {
				var s = t.threadKey, u = o("MLV2RangeExtensionLogger").startRangeExtensionLoggerForThread(s, i, t, l);
				return n.$1.has((e || (e = o("I64"))).to_string(s)) ? r("nullthrows")(n.$1.get((e || (e = o("I64"))).to_string(s))).extendRange(t, a, i, l).then(function() {
					u.markQPLSuccess();
				}).catch(function(e) {
					throw u.markQPLFailure(e), e;
				}) : (u.markQPLFailure(r("err")("thread range not found in cache")), Promise.resolve());
			}, this.$2 = d(), this.$3 = o("MAWSubscribeToLSTruncateMetadataThreads").subscribeToLSTruncateMetadataThreads(t, function(t, r) {
				var a = (e || (e = o("I64"))).to_string(r);
				n.$1.delete(a) && o("MAWMessageIntegrityTruncateStatus").setThreadThuncated(r);
			});
		}
		var n = t.prototype;
		return n.$4 = function(n, a) {
			var t = (e || (e = o("I64"))).to_string(n);
			if (!this.$1.has(t)) {
				var i = new c(n, a);
				this.$1.set(t, i);
			}
			var l = r("nullthrows")(this.$1.get(t));
			return l.isEBEnabled !== a && (l = new c(n, a), this.$1.set(t, l)), l;
		}, t;
	})(), p, _;
	function f(e) {
		return (p == null || _ !== e) && (_ = e, p = new m(e)), p;
	}
	l.default = f;
}), 98);
