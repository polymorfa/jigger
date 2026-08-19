__d("WAWebCommsE2ESmaxMockInjector", [
	"invariant",
	"Promise",
	"WAComms",
	"WASmaxMockRunner",
	"WASmaxMocksWasm",
	"WAWap",
	"WAWebBuildConstants",
	"WAWebProcessKeyBundle",
	"WAWebSignalKeyApi",
	"WAWebSignalStoreApi",
	"WAWebWidFactory",
	"asyncToGeneratorRuntime",
	"err",
	"nullthrows"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = null, c = (function() {
		function t() {
			this.runner = null;
		}
		var a = t.prototype;
		return a.init = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var a = t.mockFilePaths, i = t.variables, l = i === void 0 ? {} : i, u = t.responseMap, c = u === void 0 ? {} : u, m = t.deviceJid, _ = m === void 0 ? "16005551839:1@s.whatsapp.net" : m, f = t.syncdKey, g = f === void 0 ? new Uint8Array(32) : f, h = t.platformIdentityName, y = h === void 0 ? "alice" : h, C = t.contacts, b = C === void 0 ? [] : C, v = o("WAComms").getComms();
				v != null || s(0, 72330);
				var S = yield (e || (e = n("Promise"))).all([
					n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						for (var t = {}, r = yield (e || (e = n("Promise"))).all(a.map(p)), o = 0; o < a.length; ++o) t[a[o]] = r[o];
						return t;
					})(),
					d(),
					o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
					o("WAWebSignalStoreApi").waSignalStore.getOrGenSinglePreKey(o("WAWebSignalKeyApi").generatePreKeyPair),
					o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey()
				]), R = S[0], L = S[1], E = S[2], k = S[3], I = S[4];
				if (E == null || I == null) throw r("err")("Missing platform prekey information");
				var T = new (o("WASmaxMockRunner")).SmaxAutomaticMockRunnerBuilder(L, Object.keys(R), function(e) {
					return R[e];
				});
				T.addDeviceJid(_);
				for (var D of Object.entries(c)) {
					var x = D[0], $ = D[1];
					T.addResponseMapping(x, $);
				}
				var P = T.build();
				return this.runner = P, this.setVariables(l), P.addSyncdKey(g), P.processPreKeyBundle(y, {
					registrationId: E.registrationId,
					identity: new Uint8Array(E.identityKeyPair.pubKey),
					preKeys: [{
						id: k.keyId,
						data: new Uint8Array(k.keyPair.pubKey),
						signature: null
					}],
					signedPreKey: {
						id: I.keyId,
						data: new Uint8Array(I.keyPair.pubKey),
						signature: new Uint8Array(I.signature)
					},
					privateIdentity: null
				}), yield e.all([o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(k.keyId), this.$1(b)]), v.setOnBeforeCastStanzaForE2E(function(e) {
					try {
						var t = o("WAWap").encodeStanza(e);
						return P.match(t), [];
					} catch (e) {}
				}), P.subscribe(function(t) {
					if (t.type === "Injection") {
						var r = o("WAWap").decodeStanzaDebug(t.data);
						(e || (e = n("Promise"))).resolve(v.handleStanza(r, v.socketId, t.data.byteLength)).then(function(e) {
							if (!(e === "CLOSE_SOCKET" || e === "NO_ACK")) return v.castStanza(e);
						}).catch(function(e) {});
					}
				}), this;
			});
			function a(e) {
				return t.apply(this, arguments);
			}
			return a;
		})(), a.start = function(t) {
			var e = o("WAComms").getComms(), n = this.runner;
			e != null || s(0, 72330), n != null || s(0, 72331);
			try {
				n.start(t);
			} catch (e) {}
		}, a.setVariables = function(t) {
			var e = this.runner;
			e != null || s(0, 72332);
			for (var n of Object.entries(t)) {
				var r = n[0], o = n[1];
				if (typeof o == "number") {
					var a = Math.trunc(o);
					a !== o && "" + r + o, e.setVariable(r, String(a));
				} else e.setVariable(r, o);
			}
		}, a.end = function(t) {
			t === void 0 && (t = !1);
			var e = this.runner;
			e != null || s(0, 72333), t || e.complete(), e.cleanup(), this.runner = null;
		}, a.$1 = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var a = this.runner;
				a != null || s(0, 72331), yield (e || (e = n("Promise"))).all(t.map((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = e.jid, n = e.name, i = a.getPreKeyBundleForIdentity(n, 1), l = i.identity, s = i.preKeys, u = i.registrationId, c = i.signedPreKey;
						try {
							yield o("WAWebProcessKeyBundle").processKeyBundles([{
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
								wid: o("WAWebWidFactory").createDeviceWidOrThrow(t)
							}]);
						} catch (e) {}
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})()));
			});
			function a(e) {
				return t.apply(this, arguments);
			}
			return a;
		})(), t;
	})();
	function d() {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			return u != null || (u = yield r("WASmaxMocksWasm")({ instantiateWasm: function(t, n) {
				return WebAssembly.instantiateStreaming(self.fetch(o("WAWebBuildConstants").WEB_PUBLIC_PATH + "smax-mocks/smax_mocks_wasm.wasm"), t).then(function(e) {
					n(e.instance);
				}).catch(function(e) {}), {};
			} }), o("WASmaxMockRunner").getSmaxLogEmitter(u).subscribe(function(e) {})), u;
		}), m.apply(this, arguments);
	}
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			e.endsWith(".xml") || s(0, 72334);
			var t = o("WAWebBuildConstants").WEB_PUBLIC_PATH + "smax-mocks/" + e, n = yield self.fetch(t);
			if (!n.ok) throw r("err")("Cannot find mock in path:\n" + t);
			return n.text();
		}), _.apply(this, arguments);
	}
	var f = new c(), g = f;
	l.default = g;
}), 98);
