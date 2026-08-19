__d("MAWGenKeychainCryptoKeyWithVersion", [
	"ExecutionEnvironment",
	"FBLogger",
	"MAWCurrentUser",
	"MAWEARKeychainDecryptionError",
	"MAWKeychainCrypto",
	"MAWWebInitDataHelpers",
	"MAWWorkerSetupArgs",
	"MessengerWebInitData",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(t, n, a, i, l, s, u) {
		i === void 0 && (i = 1);
		try {
			var c = await o("MAWKeychainCrypto").getAccountKeys(i), d = await Promise.all([o("MAWKeychainCrypto").importBrowserEncryptionKey(t), Promise.all(c.map(function(e) {
				return o("MAWKeychainCrypto").decryptDataToArrayBuffer(e, n).catch(function() {
					return null;
				});
			}))]), m = d[0], p = d[1], _ = await Promise.all(p.filter(Boolean).map(function(e) {
				return o("MAWKeychainCrypto").genDatabaseEncryptionKey(m, e).catch(function() {
					return null;
				});
			})), f = _.filter(Boolean);
			if (f.length === 0) throw new (r("MAWEARKeychainDecryptionError"))("Failed to generate keys from seed");
			return {
				keys: f,
				version: a
			};
		} catch (t) {
			var g = null, h = null, y = o("MAWWorkerSetupArgs").getWorkerSetupArgs();
			(e || (e = r("ExecutionEnvironment"))).isInWorker && y != null && (g = y.userKeyBase === r("MessengerWebInitData").userKeyBase, h = y.fbId === o("MAWCurrentUser").getID());
			var C = o("MAWWebInitDataHelpers").getAccountKeysString(i), b = C && C[0] != null ? await o("MAWKeychainCrypto").generateHashString(C[0]) : null;
			throw r("FBLogger")("messenger_web").catching(r("getErrorSafe")(t)).mustfix("Failed to genKeyWithVersion: accountKeyBackfilled = %s; accountKeyExists = %s; acccountKeyMatches = %s; userKeyBaseBackilled = %s; userKeyBaseExists = %s; userKeyBaseMatches = %s; appIdOrigin = %s; appIdInitData = %s; userIdMatches = %s; isInWorker = %s; userKeyBase_match_between_threads = %s; userId_match_between_threads = %s; formatVersion = %s;", l != null, C != null, l === b, s != null, r("MessengerWebInitData").userKeyBase != null, s === await o("MAWKeychainCrypto").generateHashString(r("MessengerWebInitData").userKeyBase), u, r("MessengerWebInitData").appId, o("MAWCurrentUser").getID() === String(r("MessengerWebInitData").userId), (e || (e = r("ExecutionEnvironment"))).isInWorker, g, h, i), t;
		}
	}
	l.default = s;
}), 98);
