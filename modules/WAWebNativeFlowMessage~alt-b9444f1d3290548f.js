__d("WAWebNativeFlowMessage", [
	"fbt",
	"WALogger",
	"WAWebBizFrontendGatingUtils",
	"WAWebBizOrderDetailsParams",
	"WAWebBrazilPixKeyFormattingUtils",
	"WAWebBuyerEventLogger",
	"WAWebContactUtils",
	"WAWebCopyToClipboard",
	"WAWebEmojiText.react",
	"WAWebFbtAppName",
	"WAWebFrontendMsgGetters",
	"WAWebGetMessageChatTypeFromWid",
	"WAWebGetQuickPayAction",
	"WAWebInteractiveBubble.react",
	"WAWebInteractiveMessagesNativeFlowName",
	"WAWebInteractiveNativeFlowOrderHeader",
	"WAWebL10N",
	"WAWebMsgGetters",
	"WAWebMsgModelPropUtils",
	"WAWebNativeFlowPaymentInfoOrderDetailsHeader",
	"WAWebOrderDetails",
	"WAWebOrderStatus",
	"WAWebPonyfillsCryptoRandomUUID",
	"WAWebPsStructuredMessageInteractionWamEvent",
	"WAWebShowMessageActionFallbackErrorAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsTypes",
	"WAWebWamEnumBizPlatform",
	"WAWebWamEnumInteractionType",
	"WAWebWamEnumMediaType",
	"WAWebWamEnumMessageChatType",
	"WAWebWamEnumStructuredMessageClass",
	"WDSIconIcContentCopy.react",
	"isStringNullOrEmpty",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginBottom6: {
		marginBottom: "xzueoph",
		$$css: !0
	} }, m = { headerTitle: {
		fontSize: "x6prxxf",
		fontWeight: "xk50ysn",
		$$css: !0
	} };
	function p(e) {
		var t = e.displayAuthor, n = e.displayType, a = e.msg, i, l;
		if (a.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
			var u = o("WAWebOrderDetails").getOrderInfo(a);
			u && (i = c.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
				isSentByMe: o("WAWebMsgGetters").getIsSentByMe(a),
				orderInfo: u
			}), l = [_(u, a)]);
		} else if (a.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
			var p = o("WAWebOrderDetails").getOrderInfo(a), f = p == null ? void 0 : p.referenceId, g = f != null && o("WAWebOrderStatus").findOrderStatus(o("WAWebFrontendMsgGetters").getChat(a.unsafe()), f) === o("WAWebOrderStatus").OrderStatus.Pending;
			i = c.jsx("div", {
				className: "x1198e8h x1lxpwgx xzueoph xw01apr",
				children: c.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
					msg: a,
					displayType: n
				})
			}), l = [{
				label: g ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				onClick: function() {
					return r("WAWebShowMessageActionFallbackErrorAction")({
						title: s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m1", c.jsx(o("WAWebFbtAppName").WAWebAppShortName, { children: s._(
								/*BTDS*/
								""
							) }))]
						),
						body: s._(
							/*BTDS*/
							""
						)
					});
				}
			}];
			var h = p == null ? void 0 : p.type;
			if (!o("WAWebMsgGetters").getIsSentByMe(a)) {
				var y = o("WAWebGetQuickPayAction").getQuickPayAction(a, h, !g);
				y && l.push(y);
			}
		} else if (a.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) i = c.jsx("div", {
			className: "x1198e8h x1lxpwgx xzueoph xw01apr",
			children: c.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
				msg: a,
				displayType: n
			})
		});
		else {
			var C;
			i = r("isStringNullOrEmpty")(a.title) ? null : c.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: a.title,
				selectable: o("WAWebMsgModelPropUtils").isTrusted(a.unsafe()),
				direction: o("WAWebFrontendMsgGetters").getDir(a),
				dirMismatch: o("WAWebFrontendMsgGetters").getRtl(a) !== r("WAWebL10N").isRTL(),
				inferLinesDirection: !0,
				xstyle: [d.marginBottom6, m.headerTitle]
			}), l = (C = a.nativeFlowButtons) == null ? void 0 : C.map(function(e) {
				var t, n;
				return {
					label: (t = (n = e.buttonText) == null ? void 0 : n.displayText) != null ? t : "",
					onClick: function() {
						return r("WAWebShowMessageActionFallbackErrorAction")();
					}
				};
			});
		}
		return c.jsx(r("WAWebInteractiveBubble.react"), {
			msg: a,
			displayAuthor: t,
			displayFooter: a.nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
			header: i,
			displayType: n,
			actions: l
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e, t) {
		var n = e.paymentSettings;
		return {
			label: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				var e, r, a = n == null || (e = n.at(0)) == null || (e = e[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]) == null ? void 0 : e.key, i = o("WAWebUserPrefsTypes").PixKeyType.cast(n == null || (r = n.at(0)) == null || (r = r[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]) == null ? void 0 : r.keyType);
				if (a == null || !o("WAWebCopyToClipboard").copyTextToClipboard(o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(a, i))) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), f(t);
			},
			Icon: r("WDSIconIcContentCopy.react")
		};
	}
	function f(t) {
		var n;
		if (!o("WAWebMsgGetters").getIsSentByMe(t)) {
			var a = r("WAWebPonyfillsCryptoRandomUUID")(), i = (n = t.senderObj) == null ? void 0 : n.id.toJid(), l = o("WAWebContactUtils").getMaybeBizPlatformForLogging(i), s = l === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN, u = o("WAWebFrontendMsgGetters").getChat(t.unsafe()), c = Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(u.id)].toLowerCase(), d = new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent({
				bizPlatform: s ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : l,
				businessOwnerJid: i,
				messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
				messageClassAttributes: JSON.stringify(s ? {
					cta: "p2p_pix",
					flow: "P2P",
					chat_type: c,
					is_cta_available: !0,
					accepted_payment_method: ["pix"],
					payment_method_choice: "pix",
					order_funnel_id: a,
					referral: "chat_attachment"
				} : { order_funnel_id: a }),
				messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_KEY,
				messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
			});
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["CopyPixKey Log"]))), d.commit(), o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
				isLoggingEnabled: o("WAWebBizFrontendGatingUtils").isCopyPixKeyBuyerLoggingEnabled(i),
				psFunnelId: a,
				attributes: s ? {
					cta: "p2p_pix",
					flow: "P2P",
					chatType: c,
					isCtaAvailable: !0,
					acceptedPaymentMethod: ["pix"],
					paymentMethodChoice: "pix",
					referral: "chat_attachment"
				} : {
					cta: "copy_pix_key",
					isCtaAvailable: !0,
					paymentMethodChoice: "pix",
					p2pFlow: "PIX_KEY",
					currency: "BRL",
					isTemplate: !1,
					acceptedPaymentMethod: ["pix"],
					messageType: "payment_info",
					chatType: c
				},
				interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_KEY,
				bizPlatform: s ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : l
			});
		}
	}
	l.default = p;
}), 226);
