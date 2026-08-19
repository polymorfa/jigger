__d("MAWChatLiveLocationDialogQuery.graphql", ["MAWChatLiveLocationDialogQuery_facebookRelayOperation", "relay-runtime"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = (function() {
		var e = [{
			defaultValue: null,
			kind: "LocalArgument",
			name: "data"
		}], t = [{
			alias: null,
			args: [{
				kind: "Variable",
				name: "data",
				variableName: "data"
			}],
			concreteType: "E2EELiveLocationFetchThreadSessionsResponsePayload",
			kind: "LinkedField",
			name: "e2ee_live_location_fetch_thread_sessions",
			plural: !0,
			selections: [{
				alias: null,
				args: null,
				kind: "ScalarField",
				name: "encrypted_coordinates",
				storageKey: null
			}, {
				alias: null,
				args: null,
				kind: "ScalarField",
				name: "creator_id",
				storageKey: null
			}],
			storageKey: null
		}];
		return {
			fragment: {
				argumentDefinitions: e,
				kind: "Fragment",
				metadata: null,
				name: "MAWChatLiveLocationDialogQuery",
				selections: t,
				type: "Query",
				abstractKey: null
			},
			kind: "Request",
			operation: {
				argumentDefinitions: e,
				kind: "Operation",
				name: "MAWChatLiveLocationDialogQuery",
				selections: t
			},
			params: {
				id: n("MAWChatLiveLocationDialogQuery_facebookRelayOperation"),
				metadata: {},
				name: "MAWChatLiveLocationDialogQuery",
				operationKind: "query",
				text: null
			}
		};
	})();
	n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e), a.exports = e;
}), null);
