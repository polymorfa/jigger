__d("WAWebAccountLinkingCryptoUtils", [
	"WABase64",
	"WALogger",
	"WAWebAccountLinkingAPI",
	"WAWebAccountLinkingConstants",
	"WAWebCryptoCurve25519CalculateSignature",
	"WAWebDirectConnectionX509",
	"WAWebRSAPkcs1v15",
	"WAWebSignalProtocolStore",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	async function m() {
		var e = await self.crypto.subtle.generateKey({
			name: "RSA-OAEP",
			hash: "SHA-1",
			modulusLength: 2048,
			publicExponent: new Uint8Array([
				1,
				0,
				1
			])
		}, !0, ["encrypt", "decrypt"]), t = e.privateKey, n = e.publicKey;
		return {
			privateKey: t,
			publicKey: n
		};
	}
	async function p() {
		return self.crypto.subtle.generateKey({
			name: "AES-GCM",
			length: 256
		}, !0, ["encrypt", "decrypt"]);
	}
	async function _(t) {
		var n = t[0], r = t[1], a, i;
		if (n.subject.isEqual(r.issuer)) a = n, i = r;
		else if (r.subject.isEqual(n.issuer)) a = r, i = n;
		else return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Certificate Chain Validation Failed"]))), null;
		var l = await g(), s = await o("WAWebDirectConnectionX509").validateCertificates([a, i], [l]);
		return s.result ? i : null;
	}
	async function f(e) {
		var t = await o("WAWebDirectConnectionX509").extractCertificates(e);
		if (t.length !== 2) throw r("err")("[WAFFLE] Payload encryption certificate chain is invalid");
		var n = await _(t);
		if (n == null) throw r("err")("[WAFFLE] Payload encryption certificate validation failed");
		return n.getPublicKey({ algorithm: {
			algorithm: {
				name: "RSA-OAEP",
				hash: { name: "SHA-1" }
			},
			usages: ["encrypt"]
		} });
	}
	async function g() {
		var e = "-----BEGIN CERTIFICATE-----", t = "-----END CERTIFICATE-----", n = e + `
` + o("WAWebAccountLinkingConstants").ProdRootCertificatePem + `
` + t, r = await o("WAWebDirectConnectionX509").extractCertificates(n);
		return r.length !== 1 && o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Root certificate failed extraction"]))), r[0];
	}
	async function h(e) {
		var t = new TextEncoder(), n = t.encode(e), r = self.crypto.getRandomValues(new Uint8Array(12)), o = await p(), a = await self.crypto.subtle.encrypt({
			name: "AES-GCM",
			iv: r,
			length: 256
		}, o, n), i = new Uint8Array(a), l = i.slice(-16), s = i.slice(0, -16);
		return {
			key: o,
			cipherText: s,
			tag: l,
			iv: r
		};
	}
	async function y(e, t, n, r) {
		var o = new Uint8Array(t.length + r.length);
		o.set(t), o.set(r, t.length);
		var a = await self.crypto.subtle.decrypt({
			name: "AES-GCM",
			iv: n,
			length: 256
		}, e, o);
		return a;
	}
	async function C(e, t) {
		return self.crypto.subtle.encrypt({
			name: "RSA-OAEP",
			padding: "OAEP"
		}, e, t);
	}
	async function b(e, t) {
		return self.crypto.subtle.decrypt({
			name: "RSA-OAEP",
			padding: "OAEP"
		}, e, t);
	}
	async function v(e, t) {
		t === void 0 && (t = !1);
		var n = await self.crypto.subtle.exportKey("spki", e), r = new Uint8Array(n), o = btoa(Array.from(r, function(e) {
			return String.fromCharCode(e);
		}).join(""));
		return t ? `-----BEGIN PUBLIC KEY-----
` + o + `
-----END PUBLIC KEY-----
` : "-----BEGIN PUBLIC KEY-----" + o + "-----END PUBLIC KEY-----";
	}
	async function S(e, t, n) {
		t === void 0 && (t = !1), n === void 0 && (n = ["encrypt", "decrypt"]);
		var a = t ? "-----BEGIN PRIVATE KEY-----" : "-----BEGIN PUBLIC KEY-----", i = t ? "-----END PRIVATE KEY-----" : "-----END PUBLIC KEY-----", l = e;
		e.includes(a) && (l = e.substring(e.indexOf(a) + a.length, e.indexOf(i))), l = l.replace(/\s/g, "");
		try {
			for (var s = atob(l), c = new Uint8Array(s.length), d = 0; d < s.length; d++) c[d] = s.charCodeAt(d);
			var m = t ? "pkcs8" : "spki";
			return self.crypto.subtle.importKey(m, c, {
				name: "RSA-OAEP",
				hash: "SHA-1"
			}, !0, n);
		} catch (e) {
			throw o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Error converting PEM to CryptoKey"]))).catching(e instanceof Error ? e : r("err")(String(e))), e;
		}
	}
	async function R(e, t) {
		var n = await S(e, !1, ["encrypt"]), r = await S(t, !0, ["decrypt"]);
		return {
			publicKey: n,
			privateKey: r
		};
	}
	async function L(e) {
		var t = await self.crypto.subtle.exportKey("raw", e);
		return new Uint8Array(t);
	}
	async function E(e, t, n, a, i) {
		try {
			var l = await I(e, t, n, a, i);
			return JSON.parse(l);
		} catch (e) {
			throw o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Failed to decrypt RSA encrypted payload"]))).catching(e instanceof Error ? e : r("err")(String(e))), e;
		}
	}
	async function k(e, t, n, a, i) {
		try {
			return await I(e, t, n, a, i);
		} catch (e) {
			throw o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Failed to decrypt RSA encrypted data"]))).catching(e instanceof Error ? e : r("err")(String(e))), e;
		}
	}
	async function I(e, t, n, o, a) {
		var i = await b(e, t), l = await T(i), s = await y(l, n, o, a), u = new TextDecoder("utf-8").decode(s), c = JSON.parse(u), d = c.data;
		if (typeof d != "string") throw r("err")("[WAFFLE] Decrypted RSA payload data is not a string");
		return d;
	}
	async function T(e) {
		var t = await self.crypto.subtle.importKey("raw", e, "AES-GCM", !0, ["encrypt", "decrypt"]);
		return t;
	}
	async function D(e, t) {
		var n = t;
		if (n == null) {
			var a = await o("WAWebAccountLinkingAPI").fetchValidCertificate();
			if (a == null) throw r("err")("[WAFFLE] fetchValidCertificate failed");
			n = a.encryptionKey;
		}
		var i = await h(JSON.stringify(e)), l = i.cipherText, s = i.iv, u = i.key, c = i.tag, d = await L(u), m = await C(n, d);
		return {
			tag: c,
			nonce: s,
			cipherText: l,
			encryptedKey: m
		};
	}
	var x = 1, $ = "rsa2048";
	function P(e) {
		var t;
		return JSON.stringify({
			algorithm: $,
			auth_tag: (t = o("WABase64")).encodeB64(e.tag),
			encrypted_data: t.encodeB64(e.cipherText),
			encrypted_key: t.encodeB64(e.encryptedKey),
			nonce: t.encodeB64(e.nonce),
			v: x
		});
	}
	async function N(e, t, n) {
		var r = new TextEncoder(), a = r.encode(e), i = self.crypto.getRandomValues(new Uint8Array(12)), l = await p(), s = await self.crypto.subtle.encrypt({
			name: "AES-GCM",
			iv: i,
			length: 256
		}, l, a), u = new Uint8Array(s), c = u.slice(-16), d = u.slice(0, -16), m = await L(l), _ = await o("WAWebRSAPkcs1v15").rsaPkcs1v15Encrypt(t, m), f = _.length, g = 16 + f + 16 + d.length, h = new Uint8Array(g), y = 0, C = new DataView(h.buffer);
		h[y++] = 1, h[y++] = n % 256, h.set(i, y), y += 12, C.setUint16(y, f, !0), y += 2, h.set(_, y), y += f, h.set(c, y), y += 16, h.set(d, y);
		var b = o("WABase64").encodeB64UrlSafe(h), v = Math.floor(Date.now() / 1e3);
		return "#PWD_WA:11:" + v + ":" + b;
	}
	async function M(e) {
		var t = await o("WAWebSignalProtocolStore").getSignalProtocolStore().getIdentityKeyPair();
		if (t == null) throw r("err")("Identity key pair not found");
		var n = {
			pubKey: t.pubKey.slice(1),
			privKey: t.privKey
		}, a = new TextEncoder().encode("1539" + e), i = await o("WAWebCryptoCurve25519CalculateSignature").calculateSignature(n, a.buffer);
		return new Uint8Array(i);
	}
	async function w(e) {
		if (e.length === 0) throw r("err")("Empty PEM string");
		var t = "-----BEGIN PUBLIC KEY-----", n = "-----END PUBLIC KEY-----", o = e;
		e.includes(t) && (o = e.substring(e.indexOf(t) + t.length, e.indexOf(n))), o = o.replace(/\s/g, "");
		for (var a = atob(o), i = new Uint8Array(a.length), l = 0; l < a.length; l++) i[l] = a.charCodeAt(l);
		return self.crypto.subtle.importKey("spki", i, {
			name: "RSA-OAEP",
			hash: "SHA-1"
		}, !0, ["encrypt"]);
	}
	l.generateRSAKeys = m, l.generateAESKey = p, l.validateCertificateChain = _, l.importPayloadEncryptionKey = f, l.cryptoKeyToPem = v, l.convertTestKeys = R, l.decryptRSAEncryptedPayload = E, l.decryptRSAEncryptedData = k, l.wrapPayloadWithRSAAESEncryption = D, l.WAFFLE_AUTH_ENVELOPE_VERSION_V1 = x, l.serializeWaffleEncryptedEnvelope = P, l.encryptPassword = N, l.computeIdSign = M, l.importPasswordPublicKey = w;
}), 98);
