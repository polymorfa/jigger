__d("useMWRedirectToOpenThreadOfDualThread", [
	"LSIntEnum",
	"MAWThreadCutover",
	"react",
	"react-compiler-runtime",
	"useMWNavigation",
	"useMWPCreateOneToOneThreadThenNavigate"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (e || (e = o("react"))).useCallback;
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = o("MAWThreadCutover").useGetCutoverOpenThreadKey(e), a = o("MAWThreadCutover").useIsCutoverOpenThread(n), i = r("useMWNavigation")(), l = r("useMWPCreateOneToOneThreadThenNavigate")(i, "cutoverThread", "dualThreadCutoverComposer"), u;
		return t[0] !== l || t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== e ? (u = function() {
			n != null && a ? i.openTabOrInbox({
				threadKey: n,
				threadType: (s || (s = o("LSIntEnum"))).ofNumber(1)
			}, "cutoverThread") : l == null || l(e);
		}, t[0] = l, t[1] = n, t[2] = a, t[3] = i, t[4] = e, t[5] = u) : u = t[5], u;
	}
	l.default = c;
}), 98);
