__d("WAWebResponsesRow.react", [
	"fbt",
	"WAWebBox.react",
	"WAWebClock",
	"WAWebContactCollection",
	"WAWebDefaultContactRefreshedIcon.react",
	"WAWebDetailImage.react",
	"WAWebDropdown.react",
	"WAWebEmojiText.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFrontendMsgGetters",
	"WAWebImg.react",
	"WAWebInitialsFromNameUtils",
	"WAWebInitialsProfilePicture.react",
	"WAWebL10N",
	"WAWebModalManager",
	"WAWebMsgDataFromModel",
	"WAWebNewsletterModelUtils",
	"WAWebNewsletterQuestionResponseDataUtils",
	"WAWebNewsletterToggleStarQuestionResponseAction",
	"WAWebQuestions.flow",
	"WAWebQuestionsInputModalLoadable",
	"WAWebResponseBody.react",
	"WAWebResponseContextMenu",
	"WAWebText.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstyledButton.react",
	"WDSIconIcGrade.react",
	"WDSIconIcGradeFilled.react",
	"WDSIconIcMoreHoriz.react",
	"WDSIconIcReply.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSSpinner.react",
	"react",
	"useHoverState",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { paddingInlineEnd10: {
		paddingInlineEnd: "x2vl965",
		$$css: !0
	} }, m = {
		row: {
			position: "x1n2onr6",
			width: "xh8yej3",
			minWidth: "xeuugli",
			maxWidth: "x193iq5w",
			flex: "x12lumcd",
			boxSizing: "x9f619",
			$$css: !0
		},
		rowContainer: {
			width: "xh8yej3",
			minWidth: "xeuugli",
			$$css: !0
		},
		replyCTA: {
			fontSize: "x1f6kntn",
			letterSpacing: "x1iayye1",
			$$css: !0
		},
		userName: {
			fontWeight: "x1s688f",
			fontSize: "x1f6kntn",
			$$css: !0
		},
		contactIcon: {
			width: "xh8yej3",
			height: "x5yr21d",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x1od0jb8",
			outline: "x4u6w88",
			outlineOffset: "x1g40iwv",
			$$css: !0
		},
		avatarContainer: {
			flexShrink: "x2lah0s",
			width: "x14atkfc",
			$$css: !0
		},
		contentContainer: {
			flex: "x1cqoux5",
			minWidth: "xeuugli",
			width: "xh8yej3",
			$$css: !0
		},
		contextMenuContainer: {
			marginInlineStart: "x13fj5qh",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		contextMenuButton: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x25sj25",
			minWidth: "x1264ykn",
			minHeight: "xe0p6wg",
			borderStartStartRadius: "xrxyp3c",
			borderStartEndRadius: "xv0oops",
			borderEndEndRadius: "x1isl5vh",
			borderEndStartRadius: "xn8zj9a",
			cursor: "x1ypdohk",
			$$css: !0
		},
		responseContentContainer: {
			minWidth: "xeuugli",
			flex: "x12lumcd",
			$$css: !0
		},
		responseBodyRow: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function p(e) {
		var t, n = e.isReplyDisabled, a = e.isStarringEnabled, i = e.question, l = e.response, p = r("useHoverState")(), f = p.onMouseEnter, g = p.onMouseLeave, h = c(!1), y = h[0], C = h[1], b = c(!1), v = b[0], S = b[1], R = c(null), L = R[0], E = R[1], k = r("useWAWebIsKeyboardUser")(), I = k.isKeyboardUser, T = function(t) {
			E(t.currentTarget), C(!0);
		}, D = o("WAWebFrontendMsgGetters").getChat(i), x;
		if (y && L) {
			var $ = {
				menu: u.jsx(r("WAWebResponseContextMenu"), {
					response: l,
					question: i
				}),
				anchor: L,
				autoFocus: I,
				dirX: r("WAWebL10N").isRTL() ? o("WAWebDropdown.react").DirX.RIGHT : o("WAWebDropdown.react").DirX.LEFT,
				dirY: o("WAWebDropdown.react").DirY.BOTTOM,
				offsetY: 5,
				type: o("WAWebDropdown.react").MenuType.Dropdown,
				testid: "response-context-menu"
			};
			x = u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "ResponseContextMenu",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: function() {
					return C(!1);
				},
				children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: $ })
			});
		}
		var P = function() {
			var e = i.serverId;
			e != null && o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebQuestionsInputModalLoadable").QuestionsInputModalLoadable, {
				chat: D,
				questionType: o("WAWebQuestions.flow").QuestionType.Reply,
				questionReplyQuotedMessage: {
					quotedQuestion: o("WAWebMsgDataFromModel").msgDataFromMsgModel(i),
					quotedResponse: o("WAWebNewsletterQuestionResponseDataUtils").getQuestionResponseMsgDataFromQuestionResponseModel(l),
					questionServerId: e
				},
				onSend: function() {
					l.set("replied", !0);
				}
			}));
		}, N = l.senderId && ((t = o("WAWebContactCollection").ContactCollection.get(l.senderId)) == null ? void 0 : t.name), M = N != null ? N : "~" + l.senderNotifyName, w;
		if (a) {
			var A = l.starred ? u.jsx(r("WDSIconIcGradeFilled.react"), { testid: "star-icon-filled" }) : u.jsx(r("WDSIconIcGrade.react"), { testid: "star-icon-empty" });
			w = u.jsx(r("WAWebUnstyledButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				disabled: v,
				onClick: function() {
					S(!0), o("WAWebNewsletterToggleStarQuestionResponseAction").toggleStarQuestionResponse(D, l).finally(function() {
						S(!1);
					});
				},
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, o("WDSPaddings.stylex").wdsPaddings.paddingVer4],
				children: v ? u.jsx(r("WDSSpinner.react"), {
					size: 24,
					testid: "star-spinner"
				}) : A
			});
		}
		var F;
		return a ? F = u.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			disabled: n,
			onClick: P,
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingEnd8, o("WDSPaddings.stylex").wdsPaddings.paddingVer4],
			children: u.jsx(r("WDSIconIcReply.react"), {})
		}) : F = u.jsx(o("WAWebText.react").WAWebClickableText, {
			color: n ? "disabled" : "actionEmphasized",
			xstyle: [m.replyCTA, o("WDSPaddings.stylex").wdsPaddings.paddingTop8],
			disabled: n,
			onClick: P,
			children: l.replied ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), u.jsx(r("WAWebBox.react"), {
			xstyle: [
				o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
				o("WDSPaddings.stylex").wdsPaddings.paddingVer12,
				m.row
			],
			onMouseEnter: f,
			onMouseLeave: g,
			testid: "response-row",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "start",
				xstyle: m.rowContainer,
				children: [u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: [
						o("WDSPaddings.stylex").wdsPaddings.paddingEnd16,
						o("WDSPaddings.stylex").wdsPaddings.paddingStart8,
						o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
						m.avatarContainer
					],
					children: u.jsx(_, {
						senderId: l.senderId,
						senderName: l.senderNotifyName,
						senderPictureDirectPath: l.senderPictureDirectPath
					})
				}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: [d.paddingInlineEnd10, m.contentContainer],
					children: [
						u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom4,
							children: [
								u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
									xstyle: m.userName,
									children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
										ariaLabel: M,
										text: M
									})
								}),
								u.jsx(o("WAWebText.react").WAWebTextSmall, {
									xstyle: o("WDSMargins.stylex").wdsMargins.marginHor4,
									children: "•"
								}),
								u.jsx(o("WAWebText.react").WAWebTextMuted, { children: u.jsx(o("WAWebText.react").WAWebTextSmall, { children: o("WAWebClock").Clock.relativeShortStr(Math.floor(Date.now() / 1e3) - l.t) }) })
							]
						}),
						u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "start",
							xstyle: m.responseBodyRow,
							children: [u.jsx(r("WAWebFlexItem.react"), {
								grow: 1,
								xstyle: m.responseContentContainer,
								children: u.jsx(r("WAWebResponseBody.react"), { response: l })
							}), u.jsx(r("WAWebFlexItem.react"), {
								xstyle: m.contextMenuContainer,
								children: u.jsxs(r("WAWebUnstyledButton.react"), {
									"aria-label": r("WAWebFbtCommon")("Context menu"),
									onClick: T,
									xstyle: m.contextMenuButton,
									children: [u.jsx(r("WDSIconIcMoreHoriz.react"), { testid: "call-menu" }), x]
								})
							})]
						}),
						u.jsxs(o("WAWebFlex.react").FlexRow, { children: [F, w] })
					]
				})]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.senderId, n = e.senderName, a = e.senderPictureDirectPath;
		if (t) return u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: t,
			size: o("WAWebDetailImage.react").DetailImageSize.ExtraSmall
		});
		var i = u.jsx(o("WAWebDefaultContactRefreshedIcon.react").DefaultContactRefreshedIcon, {
			iconXstyle: m.contactIcon,
			"aria-hidden": !0
		}), l = o("WAWebInitialsFromNameUtils").getInitialsFromNames({
			name: null,
			shortName: null,
			pushname: n
		});
		(l.firstInitial != null || l.secondInitial != null) && (i = u.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
			initialsData: l,
			theme: o("WAWebInitialsProfilePicture.react").ThemeType.GroupChatProfilePicture,
			backgroundColorId: 1
		}));
		var s = o("WAWebNewsletterModelUtils").formatProfilePictureURL(a);
		return u.jsx("div", {
			style: {
				width: "40px",
				height: "40px"
			},
			children: s == null ? i : u.jsx(r("WAWebImg.react"), {
				src: s,
				hasPrivacyChecks: !0,
				crossOrigin: !1,
				className: "x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7 x17vty23",
				draggable: !1,
				renderError: function() {
					return i;
				}
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
