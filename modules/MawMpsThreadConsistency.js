__d("MawMpsThreadConsistency", [
	"FBLogger",
	"I64",
	"MAWBridge",
	"MAWBridgeTypesCreators",
	"MAWDbThread",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWJids",
	"MAWMpsGating",
	"MAWOfflineThreadTxns",
	"MAWProtobufDeserializers",
	"MAWTransactionMode",
	"MawMpsThreadMsgInfo",
	"MpsToBridgeMessageId",
	"MpsTypes",
	"WABaseGlobals",
	"WAGlobals",
	"WAJids",
	"WATimeUtils",
	"WebMps",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (s = o("MAWIndexedDb")).makeMsgrTransactor({ threads: (u = o("MAWTransactionMode")).READONLY }, "readNewestMsgTsForMps", function(e) {
		return function(t) {
			return o("MAWDexieTable").dexieAll(Array.from(t, function(t) {
				var n = o("MAWJids").threadIdToChatJid(t), r = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(n)) : e.threads.get({ jid: n });
				return r.then(function(e) {
					var n = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(e, "MawMpsThreadConsistency.readNewestMsgTsByThreadId");
					return {
						newestMsgTs: n == null ? void 0 : n.newestMsgTs,
						threadId: t
					};
				});
			})).then(function(e) {
				var t = new Map();
				for (var n of e) {
					var r = n.newestMsgTs, a = n.threadId;
					r != null && t.set(a, o("MpsTypes").toTimestamp(Number(r)));
				}
				return t;
			});
		};
	}), d = s.makeMsgrTransactor({ threads: u.READWRITE }, "persistThreadFieldsForMps", function(e) {
		return function(t) {
			return o("MAWDexieTable").dexieAll(Array.from(t, function(t) {
				var n = t[0], r = t[1], a = o("MAWJids").threadIdToChatJid(n), i = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(a)) : e.threads.get({ jid: a });
				return i.then(function(t) {
					var i = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(t, "MawMpsThreadConsistency.persistThreadFields");
					if (i != null) {
						var l = o("MpsToBridgeMessageId").mpsToBridgeMsgId(n, r.messageId), s = o("WATimeUtils").castToMillisTime(r.ts), u = !1, c = i.threadOrder, d = i.newestMsgTs, m = o("MAWDbThread").craftThreadOrder(s, a);
						(i.newestMsgTs == null || i.threadOrder == null || m > i.threadOrder) && (c = m, d = s, u = !0);
						var p = i.snippetMsg, _ = i.snippetMsgTs;
						(i.snippetMsgTs == null || s >= i.snippetMsgTs) && (p = l, _ = s, u = !0);
						var f = i.lastReadMsg, g = i.lastReadMsgTs;
						r.isSenderMe && (i.lastReadMsgTs == null || s > i.lastReadMsgTs) && (f = l, g = s, u = !0);
						var h = i.oldestMsg;
						if (i.oldestMsg == null && (h = l, u = !0), !!u) {
							var y = babelHelpers.extends({}, i, {
								lastReadMsg: f,
								lastReadMsgTs: g,
								newestMsgTs: d,
								oldestMsg: h,
								snippetMsg: p,
								snippetMsgTs: _,
								threadOrder: c
							}), C = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.put(y);
							return C.then(function() {
								o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(y, {
									lastReadMsg: y.lastReadMsg,
									lastReadMsgTs: y.lastReadMsgTs,
									newestMsgTs: y.newestMsgTs,
									oldestMsg: y.oldestMsg,
									snippetMsg: y.snippetMsg,
									snippetMsgTs: y.snippetMsgTs,
									threadOrder: y.threadOrder
								}, "persistThreadFieldsForMps");
							});
						}
					}
				});
			})).then(function() {});
		};
	}), m = s.makeMsgrTransactor({ threads: u.READWRITE }, "persistUnbumpedThreadFieldsForMps", function(e) {
		return function(t) {
			return o("MAWDexieTable").dexieAll(Array.from(t, function(t) {
				var n = t[0], r = t[1], a = o("MAWJids").threadIdToChatJid(n), i = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(a)) : e.threads.get({ jid: a });
				return i.then(function(t) {
					var i = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(t, "MawMpsThreadConsistency.persistUnbumpedThreadFields");
					if (i != null) {
						var l = o("MpsToBridgeMessageId").mpsToBridgeMsgId(n, r.messageId), s = o("WATimeUtils").castToMillisTime(r.ts), u = o("MAWDbThread").craftThreadOrder(s, a);
						if (!(i.snippetMsg === l && i.snippetMsgTs === s && i.newestMsgTs === s && i.threadOrder === u)) {
							var c = babelHelpers.extends({}, i, {
								newestMsgTs: s,
								snippetMsg: l,
								snippetMsgTs: s,
								threadOrder: u
							}), d = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.put(c);
							return d.then(function() {
								o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(c, {
									newestMsgTs: c.newestMsgTs,
									snippetMsg: c.snippetMsg,
									snippetMsgTs: c.snippetMsgTs,
									threadOrder: c.threadOrder
								}, "persistUnbumpedThreadFieldsForMps");
							});
						}
					}
				});
			})).then(function() {});
		};
	}), p = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = Array.from(e, o("MAWJids").threadIdToChatJid), n = yield o("MawMpsThreadMsgInfo").bulkGetThreadMsgInfo(t);
			yield _(t, n);
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), _ = s.makeMsgrTransactor({
		participants: u.READWRITE,
		threads: u.READWRITE
	}, "createMissingThreadsForMps", function(e) {
		return (function(t, n) {
			return o("MAWDbThreadTxns").getThreads(e, t).then(function(r) {
				return o("MAWOfflineThreadTxns").createAllThreadsForOfflineMsgsForMps(e, t, r, n);
			}).then(function() {});
		});
	}), f = {
		name: "threads_consistency",
		process: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = new Set(), a = new Set(), i = new Map(), l = new Map(), s = o("WAJids").userIdFromJid(o("WAGlobals").getMyUserJid()), u = new Set();
				for (var m of e) u.add(m.message.threadId), g(m) && n.add(m.message.threadId);
				if (o("MAWMpsGating").shouldBulkCreateThreadInMps() && n.size > 0) try {
					yield p(n);
				} catch (e) {
					r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).warn("Failed to create missing threads for MPS-only path");
				}
				var _ = yield c(u);
				for (var f of e) {
					var y, C = h(f, l, _), b = f.message.threadId, v = f.message.senderId === s;
					if (C) {
						var S;
						a.add(b), ((S = l.get(b)) == null ? void 0 : S.activityType) === "pending_unbump" ? i.delete(b) : i.set(b, {
							isSenderMe: v,
							messageId: f.message.messageId,
							ts: f.message.timestampMs
						});
					} else v && f.insertionSource === o("MpsTypes").InsertionSource.Receive && ((y = f.directive) == null ? void 0 : y.actionType) === o("MpsTypes").ActionType.UpsertTopLevel && i.set(b, {
						isSenderMe: !0,
						messageId: f.message.messageId,
						ts: f.message.timestampMs
					});
				}
				return a.size > 0 && R(a, l, _).catch(function(e) {
					r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).mustfix("Cannot apply threads consistency to UI");
				}), i.size > 0 && d(i).catch(function(e) {
					r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).warn("Failed to persist thread fields for MPS-only path");
				}), new Map();
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})()
	};
	function g(e) {
		var t, n = (t = e.directive) == null ? void 0 : t.actionType;
		return n === o("MpsTypes").ActionType.UpsertTopLevel || n === o("MpsTypes").ActionType.UpsertSupplemental || n === o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder;
	}
	function h(e, t, n) {
		var r, a = e.message, i = o("WAJids").userIdFromJid(o("WAGlobals").getMyUserJid()), l = e.message.senderId === i, s = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(a.payload);
		if (((r = s.adminMessage()) == null || (r = r.proto) == null ? void 0 : r.xmatGroupThreadCreated) != null || e.insertionSource === o("MpsTypes").InsertionSource.Receive && l && s.adminMessage() == null) return !1;
		var u = a.threadId, c = a.timestampMs, d = C(s, e.insertionSource);
		e: {
			if ((typeof e.directive == "object" && e.directive !== null || typeof e.directive == "function") && "actionType" in e.directive && e.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel) return b({
				activities: t,
				activityType: d,
				dbNewestMsgTs: n,
				isLocalDeviceSend: l,
				threadId: u,
				timestampMs: c
			});
			if ((typeof e.directive == "object" && e.directive !== null || typeof e.directive == "function") && "actionType" in e.directive && e.directive.actionType === o("MpsTypes").ActionType.UpsertSupplemental) {
				var m, p = (m = s.encryptedTransportMessage()) == null || (m = m.consumerMessage()) == null || (m = m.proto) == null || (m = m.payload) == null || (m = m.content) == null ? void 0 : m.reactionMessage;
				return p == null || l || y(p.key, e.message.senderId) !== i ? !1 : p.text == null || p.text === "" ? b({
					activities: t,
					activityType: "pending_unbump",
					dbNewestMsgTs: n,
					isLocalDeviceSend: !1,
					threadId: u,
					timestampMs: c
				}) : b({
					activities: t,
					activityType: d,
					dbNewestMsgTs: n,
					isLocalDeviceSend: !1,
					threadId: u,
					timestampMs: c
				});
			}
			if ((typeof e.directive == "object" && e.directive !== null || typeof e.directive == "function") && "actionType" in e.directive && e.directive.actionType === o("MpsTypes").ActionType.DeleteSupplemental || (typeof e.directive == "object" && e.directive !== null || typeof e.directive == "function") && "actionType" in e.directive && e.directive.actionType === o("MpsTypes").ActionType.DeleteThread) return !1;
			if ((typeof e.directive == "object" && e.directive !== null || typeof e.directive == "function") && "actionType" in e.directive && e.directive.actionType === o("MpsTypes").ActionType.DeleteTopLevel) return b({
				activities: t,
				activityType: "pending_unbump",
				dbNewestMsgTs: n,
				isLocalDeviceSend: !1,
				threadId: u,
				timestampMs: c
			});
			if ((typeof e.directive == "object" && e.directive !== null || typeof e.directive == "function") && "actionType" in e.directive && e.directive.actionType === o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder || (typeof e.directive == "object" && e.directive !== null || typeof e.directive == "function") && "actionType" in e.directive && e.directive.actionType === o("MpsTypes").ActionType.Noop || (typeof e.directive == "object" && e.directive !== null || typeof e.directive == "function") && "actionType" in e.directive && e.directive.actionType === o("MpsTypes").ActionType.Unknown || (typeof e.directive == "object" && e.directive !== null || typeof e.directive == "function") && "actionType" in e.directive && e.directive.actionType === o("MpsTypes").ActionType.Preprocess || e.directive === null || e.directive === void 0) return !1;
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e.directive);
		}
	}
	function y(e, t) {
		if (e == null) return null;
		if (e.participant != null) {
			var n = o("WAJids").validateUserJid(e.participant);
			return n == null ? null : o("WAJids").userIdFromJid(n);
		}
		var r = e.fromMe;
		if (r == null) return null;
		if (r) return t;
		if (e.remoteJid == null) return null;
		var a = o("WAJids").validateUserJid(e.remoteJid);
		return a == null ? null : o("WAJids").userIdFromJid(a);
	}
	function C(e, t) {
		var n;
		return ((n = e.encryptedTransportEvent()) == null ? void 0 : n.proto.event) != null || e.adminMessage() != null ? "admin" : t === o("MpsTypes").InsertionSource.Send ? "outgoing" : t === o("MpsTypes").InsertionSource.Receive ? "incoming" : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
	}
	function b(e) {
		var t, n, o = e.activities, a = e.activityType, i = e.dbNewestMsgTs, l = e.isLocalDeviceSend, s = e.threadId, u = e.timestampMs, c = (t = (n = o.get(s)) == null ? void 0 : n.ts) != null ? t : i.get(s);
		return c != null && c >= u && l === !1 ? !1 : u <= 100 ? (r("FBLogger")("wmi").warn("Timestamp is too small, thread will not be bumped"), !1) : (o.set(s, {
			activityType: a,
			ts: u
		}), !0);
	}
	function v(t, n) {
		var a = [], i = [], l = [];
		t.forEach(function(t) {
			var s = n.get(t);
			if (s == null) {
				r("FBLogger")("wmi").warn("Thread consistency does not have activity, despite thread update is requested");
				return;
			}
			var u = S(s.activityType);
			if (u == null) {
				a.push(t);
				return;
			}
			var c = o("MAWJids").threadIdToChatJid(t);
			i.push({
				bumpTimestampMs: (e || (e = o("I64"))).of_float(s.ts),
				chatJid: c,
				source: u
			}), l.push(o("MAWBridgeTypesCreators").createBridgeUpdatedThread({ threadJid: c }));
		});
		var s = i.map(function(e) {
			return {
				tag: "UpdateThreadActivity",
				value: e
			};
		});
		for (var u of l) s.push({
			tag: "ThreadUpdated",
			value: u
		});
		return o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: s }), { unbumps: a };
	}
	function S(e) {
		return e === "outgoing" ? "outgoing_msg" : e === "incoming" ? "incoming_msg" : e === "admin" ? "inserted_admin_msg" : e === "unbump" ? "deleted_msg" : e === "pending_unbump" ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function R(e, t, n) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a = v(e, t), i = a.unbumps;
			if (i.length !== 0) {
				var l = (o("WABaseGlobals").newClockSkewCalculation() ? o("WATimeUtils").unixTimeMs() : Date.now()) + 6e4, s = yield o("WebMps").mps().batchLoadMessages({
					config: {
						shouldFetchSupplementals: !1,
						shouldFetchTags: !1,
						shouldIgnoreLocalOnly: !0,
						strategy: "local-only",
						tagsFilter: "all"
					},
					debug: { purpose: "threads-consistency-unbump" },
					ranges: i.map(function(e) {
						return {
							direction: "desc",
							from: [o("MpsTypes").toTimestamp(l), void 0],
							numMessages: 1,
							threadId: e
						};
					})
				});
				if (s.success !== !1) {
					var u = new Map(), c = s.value.map(function(e) {
						var r = e.messages[0];
						if (r == null) return null;
						var o = r.toplevelProtobuf.threadId, a = r.toplevelProtobuf.messageId, i = r.toplevelProtobuf.timestampMs, l = t.get(o);
						if ((l == null ? void 0 : l.activityType) === "pending_unbump") return t.set(o, {
							activityType: "unbump",
							ts: i
						}), u.set(o, {
							messageId: a,
							ts: i
						}), o;
						if (b({
							activities: t,
							activityType: "unbump",
							dbNewestMsgTs: n,
							isLocalDeviceSend: !1,
							threadId: o,
							timestampMs: i
						})) return u.set(o, {
							messageId: a,
							ts: i
						}), o;
					}).filter(Boolean);
					u.size > 0 && m(u).catch(function(e) {
						r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).warn("Failed to persist unbumped thread fields for MPS-only path");
					}), v(new Set(c), t);
				}
			}
		}), L.apply(this, arguments);
	}
	l.MawThreadsConsistencyPostprocessor = f;
}), 98);
