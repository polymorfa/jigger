__d("WAWebBizAdCreationSummaryReachEstimationRow.react", [
	"fbt",
	"WAWebBizAdCreationConfigContext",
	"WAWebBizAdCreationEUCountryUtils",
	"WAWebBizAdCreationSummaryReachEstimationInfoModal.react",
	"WAWebBizSummaryLineItem.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcInfo.react",
	"react",
	"useWAWebEstimatedDailyReach",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useContext;
	function d(e) {
		var t = e.audienceOption, n = e.currency, a = e.dailyBudget, i = e.legacyAdAccountID, l = e.selectedPublisherPlatforms, d = e.targetingSpec, m = c(r("WAWebBizAdCreationConfigContext")), _ = m != null ? m : {}, f = _.flow, g = _.flowID, h = _.pageID, y = _.product, C = {
			objective: o("WAWebBizAdCreationEUCountryUtils").getAdObjective(d),
			page_id: h,
			product: y != null ? y : "BOOSTED_MESSAGE"
		}, b = r("useWAWebEstimatedDailyReach")({
			audienceOptionAudience: t,
			currency: n,
			dailyBudget: a,
			flow: f,
			flowID: g,
			legacyAdAccountID: i,
			optimizationGoalInput: C,
			postID: null,
			selectedPublisherPlatforms: l,
			targetingSpecAudience: JSON.stringify(d)
		}), v = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizAdCreationSummaryReachEstimationInfoModal.react"), {}));
		}, S = u.jsx(r("WDSButton.react"), {
			Icon: p,
			onPress: v,
			size: "small",
			variant: "borderless"
		});
		return u.jsx(r("WAWebBizSummaryLineItem.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			labelAccessory: S,
			value: b
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = r("withWAWebBizAdCreationSpecContext")(d, function(e) {
		return {
			audienceOption: e.audienceData.audienceOption,
			currency: e.adAccountData.currency,
			dailyBudget: e.budgetData.budget,
			legacyAdAccountID: e.adAccountData.legacyAccountID,
			selectedPublisherPlatforms: e.placementData.selectedPublisherPlatforms,
			targetingSpec: e.audienceData.targetSpec
		};
	});
	function p() {
		return u.jsx(r("WDSIconIcInfo.react"), {
			colorName: "contentDeemphasized",
			height: 20,
			width: 20
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
