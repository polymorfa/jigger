__d("MAWSecureThreadQPContainerQuery.graphql", ["MAWSecureThreadQPContainerQuery_facebookRelayOperation", "relay-runtime"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = {
		fragment: {
			argumentDefinitions: [],
			kind: "Fragment",
			metadata: null,
			name: "MAWSecureThreadQPContainerQuery",
			selections: [{
				args: null,
				kind: "FragmentSpread",
				name: "MAWSecureThreadQPContainerInner_query"
			}],
			type: "Query",
			abstractKey: null
		},
		kind: "Request",
		operation: {
			argumentDefinitions: [],
			kind: "Operation",
			name: "MAWSecureThreadQPContainerQuery",
			selections: [{
				alias: null,
				args: null,
				concreteType: "Viewer",
				kind: "LinkedField",
				name: "viewer",
				plural: !1,
				selections: [{
					alias: null,
					args: [{
						kind: "Literal",
						name: "surface_nux_id",
						value: 8879
					}, {
						kind: "Literal",
						name: "trigger",
						value: "MESSENGER_E2EE_THREAD_OPEN"
					}],
					concreteType: "ViewerEligibleQuickPromotionsConnection",
					kind: "LinkedField",
					name: "eligible_promotions",
					plural: !1,
					selections: [{
						if: null,
						kind: "Defer",
						label: "MAWSecureThreadQPContainerInner_query$defer$MAWSecureThreadQuickPromotion_eligiblePromotions",
						selections: [{
							alias: null,
							args: null,
							concreteType: "QuickPromotion",
							kind: "LinkedField",
							name: "nodes",
							plural: !0,
							selections: [{
								alias: null,
								args: null,
								concreteType: "CometQuickPromotionSections",
								kind: "LinkedField",
								name: "comet_qp_sections",
								plural: !1,
								selections: [{
									alias: null,
									args: [{
										kind: "Literal",
										name: "supported",
										value: "1OzhWV"
									}],
									concreteType: null,
									kind: "LinkedField",
									name: "renderer_strategy",
									plural: !1,
									selections: [{
										alias: null,
										args: null,
										kind: "ScalarField",
										name: "__typename",
										storageKey: null
									}, {
										kind: "InlineFragment",
										selections: [{
											args: null,
											documentName: "MAWSecureThreadQuickPromotion_eligiblePromotions",
											fragmentName: "CometQuickPromotionArmadilloXMAPreviewSettingsNUXRendererStrategy_quickPromotionRef",
											fragmentPropName: "quickPromotionRef",
											kind: "ModuleImport"
										}],
										type: "CometQuickPromotionArmadilloXMAPreviewSettingsNUXRendererStrategy",
										abstractKey: null
									}],
									storageKey: "renderer_strategy(supported:\"1OzhWV\")"
								}],
								storageKey: null
							}, {
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "id",
								storageKey: null
							}],
							storageKey: null
						}]
					}],
					storageKey: "eligible_promotions(surface_nux_id:8879,trigger:\"MESSENGER_E2EE_THREAD_OPEN\")"
				}],
				storageKey: null
			}]
		},
		params: {
			id: n("MAWSecureThreadQPContainerQuery_facebookRelayOperation"),
			metadata: {},
			name: "MAWSecureThreadQPContainerQuery",
			operationKind: "query",
			text: null
		}
	};
	n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e), a.exports = e;
}), null);
