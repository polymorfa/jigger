__d("MAWWriteMsgTxns", [
	"FBLogger",
	"MAWAfterWriteMsgUtil",
	"MAWBridgeMsg",
	"MAWBuildIncomingMsgs",
	"MAWDbEditMsgHistoryTxns",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDbPendingStanzaTxns",
	"MAWDbReactionsTxns",
	"MAWDbThread",
	"MAWDbThreadTxns",
	"MAWDbUnrenderedMsgTxns",
	"MAWDeleteForMeMsgContentCleaner",
	"MAWDeleteThreadUtil",
	"MAWDexieTable",
	"MAWEphemeralMsgTxns",
	"MAWExpiredQuoteCleaner",
	"MAWFolderTypes",
	"MAWGetMsgQuoteTxn",
	"MAWGetOrCreateThreadTxns",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWJidUtils",
	"MAWLoadReplyMediaTxns",
	"MAWLocalizationType",
	"MAWLocalizationUtils",
	"MAWMessageSortOrderUtils",
	"MAWMsgType",
	"MAWThreadEventConst",
	"MAWTimeUtils",
	"MAWUpdateQuotedMsgTxns",
	"MAWUseProtocolMsgIdForMsgId",
	"MAWWriteMsgSideEffectTxns",
	"MAWWriteRevokeMessageTxns",
	"ODS",
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"WormDbMigrationCompletenessCheck"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["rowId"], s, u, c, d = E();
	function m(e, t, n, a) {
		var i = n.ts, l = [o("WATimeUtils").castUnixTimeToMillisTime(i), n.type === o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN], s = l[0], u = l[1];
		return o("MAWGetOrCreateThreadTxns").getExistingThread(e, t.jid).then(function(t) {
			if (t == null) {
				var i = E() - d, l = o("WormDbMigrationCompletenessCheck").checkMigrationCompleteness("wmi-metadata-threads"), c = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively();
				throw r("FBLogger")("messenger_web").mustfixThrow("getThreadUpdatesAndMsgIdAndThreadSnippet: at this point there's always a thread - checking for updates  | uptime=%s | threadsMigrationComplete=%s | threadsExperimentActive=%s", String(i), String(l), String(c));
			}
			var m = o("MAWDbMsgTxns").getThreadOldestMessageBySortOrder(e, t.jid), p = o("MAWDbMsgTxns").getThreadNewestMessageBySortOrder(e, t.jid);
			return o("MAWDexieTable").dexieAll([m, p]).then(function(e) {
				var r, i, l, c = e[0], d = e[1], m = o("MAWUseProtocolMsgIdForMsgId").shouldUseProtocolMsgIdForMsgId() ? null : d == null ? 1 : o("MAWDbMsg").getInChatMsgIdFromMsgId(d.msgId) + 1, p = o("WATimeUtils").castToMillisTime((r = d == null ? void 0 : d.sortOrderMs) != null ? r : 0), _ = s > p && !u ? s : p, f = (i = o("MAWTimeUtils").ensureValidMillisTime(t.lastReadMsgTs)) != null ? i : 0, g = o("WATimeUtils").castToMillisTime((l = d == null ? void 0 : d.sortOrderMs) != null ? l : 0), h = f < g, y = n.author === o("WAJids").AUTHOR_ME || n.type === o("MAWMsgType").MSG_TYPE.ADMIN && o("MAWLocalizationUtils").isParticipantChangeAdminMsg(n.msgContent.adminType) && !h, C = babelHelpers.extends({}, n, { msgId: m != null ? o("MAWDbMsg").craftMsgIdV2(t.chatId, m, n) : o("MAWJidUtils").formatProtocolMsgIdFromMsg(n) }), b = o("MAWDbMsgTxns").calculateOldestMsg(c, d, C, a), v = b.oldestMsg;
				return {
					isOldestMsgUpdated: c != null && v !== c.msgId,
					msgId: C.msgId,
					prevOldestMsg: c,
					updatedSnippet: void 0,
					updatedThread: babelHelpers.extends({}, t, {
						lastReadMsg: y ? C.msgId : t.lastReadMsg,
						lastReadMsgTs: y ? _ : t.lastReadMsgTs,
						newestMsgTs: _,
						oldestMsg: v,
						snippetMsg: t.snippetMsg,
						snippetMsgTs: t.snippetMsgTs,
						threadOrder: o("MAWDbThread").craftThreadOrder(_, t.jid)
					})
				};
			});
		});
	}
	function p(e, t, n, r) {
		return e.messages.where(["threadJid", "sortOrderMs"]).equals([n.jid, r]).filter(function(e) {
			return e.type !== o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN && e.type !== o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION ? !1 : e.type === t.type && e.msgContent.adminType === t.msgContent.adminType;
		}).first().then(function(r) {
			return r != null ? r : h(e, t, n);
		});
	}
	function _(e, t, n, r) {
		return e.messages.where(["threadJid", "sortOrderMs"]).equals([n.jid, r]).filter(function(e) {
			return e.type === o("MAWMsgType").MSG_TYPE.ADMIN && e.msgContent.adminType === t.msgContent.adminType;
		}).first().then(function(r) {
			return r != null ? ((c || (c = o("ODS"))).bumpEntityKey(600, "maw_write_msg_txns_deduped_admin_message", t.msgContent.adminType), r) : h(e, t, n);
		});
	}
	function f(e, t, n) {
		return e.messages.where("threadJid").equals(n.jid).filter(function(e) {
			return e.type === o("MAWMsgType").MSG_TYPE.ADMIN && (e.msgContent.adminType === o("MAWLocalizationType").LOCALIZATION_TYPE.TWO_USERS_CONNECTED || e.msgContent.adminType === o("MAWLocalizationType").LOCALIZATION_TYPE.TWO_USERS_CONNECTED_ONE_MSPLIT);
		}).first().then(function(r) {
			return r != null ? ((c || (c = o("ODS"))).bumpEntityKey(600, "maw_write_msg_txns_deduped_admin_message", t.msgContent.adminType), r) : h(e, t, n);
		});
	}
	function g(e, t) {
		return e.messages.add(t).then(function(e) {
			return babelHelpers.extends({}, t, { rowId: e });
		});
	}
	function h(e, t, n, r) {
		r === void 0 && (r = {});
		var a = r, i = a.isFirstMsg, l = i === void 0 ? !1 : i, u = a.isOutgoing, c = u === void 0 ? !1 : u, d = a.openMessageOtid, p = a.openMessageParticipantCount, _ = a.optimisticMsg, f = a.participantCount, h = a.quotedReplyAttachmentMeta, y = a.shouldUpdateUi, C = y === void 0 ? !0 : y, b = a.sortOrderMs;
		return m(e, n, t, b).then(function(n) {
			var r = n.isOldestMsgUpdated, a = n.msgId, i = n.prevOldestMsg, u = n.updatedThread, m = babelHelpers.extends({}, t, {
				msgId: a,
				sortOrderMs: o("MAWMessageSortOrderUtils").generateAuthoritativeMessageSortOrder(t)
			});
			return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(u, {
				lastReadMsg: u.lastReadMsg,
				lastReadMsgTs: u.lastReadMsgTs,
				newestMsgTs: u.newestMsgTs,
				oldestMsg: u.oldestMsg,
				snippetMsg: u.snippetMsg,
				snippetMsgTs: u.snippetMsgTs,
				threadOrder: u.threadOrder
			}, "MAWWriteMsgTxns.writeMsg"), o("MAWDexieTable").dexieAll([g(e, m), o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.put(u)]).then(function(e) {
				var t = e[0], n = e[1];
				return c && o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["writeMsgAfterTransaction - sortOrderMs: ", ""])), t.sortOrderMs), C && o("MAWAfterWriteMsgUtil").writeMsgAfterTransaction({
					dbMsg: t,
					isFirstMsg: l,
					openMessageOtid: d,
					openMessageParticipantCount: p,
					optimisticMsg: _,
					participantCount: f,
					quotedReplyAttachmentMeta: h,
					updatedThread: u
				}), t;
			});
		});
	}
	function y(e, t, n) {
		return o("MAWGetOrCreateThreadTxns").getExistingThread(e, n.jid).then(function(a) {
			if (a == null) throw r("FBLogger")("messenger_web").mustfixThrow("at this point there's always a thread - checking for updates");
			return (o("MAWUseProtocolMsgIdForMsgId").shouldUseProtocolMsgIdForMsgId() ? o("MAWDexieTable").dexieResolve(null) : o("MAWDbUnrenderedMsgTxns").getNextUnrenderedMsgIdNumberForThread(e, a)).then(function(r) {
				var i = babelHelpers.extends({}, t, { msgId: r != null ? o("MAWDbMsg").craftUnrenderedMsgId(a.chatId, r) : o("MAWJidUtils").formatProtocolMsgIdFromExternalId(n.jid, t.externalId) });
				return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(a, {}, "MAWWriteMsgTxns.writeUnrenderedMsg"), o("MAWDexieTable").dexieAll([e.unrenderedMessages.add(i), o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.put(a)]).then(function(e) {
					var t = e[0], n = e[1];
					return babelHelpers.extends({}, i, { rowId: t });
				});
			});
		});
	}
	function C(e, t, n) {
		return o("MAWDexieTable").dexieAll([b(e, t, n), o("MAWDbEditMsgHistoryTxns").getEditHistoryByOriginalMsgExternalIdAndThreadJid(e, [[t.externalId, n.jid]]).then(function(e) {
			return {
				editMsgHistories: e,
				originalEditMsgHistory: e.find(function(e) {
					return e.editExternalId === t.externalId;
				})
			};
		})]).then(function(e) {
			var t = e[0], n = e[1], r = n.editMsgHistories, o = n.originalEditMsgHistory;
			return babelHelpers.extends({}, t, {
				editMsgHistories: r,
				existingEditMsgHistory: o != null ? o : null
			});
		});
	}
	function b(e, t, n) {
		var r = [
			t.externalId,
			n.jid,
			t.author
		], a = r[0], i = r[1], l = r[2];
		return o("MAWDexieTable").dexieAll([
			o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, a, i, l),
			o("MAWDbPendingStanzaTxns").maybeGetPendingRevokedStanza(e, a, l, i),
			o("MAWDbPendingStanzaTxns").maybeGetPendingDeletedStanza(e, a, l, i),
			o("MAWDbMsgTxns").checkIfMsgIsDeletedForMeOrRevoked(e, a, i, l),
			o("MAWDbPendingStanzaTxns").maybeGetDeleteThreadFromPendingStanza(e, i).then(function(e) {
				return o("MAWDeleteThreadUtil").isMsgDeletedViaDeleteThread(t.ts, e);
			})
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2], o = e[3], a = e[4];
			return {
				existingMsg: t != null ? t : null,
				isDeletedWithThread: a,
				isDeleteForMeOrRevoked: o,
				pendingDeleteForMeStanza: r != null ? r : null,
				pendingRevokedStanza: n != null ? n : null
			};
		});
	}
	function v(e, t, n, r, a) {
		return r === void 0 && (r = !0), o("MAWDbPendingStanzaTxns").maybeGetPendingRevokedStanza(e, t.externalId, t.author, n.jid).then(function(i) {
			if (i != null) return L(e, t, n, i, !0);
			var l = t.author;
			o("WALogger").DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"handle",
				" Msg: Message from ",
				", chat ",
				""
			])), t.type, l, n.jid);
			var s = babelHelpers.extends({}, babelHelpers.extends({}, t, { threadJid: n.jid }));
			return n.folder === o("MAWFolderTypes").FOLDER_ID.OTHER && (s.altIndex = s.altIndex === o("MAWDbMsg").FUTUREPROOF_ALT_INDEX ? o("MAWDbMsg").FUTUREPROOF_SPAM_ALT_INDEX : o("MAWDbMsg").SPAM_ALT_INDEX), o("MAWGetMsgQuoteTxn").getMsgQuoteInfo(e, s, n.jid, a).then(function(t) {
				t != null && (s = babelHelpers.extends({}, s, {
					quote: t == null ? void 0 : t.quote,
					quoteExpirationTs: t == null ? void 0 : t.quote.content.expirationTs,
					quoteExternalId: t == null ? void 0 : t.quoteExternalId
				}));
				var a = s.quoteExpirationTs;
				return a != null && a > o("WATimeUtils").unixTime() && o("MAWExpiredQuoteCleaner").addNewExpiredQuoteCleanerTimestamp(a), o("MAWDexieTable").dexieAll([
					o("MAWUpdateQuotedMsgTxns").associateQuotedMessage(e, n.jid, s),
					o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(e, s),
					o("MAWLoadReplyMediaTxns").getReplyMediaForMsg(e, s)
				]).then(function(t) {
					var a = t[0], i = t[1], l = t[2];
					return h(e, s, n, {
						quotedReplyAttachmentMeta: i,
						shouldUpdateUi: r
					}).then(function(t) {
						return o("MAWDexieTable").dexieAll([o("MAWWriteMsgSideEffectTxns").updateParticipantTimestampsForMsg(e, s), o("MAWEphemeralMsgTxns").markEphemeralMessageAsSent(e, t, r)]).then(function(e) {
							var n = e[1];
							return a != null && r && a.forEach(function(e) {
								o("MAWIndexedDb").afterTransaction({
									tag: "MsgUpdated",
									value: o("MAWBridgeMsg").createBridgeMsg(e, l)
								});
							}), n || t;
						});
					});
				});
			});
		});
	}
	function S(t, n, r, a, i, l) {
		var s = babelHelpers.extends({}, babelHelpers.extends({}, n, {
			msgId: r.msgId,
			protocolMsgId: r.protocolMsgId,
			rowId: r.rowId,
			serverTs: r.serverTs,
			sortOrderMs: r.sortOrderMs,
			threadJid: a.jid,
			ts: r.ts
		}));
		return o("MAWDexieTable").dexieAll([
			o("MAWUpdateQuotedMsgTxns").associateQuotedMessage(t, a.jid, s),
			o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(t, s),
			o("MAWLoadReplyMediaTxns").getReplyMediaForMsg(t, s),
			o("MAWGetMsgQuoteTxn").getMsgQuoteInfo(t, s, a.jid, l),
			o("MAWDbMsgTxns").getThreadNewestMessageId(t, a.jid)
		]).then(function(l) {
			var u, c = l[0], d = l[1], m = l[2], p = l[3], _ = l[4];
			return s = babelHelpers.extends({}, s, {
				quote: p == null ? void 0 : p.quote,
				quoteExternalId: p == null ? void 0 : p.quoteExternalId
			}), ((u = r.editCount) != null ? u : 0) > 0 && i != null && n.type === o("MAWMsgType").MSG_TYPE.TEXT ? o("MAWDbEditMsgHistoryTxns").updateEditMsgHistoryWithNewIncomingMsg(t, i, n).then(function() {
				return r;
			}) : t.messages.put(s).then(function() {
				return o("MAWDbThreadTxns").needsRetroactiveReadReceiptInThread(t, s);
			}).then(function(e) {
				if (e) return s.altIndex = o("MAWDbMsg").craftToBeReadAltIndex(a.chatId), t.messages.put(s);
			}).then(function() {
				if (o("MAWIndexedDb").afterTransaction({
					tag: "MsgUpdated",
					value: o("MAWBridgeMsg").createBridgeMsg(s, m)
				}), o("MAWIndexedDb").afterTransaction({
					tag: "MsgUpdated",
					value: o("MAWBridgeMsg").createBridgeMsg(s, d)
				}), o("MAWIndexedDb").afterTransactionThreadEvent({
					chatJid: a.jid,
					msgId: s.msgId
				}, o("MAWThreadEventConst").PLACEHOLDER_CONVERT_SUBSCRIPTION), c != null && c.forEach(function(e) {
					o("MAWIndexedDb").afterTransaction({
						tag: "MsgUpdated",
						value: o("MAWBridgeMsg").createBridgeMsg(e, m)
					});
				}), s.msgId === _) {
					var n = s, r = n.rowId, i = babelHelpers.objectWithoutPropertiesLoose(n, e);
					o("MAWWriteMsgSideEffectTxns").updateParticipantTimestampsForMsg(t, i);
				}
				return s;
			});
		});
	}
	function R(e, t, n, r) {
		var a = o("MAWBuildIncomingMsgs").buildUnstoredDeleteForMeMsg(t, n);
		return o("MAWDexieTable").dexieAll([
			o("MAWDbReactionsTxns").deleteReactionsByUniqueMsgIdentifiers(e, [{
				author: a.author,
				chatJid: a.threadJid,
				externalId: a.externalId
			}]),
			y(e, a, n),
			e.pendingStanzas.delete(r.rowId)
		]).then(function(e) {
			var t = e[0], n = e[1];
			return o("MAWDeleteForMeMsgContentCleaner").addNewDeleteForMeMsgContentCleanerTimestamp(a.messageDeleteForMeTs), babelHelpers.extends({}, a, {
				msgId: n.msgId,
				rowId: n.rowId
			});
		});
	}
	function L(e, t, n, a, i) {
		i === void 0 && (i = !1);
		var l = o("MAWDbPendingStanzaTxns").getRevokedContent(a);
		if (l == null) throw r("FBLogger")("messenger_web").mustfixThrow("missing revoked content");
		var s = o("MAWBuildIncomingMsgs").buildUnstoredRevokedMsg(t, n, l);
		return o("MAWDexieTable").dexieAll([h(e, s, n), e.pendingStanzas.delete(a.rowId)]).then(function(t) {
			var r = t[0];
			return o("MAWWriteRevokeMessageTxns").markIncomingMessageRevoked(e, r, n).then(function() {
				return r;
			});
		});
	}
	function E() {
		return Math.round(o("WATimeUtils").performanceAbsoluteNow() / 1e3);
	}
	l.writeDedupedEphemeralSettingAdminMessage = p, l.writeDedupedAdminMessage = _, l.writeDedupedUsersConnectedAdminMessage = f, l.writeMsg = h, l.writeUnrenderedMsg = y, l.prepareTextMsgWriteData = C, l.prepareMsgWriteData = b, l.writeNewIncomingMsg = v, l.writeCiphertextUpdate = S, l.handleDeleteForMeMessage = R, l.handleOutOfOrderRevokedMessage = L;
}), 98);
