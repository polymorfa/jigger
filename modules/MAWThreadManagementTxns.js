__d("MAWThreadManagementTxns", [
	"MAWBridgeEventTransmitter",
	"MAWBridgeParticipants",
	"MAWBridgeTypesCreators",
	"MAWDbGroupInfoTxns",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDbParticipantTxns",
	"MAWDbReactionsTxns",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWGetOrCreateThreadTxns",
	"MAWGroupInviteManagementTxns",
	"MAWIndexedDb",
	"MAWLoadOneToOneMessageRequestCapabilitiesTxn",
	"MAWQplProxy",
	"WAJids",
	"WALogger",
	"WAMsgType",
	"WASortedLists",
	"WATimeUtils",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, a, i) {
		var l = t.authoritativeThreadKey, s = t.createTs, u = t.description, c = t.folder, d = t.lastActivityTimestamp, m = t.lastReadWatermarkTimestamp, p = t.offlineThreadingId, f = t.skipVerifyThread, g = t.userJid;
		return o("MAWGetOrCreateThreadTxns").getOrCreateThread(e, {
			authoritativeThreadKey: l,
			clientThreadKey: p,
			createTs: s,
			description: u,
			folder: c,
			instanceKey: a,
			jid: g,
			lastActivityTimestamp: d,
			lastReadWatermarkTimestamp: m,
			skipVerifyThread: f
		}, n, i).then(function(t) {
			var i = t.created, l = t.thread;
			n != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25313175, "1551"), "process-setup-thread-start", { instanceKey: n }), a != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(1056836502, "2778"), "process_setup_thread_start", { instanceKey: a });
			var s = _(e, g, i, l);
			return n != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25313175, "1551"), "process-setup-thread-end", { instanceKey: n }), a != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(1056836502, "2778"), "process_setup_thread_end", { instanceKey: a }), s;
		});
	}
	function u(e, t, n, r, a) {
		var i = o("MAWDbGroupInfoTxns").getGroupInfo(t);
		if (!i.success) return o("MAWDexieTable").dexieResolve(null);
		var l = i.value;
		return o("MAWGetOrCreateThreadTxns").getOrCreateThread(e, {
			createTs: o("WATimeUtils").castUnixTimeToMillisTime(l.creationTs),
			description: "getOrRepairGroupThread",
			folder: n,
			jid: l.groupJid,
			skipVerifyThread: r
		}, void 0, a).then(function(e) {
			var t = e.created, n = e.thread;
			return {
				created: t,
				groupInfo: l,
				thread: n
			};
		});
	}
	function c(t, n) {
		var r = [], a = [];
		return n.forEach(function(e) {
			o("MAWDbMsg").isMediaMsg(e) && e.mediaId != null && (r.push(e.mediaId), a.push(e.msgId));
		}), t.media.bulkGet(r).then(function(n) {
			var r = [], i = [];
			n.forEach(function(e, t) {
				if (e != null) {
					var n = a[t];
					e.msgIds = o("WASortedLists").filter(e.msgIds, function(e) {
						return e !== n;
					}), e.mediaEntries.delete(n), e.msgIds.length === 0 && e.mediaEntries.size === 0 && (e.plaintextHash != null && r.push(e.hashedPlaintextHash), i.push(e.mediaId));
				}
			});
			var l = t.media.bulkDelete(i), s = t.chunk.where("hashedPlaintextHash").anyOf(r).delete();
			return o("MAWDexieTable").dexieAll([l, s]).then(function() {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"Successfully deleted ",
					" media rows and ",
					" chunk rows"
				])), i.length, r.length);
			});
		});
	}
	function d(e, t) {
		return o("MAWDbMsgTxns").getThreadNewestMessageMs(e, t.jid).then(function(n) {
			return e.messages.where("threadJid").equals(t.jid).toArray().then(function(r) {
				return p(e, t, n, r, !0);
			});
		});
	}
	function m(e, t, n, r) {
		var a = n == null ? void 0 : n.lastMessageTimestamp;
		if (n == null) return d(e, t);
		var i = e.messages.where("threadJid").equals(t.jid).toArray(), l = o("MAWDbMsgTxns").getThreadNewestMessageMs(e, t.jid);
		return o("MAWDexieTable").dexieAll([i, l]).then(function(i) {
			var l = i[0], s = i[1], u = [], c = new Set();
			if (a != null && l.forEach(function(e) {
				var t, n = (t = e.originalTs) != null ? t : e.ts;
				n <= a + 1 && (c.add(e.msgId), u.push(e));
			}), (n == null ? void 0 : n.messages.length) !== 0) {
				var d = new Set();
				n.messages.forEach(function(e) {
					var t;
					d.add((t = e.key) == null ? void 0 : t.id);
				}), l.forEach(function(e) {
					d.has(e.externalId) && !c.has(e.msgId) && (c.add(e.msgId), u.push(e));
				});
			}
			if (u.length !== l.length) {
				for (var m of l) if (!c.has(m.msgId) && m.type !== o("WAMsgType").ADMIN) return p(e, t, s, u, !1, r);
			}
			return p(e, t, s, l, !0, r);
		});
	}
	function p(e, t, n, r, a, i) {
		var l = o("WAJids").interpretAsGroupJid(t.jid), s = a ? o("MAWDbThreadTxns").deleteThread(e, t.jid) : o("MAWDexieTable").dexieResolve(), u = a ? o("MAWDbParticipantTxns").deleteAllParticipantsForThread(e, t.jid) : o("MAWDexieTable").dexieResolve(), d = o("MAWDexieTable").dexieResolve(!1);
		return l != null && a && (d = o("MAWGroupInviteManagementTxns").deleteGroupInvitesByThread(e, l), o("MAWDbGroupInfoTxns").deleteGroupInfo(l)), o("MAWDexieTable").dexieAll([
			c(e, r),
			o("MAWDbReactionsTxns").deleteAllReactionsForMessages(e, r),
			o("MAWDbMsgTxns").deleteMessages(e, r, i),
			s,
			u,
			d
		]).then(function(e) {
			var i = e[0], s = e[1], u = e[2], c = e[3], d = e[4], m = e[5];
			return a && (o("MAWBridgeEventTransmitter").deleteMessagesOfThreadAfterTxn(t, n), l != null && m && o("MAWIndexedDb").afterTransaction({
				tag: "DeleteGroupInvite",
				value: o("MAWBridgeTypesCreators").createBridgeDeleteGroupInvite(t.jid)
			}), o("MAWIndexedDb").afterTransaction({
				tag: "ThreadHiddenV2",
				value: t.jid
			})), { deletedMessages: r.map(function(e) {
				return o("MAWDbMsg").getWAMsgId(e);
			}) };
		});
	}
	function _(e, t, n, r) {
		var a = o("MAWDbParticipantTxns").bulkRemoveIncorrectAndInsertMissingParticipantsInOneToOneThread(e, t).then(function(e) {
			o("MAWIndexedDb").afterTransaction({
				tag: "ParticipantsUpdated",
				value: o("MAWBridgeParticipants").createBridgeParticipants(e)
			});
		});
		return o("MAWDexieTable").dexieAll([o("MAWLoadOneToOneMessageRequestCapabilitiesTxn").loadOneToOneMessageRequestCapabilities([r.jid]), a]).then(function() {
			return {
				created: n,
				thread: r
			};
		});
	}
	l.getOrSetupOneToOneThread = s, l.getGroupThread = u, l.deleteAllThreadData = d, l.metaSyncChatDeleteThread = m;
}), 98);
