__d("MAWRestoreMsgsTxns", [
	"ArmadilloDataTraceType",
	"FBLogger",
	"LSMEBTaskCreationSource",
	"MAWAdminMsgTypesGrouped",
	"MAWBridgeEventTransmitter",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWJidUtils",
	"MAWLocalizationType",
	"MAWMsgType",
	"MAWQplProxy",
	"MAWRestoreMsgsUiUpdator",
	"MAWTimeUtils",
	"MAWTransactionMode",
	"MAWUseProtocolMsgIdForMsgId",
	"WAHashStringToNumber",
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"emptyFunction",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t, n) {
		return o("MAWDbMsgTxns").maybeGetMsg(e, n).then(function(n) {
			return n != null ? e.messages.where(["threadJid", "sortOrderMs"]).between([t.jid, n.sortOrderMs], [t.jid, o("MAWDbMsg").MAX_MSG_SORT_ORDER], !1, !0).limit(1).first() : o("MAWDexieTable").dexieResolve();
		});
	}
	function d(e) {
		return e != null && e.type === o("MAWMsgType").MSG_TYPE.ADMIN && (e.msgContent.adminType === o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION || e.msgContent.adminType === o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_THREAD_ADMIN_MESSAGE || e.msgContent.adminType === o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_IGD_THREAD_ADMIN_MESSAGE || e.msgContent.adminType === o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE || o("MAWAdminMsgTypesGrouped").dualThreadCutoverAdminMsgs.includes(e.msgContent.adminType));
	}
	function m(e, t) {
		var n = Number(e);
		for (var a of t) r("FBLogger")("wmi_eb").info("completed point restore of an unavailable msg with instanceKey: %s", n), o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(1056840931, "814"), "eb_point_restore_end", {
			annotations: {
				int: { msgId: o("WAHashStringToNumber").hashStringToNumber(a.externalId) },
				string: { jid: a.threadJid }
			},
			instanceKey: n
		}), o("MAWQplProxy").sendQPLSuccessThroughBridge(r("qpl")._(1056840931, "814"), { int: { msgId: o("WAHashStringToNumber").hashStringToNumber(a.externalId) } }, n);
	}
	function p(e, t, n, r, a, i, l, s, u) {
		var c = i.isOldestMsgUpdated, d = i.lastReadMsg, m = i.lastReadMsgTs, p = i.newestMsgTs, _ = i.oldestMsgId, f = !0;
		t && (f = g(p, r));
		var h = o("MAWDexieTable").dexieResolve();
		return f && a.length > 0 && (h = o("MAWRestoreMsgsUiUpdator").updateThreadAndMessages(e, a, p, m, n, c, d, _, l, s, u)), h.then(function() {
			return o("MAWDexieTable").dexieResolve();
		});
	}
	function _(e) {
		var t = e.existingMsgs, n = e.hasMoreBefore, a = e.instanceKey, i = e.isPointRestore, l = e.maybeNewestMsg, s = e.maybeOldestAdminMsg, u = e.maybeOldestMsg, c = e.minMsgId, d = e.newMsgs, m = e.optimisticMsgs, p = e.shouldSkipSyncToUI, _ = e.taskSource, f = e.thread, g = _ === r("LSMEBTaskCreationSource").EB_POINT_QUERY_RETRY_DECRYPTION_FAILURES, h = new Map(), y = [];
		t.map(function(e) {
			e.type === o("MAWMsgType").MSG_TYPE.UNAVAILABLE || e.type === o("MAWMsgType").MSG_TYPE.CIPHERTEXT ? y.push(e) : h.set(e.externalId, e);
		});
		var C = [];
		return v(d, t, f.jid, h, l, i, s, u, C, m, a, n, c, g, y, p).then(function(e) {
			return e;
		});
	}
	function f(e, t) {
		e.altIndex !== o("MAWDbMsg").SPAM_ALT_INDEX && e.altIndex !== o("MAWDbMsg").FUTUREPROOF_SPAM_ALT_INDEX && o("MAWBridgeEventTransmitter").startTraceOutsideTxn(e, t, o("ArmadilloDataTraceType").armadilloMessageSend);
	}
	function g(e, t) {
		return e == null ? !0 : t.some(function(t) {
			return t.sortOrderMs != null && t.sortOrderMs >= e;
		});
	}
	function h(e, t, n, a, i, l, s, u, c) {
		return o("MAWDexieTable").dexieAll(t.map(function(t) {
			return o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, t.externalId, n.jid, t.author).then(function(e) {
				if (e == null) {
					var r = a.get(t.externalId);
					if (r == null) {
						var m = o("WATimeUtils").castUnixTimeToMillisTime(t.ts);
						u.newestMsgTs = m > u.newestMsgTs ? m : u.newestMsgTs;
						var p = o("MAWUseProtocolMsgIdForMsgId").shouldUseProtocolMsgIdForMsgId() ? o("MAWJidUtils").formatProtocolMsgIdFromMsg(t) : o("MAWDbMsg").craftMsgIdV2(n.chatId, u.msgNextInChatMsgId, t);
						u.msgNextInChatMsgId += 1, (u.oldestMsgId == null || !l && m < u.oldestMsgTs) && (u.isOldestMsgUpdated = !0, u.oldestMsgId = s != null && o("WATimeUtils").castUnixTimeToMillisTime(s.ts) < m ? s.msgId : p, u.oldestMsgTs = s != null && o("WATimeUtils").castUnixTimeToMillisTime(s.ts) < m ? o("WATimeUtils").castUnixTimeToMillisTime(s.ts) : m), (u.newestMsgTs === m || d(i)) && (u.newestMsgId = p), t.author === o("WAJids").AUTHOR_ME && (u.lastReadMsgTs == null || m > u.lastReadMsgTs) && (u.lastReadMsg = p, u.lastReadMsgTs = m);
						var _ = babelHelpers.extends({}, t, {
							msgId: p,
							sortOrderMs: o("MAWDbMsg").getSortOrderWithFallback(t)
						});
						c.push(_);
					}
				}
			});
		})).then(r("emptyFunction"));
	}
	function y(e, t) {
		return o("MAWDexieTable").dexieAll([
			o("MAWDbMsgTxns").getThreadNewestMessageId(e, t.jid),
			o("MAWDbMsgTxns").getThreadNewestMessageMs(e, t.jid),
			o("MAWUseProtocolMsgIdForMsgId").shouldUseProtocolMsgIdForMsgId() ? o("MAWDexieTable").dexieResolve(0) : o("MAWDbMsgTxns").getNextMsgIdNumberForThread(e, t)
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return {
				newestMsgId: t,
				newestMsgTs: n,
				nextInChatMsgId: r
			};
		});
	}
	function C(e, t, n, a, i, l, s, u, c, d, m) {
		return h(e, t, n, a, i, l, s, u, c).then(function(t) {
			if (d != null) for (var i of c) {
				var l = i.externalId, s = d.get(l);
				s != null && (i.ts = o("WATimeUtils").castMilliSecondsToUnixTime(s.ts));
			}
			var u = r("justknobx")._("3227") ? c.map(function(e) {
				return babelHelpers.extends({}, e, { source: m === !0 ? "media_restore" : "eb_restore" });
			}) : c;
			return o("MAWDexieTable").dexieAll([e.messages.bulkAdd(u, { allKeys: !0 }).then(function(e) {
				return e.map(function(e, t) {
					return babelHelpers.extends({}, u[t], { rowId: e });
				});
			}), m !== !0 && r("justknobx")._("3227") ? e.messages.bulkPut(Array.from(a.values()).map(function(e) {
				return babelHelpers.extends({}, e, { source: "eb_restore" });
			})) : o("MAWDexieTable").dexieResolve()]).then(function(t) {
				var r = t[0];
				return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(n, {}, "MAWRestoreMsgsTxns.createRestoredMessages"), o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(r) : e.threads.put(n).then(function() {
					return r;
				});
			});
		});
	}
	function b(e, t, n) {
		var r = t.map(function(e) {
			var t = n.find(function(t) {
				return t.externalId === e.externalId;
			});
			if (t == null) return null;
			var r = babelHelpers.extends({
				externalId: t.externalId,
				msgId: t.msgId,
				protocolMsgId: t.protocolMsgId,
				rowId: t.rowId
			}, e);
			return r;
		}).filter(Boolean);
		return e.messages.bulkPut(r).then(function() {});
	}
	var v = o("MAWIndexedDb").makeMsgrTransactor({
		ftsBackloggedMessages: (u = o("MAWTransactionMode")).READWRITE,
		groupInfo: u.READWRITE,
		messages: u.READWRITE,
		threads: u.READWRITE
	}, "createRestoredMessagesAndUpdateThread", function(t) {
		return (function(n, r, a, i, l, u, c, d, m, _, g, h, v, S, R, L) {
			var E = a != null && o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(a)) : t.threads.get({ jid: a });
			return E.then(function(g) {
				var S = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(g, "MAWRestoreMsgsTxns.createRestoredMessagesAndUpdateThread");
				return S == null ? (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Thread with jid ", " does not exist for restore"])), a), o("MAWDexieTable").dexieResolve()) : y(t, S).then(function(e) {
					var a, g = e.newestMsgId, y = e.newestMsgTs, E = e.nextInChatMsgId, k = {
						isOldestMsgUpdated: !1,
						lastReadMsg: S.lastReadMsg,
						lastReadMsgTs: o("MAWTimeUtils").ensureValidMillisTime(S.lastReadMsgTs),
						msgNextInChatMsgId: E,
						newestMsgId: g,
						newestMsgTs: o("MAWTimeUtils").ensureValidMillisTime(y) || o("WATimeUtils").castToMillisTime(0),
						oldestMsgId: d == null ? void 0 : d.msgId,
						oldestMsgTs: o("WATimeUtils").castUnixTimeToMillisTime((a = d == null ? void 0 : d.ts) != null ? a : o("WATimeUtils").castToUnixTime(0))
					}, I = b(t, n, R);
					return I.then(function() {
						return o("MAWDexieTable").dexieAll([C(t, n, S, i, l, u, c, k, m, _, L)]).then(function(e) {
							var n = e[0];
							if (L !== !0) for (var a of n) f(a, S.jid);
							var i = r.concat(n), l = {
								existingMsgs: r,
								newlyAddedMsgs: n,
								threadJid: S.jid
							}, s = L !== !0 ? p(t, u, S, i, n, k, v, c, h) : o("MAWDexieTable").dexieResolve();
							return s.then(function() {
								return l;
							});
						}).catch(function(e) {
							o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Failed to create restored messages and update thread metadata ", ""])), e);
						});
					});
				});
			});
		});
	});
	l.getNextMsgBasedOnSortOrderMs = c, l.isE2eeOrCutoverAdminMsg = d, l.restoreMsgsForThread = _;
}), 98);
