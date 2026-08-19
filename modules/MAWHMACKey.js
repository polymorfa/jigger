__d("MAWHMACKey", [
	"MAWCryptoConsts",
	"MAWDbMsgTypeVersionTxns",
	"MAWIndexedDb",
	"MAWKeychainUtil",
	"MAWSubtleCrypto",
	"MAWTransactionMode",
	"WABase64",
	"WmiMetadataAppSettingsReader",
	"asyncToGeneratorRuntime",
	"tweetnacl-auth"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e = o("MAWKeychainUtil").getBufferWithRandomValuesFromLength(o("MAWCryptoConsts").HKDF_SEED_LENGTH_IN_BYTES);
		return d(e).then(function(e) {
			return o("MAWSubtleCrypto").MAWSubtleCrypto.exportKey("raw", e);
		});
	}
	function s(e, t) {
		var n = new TextEncoder().encode(e), a = new Uint8Array(t), i = r("tweetnacl-auth")(n, a);
		return o("WABase64").encodeB64UrlSafe(i);
	}
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield o("WmiMetadataAppSettingsReader").getHMACKeyFromMetadataDb();
			if (t != null) return t;
			var n = yield e();
			return o("MAWIndexedDb").makeMsgrTransactor({ appMeta: o("MAWTransactionMode").READWRITE }, "generateAndInsertHMACKey", function(e) {
				return function() {
					return o("MAWDbMsgTypeVersionTxns").getHMACKey(e).then(function(t) {
						return t != null ? t : o("MAWDbMsgTypeVersionTxns").addHMACKey(e, n).then(function() {
							return n;
						});
					});
				};
			})();
		}), c.apply(this, arguments);
	}
	function d(e) {
		return o("MAWSubtleCrypto").MAWSubtleCrypto.importKey("raw", e, {
			hash: "SHA-256",
			name: "HMAC"
		}, !0, ["sign"]);
	}
	l.genHMACKey = e, l.hmacTweetNaCl = s, l.generateAndInsertHMACKey = u;
}), 98);
