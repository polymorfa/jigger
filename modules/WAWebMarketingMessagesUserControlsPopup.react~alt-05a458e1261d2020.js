__d("WAWebMarketingMessagesUserControlsPopup.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAPromiseDelays",
	"WAWebBizUpdatePreferenceJob",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMMUserControlsLogger",
	"WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
	"WAWebMarketingMessagesFeedbackSubmittedPopup.react",
	"WAWebMarketingMessagesUserFeedbackGatingUtils",
	"WAWebMmSignalSharingLoggingEvents",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebRadio.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumMmUserControlsAction",
	"WAWebWamEnumMmUserControlsEntryPoint",
	"WAWebWidToJid",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useState, g = {
		border: {
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		marginBottom16: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		marginVert8: {
			marginTop: "x1380le5",
			marginBottom: "xefnzgg",
			$$css: !0
		}
	}, h = n("$InternalEnum")({
		Interested: "interested",
		NotInterested: "not-interested",
		Stop: "stop"
	}), y = [{
		value: h.Interested,
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		}
	}, {
		value: h.NotInterested,
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		}
	}], C = function(t) {
		o("WAWebModalManager").ModalManager.close(), o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
			action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.DISMISS,
			entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
			message: t,
			isSuccess: !0
		});
	}, b = function(n, a) {
		o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
			id: "marketing-message-feedback-submitted-toast",
			action: {
				actionText: r("WAWebFbtCommon")("Undo"),
				onAction: async function() {
					try {
						var t = await o("WAWebBizUpdatePreferenceJob").updateUserPreferenceFeedback(o("WAWebWidToJid").widToUserJid(n.from), "unset_preference");
						if (t != null) throw t;
						o("WAWebToastManager").ToastManager.close("marketing-message-feedback-submitted-toast"), o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
							action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.UNDO,
							entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.TOAST,
							message: n,
							isSuccess: !0
						});
					} catch (t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMarketingMessagesUserControlsPopup] undo failed"]))), v(), o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
							action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.UNDO,
							entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.TOAST,
							message: n,
							isSuccess: !1
						});
					}
				}
			},
			msg: a
		}));
	}, v = function() {
		o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}, S = function(t) {
		o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebMarketingMessagesFeedbackSubmittedPopup.react"), { msg: t }), { transition: "modal-flow" });
	};
	function R(e) {
		var t, n = e.msg, a = f(h.Interested), i = a[0], l = a[1], c = f(!1), m = c[0], R = c[1];
		_(function() {
			o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
				action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.FEEDBACK,
				entryPoint: e.logEntryPoint,
				message: n,
				isSuccess: !0
			});
		}, [n, e.logEntryPoint]);
		var L = p(async function() {
			R(!0);
			try {
				if (i === h.Interested) {
					var e = await o("WAWebBizUpdatePreferenceJob").updateUserPreferenceFeedback(o("WAWebWidToJid").widToUserJid(n.from), "set_preference", "interested"), t = e == null;
					o("WAWebModalManager").ModalManager.close(), t ? b(n, s._(
						/*BTDS*/
						""
					)) : v(), o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
						action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.INTERESTED,
						entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
						message: n,
						isSuccess: t
					}), o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserInterestedEvent({
						chat: o("WAWebFrontendMsgGetters").getChat(n),
						msg: n
					});
				} else if (i === h.NotInterested) {
					var r = await o("WAWebBizUpdatePreferenceJob").updateUserPreferenceFeedback(o("WAWebWidToJid").widToUserJid(n.from), "set_preference", "not_interested"), a = r == null;
					a ? o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMMessageLevelFeedbackNotInterestedMenuEnabled() ? (o("WAWebModalManager").ModalManager.close(), await o("WAPromiseDelays").delayMs(300), S(n)) : (b(n, s._(
						/*BTDS*/
						""
					)), o("WAWebModalManager").ModalManager.close()) : (v(), o("WAWebModalManager").ModalManager.close()), o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
						action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.NOT_INTERESTED,
						entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
						message: n,
						isSuccess: a
					}), o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserNotInterestedEvent({
						chat: o("WAWebFrontendMsgGetters").getChat(n),
						msg: n
					});
				} else i === h.Stop ? (o("WAWebModalManager").ModalManager.close(), await o("WAPromiseDelays").delayMs(300), o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable").WAWebMarketingMessagesFeedbackStopConfirmationLoadable, {
					chat: o("WAWebFrontendMsgGetters").getChat(n),
					logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET
				}), { transition: "modal-flow" })) : o("WAWebModalManager").ModalManager.close();
			} catch (e) {
				o("WAWebModalManager").ModalManager.close(), v(), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMarketingMessagesUserControlsPopup] submit failed"])));
			} finally {
				R(!1);
			}
		}, [i, n]), E = d.jsx(o("WAWebName.react").Name, { contact: n.senderObj });
		return d.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "marketing-user-controls"
			},
			onOK: L,
			onCancel: function() {
				return C(n);
			},
			okDisabled: m,
			okSpinner: m,
			testid: "marketing-message-user-controls-popup",
			okText: s._(
				/*BTDS*/
				""
			),
			title: s._(
				/*BTDS*/
				"",
				[s._param("contactTitle", d.jsxs("div", { children: [
					"\"",
					E,
					"\""
				] }))]
			),
			children: [
				d.jsx(o("WAWebText.react").WAWebTextMuted, {
					xstyle: g.marginBottom16,
					children: s._(
						/*BTDS*/
						"",
						[s._param("learn-more-link", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebFaqUrl").marketingMessageFeedbackLearnMoreURL(),
							onClick: function() {
								o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
									action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.LEARN_MORE,
									entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
									message: n,
									isSuccess: !0
								});
							},
							children: r("WAWebFbtCommon")("Learn more")
						}))]
					)
				}),
				y.map(function(e) {
					var t = e.getLabel, n = e.value;
					return d.jsx(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						xstyle: g.border,
						children: d.jsx(o("WAWebRadio.react").RadioWithLabel, {
							testid: "mm-feedback-" + String(n),
							name: String(n) + "-radio",
							value: String(n),
							label: t(),
							checked: i === n,
							onChange: function() {
								return l(n);
							}
						})
					}, n);
				}),
				!((t = o("WAWebFrontendMsgGetters").getChat(n)) != null && (t = t.contact) != null && t.isContactOptedOut) && !o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMMessageLevelFeedbackNotInterestedMenuEnabled() && o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMOptOutEnabled() && d.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: g.border,
					children: d.jsx(o("WAWebRadio.react").RadioWithLabel, {
						testid: "mm-feedback-" + h.Stop,
						name: h.Stop + "-radio",
						value: h.Stop,
						label: s._(
							/*BTDS*/
							"",
							[s._param("business-name", E)]
						),
						checked: i === h.Stop,
						onChange: function() {
							return l(h.Stop);
						},
						xstyle: g.marginVert8
					})
				})
			]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);
