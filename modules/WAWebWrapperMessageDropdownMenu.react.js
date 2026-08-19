__d("WAWebWrapperMessageDropdownMenu.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebABPropsSaga",
	"WAWebAuraGating",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBotBaseGating",
	"WAWebBotForwardCapability",
	"WAWebBotGating",
	"WAWebBotSourcesDrawerLoadable",
	"WAWebBotTos",
	"WAWebBotUtils",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebChatCommunityUtils",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebCopyStickerToClipboard",
	"WAWebCopyToClipboard",
	"WAWebCopyUtils",
	"WAWebDebugGatingUtils",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebDropdownItemSeparator.react",
	"WAWebEnvironment",
	"WAWebExternalLink.react",
	"WAWebFavoriteStickerAction",
	"WAWebFileSaver",
	"WAWebForwardActionUserJourneyLogger",
	"WAWebForwardCreateBroadcastButton.react",
	"WAWebFrontendMsgGetters",
	"WAWebGoogleCalendarLink",
	"WAWebGroupType",
	"WAWebIcShareWindowsIcon.react",
	"WAWebInMemoryLottieStickerCache",
	"WAWebIsInThreadsViewContext",
	"WAWebKeepInChatMsgUtils",
	"WAWebLid1X1MigrationGating",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaTypes",
	"WAWebMegaphoneRefreshedIcon.react",
	"WAWebMessageContextMenuActionsWamEvent",
	"WAWebMessageDebugMenuItems.react",
	"WAWebMetaAiRingAssetResolver",
	"WAWebMiscGatingUtils",
	"WAWebMsgActionCanDownloadMsg",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgInfoUtils",
	"WAWebMsgModelUtils",
	"WAWebMsgReply",
	"WAWebMsgType",
	"WAWebNewsletterPinGatingUtils",
	"WAWebNewsletterPinMessageFlow",
	"WAWebNotesLogEvents",
	"WAWebNotesUtils",
	"WAWebNumbersIcon.react",
	"WAWebQbmMessageLevelActionEvent",
	"WAWebReactionsUtils",
	"WAWebReplyPrivatelyRefreshedIcon.react",
	"WAWebSharableEventGatingUtils",
	"WAWebSharableEventInviteCoerceTimestampSeconds",
	"WAWebStickerPremiumStatus",
	"WAWebStickerUtils",
	"WAWebUnifiedResponseUtils",
	"WAWebViewRepliesMenuItem.react",
	"WAWebWamEnumMessageActionEntryPoint",
	"WAWebWamEnumMessageContextMenuActionType",
	"WAWebWamEnumMessageContextMenuOptionType",
	"WAWebWamEnumMessageLevelAction",
	"WDSIconIcAdd.react",
	"WDSIconIcBookmark.react",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcCheckBox.react",
	"WDSIconIcCode.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcDelete.react",
	"WDSIconIcDownload.react",
	"WDSIconIcEdit.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcFavorite.react",
	"WDSIconIcFavoriteFilled.react",
	"WDSIconIcGrade.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLanguage.react",
	"WDSIconIcLink.react",
	"WDSIconIcMessageReport.react",
	"WDSIconIcMood.react",
	"WDSIconIcOpenInNew.react",
	"WDSIconIcPushPin.react",
	"WDSIconIcReply.react",
	"WDSIconIcThumbDown.react",
	"WDSIconIcThumbUp.react",
	"WDSIconWdsIcAiContent.react",
	"WDSIconWdsIcBookmarkSlash.react",
	"WDSIconWdsIcChat.react",
	"WDSIconWdsIcGradeSlash.react",
	"WDSIconWdsIcPushPinSlash.react",
	"WDSIconWdsIcSticker.react",
	"WDSMenuItem.react",
	"cr:23046",
	"cr:40048",
	"cr:7565",
	"react",
	"useWAWebIsNewsletterMsgPinned",
	"useWAWebIsPinnedMsg"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useContext;
	function m(e, t) {
		new (o("WAWebMessageContextMenuActionsWamEvent")).MessageContextMenuActionsWamEvent({
			isAGroup: o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(e)),
			isMultiAction: !1,
			isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(e),
			messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType").MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
			messageContextMenuOption: t
		}).commit();
	}
	function p(e) {
		new (o("WAWebMessageContextMenuActionsWamEvent")).MessageContextMenuActionsWamEvent({
			isAGroup: o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(e)),
			isMultiAction: !1,
			isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(e),
			messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType").MESSAGE_CONTEXT_MENU_ACTION_TYPE.OPEN
		}).commit();
	}
	function _(e) {
		var t = e.isFileInCache, n = e.mediaData, r = e.msg;
		return n != null && !r.isViewOnce && (n.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED || n.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT && t);
	}
	function f(t) {
		var a, i, l, u, f, h, y, C, b = t.associatedMessages, v = t.displayType, S = t.isFileInCache, R = S === void 0 ? !1 : S, L = t.msg, E = t.onAddAiContentLabelClick, k = t.onAddPaidPartnershipLabelClick, I = t.onAddToNoteClick, T = t.onAskMetaAiClick, D = t.onBotNegativeFeedbackClick, x = t.onBotPositiveFeedbackClick, $ = t.onCopyFavoriteStickerClick, P = t.onCopyLottieStickerClick, N = t.onEditClick, M = t.onFavoriteStickerClick, w = t.onForwardClick, A = t.onKeepClick, F = t.onMessageDeleteClick, O = t.onMessageDocumentCopyClick, B = t.onMessageDownloadClick, W = t.onMessageSaveAsClick, q = t.onMessageSelectClick, U = t.onMsgInfoClick, V = t.onNewsletterEmbedClick, H = t.onNewsletterMessageLinkCopyClick, G = t.onOpenContactChatClick, z = t.onOpenStickerPackClick, j = t.onPinClick, K = t.onPrivateReplyClick, Q = t.onReactionClick, X = t.onReplyClick, Y = t.onReportClick, J = t.onRTAClick, Z = t.onShareClick, ee = t.onStarClick, te = t.onSupportBotNegativeFeedbackClick, ne = t.onSupportBotPositiveFeedbackClick, re = t.onUndoKeepClick, oe = t.onUnfavoriteStickerClick, ae = t.onUnpinClick, ie = t.onUnstarClick, le = t.rightClickedLinkHref;
		p(L);
		var se = o("WAWebFrontendMsgGetters").getChat(L), ue = r("useWAWebIsPinnedMsg")(L.id), ce = r("useWAWebIsNewsletterMsgPinned")(L), de = ue || ce, me = d(r("WAWebIsInThreadsViewContext")), pe = o("WAWebViewRepliesMenuItem.react").useViewRepliesMenuItems(L, se), _e = [];
		if (v === o("WAWebDisplayType").DISPLAY_TYPE.EDITING) return _e;
		if (v !== o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO && o("WAWebMsgInfoUtils").canOpenInfoDrawer(L.unsafe())) {
			var fe = s._(
				/*BTDS*/
				""
			);
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcInfo.react"),
				title: fe,
				onPress: function() {
					U(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.MESSAGE_INFO);
				},
				testid: "mi-msg-info"
			}, "info"));
		}
		var ge = s._(
			/*BTDS*/
			""
		);
		if (o("WAWebMsgReply").canReplyMsg(L) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcReply.react"),
			iconDirectional: !0,
			title: ge,
			onPress: function() {
				X(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY);
			},
			testid: "mi-msg-reply"
		}, "reply")), o("WAWebMsgReply").canPrivateReply(L) || o("WAWebMsgReply").canPrivateReplyInRestrictedGrp(L)) {
			var he = s._(
				/*BTDS*/
				""
			);
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: o("WAWebReplyPrivatelyRefreshedIcon.react").ReplyPrivatelyRefreshedIcon,
				title: he,
				onPress: function() {
					K(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY_PRIVATELY);
				},
				testid: "mi-msg-reply"
			}, "private_reply"));
		}
		var ye = !(se.isSuspendedOrTerminated() && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) && !o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(L) && !((a = L.author) != null && a.isLid() && ((i = se.groupMetadata) == null ? void 0 : i.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) && !o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(se, o("WAWebFrontendMsgGetters").getSenderObj(L)) && !(L.author != null && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(L.author));
		if (o("WAWebMsgGetters").getIsGroupMsg(L) && L.author && !o("WAWebMsgGetters").getIsSentByMe(L) && ye) {
			var Ce = s._(
				/*BTDS*/
				"",
				[s._param("author", o("WAWebMsgModelUtils").getMsgDisplayName(L))]
			);
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcChat.react"),
				title: Ce,
				onPress: function() {
					G(o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.MESSAGE_CONTACT);
				},
				testid: "mi-msg-author",
				truncateText: !0
			}, "author"));
		}
		var be = L.mediaData, ve = (l = (u = window.getSelection()) == null ? void 0 : u.toString()) != null ? l : "", Se = s._(
			/*BTDS*/
			""
		), Re = s._(
			/*BTDS*/
			""
		);
		if (ve.length > 0 ? _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcContentCopy.react"),
			title: Re,
			onPress: function() {
				o("WAWebCopyToClipboard").copyTextToClipboard(ve), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
					msg: L,
					chat: o("WAWebFrontendMsgGetters").getChat(L),
					messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.COPY,
					messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
				});
			},
			testid: "copy-selected-text-label"
		}, "copy-selected-text")) : r("WAWebEnvironment").isWindows && n("cr:7565") != null && n("cr:7565").supportsMediaFileCopy() && _({
			isFileInCache: R,
			mediaData: be,
			msg: L
		}) ? _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcContentCopy.react"),
			title: Se,
			onPress: function() {
				O(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
					msg: L,
					chat: o("WAWebFrontendMsgGetters").getChat(L),
					messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.COPY,
					messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
				});
			},
			testid: "copy-label"
		}, "copy")) : ve.length === 0 && o("WAWebCopyUtils").canCopyMessage(L) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcContentCopy.react"),
			title: Se,
			onPress: function() {
				o("WAWebCopyUtils").copyMessageToClipboard(L), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
					msg: L,
					chat: o("WAWebFrontendMsgGetters").getChat(L),
					messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.COPY,
					messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
				});
			},
			testid: "copy-label"
		}, "copy")), le != null && o("WAWebABProps").getABPropConfigValue("wa_web_copy_link_url_enabled")) {
			var Le = s._(
				/*BTDS*/
				""
			);
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcLink.react"),
				title: Le,
				onPress: function() {
					o("WAWebCopyToClipboard").copyTextToClipboard(le), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_LINK_URL);
				},
				testid: "mi-msg-copy-link-url"
			}, "copy-link-url"));
		}
		if (!o("WAWebReactionsUtils").isContextMenuReactiondEnabled() && o("WAWebReactionsUtils").canReactToMessage(L) && (v === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION || v === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER)) {
			var Ee = s._(
				/*BTDS*/
				""
			);
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcMood.react"),
				title: Ee,
				onPress: function() {
					Q(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REACT);
				},
				testid: "react-to-message"
			}, "react-to-message"));
		}
		var ke = s._(
			/*BTDS*/
			""
		);
		!r("WAWebEnvironment").isWindows && o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(L, !0) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDownload.react"),
			title: ke,
			onPress: function() {
				B(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD);
			},
			testid: "mi-msg-download"
		}, "download"));
		var Ie = s._(
			/*BTDS*/
			""
		);
		!me && o("WAWebMsgActionCapability").canForwardMsg(L) ? (o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.contextMenuShownWithForward(se.id, L), _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcFastForward.react"),
			iconDirectional: !0,
			title: Ie,
			onPress: function() {
				w(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.FORWARD), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
					msg: L,
					chat: o("WAWebFrontendMsgGetters").getChat(L),
					messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.FORWARD,
					messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
				}), o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.forwardTappedInContextMenu();
			},
			testid: "mi-msg-forward"
		}, "forward"))) : me || o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.contextMenuShownWithoutForward(se.id, L), !me && o("WAWebMsgActionCapability").canForwardMsg(L) && g(L) && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported() && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastContextualEntrypointsEnabled() && _e.push(c.jsx(r("WAWebForwardCreateBroadcastButton.react"), {
			msg: L,
			variant: "menu-item"
		}, "send-as-business-broadcast")), _e.push.apply(_e, pe);
		var Te = s._(
			/*BTDS*/
			""
		), De = ce && o("WAWebNewsletterPinGatingUtils").isChannelMessagePinAdminEnabled() && ((f = (h = se.newsletterMetadata) == null ? void 0 : h.iAmAdminOrOwner()) != null ? f : !1);
		if (ue || De) {
			var xe = function() {
				o("WAWebMsgGetters").getIsNewsletterMsg(L) ? o("WAWebNewsletterPinMessageFlow").runUnpinNewsletterMessageFlow(se, L) : ae(), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
					msg: L,
					chat: o("WAWebFrontendMsgGetters").getChat(L),
					messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.UNPIN_MESSAGE,
					messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
				}), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.PIN_OR_UNPIN);
			};
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcPushPinSlash.react"),
				title: Te,
				onPress: xe,
				testid: "mi-msg-unpin"
			}, "unpin"));
		}
		var $e = s._(
			/*BTDS*/
			""
		), Pe = o("WAWebFrontendMsgGetters").getAsSharableEventInvite(L);
		if (Pe != null && o("WAWebSharableEventGatingUtils").isSharableEventInviteDatetimeEnabled() && Pe.sharableEventInviteIsCanceled !== !0 && o("WAWebSharableEventGatingUtils").isSharableEventAddToCalendarEnabled(o("WAWebSharableEventGatingUtils").SharableEventAddToCalendarEntryPoint.MessageContextMenu)) {
			var Ne = r("WAWebSharableEventInviteCoerceTimestampSeconds")(Pe.sharableEventInviteStartTime), Me = r("WAWebSharableEventInviteCoerceTimestampSeconds")(Pe.sharableEventInviteEndTime);
			if (Ne != null && !o("WAWebSharableEventGatingUtils").isAddToCalendarHiddenByEventTime(Ne, Me)) {
				var we = function() {
					o("WAWebExternalLink.react").openExternalLink(r("WAWebGoogleCalendarLink")({
						title: Pe.sharableEventInviteTitle,
						description: Pe.sharableEventInviteCaption,
						startTimeUnixSeconds: Ne,
						endTimeUnixSeconds: Me
					})), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.ADD_TO_CALENDAR);
				};
				_e.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcCalendarMonth.react"),
					title: $e,
					onPress: we,
					testid: "mi-msg-add-to-calendar"
				}, "add-to-calendar"));
			}
		}
		var Ae = s._(
			/*BTDS*/
			""
		);
		if (!de && o("WAWebMsgActionCapability").canPinMsg(L)) {
			var Fe = function() {
				o("WAWebMsgGetters").getIsNewsletterMsg(L) ? o("WAWebNewsletterPinMessageFlow").runPinNewsletterMessageFlow(se, L) : j(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.PIN_OR_UNPIN), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
					msg: L,
					chat: o("WAWebFrontendMsgGetters").getChat(L),
					messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.PIN_MESSAGE,
					messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
				});
			};
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcPushPin.react"),
				title: Ae,
				onPress: Fe,
				testid: "mi-msg-pin"
			}, "pin"));
		}
		var Oe = s._(
			/*BTDS*/
			""
		);
		o("WAWebMsgGetters").getIsKept(L) && o("WAWebKeepInChatMsgUtils").canShowUnkeepOption(L) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconWdsIcBookmarkSlash.react"),
			title: Oe,
			onPress: function() {
				re(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.KEEP_OR_UNKEEP);
			},
			testid: "mi-msg-unkeep"
		}, "unkeep"));
		var Be = s._(
			/*BTDS*/
			""
		);
		if (!o("WAWebMsgGetters").getIsKept(L) && o("WAWebKeepInChatMsgUtils").canShowKeepOption(L) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcBookmark.react"),
			title: Be,
			onPress: function() {
				A(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.KEEP_OR_UNKEEP);
			},
			testid: "mi-msg-keep"
		}, "keep")), !o("WAWebBotUtils").isMetaAiBot(se.id) && o("WAWebBotForwardCapability").canForwardMsgToMetaAi([L]) && o("WAWebBotGating").isAskMetaAiEnabled()) {
			var We = s._(
				/*BTDS*/
				""
			), qe = function() {
				T(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.ASK_META_AI);
			};
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: o("WAWebMetaAiRingAssetResolver").getMetaAiRingIcon(),
				title: We,
				onPress: qe,
				testid: "mi-msg-ask-meta-ai"
			}, "ask-meta-ai"));
		}
		var Ue = s._(
			/*BTDS*/
			""
		), Ve = s._(
			/*BTDS*/
			""
		);
		o("WAWebMsgActionCapability").canStarMsg(L) && (L.star ? _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconWdsIcGradeSlash.react"),
			title: Ve,
			onPress: function() {
				ie(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
					msg: L,
					chat: o("WAWebFrontendMsgGetters").getChat(L),
					messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.UNSTAR,
					messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
				});
			},
			testid: "mi-msg-unstar"
		}, "star")) : o("WAWebMsgGetters").getIsKept(L) || _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcGrade.react"),
			title: Ue,
			onPress: function() {
				ee(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
					msg: L,
					chat: o("WAWebFrontendMsgGetters").getChat(L),
					messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.STAR,
					messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
				});
			},
			testid: "mi-msg-star"
		}, "star")));
		var He = s._(
			/*BTDS*/
			""
		), Ge = s._(
			/*BTDS*/
			""
		);
		o("WAWebMsgGetters").getIsCAPISupport(L) && (o("WAWebMsgGetters").getIsBizBot1pResponse(L) || o("WAWebMsgGetters").getIsSupportAIMessage(L)) && o("WAWebABPropsSaga").getSagaFeedbackEnabled() && (_e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcThumbUp.react"),
			title: He,
			onPress: function() {
				ne();
			},
			testid: "saga-positive-feedback"
		}, "saga-positive-feedback")), _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcThumbDown.react"),
			title: Ge,
			onPress: te,
			testid: "saga-negative-feedback"
		}, "saga-negative-feedback")));
		var ze = s._(
			/*BTDS*/
			""
		), je = s._(
			/*BTDS*/
			""
		);
		if ((o("WAWebBotBaseGating").isBotEnabled() && o("WAWebBotTos").hasSeenBotTos() && !o("WAWebFrontendMsgGetters").getAsRevoked(L) && o("WAWebMsgGetters").getIsMetaBotResponse(L) || o("WAWebBotGating").isBizBot1pFeedbackEnabled() && o("WAWebMsgGetters").getIsBizBot1pResponse(L)) && !o("WAWebMsgGetters").getIsCAPISupport(L) && !o("WAWebChatGetters").getIsHatchBot(se)) {
			var Ke = function() {
				x(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.BOT_FEEDBACK);
			}, Qe = function() {
				D(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.BOT_FEEDBACK);
			};
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcThumbUp.react"),
				title: ze,
				onPress: Ke,
				testid: "mi-bot-positive-feedback"
			}, "bot-positive-feedback")), _e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcThumbDown.react"),
				title: je,
				onPress: Qe,
				testid: "mi-bot-negative-feedback"
			}, "bot-negative-feedback"));
		}
		var Xe = o("WAWebBotBaseGating").isBotEnabled() && !o("WAWebFrontendMsgGetters").getAsRevoked(L) && o("WAWebMsgGetters").getIsMetaBotResponse(L) ? o("WAWebUnifiedResponseUtils").getMetaAiEmbeddedSources(o("WAWebMsgGetters").getUnifiedResponse(L)) : [];
		if (Xe.length > 0) {
			var Ye = s._(
				/*BTDS*/
				""
			);
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcLanguage.react"),
				title: Ye,
				onPress: function() {
					o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebBotSourcesDrawerLoadable").WAWebBotSourcesDrawerLoadable, { sources: Xe }));
				},
				testid: "mi-msg-view-sources"
			}, "view-sources"));
		}
		var Je = s._(
			/*BTDS*/
			""
		);
		if (v !== o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG && o("WAWebMsgActionCapability").canReportToAdmin(L)) {
			var Ze = function() {
				J(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPORT_TO_ADMIN);
			};
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcMessageReport.react"),
				title: Je,
				onPress: Ze,
				testid: "mi-msg-rta"
			}, "rta"));
		}
		var et = s._(
			/*BTDS*/
			""
		);
		o("WAWebMsgActionCapability").canShowMsgEditAction(L, v, se) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcEdit.react"),
			title: et,
			onPress: function() {
				N(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.EDIT);
			},
			testid: "mi-msg-edit"
		}, "edit-message"));
		var tt = s._(
			/*BTDS*/
			""
		);
		if (o("WAWebMsgActionCapability").canCopyNewsletterMessageLink(L)) {
			var nt = function() {
				H(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_NEWSLETTER_LINK);
			};
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcLink.react"),
				title: tt,
				onPress: nt,
				testid: "mi-msg-copy-link"
			}, "copy-newsletter-message-link"));
		}
		var rt = s._(
			/*BTDS*/
			""
		);
		o("WAWebMsgActionCapability").canEmbedNewsletterMessage(L) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcCode.react"),
			title: rt,
			onPress: V,
			testid: "mi-msg-embed"
		}, "embed-newsletter-message"));
		var ot = s._(
			/*BTDS*/
			""
		);
		if (o("WAWebMsgActionCapability").canAddPaidPartnershipLabelToMsg(L)) {
			var at = function() {
				k(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.PAID_PARTNERSHIP);
			};
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
				iconDirectional: !0,
				title: ot,
				onPress: at,
				testid: "mi-msg-paid-partnership"
			}, "paid-partnership"));
		}
		var it = s._(
			/*BTDS*/
			""
		);
		o("WAWebMsgActionCapability").canAddAiContentLabelToMsg(L) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconWdsIcAiContent.react"),
			title: it,
			onPress: E,
			testid: "mi-msg-ai-content-label"
		}, "ai-content-label"));
		var lt = s._(
			/*BTDS*/
			""
		), st = s._(
			/*BTDS*/
			""
		);
		if (L.type === o("WAWebMsgType").MSG_TYPE.STICKER && o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()) {
			var ut;
			o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(L.filehash) ? _e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcFavoriteFilled.react"),
				title: lt,
				onPress: function() {
					oe(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.FAVORITE_OR_UNFAVORITE_STICKER);
				},
				testid: "mi-remove-favorite-sticker"
			}, "remove-favorite-sticker")) : r("WAWebAuraGating").canUsePremiumSticker(L.stickerPremiumStatus) && r("WAWebAuraGating").canUsePremiumSticker((ut = L.mediaData) == null ? void 0 : ut.stickerPremiumStatus) && _e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcFavorite.react"),
				title: st,
				onPress: function() {
					M(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.FAVORITE_OR_UNFAVORITE_STICKER);
				},
				testid: "mi-favorite-sticker"
			}, "favorite-sticker"));
		}
		var ct = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(L.filehash), dt = s._(
			/*BTDS*/
			""
		);
		if (L.type === o("WAWebMsgType").MSG_TYPE.STICKER && o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && o("WAWebStickerUtils").getStickerFileType(L.mediaData.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE && o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(L, se)) {
			var mt = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(L.filehash);
			if (mt != null) {
				var pt = function() {
					o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(mt), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_STICKER);
				};
				_e.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcContentCopy.react"),
					title: dt,
					onPress: pt,
					testid: "mi-copy-favorite-sticker"
				}, "copy-favorite-sticker"));
			}
		} else L.type === o("WAWebMsgType").MSG_TYPE.STICKER && ct != null && o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(L, se) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcContentCopy.react"),
			title: dt,
			onPress: function() {
				$(ct), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_STICKER);
			},
			testid: "mi-copy-favorite-sticker"
		}, "copy-favorite-sticker"));
		var _t = s._(
			/*BTDS*/
			""
		);
		if (L.type === o("WAWebMsgType").MSG_TYPE.STICKER) {
			var ft, gt, ht, yt = L.mediaData, Ct = yt.isFirstParty, bt = yt.stickerPackId, vt = L.isAvatar, St = o("WAWebMsgGetters").getIsNewsletterMsg(L) ? (ft = (gt = se.newsletterMetadata) == null ? void 0 : gt.iAmAdminOrOwner()) != null ? ft : !1 : !0, Rt = L.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM && ((ht = L.mediaData) == null ? void 0 : ht.stickerPremiumStatus) === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM;
			(!Rt || r("WAWebAuraGating").isStickersEnabled()) && bt != null && vt !== !0 && Ct === !0 && St && _e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcSticker.react"),
				title: _t,
				onPress: function() {
					z(bt), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.VIEW_STICKER_PACK);
				},
				testid: "mi-open-sticker-pack"
			}, "open-sticker-pack"));
		}
		var Lt = s._(
			/*BTDS*/
			""
		), Et = s._(
			/*BTDS*/
			""
		), kt = s._(
			/*BTDS*/
			""
		);
		if (o("WAWebFrontendMsgGetters").getAsAlbum(L) && b != null && b.length) {
			var It, Tt = b.reduce(function(e, t) {
				return e.canDownloadAll = e.canDownloadAll && o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(t.unsafe()), e.canStarAll = e.canStarAll && o("WAWebMsgActionCapability").canStarMsg(t.unsafe()), e;
			}, {
				canDownloadAll: !0,
				canStarAll: !0
			}), Dt = Tt.canDownloadAll, xt = Tt.canStarAll, $t = ((It = n("cr:7565") == null ? void 0 : n("cr:7565").supportsBulkMediaSaving()) != null ? It : !1) && r("WAWebEnvironment").isWindows;
			Dt && !$t && _e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDownload.react"),
				title: Lt,
				onPress: function() {
					o("WAWebFileSaver").FileSaver.initDownload(b.map(function(e) {
						return e.unsafe();
					})), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD_ALL);
				},
				testid: "mi-msg-download-all"
			}, "download-all")), Dt && $t && _e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDownload.react"),
				title: Et,
				onPress: function() {
					n("cr:7565") == null || n("cr:7565").selectFolderAndSaveFiles(b.map(function(e) {
						return e.unsafe();
					})).catch(function(t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to save files: ", ""])), t);
					}), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD_ALL);
				},
				testid: "mi-msg-download-all"
			}, "download-all")), xt && _e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcGrade.react"),
				title: kt,
				onPress: function() {
					o("WAWebCmd").Cmd.sendStarMsgs(se, b), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR);
				},
				testid: "mi-msg-star-all"
			}, "star-all"));
		}
		var Pt = s._(
			/*BTDS*/
			""
		);
		if ((y = L.author) != null && y.isLid() && ((C = se.groupMetadata) == null ? void 0 : C.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
			var Nt = { wid: L.author };
			o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && (Nt.lid = se.accountLid);
			var Mt = function() {
				o("WAWebCmd").Cmd.verificationDrawer(Nt), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.VERIFY_SECURITY_CODE);
			};
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: o("WAWebNumbersIcon.react").NumbersIcon,
				title: Pt,
				onPress: Mt,
				testid: "mi-msg-verify-security-node"
			}, "verify-security-code"));
		}
		var wt = s._(
			/*BTDS*/
			""
		);
		if (o("WAWebNotesUtils").shouldEnableNotesForMsg(L)) {
			o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemShown(se.contact);
			var At = function() {
				I(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.ADD_TO_NOTE);
			};
			_e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcAdd.react"),
				title: wt,
				onPress: At,
				testid: "mi-msg-add-to-note"
			}, "add-to-note"));
		}
		var Ft = s._(
			/*BTDS*/
			""
		);
		if (r("WAWebEnvironment").isWindows) {
			_e.push(c.jsx(r("WAWebDropdownItemSeparator.react"), {}, "item-separator")), _e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcCheckBox.react"),
				title: Ft,
				onPress: function() {
					q(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.SELECT), o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.selectTappedInContextMenu();
				},
				testid: "mi-msg-select-message"
			}, "selectMessage"));
			var Ot = s._(
				/*BTDS*/
				""
			), Bt = s._(
				/*BTDS*/
				""
			), Wt = s._(
				/*BTDS*/
				""
			);
			if (be != null) if (_({
				isFileInCache: R,
				mediaData: be,
				msg: L
			})) {
				var qt;
				_e.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcDownload.react"),
					title: Ot,
					onPress: function() {
						W(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.SAVE_AS);
					},
					testid: "mi-msg-save-as"
				}, "save-as"));
				var Ut = (qt = n("cr:23046") == null || n("cr:23046").isWindowsShareSheetEnabled == null ? void 0 : n("cr:23046").isWindowsShareSheetEnabled()) != null ? qt : !1;
				if (Ut && _e.push(c.jsx(r("WDSMenuItem.react"), {
					Icon: o("WAWebIcShareWindowsIcon.react").IcShareWindowsIcon,
					title: Bt,
					onPress: function() {
						Z(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.SHARE), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
							msg: L,
							chat: o("WAWebFrontendMsgGetters").getChat(L),
							messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.SHARE,
							messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
						});
					},
					testid: "mi-msg-share"
				}, "share")), n("cr:7565") != null && !o("WAWebMsgGetters").getIsStickerMsg(L)) {
					var Vt = s._(
						/*BTDS*/
						""
					);
					_e.push(c.jsx(r("WDSMenuItem.react"), {
						Icon: r("WDSIconIcOpenInNew.react"),
						title: Vt,
						onPress: function() {
							n("cr:40048") == null || n("cr:40048").handleOpenAnotherAppButtonClick(null, L);
						},
						testid: "mi-msg-open-with"
					}, "open-with"));
				}
			} else (be.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT || be.mediaStage === o("WAWebMediaTypes").MediaDataStage.NEED_POKE || be.mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED) && _e.push(c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDownload.react"),
				title: Wt,
				onPress: function() {
					B(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD);
				},
				testid: "mi-msg-pre-download"
			}, "pre-download"));
		}
		L.ctwaContext == null && _e.push(c.jsx(r("WAWebDropdownItemSeparator.react"), {}, "item-separator-3"));
		var Ht = s._(
			/*BTDS*/
			""
		);
		o("WAWebMsgActionCapability").canReportMsg(L) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcThumbDown.react"),
			title: Ht,
			onPress: function() {
				Y(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPORT), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
					msg: L,
					chat: o("WAWebFrontendMsgGetters").getChat(L),
					messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.REPORT,
					messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
				});
			},
			testid: "mi-msg-report",
			destructive: !0
		}, "report-message"));
		var Gt = s._(
			/*BTDS*/
			""
		);
		return !me && o("WAWebMsgActionCapability").canDeleteMsg(L) && _e.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDelete.react"),
			title: Gt,
			onPress: function() {
				F(), m(L, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DELETE), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
					msg: L,
					chat: o("WAWebFrontendMsgGetters").getChat(L),
					messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.DELETE,
					messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
				});
			},
			testid: "mi-msg-delete",
			destructive: !0
		}, "delete")), o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled() && (_e.push(c.jsx(r("WDSMenuItem.react"), { type: "separator" })), _e.push.apply(_e, o("WAWebMessageDebugMenuItems.react").getWAWebMessageDebugMenuItems(L))), _e;
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e.type === o("WAWebMsgType").MSG_TYPE.CHAT || e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT || e.type === o("WAWebMsgType").MSG_TYPE.IMAGE || e.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
	}
	l.default = f;
}), 226);
