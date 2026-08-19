__d("useHandleXmaEventsLogging", [
	"MessengerWebUXLoggerXMAEventLoggingImpl",
	"emptyFunction",
	"isCometRouterUrl",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("react-compiler-runtime").c(9), n = e.attachment, a = e.message, i = e.threadType, l = o("MessengerWebUXLoggerXMAEventLoggingImpl").useXMAEventsClickLogger(), s = o("MessengerWebUXLoggerXMAEventLoggingImpl").useXMAEventsRedirectDefaultToFBLogger();
		if (n == null) return r("emptyFunction");
		var u;
		t[0] !== (n == null ? void 0 : n.actionUrl) ? (u = (n == null ? void 0 : n.actionUrl) == null ? !1 : r("isCometRouterUrl")(n == null ? void 0 : n.actionUrl), t[0] = n == null ? void 0 : n.actionUrl, t[1] = u) : u = t[1];
		var c = u, d;
		t[2] !== n || t[3] !== c || t[4] !== l || t[5] !== s || t[6] !== a || t[7] !== i ? (d = function(t) {
			var e = t != null ? t : c;
			l == null || l({
				attachment: n,
				clickCategory: 2,
				message: a,
				threadType: i
			}), (n == null ? void 0 : n.actionUrl) != null && s({
				attachment: n,
				isDirectToExternal: !e,
				message: a,
				threadType: i
			});
		}, t[2] = n, t[3] = c, t[4] = l, t[5] = s, t[6] = a, t[7] = i, t[8] = d) : d = t[8];
		var m = d;
		return m;
	}
	l.default = e;
}), 98);
