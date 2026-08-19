__d("WAWebBizAdCreationAudienceDetails.react", [
	"fbt",
	"CometPlaceholder.react",
	"WAWebBizAdCreationAudienceTargetingSentences.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WAWebBizShimmerRows.react",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSIconIcEdit.react",
	"react",
	"useWAWebBizAdCreationOpenTargetingModal",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = 40, _ = {
		container: {
			backgroundColor: "xs1q97v",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			boxSizing: "x9f619",
			marginInlineStart: "x11hdunq",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineEnd: "x5s3kwk",
			paddingInlineStart: "xdx6fka",
			width: "x19sv2k2",
			$$css: !0
		},
		endAddon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function f(e) {
		return u.jsx(r("WDSIconIcEdit.react"), {
			colorName: "contentActionEmphasized",
			height: 20,
			width: 20
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.currentAudienceData, n = e.adAccountID, a = e.currency, l = e.dailyBudget, c = e.legacyAccountID, p = e.selectedPublisherPlatforms, g = m(r("WAWebBizAdCreationLoggerContext")), h = r("useWAWebBizAdCreationOpenTargetingModal")({
			adAccountID: n,
			audienceData: t,
			currency: a,
			dailyBudget: l,
			legacyAccountID: c,
			legacyAdAccountID: c,
			mode: "edit",
			selectedPublisherPlatforms: p,
			templateTargetSpecString: null
		}), y = d(function() {
			g != null && r("WAWebBizAdLogger").log({
				adAccountID: n,
				event: "edit_audience_click",
				extra: {
					audience_id: t.audienceID,
					audience_type: t.audienceOption
				},
				loggerContext: g
			}), h();
		}, [
			n,
			t.audienceID,
			t.audienceOption,
			g,
			h
		]);
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 16,
			justify: "all",
			testid: "biz_native_ads_audience_details",
			xstyle: _.container,
			children: [u.jsx(o("WAWebFlex.react").FlexItem, {
				align: "stretch",
				children: u.jsx(r("CometPlaceholder.react"), {
					fallback: u.jsx(r("WAWebBizShimmerRows.react"), { count: 4 }),
					name: i.id,
					children: u.jsx(r("WAWebBizAdCreationAudienceTargetingSentences.react"), {
						legacyAccountID: c,
						locationOnly: !1,
						option: t.audienceOption,
						targetingSpec: t.targetSpec
					})
				})
			}), u.jsx(r("WDSButton.react"), {
				Icon: f,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				label: s._(
					/*BTDS*/
					""
				),
				onPress: y,
				size: "small",
				testid: "biz_native_ads_edit_audience_button",
				variant: "outline",
				xstyle: _.endAddon
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = r("withWAWebBizAdCreationSpecContext")(g, function(e) {
		return {
			adAccountID: e.adAccountData.id,
			currency: e.adAccountData.currency,
			dailyBudget: e.budgetData.budget,
			legacyAccountID: e.adAccountData.legacyAccountID,
			selectedPublisherPlatforms: e.placementData.selectedPublisherPlatforms
		};
	});
	l.default = h;
}), 226);
