__d("MAWEARGenNewKeychainCryptoKey", [
	"FBLogger",
	"MAWCryptoConsts",
	"MAWKeychainCrypto",
	"MAWWebInitDataHelpers",
	"MessengerWebInitData",
	"WATimeUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e() {
		try {
			var e, t = o("MAWWebInitDataHelpers").getLastAccountKeyFormatVersion(), n = (await (e = o("MAWKeychainCrypto")).getAccountKeys(t))[0], a = e.genBrowserEncryptionKeyString(), i = e.genDatabaseEncryptionSeed(), l = await e.encryptDataToStringBuffer(n, i), s = o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + o("MAWCryptoConsts").ENC_KEY_TTL);
			return {
				accountKeyString: await e.generateHashString(o("MAWWebInitDataHelpers").getAccountKeysString(t)[0]),
				appIdOrigin: r("MessengerWebInitData").appId,
				expiration: s,
				formatVersion: t,
				key: a,
				seed: l,
				userKeyBaseString: await e.generateHashString(r("MessengerWebInitData").userKeyBase)
			};
		} catch (e) {
			var u = r("getErrorSafe")(e);
			throw r("FBLogger")("messenger_web").catching(u).mustfixThrow("Failed to generateNewKey");
		}
	}
	l.default = e;
}), 98);
