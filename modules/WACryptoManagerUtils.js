__d("WACryptoManagerUtils", [
	"Promise",
	"WABulkRequestKeys",
	"WACryptoDbCallbacks",
	"WACryptoManager",
	"WAGlobals",
	"WAHandleFailureUtils",
	"WAInMemorySignalStore",
	"WALogger",
	"WALoggerTag",
	"WARequestKeys",
	"WAResultOrError",
	"WASignalKeys",
	"WASignalSignatures",
	"WATagsLogger",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = o("WATagsLogger").TAGS([r("WALoggerTag").SignedPrekey]);
	function g(e) {
		var t = new (o("WAInMemorySignalStore")).InMemorySignalStoreImpl(o("WACryptoDbCallbacks").getCryptoDbCallbacks(), e), n = h();
		return {
			manager: o("WACryptoManager").initCryptoManager({
				regInfo: e,
				storage: t,
				network: n
			}),
			storage: t
		};
	}
	function h() {
		return {
			requestKeys: o("WARequestKeys").requestKeys,
			bulkRequestKeys: o("WABulkRequestKeys").bulkRequestKeys
		};
	}
	function y(t, r, a, i) {
		var l = null;
		return o("WACryptoManager").decryptContent(i.cryptoManager, r, {
			ciphertext: a,
			type: t
		}, function(e, t) {
			return l = {
				plaintext: e,
				remoteIdentity: t
			}, (_ || (_ = n("Promise"))).resolve();
		}).then(function(e) {
			return e.success ? o("WAResultOrError").makeResult(l) : e;
		}).catch(function(t) {
			throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["DecryptMsg runtime error: ", ""])), t), t;
		});
	}
	function C(e, t, r, a) {
		var i = null;
		return o("WACryptoManager").decryptGroupContent(a.cryptoManager, e, t, r, function(e) {
			return i = { plaintext: e }, (_ || (_ = n("Promise"))).resolve();
		}).then(function(e) {
			return e.success ? o("WAResultOrError").makeResult(i) : e;
		}).catch(function(e) {
			throw o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["DecryptMsg runtime error: ", ""])), e), e;
		});
	}
	function b(e, t) {
		return o("WACryptoManager").getParticipantInfo(t, e);
	}
	function v(e) {
		return e.storage.getPreKeyGenerationsTimestamps();
	}
	function S(e, t) {
		return t.storage.deletePreKeyGenerations(e);
	}
	function R(e, t, n, r) {
		return o("WACryptoManager").saveSenderKeySession(r.cryptoManager, e, t, n);
	}
	function L(e) {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield e.storage.loadLatestSignedPreKey();
			if (t.success === !1) throw f.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Missing signed prekey: ", ", triggering reregistration"])), t.error), yield o("WAHandleFailureUtils").reregisterPhone(), r("err")("No signed prekey: " + t.error);
			var a = o("WASignalSignatures").deserializeSignedPreKey(t.value);
			if (a == null) throw f.ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Cannot deserialize signed prekey"]))), r("err")("Cannot deserialize signed prekey");
			var i = yield o("WACryptoManager").generateOneTimePreKey(e);
			if (i == null) throw o("WATagsLogger").TAGS([r("WALoggerTag").OneTimePrekey]).ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Cannot generate one time prekey"]))), r("err")("Cannot generate one time prekey");
			var l = e.regInfo, s = l.regId, u = l.staticKeyPair;
			return (_ || (_ = n("Promise"))).resolve({
				regId: s,
				keyType: o("WASignalKeys").KEY_TYPE,
				publicKey: u.publicKey,
				signedPreKey: a,
				preKey: i
			});
		}), E.apply(this, arguments);
	}
	function k(e, t, n) {
		return o("WACryptoManager").encryptGroupContent(n.cryptoManager, e, o("WAGlobals").getMyDeviceJid(), t).catch(function(e) {
			return o("WATagsLogger").TAGS(["EncryptGroupContent"]).ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Runtime excpetion when encrypting group content: ", ""])), e), o("WAResultOrError").makeError("runtime-exception");
		});
	}
	function I(e, t) {
		return o("WACryptoManager").bulkEncryptContent(t.cryptoManager, e);
	}
	function T(e, t, n, r, a) {
		return o("WACryptoManager").encryptContent(n.cryptoManager, e, t, r || o("WACryptoManager").DEFAULT_SESSION_REQUEST, a);
	}
	function D(e, t) {
		return o("WACryptoManager").bulkEncryptContent(t.cryptoManager, e).then(function(e) {
			return e.success === !1 ? (o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[SendMessage] Fail encrypt messages"]))), new Map()) : e.value;
		});
	}
	l.createCryptoManager = g, l.decryptMsg = y, l.decryptGroupMsg = C, l.getParticipantInfo = b, l.getPreKeyGenerationsTimestamps = v, l.deletePreKeyGenerations = S, l.saveSenderKeySession = R, l.getSignalInfoForRetry = L, l.encryptGroupContentWithMetrics = k, l.bulkEncryptMsgWithMetrics = I, l.encryptMsgWithMetrics = T, l.bulkEncrypt = D;
}), 98);
