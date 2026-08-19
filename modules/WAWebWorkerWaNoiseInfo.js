__d("WAWebWorkerWaNoiseInfo", [
	"WABase64",
	"WASignalKeys",
	"WAWebDbEncryptionKey",
	"WAWebUserPrefsCacheStorage",
	"WAWebUserPrefsKeys",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	function e() {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield u(), t = yield c();
			if (!e || !t) return null;
			var n = yield p(e.staticKeyPair.pubKey, t[1]), r = yield p(e.staticKeyPair.privKey, t[2]);
			return o("WASignalKeys").makeKeyPairFromArrayBuffers(n, r);
		}), s.apply(this, arguments);
	}
	function u() {
		return o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.getItemFromCacheStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO);
	}
	function c() {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield m();
			return e ? e.map(function(e) {
				return new Uint8Array(o("WABase64").decodeB64(e));
			}) : null;
		}), d.apply(this, arguments);
	}
	function m() {
		return o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.getItemFromCacheStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO_IV);
	}
	function p(e, t) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0], r = yield self.crypto.subtle.decrypt({
				iv: t,
				name: "AES-CBC"
			}, n.key, e);
			return r;
		}), _.apply(this, arguments);
	}
	l.getWaNoiseInfo = e;
}), 98);
