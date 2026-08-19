__d("WAMockServer", [
	"Promise",
	"WAComms",
	"WACryptoManager",
	"WAFakeSocket",
	"WAGetKeysForUpload",
	"WAGlobals",
	"WAResolvable",
	"WASmaxMockRunner",
	"WASmaxMocksWasm",
	"WATagsLogger",
	"WAWap",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L = null, E = o("WATagsLogger").TAGS(["WAMockServer"]);
	function k() {
		return L == null && (L = new I()), L;
	}
	var I = (function() {
		function t() {
			this.runner = null, this.$1 = new Map(), this.$2 = new (o("WAResolvable")).Resolvable();
		}
		var a = t.prototype;
		return a.setVariables = function(n) {
			if (this.runner == null) throw r("err")("SMAX runner should be initialized before calling setVariables");
			for (var t of Object.entries(n)) {
				var o = t[0], a = t[1];
				if (typeof a == "number") {
					var i, l = Math.trunc(a);
					l !== a && E.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"Cannot pass float values for variables to SMAX for ",
						"=",
						""
					])), o, a), (i = this.runner) == null || i.setVariable(o, String(l));
				} else {
					var s;
					(s = this.runner) == null || s.setVariable(o, a);
				}
			}
		}, a.waitForInit = function() {
			return this.$2.promise;
		}, a.init = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t, a = this, i = e.currentUserAlias, l = i === void 0 ? "alice" : i, p = e.mocks, _ = e.wasmUrl, f = e.variables, g = f === void 0 ? {} : f, h = Date.now();
				E.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Mock Server is ready to start initialization: ", ""])), Date.now() - h);
				var y = yield (R || (R = n("Promise"))).all([
					T(_),
					x(p),
					P()
				]), C = y[0], b = y[1], v = y[2];
				E.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Mock Server resources are loaded: ", ""])), Date.now() - h);
				var S = new (o("WASmaxMockRunner")).SmaxAutomaticMockRunnerBuilder(C, Array.from(p.keys()), function(e) {
					var t;
					return (t = b.get(e)) != null ? t : "";
				});
				this.runner = S.build(), this.setVariables(g), (t = this.runner) == null || t.processPreKeyBundle(l, v);
				var L = o("WAComms").getComms();
				if (L == null) return (R || (R = n("Promise"))).reject("Comms should be initialized before the SMAX mock is loaded");
				L.setSocket(new (o("WAFakeSocket")).FakeSocket()), L.setOnBeforeCastStanzaForE2E(function(e) {
					try {
						var t, n, i = o("WAWap").encodeStanza(e), l = (t = (n = a.runner) == null ? void 0 : n.match(i)) != null ? t : [], s = [];
						for (var u of l) if (u.type === "Injection") s.push(o("WAWap").decodeStanzaDebug(u.data));
						else if (u.type === "SequenceCompleted") {
							var m = u.name, p = a.$1.get(m);
							if (p != null) p.resolve(), a.$1.delete(m);
							else {
								var _ = new (o("WAResolvable")).Resolvable();
								_.resolve(), a.$1.set(m, _);
							}
							E.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Sequence/Mock ", " is complete"])), m);
						}
						return s;
					} catch (e) {
						var f = r("getErrorSafe")(e);
						E.DEV(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Error on onBeforeCastStanzaForE2E: ", ""])), f.toString());
					}
				}), yield L.startHandlingRequests(), E.LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Mock Server is ready: ", ""])), Date.now() - h), this.$2.resolve();
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.runMock = function(t) {
			var e = t.mockName, r = t.variables, a = r === void 0 ? {} : r, i = this.$1.get(e);
			if (i != null) return this.$1.delete(e), i.promise;
			this.setVariables(a);
			var l = this.runner, s = o("WAComms").getComms();
			if (s == null) return (R || (R = n("Promise"))).reject("Comms is not inititalized");
			if (l == null) return (R || (R = n("Promise"))).reject("UMR is not inititalized");
			var u = new (o("WAResolvable")).Resolvable(), c = l.start(e);
			this.$1.set(e, u);
			for (var d of c) if (d.type === "Injection") {
				var m = o("WAWap").decodeStanzaDebug(d.data);
				E.LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"Injecting ",
					" socketId: ",
					""
				])), m.tag, s.socketId), s.handleStanza(m, s.socketId, d.data.byteLength);
			} else d.type === "SequenceCompleted" && (this.$1.delete(e), u.resolve(), E.LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Sequence/Mock ", " is complete"])), e));
			return u.promise;
		}, t;
	})();
	function T(e) {
		return D.apply(this, arguments);
	}
	function D() {
		return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = Date.now(), n = yield r("WASmaxMocksWasm")({ instantiateWasm: function(n, r) {
				return WebAssembly.instantiateStreaming(self.fetch(e), n).then(function(e) {
					r(e.instance);
				}).catch(function(e) {
					E.DEV(C || (C = babelHelpers.taggedTemplateLiteralLoose(["Error on downloading UMR Wasm: ", ""])), e.toString());
				}), {};
			} });
			return o("WASmaxMockRunner").getSmaxLogEmitter(n).subscribe(function(e) {
				E.DEV(b || (b = babelHelpers.taggedTemplateLiteralLoose(["", ""])), e);
			}), E.LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["UMR is ready: ", ""])), Date.now() - t), n;
		}), D.apply(this, arguments);
	}
	function x(e) {
		return $.apply(this, arguments);
	}
	function $() {
		return $ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = Date.now(), o = new Map(yield (R || (R = n("Promise"))).all(Array.from(e.keys()).map((function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var n, o = (n = e.get(t)) != null ? n : "", a = yield self.fetch(o);
					if (!a.ok) throw r("err")("Cannot find mock in path:\n" + o);
					return [t, yield a.text()];
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})())));
			return E.LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([" Mocks are ready: ", ""])), Date.now() - t), o;
		}), $.apply(this, arguments);
	}
	function P() {
		var e = Date.now();
		return E.LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Start preparing prekey bundle"]))), o("WAGlobals").getWaOneQueue().enqueue((function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = t.cryptoManager;
				E.LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Prekey bundle is enqueued: ", ""])), Date.now() - e);
				var a = yield o("WACryptoManager").generatePreKeys(n, 1);
				if (!a.success) {
					var i, l;
					throw r("err")("Cannot generate keys: " + a.error + ", " + ((i = (l = a.payload) == null ? void 0 : l.toString()) != null ? i : ""));
				}
				E.LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["PreKeys are generated: ", ""])), Date.now() - e);
				var s = yield o("WAGetKeysForUpload").getKeysForUpload(n, a.value);
				if (!s.success) {
					var u, c;
					throw r("err")("Cannot load crypto keys: " + s.error + ", " + ((u = (c = s.payload) == null ? void 0 : c.toString()) != null ? u : ""));
				}
				E.LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["PreKey bundle is ready: ", ""])), Date.now() - e);
				var d = s.value.preKeys[0];
				return {
					identity: new Uint8Array(n.regInfo.staticKeyPair.publicKey),
					preKeys: [{
						data: new Uint8Array(d.keyPair.publicKey),
						id: d.id,
						signature: null
					}],
					privateIdentity: null,
					registrationId: n.regInfo.regId,
					signedPreKey: {
						data: new Uint8Array(s.value.signedPreKey.keyPair.publicKey),
						id: s.value.signedPreKey.id,
						signature: new Uint8Array(s.value.signedPreKey.signature)
					}
				};
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), {
			afterInit: !1,
			flush: !0,
			operationType: "generate_prekeys"
		});
	}
	l.default = k;
}), 98);
