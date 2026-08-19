__d("MAWFTSRawStringMatcher", [
	"JSResourceForInteraction",
	"asyncToGeneratorRuntime",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("JSResourceForInteraction")("WAFtsMultiLangTokenizer").__setRef("MAWFTSRawStringMatcher"), s = null;
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			return s = yield e.load(), m;
		}), c.apply(this, arguments);
	}
	function d(e) {
		return new (r("nullthrows")(s))().tokenize(e);
	}
	function m(e, t) {
		var n = Array.from(d(e)).filter(function(e) {
			return e.length > 1;
		});
		if (n.length === 0) return !1;
		var r = Array.from(d(t));
		return n.every(function(e) {
			return r.some(function(t) {
				return t.startsWith(e);
			});
		});
	}
	l.load = u;
}), 98);
