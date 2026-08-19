__d("WASmaxOutMessagePublishDeliveryContextMixin", [
	"WASmaxAttrs",
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t, n, r = e.deliveryContextHsmMaxBid, a = e.deliveryContextOptimizationGoal, i = e.deliveryContextTemplateId, l = e.deliveryContextCampaignId, s = e.deliveryContextSourceType, u = e.deliveryContextTierType, c = e.deliveryContextDeliveryType, d = e.deliveryContextClientToken, m = e.deliveryContextPrice, p = e.deliveryContextWabaId, _ = e.deliveryContextQualityFlag, f = e.deliveryContextIsZeroRatedTemplate, g = e.deliveryContextPartnerId, h = e.deliveryContextAppId, y = e.deliveryContextVertical, C = e.deliveryContextBmMessageLimitStatus, b = e.deliveryContextDisableIosAutofill, v = e.deliveryContextAuthBlockRecentRegisters, S = e.deliveryContextMaskLinkedDevicesWithoutResend, R = e.deliveryContextEncryptedDeterministicTemplateId, L = e.deliveryContextShouldBypassIntegrityPhoneLimit, E = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("biz", null, o("WASmaxJsx").smax("delivery_context", {
			hsm_max_bid: (t = o("WASmaxAttrs")).OPTIONAL((n = o("WAWap")).INT, r),
			optimization_goal: t.OPTIONAL(n.CUSTOM_STRING, a),
			template_id: t.OPTIONAL(n.CUSTOM_STRING, i),
			campaign_id: t.OPTIONAL(n.CUSTOM_STRING, l),
			source_type: t.OPTIONAL(n.CUSTOM_STRING, s),
			tier_type: t.OPTIONAL(n.CUSTOM_STRING, u),
			delivery_type: t.OPTIONAL(n.CUSTOM_STRING, c),
			client_token: t.OPTIONAL(n.CUSTOM_STRING, d),
			price: t.OPTIONAL(n.INT, m),
			waba_id: t.OPTIONAL(n.CUSTOM_STRING, p),
			quality_flag: t.OPTIONAL(n.CUSTOM_STRING, _),
			is_zero_rated_template: t.OPTIONAL(n.CUSTOM_STRING, f),
			partner_id: t.OPTIONAL(n.CUSTOM_STRING, g),
			app_id: t.OPTIONAL(n.CUSTOM_STRING, h),
			vertical: t.OPTIONAL(n.INT, y),
			bm_message_limit_status: t.OPTIONAL(n.CUSTOM_STRING, C),
			disable_ios_autofill: t.OPTIONAL(n.CUSTOM_STRING, b),
			auth_block_recent_registers: t.OPTIONAL(n.CUSTOM_STRING, v),
			mask_linked_devices_without_resend: t.OPTIONAL(n.CUSTOM_STRING, S),
			encrypted_deterministic_template_id: t.OPTIONAL(n.CUSTOM_STRING, R),
			should_bypass_integrity_phone_limit: t.OPTIONAL(n.CUSTOM_STRING, L)
		})));
		return E;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeDeliveryContextMixin = s;
}), 98);
