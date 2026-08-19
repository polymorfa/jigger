__d("MAWMessageSearchFTSKeyUtil", [
	"MAWCryptoConsts",
	"MAWFTSIndexedDb",
	"MAWKeychainCrypto",
	"MAWSubtleCrypto",
	"MAWTransactionMode",
	"WABase64",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		return t.ftsEncryptionMeta.toCollection().first();
	};
	function s(e) {
		return o("MAWSubtleCrypto").MAWSubtleCrypto.importKey("raw", o("WABase64").decodeB64(e.key), { name: o("MAWCryptoConsts").HKDF }, !1, ["deriveKey"]);
	}
	var u = function(n) {
		return o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsEncryptionMeta: o("MAWTransactionMode").READWRITE }, function(t) {
			return function() {
				return e(t).then(function(e) {
					if (e != null) return e;
					var r = { key: n };
					return t.ftsEncryptionMeta.add(r).then(function() {
						return r;
					});
				});
			};
		})();
	};
	function c() {
		var e = new Uint8Array(128);
		return self.crypto.getRandomValues(e), u(o("WABase64").encodeB64(e.buffer));
	}
	function d() {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsEncryptionMeta: o("MAWTransactionMode").READONLY }, function(t) {
				return function() {
					return e(t);
				};
			})(), n = t != null ? t : yield c(), r = yield s(n);
			return o("MAWSubtleCrypto").MAWSubtleCrypto.deriveKey({
				hash: o("MAWCryptoConsts").SHA256,
				info: new Uint8Array(0),
				name: o("MAWCryptoConsts").HKDF,
				salt: o("MAWKeychainCrypto").getAccountKeysBuffers(1)[0]
			}, r, {
				hash: o("MAWCryptoConsts").SHA256,
				name: "HMAC"
			}, !1, ["sign"]);
		}), m.apply(this, arguments);
	}
	l.fetchOrGenerateFTSCryptoKey = d;
}), 98);
