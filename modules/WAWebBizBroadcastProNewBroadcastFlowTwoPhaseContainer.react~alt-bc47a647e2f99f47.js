__d("WAWebBizBroadcastProNewBroadcastFlowTwoPhaseContainer.react", [
	"CometRelay",
	"WAWebBizBroadcastProNewBroadcastFlow.entrypoint",
	"WAWebBizBroadcastProNewBroadcastFlowLoadable",
	"WAWebDrawer.react",
	"WAWebFetchWithAdAccountToken",
	"WAWebFlex.react",
	"WAWebRelayEnvironment",
	"react",
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(17), n = e.audience, a = e.entryPoint, i = e.onBack, l = e.ref, u = e.sourceBroadcastMessageData, m = d(null), p, g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = async function(t) {
			var e;
			(e = m.current) == null || e.dispose(), m.current = null;
			var n = await Promise.all([o("WAWebBizBroadcastProNewBroadcastFlowLoadable").requireBundle(), o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(_)]), a = n[1], i = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
				return a;
			} }, r("WAWebBizBroadcastProNewBroadcastFlow.entrypoint"), {});
			return t.aborted ? (i.dispose(), null) : (m.current = i, {
				environment: a,
				entryPointReference: i
			});
		}, g = [], t[0] = p, t[1] = g) : (p = t[0], g = t[1]);
		var h = r("useWAWebAsync")(p, g), y;
		if (t[2] === Symbol.for("react.memo_cache_sentinel") ? (y = function() {
			var e;
			(e = m.current) == null || e.dispose();
		}, t[2] = y) : y = t[2], r("useWAWebOnUnmount")(y), h.error != null) return null;
		if (h.loading || h.value == null) {
			var C;
			return t[3] === Symbol.for("react.memo_cache_sentinel") ? (C = s.jsx(f, {}), t[3] = C) : C = t[3], C;
		}
		var b = h.value, v = b.entryPointReference, S = b.environment, R;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (R = s.jsx(f, {}), t[4] = R) : R = t[4];
		var L;
		t[5] !== n || t[6] !== a || t[7] !== i || t[8] !== l || t[9] !== u ? (L = {
			audience: n,
			entryPoint: a,
			onBack: i,
			ref: l,
			sourceBroadcastMessageData: u
		}, t[5] = n, t[6] = a, t[7] = i, t[8] = l, t[9] = u, t[10] = L) : L = t[10];
		var E;
		t[11] !== v || t[12] !== L ? (E = s.jsx(o("CometRelay").EntryPointContainer, {
			entryPointReference: v,
			props: L
		}), t[11] = v, t[12] = L, t[13] = E) : E = t[13];
		var k;
		return t[14] !== S || t[15] !== E ? (k = s.jsx(c, {
			fallback: R,
			children: s.jsx(o("CometRelay").RelayEnvironmentProvider, {
				environment: S,
				children: E
			})
		}), t[14] = S, t[15] = E, t[16] = k) : k = t[16], k;
	}
	async function _(e) {
		return o("WAWebRelayEnvironment").getEnvironment({
			accessToken: e.token,
			actorID: e.bp_id,
			environmentType: "facebook"
		});
	}
	function f() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx("div", {
			"aria-hidden": !0,
			"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
			className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
		}), e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsx("div", {
			"aria-hidden": !0,
			"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
			className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
		}), e[1] = n) : n = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(r("WAWebDrawer.react"), {
			testid: "biz_broadcast_pro_home_loading_skeleton",
			children: s.jsx("div", {
				"aria-busy": !0,
				"aria-live": "polite",
				role: "status",
				children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: m.container,
					children: [
						t,
						n,
						s.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						})
					]
				})
			})
		}), e[2] = a) : a = e[2], a;
	}
	l.default = p;
}), 98);
