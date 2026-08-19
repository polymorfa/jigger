__d("WAMFlowsCTWAFlowPreview.react", [
	"AdsAdvantageAudienceUtils",
	"RelayHooks",
	"WAFlowsInitEnvironmentTypes",
	"WAFlowsPreviewDeviceScreen.react",
	"WAFlowsPreviewProvider.react",
	"WAFlowsWebPreview.react",
	"WAMFlowsCTWAFlowPreviewQuery.graphql",
	"WAMFlowsFlowProvider.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("WAMFlowsCTWAFlowPreviewQuery.graphql");
	function d(e) {
		var t, n, a = e.completionMessageCTAType, i = e.completionMessageText, l = e.ctwaImageCreative, s = e.ctwaWelcomeMessage, d = e.defaultCtaToGetStarted, m = e.fetchKey, p = e.flowId, _ = e.isCompletionMessageEnabled, f = _ === void 0 ? !1 : _, g = e.isRenderedForFirstDialogStep, h = g === void 0 ? !1 : g, y = e.objective, C = e.pageId, b = e.pageName, v = e.profileImageSrc, S = e.wabaId, R = o("RelayHooks").useLazyLoadQuery(c, {
			adObjective: o("AdsAdvantageAudienceUtils").convertObjectiveForGraphQL(y),
			businessName: b,
			defaultCtaToGetStarted: d != null ? d : !1,
			flowId: p != null ? p : "",
			pageId: C != null ? C : null,
			skipRequest: p == null
		}, {
			fetchKey: m != null ? m : 0,
			fetchPolicy: "store-and-network"
		}), L = R == null ? void 0 : R.flowJSON, E = (t = R == null || (n = R.flow) == null ? void 0 : n.welj) != null ? t : L;
		return u.jsx("div", {
			"data-testid": void 0,
			children: u.jsx(o("WAFlowsPreviewProvider.react").WAFlowsPreviewProvider, {
				businessName: b,
				businessProfilePicture: v,
				initialFlowJSONString: E,
				initialPlatform: o("WAFlowsPreviewDeviceScreen.react").PLATFORM_CTWA,
				shouldSkipValidation: !0,
				wabaID: S,
				children: h === !0 ? u.jsx("div", {
					className: "x1obq294 x5a5i1n xde0f50 x15x8krk x6ikm8r x10wlt62",
					children: u.jsx(r("WAFlowsWebPreview.react"), {
						completionMessageCTAType: a,
						completionMessageText: i,
						ctwaImageCreative: l,
						ctwaWelcomeMessage: s,
						flowEntryPoint: o("WAFlowsInitEnvironmentTypes").FlowEntryPoint.BIZ_CARD_CTA,
						hideBorder: !0,
						isCompletionMessageEnabled: f,
						showOverlayOnFlowPreview: !0
					})
				}) : u.jsx(o("WAMFlowsFlowProvider.react").WAMFlowProvider, {
					initialIsFlowVisible: !0,
					children: u.jsx("div", {
						className: "x1obq294 x5a5i1n xde0f50 x15x8krk x6ikm8r x10wlt62",
						children: u.jsx(r("WAFlowsWebPreview.react"), {
							completionMessageCTAType: a,
							completionMessageText: i,
							ctwaImageCreative: l,
							ctwaWelcomeMessage: s,
							flowEntryPoint: o("WAFlowsInitEnvironmentTypes").FlowEntryPoint.BIZ_CARD_CTA,
							hideBorder: !0,
							isCompletionMessageEnabled: f,
							showOverlayOnFlowPreview: !0
						})
					})
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
