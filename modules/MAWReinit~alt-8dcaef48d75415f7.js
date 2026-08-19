__d("MAWReinit", [
	"ExecutionEnvironment",
	"MAWCurrentUser",
	"QPLUserFlow",
	"QuickPerformanceLogger",
	"WAGetStorageQplAnnotations",
	"gkx",
	"qpl",
	"shouldUseMAWSharedWorker"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("qpl")._(25310984, "169");
	function c(t) {
		var n = t != null ? { instanceKey: t } : void 0, a = !1, i = !1;
		function l() {
			i || (i = !0, r("QPLUserFlow").start(u, babelHelpers.extends({
				cancelOnUnload: !0,
				onFlowTimeout__doNOTUSE: function() {
					a = !0;
				},
				timeoutInMs: (e || (e = r("ExecutionEnvironment"))).canUseDOM ? 6e4 : 0
			}, n)), o("WAGetStorageQplAnnotations").getStorageQplAnnotations().then(function(e) {
				r("QPLUserFlow").addAnnotations(u, e);
			}), y());
		}
		function c(e) {
			!i || a || (y(), r("QPLUserFlow").addPoint(u, e, n));
		}
		function d(e, t) {
			var n;
			!i || a || r("QPLUserFlow").addAnnotations(u, { bool: (n = {}, n[e] = t, n) });
		}
		function m(e, t) {
			var n;
			!i || a || r("QPLUserFlow").addAnnotations(u, { string: (n = {}, n[e] = t, n) });
		}
		function p(e, t) {
			var n;
			!i || a || r("QPLUserFlow").addAnnotations(u, { string_array: (n = {}, n[e] = t, n) });
		}
		function _(e, t) {
			var n;
			!i || a || r("QPLUserFlow").addAnnotations(u, { int: (n = {}, n[e] = t, n) });
		}
		function f(e) {
			y(), a = !0, r("QPLUserFlow").addAnnotations(u, { string: { failReason: e } }, n), r("QPLUserFlow").endFailure(u, "maw_init_fail", n), h = !1;
		}
		function g(e) {
			y(), a = !0, h = !1, r("QPLUserFlow").addAnnotations(u, { string: { dropReason: e } }, n), (s || (s = r("QuickPerformanceLogger"))).markerDrop(u);
		}
		var h = !1;
		function y() {
			h || (h = !0, r("QPLUserFlow").addAnnotations(u, { bool: {
				armadillo_init_sync_api_improvements: r("gkx")("24025"),
				isTlcPublicUser: o("MAWCurrentUser").isTlcPublicUser(),
				useSharedWorker: o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker()
			} }));
		}
		function C(e) {
			y(), a = !0, r("QPLUserFlow").addAnnotations(u, { string: { cancelReason: e } }, n), r("QPLUserFlow").endCancel(u, n), h = !1;
		}
		function b() {
			y(), a = !0, r("QPLUserFlow").endSuccess(u, n), h = !1;
		}
		async function v(e, t) {
			var n = e + "_start", r = e + "_end";
			c(n);
			var o = await t();
			return c(r), o;
		}
		return {
			addBoolAnnotation: d,
			addIntAnnotation: _,
			addStringAnnotation: m,
			addStringArrayAnnotation: p,
			cancel: C,
			drop: g,
			endSuccess: b,
			fail: f,
			logPoint: c,
			measurePerformance: v,
			start: l
		};
	}
	l.getMAWReinit = c;
}), 98);
