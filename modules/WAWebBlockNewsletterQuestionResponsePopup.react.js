__d("WAWebBlockNewsletterQuestionResponsePopup.react", [
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
	"WAWebNoop",
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
			"",
			[s._param("response sender pushname", f != null ? f : "this person")]
		), h = s._(
			/*BTDS*/
			""
		), y = s._(
			/*BTDS*/
			""
		), C = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getNewsletterReportLearnMoreUrl(),
			children: r("WAWebFbtCommon")("Learn more")
		}), b = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", C)]
		), v = function() {
			var e;
			o("WAWebModalManager").ModalManager.closeMedia();
			var t = o("WAWebFrontendMsgGetters").getChat(a), n = o("WAWebMsgModelFromData").msgModelFromMsgData(o("WAWebNewsletterQuestionResponseDataUtils").getQuestionResponseMsgDataFromQuestionResponseModel(i));
			o("WAWebNewsletterBlockUserJob").blockNewsletterUser({
				newsletterId: o("WAJids").toNewsletterJid(t.id.toString()),
				responseServerId: i.responseServerId.toString(),
				serverId: i.questionServerId.toString()
			}).then(function(a) {
				(a == null ? void 0 : a.success) === !0 ? (o("WAWebNewsletterQuestionResponseStateUpdateJob").updateNewsletterQuestionResponseState({
					newsletterId: o("WAJids").toNewsletterJid(t.id.toString()),
					responseServerId: i.responseServerId.toString(),
					serverId: i.questionServerId.toString(),
					state: "HIDE"
				}).then(function(e) {
					(e == null ? void 0 : e.success) === !0 && o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.remove(i.id);
				}).catch(r("WAWebNoop")), u && o("WAWebSendSpamChatAction").sendReport({
					spamFlow: "newsletter_question_response_report",
					msgType: "newsletter_question_response",
					chat: t,
					msg: n
				}).then(function(t) {
					t != null && (e = t);
				}).finally(function() {
					o("WAWebModalManager").ModalManager.close();
					var t = o("WAWebNewsletterIntegrityUtils").getNewsletterReportComplianceConfig({
						reportId: e,
						msg: n
					});
					t != null && o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebComplianceReportPopupLoadable").ComplianceReportPopupLoadable, {
						learnMoreUrl: t.learnMoreUrl,
						bannerText: t.bannerText,
						actionText: t.actionText,
						showViewReport: t.showViewReport
					}));
				})) : o("WAWebQuestionResponseIntegrityUtils").showBlockFailureToast();
			}).catch(function() {
				o("WAWebQuestionResponseIntegrityUtils").showBlockFailureToast();
			}).finally(function() {
				o("WAWebModalManager").ModalManager.close(), o("WAWebQuestionResponseIntegrityUtils").showBlockSuccessToast(f);
			});
		};
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: v,
			okText: r("WAWebFbtCommon")("Block"),
			onCancel: o("WAWebModalManager").closeModalManager,
			title: g,
			children: [c.jsx(o("WAWebText.react").WAWebTextMuted, { children: h }), c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
				children: [
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: [m.marginInline6, o("WDSPaddings.stylex").wdsPaddings.paddingTop2],
						testid: "response-report-upsell",
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
							testid: "block-popup-additional-action-label-text",
							children: y
						}), c.jsx(o("WAWebText.react").WAWebTextMuted, {
							xstyle: m.marginTop6,
							testid: "block-popup-additional-action-subtext",
							children: b
						})]
					}),
					c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer12)))
				]
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
