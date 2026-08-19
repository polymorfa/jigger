__d("AdsUEditorCampaignSetUserAgeUnknownAction", [
	"AdsCFCampaignProvider",
	"AdsUEditorCampaignSetUserAgeUnknownReducerPlugin",
	"Laminar"
], (function(t, n, r, o, a, i) {
	"use strict";
	var e = n("Laminar").__createAction(function() {
		return [n("Laminar").__createReducer(n("AdsUEditorCampaignSetUserAgeUnknownReducerPlugin"), n("AdsCFCampaignProvider"), {}, "")];
	}, function() {
		return [];
	}, "ADS_CAMPAIGN_EDITOR_SET_USER_AGE_UNKNOWN");
	a.exports = e;
}), null);
