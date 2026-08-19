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
	"react-compiler-runtime",
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
		var a = o("react-compiler-runtime").c(17), i = t.audience, l = t.entryPoint, s = t.onBack, c = t.ref, p = t.sourceBroadcastMessageData, _ = m(null), g, y;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (g = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var a;
				(a = _.current) == null || a.dispose(), _.current = null;
				var i = yield (e || (e = n("Promise"))).all([o("WAWebBizBroadcastProNewBroadcastFlowLoadable").requireBundle(), o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(f)]), l = i[1], s = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
					return l;
				} }, r("WAWebBizBroadcastProNewBroadcastFlow.entrypoint"), {});
				return t.aborted ? (s.dispose(), null) : (_.current = s, {
					environment: l,
					entryPointReference: s
				});
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), y = [], a[0] = g, a[1] = y) : (g = a[0], y = a[1]);
		var C = r("useWAWebAsync")(g, y), b;
		if (a[2] === Symbol.for("react.memo_cache_sentinel") ? (b = function() {
			var e;
			(e = _.current) == null || e.dispose();
		}, a[2] = b) : b = a[2], r("useWAWebOnUnmount")(b), C.error != null) return null;
		if (C.loading || C.value == null) {
			var v;
			return a[3] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(h, {}), a[3] = v) : v = a[3], v;
		}
		var S = C.value, R = S.entryPointReference, L = S.environment, E;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx(h, {}), a[4] = E) : E = a[4];
		var k;
		a[5] !== i || a[6] !== l || a[7] !== s || a[8] !== c || a[9] !== p ? (k = {
			audience: i,
			entryPoint: l,
			onBack: s,
			ref: c,
			sourceBroadcastMessageData: p
		}, a[5] = i, a[6] = l, a[7] = s, a[8] = c, a[9] = p, a[10] = k) : k = a[10];
		var I;
		a[11] !== R || a[12] !== k ? (I = u.jsx(o("CometRelay").EntryPointContainer, {
			entryPointReference: R,
			props: k
		}), a[11] = R, a[12] = k, a[13] = I) : I = a[13];
		var T;
		return a[14] !== L || a[15] !== I ? (T = u.jsx(d, {
			fallback: E,
			children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
				environment: L,
				children: I
			})
		}), a[14] = L, a[15] = I, a[16] = T) : T = a[16], T;
	}
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			return o("WAWebRelayEnvironment").getEnvironment({
				accessToken: e.token,
				actorID: e.bp_id,
				environmentType: "facebook"
			});
		}), g.apply(this, arguments);
	}
	function h() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx("div", {
			"aria-hidden": !0,
			"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
			className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
		}), e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx("div", {
			"aria-hidden": !0,
			"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
			className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
		}), e[1] = n) : n = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WAWebDrawer.react"), {
			testid: "biz_broadcast_pro_home_loading_skeleton",
			children: u.jsx("div", {
				"aria-busy": !0,
				"aria-live": "polite",
				role: "status",
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: p.container,
					children: [
						t,
						n,
						u.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_home_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						})
					]
				})
			})
		}), e[2] = a) : a = e[2], a;
	}
	l.default = _;
}), 98);
