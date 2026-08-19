__d("useReStore", [
	"InteractionTracingMetrics",
	"LSDatabaseSingleton",
	"LSSuspense",
	"PromiseAnnotate",
	"ReQLSuspenseSupportedContextTracking",
	"ReStoreProvider.react",
	"react",
	"react-compiler-runtime",
	"suspendOrThrowIfUsedInSSR"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = (m || (m = o("react"))).useContext, _ = (e || (e = r("LSSuspense"))).makeCollection();
	function f() {
		var t = o("react-compiler-runtime").c(1);
		o("ReQLSuspenseSupportedContextTracking").useReStoreTrackInRender();
		var n = p((d || (d = o("ReStoreProvider.react"))).context);
		if (n != null) return n;
		(s || (s = r("suspendOrThrowIfUsedInSSR")))("useReStore: LSDB is not available in SSR. Switching to client side render"), (u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton == null && r("InteractionTracingMetrics").currentInteractionLogger().forEach(h), (c || (c = o("PromiseAnnotate"))).setDisplayName((u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton, "LSDatabaseSingleton");
		var a;
		return t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (e || (e = r("LSSuspense"))).getFromCollection(_, (u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton, g), t[0] = a) : a = t[0], a;
	}
	function g() {
		return (u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
	}
	function h(e) {
		r("InteractionTracingMetrics").addAnnotationBoolean(e.traceId, "is_lsdb_null", !0);
	}
	l.default = f;
}), 98);
