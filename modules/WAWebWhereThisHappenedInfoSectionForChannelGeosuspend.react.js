__d("WAWebWhereThisHappenedInfoSectionForChannelGeosuspend.react", [
	"fbt",
	"WAWebFbtIntlList",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.countryNames, n = r("WAWebFbtIntlList")(t, r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA);
		return u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: {
			key: "where-this-happened",
			testId: "where-this-happened",
			title: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			subtitle: function() {
				return s._(
					/*BTDS*/
					"",
					[s._param("listOfGeosuspendedCountries", n)]
				);
			}
		} }, "where-this-happened");
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
