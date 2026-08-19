__d("WAWebDrawerResolver.react", [
	"WAWebAdaptiveLayoutContext.react",
	"WAWebArchivedFlowLoadable",
	"WAWebChatSearchDrawerLoadable",
	"WAWebCommunityFlowLoadable",
	"WAWebContactMsgInfoFlowLoadable",
	"WAWebDeactivateCommunityDrawerLoadable",
	"WAWebDrawerManager",
	"WAWebEventInfoFlowLoadable",
	"WAWebExistingGroupPermissionsDrawerLoadable",
	"WAWebGroupMembershipApprovalRequestsFlowLoadable",
	"WAWebGroupMsgInfoFlowLoadable",
	"WAWebInfoFlowLoadable",
	"WAWebMeTabFlowLoadable",
	"WAWebMidDrawerEmptyStateLoadable",
	"WAWebNewChatFlowLoadable",
	"WAWebNewGroupFlowLoadable",
	"WAWebNewsletterTabFlowLoadable",
	"WAWebNotificationsFlowLoadable",
	"WAWebSettingsFlowLoadable",
	"WAWebStatusDrawerFlowLoadable",
	"WAWebVerificationDrawerLoadable",
	"WAWebVoipCallsTabDrawerFlowLoadable",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useContext;
	function c(e) {
		var t = o("react-compiler-runtime").c(51), n = e.descriptor, a = u(r("WAWebAdaptiveLayoutContext.react")), i = a.isNarrow;
		switch (n.descriptorType) {
			case "archived": {
				var l;
				return t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), t[0] = l) : l = t[0], l;
			}
			case "calls_tab": {
				var c;
				return t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(o("WAWebVoipCallsTabDrawerFlowLoadable").VoipCallsTabDrawerFlowLoadable, { onBack: o("WAWebDrawerManager").closeDrawerLeft }), t[1] = c) : c = t[1], c;
			}
			case "chat_search": {
				var m;
				return t[2] !== n.chat || t[3] !== n.threadId ? (m = s.jsx(o("WAWebChatSearchDrawerLoadable").ChatSearchDrawerLoadable, {
					chat: n.chat,
					threadId: n.threadId
				}), t[2] = n.chat, t[3] = n.threadId, t[4] = m) : m = t[4], m;
			}
			case "community_flow": {
				var p;
				return t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = s.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {}), t[5] = p) : p = t[5], p;
			}
			case "contact_msg_info": {
				var _;
				return t[6] !== n.msg ? (_ = s.jsx(o("WAWebContactMsgInfoFlowLoadable").ContactMsgInfoFlowLoadable, { msg: n.msg }), t[6] = n.msg, t[7] = _) : _ = t[7], _;
			}
			case "deactivate_community": {
				var f;
				return t[8] !== n.chat ? (f = s.jsx(o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable, {
					chat: n.chat,
					onBack: o("WAWebDrawerManager").closeDrawerRight
				}), t[8] = n.chat, t[9] = f) : f = t[9], f;
			}
			case "event_info": {
				var g;
				return t[10] !== n.chat || t[11] !== n.msg ? (g = s.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
					chat: n.chat,
					msg: n.msg,
					onEnd: o("WAWebDrawerManager").closeDrawerRight
				}), t[10] = n.chat, t[11] = n.msg, t[12] = g) : g = t[12], g;
			}
			case "existing_group_permissions": {
				var h;
				return t[13] !== n.chat || t[14] !== n.groupMetadata ? (h = s.jsx(o("WAWebExistingGroupPermissionsDrawerLoadable").ExistingGroupPermissionsDrawerLoadable, {
					chat: n.chat,
					groupMetadata: n.groupMetadata,
					onClose: o("WAWebDrawerManager").closeDrawerRight
				}), t[13] = n.chat, t[14] = n.groupMetadata, t[15] = h) : h = t[15], h;
			}
			case "group_membership_approval_requests": {
				var y;
				return t[16] !== n.chat ? (y = s.jsx(o("WAWebGroupMembershipApprovalRequestsFlowLoadable").GroupMembershipApprovalRequestsFlowLoadable, {
					chat: n.chat,
					onBack: o("WAWebDrawerManager").closeDrawerRight
				}), t[16] = n.chat, t[17] = y) : y = t[17], y;
			}
			case "group_msg_info": {
				var C;
				return t[18] !== n.msg ? (C = s.jsx(o("WAWebGroupMsgInfoFlowLoadable").GroupMsgInfoFlowLoadable, { msg: n.msg }), t[18] = n.msg, t[19] = C) : C = t[19], C;
			}
			case "info_flow": {
				var b = i || n.showBackButton === !0 ? o("WAWebDrawerManager").closeDrawerRight : void 0, v;
				return t[20] !== n.chat || t[21] !== n.contactProp || t[22] !== n.displayName || t[23] !== n.focusGroupDescriptionOnMount || t[24] !== n.focusGroupSubjectOnMount || t[25] !== n.focusNewsletterDescriptionOnMount || t[26] !== n.initialStep || t[27] !== n.initialSubStep || t[28] !== n.newsletterLinkShareScreenEntryPoint || t[29] !== n.profileEntryPoint || t[30] !== n.scrollToParticipantList || t[31] !== n.showFullGroupDescription || t[32] !== n.sourceGroupChatOrNewsletter || t[33] !== n.threadId || t[34] !== b ? (v = s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					chat: n.chat,
					initialStep: n.initialStep,
					initialSubStep: n.initialSubStep,
					showFullGroupDescription: n.showFullGroupDescription,
					scrollToParticipantList: n.scrollToParticipantList,
					profileEntryPoint: n.profileEntryPoint,
					sourceGroupChatOrNewsletter: n.sourceGroupChatOrNewsletter,
					focusNewsletterDescriptionOnMount: n.focusNewsletterDescriptionOnMount,
					focusGroupSubjectOnMount: n.focusGroupSubjectOnMount,
					focusGroupDescriptionOnMount: n.focusGroupDescriptionOnMount,
					newsletterLinkShareScreenEntryPoint: n.newsletterLinkShareScreenEntryPoint,
					threadId: n.threadId,
					contactProp: n.contactProp,
					displayName: n.displayName,
					onBack: b,
					onEnd: o("WAWebDrawerManager").closeDrawerRight
				}), t[20] = n.chat, t[21] = n.contactProp, t[22] = n.displayName, t[23] = n.focusGroupDescriptionOnMount, t[24] = n.focusGroupSubjectOnMount, t[25] = n.focusNewsletterDescriptionOnMount, t[26] = n.initialStep, t[27] = n.initialSubStep, t[28] = n.newsletterLinkShareScreenEntryPoint, t[29] = n.profileEntryPoint, t[30] = n.scrollToParticipantList, t[31] = n.showFullGroupDescription, t[32] = n.sourceGroupChatOrNewsletter, t[33] = n.threadId, t[34] = b, t[35] = v) : v = t[35], v;
			}
			case "mid_drawer_empty_state": {
				var S;
				return t[36] !== n.navBarItem ? (S = s.jsx(o("WAWebMidDrawerEmptyStateLoadable").MidDrawerEmptyStateLoadable, { type: n.navBarItem }), t[36] = n.navBarItem, t[37] = S) : S = t[37], S;
			}
			case "new_chat": {
				var R;
				return t[38] === Symbol.for("react.memo_cache_sentinel") ? (R = s.jsx(o("WAWebNewChatFlowLoadable").NewChatFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), t[38] = R) : R = t[38], R;
			}
			case "new_group": {
				var L;
				return t[39] !== n.isSubFlow ? (L = s.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
					isSubFlow: n.isSubFlow,
					onEnd: o("WAWebDrawerManager").closeDrawerLeft,
					onCreateGroup: d
				}), t[39] = n.isSubFlow, t[40] = L) : L = t[40], L;
			}
			case "newsletter_tab": {
				var E;
				return t[41] === Symbol.for("react.memo_cache_sentinel") ? (E = s.jsx(o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable, {}), t[41] = E) : E = t[41], E;
			}
			case "notifications": {
				var k;
				return t[42] === Symbol.for("react.memo_cache_sentinel") ? (k = s.jsx(o("WAWebNotificationsFlowLoadable").NotificationsFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), t[42] = k) : k = t[42], k;
			}
			case "profile": {
				var I;
				return t[43] === Symbol.for("react.memo_cache_sentinel") ? (I = s.jsx(o("WAWebMeTabFlowLoadable").MeTabFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), t[43] = I) : I = t[43], I;
			}
			case "settings": {
				var T;
				return t[44] !== n.initialStep ? (T = s.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
					onEnd: o("WAWebDrawerManager").closeDrawerLeft,
					initialStep: n.initialStep
				}), t[44] = n.initialStep, t[45] = T) : T = t[45], T;
			}
			case "status": {
				var D;
				return t[46] === Symbol.for("react.memo_cache_sentinel") ? (D = s.jsx(o("WAWebStatusDrawerFlowLoadable").StatusDrawerFlowLoadable, { onBack: o("WAWebDrawerManager").closeDrawerLeft }), t[46] = D) : D = t[46], D;
			}
			case "verification": {
				var x;
				return t[47] !== n.contact || t[48] !== n.isFirstLevel || t[49] !== n.lid ? (x = s.jsx(r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable, {
					lid: n.lid,
					contact: n.contact,
					isFirstLevel: n.isFirstLevel
				}), t[47] = n.contact, t[48] = n.isFirstLevel, t[49] = n.lid, t[50] = x) : x = t[50], x;
			}
			default: return null;
		}
	}
	async function d(e) {
		await e, o("WAWebDrawerManager").closeDrawerLeft();
	}
	l.default = c;
}), 98);
