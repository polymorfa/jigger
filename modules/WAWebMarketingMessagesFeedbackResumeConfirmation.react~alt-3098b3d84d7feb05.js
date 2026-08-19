__d("WAWebMarketingMessagesFeedbackResumeConfirmation.react", [
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
				action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.RESUME,
				entryPoint: t.logEntryPoint,
				isSuccess: !0
			});
		}, [t.logEntryPoint]);
		var n = t.chat, a = g(!1), i = a[0], l = a[1], d = _(async function() {
			l(!0);
			try {
				await o("WAWebOptOutBizAction").optInContact({
					contact: n.contact,
					itemCategory: "marketing_messages",
					itemEntryPoint: o("WAWebOptOutUserJob").convertMarketingEntryPointToOptOutEntryPoint(t.logEntryPoint)
				}), o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
					action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.RESUME_CONFIRMATION,
					entryPoint: t.logEntryPoint,
					isSuccess: !0
				}), o("WAWebModalManager").ModalManager.close();
				var r = o("WAWebMarketingMessagesFeedbackSystemMsg").getMarketingMessagesResumedSystemMsg(n.id);
				o("WAWebGetMessageCache").getMessageCache().addMessages([{ msg: r }], !1).catch(function() {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMarketingMessagesFeedbackResumeConfirmation] Failed to add system message to the cache"])));
				}), o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
					chatId: r.from,
					newMsg: r,
					handleSingleMsgOrigin: "marketingMessagesFeedbackResumeConfirmation"
				}).catch(function() {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMarketingMessagesFeedbackResumeConfirmation] Failed to handle system message"])));
				});
			} catch (e) {
				o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
					action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.RESUME_CONFIRMATION,
					entryPoint: t.logEntryPoint,
					isSuccess: !1
				}), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMarketingMessagesFeedbackResumeConfirmation] Failed to resume marketing messages"])));
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
				viewName: "marketing-resume-confirmation"
			},
			onOK: d,
			onCancel: y,
			okDisabled: i,
			okSpinner: i,
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
						href: o("WAWebFaqUrl").marketingMessageUserControlsResumeLearnMoreURL(),
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
