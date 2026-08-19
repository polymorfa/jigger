__d("MAWWriteRevokeMessageTxns", [
	"FBLogger",
	"LSMEBTaskCreationSource",
	"MAWAckLevel",
	"MAWBridgeEventTransmitter",
	"MAWBridgeMsg",
	"MAWBridgeTypesCreators",
	"MAWDbDeletedMessages",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDbPendingStanza",
	"MAWDbProtocolMsgIdMiddleware",
	"MAWDbReactionsTxns",
	"MAWDexieTable",
	"MAWEphemeralUtil",
	"MAWIndexedDb",
	"MAWJidUtils",
	"MAWMsgType",
	"MAWPendingStanzaCleaner",
	"MAWThreadSnippetBuildTxns",
	"MAWUnsendMsgContentCleaner",
	"MAWUpdateQuotedMsgTxns",
	"MAWWriteDeleteMessageTxns",
	"MAWWriteMsgTxns",
	"MAWXMAUtils",
	"MpsMediaManagerV2Deferred",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 6 * o("WATimeUtils").HOUR_SECONDS, s = 30 * o("WATimeUtils").DAY_SECONDS;
	function u(e, t, n, a, i, l) {
		if (l != null && a == null) {
			var u, d = babelHelpers.extends({}, t, {
				originalTs: o("WATimeUtils").castMilliSecondsToUnixTime(l),
				threadJid: n.jid,
				unsendMsgContentDeleteTs: (u = t.serverTs) != null ? u : t.ts
			});
			return o("MAWWriteMsgTxns").writeMsg(e, d, n).then(function(e) {
				return e.type === "Revoked" ? e : null;
			});
		}
		var m = o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + s), _ = t.author, f = t.externalId, g = t.revokedExternalId, h = i != null ? p(e, i) : o("MAWDexieTable").dexieResolve();
		return o("MAWDexieTable").dexieAll([a == null ? o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, t.revokedExternalId, n.jid, t.author) : o("MAWDexieTable").dexieResolve(a)]).then(function(i) {
			var l = i[0];
			if ((a == null || l != null) && r("FBLogger")("messenger_web").warn("Revoked message missing originalMsg incorrectly"), l == null) {
				var s = {
					deleteTs: m,
					externalIdWithType: g + "_" + o("MAWDbPendingStanza").PENDING_REVOKED,
					pendingContent: {
						content: {
							ack: o("MAWAckLevel").ACK.received,
							altIndex: void 0,
							author: _,
							externalId: f,
							revokedExternalId: g,
							threadJid: n.jid,
							ts: t.ts,
							type: "Revoked"
						},
						type: o("MAWDbPendingStanza").PENDING_TYPE.REVOKED
					}
				};
				return o("MAWDexieTable").dexieAll([e.pendingStanzas.add(s), h]).then(function(t) {
					var a = t[0], i = t[1];
					o("MAWPendingStanzaCleaner").addNewPendingStanzaCleanerTimestamp(m), o("MAWBridgeEventTransmitter").issuePointQueryOutsideTxn(g, r("LSMEBTaskCreationSource").POINT_QUERY_FROM_EB, n.jid), i === !0 && o("MAWThreadSnippetBuildTxns").refreshThreadSnippet(e, n);
				});
			}
			return h.then(function() {
				return c(e, l, n, t.externalId, t.revokedExternalId, t.serverTs, t.ts, !1);
			});
		});
	}
	function c(t, n, r, a, i, l, s, u) {
		var c, m = babelHelpers.extends({}, n, {
			altIndex: void 0,
			externalId: a,
			msgContent: o("MAWDbMsg").getMsgContent(n),
			originalTs: (c = n.serverTs) != null ? c : n.ts,
			revokedExternalId: i,
			serverTs: l,
			threadJid: r.jid,
			ts: s,
			type: "Revoked",
			unsendMsgContentDeleteTs: o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + e)
		});
		return o("MAWDbProtocolMsgIdMiddleware").appendProtocolMsgId(m), u ? o("MAWDexieTable").dexieResolve(m) : d(t, n, m, r).then(function() {
			return m;
		});
	}
	function d(e, t, n, r) {
		var a, i = o("MAWXMAUtils").isXMAStoryReply((a = t.quote) == null ? void 0 : a.content.xmaMessageType) ? o("MAWWriteDeleteMessageTxns").deleteXMAStoryReplyMsg(e, t) : o("MAWDexieTable").dexieResolve(), l = o("MAWJidUtils").toProtocolMsgId(t), s = l != null ? e.deletedMessages.add(babelHelpers.extends({}, l, { reason: o("MAWDbDeletedMessages").DbDeletedMsgReasonEnum.Revoke })) : o("MAWDexieTable").dexieResolve();
		return o("MAWWriteDeleteMessageTxns").deleteBumpMsgs(e, t.author, t.externalId, t.threadJid).then(function() {
			return o("MAWDexieTable").dexieAll([
				e.messages.put(n),
				o("MAWDbReactionsTxns").deleteReactionsByUniqueMsgIdentifiers(e, [{
					author: n.author,
					chatJid: n.threadJid,
					externalId: n.revokedExternalId
				}]),
				o("MAWUpdateQuotedMsgTxns").disassociateQuotedMsg(e, n.threadJid, n.revokedExternalId, n.author, o("MAWMsgType").MSG_TYPE.REVOKED),
				i,
				s
			]).then(function() {
				if (o("MAWIndexedDb").afterTransaction({
					tag: "MsgUpdated",
					value: o("MAWBridgeMsg").createBridgeMsg(n)
				}), t != null && o("MAWDbMsg").isMediaMsg(t)) {
					var a = t.mediaId, i = t.plaintextHash;
					a != null && (i != null ? (o("MpsMediaManagerV2Deferred").dequeueDownload(i), o("MAWIndexedDb").afterTransaction({
						tag: "MediaExpired",
						value: {
							mediaId: a,
							msgId: t.msgId,
							plaintextHash: i,
							threadJid: t.threadJid
						}
					})) : o("MAWIndexedDb").afterTransaction({
						tag: "MediaExpired",
						value: {
							mediaId: a,
							msgId: t.msgId,
							threadJid: t.threadJid
						}
					}));
				}
				return o("MAWEphemeralUtil").maybeClearEphemeralMsgCountdown(t), o("MAWThreadSnippetBuildTxns").refreshThreadSnippet(e, r);
			});
		});
	}
	function m(e, t, n) {
		if (t.type !== o("MAWMsgType").MSG_TYPE.REVOKED) throw r("FBLogger")("messenger_web").mustfixThrow("Cant mark unrevoked message revoked");
		var a = o("MAWJidUtils").maybeToProtocolMsgId(t.author, t.threadJid, t.revokedExternalId), i = a != null ? e.deletedMessages.add(babelHelpers.extends({}, a, { reason: o("MAWDbDeletedMessages").DbDeletedMsgReasonEnum.Revoke })) : o("MAWDexieTable").dexieResolve();
		return o("MAWWriteDeleteMessageTxns").deleteBumpMsgs(e, t.author, t.revokedExternalId, t.threadJid).then(function(r) {
			return r.length > 0 && o("MAWIndexedDb").afterTransaction({
				tag: "DeleteMessages",
				value: o("MAWBridgeTypesCreators").createBridgeDeleteMessages(t.threadJid, r)
			}), o("MAWDexieTable").dexieAll([
				o("MAWDbReactionsTxns").deleteReactionsByUniqueMsgIdentifiers(e, [{
					author: t.author,
					chatJid: t.threadJid,
					externalId: t.revokedExternalId
				}]),
				o("MAWThreadSnippetBuildTxns").refreshThreadSnippet(e, n),
				i
			]).then(function() {
				o("MAWUnsendMsgContentCleaner").addNewUnsendMsgContentCleanerTimestamp(t.unsendMsgContentDeleteTs), o("MAWIndexedDb").afterTransaction({
					tag: "NewMsg",
					value: o("MAWBridgeMsg").createBridgeMsg(t)
				});
			});
		});
	}
	function p(e, t) {
		return t.type === o("MAWMsgType").MSG_TYPE.CIPHERTEXT ? e.messages.delete(t.rowId).then(function() {
			return o("MAWIndexedDb").afterTransaction({
				tag: "DeleteMessages",
				value: o("MAWBridgeTypesCreators").createBridgeDeleteMessages(t.threadJid, [t])
			}), !0;
		}) : o("MAWDexieTable").dexieResolve(!1);
	}
	l.REVOKE_CONTENT_EXPIRATION_IN_SEC = e, l.writeIncomingRevokeMsg = u, l.revokeUnstoredMsg = c, l.markExistingMsgRevoked = d, l.markIncomingMessageRevoked = m;
}), 98);
