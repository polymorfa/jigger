__d("WAWebBizNativeAdsFlow.react", [
	"WAWebBizAdCreationFlowContent.react",
	"WAWebBizAdDraftSaveCallbackContext",
	"WAWebBizNativeAdsFlowTypes",
	"WAWebBizNativeAdsIdentityContextProvider.react",
	"WAWebBizNativeAdsScenarioRouter",
	"WAWebKeyboardHotKeys.react",
	"WAWebNativeAdsFlowIDContextProvider.react",
	"WAWebUim",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebBizAdCreationExitConfirmation",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"identityBundle",
		"isWAAEligible",
		"ref"
	], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = c.useRef;
	function _(t) {
		var a, i = t.identityBundle, l = t.isWAAEligible, s = t.ref, c = babelHelpers.objectWithoutPropertiesLoose(t, e), _ = o("useWAWebFlow").useFlow((a = c.initialStep) != null ? a : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement, { transitions: o("useWAWebFlow").FlowTransitions.None }), f = _[0], g = _[1], h = p(null), y = p(null), C = m(function() {
			return {
				existingDraftIDRef: h,
				saveCallbackRef: y
			};
		}, []), b = p(null), v = r("useWAWebBizAdCreationExitConfirmation")(g.step === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation, C), S = v.showExitConfirmation, R = o("WAWebBizNativeAdsScenarioRouter").isFirstTimeScenario(c.scenario), L = d(function(e) {
			e !== o("WAWebUim").DismissReason.LIFECYCLE && (g.step === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation ? n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield S();
				e !== "cancelled" && (R && e === "saved" && b.current != null ? b.current() : g.end());
			})() : g.end());
		}, [
			g,
			S,
			R
		]);
		return u.jsx(r("WAWebBizAdDraftSaveCallbackContext").Provider, {
			value: C,
			children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				tabIndex: 0,
				children: u.jsx(r("WAWebNativeAdsFlowIDContextProvider.react"), {
					flowID: c.flowID,
					scenario: c.scenario,
					children: u.jsx(r("WAWebBizNativeAdsIdentityContextProvider.react"), {
						initialIdentityBundle: i,
						isWAAEligible: l,
						children: u.jsx(f, {
							ref: s,
							flow: g,
							requestDismiss: L,
							children: u.jsx(r("WAWebBizAdCreationFlowContent.react"), {
								flow: g,
								navigateToManageAdsForFirstTimeRef: b,
								scenario: c.scenario,
								showExitConfirmation: S,
								step: g.step
							})
						})
					})
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.WAWebBizNativeAdsFlow = _;
}), 98);
