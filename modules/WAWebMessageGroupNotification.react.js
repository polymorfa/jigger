__d("WAWebMessageGroupNotification.react", [
	"fbt",
	"WALogger",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebChatCommunityUtils",
	"WAWebChatEntryPoint",
	"WAWebChatGroupUtils",
	"WAWebCmd",
	"WAWebCommunitySubgroupInviteLinkRestriction",
	"WAWebConfirmPopup.react",
	"WAWebDrawerManager",
	"WAWebExistingGroupPermissionsDrawer.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFindChatAction",
	"WAWebFormatCTAText",
	"WAWebFormatEphemeralSetting",
	"WAWebFormatParticipantNames",
	"WAWebFrontendChatGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGroupHistoryParticipantStateHydration",
	"WAWebGroupHistoryPostJoinEligibility",
	"WAWebGroupHistoryPostJoinSendFlow",
	"WAWebGroupHistoryPostJoinSubtype",
	"WAWebGroupHistorySenderUserJourneyLogger",
	"WAWebGroupInviteUtils.react",
	"WAWebGroupMemberUpdatesGatingUtils",
	"WAWebGroupMembershipApprovalRequestsFlow.react",
	"WAWebGroupNotificationContextCard.react",
	"WAWebInfoFlowLoadable",
	"WAWebInfoFlowStep",
	"WAWebKeyboardTabUtils",
	"WAWebKicNux.react",
	"WAWebLinkJoinedMembersUtils",
	"WAWebMegaphoneRefreshedIcon.react",
	"WAWebMessageGroupNotificationBodyText",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebRemoveLinkJoinedMembersModal.react",
	"WAWebStateUtils",
	"WAWebSystemMessageGatingUtils",
	"WAWebSystemMessageWithSingleCTA.react",
	"WAWebSystemMessagesUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumBundleSendSource",
	"WAWebWamEnumEphemeralSettingEntryPointType",
	"WAWebWamEnumGroupBulkRemovalAction",
	"WAWebWamEnumTriggerType",
	"WAWebWamEnumTsSurface",
	"WDSFontTokenStyles",
	"WDSIconWdsIcDisappearingMessages.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useVisibility",
	"useWAWebChatValues",
	"useWAWebForceUpdate",
	"useWAWebIsKeyboardUser",
	"useWAWebListener",
	"useWAWebMsgValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useImperativeHandle, h = p.useRef, y = function(t) {
		t.stopPropagation(), t.preventDefault();
	}, C = { iconDisappearingSvg: {
		width: "x1kky2od",
		height: "xlup9mm",
		$$css: !0
	} };
	function b(e) {
		var t = o("react-compiler-runtime").c(3), n = e.clickable, a = e.subtype, i = e.type, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = m.jsx(o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon, {
			directional: !0,
			height: 16,
			width: 16
		}), t[0] = l) : l = t[0];
		var s = l;
		if (i === "gp2") {
			if (a === "announce") {
				var u;
				return t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsx("div", {
					className: "x1rg5ohu xhslqc4 x7g7pl8 xg49k01",
					children: s
				}), t[1] = u) : u = t[1], u;
			} else if (a === "ephemeral" && n) {
				var c;
				return t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsx("div", {
					className: "x1rg5ohu xhslqc4 x7g7pl8 xg49k01",
					children: m.jsx(r("WDSIconWdsIcDisappearingMessages.react"), { iconXstyle: C.iconDisappearingSvg })
				}), t[2] = c) : c = t[2], c;
			}
		}
		return null;
	}
	function v(t) {
		"use no forget";
		var n, a, i, l = t.ref, d = babelHelpers.objectWithoutPropertiesLoose(t, u), p = d.clickable, C = d.isLastMsg, v = C === void 0 ? !1 : C, S = d.msg, R = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), L = r("useWAWebUIM")(), E = h(null), k = r("useWAWebIsKeyboardUser")(), I = k.isKeyboardUser, T = o("useWAWebMsgValues").useMsgValues(d.msg.id, [
			o("WAWebMsgGetters").getAuthor,
			o("WAWebMsgGetters").getBody,
			o("WAWebMsgGetters").getRecipients,
			o("WAWebMsgGetters").getSubtype,
			o("WAWebMsgGetters").getTemplateParams,
			o("WAWebMsgGetters").getType
		]), D = T[0], x = T[1], $ = T[2], P = T[3], N = T[4], M = T[5], w = o("WAWebFrontendMsgGetters").getChat(S.unsafe()), A = o("useWAWebChatValues").useChatValues(w.id, [o("WAWebFrontendChatGetters").getShareableHistoryInfo, o("WAWebFrontendChatGetters").getLatestJoinTimeByParticipant]), F = A[0], O = A[1], B = function(t) {
			return O.get(t.toString()) === S.t;
		}, W = function() {
			var e = w.groupMetadata;
			if (e == null || !o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(P)) return null;
			var t = o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(e);
			if (!o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryGroupEligible(t)) return null;
			var n = [];
			for (var r of $) if (!(r == null || o("WAWebUserPrefsMeUser").isMeAccount(r) || !B(r))) {
				var a = e.participants.get(r);
				a != null && n.push(a);
			}
			var i = n.filter(function(t) {
				var n;
				return !o("WAWebGroupHistoryPostJoinEligibility").hasNoShareableHistoryBeforeJoin(F, (n = t.joinTime) != null ? n : S.t, e.id);
			}), l = i.some(function(e) {
				return o("WAWebGroupHistoryPostJoinEligibility").isEligibleForPostJoinHistory(e, t, S.t);
			});
			return l ? { recipientCount: i.length } : null;
		}, q = h(!1), U = r("useVisibility")({ onVisible: function() {
			if (!q.current) {
				var e = W();
				e != null && (q.current = !0, o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendMessageHistoryCtaSystemMessageDisplayed({
					groupHistorySystemMessageType: o("WAWebGroupHistorySenderUserJourneyLogger").getGroupHistorySystemMessageType(P),
					recipientCount: e.recipientCount,
					uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
				}));
			}
		} }), V = U[0], H = _(function(e) {
			E.current = e, V(e);
		}, [V]), G = function() {
			var e;
			(e = E.current) == null || e.click();
		}, z = function() {
			return function(e) {
				y(e), o("WAWebCmd").Cmd.chatInfoDrawer(w);
			};
		}, j = function(t) {
			return function(e) {
				y(e), o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? babelHelpers.extends({
					descriptorType: "info_flow",
					chat: w
				}, t) : m.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, babelHelpers.extends({
					chat: w,
					onEnd: o("WAWebDrawerManager").closeDrawerRight
				}, t)), {
					transition: "slide-left",
					uim: L,
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				});
			};
		}, K = function() {
			return j({ initialStep: o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink });
		}, Q = function() {
			return function(e) {
				y(e), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			};
		}, X = function(t) {
			return function(e) {
				var n;
				y(e);
				var r = (n = w.groupMetadata) == null ? void 0 : n.parentGroup;
				r && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(w) ? o("WAWebCmd").Cmd.openCommunityTabbedInfo(r, void 0, !0, t) : o("WAWebCmd").Cmd.chatInfoDrawer(w, {
					showFullGroupDescription: !0,
					scrollToParticipantList: t
				});
			};
		}, Y = function() {
			return j({ initialSubStep: o("WAWebInfoFlowStep").InfoFlowStep.MemberUpdates });
		}, J = function() {
			return function(e) {
				y(e), o("WAWebCmd").Cmd.ephemeralDrawer(w, !1, o("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.SYSTEM_MESSAGE);
			};
		}, Z = function() {
			return function(e) {
				y(e), o("WAWebCmd").Cmd.chatInfoDrawer(w, { scrollToParticipantList: !0 });
			};
		}, ee = function() {
			var e, t = w.groupMetadata;
			if (t == null) return null;
			if ($.length > 1) return te(t);
			if ($.length !== 1 || $[0] == null || o("WAWebUserPrefsMeUser").isMeAccount($[0]) || !B($[0])) return null;
			var n = t.participants.get($[0]);
			if (n == null) return null;
			var r = o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(t);
			return !o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryGroupEligible(r) || o("WAWebGroupHistoryPostJoinEligibility").hasNoShareableHistoryBeforeJoin(F, (e = n.joinTime) != null ? e : S.t, t.id) ? null : o("WAWebGroupHistoryPostJoinEligibility").isEligibleForPostJoinHistory(n, r, S.t) ? function(e) {
				y(e), o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendMessageHistorySystemMessageClicked({
					groupHistorySystemMessageType: o("WAWebGroupHistorySenderUserJourneyLogger").getGroupHistorySystemMessageType(P),
					recipientCount: 1,
					uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
				}), o("WAWebGroupHistoryPostJoinSendFlow").startPostJoinSendFlow(w.id, [n], S.t, o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE.SYSTEM_MESSAGE);
			} : function(e) {
				y(e), o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.viewOptionsSystemMessageClicked({
					groupHistorySystemMessageType: o("WAWebGroupHistorySenderUserJourneyLogger").getGroupHistorySystemMessageType(P),
					recipientCount: 1,
					uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
				}), o("WAWebCmd").Cmd.chatInfoDrawer(w, { scrollToParticipantList: !0 });
			};
		}, te = function(t) {
			var e = o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(t);
			if (!o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryGroupEligible(e)) return null;
			var n = [];
			for (var r of $) if (!(r == null || o("WAWebUserPrefsMeUser").isMeAccount(r) || !B(r))) {
				var a = t.participants.get(r);
				a != null && n.push(a);
			}
			var i = n.filter(function(e) {
				var n;
				return !o("WAWebGroupHistoryPostJoinEligibility").hasNoShareableHistoryBeforeJoin(F, (n = e.joinTime) != null ? n : S.t, t.id);
			});
			if (i.length === 0) return null;
			var l = i.some(function(t) {
				return o("WAWebGroupHistoryPostJoinEligibility").isEligibleForPostJoinHistory(t, e, S.t);
			});
			return l ? function(e) {
				y(e), o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendMessageHistorySystemMessageClicked({
					groupHistorySystemMessageType: o("WAWebGroupHistorySenderUserJourneyLogger").getGroupHistorySystemMessageType(P),
					recipientCount: i.length,
					uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
				}), o("WAWebGroupHistoryPostJoinSendFlow").startPostJoinSendFlow(w.id, i, S.t, o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE.SYSTEM_MESSAGE);
			} : function(e) {
				y(e), o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.viewOptionsSystemMessageClicked({
					groupHistorySystemMessageType: o("WAWebGroupHistorySenderUserJourneyLogger").getGroupHistorySystemMessageType(P),
					recipientCount: n.length,
					uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
				}), o("WAWebCmd").Cmd.chatInfoDrawer(w, { scrollToParticipantList: !0 });
			};
		}, ne = function() {
			return function(e) {
				var t, n;
				y(e);
				var r = !!((t = w.groupMetadata) != null && t.participants.iAmAdmin()), a = (n = w.groupMetadata) == null ? void 0 : n.memberLinkMode, i = o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(w);
				o("WAWebGroupInviteUtils.react").openGrowthLockedModal(r, i, a);
			};
		}, re = function() {
			return function(e) {
				var t, n;
				y(e);
				var r = !!((t = w.groupMetadata) != null && t.participants.iAmAdmin()), a = o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(w), i = (n = w.groupMetadata) == null ? void 0 : n.memberLinkMode;
				r && !a ? o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "info_flow",
					chat: w,
					initialStep: o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink
				} : m.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					chat: w,
					onEnd: o("WAWebDrawerManager").closeDrawerRight,
					initialStep: o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink
				}), {
					transition: "slide-left",
					uim: L,
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				}) : o("WAWebGroupInviteUtils.react").openGrowthLockedModal(r, a, i);
			};
		}, oe = function(t) {
			return function(e) {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "existing_group_permissions",
					chat: w,
					groupMetadata: t
				} : m.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
					chat: w,
					groupMetadata: t,
					onClose: o("WAWebDrawerManager").closeDrawerRight
				}), {
					transition: "slide-left",
					uim: L,
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				});
			};
		}, ae = function() {
			return function(e) {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "group_membership_approval_requests",
					chat: w
				} : m.jsx(r("WAWebGroupMembershipApprovalRequestsFlow.react"), {
					chat: w,
					onBack: o("WAWebDrawerManager").closeDrawerRight
				}), {
					transition: "slide-left",
					uim: L,
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				});
			};
		}, ie = function(t) {
			return function(e) {
				o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: {
						surface: "unknown",
						viewName: "group-notification"
					},
					onOK: o("WAWebModalManager").closeModalManager,
					children: t
				}), { transition: "modal-flow" });
			};
		}, le = function(t) {
			return function(e) {
				o("WAWebExternalLink.react").openExternalLink(t);
			};
		}, se = function(t) {
			return function(e) {
				y(e), o("WAWebCmd").Cmd.openCommunitySettingsDrawer(t);
			};
		}, ue = function(t) {
			return function(e) {
				y(e), o("WAWebCmd").Cmd.openCommunityPendingGroupsDrawer(t);
			};
		}, ce = function(t) {
			return function(e) {
				y(e), o("WAWebFindChatAction").findOrCreateLatestChat(t, "messageAuthor").then(function(e) {
					var t = e.chat;
					o("WAWebCmd").Cmd.openChatBottom({
						chat: t,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SystemMessage
					});
				});
			};
		}, de = function(t) {
			var e, n = t._typeLocal, r = t.author, a = t.subtypeLocal, i = t.templateParamsLocal;
			if (p) {
				if (o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(a)) {
					var l = ee();
					if (l != null) return l;
				}
				switch (a) {
					case "add": return o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() ? Z() : void 0;
					case "picture":
					case "subject":
						if (o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(w)) {
							var u;
							return (u = w.groupMetadata) != null && u.parentGroup ? o("WAWebFormatParticipantNames").openCommunity(w.groupMetadata.parentGroup) : void 0;
						}
						return z();
					case "revoke_invite": return o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(w.groupMetadata) ? Q() : K();
					case "description": return X();
					case "parent_group_description": return X();
					case "ephemeral": {
						var c, d = (c = w.groupMetadata) == null ? void 0 : c.canSetEphemeralSetting();
						if (d === !0) return J();
						break;
					}
					case "initial_pHash_mismatch":
					case "default_sub_group_promote":
					case "default_sub_group_demote": {
						var m, _ = ((m = w.groupMetadata) == null ? void 0 : m.parentGroup) != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(w);
						return o("WAWebGroupMemberUpdatesGatingUtils").groupMemberUpdatesHideInThreadEnabled() && !_ ? Y() : X(!0);
					}
					case "growth_unlocked": return o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(w.groupMetadata) ? Q() : re();
					case "growth_locked": return ne();
					case "ephemeral_keep_in_chat": return function() {
						o("WAWebKicNux.react").openKicNux(w, o("WAWebWamEnumTriggerType").TRIGGER_TYPE.SYSTEM_MESSAGE);
					};
					case "membership_approval_mode": {
						var f = i[1] === "admin";
						if (f) {
							var g = w.groupMetadata;
							return g && g.participants.iAmAdmin() ? oe(g) : ie(s._(
								/*BTDS*/
								""
							));
						}
						break;
					}
					case "membership_approval_request":
					case "created_membership_requests": return (e = w.groupMetadata) != null && e.participants.iAmAdmin() ? ae() : ie(s._(
						/*BTDS*/
						""
					));
					case "allow_admin_reports": {
						var h = i[1] === "admin", y = i[1] === "regular";
						if (h) {
							var C = w.groupMetadata;
							return C && C.participants.iAmAdmin() ? oe(C) : ie(s._(
								/*BTDS*/
								""
							));
						} else if (y) return le(o("WAWebFaqUrl").getReportToAdminFaqUrl());
						break;
					}
					case "allow_non_admin_sub_group_creation": {
						var b, v, R = !!((b = w.groupMetadata) != null && b.participants.iAmAdmin()), L = (v = w.groupMetadata) == null ? void 0 : v.parentGroup;
						if (!R || !L) break;
						return se(L);
					}
					case "sibling_group_link": {
						var E, k = (E = w.groupMetadata) == null ? void 0 : E.parentGroup;
						if (!k) break;
						return o("WAWebFormatParticipantNames").openCommunity(k);
					}
					case "created_subgroup_suggestion": {
						var T, D, x = !!((T = w.groupMetadata) != null && T.participants.iAmAdmin()), $ = (D = w.groupMetadata) == null ? void 0 : D.parentGroup;
						if (!x || !$) break;
						return ue($);
					}
					case "community_owner_update": {
						var P, N = o("WAWebChatCommunityUtils").getNewCommunityOwnerFromTemplateParams(i);
						return o("WAWebSystemMessagesUtils").isMe(N) ? le(o("WAWebFaqUrl").getCommunityBecomingOwnerUrl()) : (P = w.groupMetadata) != null && P.parentGroup ? o("WAWebFormatParticipantNames").openCommunityInfo(w.groupMetadata.parentGroup) : void 0;
					}
					case "hidden_group": return le(o("WAWebFaqUrl").getCommunityGroupsVisibilityFaqUrl());
					case "member_add_mode": {
						var M = w.groupMetadata;
						return M && M.participants.iAmAdmin() ? oe(M) : void 0;
					}
					case "member_link_mode": return;
					case "join_flood_notification": {
						var A = w.groupMetadata;
						return A && A.participants.iAmAdmin() ? function(e) {
							o("WAWebLinkJoinedMembersUtils").logGroupBulkRemovalWamEvent(o("WAWebWamEnumGroupBulkRemovalAction").GROUP_BULK_REMOVAL_ACTION.TAP_SYSTEM_MESSAGE, w.id), o("WAWebRemoveLinkJoinedMembersModal.react").openRemoveLinkJoinedMembersModal(w, A, S.t);
						} : void 0;
					}
					case "announce": if (I) return ce(r);
				}
			}
		};
		if (g(l, function() {
			return { handleKeyActivation: G };
		}), o("useWAWebListener").useListener(w == null ? void 0 : w.groupMetadata, "change:support", R), o("useWAWebListener").useListener(w == null || (n = w.groupMetadata) == null ? void 0 : n.participants, "change:groupHistorySentState", R), f(function() {
			w != null && w.groupMetadata != null && o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(P) && o("WAWebGroupHistoryParticipantStateHydration").initializeGroupHistoryStateForChat(w.id);
		}, void 0), M !== "gp2") return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["wa:groupNotification:unknown message type: ", ""])), M).sendLogs("unknown-group-notification"), null;
		var me = o("WAWebMessageGroupNotificationBodyText").getMsgTypeAndGroupBodyText({
			clickable: p,
			msg: S,
			isLastMsg: v
		}), pe = me.isBodyTextClickable, _e = me.l10nBodyTextInstance;
		if (_e == null) return null;
		var fe = r("WAWebFormatCTAText")({
			type: M,
			subtype: P,
			id: S.id,
			iAmAdmin: (a = w.groupMetadata) == null ? void 0 : a.participants.iAmAdmin(),
			recipients: $,
			chat: w,
			msgT: S.t,
			shareableHistoryInfo: F,
			latestJoinTimeByRecipient: O
		}), ge = o("WAWebStateUtils").unproxy(S.unsafe()), he = ge.subtype === "ephemeral" ? o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateParts(ge) : null, ye = m.jsx(b, {
			clickable: p,
			type: M,
			subtype: P
		}), Ce = de({
			_typeLocal: M,
			author: S.author,
			subtypeLocal: P,
			templateParamsLocal: N
		}), be;
		if ((P === "create" && o("WAWebUserPrefsMeUser").isMeAccount((i = w.groupMetadata) == null ? void 0 : i.owner) || (P === "add" || P === "invite") && o("WAWebUserPrefsMeUser").isMeAccount($[0])) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(w) && !v) be = m.jsx(r("WAWebGroupNotificationContextCard.react"), {
			chat: w,
			msg: S
		});
		else if (o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() && fe != null && p === !0) be = m.jsx(o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA, {
			role: "link",
			bodyText: _e,
			isBodyTextClickable: pe,
			ctaText: fe,
			icon: ye,
			onClick: Ce,
			onclickRef: H,
			className: "x6ikm8r x10wlt62 xlyipyv",
			testid: P ? "subtype-" + P : ""
		});
		else if (he != null) {
			var ve = p === !0 ? he.ctaText : null;
			be = m.jsxs("div", {
				ref: Ce ? E : void 0,
				role: Ce ? "button" : void 0,
				className: "x6ikm8r x10wlt62 xlyipyv",
				onClick: Ce,
				"data-testid": P ? "subtype-" + P : void 0,
				children: [
					ye,
					he.text,
					ve != null ? m.jsxs(m.Fragment, { children: [" ", m.jsx("span", babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized), { children: ve }))] }) : null
				]
			});
		} else be = m.jsxs("div", {
			ref: Ce ? E : void 0,
			role: Ce ? "button" : void 0,
			className: "x6ikm8r x10wlt62 xlyipyv",
			onClick: Ce,
			"data-testid": P ? "subtype-" + P : void 0,
			children: [ye, _e]
		});
		return be;
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
