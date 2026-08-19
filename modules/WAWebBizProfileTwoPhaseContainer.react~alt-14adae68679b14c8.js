__d("WAWebBizProfileTwoPhaseContainer.react", [
	"CometRelay",
	"WAWebBizProfileRoot.entrypoint",
	"WAWebBizRefreshedProfileDrawerLoadable",
	"WAWebFetchWithAdAccountToken",
	"WAWebLoadingDrawer.react",
	"WAWebRelayEnvironment",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebAsync",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = e.entryPoint, a = e.onClose, i = u(null), l = r("useWAWebAsync")((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						return o("WAWebRelayEnvironment").getEnvironment({
							accessToken: e.token,
							actorID: e.bp_id,
							environmentType: "facebook"
						});
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})()), a = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
					return t;
				} }, r("WAWebBizProfileRoot.entrypoint"), {});
				return i.current = a, e.aborted && (i.current = null, a.dispose(), e.throwIfAborted()), {
					environment: t,
					entryPointReference: a
				};
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), []);
		return r("useWAWebOnUnmount")(function() {
			var e;
			(e = i.current) == null || e.dispose(), i.current = null;
		}), l.error != null ? s.jsx(o("WAWebBizRefreshedProfileDrawerLoadable").WAWebBizRefreshedProfileDrawerLoadable, {
			entryPoint: t,
			onClose: a
		}) : l.loading ? s.jsx(r("WAWebLoadingDrawer.react"), {
			error: !1,
			testid: "biz_profile_two_phase_loading"
		}) : s.jsx(o("CometRelay").RelayEnvironmentProvider, {
			environment: l.value.environment,
			children: s.jsx(s.Suspense, {
				fallback: s.jsx(r("WAWebLoadingDrawer.react"), {
					error: !1,
					testid: "biz_profile_two_phase_loading"
				}),
				children: s.jsx(o("CometRelay").EntryPointContainer, {
					entryPointReference: l.value.entryPointReference,
					props: {
						entryPoint: t,
						onClose: a
					}
				})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
