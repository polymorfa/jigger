__d("MAWDbMsgTxns", [
	"EncryptedBackupsUtils",
	"FBLogger",
	"MAWAckLevel",
	"MAWBridgeMsg",
	"MAWDbMsg",
	"MAWDbMsgUtil",
	"MAWDbThreadTxns",
	"MAWDbUnrenderedMsgTxns",
	"MAWDbXMATxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWJidUtils",
	"MAWLoadReplyMediaTxns",
	"MAWMessageSortOrderUtils",
	"MAWMsgType",
	"MAWODSProxy",
	"Random",
	"WAArrayGroupBy",
	"WAJids",
	"WALogger",
	"WAMsg",
	"WAMsgMap",
	"WAOdsEnums",
	"WAResultOrError",
	"WATimeUtils",
	"emptyFunction",
	"gkx",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g;
	function h(e, t) {
		return t == null ? o("MAWDexieTable").dexieResolve() : e.messages.get({ msgId: t });
	}
	function y(e, t) {
		return e.messages.where("threadJid").equals(t).count().then(function(e) {
			return e === 0;
		});
	}
	function C(e, t, n) {
		return e.messages.where("threadJid").equals(t).filter(n).first().then(function(e) {
			return e != null;
		});
	}
	function b(e, t, n, r) {
		return e.messages.where(["threadJid", "sortOrderMs"]).between([t, Number.MIN_SAFE_INTEGER], [t, Number.MAX_SAFE_INTEGER], n, r);
	}
	function v(e, t) {
		return b(e, t, !1, !1).last();
	}
	function S(e, t) {
		return v(e, t).then(function(e) {
			return e == null ? void 0 : e.msgId;
		});
	}
	function R(e, t) {
		return v(e, t).then(function(e) {
			return (e == null ? void 0 : e.sortOrderMs) == null ? null : o("WATimeUtils").castToMillisTime(e.sortOrderMs);
		});
	}
	function L(e, t) {
		return b(e, t, !1, !1).first();
	}
	function E(e, t) {
		return L(e, t).then(function(e) {
			return e == null ? void 0 : e.msgId;
		});
	}
	function k(e, t) {
		return e.messages.where("externalId").equals(t.externalId).filter(function(e) {
			return e.author === t.author && e.threadJid === t.chat;
		}).toArray().then(T);
	}
	function I(e, t) {
		var n = new Set(t.map(function(e) {
			var t = e.author, n = e.chat, r = e.externalId;
			return o("WAMsg").craftWAMsgIdString({
				author: t,
				chat: n,
				externalId: r
			});
		}));
		return e.messages.where("externalId").anyOf(t.map(function(e) {
			var t = e.externalId;
			return t;
		})).filter(function(e) {
			var t = e.author, r = e.externalId, a = e.threadJid;
			return n.has(o("WAMsg").craftWAMsgIdString({
				author: t,
				chat: a,
				externalId: r
			}));
		}).toArray().then(function(e) {
			return o("WAArrayGroupBy").groupBy(e, function(e) {
				return o("WAMsg").craftWAMsgIdString({
					author: e.author,
					chat: e.threadJid,
					externalId: e.externalId
				});
			}).map(function(e) {
				var t = e[0], n = e[1];
				return T(n);
			}).filter(Boolean);
		});
	}
	function T(t) {
		if (t.length > 1) {
			var n = t.map(function(e) {
				var t, n;
				return e.type + ":" + ((t = e.serverTs) != null ? t : 0).toString() + ":" + ((n = e.ts) != null ? n : 0).toString();
			}), a = new Set(n).size === 1;
			a ? o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[maybeGetMsgByProtocolMsgId] Suspected multiple instances of same message!"]))) : o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[maybeGetMsgByProtocolMsgId] Can't have ", " messages with the same protocolMsgId!"])), t.length), (r("gkx")("5039") || o("Random").coinflip(r("justknobx")._("3594"))) && D(t);
		}
		return t[0];
	}
	function D(e) {
		var t = e.length;
		if (!(t <= 1)) {
			var n = t - 1, a = e[n], i = {
				editCount: 0,
				mediaId: 0,
				revokedStatus: 0,
				serverTs: 0,
				sortOrderMs: 0,
				ts: 0,
				type: 0
			};
			e.slice(0, n).forEach(function(e) {
				var t = [];
				if ((e == null ? void 0 : e.editCount) !== (a == null ? void 0 : a.editCount)) {
					var n, l;
					i.editCount++, t.push("editCount, reference: " + ((n = a == null ? void 0 : a.editCount) != null ? n : "") + ", duplicate: " + ((l = e == null ? void 0 : e.editCount) != null ? l : "") + ". ");
				}
				if ((e == null ? void 0 : e.mediaId) !== (a == null ? void 0 : a.mediaId) && (i.mediaId++, t.push("mediaId, reference: " + ((a == null ? void 0 : a.mediaId) != null ? String(a.mediaId) : "") + ", duplicate: " + ((e == null ? void 0 : e.mediaId) != null ? String(e.mediaId) : "") + ". ")), e.sortOrderMs !== a.sortOrderMs && (i.sortOrderMs++, t.push("sortOrderMs, reference: " + String(a.sortOrderMs) + ", duplicate: " + String(e.sortOrderMs) + ". ")), e.serverTs !== a.serverTs && (i.serverTs++, t.push("serverTs, reference: " + String(a.serverTs) + ", duplicate: " + String(e.serverTs) + ". ")), e.ts !== a.ts && (i.ts++, t.push("ts, reference: " + String(a.ts) + ", duplicate: " + String(e.ts) + ". ")), e.type !== a.type) {
					var s, u;
					(e.type === o("MAWMsgType").MSG_TYPE.REVOKED || a.type === o("MAWMsgType").MSG_TYPE.REVOKED) && (i.revokedStatus++, r("FBLogger")("MAWDuplicateMessageComparison").info("Revoked duplicate msg conflict, duplicate message, %s, has type: %s, externalId: %s, revokedExternalId: %s, sortOrderMs: %s, serverTs: %s, ts: %s, rowId: %s, reference msg, %s, has type: %s, externalId: %s, revokedExternalId: %s, sortOrderMs: %s, serverTs: %s, ts: %s, rowId: %s", e.msgId, e.type, e.externalId, e.revokedExternalId, e.sortOrderMs, e.serverTs, e.ts, e.rowId, a.msgId, a.type, a.externalId, a.revokedExternalId, e.sortOrderMs, e.serverTs, e.ts, e.rowId)), i.type++, t.push("type, reference: " + ((s = a.type) != null ? s : "") + ", duplicate: " + ((u = e.type) != null ? u : "") + ". ");
				}
				var c = t.join("");
				c.length > 0 ? r("FBLogger")("MAWDuplicateMessageComparison").info("Duplicate msg, %s, has conflicting field values to reference msg, %s: %s", e.msgId, a.msgId, c) : r("FBLogger")("MAWDuplicateMessageComparison").info("Duplicate msg, %s, has no conflicting field values to reference msg, %s", e.msgId, a.msgId);
			}), o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_DUPLICATE_MSGS,
				key: "sets_of_duplicate_msgs"
			}), Object.keys(i).forEach(function(e) {
				var t = i[e];
				t > 0 && o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_DUPLICATE_MSGS,
					key: "sets_of_duplicate_msgs_with_" + e + "_field_differences"
				});
			}), o("MAWODSProxy").odsBumpEntityKey({
				amount: t - 1,
				entity: o("WAOdsEnums").Entity.MAW_DUPLICATE_MSGS,
				key: "number_of_duplicate_msgs"
			}), Object.keys(i).forEach(function(e) {
				var t = i[e];
				t > 0 && o("MAWODSProxy").odsBumpEntityKey({
					amount: t,
					entity: o("WAOdsEnums").Entity.MAW_DUPLICATE_MSGS,
					key: "number_of_duplicate_msgs_with_" + e + "_field_differences"
				});
			});
		}
	}
	function x(e, t, n, r) {
		var o = {
			author: r,
			chat: n,
			externalId: t
		};
		return k(e, o);
	}
	function $(e, t) {
		return e.messages.where("msgId").equals(t).toArray();
	}
	function P(e, t) {
		return w(e, t).then(function(e) {
			return e.success, e;
		});
	}
	function N(e, t) {
		var n = t.map(function(e) {
			var t = e.externalId;
			return t;
		});
		return e.messages.where("externalId").anyOf(n).toArray().then(function(e) {
			var n = o("MAWDbMsgUtil").convertMsgArrayToMap(e), r = new (o("WAMsgMap")).MsgMap();
			return t.forEach(function(e) {
				var t = n.get(e);
				t != null && r.set(e, t);
			}), r;
		});
	}
	function M(e, t) {
		return e.messages.where("msgId").equals(t).first().then(function(e) {
			return e == null ? void 0 : e.sortOrderMs;
		});
	}
	function w(e, t) {
		var n = t.author, r = t.chat, a = t.externalId, i = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(r)) : e.threads.get({ jid: r });
		return i.then(function(t) {
			var r = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(t, "MAWDbMsgTxns.maybeMakeMsgByProtocolMsgId");
			return r == null ? o("WAResultOrError").makeError("missing_thread_msg") : x(e, a, r.jid, n).then(function(e) {
				return e == null ? o("WAResultOrError").makeError("missing_msg") : o("WAResultOrError").makeResult(e);
			});
		});
	}
	function A(e, t) {
		var n = t.author, r = t.chat, a = t.externalId, i = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(r)) : e.threads.get({ jid: r });
		return i.then(function(t) {
			var r = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(t, "MAWDbMsgTxns.maybeGetRevokedMsgByProtocolMsgId");
			if (r != null) return e.messages.where("revokedExternalId").equals(a).filter(function(e) {
				return e.author === n && e.threadJid === r.jid && e.type === "Revoked";
			}).first();
		});
	}
	function F(e, t, n, r) {
		var a = e.messages.where("revokedExternalId").equals(t).filter(function(e) {
			return e.author === r && e.threadJid === n && e.type === o("MAWMsgType").MSG_TYPE.REVOKED;
		}).first(), i = o("MAWDbUnrenderedMsgTxns").maybeGetUnrenderedMsgByExternalId(e, t, n, r).then(function(e) {
			if ((e == null ? void 0 : e.type) === o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME) return e;
		});
		return o("MAWDexieTable").dexieAll([a, i]).then(function(e) {
			var t = e[0], n = e[1];
			return t != null || n != null;
		});
	}
	function O(e, t) {
		var n = new Array(t.length), r = new Set();
		return t.forEach(function(e) {
			n.push(e.externalId), r.add(o("EncryptedBackupsUtils").convertWAMsgIdToStringId(e));
		}), e.messages.where("externalId").anyOf(n).filter(function(e) {
			return r.has(o("EncryptedBackupsUtils").convertWAMsgIdToStringId({
				author: e.author,
				chat: e.threadJid,
				externalId: e.externalId
			}));
		}).toArray();
	}
	function B(e, t, n, r, a, i) {
		return W(e, [{
			ack: n,
			applicationErrorCode: i,
			msgId: t,
			reportingMeta: a,
			serverTs: r
		}]).then(function(e) {
			var n = e.find(function(e) {
				return e.msgId === t;
			});
			return n == null ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["updateSystemAck on non existing message"]))), null) : n;
		});
	}
	function W(e, t) {
		var n = t.map(function(e) {
			return e.msgId;
		});
		return o("MAWDbXMATxns").getXMAMsgIdsFromAssociatedMsgIds(e, n).then(function(r) {
			var a = new Map();
			t.forEach(function(e) {
				a.set(e.msgId, {
					ack: e.ack,
					applicationErrorCode: e.applicationErrorCode,
					reportingMeta: e.reportingMeta,
					serverTs: e.serverTs
				});
				var t = r.get(e.msgId);
				t != null && a.set(t, {
					ack: e.ack,
					applicationErrorCode: e.applicationErrorCode,
					reportingMeta: e.reportingMeta,
					serverTs: e.serverTs
				});
			});
			var i = Array.from(new Set(n.concat(Array.from(r.values()))));
			return e.messages.where("msgId").anyOf(i).toArray().then(function(t) {
				if (t.length === 0) return t;
				var n = [], r = [];
				return t.forEach(function(e) {
					var t, i, l;
					if (e.author !== o("WAJids").AUTHOR_ME || e.ack > o("MAWAckLevel").ACK.clock) {
						n.push(e);
						return;
					}
					var s = (t = a.get(e.msgId)) == null ? void 0 : t.ack, u = (i = a.get(e.msgId)) == null ? void 0 : i.serverTs;
					if (s == null) return null;
					var c = babelHelpers.extends({}, e, { ack: s });
					q(c, u);
					var d = (l = a.get(e.msgId)) == null ? void 0 : l.reportingMeta;
					d != null && (c.reportingMeta = d), s === o("MAWAckLevel").ACK.sent && delete c.resendCount, r.push(c);
				}), n.length > 0 && o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["bulkUpdateSystemAck: not updating ", ""])), n.map(function(e) {
					return e.msgId;
				}).toString()), e.messages.bulkPut(r).then(function() {
					return o("MAWDexieTable").dexieAll(r.map(function(t) {
						return o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(e, t);
					}));
				}).then(function(e) {
					return r.forEach(function(t, n) {
						o("MAWIndexedDb").afterTransaction({
							tag: "MsgUpdated",
							value: o("MAWBridgeMsg").createBridgeMsg(t, e[n])
						});
					}), [].concat(r, n);
				});
			});
		});
	}
	function q(e, t) {
		if (t != null) {
			e.serverTs = t;
			var n = e.sortOrderMs;
			e.type !== o("MAWMsgType").MSG_TYPE.REVOKED && (e.sortOrderMs = o("MAWMessageSortOrderUtils").generateAuthoritativeMessageSortOrder(e), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"Message was acked by server (serverTs = ",
				"), override sortOrderMs: ",
				" -> ",
				""
			])), t, n, e.sortOrderMs));
		}
	}
	function U(e, t, n, a) {
		return o("MAWDbThreadTxns").getThread(e, t).then(function(t) {
			if (!(!t.success || a == null)) {
				var i = t.value, l = [e.messages.where(["threadJid", "sortOrderMs"]).above([i.jid, a]).first(), e.messages.where(["threadJid", "sortOrderMs"]).below([i.jid, a]).last()];
				return o("MAWDexieTable").dexieAll(l).then(function(t) {
					var a = t[0], l = t[1], s = babelHelpers.extends({}, i, {
						newestMsgTs: (l == null ? void 0 : l.ts) == null ? i.newestMsgTs : o("WATimeUtils").castUnixTimeToMillisTime(l.ts),
						oldestMsg: i.oldestMsg === n ? a == null ? void 0 : a.msgId : i.oldestMsg
					});
					return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(s, {
						newestMsgTs: s.newestMsgTs,
						oldestMsg: s.oldestMsg
					}, "MAWDbMsgTxns.maybeUpdateThreadMsgsForDeleteForMe"), o("MAWDbThreadTxns").updateThread(e, s).then(r("emptyFunction"));
				});
			}
		});
	}
	function V(e) {
		return e.messages.where("altIndex").equals(o("MAWDbMsg").FUTUREPROOF_ALT_INDEX).toArray().then(function(e) {
			var t = [];
			return e.forEach(function(e) {
				if (e.type !== o("MAWMsgType").MSG_TYPE.FUTUREPROOF) {
					o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
						"getFutureproofMsg gets a message ",
						" with unsupported type ",
						""
					])), e.msgId, e.type);
					return;
				}
				t.push(e);
			}), t;
		});
	}
	function H(e) {
		return e.toString();
	}
	function G(e, t, n, a) {
		var i = t.mediaId;
		if (i === n) return o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
			"updateMediaId on message ",
			" that already has this mediaId ",
			""
		])), t.msgId, n), o("MAWDexieTable").dexieResolve();
		var l = i != null ? e.media.get(i) : o("MAWDexieTable").dexieResolve();
		return l.then(function(i) {
			i && o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Replacing mediaId for message with pre-existing media. type=", ""])), t.type);
			var l = a != null ? a : void 0, s = babelHelpers.extends({}, t, {
				mediaId: n,
				plaintextHash: l
			});
			return e.messages.put(s).then(r("emptyFunction"));
		});
	}
	function z(e, t) {
		var n = Array.from(t.keys());
		return e.messages.where("msgId").anyOf(n).toArray().then(function(n) {
			var a = [];
			return n.map(function(e) {
				var n = t.get(e.msgId), i = e.mediaId;
				if (i != null && i !== n) {
					if (n != null) throw r("FBLogger")("messenger_web").mustfixThrow("mediaId " + H(i) + " in message " + e.msgId + " is different with the " + H(n) + " in bulkUpdateMediaId");
					o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
						"updateMediaId on message ",
						" that already has this mediaId ",
						""
					])), e.msgId, n);
					return;
				}
				var l = babelHelpers.extends({}, e, {
					mediaId: n,
					plaintextHash: e.plaintextHash
				});
				a.push(l);
			}), e.messages.bulkPut(a).then(r("emptyFunction"));
		});
	}
	function j(e, t) {
		return K(e, [t]).then(r("emptyFunction"));
	}
	function K(e, t) {
		return e.messages.where("msgId").anyOf(t).toArray().then(function(t) {
			var n = t.map(function(e) {
				return babelHelpers.extends({}, e, { isExpiredXmaMsg: !0 });
			});
			return e.messages.bulkPut(n).then(function() {
				return n;
			});
		});
	}
	function Q(e, t, n, r) {
		if (r != null && r <= 0) return o("MAWDexieTable").dexieResolve([]);
		var a = e.messages.where("altIndex").equals(o("MAWDbMsg").craftToBeReadAltIndex(t)).filter(function(e) {
			return o("MAWDbMsg").getSortOrderWithFallback(e) <= n;
		});
		return r != null && (a = a.limit(r)), a.toArray();
	}
	function X(e, t, n) {
		return Q(e, t, n).then(function(t) {
			var n = t.map(function(e) {
				return babelHelpers.extends({ altIndex: null }, e);
			});
			return e.messages.bulkPut(n).then(function() {
				return n;
			});
		});
	}
	function Y(e, t) {
		return e.messages.delete(t);
	}
	function J(e, t) {
		return e.messages.bulkDelete(t);
	}
	function Z(e, t, n) {
		var r = t.map(function(e) {
			return e.rowId;
		}), a = n != null ? t.map(function(e) {
			var t = o("MAWJidUtils").toProtocolMsgId(e);
			if (t) return babelHelpers.extends({}, t, { reason: n });
		}).filter(Boolean) : [];
		return o("MAWDexieTable").dexieAll([e.deletedMessages.bulkAdd(a), e.messages.bulkDelete(r)]).then(function(e) {
			var t = e[0], n = e[1];
			o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Successfull deleted ", " messages"])), n);
		});
	}
	function ee(e, t) {
		return e.messages.where("msgId").anyOf(t).toArray();
	}
	function te(e) {
		return e.messages.where("altIndex").anyOf([o("MAWDbMsg").SPAM_ALT_INDEX, o("MAWDbMsg").FUTUREPROOF_SPAM_ALT_INDEX]).toArray();
	}
	function ne(e, t, n, r, a, i, l, s) {
		l === void 0 && (l = "before"), s === void 0 && (s = null);
		var u = n == null ? null : o("MAWDbMsg").getSortOrderWithFallback(n);
		return l === "before" ? e.messages.where(["threadJid", "sortOrderMs"]).between([t, s != null ? s : Number.MIN_SAFE_INTEGER], [t, u != null ? u : Number.MAX_SAFE_INTEGER], !0, r).reverse().filter(i).limit(a).toArray() : e.messages.where(["threadJid", "sortOrderMs"]).between([t, u != null ? u : Number.MIN_SAFE_INTEGER], [t, s != null ? s : Number.MAX_SAFE_INTEGER], r, !0).filter(i).limit(a).toArray().then(function(e) {
			return e.sort(function(e, t) {
				return t.ts - e.ts;
			});
		});
	}
	function re(e, t, n, r) {
		var o = n.msgId;
		if (r == null) {
			var a;
			return { oldestMsg: (a = e == null ? void 0 : e.msgId) != null ? a : o };
		}
		var i = [
			e,
			t,
			n
		].filter(Boolean);
		return { oldestMsg: i.reduce(function(e, t) {
			return oe(e, o, r) < oe(t, o, r) ? e : t;
		}).msgId };
	}
	function oe(e, t, n) {
		return e.msgId === t ? n : o("MAWDbMsg").getSortOrderWithFallback(e);
	}
	function ae(e, t) {
		return e.messages.where("msgId").between(o("MAWDbMsg").msgIdsInChatLowerBound(t.chatId), o("MAWDbMsg").msgIdsInChatUpperBound(t.chatId)).last().then(function(e) {
			var t = e == null ? 0 : o("MAWDbMsg").getInChatMsgIdFromMsgId(e.msgId);
			return t + 1;
		});
	}
	function ie(e, t) {
		return e.messages.where("externalId").anyOf(t).toArray();
	}
	l.maybeGetMsg = h, l.getIsThreadEmpty = y, l.doesThreadHaveMsgsMatchCriteria = C, l.getThreadMessagesBySortOrder = b, l.getThreadNewestMessageBySortOrder = v, l.getThreadNewestMessageId = S, l.getThreadNewestMessageMs = R, l.getThreadOldestMessageBySortOrder = L, l.getThreadOldestMessageId = E, l.maybeGetMsgByProtocolMsgId = k, l.getUniqueMsgsByProtocolMsgIds = I, l.maybeGetMsgByExternalId = x, l.maybeGetMsgListByMsgId_I_KNOW_WHAT_I_AM_DOING = $, l.maybeGetMsgResultByProtocolMsgId = P, l.getMsgMapByProtocolMsgId = N, l.getSortOrderFromMsgId = M, l.maybeGetRevokedMsgByProtocolMsgId = A, l.checkIfMsgIsDeletedForMeOrRevoked = F, l.getMsgsByProtocolMsgId = O, l.updateSystemAck = B, l.bulkUpdateSystemAck = W, l.maybeUpdateThreadMsgsForDeleteForMe = U, l.getFutureProofMsgs = V, l.updateMediaId = G, l.bulkUpdateMediaId = z, l.updateDbMsgXMAExpiration = j, l.bulkUpdateDbMsgXMAExpired = K, l.getMsgsNeedingRetroactiveReadReceiptsUpTo = Q, l.clearRetroactiveReadReceiptStatusFromMsgsUpTo = X, l.deleteDbMsg = Y, l.bulkDeleteDbMsg = J, l.deleteMessages = Z, l.getMsgsByMsgIds = ee, l.getSpamMsgs = te, l.fetchMessagesFromDbWithSortOrderMs = ne, l.calculateOldestMsg = re, l.getNextMsgIdNumberForThread = ae, l.UNSAFE_getMultipleMsgsByExternalId = ie;
}), 98);
