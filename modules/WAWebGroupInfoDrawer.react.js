__d("WAWebGroupInfoDrawer.react", [
	"fbt",
	"WAJids",
	"WAWebABProps",
	"WAWebAiGroupOpenSecurityDrawerSection.react",
	"WAWebAiGroupTeeSecurityDrawerSection.react",
	"WAWebBotGroupGatingUtils",
	"WAWebCAPIGroupAboutModal.react",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatInfoChatThemeRow.react",
	"WAWebChatInfoClearChatSection.react",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChatInfoExportChatSection.react",
	"WAWebChatInfoFavoritesSection.react",
	"WAWebChatInfoListsSection.react",
	"WAWebChatInfoMediaSection.react",
	"WAWebChatInfoWallpaperRow.react",
	"WAWebChatThemeGatingUtils",
	"WAWebCommunityGroupJourneyEventImpl",
	"WAWebContactGetters",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebE2EInfoModal.react",
	"WAWebEnvironment",
	"WAWebEphemeralSettingRow.react",
	"WAWebExitedGroupMemberSection.react",
	"WAWebFlatListController",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebGroupABProps",
	"WAWebGroupFromGroupSection.react",
	"WAWebGroupGatingUtils",
	"WAWebGroupInfoCommunitySection.react",
	"WAWebGroupInfoCreateCommunitySection.react",
	"WAWebGroupInfoCreatedBySection.react",
	"WAWebGroupInfoDescriptionSection.react",
	"WAWebGroupInfoEventsSection.react",
	"WAWebGroupInfoIntegritySection.react",
	"WAWebGroupInfoParticipantsSection.react",
	"WAWebGroupInfoPendingParticipantsSection.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebGroupInfoTopCard.react",
	"WAWebGroupMemberUpdatesGatingUtils",
	"WAWebGroupMemberUpdatesSection.react",
	"WAWebGroupParticipantsFlow.react",
	"WAWebGroupSupportSecurityDrawerSection.react",
	"WAWebGroupType",
	"WAWebHostedGroupUtils",
	"WAWebIcChatlistClockIcon.react",
	"WAWebInboxFiltersGatingUtils",
	"WAWebLimitSharingBlockedDueToAIGroup.react",
	"WAWebLimitSharingSettingRow.react",
	"WAWebLimitSharingUIUtils",
	"WAWebListsGatingUtils",
	"WAWebMessageReportRefreshedIcon.react",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebMuteRow.react",
	"WAWebMuteUtils",
	"WAWebNotificationsSettingsRow.react",
	"WAWebOpenAddParticipantModalFlow",
	"WAWebOpenBotGroupOpenAddedModal.react",
	"WAWebPrinaUtils",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WAWebScheduledMessagesGatingUtils",
	"WAWebSecurityDrawerSection.react",
	"WAWebSettingsRefreshedIcon.react",
	"WAWebStarRefreshedIcon.react",
	"WAWebStateUtils",
	"WAWebSubgroupHiddenVisibilityModal.react",
	"WAWebSuspendedCommunityUtils",
	"WAWebSuspendedGroupUtils",
	"WAWebTeeBotGroupTeeAddedModal.react",
	"WAWebText.react",
	"WAWebTextWithLearnMoreLink",
	"WAWebUiActionWamEvent",
	"WAWebWamAddressingModeUtils",
	"WAWebWamEnumActionEntryPoint",
	"WAWebWamEnumChatFilterActionTypes",
	"WAWebWamEnumLandingSurface",
	"WAWebWamEnumPrivacyHighlightSurfaceEnum",
	"WAWebWamEnumSurfaceType",
	"WAWebWamEnumUiActionType",
	"WAWebWamEnumUnlockEntryPoint",
	"WAWebWamGroupMetricUtils",
	"WAWebWamPrivateStatsUtils",
	"WDSIconIcBookmark.react",
	"WDSIconIcVisibilityOff.react",
	"WDSPaddings.stylex",
	"cr:1066",
	"gkx",
	"react",
	"useLazyRef",
	"useWAWebAddParticipantsSelectedContacts",
	"useWAWebChatLockRestriction",
	"useWAWebChatValues",
	"useWAWebContactValues",
	"useWAWebFocusOnMount",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebScheduledMsgCount",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = { announcementGroupDisclaimer: {
		textAlign: "x1yc453h",
		paddingTop: "x1yrsyyn",
		paddingBottom: "xvpt6g3",
		paddingInlineStart: "x162tt16",
		paddingInlineEnd: "x5zjp28",
		paddingLeft: null,
		paddingRight: null,
		lineHeight: "x37zpob",
		overflowWrap: "xj0a0fe",
		wordBreak: "x1lldw8n",
		$$css: !0
	} };
	function g(t) {
		"use no forget";
		var a, i, l, u, d = t.ref, g = babelHelpers.objectWithoutPropertiesLoose(t, e), b = g.chat, v = g.onAllEvents, S = g.onChatThemeClick, R = g.onClose, L = g.onContactInfo, E = g.onEventInfo, k = g.onVerification, I = g.onWallpaperClick, T = r("useWAWebUIM")(), D = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), x = r("useWAWebScheduledMsgCount")(b.id), $ = r("useWAWebFocusOnMount")(), P = o("useWAWebChatValues").useChatValues(g.chat.id, [
			o("WAWebFrontendChatGetters").getMute,
			o("WAWebChatGetters").getId,
			o("WAWebFrontendChatGetters").getPendingAction,
			o("WAWebFrontendChatGetters").getGroupMetadata,
			o("WAWebChatGetters").getIsBroadcast,
			o("WAWebChatGetters").getIsNewsletter
		]), N = P[0], M = P[1], w = P[2], A = P[3], F = P[4], O = P[5], B = o("useWAWebModelValues").useModelValues(g.groupMetadata, [
			"id",
			"reportToAdminMode",
			"cachedDeviceCount",
			"cachedDeviceSizeBucket",
			"participants",
			"parentGroup",
			"pendingParticipants",
			"announce",
			"support",
			"groupType",
			"restrict",
			"isCag",
			"defaultSubgroup",
			"hasCapi",
			"owner",
			"hiddenSubgroup",
			"isLidAddressingMode"
		]), W = o("useWAWebContactValues").useContactValues(g.contact.id, [
			o("WAWebContactGetters").getName,
			o("WAWebContactGetters").getId,
			o("WAWebFrontendContactGetters").getPendingAction
		]), q = W[0], U = W[1], V = W[2], H = r("useWAWebAddParticipantsSelectedContacts")(), G = H.handleClearSelectedContacts, z = H.selectedContactsMap, j = H.updateSelectedContactsState, K = B.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP, Q = B.isLidAddressingMode === !0, X = _(null);
		m(function() {
			X.current && g.focusGroupSubjectOnMount !== !0 && g.focusGroupDescriptionOnMount !== !0 && X.current.scrollTo({
				top: 0,
				behavior: "instant"
			});
		}, [g.focusGroupDescriptionOnMount, g.focusGroupSubjectOnMount]);
		var Y = r("useLazyRef")(function() {
			return new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
				uiActionType: K ? o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.DEFAULT_SUBGROUP_INFO_OPEN : o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.GROUP_INFO_OPEN,
				uiActionPreloaded: !0,
				isLid: Q
			});
		}), J = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), Z = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), ee = _(null);
		o("useWAWebListener").useListener(B.participants, [
			"bulk_add",
			"bulk_remove",
			"reset",
			"sort",
			"change:isAdmin",
			"change:isSuperAdmin"
		], D), o("useWAWebListener").useListener(B.pendingParticipants, [
			"add",
			"remove",
			"reset"
		], D);
		var te = function() {
			var e;
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
				o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
				return;
			}
			var t = (e = B.getParentGroupChat()) == null ? void 0 : e.formattedTitle, n = function() {
				return te();
			};
			C(B.id), o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
				groupMetadata: B,
				chat: b,
				communityName: t,
				selectedContactsMap: z,
				updateSelectedContactsState: j,
				reopenAddGroupFlowCallback: n,
				handleClearSelectedContacts: G
			});
		}, ne = function(t) {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebGroupParticipantsFlow.react").GroupParticipantsFlow, {
				chat: o("WAWebStateUtils").unproxy(b),
				onVerification: k,
				onContactInfo: L,
				initialStep: t
			}), { transition: "modal-flow" });
		}, re = function() {
			R ? R() : T == null || T.requestDismiss();
		}, oe = function() {
			var e;
			(e = ee.current) == null || e.scrollIntoView();
		}, ae = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebE2EInfoModal.react"), {
				chat: b,
				chatId: M,
				e2eSubtype: "info_encrypted"
			}));
		}, ie = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebCAPIGroupAboutModal.react").CAPIGroupAboutModal, {}));
		}, le = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebSubgroupHiddenVisibilityModal.react"), {}));
		};
		m(function() {
			if (o("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(b) ? o("WAWebSuspendedCommunityUtils").openTerminatedCommunityModal() : o("WAWebChatGroupUtils").isTerminatedGroupOrNotMember(b) ? o("WAWebChatGroupUtils").isSupportGroup(b) || (o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled() ? o("WAWebSuspendedGroupUtils").openSuspendedGroupModalV2(b) : o("WAWebSuspendedGroupUtils").openTerminatedGroupOrNotMemberModal()) : o("WAWebChatGroupUtils").isSuspendedGroup(b) && !o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled() && (o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled() ? o("WAWebSuspendedGroupUtils").openSuspendedGroupModalV2(b) : o("WAWebSuspendedGroupUtils").openSuspendedGroupModal(B.id.user.toString())), B.groupType !== o("WAWebGroupType").GroupType.DEFAULT) {
				var e = new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
					action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.VIEW,
					surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GROUP_INFO,
					chat: b
				});
				e.commit();
			}
		}, []), m(function() {
			var e = B.participants;
			e.ensureSorted();
			var t = B.pendingParticipants;
			t.ensureSorted();
		}, void 0), m(function() {
			var e = Y.current;
			if (e) {
				var t = B.cachedDeviceSizeBucket;
				t != null && (e.sizeBucket = t);
				var n = o("WAWebWamGroupMetricUtils").getGroupCountMetricsFromGroupMetadata(o("WAWebStateUtils").unproxy(B));
				e.set(n), e.set(o("WAWebWamAddressingModeUtils").getAddressingModeMetricsFromGroupMetadata(o("WAWebStateUtils").unproxy(B))), e.markUiActionT(), e.commit(), Y.current = void 0;
			}
			o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
		}, []);
		var se = o("useWAWebChatLockRestriction").useChatLockRestriction({
			id: "locked-group-info-" + M.toString(),
			condition: o("WAWebStateUtils").unproxy(b),
			onPromptFailure: re,
			entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_INFO,
			landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.CHAT_INFO,
			unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_INFO
		}), ue = p(function() {
			return {
				surface: "group-info-drawer",
				extras: {
					groupSize: B.participants.length,
					typeOfGroup: o("WAWebGroupType").groupTypeToWamEnum(o("WAWebGroupType").getGroupTypeFromGroupMetadata(o("WAWebStateUtils").unproxy(B)))
				}
			};
		}, [B]);
		if (!se) return null;
		var ce;
		if (B.canSetGroupProperty()) {
			var de = s._(
				/*BTDS*/
				""
			), me = c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: de }), pe = c.jsx(o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon, {});
			ce = c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
				testid: "group-settings-row",
				icon: pe,
				onClick: g.onAdminSetting,
				title: me
			});
		}
		var _e = null;
		!o("WAWebChatGroupUtils").isSuspendedGroup(b) && g.onMediaGallery && (_e = c.jsx(r("WAWebChatInfoMediaSection.react"), {
			onMediaGallery: g.onMediaGallery,
			chat: o("WAWebStateUtils").unproxy(b)
		}));
		var fe = b && o("WAWebChatEphemerality").shouldShowEphemeralSetting(b) ? c.jsx(o("WAWebEphemeralSettingRow.react").EphemeralSettingRow, {
			onClick: g.onEphemeral,
			chat: b,
			groupMetadata: B,
			testid: "contact-info-dm-setting-row"
		}) : null, ge = o("WAWebLimitSharingUIUtils").isLimitSharingSettingVisible(b) ? c.jsx(r("WAWebLimitSharingSettingRow.react"), {
			onClick: function() {
				if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && o("WAWebChatGroupUtils").isAIGroupOpen(b) || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && o("WAWebChatGroupUtils").isAIGroupTee(b)) {
					o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebLimitSharingBlockedDueToAIGroup.react"), {}));
					return;
				}
				g.onLimitSharing == null || g.onLimitSharing(b);
			},
			chat: b,
			testid: "group-info-ls-setting-row"
		}) : null, he = null;
		if (b && B.parentGroup && B.participants.iAmMember()) {
			var ye = B.getParentGroupChat();
			ye != null && ye.groupMetadata && (he = c.jsxs(c.Fragment, { children: [
				c.jsx(r("WAWebGroupInfoSeparator.react"), {}),
				c.jsx(r("WAWebGroupInfoCommunitySection.react"), {
					onClick: function() {
						g.onCommunityClick == null || g.onCommunityClick();
					},
					parentGroupMetadata: ye.groupMetadata,
					parentGroupChat: ye
				}),
				c.jsx(r("WAWebGroupInfoSeparator.react"), {})
			] }));
		}
		var Ce = null;
		E != null && v != null && (Ce = c.jsx(r("WAWebGroupInfoEventsSection.react"), {
			chat: o("WAWebStateUtils").unproxy(b),
			onAllEvents: v,
			onEventInfo: E
		}));
		var be = c.jsx(c.Fragment, {});
		be = c.jsx(r("WAWebSecurityDrawerSection.react"), {
			highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
			onClick: function() {
				return o("WAWebPrinaUtils").showEncryptionInfoPopup(b);
			},
			header: { type: "encryption" },
			text: s._(
				/*BTDS*/
				""
			)
		});
		var ve = B.owner && ((a = B.participants.get(B.owner)) == null ? void 0 : a.contact);
		ve && B.hasCapi === !0 && (be = c.jsx(r("WAWebSecurityDrawerSection.react"), {
			highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
			onClick: ie,
			header: { type: "security" },
			text: c.jsx(r("WAWebTextWithLearnMoreLink"), {
				text: o("WAWebHostedGroupUtils").getSecureServicesBannerText(ve, !0),
				handleClick: ie
			})
		})), o("WAWebChatGroupUtils").isSupportGroup(b) && (be = c.jsx(r("WAWebGroupSupportSecurityDrawerSection.react"), { onClick: ae })), o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && o("WAWebChatGroupUtils").isAIGroupTee(b) && (be = c.jsx(r("WAWebAiGroupTeeSecurityDrawerSection.react"), { onClick: y })), o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && o("WAWebChatGroupUtils").isAIGroupOpen(b) && (be = c.jsx(r("WAWebAiGroupOpenSecurityDrawerSection.react"), { onClick: h }));
		var Se;
		!r("gkx")("26258") && n("cr:1066") && B != null && (Se = c.jsxs(c.Fragment, { children: [c.jsx(n("cr:1066"), { groupMetadata: o("WAWebStateUtils").unproxy(B) }), c.jsx(r("WAWebGroupInfoSeparator.react"), {})] }));
		var Re = o("WAWebMuteUtils").canMute(N) ? c.jsx(r("WAWebMuteRow.react"), {
			chat: b,
			mute: N
		}) : null, Le = r("WAWebEnvironment").isWindows || o("WAWebABProps").getABPropConfigValue("wa_web_group_info_notification_row") || o("WAWebABProps").getABPropConfigValue("enable_mention_everyone_receiver_web"), Ee = b && g.onNotificationSettings && Le ? c.jsx(r("WAWebNotificationsSettingsRow.react"), {
			onClick: g.onNotificationSettings,
			chat: b,
			testid: "notification-settings-row"
		}) : null, ke = o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") ? c.jsx(r("WAWebChatInfoWallpaperRow.react"), { onWallpaperClick: I }) : null, Ie = o("WAWebChatThemeGatingUtils").isChatThemesEnabled() ? c.jsx(r("WAWebChatInfoChatThemeRow.react"), { onClick: S }) : null, Te = !!(B.parentGroup && B.hiddenSubgroup === !0), De;
		if (Te) {
			var xe = {
				testid: "chat-hidden-visibility-row",
				onClick: le
			}, $e = s._(
				/*BTDS*/
				""
			), Pe = s._(
				/*BTDS*/
				""
			);
			De = c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, babelHelpers.extends({}, xe, {
				icon: c.jsx(r("WDSIconIcVisibilityOff.react"), {}),
				title: c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: $e }),
				secondaryTitle: c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed, { title: Pe })
			}));
		}
		var Ne = null;
		if (!o("WAWebChatGroupUtils").isSuspendedGroup(b) && g.onStarred) {
			var Me = s._(
				/*BTDS*/
				""
			), we = c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: Me.toString() }), Ae = c.jsx(o("WAWebStarRefreshedIcon.react").StarRefreshedIcon, {}), Fe = c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
				testid: "block-starred-messages",
				icon: Ae,
				onClick: g.onStarred,
				title: we
			});
			Ne = c.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
				titleTestId: "section-starred-messages",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
				children: Fe
			});
		}
		var Oe;
		if (b.hasKeptMsgs() || o("WAWebChatEphemerality").isEphemeralSettingOn(b)) {
			var Be = s._(
				/*BTDS*/
				""
			), We = B.restrict && s._(
				/*BTDS*/
				""
			), qe = "block-kept-messages", Ue = g.onKept, Ve = {
				testid: qe,
				onClick: Ue
			};
			Oe = c.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
				titleTestId: "section-kept-messages",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
				children: c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, babelHelpers.extends({}, Ve, {
					icon: c.jsx(r("WDSIconIcBookmark.react"), {}),
					title: c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: Be }),
					secondaryTitle: c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed, { title: We })
				}))
			});
		}
		var He = null;
		if (!o("WAWebChatGroupUtils").isSuspendedGroup(b) && o("WAWebScheduledMessagesGatingUtils").isScheduledMessagesSenderEnabled() && g.onScheduledMessages != null && x >= 1) {
			var Ge = s._(
				/*BTDS*/
				""
			);
			He = c.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
				titleTestId: "section-scheduled-messages",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
				children: c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
					testid: "block-scheduled-messages",
					icon: c.jsx(o("WAWebIcChatlistClockIcon.react").IcChatlistClockIcon, {}),
					onClick: g.onScheduledMessages,
					title: c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: Ge.toString() }),
					side: c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
						/*BTDS*/
						"",
						[s._param("count", x, [0])]
					) })
				})
			});
		}
		var ze;
		if (B.reportToAdminMode && B.canSetGroupProperty()) {
			var je = s._(
				/*BTDS*/
				""
			), Ke = {
				testid: "block-rta-messages",
				onClick: g.onSentForAdminReview
			};
			ze = c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, babelHelpers.extends({}, Ke, {
				icon: c.jsx(o("WAWebMessageReportRefreshedIcon.react").MessageReportRefreshedIcon, {}),
				title: c.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: je })
			}));
		}
		var Qe = null;
		(Re || be || fe || Ee || ge) && (Qe = c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
			children: [
				Ee || Re,
				ke,
				Ie,
				ze,
				be,
				fe,
				ge,
				De,
				ce
			]
		}));
		var Xe = c.jsx(r("WAWebGroupInfoIntegritySection.react"), { chat: o("WAWebStateUtils").unproxy(b) }), Ye = (i = b.groupMetadata) != null && i.isCag && !((l = b.groupMetadata) != null && (l = l.participants) != null && l.iAmAdmin()) ? c.jsx(r("WAWebDrawerSection.react"), {
			theme: "transparent",
			children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: f.announcementGroupDisclaimer,
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : null;
		return c.jsx("div", {
			role: "complementary",
			ref: $,
			tabIndex: -1,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: c.jsxs(r("WAWebDrawer.react"), {
				ref: d,
				theme: "striped",
				testid: "chat-info-drawer",
				tsNavigationData: ue,
				children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: (u = g.onBack) != null ? u : void 0,
					onCancel: g.onBack ? void 0 : re,
					testid: "group-info-header"
				}), c.jsx(r("WAWebDrawerBody.react"), {
					ref: X,
					children: c.jsxs("section", {
						className: "x2lah0s x1c4vz4f xdl72j9 x1fcywrv",
						"data-testid": "group-info-drawer-body",
						children: [
							c.jsx(r("WAWebGroupInfoTopCard.react"), {
								chat: o("WAWebStateUtils").unproxy(b),
								onAdminSetting: g.onAdminSetting,
								onAddParticipant: te,
								onClickParticipantsCount: oe,
								focusGroupSubjectOnMount: g.focusGroupSubjectOnMount,
								showHiddenSubgroupIcon: Te,
								onSearchMsgs: g.onSearchMsgs
							}),
							he,
							c.jsx(r("WAWebGroupInfoDescriptionSection.react"), {
								chat: o("WAWebStateUtils").unproxy(b),
								showFullDescription: g.showFullGroupDescription,
								focusOnMount: g.focusGroupDescriptionOnMount
							}),
							c.jsx(r("WAWebGroupInfoSeparator.react"), {}),
							_e,
							c.jsx(r("WAWebGroupInfoSeparator.react"), {}),
							Ce,
							Ne,
							Oe,
							He,
							Qe,
							c.jsx(r("WAWebGroupInfoSeparator.react"), {}),
							Se,
							c.jsx(r("WAWebGroupInfoCreateCommunitySection.react"), {
								chat: b,
								groupMetadata: B
							}),
							c.jsx(r("WAWebGroupFromGroupSection.react"), { groupMetadata: B }),
							!B.participants.iAmMember() && c.jsx(r("WAWebExitedGroupMemberSection.react"), { group: b }),
							c.jsx(r("WAWebGroupInfoParticipantsSection.react"), {
								ref: ee,
								chat: o("WAWebStateUtils").unproxy(b),
								scrollToParticipantList: g.scrollToParticipantList,
								flatListController: J.current,
								onAddParticipant: te,
								onOpenParticipantSearch: ne,
								onGroupInviteLink: g.onGroupInviteLink,
								onPendingParticipants: g.onPendingParticipants,
								onVerification: g.onVerification,
								onParticipantClick: function(t, n) {
									return g.onContactInfo == null ? void 0 : g.onContactInfo(n);
								}
							}),
							Ye,
							c.jsx(r("WAWebGroupInfoPendingParticipantsSection.react"), {
								chat: o("WAWebStateUtils").unproxy(b),
								flatListController: Z.current
							}),
							o("WAWebGroupMemberUpdatesGatingUtils").groupMemberUpdatesHideInThreadEnabled() && g.onMemberUpdates != null && c.jsx(r("WAWebGroupMemberUpdatesSection.react"), { onMemberUpdates: g.onMemberUpdates }),
							b && b.canToggleFavorite() && o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled() && c.jsx(r("WAWebChatInfoFavoritesSection.react"), { chat: b }),
							b && o("WAWebListsGatingUtils").isListsEnabled() && c.jsx(r("WAWebChatInfoListsSection.react"), { chat: b }),
							b && c.jsx(r("WAWebChatInfoExportChatSection.react"), { chat: b }),
							b && c.jsx(r("WAWebChatInfoClearChatSection.react"), { chat: b }),
							Xe,
							b && c.jsx(r("WAWebGroupInfoCreatedBySection.react"), { chat: o("WAWebStateUtils").unproxy(b) })
						]
					})
				})]
			}, "contact-info-modal")
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebOpenBotGroupOpenAddedModal.react"), {}));
	}
	function y() {
		o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebTeeBotGroupTeeAddedModal.react"), {}));
	}
	function C(e) {
		var t = o("WAJids").toGroupJid(e.toJid());
		o("WAWebGroupABProps").getGroupABPropConfigValue(t, "web_test_use_case_client_group");
	}
	l.default = g;
}), 226);
