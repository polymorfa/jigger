__d("WAWebBizBroadcastProEditAudienceScreenTwoPhaseContainer.react", [
	"fbt",
	"CometRelay",
	"WAWebBizBroadcastProEditAudienceScreen.entrypoint",
	"WAWebBizBroadcastProEditAudienceScreenLoadable",
	"WAWebDrawer.react",
	"WAWebFlex.react",
	"react",
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
		var t = e.customAudience, n = e.entryPoint, a = e.onAudienceEditSuccess, i = e.onBack, l = o("CometRelay").useRelayEnvironment(), s = m(null), c = r("useWAWebAsync")(async function(e) {
			var n;
			(n = s.current) == null || n.dispose(), s.current = null, await o("WAWebBizBroadcastProEditAudienceScreenLoadable").requireBundle();
			var a = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
				return l;
			} }, r("WAWebBizBroadcastProEditAudienceScreen.entrypoint"), { caId: t.id });
			return e.aborted ? (a.dispose(), null) : (s.current = a, { entryPointReference: a });
		}, [t.id, l]);
		if (r("useWAWebOnUnmount")(function() {
			var e;
			(e = s.current) == null || e.dispose();
		}), c.error != null) return null;
		if (c.loading || c.value == null) return u.jsx(f, {});
		var p = c.value.entryPointReference;
		return u.jsx(d, {
			fallback: u.jsx(f, {}),
			children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
				environment: l,
				children: u.jsx(o("CometRelay").EntryPointContainer, {
					entryPointReference: p,
					props: {
						customAudience: t,
						entryPoint: n,
						onAudienceEditSuccess: a,
						onBack: i
					}
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		return u.jsx(r("WAWebDrawer.react"), {
			testid: "biz_broadcast_pro_edit_audience_loading_skeleton",
			children: u.jsxs("div", {
				"aria-busy": !0,
				"aria-live": "polite",
				role: "status",
				children: [u.jsx("span", {
					className: "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: p.container,
					children: [
						u.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_edit_audience_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						}),
						u.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_edit_audience_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						}),
						u.jsx("div", {
							"aria-hidden": !0,
							"data-testid": "biz_broadcast_pro_edit_audience_loading_skeleton_row",
							className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1qx5ct2 xefnzgg xycev2y"
						})
					]
				})]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 226);
