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
		var n, a = o("react-compiler-runtime").c(31), i, l, s, c;
		a[0] !== t ? (i = t.identityBundle, l = t.isWAAEligible, c = t.ref, s = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l, a[3] = s, a[4] = c) : (i = a[1], l = a[2], s = a[3], c = a[4]);
		var d;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (d = { transitions: o("useWAWebFlow").FlowTransitions.None }, a[5] = d) : d = a[5];
		var m = o("useWAWebFlow").useFlow((n = s.initialStep) != null ? n : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement, d), _ = m[0], f = m[1], g = p(null), h = p(null), y;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (y = {
			existingDraftIDRef: g,
			saveCallbackRef: h
		}, a[6] = y) : y = a[6];
		var C = y, b = p(null), v = r("useWAWebBizAdCreationExitConfirmation")(f.step === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation, C), S = v.showExitConfirmation, R;
		a[7] !== s.scenario ? (R = o("WAWebBizNativeAdsScenarioRouter").isFirstTimeScenario(s.scenario), a[7] = s.scenario, a[8] = R) : R = a[8];
		var L = R, E;
		a[9] !== f || a[10] !== L || a[11] !== S ? (E = function(t) {
			t !== o("WAWebUim").DismissReason.LIFECYCLE && (f.step === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation ? (async function() {
				var e = await S();
				e !== "cancelled" && (L && e === "saved" && b.current != null ? b.current() : f.end());
			})() : f.end());
		}, a[9] = f, a[10] = L, a[11] = S, a[12] = E) : E = a[12];
		var k = E, I;
		a[13] !== f || a[14] !== s.scenario || a[15] !== S ? (I = u.jsx(r("WAWebBizAdCreationFlowContent.react"), {
			flow: f,
			navigateToManageAdsForFirstTimeRef: b,
			scenario: s.scenario,
			showExitConfirmation: S,
			step: f.step
		}), a[13] = f, a[14] = s.scenario, a[15] = S, a[16] = I) : I = a[16];
		var T;
		a[17] !== _ || a[18] !== f || a[19] !== k || a[20] !== c || a[21] !== I ? (T = u.jsx(_, {
			ref: c,
			flow: f,
			requestDismiss: k,
			children: I
		}), a[17] = _, a[18] = f, a[19] = k, a[20] = c, a[21] = I, a[22] = T) : T = a[22];
		var D;
		a[23] !== i || a[24] !== l || a[25] !== T ? (D = u.jsx(r("WAWebBizNativeAdsIdentityContextProvider.react"), {
			initialIdentityBundle: i,
			isWAAEligible: l,
			children: T
		}), a[23] = i, a[24] = l, a[25] = T, a[26] = D) : D = a[26];
		var x;
		return a[27] !== s.flowID || a[28] !== s.scenario || a[29] !== D ? (x = u.jsx(r("WAWebBizAdDraftSaveCallbackContext").Provider, {
			value: C,
			children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				tabIndex: 0,
				children: u.jsx(r("WAWebNativeAdsFlowIDContextProvider.react"), {
					flowID: s.flowID,
					scenario: s.scenario,
					children: D
				})
			})
		}), a[27] = s.flowID, a[28] = s.scenario, a[29] = D, a[30] = x) : x = a[30], x;
	}
	l.WAWebBizNativeAdsFlow = _;
}), 98);
