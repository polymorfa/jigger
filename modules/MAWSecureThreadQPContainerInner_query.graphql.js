__d("MAWSecureThreadQPContainerInner_query.graphql", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = {
		argumentDefinitions: [],
		kind: "Fragment",
		metadata: null,
		name: "MAWSecureThreadQPContainerInner_query",
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
					kind: "Defer",
					selections: [{
						args: null,
						kind: "FragmentSpread",
						name: "MAWSecureThreadQuickPromotion_eligiblePromotions"
					}]
				}],
				storageKey: "eligible_promotions(surface_nux_id:8879,trigger:\"MESSENGER_E2EE_THREAD_OPEN\")"
			}],
			storageKey: null
		}],
		type: "Query",
		abstractKey: null
	};
	a.exports = e;
}), null);
