__d("MAWMpsBridgeHandlers", [
	"Base64Utils",
	"MAWExternalId",
	"MAWJids",
	"MAWProtobufDeserializers",
	"MpsTypes",
	"WAArmadilloMiTransportAdminMessage.pb",
	"WABuildMpsPayload",
	"WAJids",
	"WAResultOrError",
	"WAStanzaUtils",
	"WATimeUtils",
	"WebMps"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, n) {
		var r = o("WABuildMpsPayload").buildMpsMessage({ miTransportAdminMessage: e }, {
			externalId: o("WAStanzaUtils").toStanzaId(t.externalId),
			millisServerTs: o("WATimeUtils").castToMillisTime(t.timestampMs),
			senderJid: t.senderJid,
			threadId: t.chatJid
		});
		await o("WebMps").mps().saveNewMessages([{
			directive: null,
			insertionSource: o("MpsTypes").InsertionSource.Receive,
			message: r
		}], { source: n });
	}
	var s = {
		mpsBatchLoadMessage: function(t) {
			return o("WebMps").mps().batchLoadMessage(t);
		},
		mpsBatchLoadMessages: function(t) {
			return o("WebMps").mps().batchLoadMessages(t);
		},
		mpsDebugDbDump: function() {
			return o("WebMps").mps().debugDbDump();
		},
		mpsGetMigrationStatus: function() {
			return { isMigrated: !0 };
		},
		mpsHandleGroupEphemeralSettingFromMI: async function(t) {
			var e = t.groupUpdateDedupeKey, n = t.threadFbid, r = t.timestamp, a = t.ttlSeconds, i = t.updatedByFbid, l = e != null ? o("WAStanzaUtils").toStanzaId(e) : o("MAWExternalId").generateExternalId(), s = i != null ? o("WAJids").toMsgrUserJid(i) : o("WAJids").toMsgrUserJid("0"), u = o("WABuildMpsPayload").buildMpsDisappearingSettingChanged(o("WAJids").toGroupJid(n), s, a, o("WATimeUtils").castMilliSecondsToUnixTime(r), l);
			return await o("WebMps").mps().saveNewMessages([{
				directive: null,
				insertionSource: o("MpsTypes").InsertionSource.Receive,
				message: u
			}], { source: "handle_group_ephemeral_setting_from_mi" }), o("WAResultOrError").makeResult();
		},
		mpsHandleGroupMemberAddModeFromMI: async function(t) {
			var e = t.groupUpdateDedupeKey, n = t.memberAddMode, r = t.setterFbid, a = t.threadFbid, i = e != null ? o("WAStanzaUtils").toStanzaId(e) : o("MAWExternalId").generateExternalId(), l = n === "all_member_add" ? o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode.ALL_MEMBERS : o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode.ADMINS_ONLY, s = o("WABuildMpsPayload").buildMpsGroupMemberAddType(o("WAJids").toGroupJid(a), o("WAJids").toMsgrUserJid(r), l, o("WATimeUtils").unixTime(), i);
			return await o("WebMps").mps().saveNewMessages([{
				directive: null,
				insertionSource: o("MpsTypes").InsertionSource.Receive,
				message: s
			}], { source: "handle_group_member_add_mode_from_mi" }), o("WAResultOrError").makeResult();
		},
		mpsHandleGroupParticipantsAddFromMI: async function(t) {
			var e = t.adderFbid, n = t.groupUpdateDedupeKey, r = t.participantFbids, a = t.threadFbid, i = t.timestamp, l = n != null ? o("WAStanzaUtils").toStanzaId(n) : o("MAWExternalId").generateExternalId(), s = o("WABuildMpsPayload").buildMpsGroupParticipantsChanged(o("WAJids").toGroupJid(a), o("WAJids").toMsgrUserJid(e), r.map(function(e) {
				return o("WAJids").toMsgrUserJid(e);
			}), o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupParticipantChanged$Action.ADDED, o("WATimeUtils").castMilliSecondsToUnixTime(i), l);
			return await o("WebMps").mps().saveNewMessages([{
				directive: null,
				insertionSource: o("MpsTypes").InsertionSource.Receive,
				message: s
			}], { source: "handle_group_participants_add_from_mi" }), o("WAResultOrError").makeResult();
		},
		mpsHandleGroupParticipantsDemoteFromMI: async function(t) {
			var e = t.demotorFbid, n = t.groupUpdateDedupeKey, r = t.participantFbids, a = t.threadFbid, i = t.timestamp, l = n != null ? o("WAStanzaUtils").toStanzaId(n) : o("MAWExternalId").generateExternalId(), s = o("WABuildMpsPayload").buildMpsGroupAdminChangedMsg(o("WAJids").toGroupJid(a), o("WAJids").toMsgrUserJid(e), r.map(function(e) {
				return o("WAJids").toMsgrUserJid(e);
			}), o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupAdminChanged$Action.REMOVED, o("WATimeUtils").castMilliSecondsToUnixTime(i), l);
			return await o("WebMps").mps().saveNewMessages([{
				directive: null,
				insertionSource: o("MpsTypes").InsertionSource.Receive,
				message: s
			}], { source: "handle_group_participants_demote_from_mi" }), o("WAResultOrError").makeResult();
		},
		mpsHandleGroupParticipantsPromoteFromMI: async function(t) {
			var e = t.groupUpdateDedupeKey, n = t.participantFbids, r = t.promoterFbid, a = t.threadFbid, i = t.timestamp, l = e != null ? o("WAStanzaUtils").toStanzaId(e) : o("MAWExternalId").generateExternalId(), s = o("WABuildMpsPayload").buildMpsGroupAdminChangedMsg(o("WAJids").toGroupJid(a), o("WAJids").toMsgrUserJid(r), n.map(function(e) {
				return o("WAJids").toMsgrUserJid(e);
			}), o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupAdminChanged$Action.ADDED, o("WATimeUtils").castMilliSecondsToUnixTime(i), l);
			return await o("WebMps").mps().saveNewMessages([{
				directive: null,
				insertionSource: o("MpsTypes").InsertionSource.Receive,
				message: s
			}], { source: "handle_group_participants_promote_from_mi" }), o("WAResultOrError").makeResult();
		},
		mpsHandleGroupParticipantsRemoveFromMI: async function(t) {
			var e = t.groupUpdateDedupeKey, n = t.participantFbids, r = t.removerFbid, a = t.threadFbid, i = t.timestamp, l = e != null ? o("WAStanzaUtils").toStanzaId(e) : o("MAWExternalId").generateExternalId(), s = o("WABuildMpsPayload").buildMpsGroupParticipantsChanged(o("WAJids").toGroupJid(a), o("WAJids").toMsgrUserJid(r), n.map(function(e) {
				return o("WAJids").toMsgrUserJid(e);
			}), o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupParticipantChanged$Action.REMOVED, o("WATimeUtils").castMilliSecondsToUnixTime(i), l);
			return await o("WebMps").mps().saveNewMessages([{
				directive: null,
				insertionSource: o("MpsTypes").InsertionSource.Receive,
				message: s
			}], { source: "handle_group_participants_remove_from_mi" }), o("WAResultOrError").makeResult();
		},
		mpsHandleGroupSetSubjectFromMI: async function(t) {
			var e = t.groupUpdateDedupeKey, n = t.subject, r = t.subjectChangerFbid, a = t.threadFbid, i = t.timestamp;
			if (n == null) return o("WAResultOrError").makeResult();
			var l = e != null ? o("WAStanzaUtils").toStanzaId(e) : o("MAWExternalId").generateExternalId(), s = o("WABuildMpsPayload").buildMpsGroupNameChangedMsg(o("WAJids").toGroupJid(a), o("WAJids").toMsgrUserJid(r), n, o("WATimeUtils").castMilliSecondsToUnixTime(i), l);
			return await o("WebMps").mps().saveNewMessages([{
				directive: null,
				insertionSource: o("MpsTypes").InsertionSource.Receive,
				message: s
			}], { source: "handle_group_set_subject_from_mi" }), o("WAResultOrError").makeResult();
		},
		mpsHandleLsAdminMessage: async function(n) {
			var t = n.actorFbid, r = n.chatJid, a = n.externalId, i = n.protobuf, l = n.timestampMs;
			return await e({
				payload: i,
				version: 3
			}, {
				chatJid: r,
				externalId: a,
				senderJid: o("MAWJids").toUserJid(t),
				timestampMs: l
			}, "handle_ls_admin_message"), o("WAResultOrError").makeResult();
		},
		mpsHandleUnencryptedAdminMessageFromMI: async function(n) {
			var t, r, a, i = n.backupMessageProtoB64, l = n.chatJid, s = n.timestampMs, u = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(o("Base64Utils").toArrayBuffer(i)).proto, c = (t = u.miTransportAdminMessage) == null ? void 0 : t.payload, d = (r = u.metadata) == null ? void 0 : r.senderId, m = (a = u.metadata) == null ? void 0 : a.messageId;
			return c == null || d == null || m == null || await e({
				payload: c,
				version: 3
			}, {
				chatJid: l,
				externalId: m,
				senderJid: o("WAJids").toMsgrUserJid(d),
				timestampMs: s
			}, "handle_unencrypted_admin_message_from_mi"), o("WAResultOrError").makeResult();
		},
		mpsLoadMessage: function(t) {
			return o("WebMps").mps().loadMessage(t);
		},
		mpsLoadMessages: function(t) {
			return o("WebMps").mps().loadMessages(t);
		}
	};
	l.mpsBridgeHandlers = s;
}), 98);
