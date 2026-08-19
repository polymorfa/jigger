__d("WAWebGetBrazilnteractiveActions", [
	"fbt",
	"WALogger",
	"WAWebBizFrontendGatingUtils",
	"WAWebBizOrderDetailsParams",
	"WAWebBrazilPaymentsGeoGating",
	"WAWebBrazilPixKeyFormattingUtils",
	"WAWebBuyerEventLogger",
	"WAWebContactUtils",
	"WAWebCopyTextWithToast",
	"WAWebExternalLink.react",
	"WAWebFrontendMsgGetters",
	"WAWebGetMessageChatTypeFromWid",
	"WAWebInteractiveMessagesNativeFlowName",
	"WAWebLaunchIcon.react",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebNoop",
	"WAWebOrderDetails",
	"WAWebOrderDetailsCreationActionWamEventUtil",
	"WAWebOrderPaymentStatus",
	"WAWebP2XFunnelIdGenerator",
	"WAWebPixCodeUtils",
	"WAWebPsStructuredMessageInteractionWamEvent",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsTypes",
	"WAWebWamEnumBizPlatform",
	"WAWebWamEnumInteractionType",
	"WAWebWamEnumMediaType",
	"WAWebWamEnumMessageChatType",
	"WAWebWamEnumStructuredMessageClass",
	"WDSIconIcContentCopy.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = "api_receiver_event_log_key", m = "receiver_event_log_key";
	function p(e, t) {
		var n = e.paymentSettings;
		return {
			label: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				var e, r, a = n == null || (e = n.at(0)) == null || (e = e[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]) == null ? void 0 : e.key, i = o("WAWebUserPrefsTypes").PixKeyType.cast(n == null || (r = n.at(0)) == null || (r = r[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]) == null ? void 0 : r.key_type);
				if (a == null) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				o("WAWebCopyTextWithToast").copyTextWithToast({
					failureMsg: s._(
						/*BTDS*/
						""
					),
					onSuccess: function() {
						_(t);
					},
					successMsg: s._(
						/*BTDS*/
						""
					),
					text: o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(a, i)
				});
			},
			Icon: r("WDSIconIcContentCopy.react")
		};
	}
	async function _(t) {
		var n;
		if (!o("WAWebMsgGetters").getIsSentByMe(t.unsafe())) {
			var r = await b(t, m), a = (n = t.senderObj) == null ? void 0 : n.id.toJid(), i = o("WAWebContactUtils").getMaybeBizPlatformForLogging(a), l = i === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN, s = o("WAWebFrontendMsgGetters").getChat(t.unsafe()), u = Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(s.id)].toLowerCase(), c = new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent({
				bizPlatform: l ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : i,
				businessOwnerJid: a,
				messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
				messageClassAttributes: JSON.stringify(l ? {
					cta: "p2p_pix",
					flow: "P2P",
					chat_type: u,
					is_cta_available: !0,
					accepted_payment_method: ["pix"],
					payment_method_choice: "pix",
					order_funnel_id: r,
					referral: "chat_attachment"
				} : {
					cta: "copy_pix_key",
					is_cta_available: !0,
					payment_method_choice: "pix",
					p2m_flow: "PIX_KEY",
					currency: "BRL",
					is_template: !1,
					accepted_payment_method: ["pix"],
					message_type: "payment_info",
					order_funnel_id: r,
					chat_type: u
				}),
				messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_KEY,
				messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
			});
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["CopyPixKey Log"]))), c.commit(), o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
				isLoggingEnabled: o("WAWebBizFrontendGatingUtils").isCopyPixKeyBuyerLoggingEnabled(a),
				psFunnelId: r,
				attributes: l ? {
					cta: "p2p_pix",
					flow: "P2P",
					chatType: u,
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
					chatType: u
				},
				interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_KEY,
				bizPlatform: l ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : i
			});
		}
	}
	function f(e, t) {
		var n = e.paymentSettings;
		return {
			label: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				var a = n == null ? void 0 : n.find(function(e) {
					return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.PAYMENT_LINK];
				}), i = a ? a[o("WAWebBizOrderDetailsParams").PaymentSettingType.PAYMENT_LINK].uri : null;
				if (i == null) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				o("WAWebExternalLink.react").openExternalLink(i), v(t, e, o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PAYMENT_LINK).catch(r("WAWebNoop"));
			},
			Icon: o("WAWebLaunchIcon.react").LaunchIcon
		};
	}
	function g(e, t) {
		var n = e.paymentSettings;
		return {
			label: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				var a = n == null ? void 0 : n.find(function(e) {
					return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.BOLETO];
				}), i = a ? a[o("WAWebBizOrderDetailsParams").PaymentSettingType.BOLETO].digitable_line : null;
				if (i == null) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				o("WAWebCopyTextWithToast").copyTextWithToast({
					failureMsg: s._(
						/*BTDS*/
						""
					),
					onSuccess: function() {
						v(t, e, o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.BOLETO).catch(r("WAWebNoop"));
					},
					successMsg: s._(
						/*BTDS*/
						""
					),
					text: i
				});
			},
			Icon: r("WDSIconIcContentCopy.react")
		};
	}
	function h(e, t) {
		var n = t.paymentSettings, a = n == null ? void 0 : n.find(function(e) {
			return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE];
		});
		if (a == null) return null;
		var i = a[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE].key, l = a[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE].merchant_name, u = t.totalAmount, c = t.referenceId;
		if (i == null || l == null || u == null) return null;
		var d = o("WAWebPixCodeUtils").getPixStaticCode({
			merchantName: l,
			pixKey: i,
			referenceId: c,
			transactionAmount: u.toFixed(2)
		}), m = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		);
		return {
			label: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				o("WAWebCopyTextWithToast").copyTextWithToast({
					failureMsg: p,
					onSuccess: function() {
						y(e, t);
					},
					successMsg: m,
					text: d
				});
			},
			Icon: r("WDSIconIcContentCopy.react")
		};
	}
	async function y(e, t) {
		var n;
		if (!o("WAWebMsgGetters").getIsSentByMe(e.unsafe())) {
			var r = await b(e, m), a = (n = e.senderObj) == null ? void 0 : n.id.toJid(), i = o("WAWebContactUtils").getMaybeBizPlatformForLogging(a), l = i === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN, s = o("WAWebFrontendMsgGetters").getChat(e.unsafe()), u = Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(s.id)].toLowerCase(), c = {
				bizPlatform: l ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : i,
				businessOwnerJid: a,
				messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
				messageClassAttributes: JSON.stringify(l ? {
					cta: "p2p_pix",
					flow: "P2P",
					chat_type: u,
					is_cta_available: !0,
					accepted_payment_method: ["pix"],
					payment_method_choice: "pix",
					order_funnel_id: r,
					referral: "chat_attachment"
				} : {
					cta: "order_details",
					p2m_type: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
					is_cta_available: !0,
					payment_method_choice: "pix",
					p2m_flow: "PIX_PAYMENT_REQUEST",
					currency: "BRL",
					is_template: !1,
					accepted_payment_method: ["pix"],
					order_amount: t.totalAmount,
					message_type: "checkout",
					has_product_variants: !1,
					has_attachment: !1,
					order_funnel_id: r
				}),
				messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
			};
			new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent(babelHelpers.extends({}, c, { messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW })).commit(), new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent(babelHelpers.extends({}, c, { messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE })).commit();
			var d = l ? {
				cta: "p2p_pix",
				flow: "P2P",
				chatType: u,
				isCtaAvailable: !0,
				acceptedPaymentMethod: ["pix"],
				paymentMethodChoice: "pix",
				referral: "chat_attachment"
			} : {
				cta: "order_details",
				p2mType: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
				isCtaAvailable: !0,
				paymentMethodChoice: "pix",
				p2mFlow: "PIX_PAYMENT_REQUEST",
				currency: "BRL",
				isTemplate: !1,
				acceptedPaymentMethod: ["pix"],
				messageType: "checkout",
				hasProductVariants: !1,
				hasAttachment: !1,
				chatType: u
			};
			o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
				isLoggingEnabled: o("WAWebBizFrontendGatingUtils").isCopyPixCodeBuyerLoggingEnabled(a),
				psFunnelId: r,
				attributes: d,
				interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW,
				bizPlatform: l ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : i
			}), o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
				isLoggingEnabled: o("WAWebBizFrontendGatingUtils").isCopyPixCodeBuyerLoggingEnabled(a),
				psFunnelId: r,
				attributes: d,
				interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE,
				bizPlatform: l ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : i
			});
		}
	}
	function C(e, t) {
		var n = e.paymentSettings;
		return {
			label: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				var a = n == null ? void 0 : n.find(function(e) {
					return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE];
				}), i = a ? a[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE].code : null;
				if (i == null) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				o("WAWebCopyTextWithToast").copyTextWithToast({
					failureMsg: s._(
						/*BTDS*/
						""
					),
					onSuccess: function() {
						v(t, e, o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX).catch(r("WAWebNoop"));
					},
					successMsg: s._(
						/*BTDS*/
						""
					),
					text: o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(i)
				});
			},
			Icon: r("WDSIconIcContentCopy.react")
		};
	}
	async function b(e, t) {
		var n = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(t, e.id.id + e.to.toJid()), r = await n.genFunnelInfo();
		return r.funnel_id;
	}
	async function v(e, t, n) {
		var a, i;
		if (!o("WAWebMsgGetters").getIsSentByMe(e.unsafe())) {
			var l = [];
			S(t) && l.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX);
			var s = o("WAWebFrontendMsgGetters").getChat(e.unsafe());
			o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(s) && L(t) && l.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.BOLETO), o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(s) && E(t) && l.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PAYMENT_LINK), D(t) && l.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.NATIVE);
			var u = JSON.stringify(l), c = await b(e, d), m = new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent({
				bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT,
				businessOwnerJid: (a = e.senderObj) == null ? void 0 : a.id.toJid(),
				messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
				messageClassAttributes: JSON.stringify({
					order_funnel_id: c,
					wa_pay_registered: !1,
					is_template: !1,
					is_cta_available: !0,
					p2m_flow: o("WAWebOrderDetailsCreationActionWamEventUtil").P2MFlow.ORDER,
					cta: r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
					accepted_pay_methods: u,
					p2m_type: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
					payment_method_choice: n,
					is_simplified_order: t.isOrderNodeOmitted
				}),
				messageInteraction: n === o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX ? o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE : o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW,
				messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
			});
			m.commit(), o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
				isLoggingEnabled: o("WAWebBizFrontendGatingUtils").isCopyPixCodeBuyerLoggingEnabled((i = e.senderObj) == null ? void 0 : i.id.toJid()),
				psFunnelId: c,
				attributes: {
					cta: r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
					isCtaAvailable: !0,
					paymentMethodChoice: n,
					p2mFlow: o("WAWebOrderDetailsCreationActionWamEventUtil").P2MFlow.ORDER,
					currency: "BRL",
					isTemplate: !1,
					acceptedPaymentMethod: l.map(function(e) {
						return e;
					}),
					p2mType: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
					chatType: Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(s.id)].toLowerCase(),
					isSimplifiedOrder: t.isOrderNodeOmitted
				},
				interaction: n === o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX ? o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE : o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW,
				bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT
			});
		}
	}
	function S(e) {
		var t, n;
		return (t = (n = e.paymentSettings) == null ? void 0 : n.some(function(e) {
			return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE];
		})) != null ? t : !1;
	}
	function R(e) {
		var t, n;
		return (t = (n = e.paymentSettings) == null ? void 0 : n.some(function(e) {
			return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE];
		})) != null ? t : !1;
	}
	function L(e) {
		var t, n;
		return (t = (n = e.paymentSettings) == null ? void 0 : n.some(function(e) {
			return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.BOLETO];
		})) != null ? t : !1;
	}
	function E(e) {
		var t, n;
		return (t = (n = e.paymentSettings) == null ? void 0 : n.some(function(e) {
			return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.PAYMENT_LINK];
		})) != null ? t : !1;
	}
	function k(e) {
		var t, n, r = o("WAWebOrderDetails").getOrderInfo(e);
		if (r == null || r.paymentSettings == null) return !1;
		var a = (t = (n = r.paymentSettings) == null ? void 0 : n.some(function(e) {
			return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.OFFSITE_CARD_PAY];
		})) != null ? t : !1;
		return a;
	}
	function I(e) {
		var t;
		if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD && ((t = e.interactivePayload) == null || (t = t.buttons) == null || (t = t[0]) == null ? void 0 : t.buttonParamsJson) != null) {
			var n, a = JSON.parse((n = e.interactivePayload) == null || (n = n.buttons) == null || (n = n[0]) == null ? void 0 : n.buttonParamsJson);
			if (a.payment_method === o("WAWebBizOrderDetailsParams").PaymentSettingType.OFFSITE_CARD_PAY) return !0;
		}
		return !1;
	}
	function T(e) {
		return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && I(e) && o("WAWebMsgGetters").getIsSentByMe(e.unsafe());
	}
	function D(e) {
		var t, n;
		return ((t = e.paymentSettings) == null ? void 0 : t.some(function(e) {
			return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.CARDS];
		})) || ((n = e.paymentSettings) == null ? void 0 : n.some(function(e) {
			return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.PAYMENT_GATEWAY];
		})) || e.payment_configuration != null && e.payment_configuration.trim() !== "";
	}
	l.getPaymentInfoOrderDetailsInteractiveAction = p, l.getOpenPaymentLinkInteractiveAction = f, l.getCopyBoletoCodeInteractiveAction = g, l.getCopyPixStaticCodeInteractiveAction = h, l.getCopyPixCodeInteractiveAction = C, l.hasValidDynamicPix = S, l.hasValidStaticPix = R, l.hasValidBoletoCode = L, l.hasValidPaymentLink = E, l.hasOrderOffsiteCardPay = k, l.shouldHideOffsiteCardPayConfirmation = T, l.hasValidCard = D;
}), 226);
