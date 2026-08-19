__d("MWEBVestaUserInfoContext.react", [
	"CometRelay",
	"FBLogger",
	"MWEBVestaUserInfoContextProvider_viewer.graphql",
	"react",
	"react-compiler-runtime",
	"useMWChatEncryptedBackupsVestaUserInfo"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.createContext, m = c.useContext, p = c.useMemo, _ = d(null);
	function f() {
		var e = m(_);
		if (e == null) throw r("FBLogger")("messenger_web").mustfixThrow("useMWEBVestaUserInfo must be used inside MWEBVestaUserInfoContext");
		return e;
	}
	function g() {
		var e = f(), t = e.attemptsRemaining, n = e.loginTimeoutRemainingSecs;
		return t === 0 || n != null && n > 0;
	}
	function h(t) {
		var a = o("react-compiler-runtime").c(10), i = t.children, l = t.vestaClientID, s = t.viewer$key, c = o("CometRelay").useFragment(e !== void 0 ? e : e = n("MWEBVestaUserInfoContextProvider_viewer.graphql"), s), d;
		a[0] !== c ? (d = { viewer$key: c }, a[0] = c, a[1] = d) : d = a[1];
		var m = r("useMWChatEncryptedBackupsVestaUserInfo")(d), p = l != null ? l : null, f;
		a[2] !== p || a[3] !== m.attemptsRemaining || a[4] !== m.loginTimeoutRemainingSecs || a[5] !== m.refetchVestaClientInfo ? (f = {
			attemptsRemaining: m.attemptsRemaining,
			loginTimeoutRemainingSecs: m.loginTimeoutRemainingSecs,
			refetchVestaClientInfo: m.refetchVestaClientInfo,
			vestaClientID: p
		}, a[2] = p, a[3] = m.attemptsRemaining, a[4] = m.loginTimeoutRemainingSecs, a[5] = m.refetchVestaClientInfo, a[6] = f) : f = a[6];
		var g = f, h;
		return a[7] !== i || a[8] !== g ? (h = u.jsx(_.Provider, {
			value: g,
			children: i
		}), a[7] = i, a[8] = g, a[9] = h) : h = a[9], h;
	}
	l.useMWEBVestaUserInfo = f, l.useMWEBIsCooldownOrLockOutState = g, l.MWEBVestaUserInfoContextProvider = h;
}), 98);
