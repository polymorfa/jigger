__d("WAWebBizBroadcastProEditAudienceScreenQuery.graphql", ["WAWebBizBroadcastProEditAudienceScreenQuery_facebookRelayOperation", "relay-runtime"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = (function() {
		var e = [{
			defaultValue: null,
			kind: "LocalArgument",
			name: "caId"
		}, {
			defaultValue: null,
			kind: "LocalArgument",
			name: "first"
		}], t = {
			kind: "Variable",
			name: "first",
			variableName: "first"
		}, r = [{
			kind: "Variable",
			name: "ca_id",
			variableName: "caId"
		}, t], o = {
			alias: null,
			args: null,
			kind: "ScalarField",
			name: "count",
			storageKey: null
		};
		return {
			fragment: {
				argumentDefinitions: e,
				kind: "Fragment",
				metadata: null,
				name: "WAWebBizBroadcastProEditAudienceScreenQuery",
				selections: [{
					args: [{
						kind: "Variable",
						name: "caId",
						variableName: "caId"
					}, t],
					kind: "FragmentSpread",
					name: "WAWebBizBroadcastProEditAudienceList_query"
				}, {
					alias: null,
					args: r,
					concreteType: "XFBWhatsappSubscriberListMembersConnection",
					kind: "LinkedField",
					name: "xfb_whatsapp_subscriber_list_members",
					plural: !1,
					selections: [o],
					storageKey: null
				}],
				type: "Query",
				abstractKey: null
			},
			kind: "Request",
			operation: {
				argumentDefinitions: e,
				kind: "Operation",
				name: "WAWebBizBroadcastProEditAudienceScreenQuery",
				selections: [{
					alias: null,
					args: r,
					concreteType: "XFBWhatsappSubscriberListMembersConnection",
					kind: "LinkedField",
					name: "xfb_whatsapp_subscriber_list_members",
					plural: !1,
					selections: [
						{
							alias: null,
							args: null,
							concreteType: "XFBWhatsappSubscriberListMembersEdge",
							kind: "LinkedField",
							name: "edges",
							plural: !0,
							selections: [{
								alias: null,
								args: null,
								concreteType: "XFBWhatsAppSubscriberListMember",
								kind: "LinkedField",
								name: "node",
								plural: !1,
								selections: [{
									alias: null,
									args: null,
									kind: "ScalarField",
									name: "phone_number",
									storageKey: null
								}, {
									alias: null,
									args: null,
									kind: "ScalarField",
									name: "__typename",
									storageKey: null
								}],
								storageKey: null
							}, {
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "cursor",
								storageKey: null
							}],
							storageKey: null
						},
						{
							alias: null,
							args: null,
							concreteType: "PageInfo",
							kind: "LinkedField",
							name: "page_info",
							plural: !1,
							selections: [{
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "end_cursor",
								storageKey: null
							}, {
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "has_next_page",
								storageKey: null
							}],
							storageKey: null
						},
						o
					],
					storageKey: null
				}, {
					alias: null,
					args: r,
					filters: ["ca_id"],
					handle: "connection",
					key: "WAWebBizBroadcastProEditAudienceList_xfb_whatsapp_subscriber_list_members",
					kind: "LinkedHandle",
					name: "xfb_whatsapp_subscriber_list_members"
				}]
			},
			params: {
				id: n("WAWebBizBroadcastProEditAudienceScreenQuery_facebookRelayOperation"),
				metadata: {},
				name: "WAWebBizBroadcastProEditAudienceScreenQuery",
				operationKind: "query",
				text: null
			}
		};
	})();
	n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e), a.exports = e;
}), null);
