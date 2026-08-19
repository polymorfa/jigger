__d("WAWebBizBroadcastProEditAudienceScreenTwoPhaseContainer.react", [
	"fbt",
	"CometRelay",
	"WAWebBizBroadcastProEditAudienceScreen.entrypoint",
	"WAWebBizBroadcastProEditAudienceScreenLoadable",
	"WAWebDrawer.react",
	"WAWebFlex.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.Suspense, m = c.useRef, p = { container: {
		height: "x5yr21d",
		overflowY: "x1odjw0f",
		paddingTop: "x1p57kb1",
		paddingInlineEnd: "xvtqlqk",
		paddingBottom: "xvpt6g3",
		paddingInlineStart: "xdx6fka",
		width: "xh8yej3",
		$$css: !0
	} };
	function _(e) {
		var t = o("react-compiler-runtime").c(18), a = e.customAudience, i = e.entryPoint, l = e.onAudienceEditSuccess, s = e.onBack, c = o("CometRelay").useRelayEnvironment(), p = m(null), _, g;
		t[0] !== a.id || t[1] !== c ? (_ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t;
				(t = p.current) == null || t.dispose(), p.current = null, yield o("WAWebBizBroadcastProEditAudienceScreenLoadable").requireBundle();
				var n = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
					return c;
				} }, r("WAWebBizBroadcastProEditAudienceScreen.entrypoint"), { caId: a.id });
				return e.aborted ? (n.dispose(), null) : (p.current = n, { entryPointReference: n });
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), g = [a.id, c], t[0] = a.id, t[1] = c, t[2] = _, t[3] = g) : (_ = t[2], g = t[3]);
		var h = r("useWAWebAsync")(_, g), y;
		if (t[4] === Symbol.for("react.memo_cache_sentinel") ? (y = function() {
			var e;
			(e = p.current) == null || e.dispose();
		}, t[4] = y) : y = t[4], r("useWAWebOnUnmount")(y), h.error != null) return null;
		if (h.loading || h.value == null) {
			var C;
			return t[5] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(f, {}), t[5] = C) : C = t[5], C;
		}
		var b = h.value.entryPointReference, v;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(f, {}), t[6] = v) : v = t[6];
		var S;
		t[7] !== a || t[8] !== i || t[9] !== l || t[10] !== s ? (S = {
			customAudience: a,
			entryPoint: i,
			onAudienceEditSuccess: l,
			onBack: s
		}, t[7] = a, t[8] = i, t[9] = l, t[10] = s, t[11] = S) : S = t[11];
		var R;
		t[12] !== b || t[13] !== S ? (R = u.jsx(o("CometRelay").EntryPointContainer, {
			entryPointReference: b,
			props: S
		}), t[12] = b, t[13] = S, t[14] = R) : R = t[14];
		var L;
		return t[15] !== c || t[16] !== R ? (L = u.jsx(d, {
			fallback: v,
			children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
				environment: c,
				children: R
			})
		}), t[15] = c, t[16] = R, t[17] = L) : L = t[17], L;
	}
	function f() {
		var e = o("react-compiler-runtime").c(4), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx("span", {
			className: "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx("div", {
			"aria-hidden": !0,
			"data-testid": "biz_broadcast_pro_edit_audience_loading_skeleton_row",
			className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
		}), e[1] = n) : n = e[1];
		var a;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx("div", {
			"aria-hidden": !0,
			"data-testid": "biz_broadcast_pro_edit_audience_loading_skeleton_row",
			className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
		}), e[2] = a) : a = e[2];
		var i;
		return e[3] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WAWebDrawer.react"), {
			testid: "biz_broadcast_pro_edit_audience_loading_skeleton",
			children: u.jsxs("div", {
				"aria-busy": !0,
				"aria-live": "polite",
				role: "status",
				children: [t, u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: p.container,
					children: [
						n,
						a,
						u.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_edit_audience_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						})
					]
				})]
			})
		}), e[3] = i) : i = e[3], i;
	}
	l.default = _;
}), 226);
