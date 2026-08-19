__d("WAWebCommsE2ESmaxMockInjector", [
	"invariant",
	"WAComms",
	"WASmaxMockRunner",
	"WASmaxMocksWasm",
	"WAWap",
	"WAWebBuildConstants",
	"WAWebProcessKeyBundle",
	"WAWebSignalKeyApi",
	"WAWebSignalStoreApi",
	"WAWebWidFactory",
	"err",
	"nullthrows"
], (function(t, n, r, o, a, i, l, s) {
	var e = null, u = (function() {
		function e() {
			this.runner = null;
		}
		var t = e.prototype;
		return t.init = async function(t) {
			var e = t.mockFilePaths, n = t.variables, a = n === void 0 ? {} : n, i = t.responseMap, l = i === void 0 ? {} : i, u = t.deviceJid, m = u === void 0 ? "16005551839:1@s.whatsapp.net" : u, p = t.syncdKey, _ = p === void 0 ? new Uint8Array(32) : p, f = t.platformIdentityName, g = f === void 0 ? "alice" : f, h = t.contacts, y = h === void 0 ? [] : h, C = o("WAComms").getComms();
			C != null || s(0, 72330);
			var b = await Promise.all([
				(async function() {
					for (var t = {}, n = await Promise.all(e.map(d)), r = 0; r < e.length; ++r) t[e[r]] = n[r];
					return t;
				})(),
				c(),
				o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
				o("WAWebSignalStoreApi").waSignalStore.getOrGenSinglePreKey(o("WAWebSignalKeyApi").generatePreKeyPair),
				o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey()
			]), v = b[0], S = b[1], R = b[2], L = b[3], E = b[4];
			if (R == null || E == null) throw r("err")("Missing platform prekey information");
			var k = new (o("WASmaxMockRunner")).SmaxAutomaticMockRunnerBuilder(S, Object.keys(v), function(e) {
				return v[e];
			});
			k.addDeviceJid(m);
			for (var I of Object.entries(l)) {
				var T = I[0], D = I[1];
				k.addResponseMapping(T, D);
			}
			var x = k.build();
			return this.runner = x, this.setVariables(a), x.addSyncdKey(_), x.processPreKeyBundle(g, {
				registrationId: R.registrationId,
				identity: new Uint8Array(R.identityKeyPair.pubKey),
				preKeys: [{
					id: L.keyId,
					data: new Uint8Array(L.keyPair.pubKey),
					signature: null
				}],
				signedPreKey: {
					id: E.keyId,
					data: new Uint8Array(E.keyPair.pubKey),
					signature: new Uint8Array(E.signature)
				},
				privateIdentity: null
			}), await Promise.all([o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(L.keyId), this.$1(y)]), C.setOnBeforeCastStanzaForE2E(function(e) {
				try {
					var t = o("WAWap").encodeStanza(e);
					return x.match(t), [];
				} catch (e) {}
			}), x.subscribe(function(e) {
				if (e.type === "Injection") {
					var t = o("WAWap").decodeStanzaDebug(e.data);
					Promise.resolve(C.handleStanza(t, C.socketId, e.data.byteLength)).then(function(e) {
						if (!(e === "CLOSE_SOCKET" || e === "NO_ACK")) return C.castStanza(e);
					}).catch(function(e) {});
				}
			}), this;
		}, t.start = function(t) {
			var e = o("WAComms").getComms(), n = this.runner;
			e != null || s(0, 72330), n != null || s(0, 72331);
			try {
				n.start(t);
			} catch (e) {}
		}, t.setVariables = function(t) {
			var e = this.runner;
			e != null || s(0, 72332);
			for (var n of Object.entries(t)) {
				var r = n[0], o = n[1];
				if (typeof o == "number") {
					var a = Math.trunc(o);
					a !== o && "" + r + o, e.setVariable(r, String(a));
				} else e.setVariable(r, o);
			}
		}, t.end = function(t) {
			t === void 0 && (t = !1);
			var e = this.runner;
			e != null || s(0, 72333), t || e.complete(), e.cleanup(), this.runner = null;
		}, t.$1 = async function(t) {
			var e = this.runner;
			e != null || s(0, 72331), await Promise.all(t.map(async function(t) {
				var n = t.jid, a = t.name, i = e.getPreKeyBundleForIdentity(a, 1), l = i.identity, s = i.preKeys, u = i.registrationId, c = i.signedPreKey;
				try {
					await o("WAWebProcessKeyBundle").processKeyBundles([{
						deviceIdentity: null,
						identity: l,
						key: {
							id: s[0].id,
							pubkey: s[0].data
						},
						regId: u,
						skey: {
							id: c.id,
							pubkey: c.data,
							signature: r("nullthrows")(c.signature)
						},
						wid: o("WAWebWidFactory").createDeviceWidOrThrow(n)
					}]);
				} catch (e) {}
			}));
		}, e;
	})();
	async function c() {
		return e != null || (e = await r("WASmaxMocksWasm")({ instantiateWasm: function(t, n) {
			return WebAssembly.instantiateStreaming(self.fetch(o("WAWebBuildConstants").WEB_PUBLIC_PATH + "smax-mocks/smax_mocks_wasm.wasm"), t).then(function(e) {
				n(e.instance);
			}).catch(function(e) {}), {};
		} }), o("WASmaxMockRunner").getSmaxLogEmitter(e).subscribe(function(e) {})), e;
	}
	async function d(e) {
		e.endsWith(".xml") || s(0, 72334);
		var t = o("WAWebBuildConstants").WEB_PUBLIC_PATH + "smax-mocks/" + e, n = await self.fetch(t);
		if (!n.ok) throw r("err")(`Cannot find mock in path:
` + t);
		return n.text();
	}
	var m = new u(), p = m;
	l.default = p;
}), 98);
