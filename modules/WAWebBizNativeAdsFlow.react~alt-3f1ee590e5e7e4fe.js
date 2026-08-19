__d("WAWebBizNativeAdsFlow.react", [
	"WAWebBizAdCreationFlowContent.react",
	"WAWebBizAdDraftSaveCallbackContext",
	"WAWebBizNativeAdsFlowTypes",
	"WAWebBizNativeAdsIdentityContextProvider.react",
	"WAWebBizNativeAdsScenarioRouter",
	"WAWebKeyboardHotKeys.react",
	"WAWebNativeAdsFlowIDContextProvider.react",
	"WAWebUim",
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
		var n, a = t.identityBundle, i = t.isWAAEligible, l = t.ref, s = babelHelpers.objectWithoutPropertiesLoose(t, e), c = o("useWAWebFlow").useFlow((n = s.initialStep) != null ? n : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement, { transitions: o("useWAWebFlow").FlowTransitions.None }), _ = c[0], f = c[1], g = p(null), h = p(null), y = m(function() {
			return {
				existingDraftIDRef: g,
				saveCallbackRef: h
			};
		}, []), C = p(null), b = r("useWAWebBizAdCreationExitConfirmation")(f.step === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation, y), v = b.showExitConfirmation, S = o("WAWebBizNativeAdsScenarioRouter").isFirstTimeScenario(s.scenario), R = d(function(e) {
			e !== o("WAWebUim").DismissReason.LIFECYCLE && (f.step === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation ? (async function() {
				var e = await v();
				e !== "cancelled" && (S && e === "saved" && C.current != null ? C.current() : f.end());
			})() : f.end());
		}, [
			f,
			v,
			S
		]);
		return u.jsx(r("WAWebBizAdDraftSaveCallbackContext").Provider, {
			value: y,
			children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				tabIndex: 0,
				children: u.jsx(r("WAWebNativeAdsFlowIDContextProvider.react"), {
					flowID: s.flowID,
					scenario: s.scenario,
					children: u.jsx(r("WAWebBizNativeAdsIdentityContextProvider.react"), {
						initialIdentityBundle: a,
						isWAAEligible: i,
						children: u.jsx(_, {
							ref: l,
							flow: f,
							requestDismiss: R,
							children: u.jsx(r("WAWebBizAdCreationFlowContent.react"), {
								flow: f,
								navigateToManageAdsForFirstTimeRef: C,
								scenario: s.scenario,
								showExitConfirmation: v,
								step: f.step
							})
						})
					})
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.WAWebBizNativeAdsFlow = _;
}), 98);
