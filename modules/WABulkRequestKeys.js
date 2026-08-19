__d("WABulkRequestKeys", [
	"WACryptoLibraryConfig",
	"WAFetchPreKeyBundlesProtocol",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = o("WACryptoLibraryConfig").getCryptoLibraryConfig().isPq1on1MessageEnabled, n = yield o("WAFetchPreKeyBundlesProtocol").fetchPreKeyBundlesProtocol(e, t);
			return n.success ? o("WAResultOrError").makeResult(n.value) : o("WAResultOrError").makeError("errRequestKeysParsingFailed");
		}), s.apply(this, arguments);
	}
	l.bulkRequestKeys = e;
}), 98);
