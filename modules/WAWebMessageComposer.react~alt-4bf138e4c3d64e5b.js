__d("WAWebMessageComposer.react", [
	"WAWebAiModeSelector.react",
	"WAWebAttachMenuBarItem.react",
	"WAWebBotBaseGating",
	"WAWebBotGating",
	"WAWebBotUtils",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebComposeBoxSendButton.react",
	"WAWebContactGetters",
	"WAWebEnvironment",
	"WAWebExpressionsPanelPicker.react",
	"WAWebIsInThreadsViewContext",
	"WAWebKeyboardHotKeys.react",
	"WAWebMsgType",
	"WAWebNewsletterGatingUtils",
	"WAWebPttComposer.react",
	"WAWebQuestions.flow",
	"WAWebQuestionsAdminGatingUtils",
	"WAWebQuestionsGatingUtils",
	"WAWebQuickReplyComposerButton.react",
	"WAWebQuickReplyGatingUtils",
	"WAWebScheduleMessageButton.react",
	"WAWebScheduledMsgConstants",
	"WAWebStateUtils",
	"WDSMargins.stylex",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebListener",
	"useWAWebScheduledMsgCount"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useRef, p = { padding5: {
		paddingTop: "x123j3cw",
		paddingInlineEnd: "x1gabggj",
		paddingBottom: "xs9asl8",
		paddingInlineStart: "xaso8d8",
		$$css: !0
	} }, _ = "border-radius 300ms, box-shadow 300ms", f = {
		inputContainer: {
			boxSizing: "x9f619",
			flex: "x12lumcd",
			width: "x1qrby5j",
			minWidth: "xeuugli",
			minHeight: "xisnujt",
			fontSize: "x6prxxf",
			fontWeight: "x1fcty0u",
			lineHeight: "x1fc57z9",
			backgroundColor: "xk7ee7b",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			outline: "x1a2a7pz",
			willChange: "x13w7htt",
			display: "x78zum5",
			$$css: !0
		},
		inputContainerMaterial: {
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			$$css: !0
		},
		inputContainerRefresh: {
			minHeight: "x1wiwyrm",
			height: "xt7dq6l",
			borderStartStartRadius: "x17m9png",
			borderStartEndRadius: "x91sizk",
			borderEndEndRadius: "x1vva9xg",
			borderEndStartRadius: "x1jfkl46",
			alignItems: "x6s0dn4",
			transition: "x1m0b2ad",
			$$css: !0
		},
		inputBoxShadow: {
			boxShadow: "xkfubxc",
			$$css: !0
		},
		questionInputContainer: {
			backgroundColor: "x4wrhlh",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		withoutTopBorder: {
			borderTopWidth: "x972fbf",
			$$css: !0
		},
		inputContainerRefreshNoTopPanel: {
			transition: "x1p0mfcu",
			$$css: !0
		},
		inputContainerHasTopPanel: {
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			boxShadow: "xz16w4b",
			transition: "x1m0b2ad",
			$$css: !0
		},
		composerInputContainer: {
			display: "x78zum5",
			flex: "x98rzlu",
			alignItems: "xuk3077",
			minWidth: "xeuugli",
			$$css: !0
		},
		composerInputContainerDisabled: {
			pointerEvents: "x47corl",
			$$css: !0
		},
		containedInputContainer: {
			flexDirection: "xdt5ytf",
			alignItems: "x1qjc9v5",
			$$css: !0
		},
		containedComposer: {
			boxSizing: "x9f619",
			marginInlineStart: "x1uvdrpn",
			marginInlineEnd: "x14mko6t",
			marginBottom: "xcytdqz",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			backgroundColor: "xk7ee7b",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			transition: "x1m0b2ad",
			$$css: !0
		},
		containedComposerHasTopPanel: {
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			$$css: !0
		},
		containedInputRow: {
			backgroundColor: "xjbqb8w",
			boxShadow: "x1gnnqk1",
			$$css: !0
		}
	};
	function g(t) {
		var n = t.chat, a = t.closePttComposer, i = t.expressionsPanelPickerRef, l = t.expressionsPanelWrapperRef, s = t.getCurrentComposeContent, c = t.handleInputBlur, _ = t.handleInputFocus, g = t.handleMetaUpDebounced, y = t.handlePanelsGif, C = t.handlePanelsSticker, b = t.handlePanelsStickerFromStore, v = t.handleSendText, S = t.handleTab, R = t.hasTextState, L = t.hasTopPanel, E = t.input, k = t.inputHotkeyRef, I = t.isMessageToBot, T = t.onPttSend, D = t.onScheduleSend, x = t.pttComposerActive, $ = t.questionReplyQuotedMessage, P = t.questionType, N = t.recordingSession, M = t.ref, w = t.replaceInputSelection, A = t.richTextInputRef, F = t.smartComposerCard, O = t.smartComposerModePill, B = t.startRecording, W = t.threadId, q = t.updateTextAfterMediaDrawerClose, U = t.wwaiButton, V = m(null);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_attachment_dropdown", function() {
			var e = V.current;
			e && e.open();
		});
		var H = P === o("WAWebQuestions.flow").QuestionType.Question, G = P === o("WAWebQuestions.flow").QuestionType.Reply, z = o("WAWebQuestionsAdminGatingUtils").isQuestionsM2FeatureEnabledForAdmins(n), j = d(r("WAWebIsInThreadsViewContext")), K = r("useWAWebScheduledMsgCount")(D != null ? n.id : null), Q = K >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT, X = n.id.isAiHub(), Y = !j && (!o("WAWebChatGetters").getIsNewsletter(n) || o("WAWebNewsletterGatingUtils").isNewsletterPTTReceivingEnabled()) && (!H || z && o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(o("WAWebMsgType").MSG_TYPE.PTT)) && (!G || z && o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(o("WAWebMsgType").MSG_TYPE.PTT)) && !o("WAWebContactGetters").getIsCAPISupportAccount(n.contact) && (!I || o("WAWebBotGating").isBotPttEnabled(n.id)) && !o("WAWebChatGetters").getIsBroadcast(n) && !X, J = function(t) {
			t.target === t.currentTarget && x === !1 && (A == null || A.focus());
		}, Z = o("WAWebBotUtils").isMetaAiBot(n.id), ee = o("WAWebBotUtils").isBotChannelFBID(n.id), te = I && (Z && (o("WAWebBotGating").isAnyMetaAiMediaInputEnabled() || o("WAWebBotGating").isMetaAiDocUploadEnabled()) || ee), ne = !I || te, re = function(t) {
			return ne ? H ? o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(t) : G ? o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(t) : !o("WAWebChatGetters").getIsBroadcast(n) : !1;
		}, oe = Z && o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled(), ae = oe && o("WAWebBotGating").isAiModeSelectorInteractive(), ie = {
			expressionsPanelWrapperRef: l,
			expressionsPanelPickerRef: i,
			replaceInputSelection: w,
			handlePanelsSticker: C,
			handlePanelsStickerFromStore: b,
			handlePanelsGif: y,
			isStickerEnabled: !X && !ee && re(o("WAWebMsgType").MSG_TYPE.STICKER),
			isGifEnabled: !X && !ee && re(o("WAWebMsgType").MSG_TYPE.VIDEO),
			getComposeBoxEditorRef: function() {
				return A;
			},
			handleClose: function() {
				return A == null ? void 0 : A.focus();
			},
			size: G || H ? o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL : void 0
		}, le = F != null, se = le ? [p.padding5] : [
			p.padding5,
			o("WDSMargins.stylex").wdsMargins.marginHor12,
			o("WDSMargins.stylex").wdsMargins.marginBottom12
		], ue = u.jsx(o("WAWebComposeBoxSendButton.react").SendButtonRefresh, {
			supportsPtt: Y,
			onClickSend: v,
			recordingSession: N,
			onStartRecording: function() {
				return void B();
			},
			hasTextState: R,
			isMessageToBot: I,
			buttonVariant: (G || H) && !R ? "tonal" : void 0
		}), ce = D != null && R && N == null ? u.jsx(r("WAWebScheduleMessageButton.react"), {
			atLimit: Q,
			isGroup: o("WAWebChatGetters").getIsGroup(n),
			onScheduleSend: D
		}) : null, de = void 0;
		!j && ne && (!H || o("WAWebQuestionsGatingUtils").getEnabledQuestionAttachmentTypes().size > 0) && (!G || o("WAWebQuestionsGatingUtils").getEnabledQuestionReplyAttachmentTypes().size > 0) && (de = u.jsx("div", {
			className: "x100vrsf x1vqgdyp x78zum5 x6s0dn4 xpvyfi4",
			children: u.jsx(r("WAWebAttachMenuBarItem.react"), {
				ref: V,
				chat: o("WAWebStateUtils").unproxy(n),
				getComposeContents: s,
				getComposeBoxEditorRef: function() {
					return A;
				},
				onMenuComplete: q,
				questionType: P,
				questionReplyQuotedMessage: $,
				threadId: W
			})
		}));
		var me = x ? u.jsx("div", {
			className: "x78zum5 x13a6bvl xh8yej3 x67bb7w",
			children: u.jsx(r("WAWebPttComposer.react"), {
				chat: o("WAWebStateUtils").unproxy(n),
				recordingSession: r("nullthrows")(N),
				onComplete: a,
				onSend: T,
				questionType: P,
				questionReplyQuotedMessage: $,
				threadId: W
			})
		}) : u.jsxs(u.Fragment, { children: [
			ne && de,
			u.jsx(h, babelHelpers.extends({}, ie)),
			o("WAWebQuickReplyGatingUtils").isQuickReplyComposerEntryPointEnabled(o("WAWebStateUtils").unproxy(n)) && u.jsx(r("WAWebQuickReplyComposerButton.react"), {}),
			E,
			O,
			oe && u.jsx(r("WAWebAiModeSelector.react"), {
				chat: n,
				threadId: W,
				isInteractive: ae
			}),
			ce,
			U,
			ue
		] }), pe = r("WAWebEnvironment").isWindows, _e = babelHelpers.extends({
			tab: S,
			"shift+tab": S
		}, pe ? { "ctrl+up": g } : { "meta+up": g }, { up: g });
		return u.jsx("div", {
			ref: M,
			className: "x78zum5 xuk3077",
			children: u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.composerInputContainer, le && f.containedInputContainer, le && f.containedComposer, le && f.inputBoxShadow, le && L && f.containedComposerHasTopPanel, x && f.composerInputContainerDisabled), { children: [F, u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				ref: k,
				className: e(f.inputContainer, se, f.inputContainerMaterial, f.inputContainerRefresh, !P && f.inputBoxShadow, !L && f.inputContainerRefreshNoTopPanel, L && f.inputContainerHasTopPanel, P && f.questionInputContainer, P != null && L && f.withoutTopBorder, le && f.containedInputRow),
				handlers: _e,
				onClick: J,
				onFocus: _,
				onBlur: c,
				children: me
			})] }))
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.expressionsPanelPickerRef, n = e.expressionsPanelWrapperRef, r = e.getComposeBoxEditorRef, a = e.handleClose, i = e.handlePanelsGif, l = e.handlePanelsSticker, s = e.handlePanelsStickerFromStore, c = e.isGifEnabled, d = e.isStickerEnabled, m = e.replaceInputSelection, p = e.size;
		return u.jsx(o("WAWebExpressionsPanelPicker.react").ExpressionsPanelPicker, {
			ref: t,
			wrapperRef: n,
			onEmoji: m,
			onSticker: d ? l : void 0,
			onStickerFromStore: d ? s : void 0,
			onGif: c ? i : void 0,
			getComposeBoxEditorRef: r,
			onClose: a,
			size: p
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 98);
