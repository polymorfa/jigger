__d("MWEBVirtualDevicesContextProvider.react", [
	"MAWOneTimeCodeGating",
	"MWEBVirtualDevicesContext.react",
	"gkx",
	"react",
	"react-compiler-runtime",
	"useHasOTCEligibleDevicesFromReStore",
	"useMWEncryptedBackupsListenForChangesToVirtualDevicesV2"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t, n = o("react-compiler-runtime").c(16), a = e.children, i = e.hasOtcEligibleDevicesInitialValue, l = e.hsmCreationTimeInitialValue, u = e.offlineDevicesCountInitialValue, c = e.vestaClientIDInitialValue, d = u === void 0 ? -1 : u, m = c != null ? c : void 0, p;
		n[0] !== l || n[1] !== d || n[2] !== m ? (p = {
			hsmCreationTimeInitialValue: l,
			offlineDevicesCountInitialValue: d,
			vestaClientIDInitialValue: m
		}, n[0] = l, n[1] = d, n[2] = m, n[3] = p) : p = n[3];
		var _ = r("useMWEncryptedBackupsListenForChangesToVirtualDevicesV2")(p), f = _.hsmCreationTime, g = _.offlineDevicesCount, h = _.vestaClientID, y = r("useHasOTCEligibleDevicesFromReStore")(), C = y.hasOtcEligibleDevices, b = (t = r("gkx")("24064")) != null ? t : !1, v;
		n[4] !== C || n[5] !== i ? (v = o("MAWOneTimeCodeGating").isOneTimeCodeEnabled() && (b === !0 || i === !0 || C), n[4] = C, n[5] = i, n[6] = v) : v = n[6];
		var S = v, R = h != null, L;
		n[7] !== S || n[8] !== f || n[9] !== g || n[10] !== R || n[11] !== h ? (L = { virtualDeviceInfo: {
			doesUserHaveOtcEligibleDevices: S,
			hsmCreationTime: f,
			isPINCodeRegistered: R,
			offlineDevicesCount: g,
			vestaClientID: h
		} }, n[7] = S, n[8] = f, n[9] = g, n[10] = R, n[11] = h, n[12] = L) : L = n[12];
		var E = L, k;
		return n[13] !== a || n[14] !== E ? (k = s.jsx(o("MWEBVirtualDevicesContext.react").MWEBVirtualDevicesContext.Provider, {
			value: E,
			children: a
		}), n[13] = a, n[14] = E, n[15] = k) : k = n[15], k;
	}
	l.default = c;
}), 98);
