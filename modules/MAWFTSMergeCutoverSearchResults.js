__d("MAWFTSMergeCutoverSearchResults", ["fbt", "I64"], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e;
	function u(t, n) {
		var r, a, i, l, u = (e || (e = o("I64"))).add((r = t.matchCount) != null ? r : (e || (e = o("I64"))).of_string("1"), (a = n.matchCount) != null ? a : (e || (e = o("I64"))).of_string("1")), c = e.max((i = t.messageTimestampMs) != null ? i : (e || (e = o("I64"))).minus_one, (l = n.messageTimestampMs) != null ? l : (e || (e = o("I64"))).minus_one);
		return babelHelpers.extends({}, t, {
			contextLine: s._(
				/*BTDS*/
				"",
				[s._plural(e.to_int32(u), "number")]
			).toString(),
			matchCount: u,
			matchLengths: void 0,
			matchOffsets: void 0,
			messageId: void 0,
			messageTimestampMs: (e || (e = o("I64"))).equal(c, (e || (e = o("I64"))).minus_one) ? void 0 : c
		});
	}
	l.mergeCutoverSearchResults = u;
}), 226);
