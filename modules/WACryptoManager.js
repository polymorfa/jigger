__d("WACryptoManager", [
	"Promise",
	"WABridge",
	"WACryptoLibrary",
	"WACryptoUtils",
	"WAGlobals",
	"WAJids",
	"WALogger",
	"WALoggerTag",
	"WAOdsEnums",
	"WAPromiseQueue",
	"WAResultOrError",
	"WASignalCipher",
	"WASignalGroupSession",
	"WASignalKeys",
	"WASignalLocalStorageProtocol.pb",
	"WASignalOther",
	"WASignalSessions",
	"WASignalSignatures",
	"WATagsLogger",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"err",
	"nullthrows",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y = r("requireDeferred")("WACryptoLibraryConfig").__setRef("WACryptoManager"), C = r("requireDeferred")("WACryptoPQSession").__setRef("WACryptoManager"), b = o("WATagsLogger").TAGS([r("WALoggerTag").CryptoManager]), v = { type: "default" };
	function S(e) {
		return { flush: function() {
			return e.storage.savePendingToDatabase().then(function() {});
		} };
	}
	function R(e) {
		return {
			regInfo: e.regInfo,
			network: e.network,
			storage: e.storage
		};
	}
	function L(e, t, n, r, o) {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a) {
			var i = yield r(t, a);
			if (i != null && n.type !== "requestNewSession") {
				var l = i;
				if (n.type === "default") return o("WAResultOrError").makeResult(l);
				if (l.aliceBaseKey != null && n.session.baseKey != null && (n.type, !o("WACryptoUtils").uint8ArraysEqual(n.session.baseKey, l.aliceBaseKey))) return o("WAResultOrError").makeResult(l);
			}
			var s;
			if (n.type === "useSession") s = n.session.keys;
			else {
				n.type;
				var u = yield e.network.requestKeys(t);
				if (!u.success) return u;
				s = u.value.keys, n.type === "compareTSAndUseSession" && n.session.timestamp >= u.value.timestamp && (s = n.session.keys);
			}
			if (s.kyberKey != null) {
				var m = yield y.load(), p = m.getCryptoLibraryConfig;
				if (p().isPq1on1MessageEnabled === !0) try {
					var _ = yield C.load(), f = _.createOutgoingSessionPQ, g = yield f(e.regInfo, s);
					if (g.success) return o("WAResultOrError").makeResult(g.value.session);
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[sessions] PQ session creation failed; falling back to X3DH: ", ""])), g.error);
				} catch (e) {
					o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[sessions] PQ session creation threw; falling back to X3DH: ", ""])), e);
				}
			}
			var h = yield o("WACryptoLibrary").createOutgoingSession(e.regInfo, s);
			return h.success ? o("WAResultOrError").makeResult(h.value) : h;
		}), E.apply(this, arguments);
	}
	function k(e, t, n, r) {
		return o("WACryptoLibrary").establishOutgoingSession({ handleNewSession: e.storage.handleNewSession }, e.regInfo, t, n, r);
	}
	function I(e, t) {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var r = yield e.storage.loadSessions(t), a = t.filter(function(e) {
				return !r.has(e);
			});
			if (a.length === 0) return r;
			var i = yield e.network.bulkRequestKeys(a);
			if (!i.success) return o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[sessions] fail during key requesting"]))), r;
			for (var l of r.entries()) {
				var s = l[0], u = l[1];
				u.sendChain.nextMsgIndex >= o("WAGlobals").getConfig().sessionDropIfTooOld() && (r.delete(s), o("WABridge").getBridge().fireAndForget("event", "odsBumpEntityKey", {
					entity: o("WAOdsEnums").Entity.WA_LONG_SESSION_DROP,
					key: "decryption"
				}));
			}
			var c = i.value, d = !1;
			for (var g of c.values()) if (g.keys.kyberKey != null) {
				d = !0;
				break;
			}
			var h = !1;
			if (d) {
				var b = yield y.load(), v = b.getCryptoLibraryConfig;
				h = v().isPq1on1MessageEnabled === !0;
			}
			var S = new (o("WAPromiseQueue")).PromiseQueue();
			return c.forEach(function(t, a) {
				S.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (h && t.keys.kyberKey != null) try {
						var n = yield C.load(), i = n.createOutgoingSessionPQ, l = yield i(e.regInfo, t.keys);
						if (l.success) {
							r.set(a, l.value.session);
							return;
						}
						o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[sessions] PQ bulk session creation failed; falling back to X3DH: ", ""])), l.error);
					} catch (e) {
						o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[sessions] PQ bulk session creation threw; falling back to X3DH: ", ""])), e);
					}
					var s = yield o("WACryptoLibrary").createOutgoingSession(e.regInfo, t.keys);
					s.success === !1 ? o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[sessions] Failed to create a session"]))) : r.set(a, s.value);
				}));
			}), yield S.wait(), r;
		}), T.apply(this, arguments);
	}
	function D(e, t) {
		return x.apply(this, arguments);
	}
	function x() {
		return x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var a = Array.from(t.keys());
			o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[SendMessage] sendWrittenMsg bulkEncryptContent"])));
			var i = yield I(e, a), l = new Map();
			return (h || (h = n("Promise"))).all(Array.from(i.entries()).map((function() {
				var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
					var a, i = n[0], s = n[1], u = yield o("WASignalCipher").encryptMsg(s, r("nullthrows")((a = t.get(i)) == null ? void 0 : a.plaintext)), c = u[0], d = u[1];
					return l.set(i, babelHelpers.extends({}, d, { baseKey: null })), e.storage.handleNewSession(i, c, c.remote.pubKey);
				});
				return function(e) {
					return a.apply(this, arguments);
				};
			})())).then(function() {
				return o("WAResultOrError").makeResult(l);
			});
		}), x.apply(this, arguments);
	}
	function $(e, t, n, r, a) {
		return o("WACryptoLibrary").encryptContent({
			loadSession: function(n) {
				return L(e, n, r, e.storage.loadSession, "cryptoManagerEncryptContent").then(function(e) {
					return e.success === !0 ? e.value : null;
				});
			},
			handleNewSession: e.storage.handleNewSession
		}, t, n, a);
	}
	function P(e, t, n, r) {
		var a, i;
		return o("WACryptoLibrary").decryptContent({
			loadSession: e.storage.loadSession,
			handleNewSession: e.storage.handleNewSession,
			loadSignedPreKey: e.storage.loadSignedPreKey,
			loadOneTimePreKey: e.storage.loadOneTimePreKey,
			loadKyberPreKey: (a = e.storage.loadKyberPreKey) != null ? a : null,
			deleteKyberPreKey: (i = e.storage.deleteKyberPreKey) != null ? i : null
		}, e.regInfo, t, n, r);
	}
	function N(e, t) {
		return M.apply(this, arguments);
	}
	function M() {
		return M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield e.storage.loadSession(t, "getParticipantInfo");
			return n == null ? void 0 : n.remote;
		}), M.apply(this, arguments);
	}
	function w(e) {
		return A.apply(this, arguments);
	}
	function A() {
		return A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n, a = yield e.storage.getLastPreKeyGenerationId(), i = ((t = a == null ? void 0 : a.lastPreKeyId) != null ? t : 0) + 1, l = o("WASignalKeys").makePreKeys(i, 1)[0], s = yield e.storage.saveOneTimePreKey({
				keyId: l.plainObject.id,
				encoded: l.record
			});
			if (s.success) return l.plainObject;
			throw r("err")("Cannot save one time prekey: " + s.error + ", LastPreKeyId: " + ((n = a == null ? void 0 : a.lastPreKeyId) != null ? n : 0));
		}), A.apply(this, arguments);
	}
	function F(e, t) {
		return O.apply(this, arguments);
	}
	function O() {
		return O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n;
			t === void 0 && (t = o("WAGlobals").getConfig().maxPrekeysToUpload());
			var r = yield e.storage.getLastPreKeyGenerationId(), a = o("WASignalKeys").makePreKeys(((n = r == null ? void 0 : r.lastPreKeyId) != null ? n : 0) + 1, t);
			return e.storage.savePreKeysGeneration(a.map(function(e) {
				var t = e.plainObject, n = e.record;
				return {
					keyId: t.id,
					encoded: n
				};
			}));
		}), O.apply(this, arguments);
	}
	function B(t) {
		return t.storage.loadLatestSignedPreKey().then(function(n) {
			if (n.success === !1) {
				var a, i, l;
				throw b.TAGS([r("WALoggerTag").SignedPrekey]).ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to generate signed prekey ", ""])), n == null || (a = n.payload) == null ? void 0 : a.toString()), r("err")("Failed to generate signed prekey: " + ((i = n == null || (l = n.payload) == null ? void 0 : l.message) != null ? i : ""));
			}
			var u = n.value, c = o("WASignalSignatures").deserializeSignedPreKey(u);
			if (c == null) throw b.TAGS([r("WALoggerTag").SignedPrekey]).ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to deserialize signed prekey: ", ""])), n), r("err")("failed to deserialize signed prekey");
			var d = c.id + 1 >= o("WASignalKeys").PRE_KEY_NON_INCLUSIVE_UPPER_BORDER ? 1 : c.id + 1;
			return W(t, d);
		});
	}
	function W(e, t) {
		var n = o("WASignalSignatures").makeSignedPreKey(t, o("WATimeUtils").unixTimeMs(), e.regInfo.staticKeyPair), a = o("WASignalSignatures").serializeSignedPreKeyForPrivateStorage(n);
		return e.storage.saveSignedPreKeyIfNew(n.id, a).then(function(e) {
			return e.type === "success" ? o("WAResultOrError").makeResult(n) : (e.type, o("WAResultOrError").makeResult(e.key));
		}).then(function(e) {
			if (!e.success) {
				var t, n;
				throw b.TAGS([r("WALoggerTag").SignedPrekey]).ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to generate signed prekey with id: ", ""])), e), r("err")("Unexpected error when generateSignedPreKeyWithId: " + ((t = e == null || (n = e.payload) == null ? void 0 : n.message) != null ? t : e.error));
			}
			return e.value;
		});
	}
	function q(e, t, n, r) {
		return o("WACryptoLibrary").encryptGroupContent({
			loadSenderKeySession: e.storage.loadSenderKeySession,
			saveSenderKeySession: e.storage.saveSenderKeySession
		}, t, n, r);
	}
	function U(e, t, n, r, a) {
		return o("WACryptoLibrary").decryptGroupContent({
			loadSenderKeySession: e.storage.loadSenderKeySession,
			saveSenderKeySession: e.storage.saveSenderKeySession
		}, t, n, r, a);
	}
	function V(e, t, n, r) {
		return o("WACryptoLibrary").saveSenderKeySession({ saveSenderKeySession: e.storage.saveSenderKeySession }, t, n, r);
	}
	function H(e, t, n) {
		return G.apply(this, arguments);
	}
	function G() {
		return G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield w(e);
			return o("WACryptoLibrary").rotateGroupSenderKey({ saveSenderKeySession: e.storage.saveSenderKeySession }, t, n, r.keyPair);
		}), G.apply(this, arguments);
	}
	function z(e) {
		return (h || (h = n("Promise"))).resolve().then(function() {
			return {
				regId: o("WASignalOther").makeRegistrationId(e),
				staticKeyPair: o("WASignalKeys").makeKeyPair(),
				authKeyPair: o("WASignalKeys").makeKeyPair()
			};
		});
	}
	function j(e) {
		return o("WASignalOther").encodeSignalProto(o("WASignalLocalStorageProtocol.pb").RecordStructureSpec, o("WASignalSessions").serializeSession(e));
	}
	function K(e) {
		return o("WASignalOther").decodeSignalProto(o("WASignalLocalStorageProtocol.pb").RecordStructureSpec, e, o("WASignalSessions").parseSessionFromRecord);
	}
	function Q(e) {
		return o("WASignalOther").encodeSignalProto(o("WASignalLocalStorageProtocol.pb").SenderKeyRecordStructureSpec, o("WASignalGroupSession").serializeSession(e));
	}
	function X(e) {
		return o("WASignalOther").decodeSignalProto(o("WASignalLocalStorageProtocol.pb").SenderKeyRecordStructureSpec, e, o("WASignalGroupSession").parseSessionFromRecord);
	}
	function Y(e) {
		return e;
	}
	function J(e, t) {
		return e + "|" + t;
	}
	function Z(e) {
		var t = e.split("|");
		if (t.length !== 2) throw r("err")("Incorrect ComplexSenderKey");
		return {
			groupId: o("WAJids").unsafeCoerceToGroupJid(t[0]),
			deviceId: o("WAJids").unsafeCoerceToDeviceJid(t[1])
		};
	}
	l.DEFAULT_SESSION_REQUEST = v, l.cryptoManagerFlushable = S, l.initCryptoManager = R, l.getSessionForRecipient = L, l.establishOutgoingSession = k, l.bulkEncryptContent = D, l.encryptContent = $, l.decryptContent = P, l.getParticipantInfo = N, l.generateOneTimePreKey = w, l.generatePreKeys = F, l.generateSignedPreKey = B, l.generateSignedPreKeyWithId = W, l.encryptGroupContent = q, l.decryptGroupContent = U, l.saveSenderKeySession = V, l.rotateGroupSenderKey = H, l.generateRegistrationInfo = z, l.encodeSession = j, l.decodeSession = K, l.encodeSenderKeySession = Q, l.decodeSenderKeySession = X, l.castToPreKeyGenerationId = Y, l.encodeSenderKey = J, l.decodeSenderKey = Z;
}), 98);
