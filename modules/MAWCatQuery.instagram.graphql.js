__d("MAWCatQuery.instagram.graphql", ["MAWCatQuery_instagramRelayOperation"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = (function() {
		var e = [{
			alias: null,
			args: null,
			concreteType: "SecureMessageOverWACATGraphResult",
			kind: "LinkedField",
			name: "secure_message_over_wa_cat_query",
			plural: !1,
			selections: [{
				alias: null,
				args: null,
				kind: "ScalarField",
				name: "encrypted_serialized_cat",
				storageKey: null
			}, {
				alias: null,
				args: null,
				kind: "ScalarField",
				name: "expiration_time_in_seconds",
				storageKey: null
			}],
			storageKey: null
		}];
		return {
			fragment: {
				argumentDefinitions: [],
				kind: "Fragment",
				metadata: null,
				name: "MAWCatQuery",
				selections: e,
				type: "Query",
				abstractKey: null
			},
			kind: "Request",
			operation: {
				argumentDefinitions: [],
				kind: "Operation",
				name: "MAWCatQuery",
				selections: e
			},
			params: {
				id: n("MAWCatQuery_instagramRelayOperation"),
				metadata: {},
				name: "MAWCatQuery",
				operationKind: "query",
				text: null
			}
		};
	})();
	a.exports = e;
}), null);
