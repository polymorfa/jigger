__d("WADbSignedPrekeyTxns", [
	"WADbMetaTxns",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("WADbMetaTxns").maybeGetLastSignedPrekeyIdAndIdentity(e), n = t.identityPair, r = t.keyId;
			if (r == null) return n == null ? o("WAResultOrError").makeError("missing-last-signed-prekey-id-and-registration") : o("WAResultOrError").makeError("missing-last-signed-prekey-id");
			var a = yield e.signedPrekey.get(r);
			return a == null ? o("WAResultOrError").makeError("missing-last-signed-prekey") : o("WAResultOrError").makeResult(a.encoded);
		}), s.apply(this, arguments);
	}
	l.getLatestSignedPreKey = e;
}), 98);
