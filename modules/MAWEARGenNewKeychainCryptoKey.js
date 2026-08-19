__d("MAWEARGenNewKeychainCryptoKey", [
	"FBLogger",
	"MAWCryptoConsts",
	"MAWKeychainCrypto",
	"MAWWebInitDataHelpers",
	"MessengerWebInitData",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				var e, t = o("MAWWebInitDataHelpers").getLastAccountKeyFormatVersion(), n = (yield (e = o("MAWKeychainCrypto")).getAccountKeys(t))[0], a = e.genBrowserEncryptionKeyString(), i = e.genDatabaseEncryptionSeed(), l = yield e.encryptDataToStringBuffer(n, i), s = o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + o("MAWCryptoConsts").ENC_KEY_TTL);
				return {
					accountKeyString: yield e.generateHashString(o("MAWWebInitDataHelpers").getAccountKeysString(t)[0]),
					appIdOrigin: r("MessengerWebInitData").appId,
					expiration: s,
					formatVersion: t,
					key: a,
					seed: l,
					userKeyBaseString: yield e.generateHashString(r("MessengerWebInitData").userKeyBase)
				};
			} catch (e) {
				var u = r("getErrorSafe")(e);
				throw r("FBLogger")("messenger_web").catching(u).mustfixThrow("Failed to generateNewKey");
			}
		}), s.apply(this, arguments);
	}
	l.default = e;
}), 98);
