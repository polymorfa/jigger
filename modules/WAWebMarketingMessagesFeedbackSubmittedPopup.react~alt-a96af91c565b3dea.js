__d("WAWebMarketingMessagesFeedbackSubmittedPopup.react", [
	"fbt",
	"WALogger",
	"WAPromiseDelays",
	"WAWebBizUpdatePreferenceJob",
	"WAWebBlockBusinessPopup.react",
	"WAWebBlockContants",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMMUserControlsLogger",
	"WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
	"WAWebMarketingMessagesUserFeedbackGatingUtils",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumMmUserControlsAction",
	"WAWebWamEnumMmUserControlsEntryPoint",
	"WAWebWidToJid",
	"WDSIconIcBackHand.react",
	"WDSIconIcBlock.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		marginBottom16: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		marginEnd8: {
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		},
		paddingEnd2: {
			paddingInlineEnd: "x1j8ymqv",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.msg;
		if (!o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMMessageLevelFeedbackNotInterestedMenuEnabled()) return null;
		var a = c.jsx(r("WAWebClickableLink.react"), {
			onClick: async function() {
				try {
					var t = await o("WAWebBizUpdatePreferenceJob").updateUserPreferenceFeedback(o("WAWebWidToJid").widToUserJid(n.from), "unset_preference");
					if (t != null) throw t;
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), o("WAWebModalManager").ModalManager.close(), o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
						action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.UNDO,
						entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
						message: n,
						isSuccess: !0
					});
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMarketingMessagesFeedbackSubmittedPopup] undo failed"]))), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
						action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.UNDO,
						entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
						message: n,
						isSuccess: !1
					});
				}
			},
			children: r("WAWebFbtCommon")("Undo")
		});
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "marketing-feedback-submitted"
			},
			onOK: o("WAWebModalManager").closeModalManager,
			okText: s._(
				/*BTDS*/
				""
			),
			title: s._(
				/*BTDS*/
				""
			),
			children: [
				c.jsx(o("WAWebText.react").WAWebTextMuted, {
					xstyle: d.marginBottom16,
					children: s._(
						/*BTDS*/
						"",
						[s._param("business-name", c.jsx(o("WAWebName.react").Name, { contact: n.senderObj })), s._param("undo-link", a)]
					)
				}),
				!o("WAWebFrontendMsgGetters").getChat(n).contact.isContactOptedOut && o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMOptOutEnabled() && c.jsxs(c.Fragment, { children: [c.jsx(r("WAWebClickableLink.react"), {
					onClick: async function() {
						o("WAWebModalManager").ModalManager.close(), await o("WAPromiseDelays").delayMs(300), o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable").WAWebMarketingMessagesFeedbackStopConfirmationLoadable, {
							chat: o("WAWebFrontendMsgGetters").getChat(n),
							logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET
						}), { transition: "modal-flow" });
					},
					children: c.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						children: [c.jsx(r("WDSIconIcBackHand.react"), {
							width: 24,
							height: 24,
							xstyle: [d.marginEnd8, d.paddingEnd2]
						}), c.jsx("div", { children: s._(
							/*BTDS*/
							"",
							[s._param("business-name", c.jsx(o("WAWebName.react").Name, { contact: n.senderObj }))]
						) })]
					})
				}), c.jsx(p, {})] }),
				c.jsx(r("WAWebClickableLink.react"), {
					onClick: async function() {
						o("WAWebModalManager").ModalManager.close(), await o("WAPromiseDelays").delayMs(300), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBlockBusinessPopup.react"), {
							chat: o("WAWebFrontendMsgGetters").getChat(n),
							blockEntryPoint: o("WAWebBlockContants").BlockEntryPoint.Profile,
							withReport: !1,
							onMount: function() {
								o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
									action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.BLOCK,
									entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
									message: n,
									isSuccess: !0
								});
							}
						}), { transition: "modal-flow" });
					},
					className: "x30a034",
					children: c.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						children: [c.jsx(r("WDSIconIcBlock.react"), {
							width: 24,
							height: 24,
							xstyle: d.marginEnd8
						}), c.jsx("div", { children: s._(
							/*BTDS*/
							"",
							[s._param("business-name", c.jsx(o("WAWebName.react").Name, { contact: n.senderObj }))]
						) })]
					})
				})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx("div", { className: "xjm9jq1 xfw0ycb x98l61r x1ua1l7f" }), e[0] = t) : t = e[0], t;
	}
	l.default = m;
}), 226);
