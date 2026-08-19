__d("useFlowJSONValidationLibrary", [
	"RelayHooks",
	"WAFlowJSONLineColumnPointerUtil",
	"WAFlowJSONValidation",
	"WAFlowJSONValidationError",
	"react",
	"useFlowJSONValidationLibraryQuery.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useMemo, m = u.useState, p = e !== void 0 ? e : e = n("useFlowJSONValidationLibraryQuery.graphql");
	function _(e, t) {
		var n = o("RelayHooks").useRelayEnvironment(), r = m(null), a = r[0], i = r[1];
		return c(function() {
			t != null && o("RelayHooks").fetchQuery(n, p, {
				skipRequest: !1,
				version: t,
				wabaID: e
			}).toPromise().then(function(e) {
				i(e == null ? void 0 : e.xfb_wa_flows_is_json_version_accessible);
			}).catch(function() {
				return i(null);
			});
		}, [
			t,
			n,
			e
		]), d(function() {
			return function(e) {
				if (a === !1) {
					var t = o("WAFlowJSONLineColumnPointerUtil").getWAFlowJSONLineColumnPointerData(e);
					return o("WAFlowJSONValidationError").invalidFlowJSONVersionError(t);
				}
				return o("WAFlowJSONValidation").validateFlowJSON(e);
			};
		}, [a]);
	}
	l.default = _;
}), 98);
