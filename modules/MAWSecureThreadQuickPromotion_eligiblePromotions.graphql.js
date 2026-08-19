__d("MAWSecureThreadQuickPromotion_eligiblePromotions.graphql", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = {
		argumentDefinitions: [],
		kind: "Fragment",
		metadata: null,
		name: "MAWSecureThreadQuickPromotion_eligiblePromotions",
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
			}],
			storageKey: null
		}],
		type: "ViewerEligibleQuickPromotionsConnection",
		abstractKey: null
	};
	a.exports = e;
}), null);
