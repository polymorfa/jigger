__d("WAMOAdsManagerBulkUtils", ["AdsBulkValueUtils", "WAMOStatusAdsManagerUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("AdsBulkValueUtils").mapBulkValue(e == null ? void 0 : e.targeting, function(e) {
			return e.whatsapp_positions;
		}), n = (t == null ? void 0 : t.getValues()) || [], r = n.every(function(e) {
			return e == null ? void 0 : e.includes("status");
		}), a = o("AdsBulkValueUtils").mapBulkValue(e == null ? void 0 : e.targeting, function(e) {
			return e.publisher_platforms;
		}), i = (a == null ? void 0 : a.getValues()) || [], l = i.every(function(e) {
			return e == null ? void 0 : e.includes("whatsapp");
		});
		return r && l;
	}
	function s(t) {
		return o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForUnknownAge() && e(t);
	}
	l.shouldShowUnknownAgeInBulkSpec = s;
}), 98);
