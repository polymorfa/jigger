__d("WAWebBizAiToolsTile.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAIRelayBoundary.react",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizAiToolsTileEligibilityQuery.graphql",
	"WAWebBizToolsFlowSteps",
	"WAWebChatAssignmentGatingUtils",
	"WAWebDrawerButton.react",
	"WAWebNux",
	"WDSIconWdsIcWeave.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.Suspense, p = d.useEffect, _ = { icon: {
		color: "xhd7mum",
		$$css: !0
	} }, f = e !== void 0 ? e : e = n("WAWebBizAiToolsTileEligibilityQuery.graphql");
	function g(e) {
		var t = o("react-compiler-runtime").c(18), n = e.isOnboarded, a = e.onSelect, i = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_AI_TOOLS_NUX), l = i[0], u = i[2], d, m;
		t[0] !== n ? (d = function() {
			o("WAWebBizAILargeScreensLogEvents").logViewBizAiEntryTile(n);
		}, m = [n], t[0] = n, t[1] = d, t[2] = m) : (d = t[1], m = t[2]), p(d, m);
		var f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = c.jsx(r("WDSIconWdsIcWeave.react"), { iconXstyle: _.icon }), t[3] = f) : f = t[3];
		var g;
		t[4] !== l ? (g = l ? c.jsx("div", {
			"data-testid": "biz-tools-biz-ai-nux-green-dot",
			className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt xqf2s3x x1xc55vz"
		}) : null, t[4] = l, t[5] = g) : g = t[5];
		var h;
		t[6] !== n ? (h = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[6] = n, t[7] = h) : h = t[7];
		var y;
		t[8] !== u || t[9] !== n || t[10] !== a || t[11] !== l ? (y = function() {
			l && u(), o("WAWebBizAILargeScreensLogEvents").logClickBizAiEntryTile(n), a(o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessAI);
		}, t[8] = u, t[9] = n, t[10] = a, t[11] = l, t[12] = y) : y = t[12];
		var C;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[13] = C) : C = t[13];
		var b;
		return t[14] !== g || t[15] !== h || t[16] !== y ? (b = c.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "biz-tools-business-ai",
			theme: "biz-tools",
			divider: !1,
			icon: f,
			active: !1,
			detail: g,
			secondaryChildren: h,
			onClick: y,
			children: C
		}), t[14] = g, t[15] = h, t[16] = y, t[17] = b) : b = t[17], b;
	}
	function h(e) {
		var t, n = o("react-compiler-runtime").c(2), r = e.onSelect, a = o("CometRelay").useLazyLoadQuery(f, {}), i = ((t = a.xfb_meta_ai_biz_agent_wa_onboarding_eligibility) == null ? void 0 : t.eligible) === !0;
		if (!i) return null;
		var l;
		return n[0] !== r ? (l = c.jsx(g, {
			onSelect: r,
			isOnboarded: !1
		}), n[0] = r, n[1] = l) : l = n[1], l;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onSelect;
		if (!o("WAWebChatAssignmentGatingUtils").isBizAIToolsSettingsEnabled()) return null;
		if (o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()) {
			var a;
			return t[0] !== n ? (a = c.jsx(r("WAWebBizAIRelayBoundary.react"), { children: c.jsx(g, {
				onSelect: n,
				isOnboarded: !0
			}) }), t[0] = n, t[1] = a) : a = t[1], a;
		}
		if (!o("WAWebChatAssignmentGatingUtils").isBizAiWebOnboardingHandoffEnabled()) return null;
		var i;
		return t[2] !== n ? (i = c.jsx(r("WAWebBizAIRelayBoundary.react"), { children: c.jsx(m, {
			fallback: null,
			children: c.jsx(h, { onSelect: n })
		}) }), t[2] = n, t[3] = i) : i = t[3], i;
	}
	l.default = y;
}), 226);
