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
	"asyncToGeneratorRuntime",
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
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), c = l.msg, f = o("useWAWebModelValues").useOptionalModelValues(l.contact, [
			"id",
			"isEnterprise",
			"isContactBlocked",
			"verifiedLevel",
			"verifiedName",
			"shareOwnPn"
		]), h = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL), b = h[1], L = v(null), E = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
			(a = o("WAWebMsgGetters")).getId,
			a.getBody,
			a.getFrom,
			a.getType,
			a.getSubtype,
			a.getTemplateParams,
			a.getEphemeralDuration,
			a.getEphemeralSettingUser
		]), k = E[0], I = E[1], T = E[2], D = E[3], x = E[4], $ = E[5], P = E[6], N = E[7], M = o("WAWebFrontendMsgGetters").getChat(c.unsafe()), w = v(null), A = function(t) {
			var e, n;
			(e = L.current) == null || e.click(), (n = w.current) == null || n.handleKeyActivation(t);
		};
		C(i, function() {
			return { handleKeyActivation: A };
		}), y(function() {
			if (D === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION && x === "encrypt" && o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && o("WAWebPrinaUtils").chatContainsGoldenBox(M)) {
				var e = o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(M.id);
				e != null && o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(e, o("WAWebDailyAggregatedStats").PrinaDailyActionType.NARRATIVE_APPEAR);
			}
		}, []);
		var F = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(M.contact.id, [o("WAWebBotProfileGetters").getPosingAsProfessional]), O = F[0], B = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled, W = o("useWAWebIsWinHybridJoinableCallsEnabled").useIsWinHybridJoinableCallsEnabled(), q = o("WDSToast.react").useWDSToast(), U = q.showToast, V, H, G, z, j, K, Q, X, Y;
		switch (D) {
			case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
				H = I, x === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated && (H = s._(
					/*BTDS*/
					""
				), G = r("WAWebFormatCTAText")({
					type: D,
					subtype: x
				}), V = g.jsx(o("WAWebIcChatlistClockIcon.react").IcChatlistClockIcon, {
					height: 14,
					width: 14,
					xstyle: S.scheduledMsgIcon
				}), X = function() {
					o("WAWebDrawerManager").DrawerManager.openDrawerRight(g.jsx(o("WAWebScheduledMessagesListLoadable").WAWebScheduledMessagesListLoadable, {
						chatId: o("WAJids").unsafeCoerceToChatJid(M.id.toJid()),
						onBack: o("WAWebDrawerManager").closeDrawerRight,
						onDeleteMessage: (function() {
							var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
								try {
									yield o("WAWebUnscheduleMsgAction").unscheduleMsgAction(o("WAJids").unsafeCoerceToChatJid(M.id.toJid()), e);
								} catch (e) {
									o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to unschedule message: ", ""])), e).sendLogs("unschedule-msg-fail"), U({
										type: "error",
										message: s._(
											/*BTDS*/
											""
										)
									});
								}
							});
							return function(t) {
								return e.apply(this, arguments);
							};
						})()
					}));
				});
				break;
			case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION: {
				var J = o("WAWebStateUtils").unproxy(c);
				J.type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION || u(0, 69177), H = o("WAWebFormatE2ENotification").formatE2ENotification(J), Y = o("WAWebFormatE2ENotification").getE2ENotificationEnum(J), G = r("WAWebFormatCTAText")({
					type: D,
					id: J.id
				});
				var Z = x, ee = I ? o("WAWebWidFactory").createWid(I) : null, te = k.remote;
				o("WAWebMsgGetters").getIsCAPISupport(c) ? X = function() {
					if (o("WAWebABPropsSaga").getIsSagaV1NuxEnabled()) o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable, {}), { transition: "modal-flow" });
					else {
						var e = o("WAWebFormatNotificationTemplateModalText").formatFbModalText(!1, !0), t = o("WAWebFaqUrl").getSupportChatSafetyFaqUrl();
						o("WAWebOpenSystemMessageModal").openSystemMessageModal(e, t);
					}
				} : Z === "group_transition_to_tee_bot_group" ? (X = function() {
					o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebTeeBotGroupTeeAddedModal.react"), {}));
				}, V = g.jsx(o("WAWebMessageNotificationHelpers.react").TeeBotE2ENotificationIcon, { msg: J })) : (X = function() {
					o("WAWebMessageNotificationHelpers.react").handleSecurityClick({
						accountLid: M.accountLid,
						chatId: te,
						e2eSubtype: Z,
						msg: c,
						participantJid: ee
					});
				}, V = g.jsx(o("WAWebMessageNotificationHelpers.react").E2ENotificationIcon, { msg: J }));
				break;
			}
			case o("WAWebMsgType").MSG_TYPE.CALL_LOG: {
				if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
					var ne = o("WAWebMsgGetters").getIsVideoCall(c), re = o("WAWebMsgGetters").getIsMissedCall(c), oe = o("WAWebMsgGetters").getCallOutcome(c), ae = W && o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.get(c.id) != null;
					if (o("WAWebChatGetters").getIsGroup(M) && !ae) return o("WAWebVoipGatingUtils").isGroupCallingEnabled() ? g.jsx(R, {
						chat: M,
						elRef: L,
						forwardClickRef: w,
						isVideo: ne,
						isMissedCall: re,
						msg: c,
						contact: f,
						displayAuthor: l.displayAuthor
					}) : g.jsx(r("WAWebMessageNotificationCallLog.react"), {
						ref: w,
						msg: c,
						contact: f,
						displayAuthor: l.displayAuthor
					});
					if (!ae) return g.jsx(r("WAWebOneOnOneIcceCallBubble.react"), {
						chat: M,
						contact: f,
						displayAuthor: l.displayAuthor,
						elRef: L,
						forwardClickRef: w,
						isVideo: ne,
						msg: c,
						ongoingCallId: oe === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing ? c.id.id : null
					});
					var ie = function() {
						var e;
						o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: joining ongoing group call from ICCE bubble video=", ""])), ne), o("WAWebVoipActivityTracker").startActivityTracking(), o("WAWebVoipActivityTracker").startUiActivityTracking(), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_BUBBLE_CLICK_JOIN_ONGOING), o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN({
							callId: c.id.id,
							chat: M,
							isDeviceSwitch: ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.id) !== c.id.id && o("WAWebMsgGetters").getSelfOtherDeviceConnected(c) === !0 && o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled(),
							isVideo: ne,
							lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LOG_MESSAGE_ONGOING
						});
					}, le = o("WAWebIcceBubbleActivationHandlers").getIcceBubbleActivationHandlers(ie), se = le.onClick, ue = le.onKeyDown;
					return g.jsx("div", {
						role: "button",
						ref: L,
						tabIndex: 0,
						"data-testid": "voip_icce_bubble_join_ongoing",
						onKeyDown: ue,
						onClick: se,
						children: g.jsx(r("WAWebMessageNotificationCallLog.react"), {
							ref: w,
							msg: c,
							contact: f,
							displayAuthor: l.displayAuthor
						})
					});
				}
				return g.jsx(r("WAWebMessageNotificationCallLog.react"), {
					ref: w,
					msg: c,
					contact: f,
					displayAuthor: l.displayAuthor
				});
			}
			case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE: {
				var ce;
				if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && (ce = M.accountLid), x === "change_number") {
					var de = $[0], me = $[1], pe = $[2], _e = $[3], fe = o("WAWebFrontendContactGetters").getFormattedName(o("WAWebContactCollection").ContactCollection.gadd(de)), ge = r("WAWebWid").equals(M.id, de), he = r("WAWebWid").equals(M.id, pe);
					H = he || ge ? s._(
						/*BTDS*/
						"",
						[s._param("name", fe)]
					) : s._(
						/*BTDS*/
						"",
						[s._param("name", fe)]
					), (he || ge) && (X = function() {
						return o("WAWebMessageNotificationHelpers.react").handleChangeNumberClick(me, de);
					});
				} else if (x === "chat_assignment" || x === "chat_assignment_unassign") {
					var ye = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = ye.text, G = ye.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), V = g.jsx("div", {
						className: "x1rg5ohu x1gslohp xbelrpt x16dsc37",
						children: g.jsx(r("WDSIconWdsIcTransferOwnership.react"), {
							width: 18,
							height: 18
						})
					}), B && o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled() && (X = function() {
						var e = o("WAWebChatCollection").ChatCollection.get(k.remote);
						e != null && o("WAWebCmd").Cmd.assignChat(e, o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.SYSTEM_MESSAGE);
					});
				} else if (x === "masked_thread_created") {
					var Ce = o("WAWebUserPrefsMeUser").getMaybeMePnUser(), be = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = be.text, G = be.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), V = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebDialpadSmallIcon.react").DialpadSmallIcon, {
							width: 16,
							height: 16
						})
					}), j = "masked_thread_created_system_message", X = function() {
						o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
							action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR,
							chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
							chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
							entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE
						}), f != null && f.shareOwnPn ? Ce != null && o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebSharePhoneNumberModal.react").PostSharePhoneNumberModal, {
							entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE,
							mePnUser: Ce
						})) : o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebSharePhoneNumberModal.react").SharePhoneNumberModal, { entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE }));
					};
				} else if (x === "cag_masked_thread_created") {
					var ve, Se = o("WAWebChatCollection").ChatCollection.get(k.remote), Re = Se == null || (ve = Se.groupMetadata) == null ? void 0 : ve.parentGroup, Le = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = Le.text, G = Le.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), V = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebDialpadSmallIcon.react").DialpadSmallIcon, {
							width: 16,
							height: 16
						})
					}), X = function() {
						Re && o("WAWebPnhCagDailyUtils").incrementPnhDailyCount(Re, o("WAWebPnhCagDailyUtils").PnhCagDailyMetricsType.PNH_INDICATOR_CLICKS_CHAT);
						var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
						if (e) {
							var t;
							o("WAWebModalManager").ModalManager.open(Se != null && (t = Se.groupMetadata) != null && t.participants.iAmAdmin() ? g.jsx(o("WAWebCagPhoneNumberPrivacyNux.react").CagPhoneNumberSharedNux, {}) : g.jsx(o("WAWebCagPhoneNumberPrivacyNux.react").CagPhoneNumberHiddenNux, {}));
						}
					};
				} else if (c.subtype === "disappearing_mode" || c.subtype === "disappearing_mode_update" || c.subtype === "disappearing_mode_unsupported") {
					var Ee = o("WAWebChatEphemerality").shouldShowEphemeralSetting(M);
					if (V = o("WAWebMessageNotificationHelpers.react").renderDisappearingIcon(), x === "disappearing_mode") {
						var ke = Ee ? o("WAWebFormatEphemeralSetting").getDefaultDisappearingModeParts(o("WAWebStateUtils").unproxy(c.unsafe())) : null;
						ke != null ? (H = ke.text, z = ke.ctaText) : H = o("WAWebFormatEphemeralSetting").getDefaultDisappearingModeSystemMessageText(o("WAWebStateUtils").unproxy(c.unsafe())), Ee && (X = function() {
							o("WAWebDrawerManager").DrawerManager.openDrawerLeft(g.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
								onClose: o("WAWebDrawerManager").closeDrawerLeft,
								entryPoint: o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.SYSTEM_MESSAGE
							}));
						});
					} else if (x === "disappearing_mode_update") {
						var Ie = r("nullthrows")(o("WAWebChatCollection").ChatCollection.get(c.id.remote));
						if (Ee) {
							var Te = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateParts(o("WAWebStateUtils").unproxy(c.unsafe()));
							H = Te.text, z = Te.ctaText, X = function() {
								return o("WAWebMessageNotificationHelpers.react").handleEphemeralClick(Ie);
							};
						} else H = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateSystemMessageText(o("WAWebStateUtils").unproxy(c.unsafe()));
					} else x === "disappearing_mode_unsupported" && (H = o("WAWebFormatEphemeralSetting").getDMUnsupportedSystemMessageText());
				} else if (x === "sender_invite") {
					var De = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = De.text, G = De.ctaText, o("WAWebStateUtils").unproxy(c.unsafe());
				} else if (x === "biz_bot_1p_disclosure") {
					var xe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = xe.text, G = xe.ctaText, o("WAWebStateUtils").unproxy(c.unsafe());
					var $e = o("WAWebBizBotConsumerContentVariant").getBizBotConsumerContentVariant();
					V = $e === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? g.jsx("div", {
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
					}), X = function() {
						o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebBizBot1pLearnMore.react"), {}));
					};
				} else if (x === "bot_init" || x === "bot_invoke_disclaimer") {
					var Pe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()), !1, O);
					H = Pe.text, G = Pe.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), X = function() {
						if (o("WAWebBotUtils").isBotChannelFBID(k.remote)) {
							var e = o("WAWebBotUtils").isHatchBot(k.remote) ? o("WAWebFaqUrl").getHatchLearnMoreUrl() : o("WAWebFaqUrl").getManusLearnMoreUrl();
							o("WAWebExternalLink.react").openExternalLink(e);
						} else o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebBotLearnMore.react"), { fromInvoke: x === "bot_invoke_disclaimer" }));
					};
				} else if (x === "change_username") {
					var Ne = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = Ne.text, G = Ne.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), j = "change_username_system_message";
				} else if (x === "change_lid") {
					var Me = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = Me.text, G = Me.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), j = "change_lid_system_message";
					var we = $.find(function(e) {
						return r("WAWebWid").isWid(e);
					}), Ae = we != null && typeof we == "string" ? o("WAWebWidFactory").createWid(we) : we;
					Ae && Ae.isLid() && (X = function() {
						o("WAWebMessageNotificationHelpers.react").handleChangeLidClick(Ae);
					});
				} else if (x === "saga_init") {
					var Fe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = Fe.text, G = Fe.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), X = function() {
						o("WAWebModalManager").ModalManager.open(o("WAWebABPropsSaga").getIsSagaV1NuxEnabled() ? g.jsx(r("WAWebSagaV1Modal.react"), {}) : g.jsx(r("WAWebSagaModal.react"), {}));
					};
				} else if (x === "biz_account_type_is_hosted" || x === "biz_account_type_changed_to_hosted") {
					var Oe = k.remote, Be = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = Be.text, G = Be.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), X = function() {
						o("WAWebOpenCoexSystemMessageModal.react").openCoexSecurityVerifySystemMessageModal({
							faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
							lid: ce,
							shouldHideVerificationButton: o("WAWebABProps").getABPropConfigValue("coex_calling_enabled"),
							text: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalText(!0),
							textLast: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextLastParagraph(),
							wid: Oe
						});
					};
				} else if (x === "biz_me_account_type_is_hosted" || x === "biz_me_account_type_is_hosted_transition") {
					var We = k.remote, qe = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = qe.text, G = qe.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), X = function() {
						o("WAWebOpenCoexSystemMessageModal.react").openCoexSecurityVerifySystemMessageModal({
							faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
							lid: ce,
							shouldHideVerificationButton: o("WAWebABProps").getABPropConfigValue("coex_calling_enabled"),
							text: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextForYourBusiness(),
							textLast: null,
							wid: We
						});
					};
				} else if (x === "is_capi_hosted_group") {
					var Ue = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = Ue.text, G = Ue.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), Q = o("WAWebFormatNotificationTemplateModalText").formatNotificationTemplateModalText(o("WAWebStateUtils").unproxy(c.unsafe())), Q != null && (X = function() {
						o("WAWebOpenSystemMessageModal").openSystemMessageModal(g.jsx(o("WAWebCAPIGroupAboutModal.react").CAPIGroupAboutModalContent, {}), o("WAWebCAPIGroupAboutModal.react").CAPI_GROUP_ABOUT_MODAL_LEARN_MORE_URL);
					});
				} else if (o("WAWebMsgGetters").getIsCAPISupport(c) && o("WAWebABPropsSaga").getIsSagaV1NuxEnabled() && (x === "biz_privacy_mode_init_fb" || x === "support_system_message")) {
					var Ve = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = Ve.text, G = Ve.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), X = function() {
						o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable, {}), { transition: "modal-flow" });
					};
				} else if (x === "marketing_messages_from_business_stopped") {
					var He = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = He.text, G = He.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), X = function() {
						M.contact.isContactOptedOut && o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebMarketingMessagesFeedbackResumeConfirmationLoadable").WAWebMarketingMessagesFeedbackResumeConfirmationLoadable, {
							chat: M,
							logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.SYSTEM_MESSAGE
						}), { transition: "default" });
					};
				} else if (x === "marketing_messages_from_business_resumed") {
					var Ge = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = Ge.text, G = Ge.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), X = function() {
						M.contact.isContactOptedOut || o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable").WAWebMarketingMessagesFeedbackStopConfirmationLoadable, {
							chat: M,
							logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.SYSTEM_MESSAGE
						}), { transition: "modal-flow" });
					};
				} else if (x === "marketing_messages_post_send_opt_out") {
					var ze = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = ze.text, G = s._(
						/*BTDS*/
						""
					), X = function() {
						M.contact.isContactOptedOut || o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable").WAWebMarketingMessagesFeedbackStopConfirmationLoadable, {
							chat: M,
							logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.POST_SEND_SYSTEM_MESSAGE
						}), { transition: "modal-flow" });
					};
				} else if (x === "limit_sharing_system_message") {
					var je = o("WAWebLimitSharingUIUtils").getLimitSharingMessageNotification(M, c);
					H = je.text, G = je.ctaText, X = je.handleClick;
				} else if (x === "mm_signal_sharing_system_message") {
					var Ke = o("WAWebMmSignalSharingUIUtils").getMmSignalSharingMessageNotification(M);
					H = Ke.text, G = Ke.ctaText, X = Ke.handleClick, V = g.jsx("div", {
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
				} else if (x === "bot_session_transparency_notice") {
					var Qe = r("nullthrows")(c.botSessionTransparencyType, "botSessionTransparencyType should not be null for bot_session_transparency_notice subtype"), Xe = o("WAWebSessionTransparencyNotification").getBotSessionTransparencySystemMessageNotification(Qe);
					H = Xe.text, X = Xe.handleClick;
				} else if (x === "biz_automatically_labeled_chat_system_message") {
					var Ye = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = Ye.text, G = Ye.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), K = "xd4r4e8 x1tawftj x14ug900", G = g.jsx(o("WAWebText.react").WAWebClickableText, {
						weight: "bold",
						color: "primary",
						children: r("WAWebFormatCTAText")({
							type: D,
							subtype: x,
							id: c.id
						})
					}), V = g.jsx("div", {
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
					}), X = function() {
						o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebDOIntroPopup.react"), {
							onContinue: function() {
								b(), o("WAWebModalManager").ModalManager.close();
							},
							surfaceType: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT
						}));
					};
				} else if (x === "biz_per_customer_3pd_data_share_opt_in" || x === "biz_per_customer_3pd_data_share_opt_out") {
					var Je, Ze;
					j = "per_customer_data_sharing_system_message";
					var et = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = et.text, K = "xd4r4e8 x1tawftj x14ug900", o("WAWebStateUtils").unproxy(c.unsafe()), G = g.jsx(o("WAWebText.react").WAWebClickableText, {
						weight: "bold",
						color: "primary",
						children: r("WAWebFormatCTAText")({
							type: D,
							subtype: x,
							id: c.id
						})
					}), V = g.jsx("div", {
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
					var tt = (Je = (Ze = M.accountLid) == null ? void 0 : Ze.toString()) != null ? Je : "";
					X = function() {
						o("WAWebPerCustomerDataSharingUtils").getModalForPerCustomerDataSharing({
							accountLid: tt,
							chat: M,
							entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.DATA_SHARING_SYSTEM_MESSAGE,
							perCustomerEntryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SYSTEM_MESSAGE
						});
					};
				} else if (x === "ctwa_consumer_data_sharing_disclosure_system_message") {
					j = "ctwa_consumer_data_sharing_disclosure_system_message";
					var nt = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = nt.text, K = "xd4r4e8 x1tawftj x14ug900", o("WAWebStateUtils").unproxy(c.unsafe()), G = g.jsx(o("WAWebText.react").WAWebClickableText, {
						weight: "bold",
						color: "primary",
						children: r("WAWebFormatCTAText")({
							type: D,
							subtype: x,
							id: c.id
						})
					}), V = g.jsx("div", {
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
					}), X = function() {
						o("WAWebConsumerTransparencyModalDialog.react").showConsumerTransparencyModalDialog();
					};
				} else if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && x === "group_transition_to_bot_group") {
					var rt = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = rt.text, o("WAWebStateUtils").unproxy(c.unsafe()), X = function() {
						o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebOpenBotGroupOpenAddedModal.react"), {}));
					};
				} else if (x === "biz_broadcast_status") {
					var ot, at = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					H = at.text, G = s._(
						/*BTDS*/
						""
					);
					var it = ((ot = c.templateParams) == null ? void 0 : ot[0]) != null ? Number(c.templateParams[0].toString()) : 0;
					it > 0 ? V = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebSpinner.react").Spinner, { size: 16 })
					}) : V = g.jsx("div", {
						className: "x1rg5ohu x2fvf9 xg49k01",
						children: g.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, {
							width: 16,
							height: 16
						})
					}), X = function() {
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.bbThreadSystemMessageCtaClicked(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(g.jsx(o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable, {
							entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
							onClose: function() {
								return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
							}
						}));
					}, j = "biz_broadcast_status_system_message";
				} else {
					var lt = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(c.unsafe()));
					if (H = lt.text, G = lt.ctaText, o("WAWebStateUtils").unproxy(c.unsafe()), Q = o("WAWebFormatNotificationTemplateModalText").formatNotificationTemplateModalText(o("WAWebStateUtils").unproxy(c.unsafe())), Q != null) {
						var st = r("WAWebNotificationTemplateFaq")(x, c.id.remote);
						X = function() {
							o("WAWebOpenSystemMessageModal").openSystemMessageModal(Q, st);
						};
					}
				}
				o("WAWebMessageNotificationHelpers.react").showInfoIcon(D, x) && (V = g.jsx("div", {
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
				var ut = T, ct = k.remote, dt = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
				if (x === "ephemeral_setting") {
					if (o("WAWebChatEphemerality").shouldShowEphemeralSetting(M)) {
						var mt = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateParts(o("WAWebStateUtils").unproxy(c.unsafe()));
						H = mt.text, z = mt.ctaText, X = function() {
							o("WAWebMessageNotificationHelpers.react").handleEphemeralClick(M);
						};
					} else H = o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateSystemMessageText(o("WAWebStateUtils").unproxy(c.unsafe()));
					V = o("WAWebMessageNotificationHelpers.react").renderDisappearingIcon(), j = "ephemeral_system_message";
				} else if (x === "share_phone_number") H = r("WAWebFormatSharePhoneNumber")(ut, ct, k.fromMe), X = function() {
					dt != null && o("WAWebModalManager").ModalManager.open(g.jsx(o("WAWebSharePhoneNumberModal.react").PostSharePhoneNumberModal, { mePnUser: dt }));
				}, V = g.jsx("div", {
					className: "x1rg5ohu x2fvf9 xg49k01",
					children: g.jsx(o("WAWebDialpadSmallIcon.react").DialpadSmallIcon, {
						width: 16,
						height: 16
					})
				}), j = "share_phone_number_system_message";
				else if (x === "event_edit_decrypted") {
					var pt = o("WAWebStateUtils").unproxy(c.unsafe()), _t = o("WAWebMsgCollection").MsgCollection.get(pt.protocolMessageKey);
					H = o("WAWebEventsFormatEventEditNotification").formatEventEditNotification(pt), G = _t ? r("WAWebFormatCTAText")({
						type: D,
						subtype: x
					}) : "", X = function() {
						if (_t != null) {
							var e = o("WAWebFrontendMsgGetters").getAsEventCreation(_t);
							e != null && o("WAWebCmd").Cmd.openEventInfoDrawer(M, e);
						}
					};
				} else if (x === "limit_sharing_system_message") {
					var ft = o("WAWebLimitSharingUIUtils").getLimitSharingMessageNotification(M, c);
					H = ft.text, G = ft.ctaText, X = ft.handleClick;
				} else if (x === "mm_signal_sharing_system_message") {
					var gt = o("WAWebMmSignalSharingUIUtils").getMmSignalSharingMessageNotification(M);
					H = gt.text, G = gt.ctaText, X = gt.handleClick, V = g.jsx("div", {
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
				H = o("WAWebPollsFormatPollAddOptionNotification").formatPollAddOptionNotification(o("WAWebStateUtils").unproxy(c).unsafe()), G = r("WAWebFormatCTAText")({ type: D }), j = "poll_add_option_system_message";
				var ht = o("WAWebStateUtils").unproxy(c.unsafe()).parentMsgKey;
				X = function() {
					var e = ht != null ? o("WAWebMsgCollection").MsgCollection.get(ht) : null;
					if (e != null && o("WAWebFrontendMsgGetters").getAsPollCreation(e) != null) {
						var t = o("WAWebChatMessageSearch").getSearchContext({
							chat: M,
							msgKey: e.id
						});
						o("WAWebCmd").Cmd.openChatAt({
							chat: M,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatPollNotification,
							msgContext: t
						});
					}
				};
				break;
			}
			case o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE: {
				H = o("WAWebFormatPinInChatNotification").formatPinInChatNotification(o("WAWebStateUtils").unproxy(c).unsafe()), j = "pinned_message_system_message";
				break;
			}
		}
		var yt = g.jsx(o("WAWebEmojiText.react").EmojiText, {
			direction: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
			text: H,
			breakWord: !0
		}), Ct = function() {
			var e = !(M.msgs.some(function(e) {
				return o("WAWebMsgGetters").isRealMessage(e);
			}) || M.endOfHistoryTransferType === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE), t = o("WAWebSystemMessageWithSingleCTA.react").getSystemMessageCategoryType(D);
			t != null && Y != null && o("WAWebLogSystemMessageClick").logSystemMessageClick({
				isAGroup: o("WAWebChatGetters").getIsGroup(M),
				isANewThread: e,
				systemMessageCategory: t,
				systemMessageType: Y
			});
		}, bt;
		if (o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() && G != null) bt = g.jsx(o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA, {
			bodyText: yt,
			ctaText: G,
			className: K,
			icon: V,
			onClick: function() {
				Ct(), X == null || X();
			},
			onclickRef: L,
			testid: j != null ? j : "system_message"
		});
		else if (z != null) {
			var vt = g.jsxs("span", {
				"data-testid": j != null ? j : "system_message",
				children: [
					V,
					yt,
					" ",
					g.jsx("span", babelHelpers.extends({}, (_ || (_ = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized), { children: z }))
				]
			});
			if (X) return g.jsx("div", {
				role: "button",
				ref: L,
				onClick: function() {
					Ct(), X == null || X();
				},
				children: vt
			});
			bt = vt;
		} else if (bt = g.jsxs("span", {
			"data-testid": j != null ? j : "system_message",
			children: [V, yt]
		}), X) return g.jsx("div", {
			role: "button",
			ref: L,
			onClick: function() {
				o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() && Ct(), X == null || X();
			},
			children: bt
		});
		return g.jsx("span", { children: bt });
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 226);
