__d("MAWMessageSortOrderUtils", [
	"I64",
	"MAWDbMsg",
	"MAWExtractMsFromExternalId",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d;
	function m(t) {
		var n = t.revokedExternalId != null ? t.revokedExternalId : t.externalId;
		n == null && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["generateAuthoritativeMessageSortOrder called without ID"])));
		var r = (d || (d = o("I64"))).of_string_opt(n);
		if (t.serverTs == null) {
			var a;
			if (t.sortOrderMs != null) return t.sortOrderMs;
			r == null && o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[sortOrder] ExternalId is not present"])));
			var i = r == null ? null : o("MAWExtractMsFromExternalId").extractMsFromExternalId(r);
			return Math.floor((a = t.originalTs) != null ? a : o("MAWDbMsg").getCanonicalTsFromMsg(t)) * 1e3 + (i != null ? i : 0);
		}
		if (r != null) {
			var l = o("MAWExtractMsFromExternalId").extractMsFromExternalId(r);
			if (l != null) {
				var m = t.originalTs != null ? t.originalTs : t.serverTs;
				return Number(m) * 1e3 + l;
			} else o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[sortOrder] Timestamp bits in externalId not valid"])));
		} else o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[sortOrder] externalId is not a valid int64"])));
		return o("MAWDbMsg").getSortOrderWithFallback(t);
	}
	l.generateAuthoritativeMessageSortOrder = m;
}), 98);
