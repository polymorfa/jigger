__d("WAWebBizBroadcastProNewBroadcastFlowQuery.graphql", ["WAWebBizBroadcastProNewBroadcastFlowQuery_facebookRelayOperation", "relay-runtime"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = (function() {
		var e = {
			alias: null,
			args: null,
			kind: "ScalarField",
			name: "id",
			storageKey: null
		}, t = {
			alias: null,
			args: null,
			concreteType: "XFBMarketingMessageWhatsAppSubscriberPool",
			kind: "LinkedField",
			name: "default_subscriber_pool",
			plural: !1,
			selections: [e],
			storageKey: null
		}, r = {
			alias: null,
			args: null,
			kind: "ScalarField",
			name: "wizard_name",
			storageKey: null
		}, o = {
			alias: null,
			args: null,
			kind: "ScalarField",
			name: "label",
			storageKey: null
		}, a = {
			alias: null,
			args: null,
			kind: "ScalarField",
			name: "wizard_props_json",
			storageKey: null
		};
		return {
			fragment: {
				argumentDefinitions: [],
				kind: "Fragment",
				metadata: null,
				name: "WAWebBizBroadcastProNewBroadcastFlowQuery",
				selections: [{
					alias: null,
					args: null,
					concreteType: "XFBWhatsAppSMBBBPro",
					kind: "LinkedField",
					name: "xfb_whatsapp_bb_pro",
					plural: !1,
					selections: [t],
					storageKey: null
				}, {
					args: null,
					kind: "FragmentSpread",
					name: "WAWebBizBroadcastProNewBroadcastDrawer_query"
				}],
				type: "Query",
				abstractKey: null
			},
			kind: "Request",
			operation: {
				argumentDefinitions: [],
				kind: "Operation",
				name: "WAWebBizBroadcastProNewBroadcastFlowQuery",
				selections: [{
					alias: null,
					args: null,
					concreteType: "XFBWhatsAppSMBBBPro",
					kind: "LinkedField",
					name: "xfb_whatsapp_bb_pro",
					plural: !1,
					selections: [t, {
						alias: null,
						args: null,
						concreteType: "AdAccount",
						kind: "LinkedField",
						name: "ad_account",
						plural: !1,
						selections: [
							{
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "currency",
								storageKey: null
							},
							{
								alias: null,
								args: [{
									kind: "Literal",
									name: "specific_entrypoint",
									value: "WHATSAPP_SMB"
								}],
								concreteType: "XFBBillableAccountBillingInfo",
								kind: "LinkedField",
								name: "billing_info",
								plural: !1,
								selections: [{
									alias: null,
									args: null,
									concreteType: "XFBBillableAccountRequiredAction",
									kind: "LinkedField",
									name: "required_action",
									plural: !1,
									selections: [{
										alias: null,
										args: null,
										concreteType: "XFBBillableAccountBillingInfoAction",
										kind: "LinkedField",
										name: "action",
										plural: !1,
										selections: [
											r,
											o,
											a
										],
										storageKey: null
									}, {
										alias: null,
										args: null,
										concreteType: "XFBBillableAccountBillingInfoMessage",
										kind: "LinkedField",
										name: "message",
										plural: !1,
										selections: [{
											alias: null,
											args: null,
											kind: "ScalarField",
											name: "headline",
											storageKey: null
										}, {
											alias: null,
											args: null,
											kind: "ScalarField",
											name: "body",
											storageKey: null
										}],
										storageKey: null
									}],
									storageKey: null
								}, {
									alias: null,
									args: null,
									concreteType: "XFBBillableAccountPaymentSectionDetails",
									kind: "LinkedField",
									name: "payment_section_details",
									plural: !1,
									selections: [
										o,
										{
											alias: null,
											args: null,
											kind: "ScalarField",
											name: "label_ax",
											storageKey: null
										},
										{
											alias: null,
											args: null,
											concreteType: "Image",
											kind: "LinkedField",
											name: "logos",
											plural: !0,
											selections: [{
												alias: null,
												args: null,
												kind: "ScalarField",
												name: "uri",
												storageKey: null
											}],
											storageKey: null
										},
										{
											alias: null,
											args: null,
											concreteType: "XFBBillableAccountBillingInfoAction",
											kind: "LinkedField",
											name: "primary_action",
											plural: !1,
											selections: [
												o,
												r,
												a
											],
											storageKey: null
										}
									],
									storageKey: null
								}],
								storageKey: "billing_info(specific_entrypoint:\"WHATSAPP_SMB\")"
							},
							{
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "currency_code_enum",
								storageKey: null
							},
							{
								alias: null,
								args: null,
								concreteType: null,
								kind: "LinkedField",
								name: "payment_account",
								plural: !1,
								selections: [{
									alias: null,
									args: null,
									kind: "ScalarField",
									name: "__typename",
									storageKey: null
								}, e],
								storageKey: null
							},
							e
						],
						storageKey: null
					}],
					storageKey: null
				}, {
					alias: null,
					args: null,
					concreteType: "Viewer",
					kind: "LinkedField",
					name: "viewer",
					plural: !1,
					selections: [{
						alias: null,
						args: null,
						concreteType: "WhatsAppBusinessAccount",
						kind: "LinkedField",
						name: "backing_waba",
						plural: !1,
						selections: [e, {
							alias: null,
							args: null,
							concreteType: "WhatsAppBusinessAccountWaBbProCustomAudiencesConnection",
							kind: "LinkedField",
							name: "wa_bb_pro_custom_audiences",
							plural: !1,
							selections: [{
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "is_empty",
								storageKey: null
							}],
							storageKey: null
						}],
						storageKey: null
					}],
					storageKey: null
				}]
			},
			params: {
				id: n("WAWebBizBroadcastProNewBroadcastFlowQuery_facebookRelayOperation"),
				metadata: {},
				name: "WAWebBizBroadcastProNewBroadcastFlowQuery",
				operationKind: "query",
				text: null
			}
		};
	})();
	n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e), a.exports = e;
}), null);
