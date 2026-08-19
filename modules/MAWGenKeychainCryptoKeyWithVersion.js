__d("MAWGenKeychainCryptoKeyWithVersion", [
	"ExecutionEnvironment",
	"FBLogger",
	"MAWCurrentUser",
	"MAWEARKeychainDecryptionError",
	"MAWKeychainCrypto",
	"MAWWebInitDataHelpers",
	"MAWWorkerSetupArgs",
	"MessengerWebInitData",
	"Promise",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t, n, r, o, a, i) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, u, c, d) {
			l === void 0 && (l = 1);
			try {
				var m = yield o("MAWKeychainCrypto").getAccountKeys(l), p = yield (s || (s = n("Promise"))).all([o("MAWKeychainCrypto").importBrowserEncryptionKey(t), s.all(m.map(function(e) {
					return o("MAWKeychainCrypto").decryptDataToArrayBuffer(e, a).catch(function() {
						return null;
					});
				}))]), _ = p[0], f = p[1], g = yield s.all(f.filter(Boolean).map(function(e) {
					return o("MAWKeychainCrypto").genDatabaseEncryptionKey(_, e).catch(function() {
						return null;
					});
				})), h = g.filter(Boolean);
				if (h.length === 0) throw new (r("MAWEARKeychainDecryptionError"))("Failed to generate keys from seed");
				return {
					keys: h,
					version: i
				};
			} catch (t) {
				var y = null, C = null, b = o("MAWWorkerSetupArgs").getWorkerSetupArgs();
				(e || (e = r("ExecutionEnvironment"))).isInWorker && b != null && (y = b.userKeyBase === r("MessengerWebInitData").userKeyBase, C = b.fbId === o("MAWCurrentUser").getID());
				var v = o("MAWWebInitDataHelpers").getAccountKeysString(l), S = v && v[0] != null ? yield o("MAWKeychainCrypto").generateHashString(v[0]) : null;
				throw r("FBLogger")("messenger_web").catching(r("getErrorSafe")(t)).mustfix("Failed to genKeyWithVersion: accountKeyBackfilled = %s; accountKeyExists = %s; acccountKeyMatches = %s; userKeyBaseBackilled = %s; userKeyBaseExists = %s; userKeyBaseMatches = %s; appIdOrigin = %s; appIdInitData = %s; userIdMatches = %s; isInWorker = %s; userKeyBase_match_between_threads = %s; userId_match_between_threads = %s; formatVersion = %s;", u != null, v != null, u === S, c != null, r("MessengerWebInitData").userKeyBase != null, c === (yield o("MAWKeychainCrypto").generateHashString(r("MessengerWebInitData").userKeyBase)), d, r("MessengerWebInitData").appId, o("MAWCurrentUser").getID() === String(r("MessengerWebInitData").userId), (e || (e = r("ExecutionEnvironment"))).isInWorker, y, C, l), t;
			}
		}), c.apply(this, arguments);
	}
	l.default = u;
}), 98);
