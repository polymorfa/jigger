__d("WAWebWorkerEncKeyHelper", [
	"Promise",
	"WALogger",
	"WAWebDbEncryptionKey",
	"WAWebLogoutReasonConstants",
	"WAWebSocketLogoutJob",
	"WAWebUserPrefsCacheStorage",
	"WAWebUserPrefsKeys",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s;
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = null;
			return t = yield p(), t == null && (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[DB ENC CRITICAL ERROR] null returned for local enc salt"]))), yield o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.WebFailEncSalt)), t = Uint8Array.from(atob(t), function(e) {
				return e.charCodeAt(0);
			}), (s || (s = n("Promise"))).resolve(t);
		}), c.apply(this, arguments);
	}
	function d() {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield u();
			if (!(!e || e.constructor !== Uint8Array)) return o("WAWebDbEncryptionKey").DbEncKeyStore.init(e);
		}), m.apply(this, arguments);
	}
	function p() {
		return o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.getItemFromCacheStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT);
	}
	l.initEncSalt = d;
}), 98);
