__d("useWAWebBizBroadcastQuota", [
	"WALogger",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFetchWithAdAccountToken",
	"WAWebGraphQLServerError",
	"WAWebRelayEnvironment",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"react-relay",
	"useWAWebBizBroadcastQuotaQuery.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = u || (u = o("react")), d = c.useCallback, m = c.useEffect, p = c.useRef, _ = e !== void 0 ? e : e = n("useWAWebBizBroadcastQuotaQuery.graphql");
	function f() {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			return o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = yield o("WAWebRelayEnvironment").getEnvironment({
						accessToken: e.token,
						actorID: e.bp_id,
						environmentType: "facebook"
					});
					return o("react-relay").fetchQuery(t, _, { data: { tos: { did_accept: !1 } } }).toPromise();
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})());
		}), g.apply(this, arguments);
	}
	function h() {
		var e = o("react-compiler-runtime").c(4), t = p(null), n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = function() {
			if (t.current != null) return t.current;
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastQuota] starting quota fetch"])));
			var e = f();
			return t.current = e, e.catch(function(n) {
				var r = n instanceof o("WAWebGraphQLServerError").GraphQLServerError ? o("WAWebGraphQLServerError").formatGraphQLServerError(n) : String(n);
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.quotaFetchFailed(r), t.current === e && (t.current = null);
			}), e;
		}, e[0] = n) : n = e[0];
		var r = n, a, i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = function() {
			r();
		}, i = [r], e[1] = a, e[2] = i) : (a = e[1], i = e[2]), m(a, i);
		var l;
		return e[3] === Symbol.for("react.memo_cache_sentinel") ? (l = { awaitQuota: r }, e[3] = l) : l = e[3], l;
	}
	l.useWAWebBizBroadcastQuota = h;
}), 98);
