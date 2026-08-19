__d("WAWebBizAdCreationAudienceSection.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationAudienceInfoModal.react",
	"WAWebBizAdCreationAudienceListRoot.react",
	"WAWebBizAdCreationAudienceReducer",
	"WAWebBizAdCreationAudienceSectionQuery.graphql",
	"WAWebBizAdCreationConsts",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationSectionNotices.react",
	"WAWebBizAdLogger",
	"WAWebBizAdTargetingSpecLogData",
	"WAWebBizCard.react",
	"WAWebBuildWABizAdCreationLWIAudienceMap",
	"WAWebFlex.react",
	"WAWebFlexBox.react",
	"WAWebGetSavedAudiencesFromQuery",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSText.react",
	"react",
	"useWAWebBizAdCreationOpenSeeAllModal",
	"useWAWebBizAdCreationOpenTargetingModal",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"useWAWebInfoButtonUtil",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useMemo, g = d.useRef, h = 5, y = { createNewAudienceButton: {
		alignSelf: "xqcrz7y",
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		paddingTop: "x16ovd2e",
		paddingBottom: "x12xbjc7",
		paddingInlineStart: "x12w63v0",
		paddingInlineEnd: "x1nzty39",
		paddingLeft: null,
		paddingRight: null,
		":hover_backgroundColor": "x1n67ipk",
		$$css: !0
	} };
	function C(t) {
		var a, i, l = t.boostedComponentInput, u = t.adAccountID, d = t.audienceData, C = t.currency, b = t.dailyBudget, v = t.legacyAccountID, S = t.selectedPublisherPlatforms, R = o("CometRelay").useLazyLoadQuery(e !== void 0 ? e : e = n("WAWebBizAdCreationAudienceSectionQuery.graphql"), {
			adAccountID: v,
			budget: null,
			budget_type: null,
			duration_in_seconds: null,
			input: l,
			objective: o("WAWebBizAdCreationConsts").WA_WEB_AD_OBJECTIVE,
			savedAudienceCount: 100
		}, { fetchPolicy: "store-and-network" }), L = r("useWAWebBizAdCreationSpecDispatcherContext")([r("WAWebBizAdCreationAudienceReducer")]), E = p(r("WAWebBizAdCreationLoggerContext")), k = g(!1);
		_(function() {
			if (E != null && !k.current) {
				k.current = !0;
				var e = r("WAWebBizAdTargetingSpecLogData")(d.targetSpec);
				r("WAWebBizAdLogger").logCritical({
					adAccountID: u,
					audienceID: d.audienceID,
					event: "audience_section_impression",
					extra: babelHelpers.extends({
						audience_option: d.audienceOption,
						audience_type: d.name
					}, e),
					loggerContext: E
				});
			}
		}, [
			u,
			d,
			E
		]);
		var I = r("useWAWebBizAdCreationOpenTargetingModal")({
			adAccountID: u,
			currency: C,
			dailyBudget: b,
			legacyAccountID: v,
			legacyAdAccountID: v,
			mode: "create",
			selectedPublisherPlatforms: S,
			templateTargetSpecString: R == null || (a = R.lwi) == null || (a = a.boosted_component) == null || (a = a.options.template_target_spec) == null ? void 0 : a.target_spec_string_without_placements
		}), T = m(function() {
			E != null && r("WAWebBizAdLogger").log({
				adAccountID: u,
				event: "create_new_audience_click",
				extra: {
					current_audience_id: d.audienceID,
					current_audience_type: d.audienceOption
				},
				loggerContext: E
			}), I();
		}, [
			u,
			d.audienceID,
			d.audienceOption,
			E,
			I
		]), D = R == null || (i = R.lwi) == null || (i = i.boosted_component) == null ? void 0 : i.options.audiences_v2, x = f(function() {
			return r("WAWebBuildWABizAdCreationLWIAudienceMap")(D);
		}, [D]), $ = f(function() {
			var e;
			return r("WAWebGetSavedAudiencesFromQuery")(R == null || (e = R.adAccount) == null || (e = e.savedAudiences) == null ? void 0 : e.edges);
		}, [R]), P = r("useWAWebBizAdCreationOpenSeeAllModal")(u, d, E, x, function(e) {
			L({
				audienceData: e,
				type: "audience_reducer.select_audience"
			});
		}, $), N = m(function() {
			E != null && r("WAWebBizAdLogger").log({
				adAccountID: u,
				event: "see_all_audiences_click",
				extra: {
					current_audience_id: d.audienceID,
					current_audience_type: d.audienceOption
				},
				loggerContext: E
			}), P();
		}, [
			u,
			d.audienceID,
			d.audienceOption,
			E,
			P
		]);
		_(function() {
			L({
				lwiAudiences: x,
				savedAudiences: $,
				type: "audience_reducer.load_lwi_audiences"
			});
		}, [
			L,
			x,
			$
		]);
		var M = r("useWAWebInfoButtonUtil")(r("WAWebBizAdCreationAudienceInfoModal.react")), w = [
			"TARGETING",
			"SINGAPORE_UNIVERSAL",
			"TAIWAN_FINSERV",
			"SAVE_UNIVERSAL"
		];
		return c.jsx(r("WAWebBizCard.react"), {
			ctaButton: $.length > h ? c.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: N,
				size: "small",
				type: "default",
				variant: "tonal"
			}) : null,
			header: s._(
				/*BTDS*/
				""
			),
			testid: "biz_native_ads_audience_section",
			titleAccessory: M,
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				gap: 16,
				children: [
					w.map(function(e) {
						return c.jsx(r("WAWebBizAdCreationSectionNotices.react"), { specElement: e }, e);
					}),
					c.jsx(r("WAWebBizAdCreationAudienceListRoot.react"), {}),
					c.jsx(r("WAWebUnstyledButton.react"), {
						onClick: T,
						testid: "biz_native_ads_create_new_audience_button",
						xstyle: y.createNewAudienceButton,
						children: c.jsxs(o("WAWebFlexBox.react").FlexRow, {
							gap: 20,
							children: [c.jsx(r("WDSIconIcAdd.react"), {
								height: 24,
								width: 24
							}), c.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})
					})
				]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = r("withWAWebBizAdCreationSpecContext")(C, function(e) {
		return {
			adAccountID: e.adAccountData.id,
			audienceData: e.audienceData,
			currency: e.adAccountData.currency,
			dailyBudget: e.budgetData.budget,
			legacyAccountID: e.adAccountData.legacyAccountID,
			selectedPublisherPlatforms: e.placementData.selectedPublisherPlatforms
		};
	});
	l.default = b;
}), 226);
