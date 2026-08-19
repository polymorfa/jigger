__d("WAWebKyberPreKeyStore", [
	"WALogger",
	"WASignalPQTypes",
	"WAWebSignalConst",
	"WAWebSignalStorage",
	"WAWebSignalStorageUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = 1;
	function m(e, t) {
		if (e == null) return t;
		var n = e.value;
		return typeof n == "number" ? n : t;
	}
	function p(e) {
		return e == null ? !1 : e.value === !0;
	}
	async function _() {
		var e = await o("WAWebSignalStorage").getMetaTable().get(o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID);
		return m(e, d);
	}
	async function f() {
		return _();
	}
	async function g(e) {
		return o("WAWebSignalStorageUtils").getStorage().lock(["signal-meta-store"], async function() {
			var t = await o("WAWebSignalStorage").getMetaTable().get(o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID), n = m(t, d);
			return await o("WAWebSignalStorage").getMetaTable().createOrReplace({
				key: o("WAWebSignalConst").META_KEYS.NEXT_KYBER_PK_ID,
				value: (n + e) % o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER
			}), n;
		});
	}
	async function h(t) {
		t.length !== 0 && (await o("WAWebSignalStorageUtils").getStorage().lock(["kyber-prekey-store"], async function() {
			await o("WAWebSignalStorage").getKyberPreKeyTable().bulkCreateOrReplace(t);
		}), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["saveKyberPreKeys: saved ", " keys"])), t.length));
	}
	async function y(e) {
		await o("WAWebSignalStorageUtils").getStorage().lock(["kyber-last-resort-key-store"], async function() {
			await o("WAWebSignalStorage").getKyberLastResortKeyTable().createOrReplace(e);
		}), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["saveKyberLastResortKey: saved key ID ", ""])), e.keyId);
	}
	async function C(e) {
		return o("WAWebSignalStorage").getKyberPreKeyTable().get(e);
	}
	async function b() {
		var e = await o("WAWebSignalStorage").getKyberLastResortKeyTable().all();
		return e.length === 0 ? null : e.reduce(function(e, t) {
			return t.keyId > e.keyId ? t : e;
		});
	}
	async function v() {
		var e = await o("WAWebSignalStorage").getKyberPreKeyTable().all();
		return e.filter(function(e) {
			return e.sentToServer !== !0;
		});
	}
	async function S() {
		var e = await Promise.all([o("WAWebSignalStorage").getKyberPreKeyTable().all(), o("WAWebSignalStorage").getKyberLastResortKeyTable().all()]), t = e[0], n = e[1];
		return {
			kyberPreKeys: t.map(function(e) {
				return {
					keyId: e.keyId,
					publicKey: new Uint8Array(e.keyPair.pubKey)
				};
			}).sort(function(e, t) {
				return e.keyId - t.keyId;
			}),
			kyberLastResortKeys: n.map(function(e) {
				return {
					keyId: e.keyId,
					publicKey: new Uint8Array(e.keyPair.pubKey),
					signature: new Uint8Array(e.signature)
				};
			}).sort(function(e, t) {
				return e.keyId - t.keyId;
			})
		};
	}
	async function R(e) {
		var t = o("WAWebSignalStorage").getKyberPreKeyTable();
		await Promise.all(e.map(async function(e) {
			var n = await t.get(e);
			n != null && await t.createOrReplace(babelHelpers.extends({}, n, { sentToServer: !0 }));
		})), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["markKyberPreKeysAsSent: marked ", " keys as sent"])), e.length);
	}
	async function L(e) {
		await o("WAWebSignalStorage").getKyberPreKeyTable().remove(e);
	}
	async function E() {
		await o("WAWebSignalStorageUtils").getStorage().lock([
			"signal-meta-store",
			"kyber-prekey-store",
			"kyber-last-resort-key-store"
		], async function() {
			var e = await Promise.all([o("WAWebSignalStorage").getKyberPreKeyTable().all(), o("WAWebSignalStorage").getKyberLastResortKeyTable().all()]), t = e[0], n = e[1];
			await Promise.all([].concat(t.map(function(e) {
				return o("WAWebSignalStorage").getKyberPreKeyTable().remove(e.keyId);
			}), n.map(function(e) {
				return o("WAWebSignalStorage").getKyberLastResortKeyTable().remove(e.keyId);
			}), [o("WAWebSignalStorage").getMetaTable().createOrReplace({
				key: o("WAWebSignalConst").META_KEYS.PQ_MIGRATED,
				value: !1
			})]));
		}), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["clearKyberPreKeysAndMigrationState: cleared local PQ key state"])));
	}
	async function k() {
		var e = await o("WAWebSignalStorage").getMetaTable().get(o("WAWebSignalConst").META_KEYS.PQ_MIGRATED), t = p(e);
		return t;
	}
	async function I(e) {
		await o("WAWebSignalStorage").getMetaTable().createOrReplace({
			key: o("WAWebSignalConst").META_KEYS.PQ_MIGRATED,
			value: e
		});
	}
	l.getNextKyberPreKeyId = _, l.getNextKyberLastResortKeyId = f, l.reserveKyberPreKeyIds = g, l.saveKyberPreKeys = h, l.saveKyberLastResortKey = y, l.loadKyberPreKey = C, l.loadLatestKyberLastResortKey = b, l.getUnsentKyberPreKeys = v, l.loadKyberKeysForDigest = S, l.markKyberPreKeysAsSent = R, l.removeKyberPreKey = L, l.clearKyberPreKeysAndMigrationState = E, l.isPQMigrated = k, l.setPQMigrated = I;
}), 98);
