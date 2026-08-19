__d("WAWebBizBroadcastProEditAudienceListPaginationQuery.graphql", ["WAWebBizBroadcastProEditAudienceListPaginationQuery_facebookRelayOperation"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = (function() {
		var e = [
			{
				defaultValue: null,
				kind: "LocalArgument",
				name: "after"
			},
			{
				defaultValue: null,
				kind: "LocalArgument",
				name: "caId"
			},
			{
				defaultValue: null,
				kind: "LocalArgument",
				name: "first"
			}
		], t = {
			kind: "Variable",
			name: "after",
			variableName: "after"
		}, r = {
			kind: "Variable",
			name: "first",
			variableName: "first"
		}, o = [
			t,
			{
				kind: "Variable",
				name: "ca_id",
				variableName: "caId"
			},
			r
		];
		return {
			fragment: {
				argumentDefinitions: e,
				kind: "Fragment",
				metadata: null,
				name: "WAWebBizBroadcastProEditAudienceListPaginationQuery",
				selections: [{
					args: [
						t,
						{
							kind: "Variable",
							name: "caId",
							variableName: "caId"
						},
						r
					],
					kind: "FragmentSpread",
					name: "WAWebBizBroadcastProEditAudienceList_query"
				}],
				type: "Query",
				abstractKey: null
			},
			kind: "Request",
			operation: {
				argumentDefinitions: e,
				kind: "Operation",
				name: "WAWebBizBroadcastProEditAudienceListPaginationQuery",
				selections: [{
					alias: null,
					args: o,
					concreteType: "XFBWhatsappSubscriberListMembersConnection",
					kind: "LinkedField",
					name: "xfb_whatsapp_subscriber_list_members",
					plural: !1,
					selections: [{
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
					}, {
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
					}],
					storageKey: null
				}, {
					alias: null,
					args: o,
					filters: ["ca_id"],
					handle: "connection",
					key: "WAWebBizBroadcastProEditAudienceList_xfb_whatsapp_subscriber_list_members",
					kind: "LinkedHandle",
					name: "xfb_whatsapp_subscriber_list_members"
				}]
			},
			params: {
				id: n("WAWebBizBroadcastProEditAudienceListPaginationQuery_facebookRelayOperation"),
				metadata: {},
				name: "WAWebBizBroadcastProEditAudienceListPaginationQuery",
				operationKind: "query",
				text: null
			}
		};
	})();
	a.exports = e;
}), null);
