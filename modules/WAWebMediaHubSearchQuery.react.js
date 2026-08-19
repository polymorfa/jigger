__d("WAWebMediaHubSearchQuery.react", [
	"fbt",
	"WAFtsIsSearchQueryEligibleForMessageSearch",
	"WAWebText.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { paddingTop10: {
		paddingTop: "x889kno",
		$$css: !0
	} };
	function d(e) {
		var t = e.search, n = e.searchType, a = e.tab;
		if (t === "" || !r("WAFtsIsSearchQueryEligibleForMessageSearch")(t)) return null;
		var i = a === "media", l = a === "docs" || a === "links", s = n === "sender";
		return u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
			color: "wdsContentDeemphasized",
			weight: "semibold",
			xstyle: [
				i && (s ? o("WDSPaddings.stylex").wdsPaddings.paddingTop16 : c.paddingTop10),
				i && o("WDSPaddings.stylex").wdsPaddings.paddingBottom4,
				l && o("WDSPaddings.stylex").wdsPaddings.paddingTop12,
				o("WDSMargins.stylex").wdsMargins.marginHor16
			],
			children: m(n)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		return e === "caption" ? s._(
			/*BTDS*/
			""
		) : e === "sender" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	l.default = d;
}), 226);
