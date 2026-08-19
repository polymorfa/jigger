__d("MAWHMACKey", [
	"MAWCryptoConsts",
	"MAWDbMsgTypeVersionTxns",
	"MAWIndexedDb",
	"MAWKeychainUtil",
	"MAWSubtleCrypto",
	"MAWTransactionMode",
	"WABase64",
	"WmiMetadataAppSettingsReader",
	"tweetnacl-auth"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e = o("MAWKeychainUtil").getBufferWithRandomValuesFromLength(o("MAWCryptoConsts").HKDF_SEED_LENGTH_IN_BYTES);
		return c(e).then(function(e) {
			return o("MAWSubtleCrypto").MAWSubtleCrypto.exportKey("raw", e);
		});
	}
	function s(e, t) {
		var n = new TextEncoder().encode(e), a = new Uint8Array(t), i = r("tweetnacl-auth")(n, a);
		return o("WABase64").encodeB64UrlSafe(i);
	}
	async function u() {
		var t = await o("WmiMetadataAppSettingsReader").getHMACKeyFromMetadataDb();
		if (t != null) return t;
		var n = await e();
		return o("MAWIndexedDb").makeMsgrTransactor({ appMeta: o("MAWTransactionMode").READWRITE }, "generateAndInsertHMACKey", function(e) {
			return function() {
				return o("MAWDbMsgTypeVersionTxns").getHMACKey(e).then(function(t) {
					return t != null ? t : o("MAWDbMsgTypeVersionTxns").addHMACKey(e, n).then(function() {
						return n;
					});
				});
			};
		})();
	}
	function c(e) {
		return o("MAWSubtleCrypto").MAWSubtleCrypto.importKey("raw", e, {
			hash: "SHA-256",
			name: "HMAC"
		}, !0, ["sign"]);
	}
	l.genHMACKey = e, l.hmacTweetNaCl = s, l.generateAndInsertHMACKey = u;
}), 98);
