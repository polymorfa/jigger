__d("useWAWebBizAIQueryRefreshError", [
	"WALogger",
	"WAWebNoop",
	"getErrorSafe",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useRef, m = u.useSyncExternalStore;
	function p(t) {
		var n = o("react-compiler-runtime").c(3), a = d(!1), i;
		n[0] !== t ? (i = function(i) {
			if (a.current = !1, t == null) return r("WAWebNoop");
			var n = t.subscribe({ error: function(n) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: query background refresh failed"]))).catching(r("getErrorSafe")(n)).sendLogs("biz-ai-query-refresh-error"), a.current = !0, i();
			} });
			return (function() {
				n.unsubscribe();
			});
		}, n[0] = t, n[1] = i) : i = n[1];
		var l = i, s;
		return n[2] === Symbol.for("react.memo_cache_sentinel") ? (s = function() {
			return a.current;
		}, n[2] = s) : s = n[2], m(l, s);
	}
	l.default = p;
}), 98);
