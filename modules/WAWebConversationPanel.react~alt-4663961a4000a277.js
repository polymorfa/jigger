__d("WAWebConversationPanel.react", [
	"WAFilteredCatch",
	"WAPromiseRaceAbort",
	"WAWebAnimationGroupItem.react",
	"WAWebAppContext.react",
	"WAWebAttachmentMenuLogger",
	"WAWebBizAiAgentGating",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizAiThreadControlFab.react",
	"WAWebBotUtils",
	"WAWebCappingWarningBannerLoadable",
	"WAWebCaptureMediaDrawerLoadable",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebCmd",
	"WAWebComposeBox.react",
	"WAWebConversationBackground.react",
	"WAWebConversationDeprecatedLidChatBanner.react",
	"WAWebConversationDeprecatedLidChatUtils",
	"WAWebConversationMsgs.react",
	"WAWebConversationPanelBanner.react",
	"WAWebConversationSpam.react",
	"WAWebConversationSpamUtils",
	"WAWebDrawerManager",
	"WAWebForwardActionUserJourneyLogger",
	"WAWebFrontendChatGetters",
	"WAWebGetUserMediaErrors",
	"WAWebGroupHistoryBundleInfoContextProvider.react",
	"WAWebGroupType",
	"WAWebGuidePopup.react",
	"WAWebHeader.react",
	"WAWebHeroInteraction.react",
	"WAWebInteractionTracePolicy",
	"WAWebKeyboardTabUtils",
	"WAWebMediaCapture",
	"WAWebMediaCaptureStreamType",
	"WAWebMetaAiChatNullStateLoadable",
	"WAWebModalManager",
	"WAWebMultiSelectBar.react",
	"WAWebNewsletterSuspendedConversationPanelBody.react",
	"WAWebPrepareMessageSendingAction",
	"WAWebSideNavButtonsActivityModel",
	"WAWebSignupGating",
	"WAWebSignupLoadingSpinner.react",
	"WAWebStateUtils",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebUimUie.react",
	"WAWebUseMaybeInsertBizBotDisclosure",
	"WAWebUseMaybeRequestWelcomeMessage",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumProductArea",
	"react",
	"useWAWebAiChatOpenMetrics",
	"useWAWebBotChatOpenMetrics",
	"useWAWebBroadcastThreadOpenMetrics",
	"useWAWebCappingWarningBanner.react",
	"useWAWebChatOpenMetrics",
	"useWAWebChatThreadWallpaperMetrics",
	"useWAWebCommunityNux",
	"useWAWebConversationPanelActionListeners",
	"useWAWebConversationPanelCanCompose",
	"useWAWebConversationPanelChatActionListeners",
	"useWAWebConversationPanelDragHandlers",
	"useWAWebConversationPanelEphemeralNux",
	"useWAWebConversationPanelFiller.react",
	"useWAWebConversationPanelMessageSelection",
	"useWAWebConversationPanelMetrics",
	"useWAWebConversationPanelOpenChat",
	"useWAWebDynamicModesCacheWarmup",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebNewsletterOpenMetrics",
	"useWAWebNewsletterPrivacyBanner",
	"useWAWebShouldShowMetaAiNullState",
	"useWAWebShowCommunitySubjectSyncIssue",
	"useWAWebUIM",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useRef, _ = u.useState;
	function f(e) {
		var t, n, a, i, l, u, f = e.chat, g = e.chatEntryPoint, h = e.focusCtx, y = e.groupMetadata, C = e.msgCollection, b = e.threadId, v = p(null), S = _(!1), R = S[0], L = S[1], E = c(function(e) {
			e !== R && L(e);
		}, [R]), k = m(function() {
			return o("WAWebConversationDeprecatedLidChatUtils").getLidDeprecatedInfo(f);
		}, [f]);
		r("useWAWebShowCommunitySubjectSyncIssue")(f), r("useWAWebConversationPanelOpenChat")(f), r("useWAWebCommunityNux")(f), r("useWAWebConversationPanelEphemeralNux")(f), o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
			surface: o("WAWebChatGetters").getIsNewsletter(f) ? "channel-thread" : "chat",
			extras: {
				groupSize: o("WAWebChatGetters").getIsNewsletter(f) ? (t = f.newsletterMetadata) == null ? void 0 : t.size : (n = f.groupMetadata) == null ? void 0 : n.participants.length,
				channelWid: o("WAWebChatGetters").getIsNewsletter(f) ? f.id : void 0,
				typeOfGroup: f.groupMetadata == null ? void 0 : o("WAWebGroupType").groupTypeToWamEnum(o("WAWebGroupType").getGroupTypeFromGroupMetadata(f.groupMetadata)),
				navigationDestinationProductArea: o("WAWebBotUtils").isHatchBot(f.id) ? o("WAWebWamEnumProductArea").PRODUCT_AREA.AI_HATCH : void 0
			}
		}), r("useWAWebConversationPanelMetrics")(f, function() {
			var e;
			return (e = v.current) == null ? void 0 : e.getRenderedMessageCount();
		}), o("useWAWebNewsletterOpenMetrics").useNewsletterOpenMetrics({
			chat: f,
			chatEntryPoint: g
		}), o("useWAWebBotChatOpenMetrics").useBotChatOpenMetrics({
			chat: f,
			chatEntryPoint: g
		}), o("useWAWebAiChatOpenMetrics").useWAWebAiChatOpenMetrics({
			chat: f,
			chatEntryPoint: g
		}), o("useWAWebDynamicModesCacheWarmup").useWAWebDynamicModesCacheWarmup(f), o("useWAWebChatOpenMetrics").useChatOpenMetrics(f), o("useWAWebChatThreadWallpaperMetrics").useChatThreadWallpaperMetrics(f), o("useWAWebBroadcastThreadOpenMetrics").useBroadcastThreadOpenMetrics(f), r("useWAWebConversationPanelChatActionListeners")(), o("useWAWebModelValues").useModelValues(f, [
			"isReadOnly",
			"isAnnounceGrpRestrict",
			"newsletterMetadata"
		]);
		var I = r("useWAWebNewsletterPrivacyBanner")(f), T = r("useWAWebConversationPanelCanCompose")(f), D = T[0], x = T[1];
		o("WAWebUseMaybeInsertBizBotDisclosure").useMaybeInsertBizBotDisclosure(f);
		var $ = _(function() {
			return !D && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(f) && o("WAWebConversationSpamUtils").shouldShowSpamPanel(f);
		}), P = $[0], N = $[1], M = r("useWAWebConversationPanelMessageSelection")(f.msgs), w = M.handleCancelSelection, A = M.handleMessageSelect, F = M.handleSelectMessages, O = M.selectable, B = M.selectedMessages, W = M.selectionMode, q = r("useWAWebConversationPanelDragHandlers")(f, {
			canCompose: D,
			onDragEnter: w,
			threadId: b
		}), U = q[0], V = q[1], H = r("useWAWebConversationPanelFiller.react")({
			canCompose: D,
			selectable: O,
			setScrollBottom: function(t) {
				var e;
				return (e = v.current) == null ? void 0 : e.setScrollBottom(t);
			},
			getScrollBottom: function() {
				var e;
				return (e = v.current) == null ? void 0 : e.getScrollBottom();
			},
			onComposeHeightChange: function(t) {
				var e;
				return (e = v.current) == null ? void 0 : e.onComposeHeightChange(t);
			}
		}), G = H.filler, z = H.handleComposeHeightChange, j = H.msgPanelRef, K = function() {
			var e;
			(e = v.current) == null || e.focus();
		}, Q = p(null), X = o("WAWebAppContext.react").useAppContext(), Y = X.rightDrawerOpen, J = r("useWAWebUIM")(), Z = r("useWAWebUnmountSignal")();
		d(function() {
			return function() {
				Q.current == null || Q.current(), o("WAWebSideNavButtonsActivityModel").getLastActiveButton() == null && o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
			};
		}, []), r("useWAWebConversationPanelActionListeners")({ onFocus: K }), o("WAWebUseMaybeRequestWelcomeMessage").useMaybeRequestWelcomeMessage(f);
		var ee = r("useWAWebShouldShowMetaAiNullState")(f, b), te = ee[0], ne = ee[1], re = r("useWAWebCappingWarningBanner.react")(f), oe = re[0], ae = re[1], ie = r("useWAWebEventTargetValue")(f.newsletterMetadata, ["change:suspended"], function() {
			var e;
			return o("WAWebChatGetters").getIsNewsletter(f) && ((e = f.newsletterMetadata) == null ? void 0 : e.suspended) === !0;
		}), le = r("useWAWebEventTargetValue")(f.newsletterMetadata, ["change:geosuspended"], function() {
			var e;
			return o("WAWebChatGetters").getIsNewsletter(f) && ((e = f.newsletterMetadata) == null ? void 0 : e.geosuspended) === !0;
		}), se = function(t) {
			var e;
			(e = v.current) == null || e.onPageUpDown(t);
		}, ue, ce;
		if (O) ce = s.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MultiSelect",
			escapable: !0,
			requestDismiss: w,
			children: s.jsx(o("WAWebMultiSelectBar.react").MultiSelectBar, {
				chat: f,
				selectedMessages: B,
				noSortOnForward: !1,
				onCancel: w,
				entryPoint: o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.CONVERSATION_PANEL,
				mode: W
			})
		}), ue = s.jsx("footer", babelHelpers.extends({}, {
			0: { className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht" },
			1: { className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht x1lun4ml x18b5jzi xbogo7e" }
		}[!!Y << 0]));
		else if (D) ue = s.jsx(o("WAWebComposeBox.react").ComposeBox, {
			chat: f,
			threadId: b,
			ref: U,
			canShowSpamPanel: R,
			onComposeHeightChange: z,
			onPageUpDown: se
		});
		else {
			var de = x != null ? x : I, me = null;
			R && P && o("WAWebFrontendChatGetters").getShouldAppearInList(f) && f.msgs.length > 0 && (me = s.jsx(r("WAWebAnimationGroupItem.react"), { children: s.jsx(r("WAWebConversationSpam.react"), {
				chat: f,
				onClickNotSpam: function() {
					N(!1), o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(f);
				},
				onClickDismissSpam: function() {
					return N(!1);
				}
			}) })), ue = de != null && s.jsxs("footer", babelHelpers.extends({ "data-testid": "compose-box" }, {
				0: { className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht" },
				1: { className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht x1lun4ml x18b5jzi xbogo7e" }
			}[!!Y << 0], { children: [me, s.jsx("div", {
				"data-testid": "block-message",
				className: "x9f619 x78zum5 x6s0dn4 xl56j7k x122xwht x1f6kntn x1fc57z9 xhslqc4 x2b8uid x1h3rtpe xyinxu5 x1g2khh7 xwn43p0 x1x5flf6",
				children: de
			})] }));
		}
		var pe;
		D || (pe = s.jsx(o("WAWebComposeBox.react").PlaceholderComposeBox, {
			chat: f,
			handleFocus: function() {
				var e;
				v == null || (e = v.current) == null || e.focus();
			}
		}));
		var _e = function(t) {
			var e = t.onMenuComplete, n = t.questionReplyQuotedMessage, a = t.questionType, i = t.threadId, l = o("WAWebMediaCapture").start({
				type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA,
				featureSurface: o("WAWebGuidePopup.react").FeatureSurface.PHOTO_CAPTURE
			}), u = l.asyncStream, c = l.disposeStream;
			Q.current = c, r("WAPromiseRaceAbort")(u, Z).then(function(t) {
				t && (o("WAWebCmd").Cmd.closeContextMenu(), o("WAWebCmd").Cmd.closeTooltip(), o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerMid(s.jsx(o("WAWebCaptureMediaDrawerLoadable").CaptureMediaDrawerLoadable, {
					chat: o("WAWebStateUtils").unproxy(f),
					stream: t,
					disposeStream: Q.current,
					onCaptureSent: function() {
						e(!0), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(f, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CAMERA);
					},
					onCancel: function() {
						o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(f, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CAMERA);
					},
					onClose: function() {
						return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
					},
					questionType: a,
					questionReplyQuotedMessage: n,
					threadId: i != null ? i : b
				}), {
					transition: "slide-up",
					uim: J,
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				}));
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").NotAllowedError, function() {
				var e;
				o("WAWebModalManager").ModalManager.open(s.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.CAMERA_FAIL,
					type: e.GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: e.FeatureSurface.PHOTO_CAPTURE
				}));
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").GetUserMediaError, function() {
				var e;
				o("WAWebModalManager").ModalManager.open(s.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.CAMERA_MISSING,
					type: e.GuidePopupType.GUIDE_NONE,
					featureSurface: e.FeatureSurface.PHOTO_CAPTURE
				}));
			})).finally(function() {
				o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(f);
			});
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_capture_media", _e);
		var fe = k.isLidDeprecated ? s.jsx(r("WAWebConversationDeprecatedLidChatBanner.react"), { latestLid: k.latestLid }, "deprecated-lid") : null, ge = c(function() {
			o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.selectTappedInContextMenu(), F();
		}, [F]), he = c(function() {
			o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.selectTappedInMoreMenu(), F();
		}, [F]), ye = [fe, o("WAWebSignupGating").isSignupAGMEnabled() ? s.jsx(r("WAWebSignupLoadingSpinner.react"), { chat: f }, "signup-loading") : null], Ce = {
			ref: v,
			chat: f,
			selectable: O,
			onMessageSelect: A,
			onCancelSelectMessages: w,
			msgCollection: C,
			onSelectMessages: ge,
			focusCtx: h,
			threadId: b,
			selectedMessages: B,
			notifyChatRendered: e.notifyChatRendered,
			updateOpenedChatInfo: e.updateOpenedChatInfo,
			updateCanShowSpamPanel: E,
			bottomBanners: ye
		}, be = s.jsx(r("WAWebHeroInteraction.react"), {
			description: "ConversationMsgs",
			enableHoldTrigger: !0,
			policy: r("WAWebInteractionTracePolicy").LOAD_MESSAGES,
			children: function(t, n) {
				return s.jsx("div", {
					ref: t,
					className: "x5yr21d",
					children: s.jsx(r("WAWebConversationMsgs.react"), babelHelpers.extends({}, Ce, { interaction: n }))
				});
			}
		}), ve = ie ? s.jsx(r("WAWebNewsletterSuspendedConversationPanelBody.react"), {
			isGeosuspended: le,
			isAdminOrOwner: ((a = (i = f.newsletterMetadata) == null ? void 0 : i.iAmOwner()) != null ? a : !1) || ((l = (u = f.newsletterMetadata) == null ? void 0 : u.iAmAdmin()) != null ? l : !1)
		}) : be, Se = D && o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(f) && !o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(f) && o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled() && !o("WAWebBizAiAgentGating").isSmartComposerWebEnabled();
		return s.jsxs(r("WAWebGroupHistoryBundleInfoContextProvider.react"), { children: [
			s.jsx(r("WAWebConversationBackground.react"), {
				wallpaper: e.wallpaper,
				showDoodle: e.showDoodle
			}),
			s.jsx(o("WAWebHeader.react").ConversationHeaderWithErrorBoundary, {
				chat: f,
				onSelectMessages: he,
				selectable: O,
				threadId: b
			}),
			s.jsx(r("WAWebConversationPanelBanner.react"), {
				chat: f,
				groupMetadata: y
			}),
			s.jsx("div", babelHelpers.extends({
				className: "x1n2onr6 x1vjfegm x1cqoux5 x14yy4lh",
				ref: j
			}, V, {
				"data-testid": "conversation-panel-body",
				children: te ? s.jsx(o("WAWebMetaAiChatNullStateLoadable").WAWebMetaAiChatNullStateLoadable, {
					chat: f,
					onDismiss: ne,
					threadId: b
				}) : ve
			})),
			G,
			Se && s.jsx(o("WAWebBizAiThreadControlFab.react").WAWebBizAiThreadControlFab, { chat: f }),
			oe && s.jsx("div", {
				className: "xo1ph6p x2lah0s",
				children: s.jsx(o("WAWebCappingWarningBannerLoadable").CappingWarningBannerLoadable, { onClose: ae })
			}),
			ue,
			pe,
			s.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "slide-up",
				children: ce
			})
		] });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
