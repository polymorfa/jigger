__d("LSPlatformGraphQLLightspeedRequest", [
	"CometRelay",
	"LSPlatformGraphQLLightspeedRequestQuery",
	"XPlatRelayEnvironment"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r, a) {
		return o("CometRelay").fetchQuery(o("XPlatRelayEnvironment").getRelayEnvironment(), o("LSPlatformGraphQLLightspeedRequestQuery").query, {
			deviceId: e,
			requestId: t,
			requestPayload: n,
			requestType: r
		}, a != null ? a : void 0).toPromise().then(function(e) {
			var t, n = e == null || (t = e.viewer) == null ? void 0 : t.lightspeed_web_request;
			if (n != null) return babelHelpers.extends({ dependencies: void 0 }, n);
		});
	}
	l.default = e;
}), 98);
