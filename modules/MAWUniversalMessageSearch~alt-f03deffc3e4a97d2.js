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
	"ReQL",
	"groupBy",
	"promiseDone",
	"waitForMiActMappingForUniversalSearch"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["matchedTerms", "recordType"], s, u, c = (s || (s = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").THREAD), d = new Map(), m = r("JSResourceForInteraction")("MAWAsyncEBIssueBulkMessagesPointQuery").__setRef("MAWUniversalMessageSearch");
	async function p(e, t, n) {
		await e.message_search_queries.put(babelHelpers.extends({
			hasNextPage: !1,
			query: t,
			threadKeyV2: (u || (u = o("I64"))).one,
			type_: c
		}, n));
	}
	async function _(e, t) {
		var n = (u || (u = o("I64"))).to_string(t.threadKey);
		t.matchCount != null && d.set(n, (u || (u = o("I64"))).to_float(t.matchCount));
		var r = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.message_search_results).getKeyRange(c, t.query, t.threadKey));
		if (r == null) await e.message_search_results.put(babelHelpers.extends({}, t));
		else {
			var a = o("MAWFTSMergeCutoverSearchResults").mergeCutoverSearchResults(r, t);
			await e.message_search_results.upsert([
				c,
				r.query,
				r.threadKey,
				r.globalIndex
			], babelHelpers.extends({}, a, { globalIndex: t.globalIndex }));
		}
	}
	function f(e, t) {
		var n, r = (n = d.get((u || (u = o("I64"))).to_string(e))) != null ? n : 0;
		r += t, d.set((u || (u = o("I64"))).to_string(e), r);
	}
	function g(e, t) {
		var n;
		return o("LSMessagingThreadTypeUtil").isArmadilloSecure(t) && (n = d.get((u || (u = o("I64"))).to_string(e))) != null ? n : null;
	}
	async function h(t, n, a) {
		d.clear(), await t.runInTransaction(async function(e) {
			await p(e, a, {
				resultCount: (u || (u = o("I64"))).zero,
				status: (s || (s = o("LSIntEnum"))).ofNumber(r("LSSearchRequestStatusType").PENDING)
			});
		}, "readwrite", void 0, void 0, i.id + ":138"), r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({ point: "search_local_result_start" });
		var l = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "search", {
			query: a,
			searchMode: o("MAWBridgeSearchMsg").MESSAGE_CONTENT_SEARCH
		}), f = l.map(function(t) {
			if (t.recordType === "msg") {
				var n = t.matchedTerms, r = t.recordType, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
				return babelHelpers.extends({}, o);
			}
		}).filter(Boolean), g = r("groupBy")(f, function(e) {
			return e.chatJid;
		}), h = Object.values(g);
		r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({
			annotations: { int: { numResult: h.length } },
			point: "search_local_result_end"
		}), r("promiseDone")(Promise.all(h.map(async function(e, l) {
			var s = e[0].chatJid;
			await r("waitForMiActMappingForUniversalSearch")(t, s);
			var d = await o("MWSearchThreadUtils").getThreadDataForSearchResult(t, s, n, c);
			if (d != null) {
				var p = d.profilePicUrl, f = d.secondaryProfilePicUrl, g = d.threadDisplayName, h = d.threadKey, y = d.threadType, C = e.sort(function(e, t) {
					return t.sortOrderMs - e.sortOrderMs;
				})[0], b = e.length === 1 && C.msg == null ? {
					id: C.externalId,
					sortOrderMs: C.sortOrderMs
				} : null, v = {
					displayName: g,
					globalIndex: o("MWContentSearchUtils").getGlobalIndex(C.sortOrderMs),
					matchCount: (u || (u = o("I64"))).of_int32(e.length),
					profilePicUrl: p,
					query: a,
					secondaryProfilePicUrl: f,
					threadKey: h,
					threadType: y,
					type_: c
				};
				if (b == null) await t.runInTransaction(async function(t) {
					var n, r;
					await _(t, babelHelpers.extends({}, v, o("MWContentSearchUtils").getContextLineAndMatches(a, e.length, C == null || (n = C.msg) == null ? void 0 : n.content, c), {
						messageId: o("MWContentSearchUtils").getMessageId(e.length, C == null || (r = C.msg) == null ? void 0 : r.msgId),
						messageOtid: o("MWContentSearchUtils").getMessageOtid(e.length, C == null ? void 0 : C.externalId),
						messageTimestampMs: o("MWContentSearchUtils").getMessageTimestamp(C == null ? void 0 : C.sortOrderMs)
					}));
				}, "readwrite", void 0, void 0, i.id + ":239");
				else {
					r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({ point: "fetch_missing_message_" + l + "_start" });
					var S = await m.load().then(function(e) {
						var t = e.issueQueryAsPromiseForSearchResult;
						return t(s, [b]);
					});
					if (S != null && S.length !== 0) {
						var R = S[0];
						r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({ point: "fetch_missing_message_" + l + "_end" }), await t.runInTransaction(async function(t) {
							var n;
							await _(t, babelHelpers.extends({}, v, o("MWContentSearchUtils").getContextLineAndMatches(a, e.length, C == null || (n = C.msg) == null ? void 0 : n.content, c), {
								messageOtid: R.externalId,
								messageTimestampMs: R.sortOrderMs != null ? (u || (u = o("I64"))).of_float(R.sortOrderMs) : void 0
							}));
						}, "readwrite", void 0, void 0, i.id + ":278");
					} else r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({
						annotations: { bool: { failedFetchingMissingMessage: !0 } },
						point: "fetch_missing_message_" + l + "_end"
					});
				}
			}
		})), function() {
			r("MAWFTSUniversalSearchQPLLogger").qplAddPoint({
				annotations: { int: { numResult: h.length } },
				point: "issue_secure_search_query_end"
			}), r("promiseDone")(t.runInTransaction(async function(e) {
				await p(e, a, {
					hasNextPage: !1,
					resultCount: (u || (u = o("I64"))).of_int32(h.length),
					status: (s || (s = o("LSIntEnum"))).ofNumber(r("LSSearchRequestStatusType").COMPLETE)
				});
			}, "readwrite", void 0, void 0, i.id + ":318"));
		}, function(e) {
			r("FBLogger")("maw_fts_search").mustfix("Error while searching in secure threads. Err: %s", e == null ? void 0 : e.message);
		});
	}
	l.updateSecureMsgMatchCountForThread = f, l.getSecureMsgsMatchCountForThread = g, l.search = h;
}), 98);
