__d("MAWHandleIncomingMsgApi", [
	"MAWDbMsgTxns",
	"MAWDbPendingStanzaTxns",
	"MAWDbRavenActionTxns",
	"MAWDexieTable",
	"MAWEphemeralAdminMsgBuildTxns",
	"MAWEphemeralMsgTxns",
	"MAWEphemeralSettingsTxns",
	"MAWHIMLogger",
	"MAWJidUtils",
	"MAWMediaManagementTxns",
	"MAWMsgActionType",
	"MAWMsgType",
	"MAWODSProxy",
	"MAWPendingReceiptProcessingTxns",
	"MAWUpdateIsCollapsedMsgTxns",
	"MAWUpdateQuotedMsgTxns",
	"MAWUseProtocolMsgIdForMsgId",
	"MAWWriteEditTxns",
	"MAWWriteGroupInviteTxns",
	"MAWWriteGroupPollCreateTxns",
	"MAWWriteGroupPollMessageTxns",
	"MAWWriteMsgTxns",
	"MAWWriteReceiverFetchTxns",
	"MAWWriteRevokeMessageTxns",
	"MAWWriteXMAMessageTxns",
	"MAWXMAUtils",
	"MWXMAV2IsCollapsibleXMA",
	"MWXMAV2XmaDataClass",
	"WAGetPlatformFromStanzaId",
	"WAJids",
	"WAOdsEnums",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeResult(void 0));
	function d(e, t, n) {
		var a, i;
		t.receiveFlow.addPoint("him_write_message_start");
		var l = ((a = t == null || (i = t.msg) == null || (i = i.ephemeralSetting) == null ? void 0 : i.ephemeralExpirationInSec) != null ? a : 0) > 0;
		return m(e, t, n).then(function(e) {
			var n, a, i, s;
			if (t.receiveFlow.addPoint("him_write_message_end", {
				bool: {
					isEphemeralMsg: l,
					outOfSync: (e == null || (n = e.value) == null ? void 0 : n.outOfSyncEphemeralSetting) != null
				},
				string: { msgWrittenResultType: (a = e == null || (i = e.value) == null ? void 0 : i.msgType) != null ? a : "unknown" }
			}), l && o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.TOTAL_INCOMING_MESSAGE,
				key: "ephemeralMsgs"
			}), (t.action === o("MAWMsgActionType").MSG_ACTION.WRITE || o("MAWMsgActionType").MSG_ACTION.WRITE_WITH_ASSOCIATED) && (e == null || (s = e.value) == null ? void 0 : s.msgType) == null) {
				var u, c;
				r("MAWHIMLogger").warn("write action didn't produce result in DB. msg type: " + ((u = t == null || (c = t.msg) == null ? void 0 : c.type) != null ? u : "unknown"));
			}
			return e;
		}).catch(function(e) {
			var n;
			if (e.name === "ConstraintError") return t.type !== o("MAWMsgType").MSG_TYPE.XMA && r("MAWHIMLogger").mustfix("encounted a ConstraintError for type %s", t.type), o("WAResultOrError").makeError({ type: "constraint_error" });
			throw e.message = "[handleIncomingMsg] [" + ((n = t.type) != null ? n : "") + "/" + t.action + "] " + e.message, e;
		});
	}
	function m(t, n, a) {
		var i;
		if (n.action === o("MAWMsgActionType").MSG_ACTION.NO_ACTION) return c;
		var l = function(r, a, i) {
			return o("MAWEphemeralMsgTxns").syncEphemeralSettingOnIncomingMsg(t, r, a, n.thread, i);
		};
		switch (n.type) {
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE: return o("MAWWriteMsgTxns").writeNewIncomingMsg(t, n.msg, n.thread, a, n.stanzaSource).then(function() {
				return o("WAResultOrError").makeResult(null);
			});
			case o("MAWMsgType").MSG_TYPE.RAVEN_ACTION: return o("MAWDbRavenActionTxns").writeRavenActionMsg(t, n.msg, n.thread).then(function() {
				return o("WAResultOrError").makeResult(null);
			});
			case o("MAWMsgType").MSG_TYPE.REACTION: return o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeResult({ reactToExternalId: n.msg.reactToExternalId }));
			case o("MAWMsgType").MSG_TYPE.GROUP_INVITE: return o("WAJids").isAuthorMe(n.id.author) ? c : o("MAWWriteGroupInviteTxns").writeIncomingGroupInviteMsg(t, n.msg, n.thread.jid, n.folder);
			case o("MAWMsgType").MSG_TYPE.TEXT:
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
			case o("MAWMsgType").MSG_TYPE.ADMIN: return n.action === o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME ? o("MAWWriteMsgTxns").handleDeleteForMeMessage(t, n.msg, n.thread, n.pendingDeleteForMeStanza).then(function(e) {
				return _(e);
			}) : y(t, n.msg, n.thread.jid).then(function(e) {
				if (e) return c;
				var r = n.action === o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT ? o("MAWWriteMsgTxns").writeCiphertextUpdate(t, n.msg, n.existingMsg, n.thread, n.existingEditMsgHistory, n.stanzaSource) : n.action === o("MAWMsgActionType").MSG_ACTION.REVOKE ? o("MAWWriteMsgTxns").handleOutOfOrderRevokedMessage(t, n.msg, n.thread, n.pendingRevokedStanza, n.pendingRevokedStanza != null) : o("MAWWriteEditTxns").writeNewIncomingMsgAndEditHistory(t, n.msg, n.thread, n.editMsgHistories, a, n.stanzaSource), i = function(r, a) {
					return o("MAWDexieTable").dexieAll([f(t, n.id, r, r.type !== o("MAWMsgType").MSG_TYPE.FUTUREPROOF), l(r, o("MAWJidUtils").getAuthorJid(n.id.author), n.ts)]).then(function(e) {
						var t = e[0], n = e[1];
						return _(r, n, a == null ? null : [a]);
					}).then(function(e) {
						var a = {
							author: r.author,
							chat: r.threadJid,
							externalId: r.externalId
						};
						return o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(t, a).then(function(e) {
							if (e != null) return o("MAWUpdateQuotedMsgTxns").associateAllReplies(t, e, n.thread.jid);
						}).then(function() {
							return e;
						});
					});
				};
				if (o("MAWUseProtocolMsgIdForMsgId").shouldUseProtocolMsgIdForMsgId()) {
					var s = n.thread.jid, u = o("MAWJidUtils").formatProtocolMsgIdFromExternalId(s, n.msg.externalId), d = n.type === o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH ? o("MAWWriteReceiverFetchTxns").handleUnstoredReceiverFetchInfo(t, s, u, n.msg.sortOrderMs, n.msg.ts, n.receiverFetchInfo) : o("MAWDexieTable").dexieResolve(), m = n.media != null ? o("MAWMediaManagementTxns").handleUnstoredDbMediaCreation(t, n.media, u, n.msg.type, void 0) : o("MAWDexieTable").dexieResolve();
					return o("MAWDexieTable").dexieAll([
						r,
						d,
						m
					]).then(function(e) {
						var r = e[0], i = e[1], l = e[2];
						return o("MAWDexieTable").dexieAll([r, l != null && n.media != null ? o("MAWMediaManagementTxns").handleUnstoredDbMediaLinking(t, n.media, r, l, void 0, void 0, a) : o("MAWDexieTable").dexieResolve()]);
					}).then(function(e) {
						var t = e[0], r = e[1];
						return t.quote != null && n.receiveFlow.addAnnotations({
							bool: { isQuote: !0 },
							string: { quoteType: t.quote.content.type }
						}), i(t, r);
					});
				}
				return r.then(function(e) {
					var r = n.type === o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH ? o("MAWWriteReceiverFetchTxns").handleUnstoredReceiverFetchInfo(t, e.threadJid, e.msgId, e.sortOrderMs, e.ts, n.receiverFetchInfo) : o("MAWDexieTable").dexieResolve(), l = n.media != null ? o("MAWMediaManagementTxns").handleUnstoredDbMedia(t, n.media, e, n.stanzaSource, void 0, void 0, void 0, a) : o("MAWDexieTable").dexieResolve();
					return e.quote != null && n.receiveFlow.addAnnotations({
						bool: { isQuote: !0 },
						string: { quoteType: e.quote.content.type }
					}), o("MAWDexieTable").dexieAll([r, l]).then(function(t) {
						var n = t[0], r = t[1];
						return i(e, r);
					});
				});
			});
			case o("MAWMsgType").MSG_TYPE.REVOKED: return o("MAWWriteRevokeMessageTxns").writeIncomingRevokeMsg(t, n.msg, n.thread, n.originalMsg, n.previousRevokeMsg, n.ebTimestampMs).then(function(e) {
				return o("MAWDexieTable").dexieAll([f(t, n.id, e), l(e, o("MAWJidUtils").getAuthorJid(n.id.author), n.ts)]).then(function(t) {
					var n = t[0], r = t[1];
					return _(e, r);
				});
			});
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN: return o("MAWEphemeralSettingsTxns").handleAndWriteIncomingEphemeralSetting(t, o("MAWJidUtils").getAuthorJid(n.id.author), n.msg.ephemeralExpirationInSec, n.msg.ephemeralLastUpdatedOrSetTimestamp, n.msg.isEphemeralSettingReset, n.thread, n.ts, n.id.externalId, !0).then(function(e) {
				return _(null, e == null ? void 0 : e.outOfSyncEphemeralSetting);
			});
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION: return o("MAWEphemeralAdminMsgBuildTxns").writeEphemeralScreenshotActionMsg(t, o("MAWJidUtils").getAuthorJid(n.id.author), n.thread, n.ts, n.screenshotActionType, n.id.externalId, n.existingMsg).then(function(e) {
				return o("MAWDexieTable").dexieAll([f(t, n.id, e), l(e, o("MAWJidUtils").getAuthorJid(n.id.author), n.ts)]).then(function(t) {
					var n = t[0], r = t[1];
					return _(e, r);
				});
			});
			case o("MAWMsgType").MSG_TYPE.XMA: {
				var s;
				if (n.action === o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME) return o("MAWWriteMsgTxns").handleDeleteForMeMessage(t, n.msg, n.thread, n.pendingDeleteForMeStanza).then(function(e) {
					return _(e);
				});
				var u = o("MWXMAV2XmaDataClass").parseXmaDataClass((s = n.xma) == null ? void 0 : s.unstoredDbXMA.xmaDataclass), d = n.xma != null && o("MWXMAV2IsCollapsibleXMA").isCollapsibleXMA(u) ? o("MAWUpdateIsCollapsedMsgTxns").maybeUpdatePreviousCollapsibleMsgs(t, n.msg, u, n.thread.jid) : o("MAWDexieTable").dexieResolve(n.msg), m = n.action === o("MAWMsgActionType").MSG_ACTION.WRITE_WITH_ASSOCIATED || n.action === o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT_WITH_ASSOCIATED ? g(t, n, a) : n.action === o("MAWMsgActionType").MSG_ACTION.REVOKE ? p(t, n, a) : d.then(function(e) {
					return p(t, babelHelpers.extends({}, n, { msg: e }), a).then(function(e) {
						return o("MAWWriteXMAMessageTxns").handleIncomingXMA(t, e, n.xma, n.stanzaSource, null).then(function(t) {
							return babelHelpers.extends({}, t, { dbMsg: e });
						});
					});
				});
				return m.then(function(a) {
					var i = a.dbAssociatedMsg, s = a.dbMedias, u = a.dbMsg;
					return r("MAWHIMLogger").DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleIncomingMsgInternal: Finished writing the incoming xma, has associated data = ", ""])), n.action === o("MAWMsgActionType").MSG_ACTION.WRITE_WITH_ASSOCIATED || n.action === o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT_WITH_ASSOCIATED), o("MAWDexieTable").dexieAll([f(t, n.id, u, !0, i), l(u, o("MAWJidUtils").getAuthorJid(n.id.author), n.ts)]).then(function(e) {
						var r = e[0], a = e[1];
						return o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(t, n.id).then(function(e) {
							if (e != null) return o("MAWUpdateQuotedMsgTxns").associateAllReplies(t, e, n.thread.jid);
						}).then(function() {
							return a;
						});
					}).then(function(e) {
						return _(u, e, s);
					});
				});
			}
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE: return o("MAWWriteGroupPollCreateTxns").handleIncomingGroupPollCreate(t, n.msg, n.pollInfo, n.thread);
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE: return o("MAWWriteGroupPollMessageTxns").handleGroupPollUpdate(t, n.msg, n.pollInfo, n.thread);
			default: throw r("MAWHIMLogger").mustfixThrow("We do not support handleIncomingMsgInternal with type: " + ((i = n.type) != null ? i : ""));
		}
	}
	function p(e, t, n) {
		return t.action === o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT || t.action === o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT_WITH_ASSOCIATED ? o("MAWWriteMsgTxns").writeCiphertextUpdate(e, t.msg, t.existingMsg, t.thread, null, t.stanzaSource) : t.action === o("MAWMsgActionType").MSG_ACTION.REVOKE ? o("MAWWriteMsgTxns").handleOutOfOrderRevokedMessage(e, t.msg, t.thread, t.pendingRevokedStanza, t.pendingRevokedStanza != null) : o("MAWWriteMsgTxns").writeNewIncomingMsg(e, t.msg, t.thread, n, t.stanzaSource);
	}
	function _(e, t, n) {
		return o("WAResultOrError").makeResult({
			msgType: e == null ? void 0 : e.type,
			outOfSyncEphemeralSetting: t != null ? t : void 0,
			plaintextHashs: n == null ? void 0 : n.map(function(e) {
				return e.plaintextHash;
			})
		});
	}
	function f(e, t, n, a, i) {
		var l = t.author, u = t.chat;
		if (a === void 0 && (a = !1), n == null || n == null) return o("MAWDexieTable").dexieResolve();
		var c = o("MAWPendingReceiptProcessingTxns").processPendingReceipts(e, u, n), d = l === o("WAJids").AUTHOR_ME && i != null && i.type !== o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME ? o("MAWPendingReceiptProcessingTxns").processPendingReceipts(e, u, i) : o("MAWDexieTable").dexieResolve();
		return o("MAWDexieTable").dexieAll([c, d]).then(function() {
			r("MAWHIMLogger").DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["handleIncomingMsgInternal: Finished writing the incoming message"])));
		});
	}
	function g(e, t, n) {
		n === void 0 && (n = !0), t.associatedMsg.externalId === t.msg.externalId && r("MAWHIMLogger").tags(["XMA"]).mustfix("associatedMsg and msg have the same externalId, platform %s", o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(t.msg.externalId));
		var a = t.existingAssociatedMsg, i;
		return a != null ? a.type === o("MAWMsgType").MSG_TYPE.CIPHERTEXT ? i = o("MAWWriteMsgTxns").writeCiphertextUpdate(e, t.associatedMsg, a, t.thread, null, t.stanzaSource) : i = o("MAWDexieTable").dexieResolve(a) : i = o("MAWWriteMsgTxns").writeNewIncomingMsg(e, t.associatedMsg, t.thread, n, t.stanzaSource), i.then(function(r) {
			return r.type === o("MAWMsgType").MSG_TYPE.REVOKED ? o("MAWDexieTable").dexieResolve({
				dbAssociatedMsg: null,
				dbMedias: null,
				dbMsg: null
			}) : p(e, t, n).then(function(n) {
				return t.associatedMedia != null ? o("MAWMediaManagementTxns").handleUnstoredDbMedia(e, t.associatedMedia, r, t.stanzaSource).then(function(o) {
					return h(e, n, r, t.xma, t.msg, t.associatedMsg, t.thread.jid, t.stanzaSource, o);
				}) : h(e, n, r, t.xma, t.msg, t.associatedMsg, t.thread.jid, t.stanzaSource);
			});
		});
	}
	function h(e, t, n, a, i, l, s, c, d) {
		return o("MAWWriteXMAMessageTxns").handleIncomingXMA(e, t, a, c, n.msgId).then(function(a) {
			var c = a.dbMedias, m = a.dbXMA;
			return n == null && r("MAWHIMLogger").MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Could not write dbAssociatedMsg but it exists: ", ""])), l.externalId), (n != null && m != null && o("MAWXMAUtils").isXMAStoryReply(m.targetType) ? o("MAWWriteXMAMessageTxns").handleXMAReplyMsg(e, i, m, s, n, i.isExpiredXmaMsg === !0, d, c) : o("MAWDexieTable").dexieResolve()).then(function() {
				return d != null ? {
					dbAssociatedMsg: n,
					dbMedias: c != null ? [].concat(c, [d]) : [d],
					dbMsg: t
				} : {
					dbAssociatedMsg: n,
					dbMedias: c,
					dbMsg: t
				};
			});
		});
	}
	function y(e, t, n) {
		var r, a;
		if (t.type !== o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE) return o("MAWDexieTable").dexieResolve(!1);
		var i = (r = t.quote) == null || (r = r.content) == null ? void 0 : r.externalId, l = (a = t.quote) == null ? void 0 : a.content.author;
		if (i == null || l == null) return o("MAWDexieTable").dexieResolve(!1);
		var s = o("MAWJidUtils").maybeToProtocolMsgId(l, n, i);
		return o("MAWDexieTable").dexieAll([
			e.deletedMessages.get(babelHelpers.extends({}, s)),
			e.unrenderedMessages.get({ externalId: i }),
			o("MAWDbPendingStanzaTxns").maybeGetPendingRevokedStanza(e, i, l, n),
			o("MAWDbPendingStanzaTxns").maybeGetPendingDeletedStanza(e, i, l, n)
		]).then(function(e) {
			var t = e[0], r = e[1], o = e[2], a = e[3], i = r != null && r.author === l && r.threadJid === n;
			return t != null || i || o != null || a != null;
		});
	}
	l.handleIncomingMsg = d;
}), 98);
