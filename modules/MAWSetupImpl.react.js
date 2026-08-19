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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(24), n = e.children, a = e.fbid, i = e.logout, l = e.setupBridge, u = o("CometRelay").useRelayEnvironment(), c;
		t[0] !== u ? (c = function() {
			return o("MAWCryptoAuthToken").fetchFreshCAT(u);
		}, t[0] = u, t[1] = c) : c = t[1];
		var m = c, p;
		t[2] !== m || t[3] !== l ? (p = {
			rotateCryptoAuthToken: m,
			setupBridge: l
		}, t[2] = m, t[3] = l, t[4] = p) : p = t[4];
		var _ = r("useMAWReregisterDeviceOnError")(p), f;
		t[5] !== i || t[6] !== _ ? (f = i != null ? i : function() {
			return r("promiseDone")(_());
		}, t[5] = i, t[6] = _, t[7] = f) : f = t[7];
		var g;
		t[8] !== _ ? (g = function() {
			return r("promiseDone")(_());
		}, t[8] = _, t[9] = g) : g = t[9];
		var h;
		t[10] !== m || t[11] !== l || t[12] !== f || t[13] !== g ? (h = {
			logout: f,
			reregisterDevice: g,
			rotateCryptoAuthToken: m,
			setupBridge: l
		}, t[10] = m, t[11] = l, t[12] = f, t[13] = g, t[14] = h) : h = t[14];
		var y = h;
		o("MAWCommonSetup").useArmadillo(y), r("useLegacyUserWatchdog")(), r("useDataLossChecker")(), r("useStorageUsageMetricsLogger")();
		var C = d(r("BaseHeadingContext")), b;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (b = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker(), t[15] = b) : b = t[15];
		var v = !b, S = C + 1, R;
		t[16] !== u || t[17] !== a || t[18] !== y ? (R = v ? s.jsx(r("MAWSetupMutex.react"), {
			environment: u,
			fbId: a,
			platformSetupUtils: y
		}) : null, t[16] = u, t[17] = a, t[18] = y, t[19] = R) : R = t[19];
		var L;
		return t[20] !== n || t[21] !== S || t[22] !== R ? (L = s.jsxs(r("BaseHeadingContext").Provider, {
			value: S,
			children: [n, R]
		}), t[20] = n, t[21] = S, t[22] = R, t[23] = L) : L = t[23], L;
	}
	l.default = p;
}), 98);
