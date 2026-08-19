__d("WAWebPaymentRequestWamLogger", [
	"WALogger",
	"WAWebBrPaymentRequest",
	"WAWebInteractiveMessageType",
	"WAWebInteractiveMessagesNativeFlowName",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebP2XFunnelIdGenerator",
	"WAWebPsStructuredMessageInteractionWamEvent",
	"WAWebStructuredMessageBuyerInteractionWamEvent",
	"WAWebStructuredMessageBuyerReceiveWamEvent",
	"WAWebStructuredMessageReceiveWamEvent",
	"WAWebWamEnumBizPlatform",
	"WAWebWamEnumInteractionType",
	"WAWebWamEnumMediaType",
	"WAWebWamEnumStructuredMessageClass"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = "pix", c = "payment_request", d = "payment_request_template_cta", m = "payment_request_text_cta", p = "receiver_log_key", _ = "buyer_order_fs_log", f = "individual", g = "group", h = "broadcast", y = "newsletter";
	function C(e) {
		return e === o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE ? u : e;
	}
	function b(e) {
		return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST;
	}
	function v(e) {
		var t, n = (t = e.interactivePayload) == null ? void 0 : t.buttons;
		if (n == null) return [];
		var r = [];
		for (var a of n) {
			var i = o("WAWebBrPaymentRequest").parsePaymentRequestButton(a);
			i != null && r.push(C(i.paymentType));
		}
		return r;
	}
	function S(e) {
		var t, n, r;
		return ((t = e.from) == null ? void 0 : t.isGroup()) === !0 ? g : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0 ? h : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0 ? y : f;
	}
	function R(e) {
		var t;
		return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
	}
	async function L(e, t) {
		var n = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(e, t), r = await n.genFunnelInfo(), a = r.funnel_id;
		return a;
	}
	async function E(e) {
		var t, n = e.templateId != null, r = e.id.id + e.to.toJid(), a = await L(p, r), i = await L(a, _), l = {
			cta: c,
			p2m_flow: n ? d : m,
			accepted_payment_method: v(e),
			order_funnel_id: a,
			chat_type: S(e)
		};
		n || (l.is_payment_cta_shown = o("WAWebBrPaymentRequest").isPaymentDetectionEnhancementEnabled() ? "1" : "0"), new (o("WAWebStructuredMessageReceiveWamEvent")).StructuredMessageReceiveWamEvent({
			messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
			messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
			bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
			businessOwnerJid: R(e),
			messageClassAttributes: JSON.stringify(l),
			templateId: (t = e.templateId) != null ? t : void 0
		}).commit();
		var s = babelHelpers.extends({}, l, { order_funnel_id: i });
		new (o("WAWebStructuredMessageBuyerReceiveWamEvent")).StructuredMessageBuyerReceiveWamEvent({
			messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
			messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
			messageClassAttributes: JSON.stringify(s)
		}).commit();
	}
	async function k(t) {
		await Promise.all(t.map(async function(t) {
			b(t) && await E(t).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAM:PAYMENT_REQUEST] structured msg receive log err: ", ""])), t);
			});
		}));
	}
	function I(e, t, n) {
		var r, a;
		n === void 0 && (n = !0);
		var i = e.isFromTemplate === !0, l = {
			cta: c,
			p2m_flow: i ? d : m,
			is_template: i ? "1" : "0",
			payment_method_choice: C(t),
			is_payment_cta_shown: n
		};
		new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent({
			messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_START,
			messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
			messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
			bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
			businessOwnerJid: (r = e.senderObj) == null || (r = r.id) == null ? void 0 : r.user,
			messageClassAttributes: JSON.stringify(l),
			templateId: (a = e.templateId) != null ? a : void 0
		}).commit(), T(e, l).catch(function(e) {
			o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[WAM:PAYMENT_REQUEST] buyer interaction log err: ", ""])), e);
		});
	}
	async function T(e, t) {
		var n = e.id.id + e.to.toJid(), r = await L(p, n), a = await L(r, _);
		new (o("WAWebStructuredMessageBuyerInteractionWamEvent")).StructuredMessageBuyerInteractionWamEvent({
			messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_START,
			messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
			messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
			messageClassAttributes: JSON.stringify(babelHelpers.extends({}, t, { order_funnel_id: a }))
		}).commit();
	}
	l.logPaymentRequestReceivedWAMEvent = k, l.logPaymentRequestInteractionWAMEvent = I;
}), 98);
