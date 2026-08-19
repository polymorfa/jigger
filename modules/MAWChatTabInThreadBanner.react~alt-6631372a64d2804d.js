__d("MAWChatTabInThreadBanner.react", [
	"CometRelay",
	"MAWChatTabInThreadBanner_query.graphql",
	"MWEBChatTabBannerNux.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var a = t.query, i = o("CometRelay").useFragment(e !== void 0 ? e : e = n("MAWChatTabInThreadBanner_query.graphql"), a);
		return u.jsx(r("MWEBChatTabBannerNux.react"), { query: i });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
