__d("MAWAdminWriteCutoverThreadMsgTxn", [
	"CurrentEnvironment",
	"MAWBridge",
	"MAWBridgeMsg",
	"MAWDbMsg",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWExternalId",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWLocalizationType",
	"MAWLocalizationUtils",
	"MAWMsgType",
	"MAWWriteBulkWriteIncomingAdminMsgTxns",
	"MAWWriteMsgTxns",
	"MessagingArmadilloThreadCutoverNonTALClientDomain",
	"MessagingArmadilloThreadCutoverNonTALClientEvent",
	"MessagingArmadilloThreadCutoverNonTALClientEventDetails",
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"WmiMetadataThreadsWriter",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, a, i) {
		var l = o("WAJids").switchOnMsgrChatJidType(e, {
			group: function(t) {
				return o("WAJids").groupIdFromJid(t);
			},
			user: function(t) {
				return o("WAJids").userIdFromJid(t);
			}
		});
		o("MAWBridge").getBridge().fireAndForget("event", "logCutoverEvent", {
			armadilloThreadId: l,
			domain: r("MessagingArmadilloThreadCutoverNonTALClientDomain").ARMADILLO_CUTOVER_CLIENT_DOMAIN_MESSENGER_CUTOVER_DASM_NATIVE_OPERATIONS,
			event: r("MessagingArmadilloThreadCutoverNonTALClientEvent").ARMADILLO_CUTOVER_CLIENT_EVENT_COMPLETE_CUTOVER,
			eventDetails: a,
			openThreadId: t,
			success: i,
			traceId: n
		});
	}
	function u(t, n, a, i) {
		return o("MAWDbThreadTxns").getThread(t, n).then(function(l) {
			var u = function(t, r) {
				s(n, a, i, t, r);
			};
			if (!l.success) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["cutoverThreadAdminMessage failed to get the thread"]))), u(r("MessagingArmadilloThreadCutoverNonTALClientEventDetails").ARMADILLO_CUTOVER_CLIENT_EVENT_DETAILS_MISSING_ACT_THREAD, !1), { needsMarkThreadAsMigrated: !1 };
			var c = l.value;
			if (c.isMigratedLocally === !0) return u(r("MessagingArmadilloThreadCutoverNonTALClientEventDetails").ARMADILLO_CUTOVER_CLIENT_EVENT_DETAILS_THREAD_ALREADY_MIGRATED, !0), { needsMarkThreadAsMigrated: !1 };
			var d = o("MAWDbMsg").craftE2eeAdminMsgAltIndex(c.chatId), m = o("MAWDbMsg").craftCutoverAdminMsgAltIndex(c.chatId);
			return t.messages.where("altIndex").equals(d).first().then(function(e) {
				var n = r("CurrentEnvironment").instagramdotcom ? o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_IGD_THREAD_ADMIN_MESSAGE : o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_THREAD_ADMIN_MESSAGE;
				if (!e) {
					var a = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg({
						adminMsgContent: [],
						adminType: n,
						version: 1
					}, c.jid, o("MAWExternalId").generateExternalId(), o("WATimeUtils").castToUnixTime(0), m);
					return o("MAWWriteMsgTxns").writeMsg(t, a, c, { sortOrderMs: 0 }).then(function() {
						return u(r("MessagingArmadilloThreadCutoverNonTALClientEventDetails").ARMADILLO_CUTOVER_CLIENT_EVENT_DETAILS_APPEND_ADMIN_MESSAGES, !0), { needsMarkThreadAsMigrated: !0 };
					});
				}
				var i = babelHelpers.extends({}, e, {
					altIndex: m,
					author: o("WAJids").AUTHOR_SYSTEM,
					msgContent: {
						adminMsgContent: [],
						adminType: n
					},
					type: o("MAWMsgType").MSG_TYPE.ADMIN
				});
				return t.messages.put(i).then(function() {
					return o("MAWIndexedDb").afterTransaction({
						tag: "MsgUpdated",
						value: o("MAWBridgeMsg").createBridgeMsg(i)
					}), u(r("MessagingArmadilloThreadCutoverNonTALClientEventDetails").ARMADILLO_CUTOVER_CLIENT_EVENT_DETAILS_APPEND_ADMIN_MESSAGES, !0), { needsMarkThreadAsMigrated: !0 };
				});
			});
		});
	}
	function c(e, t) {
		var n = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg({
			adminMsgContent: [],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_ROLLBACK_ADMIN_MESSAGE
		}, t.jid, o("MAWExternalId").generateExternalId()), a = babelHelpers.extends({}, t, { didInsertDualThreadCutoverAdminMsg: !1 });
		o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && (o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(a, { didInsertDualThreadCutoverAdminMsg: !1 }, "MAWAdminWriteCutoverThreadMsgTxn.writeRollbackCutoverAdminMsg"), o("WmiMetadataThreadsWriter").storeThreadPartialOnDisk(a));
		var i = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.put(a);
		return i.then(function() {
			return o("MAWWriteMsgTxns").writeMsg(e, n, a).then(r("emptyFunction"));
		});
	}
	function d(e, t) {
		var n = o("MAWDbMsg").craftCutoverAdminMsgAltIndex(t.chatId), a = o("MAWDbMsg").craftE2eeAdminMsgAltIndex(t.chatId);
		return e.messages.where("altIndex").equals(a).first().then(function(i) {
			if (i == null) return e.messages.where("altIndex").equals(n).first().then(function(n) {
				if (!n) return o("MAWWriteBulkWriteIncomingAdminMsgTxns").writeE2EEAdminMsgsForIncomingCreatedThreadsWithAfterTxns(e, [t]).then(r("emptyFunction"));
				var i = babelHelpers.extends({}, n, {
					altIndex: a,
					author: o("WAJids").AUTHOR_SYSTEM,
					msgContent: {
						adminMsgContent: [],
						adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION
					},
					type: o("MAWMsgType").MSG_TYPE.ADMIN
				});
				return e.messages.put(i).then(function() {
					o("MAWIndexedDb").afterTransaction({
						tag: "MsgUpdated",
						value: o("MAWBridgeMsg").createBridgeMsg(i)
					});
				});
			});
		});
	}
	l.writeCutoverThreadAdminMsg = u, l.writeRollbackCutoverAdminMsg = c, l.revertCutoverThreadAdminMsg = d;
}), 98);
