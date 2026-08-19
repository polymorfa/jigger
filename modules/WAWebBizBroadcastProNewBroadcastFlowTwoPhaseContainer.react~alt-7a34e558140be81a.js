__d("WAWebBizBroadcastProNewBroadcastFlowTwoPhaseContainer.react", [
	"CometRelay",
	"WAWebBizBroadcastProNewBroadcastFlow.entrypoint",
	"WAWebBizBroadcastProNewBroadcastFlowLoadable",
	"WAWebDrawer.react",
	"WAWebFetchWithAdAccountToken",
	"WAWebFlex.react",
	"WAWebRelayEnvironment",
	"react",
	"useWAWebAsync",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.Suspense, d = u.useRef, m = { container: {
		height: "x5yr21d",
		overflowY: "x1odjw0f",
		paddingTop: "x1p57kb1",
		paddingInlineEnd: "xvtqlqk",
		paddingBottom: "xvpt6g3",
		paddingInlineStart: "xdx6fka",
		width: "xh8yej3",
		$$css: !0
	} };
	function p(e) {
		var t = e.audience, n = e.entryPoint, a = e.onBack, i = e.ref, l = e.sourceBroadcastMessageData, u = d(null), m = r("useWAWebAsync")(async function(e) {
			var t;
			(t = u.current) == null || t.dispose(), u.current = null;
			var n = await Promise.all([o("WAWebBizBroadcastProNewBroadcastFlowLoadable").requireBundle(), o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(async function(e) {
				return o("WAWebRelayEnvironment").getEnvironment({
					accessToken: e.token,
					actorID: e.bp_id,
					environmentType: "facebook"
				});
			})]), a = n[0], i = n[1], l = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
				return i;
			} }, r("WAWebBizBroadcastProNewBroadcastFlow.entrypoint"), {});
			return e.aborted ? (l.dispose(), null) : (u.current = l, {
				environment: i,
				entryPointReference: l
			});
		}, []);
		if (r("useWAWebOnUnmount")(function() {
			var e;
			(e = u.current) == null || e.dispose();
		}), m.error != null) return null;
		if (m.loading || m.value == null) return s.jsx(_, {});
		var p = m.value, f = p.entryPointReference, g = p.environment;
		return s.jsx(c, {
			fallback: s.jsx(_, {}),
			children: s.jsx(o("CometRelay").RelayEnvironmentProvider, {
				environment: g,
				children: s.jsx(o("CometRelay").EntryPointContainer, {
					entryPointReference: f,
					props: {
						audience: t,
						entryPoint: n,
						onBack: a,
						ref: i,
						sourceBroadcastMessageData: l
					}
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return s.jsx(r("WAWebDrawer.react"), {
			testid: "biz_broadcast_pro_home_loading_skeleton",
			children: s.jsx("div", {
				"aria-busy": !0,
				"aria-live": "polite",
				role: "status",
				children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: m.container,
					children: [
						s.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						}),
						s.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						}),
						s.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						})
					]
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 98);
