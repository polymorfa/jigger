__d("getMAWNonAddressableContactBannerStrings", ["fbt", "IntlVariations"], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	function e(e, t) {
		var n, o, a;
		if (e) return {
			details: s._(
				/*BTDS*/
				""
			),
			headline: s._(
				/*BTDS*/
				""
			)
		};
		var i = ((n = t.firstName) != null ? n : "") === "" ? null : t.firstName, l = ((o = t.name) != null ? o : "") === "" ? null : t.name, u = (a = i != null ? i : l) != null ? a : "recipient", c = r("IntlVariations").GENDER_UNKNOWN;
		return {
			details: s._(
				/*BTDS*/
				"",
				[s._name("message recipient name", u, c)]
			),
			headline: s._(
				/*BTDS*/
				"",
				[s._name("message recipient name", u, c)]
			)
		};
	}
	l.default = e;
}), 226);
