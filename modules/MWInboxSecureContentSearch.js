__d("MWInboxSecureContentSearch", [
	"I64",
	"JSResourceForInteraction",
	"LSIntEnum",
	"LSMessageSearchType",
	"LSSearchRequestStatusType",
	"MAWBridgeSearchMsg",
	"MAWBridgeSendAndReceive",
	"MAWChatJid",
	"MAWFTSMergeCutoverSearchResults",
	"MAWMiActOnActThreadReadyDeferred",
	"MAWUniversalMessageSearch",
	"MWContentSearchUtils",
	"MWSearchThreadUtils",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"isEBSearchEnabled",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["matchedTerms", "recordType"], s, u, c, d = r("JSResourceForInteraction")("MAWAsyncEBIssueBulkMessagesPointQuery").__setRef("MWInboxSecureContentSearch"), m = r("justknobx")._("2605");
	function p(e, t, r) {
		return (c || (c = n("Promise"))).all([o("ReQL").mergeJoin(o("ReQL").fromTableAscending(r.tables.participants, []).getKeyRange(e), o("ReQL").fromTableAscending(r.tables.contacts)), o("ReQL").firstAsync(o("ReQL").fromTableAscending(r.tables.threads).getKeyRange(e))]).then(function(e) {
			var n = e[0], r = e[1], a = n.filter(function(e) {
				var n = e[0], r = e[1], a = (s || (s = o("I64"))).equal(r.id, t);
				return !a;
			}).map(function(e) {
				var t = e[0], n = e[1];
				return n;
			});
			return o("ReQL").firstAsync(a);
		});
	}
	function _(e, t) {
		return o("MAWChatJid").toThreadKeyMaybe(t, e.chatJid).then(function(r) {
			return r == null ? (c || (c = n("Promise"))).resolve([null, e]) : (c || (c = n("Promise"))).all([o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.threads).getKeyRange(r)), c.resolve(e)]);
		});
	}
	function f(e, t) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange((s || (s = o("I64"))).of_string(t)));
			return n;
		}), g.apply(this, arguments);
	}
	function h(e, t) {
		var n = t.query, a = t.threadKey;
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.message_search_results).getKeyRange((u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").THREAD), n, a));
	}
	function y(e, t, a, l, d, m, p, g) {
		g === void 0 && (g = r("LSSearchRequestStatusType").COMPLETE);
		var y = function(p) {
			return _(e, p).then(function(e) {
				var i = e[0];
				if (i != null) {
					var _ = e[1], y = _.msg;
					if (y != null && _ != null) return (c || (c = n("Promise"))).all([
						o("MWSearchThreadUtils").getThreadPics(i, d, m),
						o("MWSearchThreadUtils").getThreadParticipants(i, m),
						(s || (s = o("I64"))).equal(l, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").MESSAGE)) ? f(m, y.sender) : (c || (c = n("Promise"))).resolve(null),
						(s || (s = o("I64"))).equal(l, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").THREAD)) ? h(p, {
							query: a,
							threadKey: i.threadKey
						}) : (c || (c = n("Promise"))).resolve(null)
					]).then(function(e) {
						var m = e[0], f = m[0], h = m[1], C = e[1], b = e[2], v = e[3];
						(s || (s = o("I64"))).equal(l, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").THREAD)) && o("MAWUniversalMessageSearch").updateSecureMsgMatchCountForThread(i.threadKey, t);
						var S = babelHelpers.extends({}, o("MWContentSearchUtils").getContextLineAndMatches(a, t, y.content, l), {
							displayName: o("MWSearchThreadUtils").getThreadDisplayName(d, i, C, b, l),
							globalIndex: (s || (s = o("I64"))).of_float(-_.sortOrderMs),
							matchCount: s.of_int32(t),
							messageId: y.msgId,
							messageOtid: _.externalId,
							messageTimestampMs: (s || (s = o("I64"))).equal(l, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").THREAD)) && t > 1 ? void 0 : (s || (s = o("I64"))).of_string("" + _.sortOrderMs),
							profilePicUrl: (s || (s = o("I64"))).equal(l, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").MESSAGE)) && b != null ? b.profilePictureUrl : f,
							query: a,
							secondaryProfilePicUrl: (s || (s = o("I64"))).equal(l, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").MESSAGE)) && b != null ? b.profilePictureFallbackUrl : h,
							threadKey: i.threadKey,
							threadType: i.threadType,
							type_: l
						}), R;
						if ((s || (s = o("I64"))).equal(l, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").THREAD)) || v == null) R = p.message_search_results.put(S);
						else {
							var L = o("MAWFTSMergeCutoverSearchResults").mergeCutoverSearchResults(v, S);
							R = p.message_search_results.upsert([
								l,
								v.query,
								v.threadKey,
								v.globalIndex
							], babelHelpers.extends({}, L, { globalIndex: S.globalIndex }));
						}
						return (c || (c = n("Promise"))).all([p.message_search_queries.put({
							hasNextPage: void 0,
							nextPageCursor: void 0,
							query: a,
							resultCount: s.of_int32(t),
							status: (u || (u = o("LSIntEnum"))).ofNumber(g),
							threadKeyV2: i.threadKey,
							type_: l
						}), R]).then(r("emptyFunction"));
					});
				}
			});
		};
		return p != null ? y(p) : m.runInTransaction(function(e) {
			return y(e);
		}, "readwrite", void 0, void 0, i.id + ":280");
	}
	function C(e, t, n, r) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a, i) {
			i != null && i.flow.qplAddPoint({
				instanceKey: i.instanceKey,
				point: "search_local_result_start"
			});
			var l = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "search", {
				query: r,
				searchMode: o("MAWBridgeSearchMsg").MESSAGE_CONTENT_SEARCH
			});
			return (c || (c = n("Promise"))).all(l.map(function(n) {
				if (n.recordType === "msg") {
					var r = n.matchedTerms, a = n.recordType, i = babelHelpers.objectWithoutPropertiesLoose(n, e);
					return o("MAWChatJid").toThreadKeyMaybe(t.tables, i.chatJid).then(function(e) {
						return [i, e];
					});
				}
			}).filter(Boolean)).then(function(e) {
				var t = a != null ? e.filter(function(e) {
					var t = e[0], n = e[1];
					return n != null && (s || (s = o("I64"))).equal(n, a);
				}) : e.filter(function(e) {
					var t = e[0], n = e[1];
					return n != null;
				}), n = null;
				return a != null && (n = { int: { numResult: t.length } }), i != null && i.flow.qplAddPoint({
					annotations: babelHelpers.extends({}, n),
					instanceKey: i.instanceKey,
					point: "search_local_result_end"
				}), t;
			});
		}), b.apply(this, arguments);
	}
	function v(e, t, a, i, l, s) {
		return (c || (c = n("Promise"))).all(i.map(function(n) {
			return y(n, l, a, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").MESSAGE), s, e, t);
		})).then(r("emptyFunction"));
	}
	function S(e, t, a, i, l) {
		return (c || (c = n("Promise"))).all(a.map(function(n) {
			return y(n, i, t, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").MESSAGE), l, e);
		})).then(r("emptyFunction"));
	}
	function R(e, t, a, l, p) {
		return l.runInTransaction(function(n) {
			return n.message_search_queries.put({
				hasNextPage: void 0,
				nextPageCursor: void 0,
				query: e,
				resultCount: (s || (s = o("I64"))).of_int32(0),
				status: (u || (u = o("LSIntEnum"))).ofNumber(r("LSSearchRequestStatusType").PENDING),
				threadKeyV2: t,
				type_: u.ofNumber(r("LSMessageSearchType").MESSAGE)
			});
		}, "readwrite", void 0, void 0, i.id + ":411").then(function(n) {
			return C(l, e, t, p);
		}).then(function(_) {
			var f = _.length, g = _.filter(function(e) {
				var t = e[0], n = e[1];
				return t.msg != null;
			}).length, h = g, C = function() {
				var o = _.map(function(e) {
					var t = e[0];
					return t;
				}).filter(function(e) {
					return e.msg == null;
				});
				return o.length === 0 ? (c || (c = n("Promise"))).resolve() : (o = o.slice(0, m), p.flow.qplAddPoint({
					annotations: { int: { numRequestedMessages: o.length } },
					instanceKey: p.instanceKey,
					point: "fetch_missing_messages_start"
				}), r("MAWMiActOnActThreadReadyDeferred")(l, t, "MWMessageSearchInput.react", function(t, r) {
					var i = o.map(function(e) {
						return {
							id: e.externalId,
							sortOrderMs: e.sortOrderMs
						};
					});
					return d.load().then(function(t) {
						var o = t.issueQueryAsPromiseForSearchResult, s = o(r, i);
						return s == null ? (c || (c = n("Promise"))).resolve() : s.then((function() {
							var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
								var n = t;
								if (t.length !== i.length) {
									p.flow.qplAddPoint({
										annotations: { int: { numRemainingMessages: i.length - t.length } },
										instanceKey: p.instanceKey,
										point: "fetch_missing_messages_partial"
									});
									var s = i.filter(function(e) {
										return !n.some(function(t) {
											return t.externalId === e.id;
										});
									});
									if (s.length > 0) {
										var u = yield o(r, s);
										u != null && (n = [].concat(t, u));
									}
								}
								return h = g + n.length, p.flow.qplAddPoint({
									annotations: { int: { numRespondedMessages: n.length } },
									instanceKey: p.instanceKey,
									point: "fetch_missing_messages_end"
								}), S(l, e, n, h, a);
							});
							return function(e) {
								return t.apply(this, arguments);
							};
						})());
					});
				}));
			};
			return (c || (c = n("Promise"))).all([_.map(function(t) {
				var n = t[0];
				return y(n, f, e, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").MESSAGE), a, l, void 0, r("LSSearchRequestStatusType").PENDING);
			}).reduce(function(e, t) {
				return (c || (c = n("Promise"))).all([e, t]).then(r("emptyFunction"));
			}, c.resolve()), r("isEBSearchEnabled")() ? C() : (c || (c = n("Promise"))).resolve()]).then(function(n) {
				return l.runInTransaction(function(n) {
					return n.message_search_queries.put({
						hasNextPage: void 0,
						nextPageCursor: void 0,
						query: e,
						resultCount: (s || (s = o("I64"))).of_int32(h),
						status: (u || (u = o("LSIntEnum"))).ofNumber(r("LSSearchRequestStatusType").COMPLETE),
						threadKeyV2: t,
						type_: u.ofNumber(r("LSMessageSearchType").MESSAGE)
					});
				}, "readwrite", void 0, void 0, i.id + ":561");
			}).then(function(e) {
				return (c || (c = n("Promise"))).resolve();
			});
		});
	}
	l.getThreadOtherParticipantContact = p, l.addBridgeSearchMsgsToSearchResult = v, l.addMessagesToSearchResult = S, l.searchSecureDatabaseMessages = R;
}), 98);
