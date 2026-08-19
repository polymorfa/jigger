__d("MAWChatTabInThreadBanner.react", [
	"CometRelay",
	"MAWChatTabInThreadBanner_query.graphql",
	"MWEBChatTabBannerNux.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var a = o("react-compiler-runtime").c(2), i = t.query, l = o("CometRelay").useFragment(e !== void 0 ? e : e = n("MAWChatTabInThreadBanner_query.graphql"), i), s;
		return a[0] !== l ? (s = u.jsx(r("MWEBChatTabBannerNux.react"), { query: l }), a[0] = l, a[1] = s) : s = a[1], s;
	}
	l.default = c;
}), 98);
