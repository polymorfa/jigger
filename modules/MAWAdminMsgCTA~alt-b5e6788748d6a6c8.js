__d("MAWAdminMsgCTA", [
	"fbt",
	"I64",
	"MAWAdminMsgTypesGrouped",
	"MAWLocalizationEphemeralSettingSetAdminMsg",
	"MAWLocalizationType",
	"MAWMsgType",
	"MAWTimeUtils",
	"ReQL"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = new Set([
		(u = o("MAWLocalizationType")).LOCALIZATION_TYPE.CURRENT_USER_CREATED_POLL,
		u.LOCALIZATION_TYPE.CURRENT_USER_ADDED_POLL_VOTE,
		u.LOCALIZATION_TYPE.PARTICIPANT_CREATED_POLL,
		u.LOCALIZATION_TYPE.PARTICIPANT_ADDED_POLL_VOTE,
		u.LOCALIZATION_TYPE.PARTICIPANT_ADDED_MULTIPLE_POLL_OPTIONS,
		u.LOCALIZATION_TYPE.PARTICIPANT_ADDED_MULTIPLE_POLL_VOTES,
		u.LOCALIZATION_TYPE.PARTICIPANT_REMOVED_POLL_VOTE,
		u.LOCALIZATION_TYPE.PARTICIPANT_REMOVED_MULTIPLE_POLL_VOTES,
		u.LOCALIZATION_TYPE.CURRENT_USER_REMOVED_POLL_VOTE,
		u.LOCALIZATION_TYPE.CURRENT_USER_REMOVED_MULTIPLE_POLL_VOTES,
		u.LOCALIZATION_TYPE.PARTICIPANT_MIXED_POLL_UPDATE,
		u.LOCALIZATION_TYPE.CURRENT_USER_MIXED_POLL_UPDATE,
		u.LOCALIZATION_TYPE.PARTICIPANT_CHANGED_POLL_VOTE,
		u.LOCALIZATION_TYPE.CURRENT_USER_CHANGED_POLL_VOTE,
		u.LOCALIZATION_TYPE.PARTICIPANT_CHANGED_MULTIPLE_POLL_VOTES,
		u.LOCALIZATION_TYPE.CURRENT_USER_CHANGED_MULTIPLE_POLL_VOTES,
		u.LOCALIZATION_TYPE.PARTICIPANT_ADDED_POLL_OPTION,
		u.LOCALIZATION_TYPE.CURRENT_USER_ADDED_POLL_OPTION
	]), d = new Set([
		u.LOCALIZATION_TYPE.CURRENT_USER_CUSTOMIZE_THEME,
		u.LOCALIZATION_TYPE.CURRENT_USER_CUSTOMIZE_AI_THEME,
		u.LOCALIZATION_TYPE.PARTICIPANT_CUSTOMIZE_THEME,
		u.LOCALIZATION_TYPE.PARTICIPANT_CUSTOMIZE_AI_THEME
	]), m = s._(
		/*BTDS*/
		""
	).toString(), p = s._(
		/*BTDS*/
		""
	).toString(), _ = s._(
		/*BTDS*/
		""
	).toString(), f = s._(
		/*BTDS*/
		""
	).toString(), g = s._(
		/*BTDS*/
		""
	).toString(), h = s._(
		/*BTDS*/
		""
	).toString(), y = s._(
		/*BTDS*/
		""
	).toString(), C = s._(
		/*BTDS*/
		""
	).toString(), b = s._(
		/*BTDS*/
		""
	).toString();
	async function v(t) {
		var n = await o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.admin_message_ctas.index("ctaId")));
		return n != null ? (e || (e = o("I64"))).add(n.ctaId, (e || (e = o("I64"))).one) : (e || (e = o("I64"))).zero;
	}
	function S(e, t, n) {
		var r = [t, n];
		return o("ReQL").firstAsync(o("ReQL").fromTableDescending(e.admin_message_ctas).bounds({
			gte: r,
			lte: r
		}));
	}
	function R(e, t, n) {
		if (e == null) return { showAdChoiceIcon: !1 };
		if (o("MAWLocalizationEphemeralSettingSetAdminMsg").isEphemeralSettingSetAdminMsg(e)) return {
			actionUrl: void 0,
			adClientToken: void 0,
			adHelpUrl: void 0,
			adminMessageNicknameParticipantId: void 0,
			adPreferenceUrl: void 0,
			showAdChoiceIcon: !1,
			targetId: void 0,
			targetTitle: void 0,
			title: m
		};
		if (c.has(e)) return {
			actionUrl: void 0,
			adClientToken: void 0,
			adHelpUrl: void 0,
			adminMessageNicknameParticipantId: void 0,
			adPreferenceUrl: void 0,
			showAdChoiceIcon: !1,
			targetId: t,
			targetTitle: n,
			title: C
		};
		if (d.has(e)) return {
			actionUrl: void 0,
			adClientToken: void 0,
			adHelpUrl: void 0,
			adminMessageNicknameParticipantId: void 0,
			adPreferenceUrl: void 0,
			showAdChoiceIcon: !1,
			targetId: void 0,
			targetTitle: void 0,
			title: b
		};
		switch (e) {
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_THREAD_ADMIN_MESSAGE:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_IGD_THREAD_ADMIN_MESSAGE:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION: return {
				actionUrl: void 0,
				adClientToken: void 0,
				adHelpUrl: void 0,
				adminMessageNicknameParticipantId: void 0,
				adPreferenceUrl: void 0,
				showAdChoiceIcon: !1,
				targetId: void 0,
				targetTitle: void 0,
				title: _
			};
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_ROLLBACK_ADMIN_MESSAGE: return {
				actionUrl: void 0,
				adClientToken: void 0,
				adHelpUrl: void 0,
				adminMessageNicknameParticipantId: void 0,
				adPreferenceUrl: void 0,
				showAdChoiceIcon: !1,
				targetId: void 0,
				targetTitle: void 0,
				title: h
			};
			case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_WITH_OTHER_USER_NAME:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_SELF_THREAD:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_OTHER_USER_NAME_UNKNOWN: return {
				actionUrl: void 0,
				adClientToken: void 0,
				adHelpUrl: void 0,
				adminMessageNicknameParticipantId: void 0,
				adPreferenceUrl: void 0,
				showAdChoiceIcon: !1,
				targetId: void 0,
				targetTitle: void 0,
				title: y
			};
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_PINNED_MESSAGE:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_UNPINNED_MESSAGE:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_PINNED_MESSAGE:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_UNPINNED_MESSAGE: return {
				actionUrl: void 0,
				adClientToken: void 0,
				adHelpUrl: void 0,
				adminMessageNicknameParticipantId: void 0,
				adPreferenceUrl: void 0,
				showAdChoiceIcon: !1,
				targetId: void 0,
				targetTitle: void 0,
				title: p
			};
			case o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_UK_OSA_ADMIN_MESSAGE: return {
				actionUrl: "https://www.messenger.com/help/1145318292241859/?helpref=uk_lm",
				adClientToken: void 0,
				adHelpUrl: void 0,
				adminMessageNicknameParticipantId: void 0,
				adPreferenceUrl: void 0,
				showAdChoiceIcon: !1,
				targetId: void 0,
				targetTitle: void 0,
				title: g
			};
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LIMIT_SHARING_DISABLED:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LIMIT_SHARING_ENABLED:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LIMIT_SHARING_DISABLED:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LIMIT_SHARING_ENABLED: return {
				actionUrl: "https://www.facebook.com/help/messenger-app/2016594885417423?ref=ipl",
				adClientToken: void 0,
				adHelpUrl: void 0,
				adminMessageNicknameParticipantId: void 0,
				adPreferenceUrl: void 0,
				showAdChoiceIcon: !1,
				targetId: void 0,
				targetTitle: void 0,
				title: f
			};
			default: return {
				actionUrl: void 0,
				adClientToken: void 0,
				adHelpUrl: void 0,
				adminMessageNicknameParticipantId: void 0,
				adPreferenceUrl: void 0,
				showAdChoiceIcon: !1,
				targetId: void 0,
				targetTitle: void 0,
				title: void 0
			};
		}
	}
	function L(e) {
		if (e != null) {
			if (o("MAWLocalizationEphemeralSettingSetAdminMsg").isEphemeralSettingSetAdminMsg(e)) return "admin_msg_armadillo_ephemeral_change_duration";
			if (c.has(e)) return "admin_msg_poll_details";
			if (d.has(e)) return "admin_msg_change_theme";
			switch (e) {
				case o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_THREAD_ADMIN_MESSAGE:
				case o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_IGD_THREAD_ADMIN_MESSAGE: return "admin_msg_thread_level_cutover";
				case o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION: return "admin_msg_e2ee_thread";
				case o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_UK_OSA_ADMIN_MESSAGE: return "admin_msg_e2ee_uk_osa";
				case o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_ROLLBACK_ADMIN_MESSAGE: return "admin_msg_cutover_rollback";
				case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE:
				case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_WITH_OTHER_USER_NAME:
				case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_SELF_THREAD:
				case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_OTHER_USER_NAME_UNKNOWN: return "admin_msg_dual_thread_cutover";
				case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_PINNED_MESSAGE:
				case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_UNPINNED_MESSAGE:
				case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_PINNED_MESSAGE:
				case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_UNPINNED_MESSAGE: return "admin_msg_view_pin_msgs_v2";
				case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LIMIT_SHARING_DISABLED:
				case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LIMIT_SHARING_ENABLED:
				case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LIMIT_SHARING_DISABLED:
				case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LIMIT_SHARING_ENABLED: return "admin_msg_change_thread_limit_sharing_permission";
			}
		}
	}
	async function E(e, t, n, r, a) {
		await e.admin_message_ctas.add({
			actionContentBlob: a.actionContentBlob,
			actionUrl: a.actionUrl,
			adClientToken: a.adClientToken,
			adHelpUrl: a.adHelpUrl,
			adminMessageNicknameParticipantId: a.adminMessageNicknameParticipantId,
			adPreferenceUrl: a.adPreferenceUrl,
			ctaId: t,
			messageId: r.msgId,
			showAdChoiceIcon: a.showAdChoiceIcon,
			targetId: a.targetId,
			targetTitle: a.targetTitle,
			threadKey: n,
			timestampMs: o("MAWTimeUtils").toTimestamp(r.ts),
			title: a.title
		});
	}
	async function k(e, t, n) {
		var r = await Promise.all([S(e, t, n.msgId), v(e)]), o = r[0], a = r[1];
		if (o != null) return {
			ctaId: o.ctaId,
			ctaType: L(n.adminType),
			title: o.title
		};
		var i = T(n.adminType, n), l = D(n.adminType, n), s = R(n.adminType, i, l);
		return await E(e, a, t, n, s), {
			ctaId: a,
			ctaType: L(n.adminType),
			title: s.title
		};
	}
	function I(e, t, n) {
		var r = n.adminType;
		return r != null && (o("MAWLocalizationEphemeralSettingSetAdminMsg").isEphemeralSettingSetAdminMsg(r) || r === o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_THREAD_ADMIN_MESSAGE || r === o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_IGD_THREAD_ADMIN_MESSAGE || r === o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION || r === o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_UK_OSA_ADMIN_MESSAGE || r === o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_ROLLBACK_ADMIN_MESSAGE || r === o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE || r === o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_PINNED_MESSAGE || r === o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_UNPINNED_MESSAGE || r === o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_PINNED_MESSAGE || r === o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_UNPINNED_MESSAGE || r === o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LIMIT_SHARING_DISABLED || r === o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LIMIT_SHARING_ENABLED || r === o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LIMIT_SHARING_DISABLED || r === o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LIMIT_SHARING_ENABLED || r != null && c.has(r) || r != null && d.has(r) || o("MAWAdminMsgTypesGrouped").dualThreadCutoverAdminMsgs.includes(r)) ? k(e, t, n) : Promise.resolve();
	}
	function T(t, n) {
		if (t != null) {
			if (n.type_ === o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE) return (e || (e = o("I64"))).of_string(n.externalId);
			if (c.has(t) && n.pollStanzaId != null) return (e || (e = o("I64"))).of_string(n.pollStanzaId);
		}
	}
	function D(e, t) {
		if (e != null && c.has(e)) return t.adminContent == null || t.adminContent.length === 0 ? void 0 : t.adminContent[t.adminContent.length - 1];
	}
	l.getCtaTypeByAdminType = L, l.getAdminMsgCtaStep = I;
}), 226);
