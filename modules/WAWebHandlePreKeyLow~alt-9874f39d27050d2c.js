__d("WAWebHandlePreKeyLow", [
	"WADeprecatedWapParser",
	"WALogger",
	"WASignalKeys",
	"WAWap",
	"WAWebEventsWaitForOfflineDeliveryEnd",
	"WAWebPQGatingUtils",
	"WAWebSignalStoreApi",
	"WAWebUploadPreKeysJob",
	"getErrorSafe",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m = r("requireDeferred")("WAPQUploadPreKeysProtocol").__setRef("WAWebHandlePreKeyLow"), p = r("requireDeferred")("WASignalPQKeys").__setRef("WAWebHandlePreKeyLow"), _ = r("requireDeferred")("WAWebKyberPreKeyStore").__setRef("WAWebHandlePreKeyLow"), f = new Set(), g = new (r("WADeprecatedWapParser"))("lowKeyParser", function(e) {
		e.assertTag("notification"), e.assertAttr("type", "encrypt"), e.assertFromServer();
		var t = e.maybeChild("count"), n = e.maybeChild("pq_count");
		return t == null && n == null && e.child("count"), {
			hasLegacyCount: t != null,
			hasPqCount: n != null,
			stanzaId: e.attrString("id")
		};
	});
	async function h(t, n) {
		var r = g.parse(t);
		if (r.error) throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handlePreKeyLow: Parsing Error: ", ""])), r.error.toString()), r.error;
		var a = r.success, i = o("WAWap").wap("ack", {
			to: o("WAWap").S_WHATSAPP_NET,
			id: o("WAWap").CUSTOM_STRING(a.stanzaId),
			class: "notification"
		});
		return !a.hasLegacyCount || f.has(n) ? (a.hasPqCount && o("WAWebPQGatingUtils").isPqKeysUploadEnabled() && b(), i) : (f.add(n), o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(!1), await o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd(), o("WAWebUploadPreKeysJob").uploadPreKeys().then(function() {
			return o("WAWebPQGatingUtils").isPqKeysUploadEnabled() && b(), i;
		}).finally(function() {
			return void f.delete(n);
		}));
	}
	var y = 10, C = null;
	async function b() {
		return C != null || (C = v().finally(function() {
			C = null;
		})), C;
	}
	async function v() {
		try {
			var e = await o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo();
			if (e == null) return;
			var t = o("WASignalKeys").makeKeyPairFromArrayBuffers(e.identityKeyPair.pubKey, e.identityKeyPair.privKey), n = await Promise.all([
				m.load(),
				p.load(),
				_.load()
			]), a = n[0].addPQPreKeysProtocol, i = n[1].generateKyberPreKeys, l = n[2], f = l.markKyberPreKeysAsSent, g = l.reserveKyberPreKeyIds, h = l.saveKyberPreKeys, C = await g(y);
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"replenishPQPreKeys: generating ",
				" PQ prekeys starting at ID ",
				""
			])), y, C);
			var b = await i(C, y, t), v = b.map(function(e) {
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
			});
			await h(v);
			var S = await a(b);
			S.success ? (await f(b.map(function(e) {
				return e.id;
			})), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["replenishPQPreKeys: uploaded ", " PQ prekeys"])), b.length)) : o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["replenishPQPreKeys: upload failed, keys stored locally"]))).sendLogs("pq-replenish-upload-fail");
		} catch (e) {
			o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["replenishPQPreKeys: error"]))).catching(r("getErrorSafe")(e)).sendLogs("pq-replenish-error");
		}
	}
	l.default = h;
}), 98);
