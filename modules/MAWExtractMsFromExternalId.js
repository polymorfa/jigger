__d("MAWExtractMsFromExternalId", [
	"I64",
	"MAWExternalId",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 2199023255551;
	function c(t) {
		try {
			var n = (s || (s = o("I64"))).of_string_opt(t);
			if (n != null) {
				var r;
				return (r = d(n)) != null ? r : 0;
			}
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to convert externalId to number: ", ""])), t);
		}
		return 0;
	}
	function d(e) {
		var t = Number((s || (s = o("I64"))).to_string(s.and_(s.lsr_(e, 22), s.of_float(u))));
		return o("MAWExternalId").getThreeMostSignificantDigitsForSortOrderTimestamp(t);
	}
	l.extractMsFromStanzaId = c, l.extractMsFromExternalId = d;
}), 98);
