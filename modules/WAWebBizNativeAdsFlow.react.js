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
	"react-compiler-runtime",
	"useWAWebBizAdCreationExitConfirmation",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"identityBundle",
		"isWAAEligible",
		"ref"
	], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = c.useRef;
	function _(t) {
		var a, i = o("react-compiler-runtime").c(31), l, s, c, d;
		i[0] !== t ? (l = t.identityBundle, s = t.isWAAEligible, d = t.ref, c = babelHelpers.objectWithoutPropertiesLoose(t, e), i[0] = t, i[1] = l, i[2] = s, i[3] = c, i[4] = d) : (l = i[1], s = i[2], c = i[3], d = i[4]);
		var m;
		i[5] === Symbol.for("react.memo_cache_sentinel") ? (m = { transitions: o("useWAWebFlow").FlowTransitions.None }, i[5] = m) : m = i[5];
		var _ = o("useWAWebFlow").useFlow((a = c.initialStep) != null ? a : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement, m), f = _[0], g = _[1], h = p(null), y = p(null), C;
		i[6] === Symbol.for("react.memo_cache_sentinel") ? (C = {
			existingDraftIDRef: h,
			saveCallbackRef: y
		}, i[6] = C) : C = i[6];
		var b = C, v = p(null), S = r("useWAWebBizAdCreationExitConfirmation")(g.step === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation, b), R = S.showExitConfirmation, L;
		i[7] !== c.scenario ? (L = o("WAWebBizNativeAdsScenarioRouter").isFirstTimeScenario(c.scenario), i[7] = c.scenario, i[8] = L) : L = i[8];
		var E = L, k;
		i[9] !== g || i[10] !== E || i[11] !== R ? (k = function(t) {
			t !== o("WAWebUim").DismissReason.LIFECYCLE && (g.step === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation ? n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield R();
				e !== "cancelled" && (E && e === "saved" && v.current != null ? v.current() : g.end());
			})() : g.end());
		}, i[9] = g, i[10] = E, i[11] = R, i[12] = k) : k = i[12];
		var I = k, T;
		i[13] !== g || i[14] !== c.scenario || i[15] !== R ? (T = u.jsx(r("WAWebBizAdCreationFlowContent.react"), {
			flow: g,
			navigateToManageAdsForFirstTimeRef: v,
			scenario: c.scenario,
			showExitConfirmation: R,
			step: g.step
		}), i[13] = g, i[14] = c.scenario, i[15] = R, i[16] = T) : T = i[16];
		var D;
		i[17] !== f || i[18] !== g || i[19] !== I || i[20] !== d || i[21] !== T ? (D = u.jsx(f, {
			ref: d,
			flow: g,
			requestDismiss: I,
			children: T
		}), i[17] = f, i[18] = g, i[19] = I, i[20] = d, i[21] = T, i[22] = D) : D = i[22];
		var x;
		i[23] !== l || i[24] !== s || i[25] !== D ? (x = u.jsx(r("WAWebBizNativeAdsIdentityContextProvider.react"), {
			initialIdentityBundle: l,
			isWAAEligible: s,
			children: D
		}), i[23] = l, i[24] = s, i[25] = D, i[26] = x) : x = i[26];
		var $;
		return i[27] !== c.flowID || i[28] !== c.scenario || i[29] !== x ? ($ = u.jsx(r("WAWebBizAdDraftSaveCallbackContext").Provider, {
			value: b,
			children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				tabIndex: 0,
				children: u.jsx(r("WAWebNativeAdsFlowIDContextProvider.react"), {
					flowID: c.flowID,
					scenario: c.scenario,
					children: x
				})
			})
		}), i[27] = c.flowID, i[28] = c.scenario, i[29] = x, i[30] = $) : $ = i[30], $;
	}
	l.WAWebBizNativeAdsFlow = _;
}), 98);
