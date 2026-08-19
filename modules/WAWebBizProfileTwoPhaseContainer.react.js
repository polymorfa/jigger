__d("WAWebBizProfileTwoPhaseContainer.react", [
	"CometRelay",
	"WAWebBizProfileRoot.entrypoint",
	"WAWebBizRefreshedProfileDrawerLoadable",
	"WAWebFetchWithAdAccountToken",
	"WAWebLoadingDrawer.react",
	"WAWebRelayEnvironment",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = o("react-compiler-runtime").c(17), a = e.entryPoint, i = e.onClose, l = u(null), c, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(d), n = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
					return t;
				} }, r("WAWebBizProfileRoot.entrypoint"), {});
				return l.current = n, e.aborted && (l.current = null, n.dispose(), e.throwIfAborted()), {
					environment: t,
					entryPointReference: n
				};
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), m = [], t[0] = c, t[1] = m) : (c = t[0], m = t[1]);
		var p = r("useWAWebAsync")(c, m), _;
		if (t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = function() {
			var e;
			(e = l.current) == null || e.dispose(), l.current = null;
		}, t[2] = _) : _ = t[2], r("useWAWebOnUnmount")(_), p.error != null) {
			var f;
			return t[3] !== a || t[4] !== i ? (f = s.jsx(o("WAWebBizRefreshedProfileDrawerLoadable").WAWebBizRefreshedProfileDrawerLoadable, {
				entryPoint: a,
				onClose: i
			}), t[3] = a, t[4] = i, t[5] = f) : f = t[5], f;
		}
		if (p.loading) {
			var g;
			return t[6] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsx(r("WAWebLoadingDrawer.react"), {
				error: !1,
				testid: "biz_profile_two_phase_loading"
			}), t[6] = g) : g = t[6], g;
		}
		var h;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (h = s.jsx(r("WAWebLoadingDrawer.react"), {
			error: !1,
			testid: "biz_profile_two_phase_loading"
		}), t[7] = h) : h = t[7];
		var y;
		t[8] !== a || t[9] !== i ? (y = {
			entryPoint: a,
			onClose: i
		}, t[8] = a, t[9] = i, t[10] = y) : y = t[10];
		var C;
		t[11] !== p.value.entryPointReference || t[12] !== y ? (C = s.jsx(s.Suspense, {
			fallback: h,
			children: s.jsx(o("CometRelay").EntryPointContainer, {
				entryPointReference: p.value.entryPointReference,
				props: y
			})
		}), t[11] = p.value.entryPointReference, t[12] = y, t[13] = C) : C = t[13];
		var b;
		return t[14] !== p.value.environment || t[15] !== C ? (b = s.jsx(o("CometRelay").RelayEnvironmentProvider, {
			environment: p.value.environment,
			children: C
		}), t[14] = p.value.environment, t[15] = C, t[16] = b) : b = t[16], b;
	}
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			return o("WAWebRelayEnvironment").getEnvironment({
				accessToken: e.token,
				actorID: e.bp_id,
				environmentType: "facebook"
			});
		}), m.apply(this, arguments);
	}
	l.default = c;
}), 98);
