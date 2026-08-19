__d("MAWReinit", [
	"ExecutionEnvironment",
	"MAWCurrentUser",
	"QPLUserFlow",
	"QuickPerformanceLogger",
	"WAGetStorageQplAnnotations",
	"asyncToGeneratorRuntime",
	"gkx",
	"qpl",
	"shouldUseMAWSharedWorker"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("qpl")._(25310984, "169");
	function c(t) {
		var a = t != null ? { instanceKey: t } : void 0, i = !1, l = !1;
		function c() {
			l || (l = !0, r("QPLUserFlow").start(u, babelHelpers.extends({
				cancelOnUnload: !0,
				onFlowTimeout__doNOTUSE: function() {
					i = !0;
				},
				timeoutInMs: (e || (e = r("ExecutionEnvironment"))).canUseDOM ? 6e4 : 0
			}, a)), o("WAGetStorageQplAnnotations").getStorageQplAnnotations().then(function(e) {
				r("QPLUserFlow").addAnnotations(u, e);
			}), C());
		}
		function d(e) {
			!l || i || (C(), r("QPLUserFlow").addPoint(u, e, a));
		}
		function m(e, t) {
			var n;
			!l || i || r("QPLUserFlow").addAnnotations(u, { bool: (n = {}, n[e] = t, n) });
		}
		function p(e, t) {
			var n;
			!l || i || r("QPLUserFlow").addAnnotations(u, { string: (n = {}, n[e] = t, n) });
		}
		function _(e, t) {
			var n;
			!l || i || r("QPLUserFlow").addAnnotations(u, { string_array: (n = {}, n[e] = t, n) });
		}
		function f(e, t) {
			var n;
			!l || i || r("QPLUserFlow").addAnnotations(u, { int: (n = {}, n[e] = t, n) });
		}
		function g(e) {
			C(), i = !0, r("QPLUserFlow").addAnnotations(u, { string: { failReason: e } }, a), r("QPLUserFlow").endFailure(u, "maw_init_fail", a), y = !1;
		}
		function h(e) {
			C(), i = !0, y = !1, r("QPLUserFlow").addAnnotations(u, { string: { dropReason: e } }, a), (s || (s = r("QuickPerformanceLogger"))).markerDrop(u);
		}
		var y = !1;
		function C() {
			y || (y = !0, r("QPLUserFlow").addAnnotations(u, { bool: {
				armadillo_init_sync_api_improvements: r("gkx")("24025"),
				isTlcPublicUser: o("MAWCurrentUser").isTlcPublicUser(),
				useSharedWorker: o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker()
			} }));
		}
		function b(e) {
			C(), i = !0, r("QPLUserFlow").addAnnotations(u, { string: { cancelReason: e } }, a), r("QPLUserFlow").endCancel(u, a), y = !1;
		}
		function v() {
			C(), i = !0, r("QPLUserFlow").endSuccess(u, a), y = !1;
		}
		function S(e, t) {
			return R.apply(this, arguments);
		}
		function R() {
			return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = e + "_start", r = e + "_end";
				d(n);
				var o = yield t();
				return d(r), o;
			}), R.apply(this, arguments);
		}
		return {
			addBoolAnnotation: m,
			addIntAnnotation: f,
			addStringAnnotation: p,
			addStringArrayAnnotation: _,
			cancel: b,
			drop: h,
			endSuccess: v,
			fail: g,
			logPoint: d,
			measurePerformance: S,
			start: c
		};
	}
	l.getMAWReinit = c;
}), 98);
