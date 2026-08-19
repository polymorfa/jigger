__d("WAWebReportNewsletterQuestionResponsePopup.react", [
	"fbt",
	"WAJids",
	"WAWebCheckBox.react",
	"WAWebComplianceReportPopupLoadable",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebModalManager",
	"WAWebMsgModelFromData",
	"WAWebNewsletterBlockUserJob",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNewsletterQuestionResponseCollection",
	"WAWebNewsletterQuestionResponseDataUtils",
	"WAWebNewsletterQuestionResponseStateUpdateJob",
	"WAWebQuestionResponseIntegrityUtils",
	"WAWebSendSpamChatAction",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		marginInline6: {
			marginInlineStart: "xdzw4kq",
			marginInlineEnd: "xbelrpt",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		}
	};
	function p(t) {
		var n, a = t.question, i = t.response, l = d(!1), u = l[0], p = l[1], _ = i.senderId && ((n = o("WAWebContactCollection").ContactCollection.get(i.senderId)) == null ? void 0 : n.name), f = _ != null ? _ : "~" + i.senderNotifyName, g = s._(
			/*BTDS*/
			""
		), h = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getNewsletterReportLearnMoreUrl(),
			children: r("WAWebFbtCommon")("Learn more")
		}), y = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", h)]
		), C = s._(
			/*BTDS*/
			""
		), b = s._(
			/*BTDS*/
			"",
			[s._param("response sender pushname", f != null ? f : "this person")]
		), v, S = function() {
			o("WAWebModalManager").ModalManager.closeMedia();
			var e = o("WAWebFrontendMsgGetters").getChat(a), t = o("WAWebMsgModelFromData").msgModelFromMsgData(o("WAWebNewsletterQuestionResponseDataUtils").getQuestionResponseMsgDataFromQuestionResponseModel(i));
			o("WAWebSendSpamChatAction").sendReport({
				spamFlow: "newsletter_question_response_report",
				msgType: "newsletter_question_response",
				chat: e,
				msg: t
			}).then(function(t) {
				t != null && (v = t), u && o("WAWebNewsletterBlockUserJob").blockNewsletterUser({
					newsletterId: o("WAJids").toNewsletterJid(e.id.toString()),
					responseServerId: i.responseServerId.toString(),
					serverId: i.questionServerId.toString()
				}).then(function(t) {
					(t == null ? void 0 : t.success) === !0 ? o("WAWebNewsletterQuestionResponseStateUpdateJob").updateNewsletterQuestionResponseState({
						newsletterId: o("WAJids").toNewsletterJid(e.id.toString()),
						responseServerId: i.responseServerId.toString(),
						serverId: i.questionServerId.toString(),
						state: "HIDE"
					}).then(function(e) {
						(e == null ? void 0 : e.success) === !0 && o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.remove(i.id);
					}).finally(function() {
						o("WAWebQuestionResponseIntegrityUtils").showBlockSuccessToast(f);
					}) : o("WAWebQuestionResponseIntegrityUtils").showBlockFailureToast();
				}).catch(function() {
					o("WAWebQuestionResponseIntegrityUtils").showBlockFailureToast();
				});
			}).finally(function() {
				o("WAWebModalManager").ModalManager.close();
				var e = o("WAWebNewsletterIntegrityUtils").getNewsletterReportComplianceConfig({
					reportId: v,
					msg: t
				});
				e != null && o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebComplianceReportPopupLoadable").ComplianceReportPopupLoadable, {
					learnMoreUrl: e.learnMoreUrl,
					bannerText: e.bannerText,
					actionText: e.actionText,
					showViewReport: e.showViewReport
				}));
			});
		};
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: S,
			okText: r("WAWebFbtCommon")("Report"),
			onCancel: o("WAWebModalManager").closeModalManager,
			title: g,
			children: [c.jsx(o("WAWebText.react").WAWebTextMuted, { children: y }), c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
				children: [
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: [m.marginInline6, o("WDSPaddings.stylex").wdsPaddings.paddingTop2],
						testid: "response-block-checkbox",
						children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
							onChange: function() {
								return p(function(e) {
									return !e;
								});
							},
							checked: u,
							id: "additional-action-checkbox"
						})
					}),
					c.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: o("WDSMargins.stylex").wdsMargins.marginStart12,
						children: [c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
							htmlFor: "additional-action-checkbox",
							weight: "medium",
							testid: "report-popup-additional-action-label-text",
							children: b
						}), c.jsx(o("WAWebText.react").WAWebTextMuted, {
							xstyle: m.marginTop6,
							testid: "report-popup-additional-action-subtext",
							children: C
						})]
					}),
					c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer12)))
				]
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
