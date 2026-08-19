__d("MAWGroupInfoStore", [
	"MAWBridgeTypesCreators",
	"MAWDataSyncQueue",
	"MAWDbMsgTxns",
	"MAWDbThreadTxns",
	"MAWDexieCastToPromise",
	"MAWDexieTable",
	"MAWFolderTypes",
	"MAWGetOrCreateThreadTxns",
	"MAWInMemoryGroupInfoStore",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWLoadThreadsTxns",
	"MAWThreadManagementTxns",
	"MAWTransactionMode",
	"Promise",
	"WAResultOrError",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e) {
		if (e != null && typeof e == "object" && e.groupStatus != null && typeof e.groupStatus == "string") return e.groupStatus;
	}
	function c(e) {
		if (e != null && typeof e == "object" && e.clientThreadKey != null && typeof e.clientThreadKey == "string") return e.clientThreadKey;
	}
	function d(e) {
		if (e != null && typeof e == "object" && e.folder != null && typeof e.folder == "number") return e.folder;
	}
	function m(e) {
		if (e != null && typeof e == "object" && e.threadMsgInfo != null) return e.threadMsgInfo;
	}
	function p(e) {
		if (e != null && typeof e == "object" && e.updateParticipantMedatadata != null && typeof e.updateParticipantMedatadata == "boolean") return e.updateParticipantMedatadata;
	}
	function _(e) {
		return e === null ? {} : e;
	}
	var f = (function() {
		function e(e) {
			var t = this;
			this.get = function(e, n) {
				var r = d(n);
				return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(o("MAWThreadManagementTxns").getGroupThread(t.db, e, r).then(function(e) {
					return e != null ? e : null;
				}).then(function(e) {
					return e == null ? o("WAResultOrError").makeError("missing_group") : o("MAWLoadThreadsTxns").loadContentsForThreads(t.db, [e.thread], 1, null, "getGroupInfoStore").then(function() {
						return e.groupInfo;
					}).then(function(e) {
						return o("WAResultOrError").makeResult(g(e));
					});
				}));
			}, this.create = function(e, n) {
				var r = u(n) === "added" ? o("WATimeUtils").millisTime() : o("WATimeUtils").castUnixTimeToMillisTime(e.creationTs);
				return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(o("MAWGetOrCreateThreadTxns").getOrCreateThread(t.db, {
					clientThreadKey: c(n),
					createTs: r,
					description: "MAWGroupInfoStore-create",
					folder: o("MAWFolderTypes").FOLDER_ID.INBOX,
					jid: e.jid
				}, void 0, m(n)).then(function(n) {
					var r = n.created, a = n.thread, i = h(e);
					return o("MAWInMemoryGroupInfoStore").getReadwriteInMemoryGroupInfoStore().store(i), o("MAWDataSyncQueue").addSyncItem("put", {
						key: i.groupJid,
						tableName: "groupInfo",
						values: [i]
					}), o("MAWDbMsgTxns").getThreadNewestMessageId(t.db, a.jid).then(function() {
						o("MAWIndexedDb").afterTransaction({
							tag: "GroupInfoUpdated",
							value: o("MAWBridgeTypesCreators").createBridgeUpdatedGroupInfo(i)
						});
					}).then(function() {
						return a.archived === !0 ? o("MAWDbThreadTxns").unarchiveThreads(t.db, [a.jid]) : o("MAWDexieTable").dexieResolve();
					}).then(function() {
						return r ? o("WAResultOrError").makeResult(i.groupJid) : o("WAResultOrError").makeError("existing");
					});
				}));
			}, this.delete = function(e) {
				o("MAWInMemoryGroupInfoStore").getReadwriteInMemoryGroupInfoStore().delete(e), o("MAWDataSyncQueue").addSyncItem("delete", {
					key: e,
					tableName: "groupInfo"
				});
				var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(e)) : t.db.threads.get({ jid: e });
				return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(n.then(function(e) {
					var n = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(e, "MAWGroupInfoStore.delete");
					return n == null ? o("WAResultOrError").makeError("missing_group") : o("MAWDexieTable").dexieAll([o("MAWDbThreadTxns").deleteThread(t.db, n.jid), t.db.participants.where("threadJid").equals(n.jid).delete()]).then(function() {
						return o("WAResultOrError").makeResult();
					});
				}));
			}, this.update = function(e, n, r) {
				var a = o("MAWDexieTable").dexieResolve(o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(e)), i = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(e)) : t.db.threads.get({ jid: e });
				return o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(i.then(function(e) {
					var t = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(e, "MAWGroupInfoStore.update");
					return t == null ? o("WAResultOrError").makeError("missing_group") : a.then(function(e) {
						if (e == null) return o("WAResultOrError").makeError("missing_group");
						var a = g(e), i = n(a), l = h(i);
						return o("MAWInMemoryGroupInfoStore").getReadwriteInMemoryGroupInfoStore().store(l), o("MAWDataSyncQueue").addSyncItem("put", {
							key: l.groupJid,
							tableName: "groupInfo",
							values: [l]
						}), o("MAWIndexedDb").afterTransaction({
							tag: "GroupInfoUpdated",
							value: o("MAWBridgeTypesCreators").createBridgeUpdatedGroupInfo(l)
						}), p(r) === !0 && o("MAWIndexedDb").afterTransaction({
							tag: "UpdateE2EEMetadataParticipants",
							value: o("MAWBridgeTypesCreators").createBridgeUpdateE2EEMetadataParticipants(t.jid)
						}), o("WAResultOrError").makeResult();
					});
				}));
			}, this.clear = function() {
				return o("MAWInMemoryGroupInfoStore").clearInMemoryGroupInfoStore(), o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(t.db.groupInfo.clear());
			}, this.db = e;
		}
		var t = e.prototype;
		return t.has = function(t) {
			return (s || (s = n("Promise"))).resolve(o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(t) != null);
		}, e;
	})();
	f.tableLocks = {
		chunk: (e = o("MAWTransactionMode")).READONLY,
		editMsgHistory: e.READONLY,
		groupInfo: e.READWRITE,
		groupInvites: e.READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		participants: e.READWRITE,
		poll: e.READONLY,
		reactions: e.READONLY,
		receiverFetchInfo: e.READONLY,
		threads: e.READWRITE,
		xma: e.READONLY
	};
	function g(e) {
		return babelHelpers.extends({ jid: e.groupJid }, _(e.creator != null ? { creator: e.creator } : null), { creationTs: e.creationTs }, _(e.participantVersion != null ? { participantVersion: e.participantVersion } : null), {
			inviter: e.inviter,
			memberAddMode: e.memberAddMode,
			subject: babelHelpers.extends({ content: e.name }, _(e.nameOwner != null ? { user: e.nameOwner } : null), _(e.nameTs != null ? { ts: e.nameTs } : null))
		});
	}
	function h(e) {
		var t = e.subject.content;
		return t != null && t.length === 0 && (t = void 0), {
			creationTs: e.creationTs,
			creator: e.creator,
			groupJid: e.jid,
			inviter: e.inviter,
			memberAddMode: e.memberAddMode,
			name: t,
			nameOwner: e.subject.user,
			nameTs: e.subject.ts,
			participantVersion: e.participantVersion
		};
	}
	l.MAWGroupInfoStore = f;
}), 98);
