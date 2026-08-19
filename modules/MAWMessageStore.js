__d("MAWMessageStore", [
	"MAWAckLevel",
	"MAWAuthor",
	"MAWBridgeMsg",
	"MAWDbMsgTxns",
	"MAWDbThread",
	"MAWDexieCastToPromise",
	"MAWDexieTable",
	"MAWFolderTypes",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWLocalizationUtils",
	"MAWMsgType",
	"MAWThreadFetchAndEmitTxns",
	"MAWTransactionMode",
	"MAWWriteMsgTxns",
	"WAJids",
	"WALogger",
	"WAResultOrError",
	"WATimeUtils",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e) {
		if (e != null && typeof e == "object" && e.optimisticMsg != null) {
			var t = e.optimisticMsg;
			if (typeof t.msgId == "string" && typeof t.ts == "number") return {
				msgId: t.msgId,
				ts: t.ts
			};
		}
	}
	function c(e) {
		if (e != null && typeof e == "object" && e.openMessageOtid != null && typeof e.openMessageOtid == "string") return e.openMessageOtid;
	}
	function d(e) {
		if (e != null && typeof e == "object" && e.folder != null && typeof e.folder == "number") {
			if (e.folder === o("MAWFolderTypes").FOLDER_ID.INBOX) return o("MAWFolderTypes").FOLDER_ID.INBOX;
			if (e.folder === o("MAWFolderTypes").FOLDER_ID.PENDING) return o("MAWFolderTypes").FOLDER_ID.PENDING;
			if (e.folder === o("MAWFolderTypes").FOLDER_ID.OTHER) return o("MAWFolderTypes").FOLDER_ID.OTHER;
			if (e.folder === o("MAWFolderTypes").FOLDER_ID.ARCHIVED) return o("MAWFolderTypes").FOLDER_ID.ARCHIVED;
		}
		return null;
	}
	var m = (function() {
		function t(e) {
			this.db = e;
		}
		var n = t.prototype;
		return n.create = function(t, n) {
			var e = this, a = u(n), i = c(n), l = d(n);
			return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(o("MAWThreadFetchAndEmitTxns").fetchAndEmitThread(this.db, t.id.chat, l, void 0, "MAWMessageStore_DEPRECATED-create").then(function(n) {
				if (n == null) return o("WAResultOrError").makeError({ type: "missing_thread" });
				var l = n.thread;
				if (t.type === o("MAWMsgType").MSG_TYPE.TEXT) {
					var s, u = void 0;
					t.ephemeralSetting != null && (u = {
						ephemeralExpirationInSec: t.ephemeralSetting.expirationTs,
						ephemeralLastUpdatedOrSetTimestamp: t.ephemeralSetting.updatedTs
					});
					var c = {
						ack: t.ack,
						altIndex: void 0,
						author: t.id.author,
						ephemeralSetting: u,
						externalId: t.id.externalId,
						forwardingScore: t.forwardingScore,
						isForwarded: t.forwardingScore > 0,
						msgContent: { content: ((s = t.msgContent) == null ? void 0 : s.content) || "" },
						serverTs: t.serverTs,
						threadJid: l.jid,
						ts: t.ts,
						type: o("MAWMsgType").MSG_TYPE.TEXT
					};
					return o("MAWWriteMsgTxns").writeMsg(e.db, c, l, {
						openMessageOtid: i,
						optimisticMsg: a
					}).then(function() {
						return o("WAResultOrError").makeResult();
					});
				} else if (t.type === o("MAWMsgType").MSG_TYPE.ADMIN) {
					var d = {
						ack: t.ack,
						altIndex: void 0,
						author: o("WAJids").AUTHOR_SYSTEM,
						externalId: t.id.externalId,
						msgContent: babelHelpers.extends({}, t.msgContent, { version: o("MAWLocalizationUtils").isAdminMsgNormalized(t.msgContent.adminType) ? 1 : 0 }),
						serverTs: t.serverTs,
						threadJid: l.jid,
						ts: t.ts,
						type: t.type
					};
					return o("MAWWriteMsgTxns").writeDedupedAdminMessage(e.db, d, l, o("WATimeUtils").castUnixTimeToMillisTime(t.ts)).then(function() {
						return o("WAResultOrError").makeResult();
					});
				}
				throw r("err")("non renderable store not implemented yet");
			}));
		}, n.get = function(t) {
			var e = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t.chat)) : this.db.threads.get({ jid: t.chat });
			return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(o("MAWDexieTable").dexieAll([e, this.db.messages.where("externalId").equals(t.externalId).toArray()]).then(function(e) {
				var n, r = e[0], a = e[1], i = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(r, "MAWMessageStore.get");
				if (i == null) return o("MAWDexieTable").dexieResolve(null);
				var l = a.find(function(e) {
					return e.threadJid === i.jid && e.author === t.author;
				});
				return l == null || l.type !== "Text" ? o("MAWDexieTable").dexieResolve(null) : o("MAWDexieTable").dexieResolve({
					ack: l.ack,
					forwardingScore: (n = l.forwardingScore) != null ? n : 0,
					id: t,
					msgContent: { content: l.msgContent.content },
					ts: l.ts,
					type: l.type
				});
			}));
		}, n.update = function(t) {
			var e = this, n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t.id.chat)) : this.db.threads.get({ jid: t.id.chat });
			return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(o("MAWDexieTable").dexieAll([n, this.db.messages.where("externalId").equals(t.id.externalId).toArray()]).then(function(n) {
				var r = n[0], a = n[1], i = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(r, "MAWMessageStore.update");
				if (i == null) return o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeError("missing"));
				var l = a.find(function(e) {
					return e.threadJid === i.jid && e.author === t.id.author;
				});
				if (l == null || l.type !== "Text") return o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeError("missing"));
				var s = l.ack < o("MAWAckLevel").ACK.sent;
				l.ack = t.ack, l.ts = t.ts, l.serverTs = t.sentTs;
				var u = void 0;
				t.ephemeralSetting != null && (u = {
					ephemeralExpirationInSec: t.ephemeralSetting.expirationTs,
					ephemeralLastUpdatedOrSetTimestamp: t.ephemeralSetting.updatedTs
				}), l.ephemeralSetting = u;
				var c = t.sentTs, d = c == null ? c : o("WATimeUtils").castUnixTimeToMillisTime(c), m = d != null && s ? babelHelpers.extends({}, i, {
					newestMsgTs: d,
					threadOrder: o("MAWDbThread").craftThreadOrder(d, i.jid)
				}) : null, p = m != null && !o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? e.db.threads.put(m) : o("MAWDexieTable").dexieResolve();
				return m != null && o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(m, {
					newestMsgTs: d,
					threadOrder: m.threadOrder
				}, "MAWMessageStore.update"), o("MAWDexieTable").dexieAll([e.db.messages.put(l), p]).then(function() {
					var e = null;
					return o("MAWIndexedDb").afterTransaction({
						tag: "MsgUpdated",
						value: o("MAWBridgeMsg").createBridgeMsg(l, e)
					}), o("WAResultOrError").makeResult();
				});
			}));
		}, n.deleteReactionsForMsg = function(t) {
			var e = this;
			return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(this.db.reactions.where("reactToExternalId").equals(t.externalId).filter(function(e) {
				return o("MAWAuthor").getAuthorUserJid(e.reactToAuthor) === o("MAWAuthor").getAuthorUserJid(t.author) && e.threadJid === t.chat;
			}).toArray().then(function(t) {
				return e.db.reactions.bulkDelete(t.map(function(e) {
					return e.rowId;
				}));
			}));
		}, n.bulkDelete = function(n) {
			var t = this, r = o("MAWDexieTable").dexieAll(n.map(function(e) {
				var n = e.author, r = e.chat, a = e.externalId, i = o("MAWAuthor").getAuthorUserJid(n);
				return t.db.reactions.where("reactToExternalId").equals(a).filter(function(e) {
					return o("MAWAuthor").getAuthorUserJid(e.reactToAuthor) === i && e.threadJid === r;
				}).toArray();
			})).then(function(e) {
				return e.flat();
			}).then(function(n) {
				return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Successfully deleted: ", " reactions rows."])), n.length), t.db.reactions.bulkDelete(n.map(function(e) {
					return e.rowId;
				}));
			});
			return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(o("MAWDbMsgTxns").getMsgsByProtocolMsgId(this.db, n).then(function(e) {
				var n = e.map(function(e) {
					return e.rowId;
				});
				return o("MAWDexieTable").dexieAll([t.db.messages.bulkDelete(n), r]).then(function() {
					return n.length;
				});
			}));
		}, n.bulkGetInGroup = function(t) {
			return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(this.db.messages.where("threadJid").equals(t).toArray()).then(function(e) {
				return e == null || e.length === 0 ? [] : e.map(function(e) {
					return {
						author: e.author,
						chat: t,
						externalId: e.externalId
					};
				});
			});
		}, t;
	})();
	m.tableLocks = {
		chunk: (s = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: s.READWRITE,
		groupInfo: s.READWRITE,
		groupInvites: s.READONLY,
		media: s.READONLY,
		messages: s.READWRITE,
		participants: s.READWRITE,
		poll: s.READONLY,
		reactions: s.READWRITE,
		receiverFetchInfo: s.READONLY,
		threads: s.READWRITE,
		xma: s.READONLY
	}, l.MAWMessageStore_DEPRECATED_DO_NOT_USE = m;
}), 98);
