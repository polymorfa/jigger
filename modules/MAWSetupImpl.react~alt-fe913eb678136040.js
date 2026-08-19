__d("MAWSetupImpl.react", [
	"BaseHeadingContext",
	"CometRelay",
	"MAWCommonSetup",
	"MAWCryptoAuthToken",
	"MAWSetupMutex.react",
	"cr:6159",
	"cr:6160",
	"cr:8800",
	"promiseDone",
	"react",
	"shouldUseMAWSharedWorker",
	"useDataLossChecker",
	"useLegacyUserWatchdog",
	"useMAWReregisterDeviceOnError",
	"useStorageUsageMetricsLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useMemo;
	window.XPlatTesting = n("cr:6159"), window.XPlatTestingGroups = n("cr:6160"), window.XPlatMockServer = n("cr:8800");
	function p(e) {
		var t = e.children, n = e.fbid, a = e.logout, i = e.setupBridge, l = o("CometRelay").useRelayEnvironment(), u = c(function() {
			return o("MAWCryptoAuthToken").fetchFreshCAT(l);
		}, [l]), p = r("useMAWReregisterDeviceOnError")({
			rotateCryptoAuthToken: u,
			setupBridge: i
		}), _ = m(function() {
			return {
				logout: a != null ? a : function() {
					return r("promiseDone")(p());
				},
				reregisterDevice: function() {
					return r("promiseDone")(p());
				},
				rotateCryptoAuthToken: u,
				setupBridge: i
			};
		}, [
			u,
			a,
			p,
			i
		]);
		o("MAWCommonSetup").useArmadillo(_), r("useLegacyUserWatchdog")(), r("useDataLossChecker")(), r("useStorageUsageMetricsLogger")();
		var f = d(r("BaseHeadingContext")), g = !o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker();
		return s.jsxs(r("BaseHeadingContext").Provider, {
			value: f + 1,
			children: [t, g ? s.jsx(r("MAWSetupMutex.react"), {
				environment: l,
				fbId: n,
				platformSetupUtils: _
			}) : null]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
