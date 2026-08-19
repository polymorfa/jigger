__d("useMWEBGetUpsellState", [
	"CometRelay",
	"MWEBUpsellDismissedEnum.facebook",
	"react-compiler-runtime",
	"useMWEBGetUpsellStateQuery.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		var t = o("react-compiler-runtime").c(5), r, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = e !== void 0 ? e : e = n("useMWEBGetUpsellStateQuery.graphql"), a = {}, t[0] = r, t[1] = a) : (r = t[0], a = t[1]);
		var i = o("CometRelay").useClientQuery(r, a), l = i.viewer, s = l.is_eb_restore_upsells_dismissed === o("MWEBUpsellDismissedEnum.facebook").MWEBUpsellDismissedStateEnum.ALL_DISMISSED, u = s || l.is_eb_restore_upsells_dismissed === o("MWEBUpsellDismissedEnum.facebook").MWEBUpsellDismissedStateEnum.UPSELLS_DISMISSED, c;
		return t[2] !== s || t[3] !== u ? (c = {
			isAllRestoreUpsellsDismissed: s,
			isRestoreUpsellsDismissed: u
		}, t[2] = s, t[3] = u, t[4] = c) : c = t[4], c;
	}
	l.default = s;
}), 98);
