__d("MAWCometStickerPickerSearchResultsRootGQLQuery.graphql", ["MAWCometStickerPickerSearchResultsRootGQLQuery_facebookRelayOperation", "relay-runtime"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = (function() {
		var e = [{
			defaultValue: null,
			kind: "LocalArgument",
			name: "request"
		}], t = [{
			alias: null,
			args: [{
				kind: "Variable",
				name: "request",
				variableName: "request"
			}],
			concreteType: "XFBLSStickerSearchQueryResults",
			kind: "LinkedField",
			name: "xfb_stickers_search_deidentified",
			plural: !1,
			selections: [{
				alias: null,
				args: null,
				concreteType: "XFBLSStickerSearchResultData",
				kind: "LinkedField",
				name: "results",
				plural: !0,
				selections: [
					{
						alias: null,
						args: null,
						kind: "ScalarField",
						name: "sticker_id",
						storageKey: null
					},
					{
						alias: null,
						args: null,
						kind: "ScalarField",
						name: "accessibility_label",
						storageKey: null
					},
					{
						alias: null,
						args: null,
						kind: "ScalarField",
						name: "static_thumbnail_image_url",
						storageKey: null
					},
					{
						alias: null,
						args: null,
						kind: "ScalarField",
						name: "static_thumbnail_image_fallback_url",
						storageKey: null
					},
					{
						alias: null,
						args: null,
						kind: "ScalarField",
						name: "animated_image_url",
						storageKey: null
					}
				],
				storageKey: null
			}],
			storageKey: null
		}];
		return {
			fragment: {
				argumentDefinitions: e,
				kind: "Fragment",
				metadata: null,
				name: "MAWCometStickerPickerSearchResultsRootGQLQuery",
				selections: t,
				type: "Query",
				abstractKey: null
			},
			kind: "Request",
			operation: {
				argumentDefinitions: e,
				kind: "Operation",
				name: "MAWCometStickerPickerSearchResultsRootGQLQuery",
				selections: t
			},
			params: {
				id: n("MAWCometStickerPickerSearchResultsRootGQLQuery_facebookRelayOperation"),
				metadata: {},
				name: "MAWCometStickerPickerSearchResultsRootGQLQuery",
				operationKind: "query",
				text: null
			}
		};
	})();
	n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e), a.exports = e;
}), null);
