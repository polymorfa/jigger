__d("WAMMUnknownAgePlacementMutator", [
	"AdsAccountStore",
	"AdsCampaignPlacementAddDataActionFlux",
	"AdsUEditorCampaignPlacementRemoveActionFlux",
	"AdsUEditorCampaignPlacementSetActionFlux",
	"WAMOStatusAdsManagerUtils",
	"WAMOUnknownAgeUtils",
	"setUserAgeUnknownMutator"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t;
		if (!o("WAMOStatusAdsManagerUtils").isOnlyMarketingMessagesSelectedFromCampaign(e)) return !1;
		var n = r("AdsAccountStore").getSelectedAccount().getValue();
		return o("WAMOUnknownAgeUtils").isAccountAgeSettingEligibleForUnknownAge((t = n == null ? void 0 : n.account_id) != null ? t : "") ? e.targeting.user_age_unknown == null : !1;
	}
	var s = { reduce: function(n, a) {
		if (!o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMMUnknownAge()) return n;
		var t = a.action;
		if (t == null || typeof t != "object") return n;
		var i = t.type, l = i === o("AdsCampaignPlacementAddDataActionFlux").actionType ? t.ids : t.campaignIDs;
		if (!Array.isArray(l)) return n;
		var s = i === o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType || i === o("AdsUEditorCampaignPlacementSetActionFlux").actionType, u = i === o("AdsCampaignPlacementAddDataActionFlux").actionType || i === o("AdsUEditorCampaignPlacementSetActionFlux").actionType;
		return !s && !u ? n : n.map(function(t, n) {
			if (!l.includes(n)) return t;
			var a = t.getValueEnforcing();
			return s && e(a) ? t.map(function(e) {
				return r("setUserAgeUnknownMutator")(e, !0);
			}) : u && !o("WAMOStatusAdsManagerUtils").isOnlyMarketingMessagesSelectedFromCampaign(a) && !o("WAMOStatusAdsManagerUtils").isWAMOStatusSelectedFromCampaign(a) && a.targeting.user_age_unknown != null ? t.map(function(e) {
				return r("setUserAgeUnknownMutator")(e, null);
			}) : t;
		});
	} }, u = s;
	l.default = u;
}), 98);
