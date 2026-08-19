__d("WAMFlowsCTWAEditorModalQuery.graphql", ["WAMFlowsCTWAEditorModalQuery_facebookRelayOperation"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = (function() {
		var e = {
			defaultValue: null,
			kind: "LocalArgument",
			name: "adObjective"
		}, t = {
			defaultValue: null,
			kind: "LocalArgument",
			name: "businessName"
		}, r = {
			defaultValue: null,
			kind: "LocalArgument",
			name: "flowId"
		}, o = {
			defaultValue: null,
			kind: "LocalArgument",
			name: "pageId"
		}, a = {
			defaultValue: null,
			kind: "LocalArgument",
			name: "skipRequest"
		}, i = [{
			kind: "Variable",
			name: "id",
			variableName: "flowId"
		}], l = {
			alias: null,
			args: null,
			kind: "ScalarField",
			name: "welj",
			storageKey: null
		}, s = {
			alias: null,
			args: null,
			kind: "ScalarField",
			name: "status",
			storageKey: null
		}, u = {
			alias: "flowJSON",
			args: [
				{
					kind: "Variable",
					name: "ad_objective",
					variableName: "adObjective"
				},
				{
					kind: "Variable",
					name: "business_name",
					variableName: "businessName"
				},
				{
					kind: "Variable",
					name: "page_id",
					variableName: "pageId"
				}
			],
			kind: "ScalarField",
			name: "xfb_wa_flows_template_for_ctwa",
			storageKey: null
		};
		return {
			fragment: {
				argumentDefinitions: [
					e,
					t,
					r,
					o,
					a
				],
				kind: "Fragment",
				metadata: { throwOnFieldError: !0 },
				name: "WAMFlowsCTWAEditorModalQuery",
				selections: [{
					condition: "skipRequest",
					kind: "Condition",
					passingValue: !1,
					selections: [{
						kind: "RequiredField",
						field: {
							alias: "flow",
							args: i,
							concreteType: "XFBWhatsAppExtension",
							kind: "LinkedField",
							name: "fetch__XFBWhatsAppExtension",
							plural: !1,
							selections: [{
								kind: "RequiredField",
								field: l,
								action: "THROW",
								path: "flow.welj"
							}, {
								kind: "RequiredField",
								field: s,
								action: "THROW",
								path: "flow.status"
							}],
							storageKey: null
						},
						action: "THROW",
						path: "flow"
					}]
				}, u],
				type: "Query",
				abstractKey: null
			},
			kind: "Request",
			operation: {
				argumentDefinitions: [
					r,
					a,
					e,
					t,
					o
				],
				kind: "Operation",
				name: "WAMFlowsCTWAEditorModalQuery",
				selections: [{
					condition: "skipRequest",
					kind: "Condition",
					passingValue: !1,
					selections: [{
						alias: "flow",
						args: i,
						concreteType: "XFBWhatsAppExtension",
						kind: "LinkedField",
						name: "fetch__XFBWhatsAppExtension",
						plural: !1,
						selections: [
							l,
							s,
							{
								alias: null,
								args: null,
								kind: "ScalarField",
								name: "id",
								storageKey: null
							}
						],
						storageKey: null
					}]
				}, u]
			},
			params: {
				id: n("WAMFlowsCTWAEditorModalQuery_facebookRelayOperation"),
				metadata: {},
				name: "WAMFlowsCTWAEditorModalQuery",
				operationKind: "query",
				text: null
			}
		};
	})();
	a.exports = e;
}), null);
