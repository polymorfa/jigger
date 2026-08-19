__d("useXMAPreviewsDisabledSetting", [
	"MWPActor.react",
	"MessengerWebPrivacySettings",
	"ReQL",
	"ReQLSuspense",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		var t, n = o("react-compiler-runtime").c(6), a = (e || (e = r("useReStore")))(), l = o("MWPActor.react").useActor(), s;
		n[0] !== l || n[1] !== a.tables.messaging_privacy_settings ? (s = function() {
			return o("ReQL").fromTableAscending(a.tables.messaging_privacy_settings).getKeyRange(l);
		}, n[0] = l, n[1] = a.tables.messaging_privacy_settings, n[2] = s) : s = n[2];
		var u;
		n[3] !== l || n[4] !== a ? (u = [a, l], n[3] = l, n[4] = a, n[5] = u) : u = n[5];
		var c = o("ReQLSuspense").useFirst(s, u, i.id + ":26");
		return c == null ? r("MessengerWebPrivacySettings").e2ee_xma_previews_disabled : (t = c == null ? void 0 : c.e2eeXmaPreviewsDisabled) != null ? t : !1;
	}
	l.default = s;
}), 98);
