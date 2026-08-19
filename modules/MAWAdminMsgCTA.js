__d("MAWAdminMsgCTA", [
	"fbt",
	"I64",
	"MAWAdminMsgTypesGrouped",
	"MAWLocalizationEphemeralSettingSetAdminMsg",
	"MAWLocalizationType",
	"MAWMsgType",
	"MAWTimeUtils",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = new Set([
		(c = o("MAWLocalizationType")).LOCALIZATION_TYPE.CURRENT_USER_CREATED_POLL,
		c.LOCALIZATION_TYPE.CURRENT_USER_ADDED_POLL_VOTE,
		c.LOCALIZATION_TYPE.PARTICIPANT_CREATED_POLL,
		c.LOCALIZATION_TYPE.PARTICIPANT_ADDED_POLL_VOTE,
		c.LOCALIZATION_TYPE.PARTICIPANT_ADDED_MULTIPLE_POLL_OPTIONS,
		c.LOCALIZATION_TYPE.PARTICIPANT_ADDED_MULTIPLE_POLL_VOTES,
		c.LOCALIZATION_TYPE.PARTICIPANT_REMOVED_POLL_VOTE,
		c.LOCALIZATION_TYPE.PARTICIPANT_REMOVED_MULTIPLE_POLL_VOTES,
		c.LOCALIZATION_TYPE.CURRENT_USER_REMOVED_POLL_VOTE,
		c.LOCALIZATION_TYPE.CURRENT_USER_REMOVED_MULTIPLE_POLL_VOTES,
		c.LOCALIZATION_TYPE.PARTICIPANT_MIXED_POLL_UPDATE,
		c.LOCALIZATION_TYPE.CURRENT_USER_MIXED_POLL_UPDATE,
		c.LOCALIZATION_TYPE.PARTICIPANT_CHANGED_POLL_VOTE,
		c.LOCALIZATION_TYPE.CURRENT_USER_CHANGED_POLL_VOTE,
		c.LOCALIZATION_TYPE.PARTICIPANT_CHANGED_MULTIPLE_POLL_VOTES,
		c.LOCALIZATION_TYPE.CURRENT_USER_CHANGED_MULTIPLE_POLL_VOTES,
		c.LOCALIZATION_TYPE.PARTICIPANT_ADDED_POLL_OPTION,
		c.LOCALIZATION_TYPE.CURRENT_USER_ADDED_POLL_OPTION
	]), m = new Set([
		c.LOCALIZATION_TYPE.CURRENT_USER_CUSTOMIZE_THEME,
		c.LOCALIZATION_TYPE.CURRENT_USER_CUSTOMIZE_AI_THEME,
		c.LOCALIZATION_TYPE.PARTICIPANT_CUSTOMIZE_THEME,
		c.LOCALIZATION_TYPE.PARTICIPANT_CUSTOMIZE_AI_THEME
	]), p = s._(
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
	).toString(), v = s._(
		/*BTDS*/
		""
	).toString();
	function S(e) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("ReQL").firstAsync(o("ReQL").fromTableDescending(e.admin_message_ctas.index("ctaId")));
			return t != null ? (u || (u = o("I64"))).add(t.ctaId, (u || (u = o("I64"))).one) : (u || (u = o("I64"))).zero;
		}), R.apply(this, arguments);
	}
	function L(e, t, n) {
		var r = [t, n];
		return o("ReQL").firstAsync(o("ReQL").fromTableDescending(e.admin_message_ctas).bounds({
			gte: r,
			lte: r
		}));
	}
	function E(e, t, n) {
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
			title: p
		};
		if (d.has(e)) return {
			actionUrl: void 0,
			adClientToken: void 0,
			adHelpUrl: void 0,
			adminMessageNicknameParticipantId: void 0,
			adPreferenceUrl: void 0,
			showAdChoiceIcon: !1,
			targetId: t,
			targetTitle: n,
			title: b
		};
		if (m.has(e)) return {
			actionUrl: void 0,
			adClientToken: void 0,
			adHelpUrl: void 0,
			adminMessageNicknameParticipantId: void 0,
			adPreferenceUrl: void 0,
			showAdChoiceIcon: !1,
			targetId: void 0,
			targetTitle: void 0,
			title: v
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
				title: f
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
				title: y
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
				title: C
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
				title: _
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
				title: h
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
				title: g
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
	function k(e) {
		if (e != null) {
			if (o("MAWLocalizationEphemeralSettingSetAdminMsg").isEphemeralSettingSetAdminMsg(e)) return "admin_msg_armadillo_ephemeral_change_duration";
			if (d.has(e)) return "admin_msg_poll_details";
			if (m.has(e)) return "admin_msg_change_theme";
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
	function I(e, t, n, r, o) {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a) {
			yield e.admin_message_ctas.add({
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
		}), T.apply(this, arguments);
	}
	function D(e, t, n) {
		return x.apply(this, arguments);
	}
	function x() {
		return x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o) {
			var a = yield (e || (e = n("Promise"))).all([L(t, r, o.msgId), S(t)]), i = a[0], l = a[1];
			if (i != null) return {
				ctaId: i.ctaId,
				ctaType: k(o.adminType),
				title: i.title
			};
			var s = P(o.adminType, o), u = N(o.adminType, o), c = E(o.adminType, s, u);
			return yield I(t, l, r, o, c), {
				ctaId: l,
				ctaType: k(o.adminType),
				title: c.title
			};
		}), x.apply(this, arguments);
	}
	function $(t, r, a) {
		var i = a.adminType;
		return i != null && (o("MAWLocalizationEphemeralSettingSetAdminMsg").isEphemeralSettingSetAdminMsg(i) || i === o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_THREAD_ADMIN_MESSAGE || i === o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_IGD_THREAD_ADMIN_MESSAGE || i === o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION || i === o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_UK_OSA_ADMIN_MESSAGE || i === o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_ROLLBACK_ADMIN_MESSAGE || i === o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE || i === o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_PINNED_MESSAGE || i === o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_UNPINNED_MESSAGE || i === o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_PINNED_MESSAGE || i === o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_UNPINNED_MESSAGE || i === o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LIMIT_SHARING_DISABLED || i === o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LIMIT_SHARING_ENABLED || i === o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LIMIT_SHARING_DISABLED || i === o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LIMIT_SHARING_ENABLED || i != null && d.has(i) || i != null && m.has(i) || o("MAWAdminMsgTypesGrouped").dualThreadCutoverAdminMsgs.includes(i)) ? D(t, r, a) : (e || (e = n("Promise"))).resolve();
	}
	function P(e, t) {
		if (e != null) {
			if (t.type_ === o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE) return (u || (u = o("I64"))).of_string(t.externalId);
			if (d.has(e) && t.pollStanzaId != null) return (u || (u = o("I64"))).of_string(t.pollStanzaId);
		}
	}
	function N(e, t) {
		if (e != null && d.has(e)) return t.adminContent == null || t.adminContent.length === 0 ? void 0 : t.adminContent[t.adminContent.length - 1];
	}
	l.getCtaTypeByAdminType = k, l.getAdminMsgCtaStep = $;
}), 226);
