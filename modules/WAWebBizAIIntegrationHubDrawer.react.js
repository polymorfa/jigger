__d("WAWebBizAIIntegrationHubDrawer.react", [
	"fbt",
	"WAWebBizAIIntegrationAppDetailDrawer.react",
	"WAWebBizAIIntegrationHubData.react",
	"WAWebBizAIIntegrationHubHelpers",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAIQueryBoundary.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebSpinner.react",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.Suspense, m = c.useCallback, p = c.useRef, _ = c.useState, f = u.jsx("div", {
		"data-testid": "biz-ai-integration-hub-loading",
		className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
		children: u.jsx(o("WAWebSpinner.react").Spinner, {
			color: "default",
			size: 24,
			stroke: 3
		})
	});
	function g(e) {
		var t = o("react-compiler-runtime").c(24), n = e.onBack, a = e.onRetry, i = e.queryRef, l = e.queryVersion, s = e.ref, c = l === void 0 ? 0 : l, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, t[0] = m) : m = t[0];
		var g = o("useWAWebFlow").useFlow(o("WAWebBizAIIntegrationHubHelpers").IntegrationHubStep.Main, m), y = g[0], C = g[1], b = C.step, v = _(null), S = v[0], R = v[1], L = p(null), E;
		t[1] !== c ? (E = function() {
			L.current !== c && (L.current = c, o("WAWebBizAILargeScreensLogEvents").logViewPartnersHub(0, !1));
		}, t[1] = c, t[2] = E) : E = t[2];
		var k = E, I;
		t[3] !== C ? (I = function() {
			return C.pop();
		}, t[3] = C, t[4] = I) : I = t[4];
		var T = I, D;
		t[5] !== C ? (D = function(t) {
			R(t), C.push(o("WAWebBizAIIntegrationHubHelpers").IntegrationHubStep.AppDetail);
		}, t[5] = C, t[6] = D) : D = t[6];
		var x = D;
		if (b == null) return null;
		var $;
		t[7] !== k || t[8] !== x || t[9] !== n || t[10] !== a || t[11] !== T || t[12] !== i || t[13] !== c || t[14] !== S || t[15] !== b ? ($ = b === o("WAWebBizAIIntegrationHubHelpers").IntegrationHubStep.Main ? u.jsx(r("WAWebBizAIQueryBoundary.react"), {
			boundaryName: "biz-ai-integration-hub",
			onError: k,
			onRetry: a,
			queryVersion: c,
			renderErrorChrome: function(t) {
				return u.jsx(h, {
					onBack: n,
					children: t
				});
			},
			testid: "biz-ai-integration-hub-error",
			children: u.jsx(d, {
				fallback: u.jsx(h, {
					onBack: n,
					children: f
				}),
				children: i != null ? u.jsx(r("WAWebBizAIIntegrationHubData.react"), {
					loggedViewVersionRef: L,
					onBack: n,
					onSelectPlugin: x,
					queryRef: i,
					queryVersion: c
				}) : u.jsx(h, {
					onBack: n,
					children: f
				})
			})
		}) : b === o("WAWebBizAIIntegrationHubHelpers").IntegrationHubStep.AppDetail ? S != null ? u.jsx(r("WAWebBizAIIntegrationAppDetailDrawer.react"), {
			onBack: T,
			plugin: S
		}) : null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + b);
		})(), t[7] = k, t[8] = x, t[9] = n, t[10] = a, t[11] = T, t[12] = i, t[13] = c, t[14] = S, t[15] = b, t[16] = $) : $ = t[16];
		var P = $, N;
		t[17] !== y || t[18] !== P || t[19] !== C ? (N = u.jsx(y, {
			flow: C,
			children: P
		}), t[17] = y, t[18] = P, t[19] = C, t[20] = N) : N = t[20];
		var M;
		return t[21] !== s || t[22] !== N ? (M = u.jsx(r("WAWebDrawer.react"), {
			ref: s,
			testid: "biz-ai-integration-hub-drawer",
			children: N
		}), t[21] = s, t[22] = N, t[23] = M) : M = t[23], M;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(9), n = e.children, a = e.onBack, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62" }, t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var c;
		t[2] !== a ? (c = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: l,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: a
		}), t[2] = a, t[3] = c) : c = t[3];
		var d;
		t[4] !== n ? (d = u.jsx(r("WAWebDrawerBody.react"), { children: n }), t[4] = n, t[5] = d) : d = t[5];
		var m;
		return t[6] !== c || t[7] !== d ? (m = u.jsxs("div", babelHelpers.extends({}, i, { children: [c, d] })), t[6] = c, t[7] = d, t[8] = m) : m = t[8], m;
	}
	l.default = g;
}), 226);
