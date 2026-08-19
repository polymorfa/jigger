__d("WAWebBizBroadcastProEditAudienceScreenTwoPhaseContainer.react", [
	"fbt",
	"CometRelay",
	"WAWebBizBroadcastProEditAudienceScreen.entrypoint",
	"WAWebBizBroadcastProEditAudienceScreenLoadable",
	"WAWebDrawer.react",
	"WAWebFlex.react",
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
		var t = o("react-compiler-runtime").c(18), n = e.customAudience, a = e.entryPoint, i = e.onAudienceEditSuccess, l = e.onBack, s = o("CometRelay").useRelayEnvironment(), c = m(null), p, _;
		t[0] !== n.id || t[1] !== s ? (p = async function(t) {
			var e;
			(e = c.current) == null || e.dispose(), c.current = null, await o("WAWebBizBroadcastProEditAudienceScreenLoadable").requireBundle();
			var a = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
				return s;
			} }, r("WAWebBizBroadcastProEditAudienceScreen.entrypoint"), { caId: n.id });
			return t.aborted ? (a.dispose(), null) : (c.current = a, { entryPointReference: a });
		}, _ = [n.id, s], t[0] = n.id, t[1] = s, t[2] = p, t[3] = _) : (p = t[2], _ = t[3]);
		var g = r("useWAWebAsync")(p, _), h;
		if (t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = function() {
			var e;
			(e = c.current) == null || e.dispose();
		}, t[4] = h) : h = t[4], r("useWAWebOnUnmount")(h), g.error != null) return null;
		if (g.loading || g.value == null) {
			var y;
			return t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(f, {}), t[5] = y) : y = t[5], y;
		}
		var C = g.value.entryPointReference, b;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(f, {}), t[6] = b) : b = t[6];
		var v;
		t[7] !== n || t[8] !== a || t[9] !== i || t[10] !== l ? (v = {
			customAudience: n,
			entryPoint: a,
			onAudienceEditSuccess: i,
			onBack: l
		}, t[7] = n, t[8] = a, t[9] = i, t[10] = l, t[11] = v) : v = t[11];
		var S;
		t[12] !== C || t[13] !== v ? (S = u.jsx(o("CometRelay").EntryPointContainer, {
			entryPointReference: C,
			props: v
		}), t[12] = C, t[13] = v, t[14] = S) : S = t[14];
		var R;
		return t[15] !== s || t[16] !== S ? (R = u.jsx(d, {
			fallback: b,
			children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
				environment: s,
				children: S
			})
		}), t[15] = s, t[16] = S, t[17] = R) : R = t[17], R;
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
