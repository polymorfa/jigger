__d("WAGetIdentityKeys", ["WAGetLocalPublicPrivateIdentityKeyApi", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAGetLocalPublicPrivateIdentityKeyApi").getLocalPublicPrivateIdentityKey(), t = e.privateKey, n = e.serializedPubKey;
			return {
				identityPrivateKey: t,
				identityPublicKey: n
			};
		}), s.apply(this, arguments);
	}
	l.getIdentityKeysInWorker = e;
}), 98);
