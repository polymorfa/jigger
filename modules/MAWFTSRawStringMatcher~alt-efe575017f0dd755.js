__d("MAWFTSRawStringMatcher", ["JSResourceForInteraction", "nullthrows"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("JSResourceForInteraction")("WAFtsMultiLangTokenizer").__setRef("MAWFTSRawStringMatcher"), s = null;
	async function u() {
		return s = await e.load(), d;
	}
	function c(e) {
		return new (r("nullthrows")(s))().tokenize(e);
	}
	function d(e, t) {
		var n = Array.from(c(e)).filter(function(e) {
			return e.length > 1;
		});
		if (n.length === 0) return !1;
		var r = Array.from(c(t));
		return n.every(function(e) {
			return r.some(function(t) {
				return t.startsWith(e);
			});
		});
	}
	l.load = u;
}), 98);
