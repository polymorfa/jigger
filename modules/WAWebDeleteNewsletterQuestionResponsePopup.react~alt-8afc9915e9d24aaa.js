__d("WAWebDeleteNewsletterQuestionResponsePopup.react", [
	"fbt",
	"WAJids",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebModalManager",
	"WAWebNewsletterBlockUserJob",
	"WAWebNewsletterQuestionResponseCollection",
	"WAWebNewsletterQuestionResponseStateUpdateJob",
	"WAWebQuestionResponseIntegrityUtils",
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
		), h = s._(
			/*BTDS*/
			""
		), y = s._(
			/*BTDS*/
			"",
			[s._param("response sender pushname", f != null ? f : "this person")]
		), C = s._(
			/*BTDS*/
			""
		), b = function() {
			o("WAWebModalManager").ModalManager.closeMedia();
			var e = o("WAWebFrontendMsgGetters").getChat(a);
			a.set("responseServerId", i.responseServerId);
			var t = function() {
				return o("WAWebNewsletterQuestionResponseStateUpdateJob").updateNewsletterQuestionResponseState({
					newsletterId: o("WAJids").toNewsletterJid(e.id.toString()),
					responseServerId: i.responseServerId.toString(),
					serverId: i.questionServerId.toString(),
					state: "UNHIDE"
				}).then(function(e) {
					(e == null ? void 0 : e.success) === !0 && o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.add(i);
				});
			};
			o("WAWebNewsletterQuestionResponseStateUpdateJob").updateNewsletterQuestionResponseState({
				newsletterId: o("WAJids").toNewsletterJid(e.id.toString()),
				responseServerId: i.responseServerId.toString(),
				serverId: i.questionServerId.toString(),
				state: "HIDE"
			}).then(function(t) {
				(t == null ? void 0 : t.success) === !0 ? (o("WAWebNewsletterQuestionResponseCollection").QuestionResponseCollection.remove(i.id), u && o("WAWebNewsletterBlockUserJob").blockNewsletterUser({
					newsletterId: o("WAJids").toNewsletterJid(e.id.toString()),
					responseServerId: i.responseServerId.toString(),
					serverId: i.questionServerId.toString()
				}).then(function(e) {
					(e == null ? void 0 : e.success) === !0 ? o("WAWebQuestionResponseIntegrityUtils").showBlockSuccessToast(f) : o("WAWebQuestionResponseIntegrityUtils").showBlockFailureToast();
				}).catch(function() {
					return o("WAWebQuestionResponseIntegrityUtils").showBlockFailureToast();
				})) : o("WAWebQuestionResponseIntegrityUtils").showDeleteFailureToast();
			}).catch(function() {
				o("WAWebQuestionResponseIntegrityUtils").showDeleteFailureToast();
			}).finally(function() {
				o("WAWebModalManager").ModalManager.close(), !u && o("WAWebQuestionResponseIntegrityUtils").showDeleteSuccessToastWithUndo(t);
			});
		};
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: b,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			okButtonType: "solid-warning",
			title: g,
			children: [c.jsx(o("WAWebText.react").WAWebTextMuted, { children: h }), c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
				children: [
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: [m.marginInline6, o("WDSPaddings.stylex").wdsPaddings.paddingTop2],
						testid: "response-delete-upsell-block",
						children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
							onChange: function() {
								return p(function(e) {
									return !e;
								});
							},
							checked: u,
							id: "additional-action-checkbox",
							testid: "visual-checkbox"
						})
					}),
					c.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: o("WDSMargins.stylex").wdsMargins.marginStart12,
						children: [c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
							htmlFor: "additional-action-checkbox",
							weight: "medium",
							testid: "delete-popup-additional-action-label-text",
							children: y
						}), c.jsx(o("WAWebText.react").WAWebTextMuted, {
							xstyle: m.marginTop6,
							testid: "delete-popup-additional-action-subtext",
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
