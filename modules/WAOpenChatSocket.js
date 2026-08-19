__d("WAOpenChatSocket", [
	"Promise",
	"WABinary",
	"WACryptoCurve25519",
	"WAFrameSocket",
	"WALogger",
	"WANoiseHandshake",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x = "Noise_XX_25519_AESGCM_SHA256\0\0\0\0", $ = "Noise_IK_25519_AESGCM_SHA256\0\0\0\0", P = "Noise_XXfallback_25519_AESGCM_SHA256";
	function N(t, a, i, l, u) {
		var c = a || {}, d = c.ephemeral, m = c.payload, p = c.static;
		if (d == null || p == null || m == null) return (D || (D = n("Promise"))).reject(r("err")("doFullHandshakeCore server hello invalid proto"));
		t.authenticate(d), t.mixIntoKey(l.generateSharedSecret(d));
		var _ = t.decrypt(p, "doFullHandshakeCore: serverStaticCiphertext");
		t.mixIntoKey(_.then(function(e) {
			return l.generateSharedSecret(e);
		}));
		var f = t.decrypt(m, "doFullHandshakeCore: serverStaticCiphertext");
		return (D || (D = n("Promise"))).all([_, f]).then(function(t) {
			var n = t[0], r = t[1];
			return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["doFullHandshakeCore parsing and verifying server certificate"]))), u.processCertificate({
				certificate: r,
				serverStatic: n
			});
		}).then(function() {
			var e = t.encrypt(u.staticKeyPair.generatePublicKey());
			t.mixIntoKey(u.staticKeyPair.generateSharedSecret(d));
			var r = t.encrypt((D || (D = n("Promise"))).resolve(i));
			return D.all([e, r]);
		}).then(function(e) {
			var n = e[0], r = e[1];
			return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["doFullHandshakeCore client finish and deriving secrets"]))), t.send(u.encodeHandshakeFinish({
				static: n,
				payload: r
			})), t.finish();
		});
	}
	function M(e, t, n, r) {
		var a = new (o("WANoiseHandshake")).NoiseHandshake(e);
		a.start(x, r.protoHeader);
		var i = n.generatePublicKey();
		return a.authenticate(i), i.then(function(e) {
			return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["fullNoiseHandshake send hello"]))), a.sendAndReceive(r.encodeHandshakeHello({ ephemeral: e }));
		}).then(function(e) {
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["fullNoiseHandshake rcv hello"])));
			var i = r.decodeServerHello(e);
			return N(a, i, t, n, r);
		});
	}
	function w(e, t, a, i, l) {
		var s = new (o("WANoiseHandshake")).NoiseHandshake(e);
		o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake started"]))), s.start($, l.protoHeader);
		var u = i.generatePublicKey();
		o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake authenticate with server static key"]))), s.authenticate(a), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake authenticate with client ephemeral key"]))), s.authenticate(u), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake EC Agreement 1"]))), s.mixIntoKey(i.generateSharedSecret(a)), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake encrypt client static key"])));
		var c = s.encrypt(l.staticKeyPair.generatePublicKey()).catch(function(e) {
			return o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake failed to encrypt client static key: ", ""])), e), (D || (D = n("Promise"))).reject(e);
		});
		o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake EC Agreement 2"]))), s.mixIntoKey(l.staticKeyPair.generateSharedSecret(a));
		var L = s.encrypt((D || (D = n("Promise"))).resolve(t)).catch(function(e) {
			return o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake failed to encrypt client login props: ", ""])), e), (D || (D = n("Promise"))).reject(e);
		});
		return D.all([
			u,
			L,
			c
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake send hello"]))), s.sendAndReceive(l.encodeHandshakeHello({
				ephemeral: t,
				payload: n,
				static: r
			}));
		}).then(function(n) {
			o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake rcv hello"])));
			var a = l.decodeServerHello(n), u = a || {}, c = u.ephemeral, d = u.payload, m = u.static;
			if (m == null) {
				if (o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake continuing resume handshake"]))), !c) throw r("err")("serverHello missing serverEphemeral");
				if (!d) throw r("err")("serverHello missing certificateCiphertext");
				return s.authenticate(c), s.mixIntoKey(i.generateSharedSecret(c)), s.mixIntoKey(l.staticKeyPair.generateSharedSecret(c)), s.decrypt(d, "doResumeHandshake: certificateCiphertext").then(function() {
					return o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake deriving secrets"]))), s.finish();
				}).catch(function(n) {
					if ((n == null ? void 0 : n.name) === "OperationError") return M(e, t, i, l);
					throw n;
				});
			} else return o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["resumeNoiseHandshake performing fallback handshake"]))), A(e, a, t, i, l);
		});
	}
	function A(e, t, n, r, a) {
		var i = new (o("WANoiseHandshake")).NoiseHandshake(e);
		i.start(P, a.protoHeader);
		var l = r.generatePublicKey();
		return i.authenticate(l), o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["doFallbackHandshake continuing handshake with given server hello"]))), N(i, t, n, r, a);
	}
	function F(e, t, r) {
		return e.openSocket(r).then((function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
				if (!r.success) return r;
				var a = r.value;
				(D || (D = n("Promise"))).resolve().then(t).catch(function(e) {
					o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["openChatSocket onTcp error: ", ""])), e);
				});
				var i = void 0, l = e.edgeInfo;
				if (l) {
					var s = new (o("WABinary")).Binary();
					s.write("ED", 0, 1), s.writeUint8(l.byteLength >> 16), s.writeUint16(l.byteLength & 65535), s.writeBuffer(l), i = s.readByteArrayView(), o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["openChatSocket preIntro ", ""])), i);
				}
				var u = i ? o("WABinary").Binary.build(i, e.protoHeader).readByteArrayView() : e.protoHeader, c = new (o("WAFrameSocket")).FrameSocket(a, u), d = yield e.getClientPayload(), m = new (o("WACryptoCurve25519")).Curve25519(e.curveSignalDependencies), p = e.serverStaticKeyIfKnown();
				if (p) {
					var _;
					return o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["openChatSocket performing resume handshake"]))), (_ = e.preLogging) == null || _.onBeforeResumeHandshakeStarted == null || _.onBeforeResumeHandshakeStarted(), w(c, d, p, m, e).then(function(t) {
						var n;
						return (n = e.preLogging) == null || n.onAfterResumeHandshakeCompleted == null || n.onAfterResumeHandshakeCompleted(), o("WAResultOrError").makeResult(t);
					}).catch(function(t) {
						var r;
						return (r = e.preLogging) == null || r.onHandshakeError == null || r.onHandshakeError(t), (D || (D = n("Promise"))).reject(t);
					});
				} else {
					var f;
					return o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose(["openChatSocket performing full handshake"]))), (f = e.preLogging) == null || f.onBeforeFullHandshakeStarted == null || f.onBeforeFullHandshakeStarted(), M(c, d, m, e).then(function(t) {
						var n;
						return (n = e.preLogging) == null || n.onAfterFullHandshakeCompleted == null || n.onAfterFullHandshakeCompleted(), o("WAResultOrError").makeResult(t);
					}).catch(function(t) {
						var r;
						return (r = e.preLogging) == null || r.onHandshakeError == null || r.onHandshakeError(t), (D || (D = n("Promise"))).reject(t);
					});
				}
			});
			return function(e) {
				return r.apply(this, arguments);
			};
		})());
	}
	l.openChatSocket = F;
}), 98);
