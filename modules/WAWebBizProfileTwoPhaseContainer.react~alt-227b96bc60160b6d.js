__d("WAWebBizProfileTwoPhaseContainer.react", [
	"CometRelay",
	"WAWebBizProfileRoot.entrypoint",
	"WAWebBizRefreshedProfileDrawerLoadable",
	"WAWebFetchWithAdAccountToken",
	"WAWebLoadingDrawer.react",
	"WAWebRelayEnvironment",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = o("react-compiler-runtime").c(17), n = e.entryPoint, a = e.onClose, i = u(null), l, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = async function(t) {
			var e = await o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(d), n = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
				return e;
			} }, r("WAWebBizProfileRoot.entrypoint"), {});
			return i.current = n, t.aborted && (i.current = null, n.dispose(), t.throwIfAborted()), {
				environment: e,
				entryPointReference: n
			};
		}, c = [], t[0] = l, t[1] = c) : (l = t[0], c = t[1]);
		var m = r("useWAWebAsync")(l, c), p;
		if (t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = function() {
			var e;
			(e = i.current) == null || e.dispose(), i.current = null;
		}, t[2] = p) : p = t[2], r("useWAWebOnUnmount")(p), m.error != null) {
			var _;
			return t[3] !== n || t[4] !== a ? (_ = s.jsx(o("WAWebBizRefreshedProfileDrawerLoadable").WAWebBizRefreshedProfileDrawerLoadable, {
				entryPoint: n,
				onClose: a
			}), t[3] = n, t[4] = a, t[5] = _) : _ = t[5], _;
		}
		if (m.loading) {
			var f;
			return t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsx(r("WAWebLoadingDrawer.react"), {
				error: !1,
				testid: "biz_profile_two_phase_loading"
			}), t[6] = f) : f = t[6], f;
		}
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsx(r("WAWebLoadingDrawer.react"), {
			error: !1,
			testid: "biz_profile_two_phase_loading"
		}), t[7] = g) : g = t[7];
		var h;
		t[8] !== n || t[9] !== a ? (h = {
			entryPoint: n,
			onClose: a
		}, t[8] = n, t[9] = a, t[10] = h) : h = t[10];
		var y;
		t[11] !== m.value.entryPointReference || t[12] !== h ? (y = s.jsx(s.Suspense, {
			fallback: g,
			children: s.jsx(o("CometRelay").EntryPointContainer, {
				entryPointReference: m.value.entryPointReference,
				props: h
			})
		}), t[11] = m.value.entryPointReference, t[12] = h, t[13] = y) : y = t[13];
		var C;
		return t[14] !== m.value.environment || t[15] !== y ? (C = s.jsx(o("CometRelay").RelayEnvironmentProvider, {
			environment: m.value.environment,
			children: y
		}), t[14] = m.value.environment, t[15] = y, t[16] = C) : C = t[16], C;
	}
	async function d(e) {
		return o("WAWebRelayEnvironment").getEnvironment({
			accessToken: e.token,
			actorID: e.bp_id,
			environmentType: "facebook"
		});
	}
	l.default = c;
}), 98);
