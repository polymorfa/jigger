__d("WAWebMessageWrapper.react", [
	"fbt",
	"CometVirtualization.react",
	"ReactDOM",
	"WALogger",
	"WAWebABProps",
	"WAWebABPropsSaga",
	"WAWebAccessibility.react",
	"WAWebAddMsgToNoteAction",
	"WAWebAddOnBubbleType",
	"WAWebAddOnBubblesContainer.react",
	"WAWebAppContext.react",
	"WAWebBizTemplateButtons.react",
	"WAWebBotFeedbackModal.react",
	"WAWebBotGating",
	"WAWebBotGenTypingIndicatorMsg",
	"WAWebBotTypes",
	"WAWebBroadcastMessageDropdownMenu.react",
	"WAWebBubbleAnimationWrapper.react",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeModeContext",
	"WAWebClassnames",
	"WAWebCmd",
	"WAWebCodeFormatMutator",
	"WAWebCopyStickerToClipboard",
	"WAWebCopyToClipboard",
	"WAWebDebugGatingUtils",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebDisplayType",
	"WAWebDomScroll",
	"WAWebDropdown.react",
	"WAWebDropdownItem.react",
	"WAWebErrorBoundary.react",
	"WAWebExpandableTextContext",
	"WAWebFavoriteStickerAction",
	"WAWebFileSaver",
	"WAWebFocusTracer",
	"WAWebForwardActionUserJourneyLogger",
	"WAWebForwardUtils",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGroupMetadataContext",
	"WAWebInteractiveMessageCarousel.react",
	"WAWebKeepInChatActions",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardListHotKeys.react",
	"WAWebKeyboardRotateFocusArrows.react",
	"WAWebKeyboardTabUtils",
	"WAWebMarketingMessagesUserFeedbackGatingUtils",
	"WAWebMediaDocumentUtils",
	"WAWebMentionMessageContext",
	"WAWebMessageButtons.react",
	"WAWebMessageCheckbox.react",
	"WAWebMessageComponentWrapper.react",
	"WAWebMessageDebugMenuItems.react",
	"WAWebMessageEditFlow.react",
	"WAWebMessageHandlers",
	"WAWebMessageMenu.react",
	"WAWebMessagePluginMsgDisplayClass",
	"WAWebMessagePosition",
	"WAWebMessageUiUtils",
	"WAWebModalManager",
	"WAWebMsgActionCapability",
	"WAWebMsgFailIcon.react",
	"WAWebMsgGetters",
	"WAWebMsgModelUtils",
	"WAWebMsgReply",
	"WAWebMsgType",
	"WAWebMultiSelectBar.react",
	"WAWebNewsletterActionButtonWrapper.react",
	"WAWebNewsletterAddAiContentLabelFlow",
	"WAWebNewsletterMsgLinkUtils",
	"WAWebNoop",
	"WAWebPaidPartnershipLabelModal.react",
	"WAWebPinInChatCollection",
	"WAWebPinMessageModal.react",
	"WAWebPinnedMessagesUserJourneyLogger",
	"WAWebPrepareMessageSendingAction",
	"WAWebProtobufsE2E.pb",
	"WAWebPttPrefs",
	"WAWebReactionUserJourneyLogger",
	"WAWebReactionsBEUtils",
	"WAWebReactionsUtils",
	"WAWebReplyToMsgChatAction",
	"WAWebReportMsgPopup.react",
	"WAWebReportNewsletterPostPopup.react",
	"WAWebReportToAdminEventsLogger",
	"WAWebReportToAdminPopup.react",
	"WAWebResendMsgAction",
	"WAWebRevokeMetricUtils",
	"WAWebRightClickReactionBarContainer.react",
	"WAWebSendBotFeedbackAction",
	"WAWebSendPinMessageAction",
	"WAWebSendReactionMsgAction",
	"WAWebSendSupportBotFeedbackActions",
	"WAWebSpamConstants",
	"WAWebStateUtils",
	"WAWebStylesEnv",
	"WAWebSupportAiSessionWamEvent",
	"WAWebSupportBotNegativeFeedbackModal",
	"WAWebSupportCarousel",
	"WAWebThemeContext",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsMeUser",
	"WAWebVelocityTransitionGroup",
	"WAWebVibrantOutgoingOverrides.stylex",
	"WAWebViewMode.flow",
	"WAWebViewOnceState",
	"WAWebViewRepliesLabel.react",
	"WAWebWamEnumKicEntryPointType",
	"WAWebWamEnumQuotedMessageUserJourneyEntryPoint",
	"WAWebWamEnumReactionUserJourneyEntryPoint",
	"WAWebWamEnumReportToAdminInteraction",
	"WAWebWamEnumSupportAiEventType",
	"WAWebWid",
	"WAWebWrapperConstants",
	"WAWebWrapperDisplayTypeContext",
	"WAWebWrapperEphemeralInfoButton.react",
	"WAWebWrapperGetTailIcon",
	"WAWebWrapperGroupProfilePicture.react",
	"WAWebWrapperHandlers",
	"WAWebWrapperListeners.react",
	"WAWebWrapperMessageActionButtonsRow",
	"WAWebWrapperMessageDropdownMenu.react",
	"WAWebWrapperMessageDropdownMenuReactionsTray.react",
	"WAWebWrapperOrderEphemeralExemption",
	"WAWebWrapperQuickActionButton.react",
	"WAWebWrapperReactionsQuickActionButton.react",
	"WAWebWrapperShouldDisplayAuthor",
	"WAWebWrapperShouldHaveTail",
	"WDSFocusStateStyles",
	"WDSMenu.react",
	"cr:12467",
	"cr:13786",
	"cr:23046",
	"cr:5997",
	"cr:7565",
	"getErrorSafe",
	"gkx",
	"justknobx",
	"react",
	"stylex",
	"useWAWebAssociatedMessages",
	"useWAWebBizVPVData",
	"useWAWebChatValues",
	"useWAWebDebouncedCallback",
	"useWAWebEventTargetValue",
	"useWAWebForceUpdate",
	"useWAWebIsKeyboardUser",
	"useWAWebListener",
	"useWAWebMessageAriaDescription",
	"useWAWebMessageAriaLabel",
	"useWAWebMessageHoverBar",
	"useWAWebMsgValues",
	"useWAWebReactionEmojiPickerMenu",
	"useWAWebStableCallback",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g, h = ["ref"], y = ["ref"], C, b, v = b || (b = o("react")), S = b, R = S.useContext, L = S.useEffect, E = S.useImperativeHandle, k = S.useMemo, I = S.useRef, T = S.useState;
	function D() {
		return o("WAWebABProps").getABPropConfigValue("wa_web_quick_reactions") === !0;
	}
	function x() {
		var e = {
			canAnimateExpand: !1,
			isExpanded: !1
		}, t = new Set();
		return {
			getSnapshot: function() {
				return e;
			},
			updateSnapshot: function(r) {
				e = r, t.forEach(function(e) {
					return e();
				});
			},
			subscribe: function(n) {
				return t.add(n), function() {
					t.delete(n);
				};
			}
		};
	}
	function $(e, t) {
		var n = function(r) {
			if (!(r.key !== "Tab" || !r.shiftKey)) {
				var n = o("WAWebKeyboardTabUtils").getTabbableElements(e, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
				if (!(n.length === 0 || e.ownerDocument.activeElement !== n[0])) {
					var a = t.current;
					a != null && (r.preventDefault(), r.stopPropagation(), a.focusFirst());
				}
			}
		};
		return e.addEventListener("keydown", n, !0), function() {
			e.removeEventListener("keydown", n, !0);
		};
	}
	var P = "x4dpwp4-B", N = "x1jn504y-B", M = "xqw5v3c-B", w = {
		teeLockHoverInset: {
			"--xeia6u2": "x1qg1ob xxx6ivz",
			$$css: !0
		},
		messageFocused: {
			outlineOffset: "x1wfwxd8",
			$$css: !0
		},
		messageRow: {
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		messageContinuation: {
			paddingBottom: "xa0aww2",
			$$css: !0
		},
		groupHistoryMessage: {
			"--WDS-systems-bubble-surface-incoming": "x9lmoot",
			"--WDS-systems-bubble-surface-outgoing": "x1ppz1d2",
			$$css: !0
		},
		groupHistoryMessageRow: {
			position: "x1n2onr6",
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_top": "x1y3wzot",
			"::before_bottom": "xhq5o37",
			"::before_insetInlineStart": "xfbisj7",
			"::before_left": null,
			"::before_right": null,
			"::before_transform": "xnyzbwf",
			"::before_width": "xkeh78v",
			"::before_zIndex": "xy5mcqj",
			$$css: !0
		},
		groupHistoryMessageRowLight: {
			"::before_backgroundColor": "xd3jkiw",
			$$css: !0
		},
		groupHistoryMessageRowDark: {
			"::before_backgroundColor": "x5cow8b",
			$$css: !0
		},
		msg: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			userSelect: "x1hx0egp",
			paddingInlineStart: "x1h3r9g6 x1ld4j5a x1q6425o x1h2wzp9 x13bx8za xgmf7it xcjqink xg7f59e xxfb629",
			paddingInlineEnd: "x141l45o x1n33gsf xa25jmb xg5uraw xt5wqpu x1utqab1 x1ijczrz xqxqsie x10amw33",
			$$css: !0
		},
		msgScheduled: {
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		messageRowScheduled: {
			paddingBottom: "x18d9i69",
			$$css: !0
		},
		messageScheduledFullWidth: {
			maxWidth: "x193iq5w",
			$$css: !0
		},
		msgThreePanel: {
			paddingInlineStart: "x1h3r9g6 x1ld4j5a xz2rn1k x5oh2r6 x13bx8za xgmf7it xcjqink xg7f59e xxfb629",
			paddingInlineEnd: "x141l45o x1n33gsf xcp7ckg xzfsp05 xt5wqpu x1utqab1 x1ijczrz xqxqsie x10amw33",
			$$css: !0
		},
		wrapperAdjustedOneOnOneChat: {
			paddingInlineStart: "x1wxbj4f xds8fti",
			paddingInlineEnd: "xh1vicy x1rzuvji",
			$$css: !0
		},
		wrapperAdjustedOneOnOneChatThreePanel: {
			paddingInlineStart: "x1wxbj4f xz2rn1k x5oh2r6 xds8fti",
			paddingInlineEnd: "xh1vicy xcp7ckg xzfsp05 x1rzuvji",
			$$css: !0
		},
		wrapperChannelAlerts: {
			paddingInlineStart: "x13jy36j",
			paddingInlineEnd: "x64bnmy",
			$$css: !0
		},
		wrapperChannelAlertsThreePanel: {
			paddingInlineStart: "x13jy36j xz2rn1k x5oh2r6",
			paddingInlineEnd: "x64bnmy xcp7ckg xzfsp05",
			$$css: !0
		},
		rowAlignStart: {
			alignItems: "x1cy8zhl",
			$$css: !0
		},
		rowAlignEnd: {
			alignItems: "xuk3077",
			$$css: !0
		},
		msgDeletePending: {
			display: "x1s85apg",
			$$css: !0
		},
		msgSystem: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		msgInfo: {
			marginBottom: "xat24cr",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		msgInfoThreePanel: {
			paddingInlineStart: "x1c1uobl xz2rn1k x5oh2r6",
			paddingInlineEnd: "xyri2b xcp7ckg xzfsp05",
			$$css: !0
		},
		msgAnnouncement: {
			marginInlineStart: "xvc5jky",
			marginInlineEnd: "x11t971q",
			maxWidth: "x18b33ah",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			width: "x1yuel0x",
			$$css: !0
		},
		msgAnnouncementThree: {
			paddingInlineStart: "x14hj8or",
			paddingInlineEnd: "xfwifpm",
			$$css: !0
		},
		msgAnnouncementProportionalThree: {
			"--width-announcement-bubble": "x1qq3xje",
			$$css: !0
		},
		msgAnnouncementProportionalTwo: {
			"--width-announcement-bubble": "xvvywth x1la26m9 x17u5etd x2xivva",
			paddingInlineStart: "x1c1uobl x14reth5",
			paddingInlineEnd: "xyri2b xw1h0kw",
			$$css: !0
		},
		wideDisplayRow: {
			insetInlineStart: "x1o0tod",
			$$css: !0
		},
		msgPSARow: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		msgGallery: {
			alignItems: "x1cy8zhl",
			marginBottom: "xat24cr",
			paddingInlineStart: "x1mfogq2",
			paddingInlineEnd: "xpdmqnj",
			$$css: !0
		},
		msgWithQuickAction: {
			marginInlineStart: "xnzr9dm",
			$$css: !0
		},
		msgBubbleAnimation: {
			animationName: "xe1k3sp",
			animationDuration: "x1c74tu6",
			animationTimingFunction: "x4hg4is",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		messageBackground: {
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			position: "x1n2onr6",
			zIndex: "x12xzxwr",
			$$css: !0
		},
		noZIndex: {
			zIndex: "x1swf91x",
			$$css: !0
		},
		messageBackgroundIncoming: {
			backgroundColor: "x1ew7x2d",
			$$css: !0
		},
		messageBackgroundOutgoing: {
			backgroundColor: "x1g5lz36",
			$$css: !0
		},
		hoverTintTrigger: {
			"--WAWeb-msg-hover-tint": "x1bgsx7y xr9tke2",
			$$css: !0
		},
		hoverTintBubbleIncomingLight: {
			backgroundColor: "x1oxtdcg",
			$$css: !0
		},
		hoverTintBubbleIncomingDark: {
			backgroundColor: "x1icoler",
			$$css: !0
		},
		hoverTintBubbleOutgoingAccent: {
			backgroundColor: "xpn19ow",
			$$css: !0
		},
		hoverTintBubbleOutgoingWhite: {
			backgroundColor: "xq19jxh",
			$$css: !0
		},
		hoverTintTailIncomingLight: {
			color: "xm1bu9v",
			$$css: !0
		},
		hoverTintTailIncomingDark: {
			color: "x2r2o3w",
			$$css: !0
		},
		hoverTintTailOutgoingAccent: {
			color: "xqls0ww",
			$$css: !0
		},
		hoverTintTailOutgoingWhite: {
			color: "xflsaac",
			$$css: !0
		},
		bgTailFlatTopLeft: {
			borderStartStartRadius: "x1bczwif",
			$$css: !0
		},
		bgTailFlatTopRight: {
			borderStartEndRadius: "x17un8ov",
			$$css: !0
		},
		bgTailOverrideLeft: {
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "xu342n7",
			$$css: !0
		},
		bgTailOverrideRight: {
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "x17un8ov",
			$$css: !0
		},
		hasBorderBox: {
			boxShadow: "xgdw1sx",
			$$css: !0
		},
		tail: {
			display: "x1lliihq",
			height: "x18gnavp",
			position: "x10l6tqk",
			top: "x13vifvy",
			width: "x1xc55vz",
			zIndex: "xupqr0c",
			$$css: !0
		},
		tailColorIncoming: {
			color: "x1l1cedg",
			$$css: !0
		},
		tailColorOutgoing: {
			color: "x1fa4crm",
			$$css: !0
		},
		tailLeft: {
			insetInlineStart: "x7hj1vm",
			left: null,
			right: null,
			$$css: !0
		},
		tailRight: {
			insetInlineEnd: "xgvahye",
			left: null,
			right: null,
			$$css: !0
		},
		tailLeftSafari: {
			insetInlineStart: "xnj87uo",
			left: null,
			right: null,
			$$css: !0
		},
		tailRightSafari: {
			insetInlineEnd: "x13niomq",
			left: null,
			right: null,
			$$css: !0
		},
		tailHidden: {
			display: "x1s85apg",
			$$css: !0
		},
		message: {
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			color: "x14ug900",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			fontSize: "x12lqup9",
			lineHeight: "x17fgdl5",
			position: "x1n2onr6",
			$$css: !0
		},
		messageHighlightMention: {
			lineHeight: "x19v9tvf",
			$$css: !0
		},
		messageTransparent: {
			backgroundColor: "xjbqb8w",
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			borderEndEndRadius: "x1e7945m",
			borderEndStartRadius: "x11o6v7j",
			boxShadow: "x1gnnqk1",
			lineHeight: "x1gwpirc",
			$$css: !0
		},
		messageTailOverrideStart: {
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "xu342n7",
			$$css: !0
		},
		messageTailOverrideEnd: {
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "x17un8ov",
			$$css: !0
		},
		messageChat: {
			maxWidth: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw",
			$$css: !0
		},
		messageChatBotPluginParent: {
			minWidth: "x5uz1wy xto7b4v x6rd39g xl37psn",
			$$css: !0
		},
		messageCode: {
			maxWidth: "xan34s7",
			$$css: !0
		},
		messageVideoLinkPreview: {
			width: "x17sfusw",
			$$css: !0
		},
		messageVideoLinkPreviewWide: {
			width: "x1yuel0x",
			$$css: !0
		},
		pollMessage: {
			width: "x3orp4s",
			$$css: !0
		},
		pollAnnouncement: {
			width: "x1yuel0x",
			$$css: !0
		},
		ptvMessage: {
			maxWidth: "x193iq5w",
			$$css: !0
		},
		ptvAnnouncement: {
			width: "xh8yej3",
			$$css: !0
		},
		groupNotificationContextCardContainer: {
			borderStartStartRadius: "xuqqiot",
			borderStartEndRadius: "x1lkg3h2",
			borderEndEndRadius: "x17mbzc4",
			borderEndStartRadius: "xcouhex",
			paddingTop: "x1p5oq8j",
			paddingInlineEnd: "x64bnmy",
			paddingBottom: "xwxc41k",
			paddingInlineStart: "x13jy36j",
			$$css: !0
		},
		messageSystem: {
			backgroundColor: "x1iyt1tq",
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			boxShadow: "x1s0q3zl",
			boxSizing: "x9f619",
			color: "x1bvqhpb",
			display: "x1rg5ohu",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			fontSize: "x13a8xbf",
			lineHeight: "xdod15v",
			maxWidth: "x193iq5w",
			paddingTop: "x123j3cw",
			paddingInlineEnd: "xpdmqnj",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x1g0dm76",
			textAlign: "x2b8uid",
			$$css: !0
		},
		messageSystemNoPadding: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		messageE2ENotification: {
			backgroundColor: "xbqjg82",
			color: "x1syykee",
			$$css: !0
		},
		messageBizNotification: {
			backgroundColor: "x1i4qgik",
			color: "x1fyz91i",
			$$css: !0
		},
		messageNonE2ENotification: {
			backgroundColor: "xz52mmd",
			color: "xbta0w9",
			$$css: !0
		},
		messageDebugNotification: {
			backgroundColor: "x1iyt1tq",
			color: "x1bvqhpb",
			$$css: !0
		},
		messagePlaceholder: {
			opacity: "x1ks1olk",
			$$css: !0
		},
		galleryMessage: {
			maxWidth: "x193iq5w",
			$$css: !0
		},
		galleryChat: {
			width: "x14atkfc",
			$$css: !0
		},
		galleryMedia: {
			maxWidth: "x13nahy2",
			width: "xh8yej3",
			$$css: !0
		},
		galleryImageGif: {
			maxWidth: "x193iq5w",
			width: "x14atkfc",
			$$css: !0
		},
		galleryVideoLocation: {
			width: "x14atkfc",
			$$css: !0
		},
		infoMessage: {
			maxWidth: "x193iq5w",
			width: "x14atkfc",
			$$css: !0
		},
		infoMedia: {
			maxWidth: "x193iq5w",
			width: "x3orp4s",
			$$css: !0
		},
		infoImageGif: {
			maxWidth: "x193iq5w",
			width: "x14atkfc",
			$$css: !0
		},
		infoVideoLocation: {
			width: "x14atkfc",
			$$css: !0
		},
		announcementChat: {
			maxWidth: "x193iq5w",
			$$css: !0
		},
		channelAlertsMessage: {
			maxWidth: "x193iq5w",
			width: "xh8yej3",
			$$css: !0
		},
		psaMessage: {
			display: "x1rg5ohu",
			textAlign: "x14wi4xw",
			$$css: !0
		}
	};
	function A(e) {
		switch (e) {
			case "messageChat": return w.messageChat;
			case "messageChatBotPluginParent": return w.messageChatBotPluginParent;
			case "messageTransparent": return w.messageTransparent;
			case "messageVideoLinkPreview": return w.messageVideoLinkPreview;
			case "messageVideoLinkPreviewWide": return w.messageVideoLinkPreviewWide;
			case "pollMessage": return w.pollMessage;
			case "pollAnnouncement": return w.pollAnnouncement;
			case "ptvMessage": return w.ptvMessage;
			case "ptvAnnouncement": return w.ptvAnnouncement;
			case "messagePlaceholder": return w.messagePlaceholder;
			default: return null;
		}
	}
	function F(e) {
		switch (e) {
			case "messageE2ENotification": return w.messageE2ENotification;
			case "messageBizNotification": return w.messageBizNotification;
			case "messageNonE2ENotification": return w.messageNonE2ENotification;
			case "messageDebugNotification": return w.messageDebugNotification;
			default: return null;
		}
	}
	function O(e) {
		switch (e) {
			case "messageChat": return "chat";
			case "messageAudio":
			case "messageDocument":
			case "messageList":
			case "messageProduct":
			case "messageMultiVcard":
			case "messagePTT":
			case "messageSticker":
			case "messageVcard": return "media";
			case "messageImage":
			case "messageGif": return "imageGif";
			case "messageVideo":
			case "messageLocation":
			case "messageLiveLocation": return "videoLocation";
			default: return null;
		}
	}
	function B(e, t, n, r) {
		var o = [], a = [], i = [];
		if (e == null) return {
			base: o,
			context: a,
			notifColor: i
		};
		for (var l of e.split(" ")) {
			var s = F(l);
			if (s != null) {
				i.push(s);
				continue;
			}
			var u = A(l);
			u != null && o.push(u);
			var c = O(l);
			if (c == null) {
				n && l === "messageVideoLinkPreview" ? a.push(w.messageVideoLinkPreview) : n && l === "messageVideoLinkPreviewWide" && a.push(w.messageVideoLinkPreviewWide);
				continue;
			}
			t ? a.push({
				chat: w.galleryChat,
				media: w.galleryMedia,
				imageGif: w.galleryImageGif,
				videoLocation: w.galleryVideoLocation
			}[c]) : n && (c === "media" ? a.push(w.infoMedia) : c === "imageGif" ? a.push(w.infoImageGif) : c === "videoLocation" && a.push(w.infoVideoLocation)), r && c === "chat" && a.push(w.announcementChat);
		}
		return {
			base: o,
			context: a,
			notifColor: i
		};
	}
	var W = { atLeastOnceKeyboardUser: !0 };
	function q(t) {
		"use no forget";
		var a, i, l, y, b, S, P = t.ref, N = babelHelpers.objectWithoutPropertiesLoose(t, h), M = N.msg, A = N.position, F = N.displayType, O = F === void 0 ? o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION : F, q = N.selectedMessages, H = N.isFocusable, K = N.selectable, Q = N.isMsgVisible, X = N.onMessageSelect, Y = N.onProductClick, J = N.onMessageClick, Z = N.current, ee = N.showProfilePicture, te = ee === void 0 ? !0 : ee, ne = N.onMsgFocus, re = N.onMsgBlur, oe = N.isFollowUpReply, ae = r("useWAWebIsKeyboardUser")(), ie = ae.isKeyboardUser, le = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), se = o("useWAWebListener").useAddListenerOnce(), ue = se[0], ce = I(!1), de = o("WAWebAppContext.react").useAppContext(), me = de.rightDrawerOpen, pe = o("useWAWebMsgValues").useMsgValues(N.msg.id, [
			o("WAWebFrontendMsgGetters").getAsMms,
			o("WAWebFrontendMsgGetters").getAsPollCreation,
			o("WAWebFrontendMsgGetters").getAsPttLike,
			o("WAWebFrontendMsgGetters").getAsRevoked,
			o("WAWebMsgGetters").getAuthor,
			o("WAWebMsgGetters").getBody,
			o("WAWebFrontendMsgGetters").getDir,
			o("WAWebMsgGetters").getEphemeralDuration,
			o("WAWebMsgGetters").getEphemeralOutOfSync,
			o("WAWebMsgGetters").getFilehash,
			o("WAWebMsgGetters").getId,
			o("WAWebMsgGetters").getIsAvatar,
			o("WAWebMsgGetters").getIsBizNotification,
			o("WAWebMsgGetters").getIsEphemeral,
			o("WAWebMsgGetters").getIsFailed,
			o("WAWebMsgGetters").getHostedBizEncStateMismatch
		]), _e = pe[0], fe = pe[1], ge = pe[2], he = pe[3], ye = pe[4], Ce = pe[5], be = pe[6], ve = pe[7], Se = pe[8], Re = pe[9], Le = pe[10], Ee = pe[11], ke = pe[12], Ie = pe[13], Te = pe[14], De = pe[15], xe = o("useWAWebMsgValues").useMsgValues(N.msg.id, [
			o("WAWebMsgGetters").getIsFrequentlyForwarded,
			o("WAWebMsgGetters").getIsFutureproof,
			o("WAWebMsgGetters").getIsGroupMsg,
			o("WAWebMsgGetters").getIsLive,
			o("WAWebMsgGetters").getIsMedia,
			o("WAWebMsgGetters").getIsMdHistoryMsg,
			o("WAWebMsgGetters").getIsNotification,
			o("WAWebFrontendMsgGetters").getIsRTL,
			o("WAWebMsgGetters").getIsAiHub,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getIsViewOnce,
			o("WAWebMsgGetters").getLinkPreview,
			o("WAWebMsgGetters").getList,
			o("WAWebFrontendMsgGetters").getMediaData,
			o("WAWebMsgGetters").getMatchedText,
			o("WAWebMsgGetters").getQuotedMsg
		]), $e = xe[0], Pe = xe[1], Ne = xe[2], Me = xe[3], we = xe[4], Ae = xe[5], Fe = xe[6], Oe = xe[7], Be = xe[8], We = xe[9], qe = xe[10], Ue = xe[11], Ve = xe[12], He = xe[13], Ge = xe[14], ze = xe[15], je = o("useWAWebMsgValues").useMsgValues(N.msg.id, [
			o("WAWebMsgGetters").getRichPreviewType,
			o("WAWebMsgGetters").getSender,
			o("WAWebMsgGetters").getStar,
			o("WAWebMsgGetters").getSubtype,
			o("WAWebMsgGetters").getType,
			o("WAWebMsgGetters").getTitle,
			o("WAWebFrontendMsgGetters").getHasTemplateButtons,
			o("WAWebFrontendMsgGetters").getIsQuickReply,
			o("WAWebMsgGetters").getIsFromTemplate,
			o("WAWebMsgGetters").getDoNotPlayInline,
			o("WAWebMsgGetters").getCtwaContext,
			o("WAWebMsgGetters").getBizPrivacyStatus,
			o("WAWebMsgGetters").getVerifiedBizName,
			o("WAWebMsgGetters").getTemplateParams,
			o("WAWebMsgGetters").getDynamicReplyButtons,
			o("WAWebFrontendMsgGetters").getReplyButtons
		]), Ke = je[0], Qe = je[1], Xe = je[2], Ye = je[3], Je = je[4], Ze = je[5], et = je[6], tt = je[7], nt = je[8], rt = je[9], ot = je[10], at = je[11], it = je[12], lt = je[13], st = je[14], ut = o("useWAWebMsgValues").useMsgValues(N.msg.id, [
			o("WAWebMsgGetters").getHasReaction,
			o("WAWebMsgGetters").getBroadcastId,
			o("WAWebMsgGetters").getDeprecatedMms3Url,
			o("WAWebMsgGetters").getIsKept,
			o("WAWebFrontendMsgGetters").getPendingDeleteForMe,
			o("WAWebMsgGetters").getMessageSecret,
			o("WAWebMsgGetters").getOriginalSelfAuthor,
			o("WAWebMsgGetters").getFrom,
			o("WAWebMsgGetters").getTo,
			o("WAWebFrontendMsgGetters").getIsTransparentMsg,
			o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
			o("WAWebMsgGetters").getIsGroupHistoryMessageInOwnChat,
			o("WAWebFrontendMsgGetters").getIsFadingOut
		]), ct = ut[0], dt = ut[1], mt = ut[2], pt = ut[3], _t = ut[4], ft = ut[5], gt = ut[6], ht = ut[7], yt = ut[8], Ct = ut[9], bt = ut[10], vt = ut[11], St = ut[12], Rt = o("WAWebFrontendMsgGetters").getChat(M), Lt = o("WAWebThemeContext").useIsDarkTheme(), Et = R(r("WAWebChatThemeModeContext")), kt = Et.isVibrant, It = o("WAWebChatThemeGatingUtils").shouldApplyVibrantOverride({
			isVibrant: kt,
			isSentByMe: We,
			isNotification: Fe
		}), Tt = o("WAWebChatGetters").getIsBroadcast(Rt), Dt = I(null), xt = I(null), $t = I(null), Pt = I(null), Nt = I(null), Mt = I(null), wt = I(null), At = I(null), Ft = I(null), Ot = I(null), Bt = I(!1), Wt = I(null), qt = I(null), Ut = I(null), Vt = I(null), Ht = T(null), Gt = Ht[0], zt = Ht[1], jt = T(null), Kt = jt[0], Qt = jt[1], Xt = T(null), Yt = Xt[0], Jt = Xt[1], Zt = T(!1), en = Zt[0], tn = Zt[1], nn = T(!1), rn = nn[0], on = nn[1], an = T(function() {
			return N.selectedMessages ? N.selectedMessages.isSelected(o("WAWebStateUtils").unproxy(N.msg)) : !1;
		}), ln = an[0], sn = an[1], un = T(!1), cn = un[0], dn = un[1], mn = T(!1), pn = mn[0], _n = mn[1], fn = T(!1), gn = fn[0], hn = fn[1], yn = T(!1), Cn = yn[0], bn = yn[1], vn = T(null), Sn = vn[0], Rn = vn[1], Ln = T({ atLeastOnceKeyboardUser: !1 }), En = Ln[0], kn = Ln[1], In = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(M, o("WAWebViewMode.flow").ViewModeSurface.CHAT), Tn = r("useWAWebMessageHoverBar")(), Dn = D() && !Fe, xn = o("useWAWebMessageAriaLabel").useMessageAriaLabel(M, In, En), $n = function() {
			return !Fe && !(M.type === o("WAWebMsgType").MSG_TYPE.CHAT && M.subtype === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) && O !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && O !== o("WAWebDisplayType").DISPLAY_TYPE.CONTACT_CARD && O !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING && O !== o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && O !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS;
		}, Pn = xn;
		gn && ie && $n() && (Pn = xn != null ? s._(
			/*BTDS*/
			"",
			[s._param("messageContent", xn)]
		) : s._(
			/*BTDS*/
			""
		)), L(function() {
			ie && En.atLeastOnceKeyboardUser === !1 && kn(W);
		}, [ie]), L(function() {
			on(!1);
		}, [bt]), L(function() {
			return function() {
				ce.current && (re == null || re());
			};
		}, [re]);
		var Nn = o("WAWebWrapperHandlers").getHandlers(M), Mn = Nn.handleMsgInfoClick, wn = Nn.handleOpenBizEncStateMismatchInfoPopup, An = Nn.handleOpenBizPrivacyInfoPopup, Fn = Nn.handleOpenContactChat, On = Nn.handleOpenEphemeralExemptionInfoPopup, Bn = Nn.handleOpenEphemeralInfoPopup, Wn = Nn.handleOpenMarketingMessagesFeedbackPopup, qn = function(t) {
			!t.buttons && !en && $n() && tn(!0);
		}, Un = function() {
			tn(!1);
		}, Vn = function() {
			$n() && Un();
		}, Hn = I(!1), Gn = function(t) {
			if (!Hn.current && o("WAWebReactionsBEUtils").canHaveReactions(M) && No.current == null) {
				_n(!0);
				var e = Nt.current;
				if (e != null) {
					var n = o("WAWebFrontendMsgGetters").getChat(M), r = o("WAWebMsgReply").canReplyMsg(M), a = o("WAWebMsgActionCapability").canShowMsgEditAction(M, O, n);
					Tn.onHoverStart(e, M, We, {
						onReply: r ? ar : null,
						onEdit: We && a ? Or : null,
						onMoreOptions: Vo,
						menuContent: Io,
						canReact: o("WAWebReactionsUtils").canReactToMessage(M),
						returnFocusToMessage: Ir
					});
				}
			}
		}, zn = function() {
			_n(!1), Tn.onHoverEnd();
		}, jn = function() {
			Hn.current = !0, zn();
		}, Kn = function(t) {
			var e;
			Hn.current = !1;
			var n = t.relatedTarget;
			n instanceof Node && (e = Nt.current) != null && e.contains(n) && Gn();
		}, Qn = o("WAWebDisplayType").isMsgGalleryDisplay(O), Xn = o("WAWebDisplayType").isConversationDisplay(O), Yn = o("WAWebDisplayType").isWideDisplay(O), Jn = function() {
			var e, t, n = (e = (t = At.current) == null ? void 0 : t.contains(document.activeElement)) != null ? e : !1;
			return ie && n;
		}, Zn = function() {
			var e = K == null || K === !1, t = Jn();
			bn(!Be && Xn && e && (pn || Yt != null || Kt != null || t));
		}, er = r("useWAWebDebouncedCallback")(Zn, o("WAWebWrapperConstants").DEBOUNCE_DURATION.REACTION_BUTTON), tr = function() {
			_n(!0), Dn || er();
		}, nr = function() {
			_n(!1), Dn || er();
		}, rr = function() {
			er();
		}, or = function() {
			Xn ? Mr(o("WAWebMultiSelectBar.react").MultiSelectMode.DELETE) : o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: Rt,
				msgList: [M].map(o("WAWebStateUtils").unproxy),
				isMsgVisible: Q
			})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
		}, ar = function() {
			o("WAWebMessageHandlers").handleMessageReply(Rt, M, o("WAWebWamEnumQuotedMessageUserJourneyEntryPoint").QUOTED_MESSAGE_USER_JOURNEY_ENTRY_POINT.CONTEXT_MENU_REPLY_BUTTON);
		}, ir = function() {
			o("WAWebMessageHandlers").handleAskMetaAi(M);
		}, lr = function() {
			o("WAWebModalManager").closeModalManager();
			var t = o("WAWebStateUtils").unproxy(M);
			r("WAWebReplyToMsgChatAction")(t).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[private msg reply] failed to privately reply to msg"]))).catching(r("getErrorSafe")(t)).sendLogs("private-msg-reply-failed");
			});
		}, sr = function() {
			var e = o("WAWebStateUtils").unproxy(M);
			(n("cr:12467") == null ? void 0 : n("cr:12467").trySaveAs(e)) !== !0 && o("WAWebFileSaver").FileSaver.initDownload(e);
		}, ur = function() {
			n("cr:7565") && n("cr:7565").saveMediaFile(o("WAWebStateUtils").unproxy(M)).then(function() {
				if (n("cr:13786")) return n("cr:13786").shareFile(o("WAWebStateUtils").unproxy(M));
			}).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Error while sharing a message: ", ""])), e);
			});
		}, cr = function() {
			n("cr:7565") ? n("cr:7565").saveMediaFile(o("WAWebStateUtils").unproxy(M)).catch(function(e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Error while downloading a message: ", ""])), e);
			}) : o("WAWebFileSaver").FileSaver.initDownload(o("WAWebStateUtils").unproxy(M));
		}, dr = function() {
			n("cr:7565") && n("cr:7565").copyMediaFile(o("WAWebStateUtils").unproxy(M)).then(function(e) {
				o("WAWebToastManager").ToastManager.open(v.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._param("fileName", e)]
				) }));
			}).catch(function(e) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Error while copying a message: ", ""])), e);
			});
		}, mr = function() {
			_r(o("WAWebBotTypes").BotFeedbackKind.POSITIVE);
		}, pr = function() {
			o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebBotFeedbackModal.react"), {
				msg: M,
				onSubmit: _r
			}));
		}, _r = function(t) {
			o("WAWebSendBotFeedbackAction").sendBotFeedback(M, t), o("WAWebToastManager").ToastManager.open(v.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), o("WAWebModalManager").ModalManager.close();
		}, fr = function() {
			new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.THUMB_DOWN_CLICKED }).commit(), o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebSupportBotNegativeFeedbackModal"), {
				msgKey: M.id,
				onSubmit: o("WAWebSendSupportBotFeedbackActions").handleSupportBotFeedbackSubmit
			}));
		}, gr = async function() {
			new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.THUMB_UP_CLICKED }).commit(), await o("WAWebSendSupportBotFeedbackActions").handleSupportBotFeedbackSubmit(M.id, ["positive"]);
		}, hr = function() {
			var e = new (o("WAWebPinnedMessagesUserJourneyLogger")).PinnedMessagesUserJourneyLogger(Rt);
			e.messageMenuClickPin(M), o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebPinMessageModal.react"), {
				msg: M,
				logger: e
			}));
		}, yr = function() {
			var e = o("WAWebPinInChatCollection").PinInChatCollection.getByParentMsgKey(M.id);
			new (o("WAWebPinnedMessagesUserJourneyLogger")).PinnedMessagesUserJourneyLogger(Rt).messageMenuClickUnpin(M, e), o("WAWebSendPinMessageAction").sendPinInChatMsg(M, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch(function(e) {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Error while unpinning a message: ", ""])), e);
			});
		}, Cr = function() {
			var e = o("WAWebStateUtils").unproxy(M);
			o("WAWebCmd").Cmd.sendStarMsgs(Rt, [e]);
		}, br = function() {
			var e = o("WAWebStateUtils").unproxy(M);
			o("WAWebCmd").Cmd.sendUnstarMsgs(Rt, [e]);
		}, vr = async function() {
			try {
				await o("WAWebKeepInChatActions").runKeepInChatUX(o("WAWebStateUtils").unproxy(M), o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.CHAT);
			} catch (t) {
				var e;
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Keep operation not complete. Reason: ", ""])), (e = r("getErrorSafe")(t).message) != null ? e : "unknown");
			}
		}, Sr = async function() {
			try {
				await o("WAWebKeepInChatActions").runUndoKeepInChatUX(o("WAWebStateUtils").unproxy(M), o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.CHAT);
			} catch (t) {
				var e;
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["UndoKeep operation not complete. Reason: ", ""])), (e = r("getErrorSafe")(t).message) != null ? e : "unknown");
			}
		}, Rr = function() {
			o("WAWebFavoriteStickerAction").addStickerMsgsToFavorites([o("WAWebStateUtils").unproxy(M)]);
		}, Lr = function() {
			o("WAWebFavoriteStickerAction").removeStickerMsgFromFavorites(o("WAWebStateUtils").unproxy(M));
		}, Er = function() {
			r("WAWebAddMsgToNoteAction")(M);
		}, kr = function(t) {
			At.current && r("WAWebFocusTracer").focus(At.current, t);
		}, Ir = r("useWAWebStableCallback")(function() {
			kr({ preventScroll: !0 });
		}), Tr = r("useWAWebStableCallback")(function() {
			ie && Ir();
		}), Dr = r("useWAWebStableCallback")(function(e) {
			Ir(), zt(null), e != null && o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.contextMenuDismissed(), ie && tn(!1);
		}), xr = r("useWAWebStableCallback")(function() {
			Ir(), Qt(null), Gt != null && zt(null), ie && _n(!1), er(), o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose(), Bt.current = !1;
		}), $r = r("useWAWebStableCallback")(function() {
			Wt.current != null && (Wt.current.remove(), Wt.current = null), Ut.current != null && (Ut.current(), Ut.current = null);
		}), Pr = r("useWAWebStableCallback")(function(e) {
			e === void 0 && (e = !1), e || Ir(), Jt(null), to.current = null, $r(), ie && _n(!1), er(), Bt.current || o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose(), Hr.current = !1, Gr.current++;
		}), Nr = function() {
			Ir();
		}, Mr = function(t, n) {
			o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), n && n.stopPropagation(), X ? X(o("WAWebStateUtils").unproxy(M), !ln, t, n) : o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["no onMessageSelect"]))).sendLogs("wrapper-onSelectClick");
		}, wr = function() {
			return At.current;
		}, Ar = function(t) {
			Nt.current && (on(!0), ue(xt.current, "animationend", function() {
				on(!1);
			}), H && t !== !0 && kr({ preventScroll: !0 }));
		}, Fr = function() {
			o("WAWebMessageHandlers").handleOpenForwardFlow({
				multiSelect: Xn,
				msg: o("WAWebStateUtils").unproxy(M),
				handleSelectClick: Mr
			});
		}, Or = function() {
			o("WAWebMsgActionCapability").canEnterEditingFlow(M) && o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebMessageEditFlow.react"), { msg: M }));
		}, Br = function() {
			o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
				reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
				groupId: o("WAWebFrontendMsgGetters").getChat(M).id.user
			}), o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebReportToAdminPopup.react"), { msg: M }));
		}, Wr = function() {
			o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebPaidPartnershipLabelModal.react"), { msg: M }));
		}, qr = function() {
			o("WAWebNewsletterAddAiContentLabelFlow").runAddAiContentLabelFlow(M);
		}, Ur = I(r("WAWebNoop")), Vr = I(r("WAWebNoop")), Hr = I(!1), Gr = I(0), zr = I(!0);
		L(function() {
			return zr.current = !0, function() {
				zr.current = !1;
			};
		}, []);
		var jr = I(r("WAWebNoop")), Kr = r("useWAWebStableCallback")(function(e) {
			o("WAWebSendReactionMsgAction").sendReactionToMsg(M, e).then(function() {
				o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(e);
			}).catch(function(e) {}), Bt.current = !1, Ur.current(), Pr();
		}), Qr = r("useWAWebStableCallback")(function() {
			if (Bt.current = !1, Hr.current) {
				Hr.current = !1;
				return;
			}
			Pr();
		}), Xr = r("useWAWebReactionEmojiPickerMenu")({
			targetRef: qt,
			msgId: Le.toString(),
			onSelection: Kr,
			align: "middle",
			onClose: Qr
		}), Yr = Xr.closeMenu, Jr = Xr.isMenuOpen, Zr = Xr.menuPortal, eo = Xr.openMenu;
		L(function() {
			Ur.current = Yr;
		}, [Yr]);
		var to = I(null), no = T(!1), ro = no[0], oo = no[1], ao = T(x), io = ao[0], lo = r("useWAWebStableCallback")(function(e) {
			var t = e.anchor, n = e.dirX, a = e.dirY, i = e.disableAutoFocus, l = e.entryPoint, s = e.msgLocal, u = e.onCollapseEmojiPicker, c = e.onShiftTabToMenu, d = e.onTabToMenu, m = e.rotateFocusArrowsRef, p = function(t) {
				o("WAWebSendReactionMsgAction").sendReactionToMsg(s, t).then(function() {
					o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(t);
				}).catch(function(e) {}), er(), Bt.current = !1, Ur.current(), Pr();
			};
			return {
				dirY: a,
				dirX: n,
				type: o("WAWebDropdown.react").MenuType.ReactionSendTray,
				menu: v.jsx(r("WAWebRightClickReactionBarContainer.react"), {
					ref: qt,
					msg: s,
					pickerAnimationStore: io,
					onReaction: p,
					onOpenEmojiPicker: function() {
						Bt.current = !0, Vr.current(), oo(!0), eo();
					},
					onCollapseEmojiPicker: u,
					onMouseEnter: tr,
					onMouseLeave: nr,
					onShiftTabToMenu: c,
					onTabToMenu: d,
					rotateFocusArrowsRef: m,
					userJourneyEntryPoint: l,
					disableAutoFocus: i
				}),
				flipOnRTL: !0,
				anchor: t
			};
		}), so = r("useWAWebStableCallback")(function(e, t, n, r, a, i, l, s, u, c) {
			r === void 0 && (r = o("WAWebDropdown.react").DirX.CENTER), a === void 0 && (a = o("WAWebDropdown.react").DirY.TOP);
			var d = {
				msgLocal: e,
				anchor: t,
				entryPoint: n,
				dirX: r,
				dirY: a,
				disableAutoFocus: i,
				onTabToMenu: l,
				onShiftTabToMenu: s,
				rotateFocusArrowsRef: u,
				onCollapseEmojiPicker: c
			};
			to.current = d, Gr.current++, io.updateSnapshot({
				canAnimateExpand: ro,
				isExpanded: d.onCollapseEmojiPicker != null && Jr
			}), Jt(lo(d));
		});
		L(function() {
			var e;
			io.updateSnapshot({
				canAnimateExpand: ro,
				isExpanded: ((e = to.current) == null ? void 0 : e.onCollapseEmojiPicker) != null && Jr
			});
		}, [
			ro,
			Jr,
			io
		]);
		var uo = r("useWAWebStableCallback")(function(e, t, n, a) {
			var i;
			if (o("WAWebReactionsUtils").canReactToMessage(e)) {
				!o("WAWebFrontendChatGetters").getIsCAG(o("WAWebFrontendMsgGetters").getChat(e)) && !o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(e)) && o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(o("WAWebFrontendMsgGetters").getChat(e));
				var l = (i = n.current) == null ? void 0 : i.getBoundingClientRect();
				if (l != null) {
					$r();
					var s = o("WAWebMessageUiUtils").calculateReactionTrayPosition(l), u = s.anchorX, c = s.anchorY, d = s.dirX, m = s.dirY, p = o("WAWebMessageUiUtils").createVirtualAnchor(u, c);
					document.body != null && document.body.appendChild(p), Wt.current = p;
					var _ = function() {
						var e = n.current;
						if (e != null) {
							var t = o("WAWebKeyboardTabUtils").getTabbableElements(e, o("WAWebKeyboardTabUtils").FocusType.TABBABLE)[0];
							t != null && r("WAWebFocusTracer").focus(t);
						}
					}, f = function() {
						var e = n.current;
						if (e != null) {
							var t = o("WAWebKeyboardTabUtils").getTabbableElements(e, o("WAWebKeyboardTabUtils").FocusType.TABBABLE), a = t[t.length - 1];
							a != null && r("WAWebFocusTracer").focus(a);
						}
					}, g = n.current;
					if (g != null) if (o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup")) Ut.current = $(g, Vt);
					else {
						var h = g, y = function(t) {
							if (!(t.key !== "Tab" || !t.shiftKey)) {
								var e = o("WAWebKeyboardTabUtils").getTabbableElements(h, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
								if (!(e.length === 0 || h.ownerDocument.activeElement !== e[0])) {
									var n = Vt.current;
									n != null && (t.preventDefault(), t.stopPropagation(), n.focusFirst());
								}
							}
						};
						h.addEventListener("keydown", y, !0), Ut.current = function() {
							h.removeEventListener("keydown", y, !0);
						};
					}
					so(e, p, t, d, m, !ie, _, f, Vt, a != null ? function() {
						Hr.current = !0, oo(!0);
						var r = Gr.current;
						Yr(), o("ReactDOM").flushSync(function() {
							a();
						}), window.requestAnimationFrame(function() {
							window.requestAnimationFrame(function() {
								!zr.current || Gr.current !== r || jr.current(e, t, n, a);
							});
						});
					} : null);
				}
			}
		});
		L(function() {
			jr.current = uo;
		}, [uo]);
		var co = r("useWAWebStableCallback")(function(e, t, n) {
			var r;
			if (o("WAWebReactionsUtils").canReactToMessage(e)) {
				!o("WAWebFrontendChatGetters").getIsCAG(o("WAWebFrontendMsgGetters").getChat(e)) && !o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(e)) && o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(o("WAWebFrontendMsgGetters").getChat(e));
				var a = ((r = Ft.current) == null ? void 0 : r.getBoundingClientRect().left) !== 0 ? Ft.current : $t.current;
				self.setTimeout(function() {
					so(e, a, n, o("WAWebDropdown.react").DirX.CENTER, o("WAWebDropdown.react").DirY.TOP, !1);
				}, 50);
			}
		}), mo = function() {
			var e;
			return (e = Dt.current) == null ? void 0 : e.getRef();
		}, po = r("useWAWebStableCallback")(function(e) {
			Dt.current = { getRef: function() {
				return e;
			} };
		}), _o = function() {
			Yt ? Pr() : co(M, void 0, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_REACTION_BUTTON);
		}, fo = function() {
			if (o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(M))) {
				o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebReportNewsletterPostPopup.react"), {
					chat: o("WAWebFrontendMsgGetters").getChat(M),
					msg: M,
					spamFlow: o("WAWebSpamConstants").SpamFlow.MessageMenu
				}));
				return;
			}
			o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebReportMsgPopup.react"), {
				msg: M,
				spamFlow: o("WAWebSpamConstants").SpamFlow.MessageMenu
			}));
		}, go = function(t) {
			if (ie && K === !0) {
				t.preventDefault(), Mr();
				return;
			}
			var e = mo();
			(e == null ? void 0 : e.handleKeyActivation) != null && e.handleKeyActivation(t);
		}, ho = function() {
			var e = Jn();
			return $n() && K !== !0 && (en && !rn || Z === !0 || !!Gt || e);
		}, yo = function() {
			var e, t;
			return ge && (e = function(t) {
				t.preventDefault(), t.stopPropagation(), o("WAWebPttPrefs").PttPrefs.increasePlaybackRateFor(Le);
			}, t = function(t) {
				t.preventDefault(), t.stopPropagation(), o("WAWebPttPrefs").PttPrefs.decreasePlaybackRateFor(Le);
			}), {
				enter: go,
				space: go,
				"shift+>": e,
				"shift+<": t
			};
		}, Co = o("WAWebMediaDocumentUtils").useIsFileInCacheState(M) === !0, bo = I("full"), vo = I(null), So = T(null), Ro = So[0], Lo = So[1], Eo = Tt ? v.jsx(r("WAWebBroadcastMessageDropdownMenu.react"), {
			msg: M,
			onStarClick: Cr,
			onUnstarClick: br
		}) : v.jsx(r("WAWebWrapperMessageDropdownMenu.react"), {
			msg: M,
			associatedMessages: In,
			isFileInCache: Co,
			onKeepClick: vr,
			onUndoKeepClick: Sr,
			displayType: O,
			onMsgInfoClick: Mn,
			onReplyClick: ar,
			onPrivateReplyClick: lr,
			onMessageDownloadClick: cr,
			onMessageSaveAsClick: sr,
			onMessageDocumentCopyClick: dr,
			onBotPositiveFeedbackClick: mr,
			onMessageSelectClick: Mr,
			onBotNegativeFeedbackClick: pr,
			onSupportBotPositiveFeedbackClick: gr,
			onSupportBotNegativeFeedbackClick: fr,
			onStarClick: Cr,
			onUnstarClick: br,
			onFavoriteStickerClick: Rr,
			onUnfavoriteStickerClick: Lr,
			onMessageDeleteClick: or,
			onOpenContactChatClick: Fn,
			onForwardClick: Fr,
			onShareClick: ur,
			onCopyFavoriteStickerClick: G,
			onCopyLottieStickerClick: z,
			onOpenStickerPackClick: j,
			onReactionClick: function() {
				return co(M, void 0, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_MENU_ITEM_REACTION);
			},
			onReportClick: function() {
				return fo(M);
			},
			onEditClick: Or,
			onRTAClick: Br,
			onPinClick: hr,
			onUnpinClick: yr,
			onNewsletterEmbedClick: function() {
				return o("WAWebNewsletterMsgLinkUtils").handleNewsletterMsgEmbedClick(M);
			},
			onNewsletterMessageLinkCopyClick: function() {
				return o("WAWebNewsletterMsgLinkUtils").handleNewsletterMessageLinkCopyClick(M);
			},
			onAddToNoteClick: Er,
			onAddAiContentLabelClick: qr,
			onAddPaidPartnershipLabelClick: Wr,
			onAskMetaAiClick: ir,
			rightClickedLinkHref: Ro
		}), ko = v.jsx(r("WDSMenu.react"), {
			useMaxWidth: !1,
			maxWidth: 300,
			children: bo.current === "full" ? Eo : o("WAWebMessageDebugMenuItems.react").getWAWebMessageDebugMenuItems(M)
		}), Io = v.jsx(r("WDSMenu.react"), {
			useMaxWidth: !1,
			maxWidth: 300,
			children: Eo
		});
		function To() {
			o("WAWebModalManager").ModalManager.exists(function(e) {
				Bt.current || Pr(e);
			});
		}
		var Do = r("useWDSMenu")({
			targetRef: Ot,
			menu: ko,
			contextMenuArea: !0,
			enableUIM: !0,
			onClose: To
		}), xo = Do.closeMenu, $o = Do.isMenuOpen, Po = Do.menuPortal, No = Do.menuRef, Mo = Do.openMenu;
		L(function() {
			Vr.current = xo;
		}, [xo]);
		function wo() {
			o("WAWebModalManager").ModalManager.exists(function(e) {
				e || Ir(), Pr(!0);
			});
		}
		var Ao = r("useWDSMenu")({
			targetRef: $t,
			menu: Io,
			enableUIM: !0,
			onClose: wo
		}), Fo = Ao.closeMenu, Oo = Ao.menuPortal, Bo = Ao.menuRef, Wo = Ao.openMenu, qo = function(t) {
			var e, n;
			if (Vr.current = xo, Jt(null), $r(), Bt.current = !1, oo(!1), Jr && Yr(), ((e = (n = document.getSelection()) == null ? void 0 : n.toString()) != null ? e : "") === "") {
				if (t.stopPropagation(), !r("gkx")("26258")) {
					var a = o("WAWebStateUtils").unproxy(M);
					window.msg = a, o("WAWebCmd").Cmd.trigger("debug-msg-changed", a), window.Debug.msgHandler && window.Debug.msgHandler();
				}
				if (!$n()) {
					o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled() && (bo.current = "debug", Mo(t));
					return;
				}
				bo.current = "full", Lo(U(t)), vo.current = {
					clientX: t.clientX,
					clientY: t.clientY
				};
				var i = $o;
				o("ReactDOM").flushSync(function() {
					Mo(t);
				}), Tn.onHoverEnd();
				var l = function() {
					uo(M, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_MENU_ITEM_REACTION, No, D() ? function() {
						var e = vo.current;
						Mo(e != null ? new MouseEvent("contextmenu", {
							button: 2,
							clientX: e.clientX,
							clientY: e.clientY,
							bubbles: !0,
							cancelable: !0
						}) : void 0);
					} : void 0);
				};
				i ? window.requestAnimationFrame(function() {
					window.requestAnimationFrame(l);
				}) : l();
			}
		}, Uo = function() {
			Vr.current = Fo, Lo(null), oo(!1), Wo(), self.setTimeout(function() {
				uo(M, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_MENU_ITEM_REACTION, Bo, D() ? Wo : void 0);
			}, 150);
		}, Vo = function() {
			Lo(null), Wo();
		}, Ho = function(t, n, a) {
			if (n && Gt) {
				zt(null), Qt(null), Jt(null);
				return;
			}
			var e = n ? $t.current : t, i = v.jsxs(v.Fragment, { children: [!Dn && r("WAWebWrapperMessageDropdownMenuReactionsTray.react") ? v.jsx(r("WAWebWrapperMessageDropdownMenuReactionsTray.react"), {
				anchor: e,
				msg: M,
				onMouseEnter: tr,
				onMouseOver: tr,
				onMouseLeave: nr,
				onReactionSent: function() {
					er(), zt(null), o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose();
				},
				isSentByMe: We,
				isWideDisplay: Yn,
				onReactionPickerOpen: Qt
			}) : null, Tt ? v.jsx(r("WAWebBroadcastMessageDropdownMenu.react"), {
				msg: M,
				onStarClick: Cr,
				onUnstarClick: br
			}) : v.jsx(r("WAWebWrapperMessageDropdownMenu.react"), {
				msg: M,
				associatedMessages: In,
				isFileInCache: Co,
				onKeepClick: vr,
				onUndoKeepClick: Sr,
				displayType: O,
				onMsgInfoClick: Mn,
				onReplyClick: ar,
				onPrivateReplyClick: lr,
				onMessageDownloadClick: cr,
				onMessageSaveAsClick: sr,
				onMessageDocumentCopyClick: dr,
				onBotPositiveFeedbackClick: mr,
				onMessageSelectClick: Mr,
				onBotNegativeFeedbackClick: pr,
				onSupportBotPositiveFeedbackClick: gr,
				onSupportBotNegativeFeedbackClick: fr,
				onStarClick: Cr,
				onUnstarClick: br,
				onFavoriteStickerClick: Rr,
				onUnfavoriteStickerClick: Lr,
				onMessageDeleteClick: or,
				onOpenContactChatClick: Fn,
				onForwardClick: Fr,
				onShareClick: ur,
				onCopyFavoriteStickerClick: function(t) {
					return void o("WAWebCopyToClipboard").copyImageToClipboard(t);
				},
				onCopyLottieStickerClick: function(t) {
					return void o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(t);
				},
				onOpenStickerPackClick: function(t) {
					return o("WAWebCmd").Cmd.openStickerPack(t);
				},
				onReactionClick: function() {
					return co(M, void 0, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_MENU_ITEM_REACTION);
				},
				onReportClick: function() {
					return fo(M);
				},
				onEditClick: Or,
				onRTAClick: Br,
				onPinClick: hr,
				onUnpinClick: yr,
				onNewsletterEmbedClick: function() {
					return o("WAWebNewsletterMsgLinkUtils").handleNewsletterMsgEmbedClick(M);
				},
				onNewsletterMessageLinkCopyClick: function() {
					return o("WAWebNewsletterMsgLinkUtils").handleNewsletterMessageLinkCopyClick(M);
				},
				onAddToNoteClick: Er,
				onAddAiContentLabelClick: qr,
				onAddPaidPartnershipLabelClick: Wr,
				onAskMetaAiClick: ir,
				rightClickedLinkHref: a != null ? U(a) : null
			})] });
			a != null ? zt({
				menu: i,
				event: a
			}) : zt({
				menu: i,
				anchor: e,
				theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Compact,
				autoFocus: ie
			});
		}, Go = function(t) {
			var e = o("WAWebStateUtils").unproxy(M);
			if (!(!o("WAWebMsgReply").canReplyMsg(e) || K === !0 || !Xn || Gt || Yt)) {
				var n = function(t, n) {
					for (var e = n; e;) {
						if (e === t) return !0;
						e = e.parentNode;
					}
					return !1;
				};
				if (t.target instanceof HTMLElement && (n(Nt.current, t.target) || n(Ft.current, t.target))) {
					!r("gkx")("26258") && e.isViewOnce && !cn && (We || o("WAWebViewOnceState").isViewed(e.safe())) && dn(!0);
					return;
				}
				o("WAWebMessageHandlers").handleMessageReply(Rt, M, o("WAWebWamEnumQuotedMessageUserJourneyEntryPoint").QUOTED_MESSAGE_USER_JOURNEY_ENTRY_POINT.MESSAGE_DOUBLE_TAP), Ar();
			}
		}, zo = function() {
			$n() && (tn(!0), Ho(void 0, !0));
		}, jo = function(t) {
			ln !== t && sn(t);
		}, Ko = function(t, n) {
			At.current && o("WAWebDomScroll").scrollAt(At.current, void 0, n).then(t);
		}, Qo = function() {
			o("WAWebResendMsgAction").resendMsg(M).catch(function(e) {
				o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["wrapper:resend failure: ", ""])), e);
			});
		}, Xo = function() {};
		E(P, function() {
			return {
				focus: kr,
				openContextMenu: Mo,
				getContainerElement: wr,
				getMsgComponentRef: mo,
				resend: Qo
			};
		});
		var Yo = r("useWAWebEventTargetValue")(M, "change", function() {
			return o("WAWebMsgActionCapability").canQuickForwardMsg(M);
		}), Jo = r("useWAWebEventTargetValue")(M, "change", function() {
			return o("WAWebMsgGetters").getIsMarketingTemplateTag(M);
		});
		o("useWAWebListener").useListener(M, "revoked", function() {
			Gt && Dr(o("WAWebUim").DismissReason.LIFECYCLE), Yt && Pr(), Kt && xr();
		}), o("useWAWebListener").useListener(document, "selectionchange", function() {
			var e, t;
			((e = (t = document.getSelection()) == null ? void 0 : t.toString()) != null ? e : "") !== "" && Un();
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "media_viewer_modal", Un);
		var Zo = o("WAWebWrapperShouldDisplayAuthor").shouldDisplayAuthor({
			msg: M,
			position: A,
			displayType: O
		}), ea, ta = Xn ? 0 : -1;
		if (ho() && !Dn) {
			var na = M.id.fromMe ? null : M.senderObj, ra = na != null ? s._(
				/*BTDS*/
				"",
				[s._param("senderName", o("WAWebFrontendContactGetters").getDisplayName(na))]
			) : s._(
				/*BTDS*/
				""
			);
			ea = v.jsx(r("WAWebMessageMenu.react"), {
				msg: M,
				hasAuthor: Zo,
				displayType: O,
				onToggle: Uo,
				role: "button",
				ariaLabel: ra,
				tabIndex: ta,
				isMenuOpen: !!Gt
			}, "icon-context");
		}
		var oa = v.jsx("div", {
			className: "x10l6tqk xyc4j8s xceh6e4",
			ref: $t
		}), aa = null, ia = o("useWAWebMessageAriaDescription").useMessageAriaDescription(M, In, En) || Pn, la = s._(
			/*BTDS*/
			"",
			[s._param("checkbox-state", ln ? "selected" : "unselected"), s._param("msg-contents", ia)]
		);
		if (!Fe && N.selectable === !0 && !(M.type === o("WAWebMsgType").MSG_TYPE.CHAT && M.subtype === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE)) {
			var sa = O === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY || O === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY_LINKS ? "gallery" : null;
			aa = v.jsx(r("WAWebMessageCheckbox.react"), {
				checked: !!ln,
				onClick: function(t) {
					Mr(void 0, t), o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.messageForwardSelect(!!ln);
				},
				msgTheme: sa,
				ariaLabel: la
			});
		}
		var ua = null;
		if (Je === o("WAWebMsgType").MSG_TYPE.STICKER && N.selectable === !0) {
			var ca;
			ua = v.jsx("span", { children: v.jsx("div", {
				className: "x10l6tqk x11uqc5h xh8yej3 x5yr21d x1ypdohk",
				onMouseEnter: (ca = Mt.current) == null ? void 0 : ca.startAnimation,
				onClick: function(t) {
					return Mr(void 0, t);
				}
			}) });
		}
		var da = !1;
		if (Je === o("WAWebMsgType").MSG_TYPE.CHAT) {
			var ma = o("WAWebCodeFormatMutator").Code.match(Ce);
			da = ma.length === 1 && ma[0][4][0].length === Ce.length;
		}
		var pa = (a = o("useWAWebChatValues").useOptionalChatValues(Rt.id, [o("WAWebChatGetters").getIsPSA])) != null ? a : [], _a = pa[0], fa = o("WAWebWrapperShouldHaveTail").shouldHaveTail({
			chat: Rt,
			isDisplayedAsNotification: Fe,
			displayType: O,
			tailOverride: N.tailOverride,
			position: A
		}), ga = Ct && (!Zo || We || !Ne && !ze) && (Xn && (A === o("WAWebMessagePosition").MsgPosition.FRONT || A === o("WAWebMessagePosition").MsgPosition.SINGLE) || !Xn), ha = N.selectable !== !0 && (Xn || O === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO || O === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || O === o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG), ya = Se === !0 && !Fe && !Pe, Ca = De === !0 && !Ne && ((i = o("WAWebFrontendMsgGetters").getChat(M)) == null || (i = i.contact) == null ? void 0 : i.isOrHasBeenHosted) === !0, ba = ha && Yo, va = Je !== o("WAWebMsgType").MSG_TYPE.UNKNOWN && ha && Jo && !o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMUserControlsExceptionNumberPrefixMatch((l = o("WAWebFrontendMsgGetters").getChat(M)) == null || (l = l.contact) == null ? void 0 : l.id), Sa = at != null && !Be && !Rt.id.isBot() && !Rt.id.isCAPISupportAccount() && M.invokedBotWid == null, Ra, La = We && !Yn, Ea = !Rt.isUnreadMsg(M), ka = k(function() {
			return {
				isOutgoing: We,
				isRead: Ea
			};
		}, []);
		!Ct && M && Xn && o("WAWebReactionsUtils").shouldShowReactionBubble(M, o("WAWebAddOnBubbleType").AddOnBubbleType.DEFAULT) && (Ra = v.jsx(r("WAWebAddOnBubblesContainer.react"), {
			displayType: O,
			isOutgoingMsg: La,
			bubbleType: Je === o("WAWebMsgType").MSG_TYPE.IMAGE ? o("WAWebAddOnBubbleType").AddOnBubbleType.IMAGE_MSG : o("WAWebAddOnBubbleType").AddOnBubbleType.DEFAULT,
			parentIds: [M.id.toString()].concat(In.map(function(e) {
				return e.id.toString();
			})),
			onDetailsPaneClosed: Nr,
			hasReaction: ct || In.some(function(e) {
				return o("WAWebMsgGetters").getHasReaction(e);
			}),
			canHaveComments: o("WAWebFrontendChatGetters").getIsCAG(Rt),
			insightsChipMsg: M
		}));
		var Ia = o("WAWebWrapperOrderEphemeralExemption").isMessageExemptedFromDisappearing(Rt, M), Ta = Sa || ya || Ca || ba || va || Ia, Da = "x1n2onr6", xa = !Fe && O !== o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT && O !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS, $a = !Fe && We || O === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO, Pa = !Fe && !We, Na = O === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO, Ma = O === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS, wa = O !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS && O !== o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG && _a, Aa = Yn || Fe, Fa = Yn && Je !== o("WAWebMsgType").MSG_TYPE.ALBUM || Fe, Oa = o("WAWebClassnames").classnamesConvertMeToStylexPlease((C || (C = r("stylex")))(w.msg, me && !Aa && w.msgThreePanel, !o("WAWebChatGetters").getIsGroup(Rt) && w.wrapperAdjustedOneOnOneChat, !o("WAWebChatGetters").getIsGroup(Rt) && me && w.wrapperAdjustedOneOnOneChatThreePanel, Ma && w.wrapperChannelAlerts, Ma && me && w.wrapperChannelAlertsThreePanel, $a && w.rowAlignEnd, Pa && w.rowAlignStart, _t && w.msgDeletePending, Fe && w.msgSystem, Na && w.msgInfo, Na && me && w.msgInfoThreePanel, Aa && w.msgAnnouncement, Yn && w.wideDisplayRow, wa && w.msgPSARow, Fa && (me ? w.msgAnnouncementProportionalThree : w.msgAnnouncementProportionalTwo), me && Aa && w.msgAnnouncementThree, Qn && w.msgGallery, Na && Ta && w.msgWithQuickAction, O === o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS && w.msgScheduled), (y = {}, y[o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME] = H, y), {
			0: "",
			4: "x1klvx2g xahtqtb",
			2: "xl9ihdk x1hq3j7i x1dr3g3m",
			6: "x1klvx2g xahtqtb xl9ihdk x1hq3j7i x1dr3g3m",
			1: "xxp0q0x x1q3qbx4 xa3vuyk x10e4vud x47corl",
			5: "x1klvx2g xahtqtb xxp0q0x x1q3qbx4 xa3vuyk x10e4vud x47corl",
			3: "xxp0q0x x1q3qbx4 xa3vuyk x10e4vud x47corl",
			7: "x1klvx2g xahtqtb xxp0q0x x1q3qbx4 xa3vuyk x10e4vud x47corl"
		}[!!xa << 2 | (rn === !0) << 1 | !!St << 0]), Ba = o("WAWebWrapperConstants").NO_PADDING_SUBTYPES.includes(M.subtype), Wa = V(M, O, Rt), qa = Wa === "groupNotificationContextCardContainer", Ua = B(Wa, Qn, Na, Aa), Va = Ua.base, Ha = Ua.context, Ga = Ua.notifColor, za = C(w.message, w.teeLockHoverInset, Dn && w.hoverTintTrigger, o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") && w.messageHighlightMention, gn && ie && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent, gn && ie && w.messageFocused, fa && N.tailOverride === "left" && w.messageTailOverrideStart, fa && N.tailOverride === "right" && w.messageTailOverrideEnd, Va, da && w.messageCode, Qn && w.galleryMessage, Na && w.infoMessage, Ma && w.channelAlertsMessage, Ha, Fe && w.messageSystem, Ba && w.messageSystemNoPadding, wa && w.psaMessage, qa && w.groupNotificationContextCardContainer, Ga, vt && w.groupHistoryMessage, It && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingLiteralStyles.root, O === o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS && w.messageScheduledFullWidth);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "animate_message_bubble", function(e, t) {
			e.toString() === Le.toString() && Rn(t);
		});
		var ja = !Ct, Ka = o("WAWebClassnames").classnamesConvertMeToStylexPlease(C(ja && w.messageBackground, ja && r("gkx")("9189") && w.noZIndex, ja && Pa && w.messageBackgroundIncoming, ja && $a && w.messageBackgroundOutgoing, ja && Dn && Pa && (Lt ? w.hoverTintBubbleIncomingDark : w.hoverTintBubbleIncomingLight), ja && Dn && $a && (It || Lt ? w.hoverTintBubbleOutgoingWhite : w.hoverTintBubbleOutgoingAccent), ja && fa && Pa && w.bgTailFlatTopLeft, ja && fa && $a && w.bgTailFlatTopRight, ja && fa && N.tailOverride === "left" && w.bgTailOverrideLeft, ja && fa && N.tailOverride === "right" && w.bgTailOverrideRight, !Fe && !Ct && w.hasBorderBox, o("WAWebBotGating").shouldAnimateAsBotStream(M) && w.msgBubbleAnimation), vt && !Ct && "x9lmoot x1ppz1d2", Sn != null && (C || (C = r("stylex")))(Sn), C(It && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingTheme)), Qa;
		Gt ? Qa = "none" : Oe ? Qa = "pop-fast-reverse" : Qa = "pop-fast";
		var Xa;
		Kt ? Xa = v.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MsgReactionPicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: xr,
			children: v.jsx(r("WAWebUimUieMenu.react"), { contextMenu: Kt })
		}) : Yt && (Xa = v.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MsgReactionTray",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: function() {
				return Pr();
			},
			children: v.jsx(r("WAWebUimUieMenu.react"), { contextMenu: Yt })
		}));
		var Ya;
		N.isFocusedMsg === !0 && (Ya = v.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, { parent: {
			scrollMsg: Ko,
			highlight: Ar,
			highlightMention: Xo
		} }));
		var Ja;
		q && (Ja = v.jsx(o("WAWebWrapperListeners.react").SelectionListener, {
			parent: { onSelectChange: jo },
			msgId: Le.toString(),
			selectedMessages: q
		}));
		var Za = [], ei = Sa || Ca || ba || va || Ia, ti = null;
		if (ei) {
			var ni = {
				onOpenBizEncStateMissmatchInfoPopup: wn,
				showHostedBizEncStateMismatchInfoAction: Ca,
				showQuickBizPrivacyInfoAction: Sa,
				onOpenBizPrivacyInfoPopup: An,
				showQuickForwardAction: ba,
				onOpenForwardFlow: function(t) {
					o("WAWebMessageHandlers").handleOpenForwardFlow({
						msg: M,
						handleSelectClick: Mr,
						multiSelect: t,
						onForward: function(t) {
							o("WAWebForwardUtils").showForwardedToast(t.length);
						}
					}), o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.fastForwardButtonTapped(Rt.id, M);
				},
				showQuickMarketingMessagesFeedbackAction: va,
				onOpenMarketingMessagesFeedback: Wn,
				showQuickEphemeralExemptionInfoAction: Ia,
				onOpenEphemeralExemptionInfoPopup: On
			};
			ti = v.jsx(r("WAWebWrapperQuickActionButton.react"), babelHelpers.extends({}, ni));
		}
		var ri = ti != null && ya, oi = ya ? v.jsx(r("WAWebWrapperEphemeralInfoButton.react"), {
			onClick: Bn,
			atBubbleCorner: ri
		}) : null, ai = ri ? null : oi, ii = o("WAWebReactionsUtils").canReactToMessage(M) ? v.jsx(r("WAWebWrapperReactionsQuickActionButton.react"), {
			ref: Ft,
			msg: M,
			showButton: Cn,
			onToggleReactionTray: _o
		}) : null, li = ti != null ? ti : ai;
		Dn && li != null && (li = v.jsx("span", {
			className: "x78zum5",
			onPointerEnter: jn,
			onPointerLeave: Kn,
			children: li
		}));
		var si = ai != null && ii != null && Cn;
		si ? (ii != null && !Dn && Za.push(ii), li != null && Za.push(li)) : (li != null && Za.push(li), ii != null && !Dn && Za.push(ii));
		var ui;
		He && (ui = v.jsx(o("WAWebWrapperListeners.react").MediaListener, {
			forceUpdate: le,
			mediaData: He
		}));
		var ci = "msg-container";
		Fe && (ci = "msg-notification-container");
		var di;
		if (fa) {
			var mi;
			N.tailOverride === "left" ? mi = o("WAWebWrapperGetTailIcon").getTailIcon(o("WAWebWrapperConstants").MSG_DIRECTION.IN) : N.tailOverride === "right" ? mi = o("WAWebWrapperGetTailIcon").getTailIcon(o("WAWebWrapperConstants").MSG_DIRECTION.OUT) : mi = o("WAWebWrapperGetTailIcon").getTailIcon(We);
			var pi = Pa || N.tailOverride === "left", _i = $a || N.tailOverride === "right", fi = [
				w.tail,
				pi && w.tailLeft,
				_i && w.tailRight,
				o("WAWebStylesEnv").hasSafariFix && pi && w.tailLeftSafari,
				o("WAWebStylesEnv").hasSafariFix && _i && w.tailRightSafari,
				ga && w.tailHidden
			];
			di = v.jsx(mi, {
				xstyle: [].concat(fi, [
					Pa && w.tailColorIncoming,
					$a && w.tailColorOutgoing,
					Dn && Pa && (Lt ? w.hoverTintTailIncomingDark : w.hoverTintTailIncomingLight),
					Dn && $a && (It || Lt ? w.hoverTintTailOutgoingWhite : w.hoverTintTailOutgoingAccent)
				]),
				containerRef: Pt,
				"aria-hidden": !0
			});
		}
		var gi = M.safe(), hi = r("useWAWebBizVPVData")(M.unsafe()), yi = gi.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && gi.carouselCards != null ? v.jsx(r("WAWebInteractiveMessageCarousel.react"), {
			msg: gi,
			mainMsgWrapperRef: xt,
			isMsgVisible: N.isMsgVisible,
			msgComponentRef: po,
			bizVPVData: hi
		}) : null, Ci = r("WAWebWid").isCAPISupportAccount(M == null ? void 0 : M.from) && M.isSupportAIMessage === !0 && o("WAWebABPropsSaga").getIsSagaV1CarouselEnabled() && M.supportCitations != null && M.supportCitations.length > 0 ? v.jsx(r("WAWebSupportCarousel"), { items: (b = (S = M.supportCitations) == null ? void 0 : S.map(function(e) {
			return {
				title: e.title,
				subtitle: e.subtitle,
				cmsId: e.cmsId,
				imageUrl: e.imageUrl
			};
		})) != null ? b : [] }) : null, bi, vi;
		nt && et ? bi = v.jsx(r("WAWebBizTemplateButtons.react"), {
			msg: M,
			chat: Rt
		}) : st != null && st.length > 0 && O !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS && O !== o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG && (vi = v.jsx(r("WAWebMessageButtons.react"), { msg: M }));
		var Si;
		Fe || A === o("WAWebMessagePosition").MsgPosition.MID ? Si = null : We && he == null && Je !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION && Je !== o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT ? Si = v.jsx(o("WAWebAccessibility.react").InvisibleLabel, { children: s._(
			/*BTDS*/
			""
		) }) : Ne || (Si = v.jsx(o("WAWebAccessibility.react").InvisibleLabel, { children: s._(
			/*BTDS*/
			"",
			[s._param("author", o("WAWebMsgModelUtils").getMsgDisplayName(M))]
		) }));
		var Ri = null;
		Ie && (Ri = v.jsx(o("WAWebAccessibility.react").InvisibleLabel, { children: s._(
			/*BTDS*/
			""
		) }));
		var Li = o("WAWebMsgGetters").getIsInitialE2ENotification(M), Ei = v.jsx(r("WAWebWrapperMessageActionButtonsRow"), {
			isOutgoingMsg: !Yn && We,
			isMsgGallery: Qn,
			hasReaction: ct,
			messageActionButtons: Za,
			positionLeft: $a && !Yn || Pa && Qn,
			positionRight: Pa || $a && Yn,
			transparentGaps: Dn
		}, "msg-action-button-row-" + Le.toString()), ki = v.jsxs(r("WAWebBubbleAnimationWrapper.react"), {
			shouldAnimation: o("WAWebBotGating").shouldAnimateAsBotStream(M),
			bubbleRef: Nt,
			msg: M,
			componentClass: Ka,
			children: [
				Dn && pn && Tn.isBridgeActiveForMsg(M.id.toString()) && v.jsx("div", {
					className: "x10l6tqk x1v4kod4 x1ey2m1c x1m55yg7 x75ztot x67bb7w",
					"data-testid": "reactions_hover_bar_bridge_zone",
					onPointerEnter: Tn.cancelDismiss
				}),
				v.jsxs("div", babelHelpers.extends({}, {
					0: {},
					1: { className: "x1n2onr6 x1vjfegm" }
				}[!!(Dn && pn && Tn.isBridgeActiveForMsg(M.id.toString())) << 0], { children: [
					Si,
					v.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
						name: "msg",
						children: v.jsx(r("WAWebGroupMetadataContext").Provider, {
							value: Rt.groupMetadata,
							children: v.jsxs(r("WAWebMentionMessageContext").Provider, {
								value: ka,
								children: [
									v.jsx(r("WAWebMessageComponentWrapper.react"), {
										msgComponentRef: Dt,
										chat: Rt,
										displayAuthor: Zo,
										displayType: O,
										hover: en,
										isMsgVisible: Q,
										msg: M,
										associatedMessages: In,
										position: A,
										onProductClick: Y,
										onMessageClick: J,
										forwardStickerRef: Mt,
										stickerLikeBubbleContainerRef: wt,
										isFollowUpReply: oe
									}),
									v.jsx(r("WAWebViewRepliesLabel.react"), { msg: M.safe() }),
									v.jsx(r("WAWebNewsletterActionButtonWrapper.react"), { msg: M })
								]
							})
						})
					}),
					v.jsx(r("WAWebVelocityTransitionGroup"), {
						transitionName: Qa,
						children: ea
					}),
					oa
				] })),
				bi,
				Dn && Za.length > 0 && Ei
			]
		}), Ii = ri ? v.jsxs("div", {
			className: "x1n2onr6 x78zum5",
			children: [ki, v.jsx("div", babelHelpers.extends({}, {
				0: { className: "x10l6tqk x1ey2m1c x2hswfz x150mmf0" },
				1: { className: "x10l6tqk x1ey2m1c x1eu7cjg xqf2s3x" }
			}[!!(!Yn && We) << 0], { children: oi }))]
		}) : ki, Ti = v.jsxs("div", {
			"aria-label": Pn,
			className: Oa,
			role: Li ? "button" : void 0,
			ref: xt,
			children: [
				v.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "delay-leave",
					children: aa
				}),
				v.jsxs("div", {
					ref: Ot,
					"data-testid": ci,
					className: za,
					onContextMenu: qo,
					onMouseOver: Dn ? void 0 : qn,
					onMouseEnter: Dn ? Gn : qn,
					onMouseLeave: Dn ? zn : Vn,
					children: [
						di,
						te && v.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
							name: "msg-row-group-profile-picture-wrapper",
							children: v.jsx(r("WAWebWrapperGroupProfilePicture.react"), {
								position: A,
								tailOverride: N.tailOverride,
								msg: M,
								selectable: N.selectable
							})
						}),
						qe && n("cr:5997") && v.jsx(n("cr:5997"), {
							isPeeking: cn,
							onAnimationEnd: function() {
								return dn(!1);
							}
						}),
						v.jsx(r("WAWebMsgFailIcon.react"), {
							displayType: O,
							msg: M,
							associatedMessages: In
						}),
						ua,
						Ii,
						!Dn && Ei,
						vi,
						Ri,
						Ci
					]
				}),
				Ra,
				Xa,
				Po,
				Oo,
				Zr,
				Ya,
				Ja,
				ui
			]
		}), Di = r("gkx")("5902") ? 1e3 : 4e3;
		function xi(e) {
			var t;
			e.getModifierState("Control") && e.target instanceof Node && !((t = Nt.current) != null && t.contains(e.target)) && Mr(void 0, e);
		}
		var $i = v.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			className: Da,
			xstyle: [
				w.messageRow,
				(A === o("WAWebMessagePosition").MsgPosition.FRONT || A === o("WAWebMessagePosition").MsgPosition.MID) && !(nt && tt) && !Yn && w.messageContinuation,
				vt && w.groupHistoryMessageRow,
				vt && (Lt ? w.groupHistoryMessageRowDark : w.groupHistoryMessageRowLight),
				O === o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS && w.messageRowScheduled
			],
			"data-id": Le.id,
			"data-testid": "conv-msg-" + Le.id,
			handlers: yo(),
			onClick: n("cr:23046") != null && n("cr:23046").isWindowsHybridEnabled() ? xi : null,
			onDoubleClick: Go,
			ref: At,
			tabIndex: -1,
			onFocus: function() {
				if (ne == null || ne(), ce.current = !0, hn(!0), rr(), Dn && ie && o("WAWebReactionsBEUtils").canHaveReactions(M) && No.current == null) {
					var e = Nt.current;
					if (e != null) {
						var t = o("WAWebFrontendMsgGetters").getChat(M), n = o("WAWebMsgReply").canReplyMsg(M), r = o("WAWebMsgActionCapability").canShowMsgEditAction(M, O, t);
						Tn.onFocusStart(e, M, We, {
							onReply: n ? ar : null,
							onEdit: We && r ? Or : null,
							onMoreOptions: Vo,
							menuContent: Io,
							canReact: o("WAWebReactionsUtils").canReactToMessage(M),
							returnFocusToMessage: Ir
						});
					}
				}
			},
			onBlur: function() {
				re == null || re(), ce.current = !1, hn(!1), rr(), Dn && Tn.onFocusEnd();
			},
			onMouseOver: Dn ? void 0 : tr,
			onMouseEnter: Dn ? void 0 : tr,
			onMouseLeave: Dn ? void 0 : nr,
			children: [v.jsx(r("CometVirtualization.react"), {
				fasterSizeMeasurement: r("justknobx")._("1789"),
				unmountHiddenChildren: !0,
				hiddenMode: "none",
				pinChildrenOnInteraction: !1,
				topBottomMargin: Di,
				initialRenderConfig: {
					isVisible: !0,
					nodeHeight: null,
					hasScrollAnchoring: !0
				},
				children: Ti
			}), yi]
		});
		return v.jsx(r("WAWebExpandableTextContext").Provider, {
			value: Tr,
			children: v.jsx(r("WAWebWrapperDisplayTypeContext").Provider, {
				value: O,
				children: v.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
					role: "row",
					children: $i
				})
			})
		});
	}
	q.displayName = q.name + " [from " + i.id + "]";
	function U(e) {
		var t = e.target;
		if (t instanceof HTMLElement) {
			var n = t.closest("a");
			if (n instanceof HTMLAnchorElement && n.href !== "") return n.href;
		}
		return null;
	}
	function V(e, t, n) {
		var r;
		if (e.isViewOnce) return "messageChat";
		var a = o("WAWebMessagePluginMsgDisplayClass").msgDisplayClass({
			msg: e,
			displayType: t
		});
		if (a != null) return a;
		switch (e.type) {
			case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE: return "messageChat";
			case o("WAWebMsgType").MSG_TYPE.GP2: return (e.subtype === "create" && o("WAWebUserPrefsMeUser").isMeAccount((r = n.groupMetadata) == null ? void 0 : r.owner) || (e.subtype === "add" || e.subtype === "invite") && o("WAWebUserPrefsMeUser").isMeAccount(e.recipients[0])) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n) ? "groupNotificationContextCardContainer" : void 0;
			case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE: return o("WAWebWrapperConstants").NON_E2E_NOTIFICATION_SUBTYPES.includes(e.subtype) ? "messageNonE2ENotification" : o("WAWebMsgGetters").getIsBizNotification(e) ? "messageBizNotification" : void 0;
			case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION: return e.subtype === "encrypt" && o("WAWebMsgGetters").getIsCAPISupport(e) || e.subtype === "chat_psa" ? "messageNonE2ENotification" : "messageE2ENotification";
			case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
			case o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER: return "messageChat messagePlaceholder";
			case o("WAWebMsgType").MSG_TYPE.UNKNOWN: return "messageChat messagePlaceholder";
			case o("WAWebMsgType").MSG_TYPE.DEBUG: return;
			default: return;
		}
	}
	H.displayName = "Wrapper";
	function H(e) {
		var t, n, r, a = e.ref, i = babelHelpers.objectWithoutPropertiesLoose(e, y);
		return v.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: i.errorBoundaryName + "-message-wrapper",
			description: "msgId: " + ((t = (n = i.msg) == null || (n = n.id) == null ? void 0 : n.toString()) != null ? t : "") + " msgType: " + i.msg.type + ", msgSubtype: " + ((r = i.msg.subtype) != null ? r : "unknown"),
			sendLogs: !0,
			children: v.jsx(q, babelHelpers.extends({ ref: a }, i))
		});
	}
	H.displayName = H.name + " [from " + i.id + "]";
	function G(e) {
		o("WAWebCopyToClipboard").copyImageToClipboard(e);
	}
	function z(e) {
		o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(e);
	}
	function j(e) {
		o("WAWebCmd").Cmd.openStickerPack(e);
	}
	l.default = H;
}), 226);
