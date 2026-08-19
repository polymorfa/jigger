__d("WAWebInteractiveBubble.react", [
	"WAWebBizSuspiciousLabel.react",
	"WAWebBloksWidgetErrorFallback.react",
	"WAWebBotTypes",
	"WAWebDisplayType",
	"WAWebEmojiText.react",
	"WAWebErrorBoundary.react",
	"WAWebExpandableText.react",
	"WAWebFlex.react",
	"WAWebFormatConfigurationConversation",
	"WAWebFrontendMsgGetters",
	"WAWebGetInteractiveFooterText",
	"WAWebHsmGatingUtils",
	"WAWebInAppSignupConfirmation",
	"WAWebInteractiveBloksWidget.react",
	"WAWebInteractiveBloksWidgetLogger",
	"WAWebInteractiveMessagesNativeFlowName",
	"WAWebL10N",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageCropping",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBubble.react",
	"WAWebMmSignalSharingModelUtils",
	"WAWebMmSignalSharingUIUtils",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgModelPropUtils",
	"WAWebMsgPhoneNumbers",
	"WAWebMsgSelectors",
	"WAWebOrderStatus",
	"WAWebShowMessageActionFallbackErrorAction",
	"isStringNullOrEmpty",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback, c = { marginTop6: {
		marginTop: "x1k70j0n",
		$$css: !0
	} }, d = {
		bubble: {
			width: "x3orp4s",
			maxWidth: "x193iq5w",
			$$css: !0
		},
		footer: {
			display: "x1lliihq",
			fontSize: "x1nxh6w3",
			lineHeight: "xwn7fz2",
			overflowWrap: "x1mzt3pk",
			whiteSpace: "x126k92a",
			color: "xhslqc4",
			$$css: !0
		}
	};
	function m(e) {
		var t, n, a = e.actions, i = e.displayAuthor, l = e.displayFooter, m = l === void 0 ? !0 : l, p = e.displayType, _ = e.header, f = e.hideMeta, g = e.minTextHeight, h = e.msg, y = o("WAWebMsgModelPropUtils").isTrusted(h.unsafe()), C = {
			selectable: y,
			dirMismatch: o("WAWebFrontendMsgGetters").getRtl(h) !== r("WAWebL10N").isRTL(),
			direction: o("WAWebFrontendMsgGetters").getDir(h),
			inferLinesDirection: !0
		}, b = h.bloksWidget != null && o("WAWebHsmGatingUtils").isBloksWidgetEnabled(), v = o("WAWebMsgGetters").getBizBotType(h.unsafe()) === o("WAWebBotTypes").BizBotType.BIZ_1P, S = o("WAWebFrontendMsgGetters").getText(h);
		if (h.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP && S != null) {
			var R = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfo(h);
			R != null && (S = o("WAWebInAppSignupConfirmation").applyBoldToPromoCode(S, R.promoCode));
		}
		b && S === ((t = h.bloksWidget) == null ? void 0 : t.fallback) && (S = null);
		var L = r("isStringNullOrEmpty")(S) ? null : s.jsx(r("WAWebMessageSpacerText.react"), {
			msg: h.unsafe(),
			"data-id": h.id,
			spacer: h.carouselCards != null,
			children: s.jsx(o("WAWebExpandableText.react").ExpandableText, {
				text: S,
				textLimit: o("WAWebMsgGetters").getInitialPageSize(h),
				children: function(t) {
					var e = t.textLimit;
					return s.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, C, {
						text: S,
						formatters: o("WAWebFormatConfigurationConversation").Conversation({
							links: o("WAWebMsgLinks").getLinksFromMsg(h.unsafe(), e),
							phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(h.unsafe()),
							trusted: y,
							selectable: y,
							fromMe: h.id.fromMe
						}),
						textLimit: e,
						minTextHeight: g,
						inlineblock: g != null ? !0 : void 0
					}));
				}
			})
		}), E = o("WAWebGetInteractiveFooterText").getInteractiveFooterText(h), k = o("WAWebOrderStatus").hasOrderStatusButton(h), I = m && E != null ? s.jsx(r("WAWebMessageSpacerText.react"), {
			msg: h.unsafe(),
			className: "x78zum5",
			spacer: k,
			children: s.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, C, {
				text: E,
				formatters: o("WAWebFormatConfigurationConversation").Conversation({
					links: o("WAWebMsgLinks").getFooterLinks(h.unsafe()),
					phoneNumbers: o("WAWebMsgPhoneNumbers").getFooterPhoneNumbersFromMsg(h.unsafe()),
					selectable: y,
					trusted: y,
					fromMe: h.id.fromMe
				}),
				xstyle: [d.footer, c.marginTop6]
			}))
		}) : null, T = a != null && a.length && p !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ? s.jsx("div", {
			className: "xwib8y2 x7coems x1bjonze x9otpla",
			children: s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
				direction: "vertical",
				items: a.map(function(e) {
					var t;
					return {
						testid: e.testid,
						label: e.label,
						onClick: (t = e.onClick) != null ? t : function() {
							return r("WAWebShowMessageActionFallbackErrorAction")();
						},
						disabled: e.disabled,
						Icon: e.Icon
					};
				})
			})
		}) : null, D = !!o("WAWebBizSuspiciousLabel.react").getSuspiciousLabel({
			msg: h.unsafe(),
			displayType: p
		}), x = i !== !1 ? !o("WAWebMsgGetters").getIsSentByMe(h) && o("WAWebMsgGetters").getIsGroupMsg(h) : null, $ = o("WAWebMsgSelectors").showForwarded(h) || x === !0 || D, P = b ? s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "interactive-bloks-widget",
			onError: function() {
				return o("WAWebInteractiveBloksWidgetLogger").logInteractiveBloksWidgetFallback(h.bloksWidget);
			},
			fallback: function(t) {
				var e, n = t.error;
				return s.jsx(r("WAWebBloksWidgetErrorFallback.react"), {
					error: n,
					fallback: (e = h.bloksWidget) == null ? void 0 : e.fallback
				});
			},
			children: s.jsx(r("WAWebInteractiveBloksWidget.react"), {
				bloksWidget: h.bloksWidget,
				chatJid: (n = h.id.remote) == null ? void 0 : n.toString(),
				isBizBot1pMessage: v,
				messageId: h.id.id
			})
		}) : null, N = h.isCarouselCard != null ? { width: o("WAWebMessageCropping").CAROUSEL_MEDIA_DIMS.bubbleWidth } : {}, M = u(function(e) {
			var t = o("WAWebFrontendMsgGetters").getChat(h.unsafe());
			o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMm(t, h.unsafe()) && o("WAWebMmSignalSharingUIUtils").manageMmSignalSharingBodyClick(e, t, h.unsafe());
		}, [h]);
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.bubble,
			style: N,
			children: [s.jsxs(r("WAWebMessageTextBubble.react"), {
				msg: h,
				displayAuthor: i,
				hideMeta: f != null ? f : !1,
				children: [D ? s.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, { msg: h.unsafe() }) : null, s.jsxs("div", babelHelpers.extends({}, {
					0: {},
					2: { className: "xyorhqc" },
					1: { className: "x1ok221b" },
					3: { className: "xyorhqc x1ok221b" }
				}[(f === !1) << 1 | !!$ << 0], {
					onClick: M,
					role: "none",
					children: [
						_,
						L,
						P,
						I
					]
				}))]
			}), T]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
