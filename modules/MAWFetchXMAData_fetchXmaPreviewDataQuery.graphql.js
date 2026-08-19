__d("MAWFetchXMAData_fetchXmaPreviewDataQuery.graphql", ["MAWFetchXMAData_fetchXmaPreviewDataQuery_facebookRelayOperation"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = (function() {
		var e = [{
			defaultValue: null,
			kind: "LocalArgument",
			name: "url"
		}], t = [{
			alias: null,
			args: [{
				fields: [{
					kind: "Variable",
					name: "url",
					variableName: "url"
				}],
				kind: "ObjectValue",
				name: "params"
			}],
			concreteType: "XFBXMAPreviewData",
			kind: "LinkedField",
			name: "xma_preview_data",
			plural: !1,
			selections: [
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "is_receiver_fetch_supported",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "is_public",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "post_id",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "default_cta_title",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "header_title",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "subtitle_text",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "title_text",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "xma_content_type",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "favicon_url",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "header_image_url",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "preview_url",
					storageKey: null
				},
				{
					alias: null,
					args: null,
					concreteType: "XFBXMAPreviewDataCtaDataConnection",
					kind: "LinkedField",
					name: "cta_data",
					plural: !1,
					selections: [{
						alias: null,
						args: null,
						concreteType: "XFBXMACtaData",
						kind: "LinkedField",
						name: "nodes",
						plural: !0,
						selections: [
							{
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "cta_title",
								storageKey: null
							},
							{
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "cta_action_url",
								storageKey: null
							},
							{
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "cta_native_url",
								storageKey: null
							}
						],
						storageKey: null
					}],
					storageKey: null
				}
			],
			storageKey: null
		}];
		return {
			fragment: {
				argumentDefinitions: e,
				kind: "Fragment",
				metadata: null,
				name: "MAWFetchXMAData_fetchXmaPreviewDataQuery",
				selections: t,
				type: "Query",
				abstractKey: null
			},
			kind: "Request",
			operation: {
				argumentDefinitions: e,
				kind: "Operation",
				name: "MAWFetchXMAData_fetchXmaPreviewDataQuery",
				selections: t
			},
			params: {
				id: n("MAWFetchXMAData_fetchXmaPreviewDataQuery_facebookRelayOperation"),
				metadata: {},
				name: "MAWFetchXMAData_fetchXmaPreviewDataQuery",
				operationKind: "query",
				text: null
			}
		};
	})();
	a.exports = e;
}), null);
