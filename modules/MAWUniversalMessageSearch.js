__d("MAWUniversalMessageSearch", [
	"FBLogger",
	"I64",
	"JSResourceForInteraction",
	"LSIntEnum",
	"LSMessageSearchType",
	"LSMessagingThreadTypeUtil",
	"LSSearchRequestStatusType",
	"MAWBridgeSearchMsg",
	"MAWBridgeSendAndReceive",
	"MAWFTSMergeCutoverSearchResults",
	"MAWFTSUniversalSearchQPLLogger",
	"MWContentSearchUtils",
	"MWSearchThreadUtils",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"groupBy",
	"promiseDone",
	"waitForMiActMappingForUniversalSearch"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["matchedTerms", "recordType"], s, u, c, d = (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").THREAD), m = new Map(), p = r("JSResourceForInteraction")("MAWAsyncEBIssueBulkMessagesPointQuery").__setRef("MAWUniversalMessageSearch");
	function _(e, t, n) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			yield e.message_search_queries.put(babelHelpers.extends({
				hasNextPage: !1,
				query: t,
				threadKeyV2: (c || (c = o("I64"))).one,
				type_: d
			}, n));
		}), f.apply(this, arguments);
	}
	function g(e, t) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = (c || (c = o("I64"))).to_string(t.threadKey);
			t.matchCount != null && m.set(n, (c || (c = o("I64"))).to_float(t.matchCount));
			var r = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.message_search_results).getKeyRange(d, t.query, t.threadKey));
			if (r == null) yield e.message_search_results.put(babelHelpers.extends({}, t));
			else {
				var a = o("MAWFTSMergeCutoverSearchResults").mergeCutoverSearchResults(r, t);
				yield e.message_search_results.upsert([
					d,
					r.query,
					r.threadKey,
					r.globalIndex
				], babelHelpers.extends({}, a, { globalIndex: t.globalIndex }));
			}
		}), h.apply(this, arguments);
	}
	function y(e, t) {
		var n, r = (n = m.get((c || (c = o("I64"))).to_string(e))) != null ? n : 0;
		r += t, m.set((c || (c = o("I64"))).to_string(e), r);
	}
	function C(e, t) {
		var n;
		return o("LSMessagingThreadTypeUtil").isArmadilloSecure(t) && (n = m.get((c || (c = o("I64"))).to_string(e))) != null ? n : null;
	}
	function b(e, t, n) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, l) {
			m.clear(), yield t.runInTransaction((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield _(e, l, {
						resultCount: (c || (c = o("I64"))).zero,
						status: (u || (u = o("LSIntEnum"))).ofNumber(r("LSSearchRequestStatusType").PENDING)
					});
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "readwrite", void 0, void 0, i.id + ":138"), r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({ point: "search_local_result_start" });
			var f = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "search", {
				query: l,
				searchMode: o("MAWBridgeSearchMsg").MESSAGE_CONTENT_SEARCH
			}), h = f.map(function(t) {
				if (t.recordType === "msg") {
					var n = t.matchedTerms, r = t.recordType, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
					return babelHelpers.extends({}, o);
				}
			}).filter(Boolean), y = r("groupBy")(h, function(e) {
				return e.chatJid;
			}), C = Object.values(y);
			r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({
				annotations: { int: { numResult: C.length } },
				point: "search_local_result_end"
			}), r("promiseDone")((s || (s = n("Promise"))).all(C.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, s) {
					var u = e[0].chatJid;
					yield r("waitForMiActMappingForUniversalSearch")(t, u);
					var m = yield o("MWSearchThreadUtils").getThreadDataForSearchResult(t, u, a, d);
					if (m != null) {
						var _ = m.profilePicUrl, f = m.secondaryProfilePicUrl, h = m.threadDisplayName, y = m.threadKey, C = m.threadType, b = e.sort(function(e, t) {
							return t.sortOrderMs - e.sortOrderMs;
						})[0], v = e.length === 1 && b.msg == null ? {
							id: b.externalId,
							sortOrderMs: b.sortOrderMs
						} : null, S = {
							displayName: h,
							globalIndex: o("MWContentSearchUtils").getGlobalIndex(b.sortOrderMs),
							matchCount: (c || (c = o("I64"))).of_int32(e.length),
							profilePicUrl: _,
							query: l,
							secondaryProfilePicUrl: f,
							threadKey: y,
							threadType: C,
							type_: d
						};
						if (v == null) yield t.runInTransaction((function() {
							var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
								var n, r;
								yield g(t, babelHelpers.extends({}, S, o("MWContentSearchUtils").getContextLineAndMatches(l, e.length, b == null || (n = b.msg) == null ? void 0 : n.content, d), {
									messageId: o("MWContentSearchUtils").getMessageId(e.length, b == null || (r = b.msg) == null ? void 0 : r.msgId),
									messageOtid: o("MWContentSearchUtils").getMessageOtid(e.length, b == null ? void 0 : b.externalId),
									messageTimestampMs: o("MWContentSearchUtils").getMessageTimestamp(b == null ? void 0 : b.sortOrderMs)
								}));
							});
							return function(e) {
								return t.apply(this, arguments);
							};
						})(), "readwrite", void 0, void 0, i.id + ":239");
						else {
							r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({ point: "fetch_missing_message_" + s + "_start" });
							var R = yield p.load().then(function(e) {
								var t = e.issueQueryAsPromiseForSearchResult;
								return t(u, [v]);
							});
							if (R != null && R.length !== 0) {
								var L = R[0];
								r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({ point: "fetch_missing_message_" + s + "_end" }), yield t.runInTransaction((function() {
									var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
										var n;
										yield g(t, babelHelpers.extends({}, S, o("MWContentSearchUtils").getContextLineAndMatches(l, e.length, b == null || (n = b.msg) == null ? void 0 : n.content, d), {
											messageOtid: L.externalId,
											messageTimestampMs: L.sortOrderMs != null ? (c || (c = o("I64"))).of_float(L.sortOrderMs) : void 0
										}));
									});
									return function(e) {
										return t.apply(this, arguments);
									};
								})(), "readwrite", void 0, void 0, i.id + ":278");
							} else r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({
								annotations: { bool: { failedFetchingMissingMessage: !0 } },
								point: "fetch_missing_message_" + s + "_end"
							});
						}
					}
				});
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})())), function() {
				r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({
					annotations: { int: { numResult: C.length } },
					point: "issue_secure_search_query_end"
				}), r("promiseDone")(t.runInTransaction((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						yield _(e, l, {
							hasNextPage: !1,
							resultCount: (c || (c = o("I64"))).of_int32(C.length),
							status: (u || (u = o("LSIntEnum"))).ofNumber(r("LSSearchRequestStatusType").COMPLETE)
						});
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})(), "readwrite", void 0, void 0, i.id + ":318"));
			}, function(e) {
				r("FBLogger")("maw_fts_search").mustfix("Error while searching in secure threads. Err: %s", e == null ? void 0 : e.message);
			});
		}), v.apply(this, arguments);
	}
	l.updateSecureMsgMatchCountForThread = y, l.getSecureMsgsMatchCountForThread = C, l.search = b;
}), 98);
