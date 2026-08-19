__d("WAMOStatusMediaValidationUtils", ["AdsVideoSpecs", "WAMOStatusAdsManagerUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t;
		if (e == null || e.assets == null || e.assetGroupsByAsset == null) return !1;
		var n = e.assetGroupsByAsset, r = e.assets, o = (t = Array.from(n.entries()).find(function(e) {
			var t = e[0], n = e[1];
			return n.includes("WHATSAPP_STATUS");
		})) == null ? void 0 : t[0];
		if (o == null) return !1;
		var a = r.get(o);
		if (a == null || a.format !== "video") return !1;
		var i = a.video;
		return s(i) !== !1;
	}
	function s(e, t) {
		t === void 0 && (t = r("AdsVideoSpecs").WHATSAPP_STATUS);
		var n = e.width / e.height;
		if (t.maxWarningAspectRatio != null && n > t.maxWarningAspectRatio + .01) return !1;
		var a = o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForLPVExpansion() ? 3600 : t.maxWarningLength;
		return !(a != null && e.length > a);
	}
	l.isSingleVideoValidForStatusFromPlacementAssetSpec = e;
}), 98);
