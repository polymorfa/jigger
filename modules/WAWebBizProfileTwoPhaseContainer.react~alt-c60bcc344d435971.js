__d("WAWebBizProfileTwoPhaseContainer.react", [
	"CometRelay",
	"WAWebBizProfileRoot.entrypoint",
	"WAWebBizRefreshedProfileDrawerLoadable",
	"WAWebFetchWithAdAccountToken",
	"WAWebLoadingDrawer.react",
	"WAWebRelayEnvironment",
	"react",
	"useWAWebAsync",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = e.entryPoint, n = e.onClose, a = u(null), i = r("useWAWebAsync")(async function(e) {
			var t = await o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(async function(e) {
				return o("WAWebRelayEnvironment").getEnvironment({
					accessToken: e.token,
					actorID: e.bp_id,
					environmentType: "facebook"
				});
			}), n = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
				return t;
			} }, r("WAWebBizProfileRoot.entrypoint"), {});
			return a.current = n, e.aborted && (a.current = null, n.dispose(), e.throwIfAborted()), {
				environment: t,
				entryPointReference: n
			};
		}, []);
		return r("useWAWebOnUnmount")(function() {
			var e;
			(e = a.current) == null || e.dispose(), a.current = null;
		}), i.error != null ? s.jsx(o("WAWebBizRefreshedProfileDrawerLoadable").WAWebBizRefreshedProfileDrawerLoadable, {
			entryPoint: t,
			onClose: n
		}) : i.loading ? s.jsx(r("WAWebLoadingDrawer.react"), {
			error: !1,
			testid: "biz_profile_two_phase_loading"
		}) : s.jsx(o("CometRelay").RelayEnvironmentProvider, {
			environment: i.value.environment,
			children: s.jsx(s.Suspense, {
				fallback: s.jsx(r("WAWebLoadingDrawer.react"), {
					error: !1,
					testid: "biz_profile_two_phase_loading"
				}),
				children: s.jsx(o("CometRelay").EntryPointContainer, {
					entryPointReference: i.value.entryPointReference,
					props: {
						entryPoint: t,
						onClose: n
					}
				})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
