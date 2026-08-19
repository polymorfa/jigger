__d("WAWebBizBroadcastProNewBroadcastFlowTwoPhaseContainer.react", [
	"CometRelay",
	"Promise",
	"WAWebBizBroadcastProNewBroadcastFlow.entrypoint",
	"WAWebBizBroadcastProNewBroadcastFlowLoadable",
	"WAWebDrawer.react",
	"WAWebFetchWithAdAccountToken",
	"WAWebFlex.react",
	"WAWebRelayEnvironment",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebAsync",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.Suspense, m = c.useRef, p = { container: {
		height: "x5yr21d",
		overflowY: "x1odjw0f",
		paddingTop: "x1p57kb1",
		paddingInlineEnd: "xvtqlqk",
		paddingBottom: "xvpt6g3",
		paddingInlineStart: "xdx6fka",
		width: "xh8yej3",
		$$css: !0
	} };
	function _(t) {
		var a = t.audience, i = t.entryPoint, l = t.onBack, s = t.ref, c = t.sourceBroadcastMessageData, p = m(null), _ = r("useWAWebAsync")((function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var a;
				(a = p.current) == null || a.dispose(), p.current = null;
				var i = yield (e || (e = n("Promise"))).all([o("WAWebBizBroadcastProNewBroadcastFlowLoadable").requireBundle(), o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken((function() {
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
				})())]), l = i[0], s = i[1], u = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
					return s;
				} }, r("WAWebBizBroadcastProNewBroadcastFlow.entrypoint"), {});
				return t.aborted ? (u.dispose(), null) : (p.current = u, {
					environment: s,
					entryPointReference: u
				});
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), []);
		if (r("useWAWebOnUnmount")(function() {
			var e;
			(e = p.current) == null || e.dispose();
		}), _.error != null) return null;
		if (_.loading || _.value == null) return u.jsx(f, {});
		var g = _.value, h = g.entryPointReference, y = g.environment;
		return u.jsx(d, {
			fallback: u.jsx(f, {}),
			children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
				environment: y,
				children: u.jsx(o("CometRelay").EntryPointContainer, {
					entryPointReference: h,
					props: {
						audience: a,
						entryPoint: i,
						onBack: l,
						ref: s,
						sourceBroadcastMessageData: c
					}
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		return u.jsx(r("WAWebDrawer.react"), {
			testid: "biz_broadcast_pro_home_loading_skeleton",
			children: u.jsx("div", {
				"aria-busy": !0,
				"aria-live": "polite",
				role: "status",
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: p.container,
					children: [
						u.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						}),
						u.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						}),
						u.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						})
					]
				})
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 98);
