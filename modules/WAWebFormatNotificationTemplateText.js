__d("WAWebFormatNotificationTemplateText", [
	"fbt",
	"WAWebABProps",
	"WAWebABPropsInternalNumber",
	"WAWebBizBroadcastFormatStatusText",
	"WAWebBotBaseGating",
	"WAWebBotGating",
	"WAWebBotTypes",
	"WAWebBotUtils",
	"WAWebCTWAGatingUtils",
	"WAWebChatAssignmentUtils",
	"WAWebClock",
	"WAWebCommonMsgTemplateParamsUtils",
	"WAWebContactCollection",
	"WAWebCurrencyUtils",
	"WAWebDisplayedNameIsBizName",
	"WAWebFbtAppName",
	"WAWebFormatChangeLidTemplateText",
	"WAWebFormatChangeUsernameTemplateText",
	"WAWebFormatEphemeralSetting",
	"WAWebFormatParticipantNames",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGetBusinessNameFromMsg",
	"WAWebHostedGroupUtils",
	"WAWebLabelConstants",
	"WAWebLimitSharingUIUtils",
	"WAWebListsGatingUtils",
	"WAWebMsgGetters",
	"WAWebOrderGatingUtils",
	"WAWebSupportChatStrings",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"WAWebWidToFormattedNameOrNumber",
	"nullthrows"
], (function(t, n, r, o, a, i, l, s) {
	function e(e, t, n) {
		var r = { text: u(e, t, n) }, o = K(e);
		return o != null && (r.ctaText = o), r;
	}
	function u(e, t, n) {
		var a = e.templateParams, i = e.subtype;
		return i === "non_verified_transition" ? s._(
			/*BTDS*/
			""
		) : i === "unverified_transition" ? s._(
			/*BTDS*/
			""
		) : i === "verified_transition" ? s._(
			/*BTDS*/
			""
		) : i === "verified_low_unknown" ? s._(
			/*BTDS*/
			""
		) : i === "verified_high" ? s._(
			/*BTDS*/
			""
		) : i === "verified_initial_unknown" ? s._(
			/*BTDS*/
			""
		) : i === "verified_initial_low" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "verified_initial_high" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "verified_transition_any_to_none" ? s._(
			/*BTDS*/
			""
		) : i === "verified_transition_any_to_high" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "verified_transition_high_to_low" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "verified_transition_high_to_unknown" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "verified_transition_unknown_to_low" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "verified_transition_low_to_unknown" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "verified_transition_none_to_low" ? s._(
			/*BTDS*/
			""
		) : i === "verified_transition_none_to_unknown" ? s._(
			/*BTDS*/
			""
		) : i === "change_number" ? c(e, a) : i === "sender_invite" ? d(e, a) : i === "receiver_invite" ? m(e) : i === "masked_thread_created" ? s._(
			/*BTDS*/
			""
		) : i === "pnh_thread_promotion" ? s._(
			/*BTDS*/
			""
		) : i === "cag_masked_thread_created" ? s._(
			/*BTDS*/
			""
		) : i === "payment_transaction_status_update_failed" ? s._(
			/*BTDS*/
			"",
			[s._param("receiverName", r("WAWebWidToFormattedNameOrNumber")(a[0])), s._param("relativeTime", o("WAWebClock").Clock.paymentTimestampStr(e.t))]
		) : i === "payment_transaction_status_update_refunded" ? s._(
			/*BTDS*/
			"",
			[s._param("receiverName", r("WAWebWidToFormattedNameOrNumber")(a[0])), s._param("relativeTime", o("WAWebClock").Clock.paymentTimestampStr(e.t))]
		) : i === "payment_transaction_status_update_refund_failed" ? s._(
			/*BTDS*/
			"",
			[s._param("receiverName", r("WAWebWidToFormattedNameOrNumber")(a[0])), s._param("relativeTime", o("WAWebClock").Clock.paymentTimestampStr(e.t))]
		) : i === "payment_transaction_request_cancelled" ? p(e, a) : i === "payment_transaction_status_receiver_pending_setup" ? _(a) : i === "payment_action_request_declined" ? f(e, a) : i === "payment_action_request_expired" ? g(a) : i === "payment_invite_account_set_up" ? h(a) : i === "biz_verified_transition_top_to_bottom" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "biz_verified_transition_bottom_to_top" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "biz_intro_top" ? b(e) : i === "biz_intro_bottom" ? s._(
			/*BTDS*/
			""
		) : i === "biz_name_change" ? v(e) : i === "biz_move_to_consumer_app" ? s._(
			/*BTDS*/
			""
		) : i === "biz_two_tier_migration_top" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "biz_two_tier_migration_bottom" ? s._(
			/*BTDS*/
			""
		) : i === "blue_msg_bsp_fb_to_bsp_premise" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_bsp_fb_to_self_fb" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_bsp_fb_to_self_premise" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_bsp_fb_unverified" ? s._(
			/*BTDS*/
			""
		) : i === "blue_msg_bsp_fb_unverified_to_bsp_premise_verified" ? y(e) : i === "blue_msg_bsp_fb_unverified_to_self_fb_verified" ? C(e) : i === "blue_msg_bsp_fb_unverified_to_self_premise_verified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_bsp_fb_verified" ? S(e) : i === "blue_msg_bsp_fb_verified_to_bsp_premise_unverified" ? R(e) : i === "blue_msg_bsp_fb_verified_to_self_fb_unverified" ? L(e) : i === "blue_msg_bsp_fb_verified_to_self_premise_unverified" ? E(e) : i === "blue_msg_bsp_premise_to_self_premise" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_bsp_premise_unverified" ? s._(
			/*BTDS*/
			""
		) : i === "blue_msg_bsp_premise_unverified_to_self_premise_verified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_bsp_premise_verified" ? k(e) : i === "blue_msg_bsp_premise_verified_to_self_premise_unverified" ? I(e) : i === "blue_msg_consumer_to_bsp_fb_unverified" ? T(e) : i === "blue_msg_consumer_to_bsp_premise_unverified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_consumer_to_self_fb_unverified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_consumer_to_self_premise_unverified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_self_fb_to_bsp_premise" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_self_fb_to_self_premise" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_self_fb_unverified" ? s._(
			/*BTDS*/
			""
		) : i === "blue_msg_self_fb_unverified_to_bsp_premise_verified" ? D(e) : i === "blue_msg_self_fb_unverified_to_self_premise_verified" ? x(e) : i === "blue_msg_self_fb_verified" ? $(e) : i === "blue_msg_self_fb_verified_to_bsp_premise_unverified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_self_fb_verified_to_self_premise_unverified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_self_premise_to_bsp_premise" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_self_premise_unverified" ? s._(
			/*BTDS*/
			""
		) : i === "blue_msg_self_premise_verified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_to_bsp_fb" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_to_consumer" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_to_self_fb" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_unverified_to_bsp_fb_verified" ? P(e) : i === "blue_msg_unverified_to_bsp_premise_verified" ? N(e) : i === "blue_msg_unverified_to_self_fb_verified" ? M(e) : i === "blue_msg_unverified_to_verified" ? w(e) : i === "blue_msg_verified_to_bsp_fb_unverified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_verified_to_bsp_premise_unverified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_verified_to_self_fb_unverified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "blue_msg_verified_to_unverified" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "biz_privacy_mode_init_fb" ? A(e) : i === "support_system_message" ? F() : i === "biz_privacy_mode_to_fb" ? V(e) : i === "biz_privacy_mode_init_bsp" ? s._(
			/*BTDS*/
			""
		) : i === "biz_privacy_mode_to_bsp" ? s._(
			/*BTDS*/
			""
		) : i === "block_contact" ? O(a) : i === "disappearing_mode_update" ? o("WAWebFormatEphemeralSetting").formatEphemeralSetting(e) : i === "disappearing_mode" ? o("WAWebFormatEphemeralSetting").getDefaultDisappearingModeSystemMessageText(e) : i === "disappearing_mode_unsupported" ? o("WAWebFormatEphemeralSetting").getDMUnsupportedSystemMessageText() : i === "chat_assignment" ? W(a, t) : i === "chat_assignment_unassign" ? q(t) : i === "order_ephemeral_exemption" ? U() : i === "bot_init" ? H(e, n) : i === "bot_invoke_disclaimer" ? G() : i === "biz_bot_1p_disclosure" ? B() : i === "biz_bot_3p_disclosure" ? s._(
			/*BTDS*/
			""
		) : i === "change_lid" ? o("WAWebFormatChangeLidTemplateText").formatChangeLidLeadTemplateText(e) : i === "change_username" ? r("WAWebFormatChangeUsernameTemplateText")(e) : i === "saga_init" ? s._(
			/*BTDS*/
			""
		) : i === "biz_account_type_changed_to_hosted" ? s._(
			/*BTDS*/
			""
		) : i === "biz_me_account_type_is_hosted" ? s._(
			/*BTDS*/
			""
		) : i === "biz_account_type_is_hosted" ? s._(
			/*BTDS*/
			""
		) : i === "biz_me_account_type_is_hosted_transition" ? s._(
			/*BTDS*/
			""
		) : i === "marketing_messages_from_business_stopped" ? s._(
			/*BTDS*/
			""
		) : i === "marketing_messages_from_business_resumed" ? s._(
			/*BTDS*/
			""
		) : i === "marketing_messages_post_send_opt_out" ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		) : i === "limit_sharing_system_message" ? o("WAWebLimitSharingUIUtils").getLimitSharingMessageSystemNotificationText(e) : i === "is_capi_hosted_group" ? z(e) : i === "biz_automatically_labeled_chat_system_message" ? j(e) : i === "biz_per_customer_3pd_data_share_opt_in" ? s._(
			/*BTDS*/
			""
		) : i === "biz_per_customer_3pd_data_share_opt_out" ? s._(
			/*BTDS*/
			""
		) : i === "ctwa_consumer_data_sharing_disclosure_system_message" ? s._(
			/*BTDS*/
			""
		) : i === "group_transition_to_bot_group" ? s._(
			/*BTDS*/
			""
		) : i === "biz_broadcast_status" ? r("WAWebBizBroadcastFormatStatusText")(a) : s._(
			/*BTDS*/
			"",
			[s._param("app name", o("WAWebFbtAppName").fbtWAWebAppShortName())]
		);
	}
	function c(e, t) {
		var n = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
			type: "change_number",
			templateParams: t
		}), "interpretMsgTemplateParams: change_number"), a = n[0], i = n.length === 4 ? n[2] : null, l = o("WAWebFrontendContactGetters").getFormattedName(o("WAWebContactCollection").ContactCollection.gadd(a)), u = r("WAWebWid").equals(o("WAWebFrontendMsgGetters").getChat(e).id, a), c = r("WAWebWid").equals(o("WAWebFrontendMsgGetters").getChat(e).id, i);
		return u || c ? s._(
			/*BTDS*/
			"",
			[s._param("name", l)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("name", l)]
		);
	}
	function d(e, t) {
		var n = o("WAWebFormatParticipantNames").getFormattedName(e.from);
		return t.length > 0 && t[0] === "true" ? s._(
			/*BTDS*/
			"",
			[s._param("receiver_name", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("receiver_name", n)]
		);
	}
	function m(e) {
		var t = o("WAWebFormatParticipantNames").getFormattedName(e.from, !1);
		return s._(
			/*BTDS*/
			"",
			[s._param("sender_name", t)]
		);
	}
	function p(e, t) {
		var n = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
			type: "payment_transaction_request_cancelled",
			templateParams: t
		}), "interpretMsgTemplateParams: payment_transaction_request_cancelled"), a = n[0], i = n[1], l = n[2], u = r("WAWebWidToFormattedNameOrNumber")(a), c = parseInt(l, 10), d = o("WAWebCurrencyUtils").formatAmount1000(i, c);
		return e.id.fromMe ? s._(
			/*BTDS*/
			"",
			[
				s._plural(c / 1e3),
				s._param("contactName", u),
				s._param("currencyAndAmount", d)
			]
		) : s._(
			/*BTDS*/
			"",
			[
				s._plural(c / 1e3),
				s._param("contactName", u),
				s._param("currencyAndAmount", d)
			]
		);
	}
	function _(e) {
		var t = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
			type: "payment_transaction_status_receiver_pending_setup",
			templateParams: e
		}), "interpretMsgTemplateParams: payment_transaction_status_receiver_pending_setup"), n = t[0], a = t[1], i = t[2], l = r("WAWebWidToFormattedNameOrNumber")(n), u = parseInt(i, 10), c = o("WAWebCurrencyUtils").formatAmount1000(a, u);
		return s._(
			/*BTDS*/
			"",
			[
				s._plural(u / 1e3),
				s._param("senderName", l),
				s._param("currencyAndAmount", c)
			]
		);
	}
	function f(e, t) {
		var n = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
			type: "payment_action_request_declined",
			templateParams: t
		}), "interpretMsgTemplateParams: payment_action_request_declined"), a = n[0], i = n[1], l = n[2], u = r("WAWebWidToFormattedNameOrNumber")(a), c = parseInt(l, 10), d = o("WAWebCurrencyUtils").formatAmount1000(i, c);
		return e.id.fromMe ? s._(
			/*BTDS*/
			"",
			[
				s._plural(c / 1e3),
				s._param("contactName", u),
				s._param("currencyAndAmount", d)
			]
		) : s._(
			/*BTDS*/
			"",
			[
				s._plural(c / 1e3),
				s._param("contactName", u),
				s._param("currencyAndAmount", d)
			]
		);
	}
	function g(e) {
		var t = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
			type: "payment_action_request_expired",
			templateParams: e
		}), "interpretMsgTemplateParams: payment_action_request_expired"), n = t[0], a = t[1], i = t[2], l = t[3], u = r("WAWebWidToFormattedNameOrNumber")(n), c = r("WAWebWidToFormattedNameOrNumber")(a), d = parseInt(l, 10), m = o("WAWebCurrencyUtils").formatAmount1000(i, d);
		return o("WAWebUserPrefsMeUser").isMeAccount(n) ? s._(
			/*BTDS*/
			"",
			[
				s._plural(d / 1e3),
				s._param("receiverName", c),
				s._param("currencyAndAmount", m)
			]
		) : s._(
			/*BTDS*/
			"",
			[
				s._plural(d / 1e3),
				s._param("senderName", u),
				s._param("currencyAndAmount", m)
			]
		);
	}
	function h(e) {
		var t = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
			type: "payment_invite_account_set_up",
			templateParams: e
		}), "interpretMsgTemplateParams: payment_invite_account_set_up"), n = t[0];
		return s._(
			/*BTDS*/
			"",
			[s._param("invitee", r("WAWebWidToFormattedNameOrNumber")(n))]
		);
	}
	function y(e) {
		var t = e.id, n = r("WAWebGetBusinessNameFromMsg")(e);
		return r("WAWebDisplayedNameIsBizName")(t.remote, n) ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		);
	}
	function C(e) {
		var t = e.id, n = r("WAWebGetBusinessNameFromMsg")(e);
		return r("WAWebDisplayedNameIsBizName")(t.remote, n) ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		);
	}
	function b(e) {
		var t = e.id.remote;
		return r("WAWebWid").isOfficialBizAccount(t) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		);
	}
	function v(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		);
	}
	function S(e) {
		var t = e.id, n = r("WAWebGetBusinessNameFromMsg")(e);
		return r("WAWebDisplayedNameIsBizName")(t.remote, n) ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		);
	}
	function R(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		);
	}
	function L(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		);
	}
	function E(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		);
	}
	function k(e) {
		var t = e.id, n = r("WAWebGetBusinessNameFromMsg")(e);
		return r("WAWebDisplayedNameIsBizName")(t.remote, n) ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		);
	}
	function I(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		);
	}
	function T(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		);
	}
	function D(e) {
		var t = e.id, n = r("WAWebGetBusinessNameFromMsg")(e);
		return r("WAWebDisplayedNameIsBizName")(t.remote, n) ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		);
	}
	function x(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		);
	}
	function $(e) {
		var t = e.id, n = r("WAWebGetBusinessNameFromMsg")(e), a = o("WAWebABPropsInternalNumber").getIsInternalNumber(o("WAWebFrontendMsgGetters").getChat(e).id.user);
		return r("WAWebDisplayedNameIsBizName")(t.remote, n) ? a ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : a ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		);
	}
	function P(e) {
		var t = e.id, n = r("WAWebGetBusinessNameFromMsg")(e);
		return r("WAWebDisplayedNameIsBizName")(t.remote, n) ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		);
	}
	function N(e) {
		var t = e.id, n = r("WAWebGetBusinessNameFromMsg")(e);
		return r("WAWebDisplayedNameIsBizName")(t.remote, n) ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		);
	}
	function M(e) {
		var t = e.id, n = r("WAWebGetBusinessNameFromMsg")(e);
		return r("WAWebDisplayedNameIsBizName")(t.remote, n) ? s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("businessName", n)]
		);
	}
	function w(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))]
		);
	}
	function A(e) {
		return o("WAWebMsgGetters").getIsCAPISupport(e) ? o("WAWebSupportChatStrings").SupportChatSystemMessage() : s._(
			/*BTDS*/
			""
		);
	}
	function F() {
		return o("WAWebSupportChatStrings").SupportChatSystemMessage();
	}
	function O(e) {
		return e[0] === "true" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function B() {
		return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3 ? s._(
			/*BTDS*/
			""
		) : o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiBrazilEnabled() ? s._(
			/*BTDS*/
			""
		) : o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled() || o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiIndiaEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function W(e, t) {
		var n = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
			type: "chat_assignment",
			templateParams: e
		}), "interpretMsgTemplateParams: chat_assignment"), a = n[0];
		return o("WAWebChatAssignmentUtils").shouldUseChatAssignmentCTA(t) ? s._(
			/*BTDS*/
			"",
			[s._param("agent_name", a)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("agent_name", a)]
		);
	}
	function q(e) {
		return o("WAWebChatAssignmentUtils").shouldUseChatAssignmentCTA(e) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function U() {
		return o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function V(e) {
		return o("WAWebMsgGetters").getIsIAS(e) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function H(e, t) {
		return o("WAWebBotUtils").isBotChannelFBID(e.id.remote) ? s._(
			/*BTDS*/
			""
		) : t === o("WAWebBotTypes").BotPosingAsProfessionalType.YES && o("WAWebBotGating").isUgcNotExpertEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function G() {
		return o("WAWebBotBaseGating").isBotEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function z(e) {
		var t, n = o("WAWebFrontendMsgGetters").getChat(e), r = n.groupMetadata, a = (r == null ? void 0 : r.owner) && ((t = r.participants.get(r.owner)) == null ? void 0 : t.contact);
		return a != null ? o("WAWebHostedGroupUtils").getSecureServicesBannerText(a) : "";
	}
	function j(e) {
		var t = Number(e.templateParams[0]), n = "";
		return t === o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_NEW_ORDER ? n = s._(
			/*BTDS*/
			""
		) : t === o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_LEAD && (n = s._(
			/*BTDS*/
			""
		)), o("WAWebListsGatingUtils").isListsEnabled() ? s._(
			/*BTDS*/
			"",
			[s._param("labelName", n)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("labelName", n)]
		);
	}
	function K(e) {
		var t = e.subtype;
		return t === "change_lid" ? o("WAWebFormatChangeLidTemplateText").formatChangeLidCtaTemplateText(e) : null;
	}
	l.default = e;
}), 226);
