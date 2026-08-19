__d("WAWebBizBroadcastProExistingAudienceModalAudienceListQuery.graphql", ["WAWebBizBroadcastProExistingAudienceModalAudienceListQuery_facebookRelayOperation", "relay-runtime"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = (function() {
		var e = {
			alias: null,
			args: null,
			kind: "ScalarField",
			name: "id",
			storageKey: null
		}, t = [{
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
						concreteType: "WhatsAppBusinessAccountWaBbProCustomAudiencesEdge",
						kind: "LinkedField",
						name: "edges",
						plural: !0,
						selections: [{
							alias: null,
							args: null,
							concreteType: "AdCustomAudience",
							kind: "LinkedField",
							name: "node",
							plural: !1,
							selections: [
								e,
								{
									alias: null,
									args: null,
									kind: "ScalarField",
									name: "name",
									storageKey: null
								},
								{
									alias: null,
									args: null,
									kind: "ScalarField",
									name: "subscriber_size",
									storageKey: null
								}
							],
							storageKey: null
						}],
						storageKey: null
					}],
					storageKey: null
				}],
				storageKey: null
			}],
			storageKey: null
		}];
		return {
			fragment: {
				argumentDefinitions: [],
				kind: "Fragment",
				metadata: null,
				name: "WAWebBizBroadcastProExistingAudienceModalAudienceListQuery",
				selections: t,
				type: "Query",
				abstractKey: null
			},
			kind: "Request",
			operation: {
				argumentDefinitions: [],
				kind: "Operation",
				name: "WAWebBizBroadcastProExistingAudienceModalAudienceListQuery",
				selections: t
			},
			params: {
				id: n("WAWebBizBroadcastProExistingAudienceModalAudienceListQuery_facebookRelayOperation"),
				metadata: {},
				name: "WAWebBizBroadcastProExistingAudienceModalAudienceListQuery",
				operationKind: "query",
				text: null
			}
		};
	})();
	n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e), a.exports = e;
}), null);
