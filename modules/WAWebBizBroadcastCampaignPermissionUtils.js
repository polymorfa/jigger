__d("WAWebBizBroadcastCampaignPermissionUtils", ["WAWebValidationUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 0xe8d4a51000;
	function s(t) {
		return !(!o("WAWebValidationUtils").validateUUID(t.campaignId) || t.createdTimestamp < e);
	}
	l.canEditBizBroadcastCampaign = s;
}), 98);
