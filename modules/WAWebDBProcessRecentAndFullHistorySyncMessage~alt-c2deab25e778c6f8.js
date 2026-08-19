__d("WAWebDBProcessRecentAndFullHistorySyncMessage", [
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebApiChatUnreadMention",
	"WAWebApiFilterAndReplaceMessages",
	"WAWebApiGroupInviteV4Store",
	"WAWebBackendApi",
	"WAWebBulkCreateOrUpdateThreadsMetadata",
	"WAWebDBEncryptMultipleMsgs",
	"WAWebDBStoreEncryptedMsgs",
	"WAWebMessageAssociationGatingUtils",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebProcessMessageAssociationMessages",
	"WAWebQuarantineDataStore",
	"WAWebThreadCommonModelUtils",
	"WAWebThreadUtils",
	"WAWebUserPrefsHistorySync",
	"WAWebUserPrefsTypes"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	function m(e, t) {
		var n = new Map();
		return e.forEach(function(e, r) {
			e.forEach(function(e) {
				var o, a = (o = t.get(r)) != null ? o : 0;
				if (a > 0) {
					t.set(r, a - 1);
					var i = {
						id: e.id.toString(),
						timestamp: e.t
					};
					if (n.has(r)) {
						var l;
						(l = n.get(r)) == null || l.push(i);
					} else n.set(r, [i]);
				}
			});
		}), n;
	}
	async function p(t, n, r, a, i, l, s) {
		var u = t, c, d;
		if (i.length && o("WAWebMessageAssociationGatingUtils").isMessageAssociationInfraEnabled()) {
			var p;
			if (d = o("WAWebProcessMessageAssociationMessages").classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(i, l), (p = d) != null && p.validAssociatedMsgs) {
				var g;
				c = o("WAWebApiFilterAndReplaceMessages").validateMsgFn((g = d) == null ? void 0 : g.validAssociatedMsgs);
			}
		}
		try {
			var h = await o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages(t, c), y = h.newMsgs;
			u = y;
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["filterAndReplaceMessages failed with error ", ""])), t).tags("history-sync");
		}
		var C = new Map(), b = [];
		u.forEach(function(e) {
			e.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE && b.push(o("WAWebApiGroupInviteV4Store").persistGroupInviteV4Msg(e.id.toString(), {
				id: e.id.toString(),
				from: e.from.toString(),
				to: e.to.toString(),
				groupId: e.inviteGrp,
				expiration: parseInt(e.inviteCodeExp, 10),
				expired: o("WATimeUtils").unixTime() >= parseInt(e.inviteCodeExp, 10)
			}));
			var t = e.id.remote.toString();
			if (o("WAWebMsgGetters").getIsImportantMessage(e)) if (C.has(t)) {
				var n;
				(n = C.get(t)) == null || n.push(e);
			} else C.set(t, [e]);
		}), b.length > 0 && await Promise.all(b);
		var v = o("WAWebABProps").getABPropConfigValue("web_history_sync_worker_enabled") === !0, S, R;
		if (v) {
			var L = Array.from(C.keys());
			S = await o("WAWebBackendApi").frontendSendAndReceive("getPendingUnreadMentionCounts", { chatIds: L }), R = m(C, S);
		} else {
			var E = await o("WAWebBackendApi").frontendSendAndReceive("processAndGetUnreadMentionsInfo", { filteredMsgs: u });
			S = E.pendingUnreadMentionsMap, R = E.unreadMentionsToAdd;
		}
		var k = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(u), I = await o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(u, !0);
		o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(r, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.ENCRYPTED, a), await _({
			chatsWithRecentOrFullSyncMsgs: n,
			encryptedMessages: I,
			pendingUnreadMentionsMap: S,
			quarantineTableEntries: k,
			unreadMentionsToAdd: R
		}), await f(s);
	}
	async function _(e) {
		var t = e.chatsWithRecentOrFullSyncMsgs, n = e.encryptedMessages, r = e.pendingUnreadMentionsMap, a = e.quarantineTableEntries, i = e.unreadMentionsToAdd;
		try {
			if (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["storeEncryptedRecentAndFullSyncMsgs: storing ", " msgs: start"])), n.length), await o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(n, t, !0), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["storeEncryptedRecentAndFullSyncMsgs: storing ", " messages: done"])), n.length), await o("WAWebQuarantineDataStore").bulkCreateOrReplaceQuarantineData(a), i.size > 0) {
				var l = await o("WAWebBackendApi").frontendSendAndReceive("getChatIdsNeedToBeDeletedFromUnreadMentionInfo", {
					unreadMentionsToAdd: i,
					pendingUnreadMentionsMap: r
				});
				l.forEach(function(e) {
					i.delete(e);
				}), i.size > 0 && o("WAWebApiChatUnreadMention").addUnreadMentionChat(i, r);
			}
		} catch (e) {
			o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"[history sync] error storing ",
				" recent or full sync messages: ",
				""
			])), n.length, e);
		}
	}
	async function f(e) {
		if (e.length !== 0) try {
			var t = o("WAWebThreadCommonModelUtils").getAggregatedThreadDetailUpdatesFromMessages(e);
			await o("WAWebBulkCreateOrUpdateThreadsMetadata").bulkCreateOrUpdateThreadsMetadata(t);
			var n = t.filter(function(e) {
				return e.threadId.type === o("WAWebThreadUtils").ThreadType.AiThread;
			});
			n.length > 0 && await o("WAWebBackendApi").frontendSendAndReceive("updateChatAiThreads", { aiThreads: n });
		} catch (e) {
			o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["storeThreadMetadataFromHistorySyncMessages: store failed: ", ""])), e).sendLogs("failed-to-store-thread-metadata-from-history-sync-messages");
		}
	}
	l.storeRecentAndFullHistSyncMessages = p;
}), 98);
