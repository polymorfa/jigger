__d("MWBlockedComposerLogging", [
	"$InternalEnum",
	"Int64Hooks",
	"MWGetChatTabOpenQPLEventTrace",
	"MWGetInboxNavigateQPLEventTrace",
	"MWLSThreadDisplayContext",
	"MessengerWebUXLogger",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = n("$InternalEnum")({
		USER_BLOCKED_CANNOT_MESSAGE: "user_blocked_cannot_message",
		USER_BLOCKED_CANNOT_REPLY: "user_blocked_cannot_reply",
		USER_RESTRICTED: "user_restricted",
		GAMING_GAME_BOT: "gaming_game_bot",
		GAMING_GET_STARTED_CTA: "gaming_get_started_cta",
		FEATURE_LIMITED_TO_READONLY: "feature_limited_to_readonly",
		PAGE_THREAD_DISABLED: "page_thread_disabled",
		USER_BLOCKED: "user_blocked",
		USER_UNREACHABLE: "user_unreachable",
		ARMADILLO_THREAD_ALREADY_CUTOVER: "thread_already_cutover",
		ARMADILLO_GROUP_THREAD_CUTOVER: "cutover_group_thread",
		ARMADILLO_DEFAULT_E2EE_ONE_TO_ONE_BLOCK: "default_e2ee_one_to_one_block",
		ARMADILLO_RECEIVER_NON_ADDRESSABLE_ON_WA: "receiver_non_addressable_on_wa",
		ARMADILLO_DUAL_THREAD_CUTOVER: "dual_thread_cutover",
		AI_AGENT_CHANNEL_DISABLED: "ai_agent_channel_disabled",
		AI_BOT_BLOCKED: "ai_bot_blocked",
		NOT_BLOCKED: "not_blocked",
		ON_DEMAND_CUTOVER: "on_demand_cutover",
		USER_UNREACHABLE_MESSAGE_REQUEST: "user_unreachable_message_request"
	});
	function s(e, t) {
		var n, r, o = e.getTrace(), a = [].concat((n = o == null || (r = o.annotations.string_array) == null ? void 0 : r.blockedReasons) != null ? n : [], [t]);
		e.addAnnotationStringArray("blockedReasons", a), e.addMarkerPoint("composer_blocked_start", "AppTiming");
	}
	function u(t, n) {
		var a = o("react-compiler-runtime").c(9), i = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), l = r("MessengerWebUXLogger").useInteractionLogger(), u;
		a[0] !== l || a[1] !== n || a[2] !== t ? (u = function() {
			if (!(t == null || n === e.NOT_BLOCKED)) return r("MWGetChatTabOpenQPLEventTrace")(t, function(e) {
				s(e, n);
			}), r("MWGetInboxNavigateQPLEventTrace")(t, function(e) {
				s(e, n);
			}), l == null || l({
				eventName: "composer_block",
				extraData: { blockedReason: n },
				threadKey: t
			}), (function() {
				r("MWGetChatTabOpenQPLEventTrace")(t, d), r("MWGetInboxNavigateQPLEventTrace")(t, c);
			});
		}, a[0] = l, a[1] = n, a[2] = t, a[3] = u) : u = a[3];
		var m;
		a[4] !== i || a[5] !== l || a[6] !== n || a[7] !== t ? (m = [
			i,
			l,
			n,
			t
		], a[4] = i, a[5] = l, a[6] = n, a[7] = t, a[8] = m) : m = a[8], o("Int64Hooks").useEffectInt64(u, m);
	}
	function c(e) {
		e.addMarkerPoint("composer_blocked_end", "AppTiming");
	}
	function d(e) {
		e.addMarkerPoint("composer_blocked_end", "AppTiming");
	}
	l.ComposerBlockingReason = e, l.useLogMWBlockedComposerReason = u;
}), 98);
