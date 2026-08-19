__d("WAWebUploadPQPrekeysJob", [
	"WALogger",
	"WASignalKeys",
	"WASignalPQTypes",
	"WAWebKyberPreKeyStore",
	"WAWebPQGatingUtils",
	"WAWebSignalStoreApi",
	"getErrorSafe",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g = r("requireDeferred")("WAPQUploadPreKeysProtocol").__setRef("WAWebUploadPQPrekeysJob"), h = r("requireDeferred")("WASignalPQKeys").__setRef("WAWebUploadPQPrekeysJob"), y = 100;
	function C(e, t) {
		return (e + t) % o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER;
	}
	function b(e) {
		return {
			keyId: e.id,
			keyPair: {
				pubKey: e.keyPair.publicKey.buffer,
				privKey: e.keyPair.secretKey.buffer
			},
			signature: e.signature.buffer,
			timestamp: e.timestamp,
			sentToServer: !1
		};
	}
	function v(e) {
		return {
			keyId: e.id,
			keyPair: {
				pubKey: e.keyPair.publicKey.buffer,
				privKey: e.keyPair.secretKey.buffer
			},
			signature: e.signature.buffer,
			timestamp: e.timestamp
		};
	}
	async function S() {
		try {
			if (!o("WAWebPQGatingUtils").isPqKeysUploadEnabled()) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["generateAndUploadPQPreKeys: PQ upload not enabled, skipping"])));
				return;
			}
			var t = await o("WAWebKyberPreKeyStore").isPQMigrated();
			if (t) {
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["generateAndUploadPQPreKeys: already PQ migrated, skipping"])));
				return;
			}
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["generateAndUploadPQPreKeys: starting PQ prekey generation/upload"])));
			var n = await o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo();
			if (n == null) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["generateAndUploadPQPreKeys: no registration info available"])));
				return;
			}
			var a = o("WASignalKeys").makeKeyPairFromArrayBuffers(n.identityKeyPair.pubKey, n.identityKeyPair.privKey), i = await Promise.all([g.load(), h.load()]), l = i[0].uploadPQPreKeysProtocol, S = i[1], R = S.generateKyberLastResortKey, L = S.generateKyberPreKeys, E = await o("WAWebKyberPreKeyStore").reserveKyberPreKeyIds(y + 1), k = C(E, y);
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"generateAndUploadPQPreKeys: generating ",
				" PQ prekeys starting at ID ",
				""
			])), y, E);
			var I = await Promise.all([L(E, y, a), R(k, a)]), T = I[0], D = I[1], x = T.map(b), $ = v(D);
			await o("WAWebKyberPreKeyStore").saveKyberPreKeys(x), await o("WAWebKyberPreKeyStore").saveKyberLastResortKey($), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["generateAndUploadPQPreKeys: stored ", " prekeys + last-resort key in IndexedDB"])), T.length);
			var P = await l(T, D);
			if (P.success) {
				var N = T.map(function(e) {
					return e.id;
				});
				await o("WAWebKyberPreKeyStore").setPQMigrated(!0), await o("WAWebKyberPreKeyStore").markKyberPreKeysAsSent(N), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["generateAndUploadPQPreKeys: PQ migration complete, ", " prekeys uploaded"])), T.length);
			} else o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["generateAndUploadPQPreKeys: upload failed, keys stored locally for retry"])));
		} catch (e) {
			o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["generateAndUploadPQPreKeys: error during PQ key generation/upload"]))).catching(r("getErrorSafe")(e)).sendLogs("pq-prekeys-upload-failed");
		}
	}
	l.generateAndUploadPQPreKeys = S;
}), 98);
