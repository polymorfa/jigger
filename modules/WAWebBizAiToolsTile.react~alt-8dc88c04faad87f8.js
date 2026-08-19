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
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.Suspense, p = d.useEffect, _ = { icon: {
		color: "xhd7mum",
		$$css: !0
	} }, f = e !== void 0 ? e : e = n("WAWebBizAiToolsTileEligibilityQuery.graphql");
	function g(e) {
		var t = e.isOnboarded, n = e.onSelect, a = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_AI_TOOLS_NUX), i = a[0], l = a[2];
		return p(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewBizAiEntryTile(t);
		}, [t]), c.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "biz-tools-business-ai",
			theme: "biz-tools",
			divider: !1,
			icon: c.jsx(r("WDSIconWdsIcWeave.react"), { iconXstyle: _.icon }),
			active: !1,
			detail: i ? c.jsx("div", {
				"data-testid": "biz-tools-biz-ai-nux-green-dot",
				className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt xqf2s3x x1xc55vz"
			}) : null,
			secondaryChildren: t ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				i && l(), o("WAWebBizAILargeScreensLogEvents").logClickBizAiEntryTile(t), n(o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessAI);
			},
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t, n = e.onSelect, r = o("CometRelay").useLazyLoadQuery(f, {}), a = ((t = r.xfb_meta_ai_biz_agent_wa_onboarding_eligibility) == null ? void 0 : t.eligible) === !0;
		return a ? c.jsx(g, {
			onSelect: n,
			isOnboarded: !1
		}) : null;
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.onSelect;
		return o("WAWebChatAssignmentGatingUtils").isBizAIToolsSettingsEnabled() ? o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() ? c.jsx(r("WAWebBizAIRelayBoundary.react"), { children: c.jsx(g, {
			onSelect: t,
			isOnboarded: !0
		}) }) : o("WAWebChatAssignmentGatingUtils").isBizAiWebOnboardingHandoffEnabled() ? c.jsx(r("WAWebBizAIRelayBoundary.react"), { children: c.jsx(m, {
			fallback: null,
			children: c.jsx(h, { onSelect: t })
		}) }) : null : null;
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
