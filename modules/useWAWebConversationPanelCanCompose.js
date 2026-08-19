__d("useWAWebConversationPanelCanCompose", [
	"fbt",
	"WAWebAgentTransitionUtils",
	"WAWebAnnouncementsOnlyMsgBar.react",
	"WAWebBizAgentSmbOffboardingMsgBar.react",
	"WAWebBizAgentTerminationMsgBar.react",
	"WAWebBizAiAgentGating",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizAiBlockMsgBar.react",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBizBroadcastTos",
	"WAWebBizBroadcastTosReviewBannerLoadable",
	"WAWebBizCoexGatingUtils",
	"WAWebBlocklistUtils",
	"WAWebBotBaseGating",
	"WAWebBotUtils",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebCommunityAnnouncementsMsgBar.react",
	"WAWebConfirmPopup.react",
	"WAWebConversationDeprecatedLidChatUtils",
	"WAWebDeleteUnblockMsgBar.react",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebGatedChatOpenedWamEvent",
	"WAWebGroupType",
	"WAWebHatchApprovalManager",
	"WAWebHatchApprovalMsgBar.react",
	"WAWebHatchFrontendGating",
	"WAWebHatchLinkedStatusManager",
	"WAWebIndividualNewChatCappedComposeBarLoadable",
	"WAWebIndividualNewChatMessageCappingLimitUtils",
	"WAWebMiscGatingUtils",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebMsgBarDeactivateCommunityMessageBar",
	"WAWebMsgGetters",
	"WAWebNewsletterSuspendedMessageBar.react",
	"WAWebNonMemberGroupMsgBar.react",
	"WAWebReachoutTimelockRestrictedComposeBarLoadable",
	"WAWebReachoutTimelockUtils",
	"WAWebSuspendedCommunityMsgBar.react",
	"WAWebSuspendedGroupMsgBar.react",
	"WAWebSuspendedOrTerminatedGroupMsgBarV2.react",
	"WAWebTerminatedCommunityMsgBar",
	"WAWebTerminatedGroupMsgBar.react",
	"WAWebTos",
	"WAWebTosCountryGating",
	"WAWebTosGatedModal.react",
	"WAWebTosGating",
	"WAWebUserPrefsMultiDevice",
	"WAWebWamEnumChatGatedReason",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebListener",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(18), n;
		t[0] !== e ? (n = function() {
			return S(e);
		}, t[0] = e, t[1] = n) : n = t[1];
		var a = m(n), i = a[0], l = a[1], s;
		t[2] !== e ? (s = function() {
			return y(e);
		}, t[2] = e, t[3] = s) : s = t[3];
		var u = m(s), c = u[0], p = u[1], f;
		t[4] !== e ? (f = function() {
			var t = S(e);
			l(t), t || p(y(e));
		}, t[4] = e, t[5] = f) : f = t[5];
		var g = r("useWAWebStableCallback")(f), h;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (h = ["change:canSend"], t[6] = h) : h = t[6], o("useWAWebListener").useListener(e, h, g);
		var C;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (C = [
			"change:suspended",
			"change:terminated",
			"change:participants"
		], t[7] = C) : C = t[7], o("useWAWebListener").useListener(e.groupMetadata, C, g);
		var b;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (b = ["change:suspended", "change:terminated"], t[8] = b) : b = t[8], o("useWAWebListener").useListener(e.newsletterMetadata, b, g), o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", g), o("useWAWebListener").useListener(o("WAWebBizBroadcastTos").bizBroadcastTosEmitter, "change", g);
		var v;
		t[9] !== e.id || t[10] !== g ? (v = function() {
			if (!(!o("WAWebBotUtils").isHatchBot(e.id) || !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled())) {
				var t = r("WAWebHatchApprovalManager").subscribe(g), n = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(g);
				return (function() {
					t(), n();
				});
			}
		}, t[9] = e.id, t[10] = g, t[11] = v) : v = t[11];
		var R;
		t[12] !== e || t[13] !== g ? (R = [e, g], t[12] = e, t[13] = g, t[14] = R) : R = t[14], d(v, R), _(e, i);
		var L;
		return t[15] !== c || t[16] !== i ? (L = [i, c], t[15] = c, t[16] = i, t[17] = L) : L = t[17], L;
	}
	function _(e, t) {
		var n = o("react-compiler-runtime").c(5), a;
		n[0] !== e ? (a = function() {
			if (o("WAWebTosCountryGating").shouldBlockByCountry(e.contact)) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: {
						surface: "unknown",
						viewName: "cannot-compose"
					},
					onOK: f,
					okText: s._(
						/*BTDS*/
						""
					),
					children: s._(
						/*BTDS*/
						""
					)
				}), { transition: "modal-flow" });
				var t = o("WAWebFrontendChatGetters").getPreviewMessage(e), n = t != null ? o("WAWebMsgGetters").getIsSentByMe(t) : !1, a = new (o("WAWebGatedChatOpenedWamEvent")).GatedChatOpenedWamEvent({
					chatGatedReason: o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON.COUNTRY,
					selfInitiated: n
				});
				a.commit();
			} else if (o("WAWebTosGating").shouldBlockByTos(e.contact)) {
				o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebTosGatedModal.react"), { contact: e.contact }), { transition: "modal-flow" });
				var i = new (o("WAWebGatedChatOpenedWamEvent")).GatedChatOpenedWamEvent({
					chatGatedReason: o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON.TOS3,
					selfInitiated: !0
				});
				i.commit();
			}
		}, n[0] = e, n[1] = a) : a = n[1];
		var i = r("useWAWebStableCallback")(a), l;
		n[2] !== t || n[3] !== i ? (l = [i, t], n[2] = t, n[3] = i, n[4] = l) : l = n[4], d(i, l);
	}
	function f() {
		return o("WAWebModalManager").ModalManager.close();
	}
	function g(e) {
		var t;
		return !o("WAWebBotUtils").isHatchBot(e.id) || !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled() ? null : (t = r("WAWebHatchApprovalManager").getPendingApprovals()[0]) != null ? t : null;
	}
	function h(e) {
		return !o("WAWebBotUtils").isHatchBot(e.id) || !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled() ? !1 : !r("WAWebHatchLinkedStatusManager").isLinked();
	}
	function y(e) {
		if (o("WAWebChatGetters").getIsBroadcast(e)) return o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1) && !o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() ? u.jsx(o("WAWebBizBroadcastTosReviewBannerLoadable").WAWebBizBroadcastTosReviewBannerLoadable, { broadcastJid: e.id.toString() }) : null;
		var t = e.contact, n = e.groupMetadata, a = e.isAnnounceGrpRestrict, i = e.isReadOnly, l = e.mute;
		if (!o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot()) return "";
		if (o("WAWebChatGetters").getIsNewsletter(e)) {
			var c, d, m;
			return (c = e.newsletterMetadata) != null && c.suspended && (d = (m = e.newsletterMetadata) == null ? void 0 : m.iAmOwner()) != null && d ? u.jsx(r("WAWebNewsletterSuspendedMessageBar.react"), { chat: e }) : null;
		}
		if (o("WAWebMobilePlatforms").isSMB() && o("WAWebChatGetters").getIsUser(e) && !o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() && o("WAWebAgentTransitionUtils").getMeSmbOffboardingState() && o("WAWebBizCoexGatingUtils").agentSmbOffboardingEnabled()) return u.jsx(r("WAWebBizAgentSmbOffboardingMsgBar.react"), { parentCompanyName: o("WAWebAgentTransitionUtils").getMeSmbParentCompanyName() });
		if (o("WAWebTosCountryGating").shouldBlockByCountry(t)) return s._(
			/*BTDS*/
			""
		);
		if (o("WAWebTosGating").shouldBlockByTos(t)) return s._(
			/*BTDS*/
			"",
			[s._param("contact", o("WAWebFrontendContactGetters").getFormattedName(t))]
		);
		if (o("WAWebTosGating").shouldBlockByBotTos(t)) return s._(
			/*BTDS*/
			"",
			[s._param("contact", o("WAWebFrontendContactGetters").getFormattedName(t))]
		);
		if (h(e)) return s._(
			/*BTDS*/
			"",
			[s._param("bot_name", o("WAWebFrontendContactGetters").getFormattedName(t))]
		);
		if (g(e) != null) return u.jsx(r("WAWebHatchApprovalMsgBar.react"), {});
		if (o("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(e)) return u.jsx(r("WAWebTerminatedCommunityMsgBar"), {});
		if (o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(e) && n) return u.jsx(r("WAWebMsgBarDeactivateCommunityMessageBar"), { groupMetadata: n });
		if (o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(e) && n != null && n.participants.iAmMember()) return u.jsx(r("WAWebSuspendedCommunityMsgBar.react"), { chat: e });
		if (o("WAWebChatGroupUtils").isTerminatedGroup(e)) return o("WAWebChatGroupUtils").isSupportGroup(e) ? s._(
			/*BTDS*/
			""
		) : o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled() ? u.jsx(r("WAWebSuspendedOrTerminatedGroupMsgBarV2.react"), { chat: e }) : u.jsx(r("WAWebTerminatedGroupMsgBar.react"), {});
		if (o("WAWebChatGetters").getIsGroup(e) && !(n != null && n.participants.iAmMember())) return (n == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? s._(
			/*BTDS*/
			""
		) : o("WAWebBlocklistUtils").isRBIForGroupsEnabled() ? u.jsx(r("WAWebNonMemberGroupMsgBar.react"), { chat: e }) : s._(
			/*BTDS*/
			""
		);
		if (o("WAWebChatGroupUtils").isSuspendedGroup(e)) return o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled() ? u.jsx(r("WAWebSuspendedOrTerminatedGroupMsgBarV2.react"), { chat: e }) : u.jsx(r("WAWebSuspendedGroupMsgBar.react"), { entityId: e.id.user.toString() });
		if (o("WAWebChatGetters").getIsGroup(e) && n && (n == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !(n != null && n.participants.iAmAdmin())) return u.jsx(r("WAWebCommunityAnnouncementsMsgBar.react"), { groupMetadata: n });
		if (o("WAWebChatGetters").getIsGroup(e) && !i && a === !0 && n) return u.jsx(r("WAWebAnnouncementsOnlyMsgBar.react"), {
			chat: e,
			groupMetadata: n,
			mute: l
		});
		if (o("WAWebChatGetters").getIsGroup(e) && n != null && n.support) return s._(
			/*BTDS*/
			""
		);
		if (e.parentCompanyName != null && e.obaPhoneNumber != null && e.contact.type === "out" && o("WAWebBizCoexGatingUtils").agentOffboardingEnabled()) {
			var p, _;
			return u.jsx(r("WAWebBizAgentTerminationMsgBar.react"), {
				businessJid: e.id.user,
				obaPhoneNumber: (p = e.obaPhoneNumber) != null ? p : "",
				offboardingType: "employee_termination",
				parentCompanyName: (_ = e.parentCompanyName) != null ? _ : ""
			});
		}
		return o("WAWebChatGetters").getIsPSA(e) ? u.jsx(b, { contact: t }) : o("WAWebChatGetters").getIsIAS(e) ? u.jsx(v, { contact: t }) : o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() && o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(e) ? u.jsx(r("WAWebBizAiBlockMsgBar.react"), { chat: e }) : o("WAWebConversationDeprecatedLidChatUtils").isDeprecatedLidChatSendBlocked(e) ? u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}) : u.jsx(C, { chat: e });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("react-compiler-runtime").c(5), n = e.chat, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [o("WAWebFrontendContactGetters").getIsContactBlocked], t[0] = a) : a = t[0];
		var i = o("useWAWebContactValues").useContactValues(n.contact.id, a), l = i[0];
		if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
			chat: n,
			contact: n.contact
		}) && !l) {
			var s;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = u.jsx(o("WAWebReachoutTimelockRestrictedComposeBarLoadable").ReachoutTimelockComposeBarLoadable, {}), t[1] = s) : s = t[1], s;
		} else if (!o("WAWebIndividualNewChatMessageCappingLimitUtils").canSendMsgWhileCapped({
			chat: n,
			contact: n.contact
		}) && !l && o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserCapped()) {
			var c;
			return t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(o("WAWebIndividualNewChatCappedComposeBarLoadable").IndividualNewChatMessageCappedComposeBarLoadable, {}), t[2] = c) : c = t[2], c;
		}
		var d;
		return t[3] !== n ? (d = u.jsx(r("WAWebDeleteUnblockMsgBar.react"), { chat: n }), t[3] = n, t[4] = d) : d = t[4], d;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(3), n = e.contact, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [o("WAWebFrontendContactGetters").getIsContactBlocked], t[0] = r) : r = t[0];
		var a = o("useWAWebContactValues").useContactValues(n.id, r), i = a[0];
		if (i) {
			var l;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
				/*BTDS*/
				""
			), t[1] = l) : l = t[1], l;
		}
		var u;
		return t[2] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
			/*BTDS*/
			""
		), t[2] = u) : u = t[2], u;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(3), n = e.contact, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [o("WAWebFrontendContactGetters").getIsContactBlocked], t[0] = r) : r = t[0];
		var a = o("useWAWebContactValues").useContactValues(n.id, r), i = a[0];
		if (i) {
			var l;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
				/*BTDS*/
				""
			), t[1] = l) : l = t[1], l;
		}
		var u;
		return t[2] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
			/*BTDS*/
			""
		), t[2] = u) : u = t[2], u;
	}
	function S(e) {
		return o("WAWebChatGetters").getIsBroadcast(e) || h(e) || g(e) != null ? !1 : e.canSend && !e.isSuspendedOrTerminated();
	}
	l.default = p;
}), 226);
