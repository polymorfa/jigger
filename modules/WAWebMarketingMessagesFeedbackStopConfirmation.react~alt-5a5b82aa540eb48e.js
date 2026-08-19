__d("WAWebMarketingMessagesFeedbackStopConfirmation.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebGetMessageCache",
	"WAWebHandleSingleMsgWorkerCompatible",
	"WAWebMMUserControlsLogger",
	"WAWebMarketingMessagesFeedbackSystemMsg",
	"WAWebMarketingMessagesUserFeedbackGatingUtils",
	"WAWebMmSignalSharingLoggingEvents",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebOptOutBizAction",
	"WAWebOptOutUserJob",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumMmUserControlsAction",
	"WAWebWamEnumMmUserControlsEntryPoint",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useState, h = { marginBottom8: {
		marginBottom: "xefnzgg",
		$$css: !0
	} }, y = function() {
		o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
			action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.DISMISS,
			entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
			isSuccess: !0
		}), o("WAWebModalManager").ModalManager.close();
	};
	function C(t) {
		f(function() {
			o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
				action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.STOP,
				entryPoint: t.logEntryPoint,
				isSuccess: !0
			});
		}, [t.logEntryPoint]);
		var n = t.chat, a = g(!1), i = a[0], l = a[1], d = _(async function() {
			l(!0);
			try {
				await o("WAWebOptOutBizAction").optOutContact(n.contact, "marketing_messages", o("WAWebOptOutUserJob").convertMarketingEntryPointToOptOutEntryPoint(t.logEntryPoint)), o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserStopOffersVerificationEvent({ chat: n }), o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
					action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.STOP_CONFIRMATION,
					entryPoint: t.logEntryPoint,
					isSuccess: !0
				}), o("WAWebModalManager").ModalManager.close();
				var r = o("WAWebMarketingMessagesFeedbackSystemMsg").getMarketingMessagesStoppedSystemMsg(n.id);
				o("WAWebGetMessageCache").getMessageCache().addMessages([{ msg: r }], !1).catch(function() {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMarketingMessagesFeedbackStopConfirmation] Failed to add system message to the cache"])));
				}), o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
					chatId: r.from,
					newMsg: r,
					handleSingleMsgOrigin: "marketingMessagesFeedbackStopConfirmation"
				}).catch(function() {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMarketingMessagesFeedbackStopConfirmation] Failed to handle system message"])));
				});
			} catch (e) {
				o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
					action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.STOP_CONFIRMATION,
					entryPoint: t.logEntryPoint,
					isSuccess: !1
				}), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMarketingMessagesFeedbackStopConfirmation] Failed to stop marketing messages"])));
			} finally {
				l(!1);
			}
		}, [
			n.contact,
			n.id,
			t.logEntryPoint
		]);
		if (!o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMOptOutEnabled()) return null;
		var p = m.jsx(o("WAWebName.react").Name, { contact: n.contact });
		return m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "marketing-stop-confirmation"
			},
			onOK: d,
			okSpinner: i,
			okDisabled: i,
			onCancel: y,
			okText: s._(
				/*BTDS*/
				""
			),
			title: s._(
				/*BTDS*/
				"",
				[s._param("contactTitle", m.jsxs("span", {
					style: { whiteSpace: "nowrap" },
					children: [
						"\"",
						p,
						"\""
					]
				}))]
			),
			children: m.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: h.marginBottom8,
				children: s._(
					/*BTDS*/
					"",
					[s._param("learn-more-link", m.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").marketingMessageUserControlsStopLearnMoreURL(),
						onClick: function() {
							o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
								action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.LEARN_MORE,
								entryPoint: t.logEntryPoint,
								isSuccess: !0
							});
						},
						children: r("WAWebFbtCommon")("Learn more")
					}))]
				)
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
