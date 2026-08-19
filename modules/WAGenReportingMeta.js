__d("WAGenReportingMeta", [
	"WAByteArray",
	"WAFranking",
	"WAFrankingNode",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield o("WAFrankingNode").genFrankingTagFromMessageApplicationEncode(e, t, n);
			return {
				frankingKey: t,
				frankingTag: r,
				frankingVersion: o("WAFranking").getFrankingVersion(n),
				reportingContent: o("WAByteArray").uint8ArrayToBuffer(e),
				reportingTag: null
			};
		}), s.apply(this, arguments);
	}
	l.genReportingMeta = e;
}), 98);
