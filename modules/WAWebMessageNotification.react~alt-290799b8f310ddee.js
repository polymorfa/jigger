__d("WAWebMessageNotification.react", [
	"fbt",
	"invariant",
	"WAJids",
	"WALogger",
	"WAWebABProps",
	"WAWebABPropsSaga",
	"WAWebAlertErrorIcon.react",
	"WAWebBizBot1pLearnMore.react",
	"WAWebBizBotConsumerContentVariant",
	"WAWebBotGroupGatingUtils",
	"WAWebBotLearnMore.react",
	"WAWebBotProfileGetters",
	"WAWebBotUtils",
	"WAWebBusinessBroadcastHomeFlowLoadable",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebCAPIGroupAboutModal.react",
	"WAWebCagPhoneNumberPrivacyNux.react",
	"WAWebCallCollection",
	"WAWebCallLogMsgData.flow",
	"WAWebChatAssignmentGatingUtils",
	"WAWebChatAssignmentLogEvents.flow",
	"WAWebChatCollection",
	"WAWebChatConstants",
	"WAWebChatEntryPoint",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebChatMessageSearch",
	"WAWebClock",
	"WAWebCmd",
	"WAWebCommonMsgSubtypeTypes",
	"WAWebConsumerTransparencyModalDialog.react",
	"WAWebContactCollection",
	"WAWebDOIntroPopup.react",
	"WAWebDailyAggregatedStats",
	"WAWebDefaultEphemeralityDrawer.react",
	"WAWebDialpadSmallIcon.react",
	"WAWebDotTwoLoopsIntersectedIcon.react",
	"WAWebDrawerManager",
	"WAWebEmojiText.react",
	"WAWebEventsFormatEventEditNotification",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFeatureFlagName",
	"WAWebFormatCTAText",
	"WAWebFormatE2ENotification",
	"WAWebFormatEphemeralSetting",
	"WAWebFormatNotificationTemplateModalText",
	"WAWebFormatNotificationTemplateText",
	"WAWebFormatPinInChatNotification",
	"WAWebFormatSharePhoneNumber",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGroupCallDropdownWithTrigger.react",
	"WAWebIcChatlistClockIcon.react",
	"WAWebIcceBubbleActivationHandlers",
	"WAWebL10N",
	"WAWebLid1X1MigrationGating",
	"WAWebLimitSharingUIUtils",
	"WAWebLogRequestPhoneNumber",
	"WAWebLogSystemMessageClick",
	"WAWebMarketingMessagesFeedbackResumeConfirmationLoadable",
	"WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
	"WAWebMessageNotificationCallLog.react",
	"WAWebMessageNotificationHelpers.react",
	"WAWebMiscGatingUtils",
	"WAWebMmSignalSharingUIUtils",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebNotificationTemplateFaq",
	"WAWebNux",
	"WAWebOneOnOneIcceCallBubble.react",
	"WAWebOpenBotGroupOpenAddedModal.react",
	"WAWebOpenCoexSystemMessageModal.react",
	"WAWebOpenSystemMessageModal",
	"WAWebPerCustomerDataSharingUtils",
	"WAWebPnhCagDailyUtils",
	"WAWebPollsFormatPollAddOptionNotification",
	"WAWebPreCallUserJourneyLogger",
	"WAWebPrinaUtils",
	"WAWebPrivacyHighlightDailyUtils",
	"WAWebSagaModal.react",
	"WAWebSagaV1Modal.react",
	"WAWebScheduledMessagesListLoadable",
	"WAWebSessionTransparencyNotification",
	"WAWebSharePhoneNumberModal.react",
	"WAWebSingleChevronInCircleIcon.react",
	"WAWebSpinner.react",
	"WAWebStateUtils",
	"WAWebSupportAIInfoNuxLoadable",
	"WAWebSystemMessageGatingUtils",
	"WAWebSystemMessageWithSingleCTA.react",
	"WAWebTeeBotGroupTeeAddedModal.react",
	"WAWebText.react",
	"WAWebUnscheduleMsgAction",
	"WAWebUserPrefsMeUser",
	"WAWebVoipActivityTracker",
	"WAWebVoipGatingUtils",
	"WAWebVoipOngoingCallCollection",
	"WAWebVoipStartCall",
	"WAWebVoipWaCallEnums",
	"WAWebWamEnumDisappearingModeEntryPointType",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumMmUserControlsEntryPoint",
	"WAWebWamEnumPnhActionType",
	"WAWebWamEnumPnhChatTypeType",
	"WAWebWamEnumPnhEntryPointType",
	"WAWebWamEnumPnhMessageChatParty",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
	"WAWebWamEnumSubSurface",
	"WAWebWamEnumSurfaceType",
	"WAWebWid",
	"WAWebWidFactory",
	"WDSFontTokenStyles",
	"WDSIconIcInfo.react",
	"WDSIconIcSyncAlt.react",
	"WDSIconWdsIcMetaDataDoubleChevron.react",
	"WDSIconWdsIcTransferOwnership.react",
	"WDSToast.react",
	"countWhere",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebGetFeatureFlag",
	"useWAWebIsWinHybridJoinableCallsEnabled",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebNux",
	"useWAWebOptionalBotProfileValues"
], (function(t, n, r, o, a, i, l, s, u) {
	var e = ["ref"], c, d, m, p, _, f, g = f || (f = o("react")), h = f, y = h.useEffect, C = h.useImperativeHandle, b = h.useMemo, v = h.useRef, S = { scheduledMsgIcon: {
		color: "xhslqc4",
		display: "x1rg5ohu",
		marginInlineEnd: "x7g7pl8",
		verticalAlign: "x523cq2",
		$$css: !0
	} };
	function R(e) {
		var t = e.chat, n = e.contact, a = e.displayAuthor, i = e.elRef, l = e.forwardClickRef, u = e.isMissedCall, d = e.isVideo, m = e.msg, p = b(function() {
			return new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger();
		}, []), _ = o("WAWebMsgGetters").getCallDuration(m), f = o("WAWebMsgGetters").getCallParticipants(m), h = o("WAWebClock").Clock.callDurationStrSimple(_ != null ? _ : 0), y = f != null ? r("countWhere")(f, function(e) {
			return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
		}) : 0, C = _ != null && _ > 0 ? s._(
			/*BTDS*/
			"",
			[s._param("time", h), s._param("joined-count", y)]
		) : null, v = function() {
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[voip] group ICCE bubble clicked, opening dropdown"]))), o("WAWebVoipActivityTracker").startUiActivityTracking(), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_BUBBLE_GROUP_DROPDOWN_OPEN), p.clickCallDropdown(u ? o("WAWebWamEnumSubSurface").SUB_SURFACE.MISSED_ICCE_BUBBLE : o("WAWebWamEnumSubSurface").SUB_SURFACE.ICCE_BUBBLE_OTHER_RESULT);
		};
		return g.jsx(r("WAWebGroupCallDropdownWithTrigger.react"), {
			chat: t,
			initialSubtext: C,
			isVideo: d,
			logger: p,
			onDropdownOpen: v,
			trigger: function(t) {
				return g.jsx("div", {
					role: "button",
					ref: function(n) {
						i.current = n, t(n);
					},
					tabIndex: 0,
					children: g.jsx(r("WAWebMessageNotificationCallLog.react"), {
						ref: l,
						msg: m,
						contact: n,
						displayAuthor: a
					})
				});
			}
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.msg, c = o("useWAWebModelValues").useOptionalModelValues(i.contact, [
			"id",
			"isEnterprise",
			"isContactBlocked",
			"verifiedLevel",
			"verifiedName",
			"shareOwnPn"
		]), f = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL), h = f[1], b = v(null), L = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
			(n = o("WAWebMsgGetters")).getId,
			n.getBody,
			n.getFrom,
			n.getType,
			n.getSubtype,
			n.getTemplateParams,
			n.getEphemeralDuration,
			n.getEphemeralSettingUser
		]), E = L[0], k = L[1], I = L[2], T = L[3], D = L[4], x = L[5], $ = L[6], P = L[7], N = o("WAWebFrontendMsgGetters").getChat(l.unsafe()), M = v(null), w = function(t) {
			var e, n;
			(e = b.current) == null || e.click(), (n = M.current) == null || n.handleKeyActivation(t);
		};
		C(a, function() {
			return { handleKeyActivation: w };
		}), y(function() {
			if (T === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION && D === "encrypt" && o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && o("WAWebPrinaUtils").chatContainsGoldenBox(N)) {
				var e = o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(N.id);
				e != null && o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(e, o("WAWebDailyAggregatedStats").PrinaDailyActionType.NARRATIVE_APPEAR);
			}
		}, []);
		var A = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(N.contact.id, [o("WAWebBotProfileGetters").getPosingAsProfessional]), F = A[0], O = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled, B = o("useWAWebIsWinHybridJoinableCallsEnabled").useIsWinHybridJoinableCallsEnabled(), W = o("WDSToast.react").useWDSToast(), q = W.showToast, U, V, H, G, z, j, K, Q, X;
		switch (T) {
			case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
				V = k, D === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated && (V = s._(
					/*BTDS*/
					""
				), H = r("WAWebFormatCTAText")({
					type: T,
					subtype: D
				}), U = g.jsx(o("WAWebIcChatlistClockIcon.react").IcChatlistClockIcon, {
					height: 14,
					width: 14,
					xstyle: S.scheduledMsgIcon
				}), Q = function() {
					o("WAWebDrawerManager").DrawerManager.openDrawerRight(g.jsx(o("WAWebScheduledMessagesListLoadable").WAWebScheduledMessagesListLoadable, {
						chatId: o("WAJids").unsafeCoerceToChatJid(N.id.toJid()),
						onBack: o("WAWebDrawerManager").closeDrawerRight,
						onDeleteMessage: async function(t) {
							try {
								await o("WAWebUnscheduleMsgAction").unscheduleMsgAction(o("WAJids").unsafeCoerceToChatJid(N.id.toJid()), t);
							} catch (e) {
								o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to unschedule message: ", ""])), e).sendLogs("unschedule-msg-fail"), q({
									type: "error",
									message: s._(
										/*BTDS*/
										""
									)
								});
							}
						}
					}));
				});
				break;
			case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION: {
				var Y = o("WAWebStateUtils").unproxy(l);
				Y.type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION || u(0, 69177), V = o("WAWebFormatE2ENotification").formatE2ENotification(Y), X = o("WAWebFormatE2ENotification").getE2ENotificationEnum(Y), H = r("WAWebFormatCTAText")({
					type: T,
					id: Y.id
				});
				var J = D, Z = k ? o("WAWebWidFactory").createWid(k) : null, ee = E.remote;
				o("WAWebMsgGetters").getIsCAPISupport(l) ? Q = function() {
					if (o("WAWebABPropsSaga").getIsSagaV1NuxEnabled()) o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable, {}), { transition: "modal-flow" });
					else {
						var e = o("WAWebFormatNotificationTemplateModalText").formatFbModalText(!1, !0), t = o("WAWebFaqUrl").getSupportChatSafetyFaqUrl();
						o("WAWebOpenSystemMessageModal").openSystemMessageModal(e, t);
					}
				} : J === "group_transition_to_tee_bot_group" ? (Q = function() {
					o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebTeeBotGroupTeeAddedModal.react"), {}));
				}, U = g.jsx(o("WAWebMessageNotificationHelpers.react").TeeBotE2ENotificationIcon, { msg: Y })) : (Q = function() {
					o("WAWebMessageNotificationHelpers.react").handleSecurityClick({
						accountLid: N.accountLid,
						chatId: ee,
						e2eSubtype: J,
						msg: l,
						participantJid: Z
					});
				}, U = g.jsx(o("WAWebMessageNotificationHelpers.react").E2ENotificationIcon, { msg: Y }));
				break;
			}
			case o("WAWebMsgType").MSG_TYPE.CALL_LOG: {
				if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
					var te = o("WAWebMsgGetters").getIsVideoCall(l), ne = o("WAWebMsgGetters").getIsMissedCall(l), re = o("WAWebMsgGetters").getCallOutcome(l), oe = B && o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.get(l.id) != null;
					if (o("WAWebChatGetters").getIsGroup(N) && !oe) return o("WAWebVoipGatingUtils").isGroupCallingEnabled() ? g.jsx(R, {
						chat: N,
						elRef: b,
						forwardClickRef: M,
						isVideo: te,
						isMissedCall: ne,
						msg: l,
						contact: c,
						displayAuthor: i.displayAuthor
					}) : g.jsx(r("WAWebMessageNotificationCallLog.react"), {
						ref: M,
						msg: l,
						contact: c,
						displayAuthor: i.displayAuthor
					});
					if (!oe) return g.jsx(r("WAWebOneOnOneIcceCallBubble.react"), {
						chat: N,
						contact: c,
						displayAuthor: i.displayAuthor,
						elRef: b,
						forwardClickRef: M,
						isVideo: te,
						msg: l,
						ongoingCallId: re === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing ? l.id.id : null
					});
					var ae = function() {
						var e;
						o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: joining ongoing group call from ICCE bubble video=", ""])), te), o("WAWebVoipActivityTracker").startActivityTracking(), o("WAWebVoipActivityTracker").startUiActivityTracking(), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_BUBBLE_CLICK_JOIN_ONGOING), o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN({
							callId: l.id.id,
							chat: N,
							isDeviceSwitch: ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.id) !== l.id.id && o("WAWebMsgGetters").getSelfOtherDeviceConnected(l) === !0 && o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled(),
							isVideo: te,
							lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LOG_MESSAGE_ONGOING
						});
					}, ie = o("WAWebIcceBubbleActivationHandlers").getIcceBubbleActivationHandlers(ae), le = ie.onClick, se = ie.onKeyDown;
					return g.jsx("div", {
						role: "button",
						ref: b,
						tabIndex: 0,
						"data-testid": "voip_icce_bubble_join_ongoing",
						onKeyDown: se,
						onClick: le,
						children: g.jsx(r("WAWebMessageNotificationCallLog.react"), {
							ref: M,
							msg: l,
							contact: c,
							displayAuthor: i.displayAuthor
						})
					});
				}
				return g.jsx(r("WAWebMessageNotificationCallLog.react"), {
					ref: M,
					msg: l,
					contact: c,
					displayAuthor: i.displayAuthor
				});
			}
			case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE: {
				var ue;
				if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && (ue = N.accountLid), D === "change_number") {
					var ce = x[0], de = x[1], me = x[2], pe = x[3], _e = o("WAWebFrontendContactGetters").getFormattedName(o("WAWebContactCollection").ContactCollection.gadd(ce)), fe = r("WAWebWid").equals(N.id, ce), ge = r("WAWebWid").equals(N.id, me);
					V = ge || fe ? s._(
						/*BTDS*/
						"",
						[s._param("name", _e)]
					) : s._(
						/*BTDS*/
						"",
						[s._param("name", _e)]
					), (ge || fe) && (Q = function() {
						return o("WAWebMessageNotificationHelpers.react").handleChangeNumberClick(de, ce);
					});
				} else if (D === "chat_assignment" || D === "chat_assignment_unassign") {
					var he = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = he.text, H = he.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), U = g.jsx("div", {
						className: "x1rg5ohu x1gslohp xbelrpt x16dsc37",
						children: g.jsx(r("WDSIconWdsIcTransferOwnership.react"), {
							width: 18,
							height: 18
						})
					}), O && o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled() && (Q = function() {
						var e = o("WAWebChatCollection").ChatCollection.get(E.remote);
						e != null && o("WAWebCmd").Cmd.assignChat(e, o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.SYSTEM_MESSAGE);
					});
				} else if (D === "masked_thread_created") {
					var ye = o("WAWebUserPrefsMeUser").getMaybeMePnUser(), Ce = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Ce.text, H = Ce.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), U = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebDialpadSmallIcon.react").DialpadSmallIcon, {
							width: 16,
							height: 16
						})
					}), z = "masked_thread_created_system_message", Q = function() {
						o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
							action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR,
							chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
							chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
							entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE
						}), c != null && c.shareOwnPn ? ye != null && o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebSharePhoneNumberModal.react").PostSharePhoneNumberModal, {
							entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE,
							mePnUser: ye
						})) : o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebSharePhoneNumberModal.react").SharePhoneNumberModal, { entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE }));
					};
				} else if (D === "cag_masked_thread_created") {
					var be, ve = o("WAWebChatCollection").ChatCollection.get(E.remote), Se = ve == null || (be = ve.groupMetadata) == null ? void 0 : be.parentGroup, Re = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Re.text, H = Re.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), U = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebDialpadSmallIcon.react").DialpadSmallIcon, {
							width: 16,
							height: 16
						})
					}), Q = function() {
						Se && o("WAWebPnhCagDailyUtils").incrementPnhDailyCount(Se, o("WAWebPnhCagDailyUtils").PnhCagDailyMetricsType.PNH_INDICATOR_CLICKS_CHAT);
						var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
						if (e) {
							var t;
							o("WAWebModalManager").ModalManager.open(ve != null && (t = ve.groupMetadata) != null && t.participants.iAmAdmin() ? g.jsx(o("WAWebCagPhoneNumberPrivacyNux.react").CagPhoneNumberSharedNux, {}) : g.jsx(o("WAWebCagPhoneNumberPrivacyNux.react").CagPhoneNumberHiddenNux, {}));
						}
					};
				} else if (l.subtype === "disappearing_mode" || l.subtype === "disappearing_mode_update" || l.subtype === "disappearing_mode_unsupported") {
					var Le = o("WAWebChatEphemerality").shouldShowEphemeralSetting(N);
					if (U = o("WAWebMessageNotificationHelpers.react").renderDisappearingIcon(), D === "disappearing_mode") {
						var Ee = Le ? o("WAWebFormatEphemeralSetting").getDefaultDisappearingModeParts(o("WAWebStateUtils").unproxy(l.unsafe())) : null;
						Ee != null ? (V = Ee.text, G = Ee.ctaText) : V = o("WAWebFormatEphemeralSetting").getDefaultDisappearingModeSystemMessageText(o("WAWebStateUtils").unproxy(l.unsafe())), Le && (Q = function() {
							o("WAWebDrawerManager").DrawerManager.openDrawerLeft(g.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
								onClose: o("WAWebDrawerManager").closeDrawerLeft,
								entryPoint: o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.SYSTEM_MESSAGE
							}));
						});
					} else if (D === "disappearing_mode_update") {
						var ke = r("nullthrows")(o("WAWebChatCollection").ChatCollection.get(l.id.remote));
						if (Le) {
							var Ie = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateParts(o("WAWebStateUtils").unproxy(l.unsafe()));
							V = Ie.text, G = Ie.ctaText, Q = function() {
								return o("WAWebMessageNotificationHelpers.react").handleEphemeralClick(ke);
							};
						} else V = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateSystemMessageText(o("WAWebStateUtils").unproxy(l.unsafe()));
					} else D === "disappearing_mode_unsupported" && (V = o("WAWebFormatEphemeralSetting").getDMUnsupportedSystemMessageText());
				} else if (D === "sender_invite") {
					var Te = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Te.text, H = Te.ctaText, o("WAWebStateUtils").unproxy(l.unsafe());
				} else if (D === "biz_bot_1p_disclosure") {
					var De = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = De.text, H = De.ctaText, o("WAWebStateUtils").unproxy(l.unsafe());
					var xe = o("WAWebBizBotConsumerContentVariant").getBizBotConsumerContentVariant();
					U = xe === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(r("WDSIconIcInfo.react"), {
							width: 16,
							height: 16
						})
					}) : g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
							width: 16,
							height: 16,
							testid: "double-chevron-in-circle"
						})
					}), Q = function() {
						o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebBizBot1pLearnMore.react"), {}));
					};
				} else if (D === "bot_init" || D === "bot_invoke_disclaimer") {
					var $e = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()), !1, F);
					V = $e.text, H = $e.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), Q = function() {
						if (o("WAWebBotUtils").isBotChannelFBID(E.remote)) {
							var e = o("WAWebBotUtils").isHatchBot(E.remote) ? o("WAWebFaqUrl").getHatchLearnMoreUrl() : o("WAWebFaqUrl").getManusLearnMoreUrl();
							o("WAWebExternalLink.react").openExternalLink(e);
						} else o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebBotLearnMore.react"), { fromInvoke: D === "bot_invoke_disclaimer" }));
					};
				} else if (D === "change_username") {
					var Pe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Pe.text, H = Pe.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), z = "change_username_system_message";
				} else if (D === "change_lid") {
					var Ne = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Ne.text, H = Ne.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), z = "change_lid_system_message";
					var Me = x.find(function(e) {
						return r("WAWebWid").isWid(e);
					}), we = Me != null && typeof Me == "string" ? o("WAWebWidFactory").createWid(Me) : Me;
					we && we.isLid() && (Q = function() {
						o("WAWebMessageNotificationHelpers.react").handleChangeLidClick(we);
					});
				} else if (D === "saga_init") {
					var Ae = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Ae.text, H = Ae.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), Q = function() {
						o("WAWebModalManager").ModalManager.open(o("WAWebABPropsSaga").getIsSagaV1NuxEnabled() ? g.jsx(r("WAWebSagaV1Modal.react"), {}) : g.jsx(r("WAWebSagaModal.react"), {}));
					};
				} else if (D === "biz_account_type_is_hosted" || D === "biz_account_type_changed_to_hosted") {
					var Fe = E.remote, Oe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Oe.text, H = Oe.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), Q = function() {
						o("WAWebOpenCoexSystemMessageModal.react").openCoexSecurityVerifySystemMessageModal({
							faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
							lid: ue,
							shouldHideVerificationButton: o("WAWebABProps").getABPropConfigValue("coex_calling_enabled"),
							text: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalText(!0),
							textLast: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextLastParagraph(),
							wid: Fe
						});
					};
				} else if (D === "biz_me_account_type_is_hosted" || D === "biz_me_account_type_is_hosted_transition") {
					var Be = E.remote, We = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = We.text, H = We.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), Q = function() {
						o("WAWebOpenCoexSystemMessageModal.react").openCoexSecurityVerifySystemMessageModal({
							faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
							lid: ue,
							shouldHideVerificationButton: o("WAWebABProps").getABPropConfigValue("coex_calling_enabled"),
							text: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextForYourBusiness(),
							textLast: null,
							wid: Be
						});
					};
				} else if (D === "is_capi_hosted_group") {
					var qe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = qe.text, H = qe.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), K = o("WAWebFormatNotificationTemplateModalText").formatNotificationTemplateModalText(o("WAWebStateUtils").unproxy(l.unsafe())), K != null && (Q = function() {
						o("WAWebOpenSystemMessageModal").openSystemMessageModal(g.jsx(o("WAWebCAPIGroupAboutModal.react").CAPIGroupAboutModalContent, {}), o("WAWebCAPIGroupAboutModal.react").CAPI_GROUP_ABOUT_MODAL_LEARN_MORE_URL);
					});
				} else if (o("WAWebMsgGetters").getIsCAPISupport(l) && o("WAWebABPropsSaga").getIsSagaV1NuxEnabled() && (D === "biz_privacy_mode_init_fb" || D === "support_system_message")) {
					var Ue = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Ue.text, H = Ue.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), Q = function() {
						o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable, {}), { transition: "modal-flow" });
					};
				} else if (D === "marketing_messages_from_business_stopped") {
					var Ve = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Ve.text, H = Ve.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), Q = function() {
						N.contact.isContactOptedOut && o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebMarketingMessagesFeedbackResumeConfirmationLoadable").WAWebMarketingMessagesFeedbackResumeConfirmationLoadable, {
							chat: N,
							logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.SYSTEM_MESSAGE
						}), { transition: "default" });
					};
				} else if (D === "marketing_messages_from_business_resumed") {
					var He = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = He.text, H = He.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), Q = function() {
						N.contact.isContactOptedOut || o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable").WAWebMarketingMessagesFeedbackStopConfirmationLoadable, {
							chat: N,
							logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.SYSTEM_MESSAGE
						}), { transition: "modal-flow" });
					};
				} else if (D === "marketing_messages_post_send_opt_out") {
					var Ge = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Ge.text, H = s._(
						/*BTDS*/
						""
					), Q = function() {
						N.contact.isContactOptedOut || o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable").WAWebMarketingMessagesFeedbackStopConfirmationLoadable, {
							chat: N,
							logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.POST_SEND_SYSTEM_MESSAGE
						}), { transition: "modal-flow" });
					};
				} else if (D === "limit_sharing_system_message") {
					var ze = o("WAWebLimitSharingUIUtils").getLimitSharingMessageNotification(N, l);
					V = ze.text, H = ze.ctaText, Q = ze.handleClick;
				} else if (D === "mm_signal_sharing_system_message") {
					var je = o("WAWebMmSignalSharingUIUtils").getMmSignalSharingMessageNotification(N);
					V = je.text, H = je.ctaText, Q = je.handleClick, U = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, {
							width: 16,
							height: 16,
							viewBox: {
								x: 0,
								y: 0,
								width: 20,
								height: 20
							}
						})
					});
				} else if (D === "bot_session_transparency_notice") {
					var Ke = r("nullthrows")(l.botSessionTransparencyType, "botSessionTransparencyType should not be null for bot_session_transparency_notice subtype"), Qe = o("WAWebSessionTransparencyNotification").getBotSessionTransparencySystemMessageNotification(Ke);
					V = Qe.text, Q = Qe.handleClick;
				} else if (D === "biz_automatically_labeled_chat_system_message") {
					var Xe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Xe.text, H = Xe.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), j = "xd4r4e8 x1tawftj x14ug900", H = g.jsx(o("WAWebText.react").WAWebClickableText, {
						weight: "bold",
						color: "primary",
						children: r("WAWebFormatCTAText")({
							type: T,
							subtype: D,
							id: l.id
						})
					}), U = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebDotTwoLoopsIntersectedIcon.react").DotTwoLoopsIntersectedIcon, {
							width: 16,
							height: 16,
							viewBox: {
								x: 0,
								y: 0,
								width: 24,
								height: 24
							}
						})
					}), Q = function() {
						o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebDOIntroPopup.react"), {
							onContinue: function() {
								h(), o("WAWebModalManager").ModalManager.close();
							},
							surfaceType: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT
						}));
					};
				} else if (D === "biz_per_customer_3pd_data_share_opt_in" || D === "biz_per_customer_3pd_data_share_opt_out") {
					var Ye, Je;
					z = "per_customer_data_sharing_system_message";
					var Ze = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = Ze.text, j = "xd4r4e8 x1tawftj x14ug900", o("WAWebStateUtils").unproxy(l.unsafe()), H = g.jsx(o("WAWebText.react").WAWebClickableText, {
						weight: "bold",
						color: "primary",
						children: r("WAWebFormatCTAText")({
							type: T,
							subtype: D,
							id: l.id
						})
					}), U = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(r("WDSIconIcSyncAlt.react"), {
							width: 16,
							height: 16,
							viewBox: {
								x: 0,
								y: 0,
								width: 24,
								height: 24
							}
						})
					});
					var et = (Ye = (Je = N.accountLid) == null ? void 0 : Je.toString()) != null ? Ye : "";
					Q = function() {
						o("WAWebPerCustomerDataSharingUtils").getModalForPerCustomerDataSharing({
							accountLid: et,
							chat: N,
							entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.DATA_SHARING_SYSTEM_MESSAGE,
							perCustomerEntryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SYSTEM_MESSAGE
						});
					};
				} else if (D === "ctwa_consumer_data_sharing_disclosure_system_message") {
					z = "ctwa_consumer_data_sharing_disclosure_system_message";
					var tt = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = tt.text, j = "xd4r4e8 x1tawftj x14ug900", o("WAWebStateUtils").unproxy(l.unsafe()), H = g.jsx(o("WAWebText.react").WAWebClickableText, {
						weight: "bold",
						color: "primary",
						children: r("WAWebFormatCTAText")({
							type: T,
							subtype: D,
							id: l.id
						})
					}), U = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, {
							width: 16,
							height: 16,
							viewBox: {
								x: 0,
								y: 0,
								width: 20,
								height: 20
							}
						})
					}), Q = function() {
						o("WAWebConsumerTransparencyModalDialog.react").showConsumerTransparencyModalDialog();
					};
				} else if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && D === "group_transition_to_bot_group") {
					var nt = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = nt.text, o("WAWebStateUtils").unproxy(l.unsafe()), Q = function() {
						o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebOpenBotGroupOpenAddedModal.react"), {}));
					};
				} else if (D === "biz_broadcast_status") {
					var rt, ot = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					V = ot.text, H = s._(
						/*BTDS*/
						""
					);
					var at = ((rt = l.templateParams) == null ? void 0 : rt[0]) != null ? Number(l.templateParams[0].toString()) : 0;
					at > 0 ? U = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebSpinner.react").Spinner, { size: 16 })
					}) : U = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, {
							width: 16,
							height: 16
						})
					}), Q = function() {
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.bbThreadSystemMessageCtaClicked(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(g.jsx(o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable, {
							entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
							onClose: function() {
								return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
							}
						}));
					}, z = "biz_broadcast_status_system_message";
				} else {
					var it = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(l.unsafe()));
					if (V = it.text, H = it.ctaText, o("WAWebStateUtils").unproxy(l.unsafe()), K = o("WAWebFormatNotificationTemplateModalText").formatNotificationTemplateModalText(o("WAWebStateUtils").unproxy(l.unsafe())), K != null) {
						var lt = r("WAWebNotificationTemplateFaq")(D, l.id.remote);
						Q = function() {
							o("WAWebOpenSystemMessageModal").openSystemMessageModal(K, lt);
						};
					}
				}
				o("WAWebMessageNotificationHelpers.react").showInfoIcon(T, D) && (U = g.jsx("div", {
					className: "x1rg5ohu x1gslohp x2fvf9 x16dsc37 xhslqc4",
					children: g.jsx(r("WDSIconIcInfo.react"), {
						width: 12,
						height: 15
					})
				}));
				break;
			}
			case o("WAWebMsgType").MSG_TYPE.PROTOCOL: {
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["WAWebMessageNotification: protocol"])));
				var st = I, ut = E.remote, ct = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
				if (D === "ephemeral_setting") {
					if (o("WAWebChatEphemerality").shouldShowEphemeralSetting(N)) {
						var dt = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateParts(o("WAWebStateUtils").unproxy(l.unsafe()));
						V = dt.text, G = dt.ctaText, Q = function() {
							o("WAWebMessageNotificationHelpers.react").handleEphemeralClick(N);
						};
					} else V = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateSystemMessageText(o("WAWebStateUtils").unproxy(l.unsafe()));
					U = o("WAWebMessageNotificationHelpers.react").renderDisappearingIcon(), z = "ephemeral_system_message";
				} else if (D === "share_phone_number") V = r("WAWebFormatSharePhoneNumber")(st, ut, E.fromMe), Q = function() {
					ct != null && o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebSharePhoneNumberModal.react").PostSharePhoneNumberModal, { mePnUser: ct }));
				}, U = g.jsx("div", {
					className: "x1rg5ohu x2fvf9 xg49k01",
					children: g.jsx(o("WAWebDialpadSmallIcon.react").DialpadSmallIcon, {
						width: 16,
						height: 16
					})
				}), z = "share_phone_number_system_message";
				else if (D === "event_edit_decrypted") {
					var mt = o("WAWebStateUtils").unproxy(l.unsafe()), pt = o("WAWebMsgCollection").MsgCollection.get(mt.protocolMessageKey);
					V = o("WAWebEventsFormatEventEditNotification").formatEventEditNotification(mt), H = pt ? r("WAWebFormatCTAText")({
						type: T,
						subtype: D
					}) : "", Q = function() {
						if (pt != null) {
							var e = o("WAWebFrontendMsgGetters").getAsEventCreation(pt);
							e != null && o("WAWebCmd").Cmd.openEventInfoDrawer(N, e);
						}
					};
				} else if (D === "limit_sharing_system_message") {
					var _t = o("WAWebLimitSharingUIUtils").getLimitSharingMessageNotification(N, l);
					V = _t.text, H = _t.ctaText, Q = _t.handleClick;
				} else if (D === "mm_signal_sharing_system_message") {
					var ft = o("WAWebMmSignalSharingUIUtils").getMmSignalSharingMessageNotification(N);
					V = ft.text, H = ft.ctaText, Q = ft.handleClick, U = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, {
							width: 16,
							height: 16,
							viewBox: {
								x: 0,
								y: 0,
								width: 20,
								height: 20
							}
						})
					});
				}
				break;
			}
			case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED: {
				V = o("WAWebPollsFormatPollAddOptionNotification").formatPollAddOptionNotification(o("WAWebStateUtils").unproxy(l).unsafe()), H = r("WAWebFormatCTAText")({ type: T }), z = "poll_add_option_system_message";
				var gt = o("WAWebStateUtils").unproxy(l.unsafe()).parentMsgKey;
				Q = function() {
					var e = gt != null ? o("WAWebMsgCollection").MsgCollection.get(gt) : null;
					if (e != null && o("WAWebFrontendMsgGetters").getAsPollCreation(e) != null) {
						var t = o("WAWebChatMessageSearch").getSearchContext({
							chat: N,
							msgKey: e.id
						});
						o("WAWebCmd").Cmd.openChatAt({
							chat: N,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatPollNotification,
							msgContext: t
						});
					}
				};
				break;
			}
			case o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE: {
				V = o("WAWebFormatPinInChatNotification").formatPinInChatNotification(o("WAWebStateUtils").unproxy(l).unsafe()), z = "pinned_message_system_message";
				break;
			}
		}
		var ht = g.jsx(o("WAWebEmojiText.react").EmojiText, {
			direction: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
			text: V,
			breakWord: !0
		}), yt = function() {
			var e = !(N.msgs.some(function(e) {
				return o("WAWebMsgGetters").isRealMessage(e);
			}) || N.endOfHistoryTransferType === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE), t = o("WAWebSystemMessageWithSingleCTA.react").getSystemMessageCategoryType(T);
			t != null && X != null && o("WAWebLogSystemMessageClick").logSystemMessageClick({
				isAGroup: o("WAWebChatGetters").getIsGroup(N),
				isANewThread: e,
				systemMessageCategory: t,
				systemMessageType: X
			});
		}, Ct;
		if (o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() && H != null) Ct = g.jsx(o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA, {
			bodyText: ht,
			ctaText: H,
			className: j,
			icon: U,
			onClick: function() {
				yt(), Q == null || Q();
			},
			onclickRef: b,
			testid: z != null ? z : "system_message"
		});
		else if (G != null) {
			var bt = g.jsxs("span", {
				"data-testid": z != null ? z : "system_message",
				children: [
					U,
					ht,
					" ",
					g.jsx("span", babelHelpers.extends({}, (_ || (_ = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized), { children: G }))
				]
			});
			if (Q) return g.jsx("div", {
				role: "button",
				ref: b,
				onClick: function() {
					yt(), Q == null || Q();
				},
				children: bt
			});
			Ct = bt;
		} else if (Ct = g.jsxs("span", {
			"data-testid": z != null ? z : "system_message",
			children: [U, ht]
		}), Q) return g.jsx("div", {
			role: "button",
			ref: b,
			onClick: function() {
				o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() && yt(), Q == null || Q();
			},
			children: Ct
		});
		return g.jsx("span", { children: Ct });
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 226);
