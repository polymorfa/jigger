__d("WAMFlowsCTWAFlowPreviewQuery.graphql", ["WAMFlowsCTWAFlowPreviewQuery_facebookRelayOperation"], (function(t, n, r, o, a, i) {
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
			name: "defaultCtaToGetStarted"
		}, o = {
			defaultValue: null,
			kind: "LocalArgument",
			name: "flowId"
		}, a = {
			defaultValue: null,
			kind: "LocalArgument",
			name: "pageId"
		}, i = {
			defaultValue: null,
			kind: "LocalArgument",
			name: "skipRequest"
		}, l = [{
			kind: "Variable",
			name: "id",
			variableName: "flowId"
		}], s = {
			alias: null,
			args: null,
			kind: "ScalarField",
			name: "welj",
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
					name: "default_cta_to_get_started",
					variableName: "defaultCtaToGetStarted"
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
					a,
					i
				],
				kind: "Fragment",
				metadata: { throwOnFieldError: !0 },
				name: "WAMFlowsCTWAFlowPreviewQuery",
				selections: [{
					condition: "skipRequest",
					kind: "Condition",
					passingValue: !1,
					selections: [{
						kind: "RequiredField",
						field: {
							alias: "flow",
							args: l,
							concreteType: "XFBWhatsAppExtension",
							kind: "LinkedField",
							name: "fetch__XFBWhatsAppExtension",
							plural: !1,
							selections: [{
								kind: "RequiredField",
								field: s,
								action: "THROW",
								path: "flow.welj"
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
					o,
					i,
					e,
					t,
					a,
					r
				],
				kind: "Operation",
				name: "WAMFlowsCTWAFlowPreviewQuery",
				selections: [{
					condition: "skipRequest",
					kind: "Condition",
					passingValue: !1,
					selections: [{
						alias: "flow",
						args: l,
						concreteType: "XFBWhatsAppExtension",
						kind: "LinkedField",
						name: "fetch__XFBWhatsAppExtension",
						plural: !1,
						selections: [s, {
							alias: null,
							args: null,
							kind: "ScalarField",
							name: "id",
							storageKey: null
						}],
						storageKey: null
					}]
				}, u]
			},
			params: {
				id: n("WAMFlowsCTWAFlowPreviewQuery_facebookRelayOperation"),
				metadata: {},
				name: "WAMFlowsCTWAFlowPreviewQuery",
				operationKind: "query",
				text: null
			}
		};
	})();
	a.exports = e;
}), null);
