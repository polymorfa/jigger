__d("WAPreRegistrationCrypto", [
	"WACryptoManager",
	"WASignalSignatures",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WACryptoManager").generateRegistrationInfo(), t = e.authKeyPair, n = e.regId, r = e.staticKeyPair, a = Date.now(), i = yield o("WASignalSignatures").generateSignedPreKey(1, a, r), l = i.plainObject, s = i.record;
			return {
				regId: n,
				identityKeyPair: r,
				authKeyPair: t,
				signedPreKey: {
					keyId: l.id,
					encoded: s
				}
			};
		}), s.apply(this, arguments);
	}
	function u(e) {
		var t = o("WASignalSignatures").deserializeSignedPreKey(e.signedPreKey.encoded);
		if (t == null || t.id !== e.signedPreKey.keyId) throw r("err")("Badly formatted signed prekey");
		return {
			regId: e.regId,
			identityPubKeyType: 5,
			identityPubKey: e.identityKeyPair.publicKey,
			signedPreKey: t
		};
	}
	l.makeRegistrationData = e, l.serializeRegistrationData = u;
}), 98);
