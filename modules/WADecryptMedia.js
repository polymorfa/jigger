__d("WADecryptMedia", [
	"WAMediaCrypto",
	"WAResultOrError",
	"WATagsLogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = o("WATagsLogger").TAGS(["WADecryptMedia"]);
	function f(e, t, n, r) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r, a) {
			_.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Encountered enc-hash-mismatch - looking for a potential working hmac salt"])));
			var i = r.type === "preview" ? "preview" : r.mediaType, l = yield o("WAMediaCrypto").deprecated_getAllCommonComputedMediaKeys(a), d;
			for (var m of l) {
				var p = m[0], f = m[1];
				try {
					if (p === i) continue;
					_.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Trying ", " as an alternative hmac salt."])), p);
					var g = o("WAResultOrError").makeResult(yield o("WAMediaCrypto").hmacAndDecrypt(f.cipherKey, f.iv, t, f.hmacKey, n));
					return d = {
						hmacAndDecryptResult: g,
						alternativeHmacSaltUsed: p
					}, _.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Found a working hmac salt using ", "."])), p), d;
				} catch (e) {
					_.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["", " is not a working hmac salt."])), p);
					continue;
				}
			}
			return { hmacAndDecryptResult: o("WAResultOrError").makeError("enc-hash-mismatch") };
		}), g.apply(this, arguments);
	}
	function h(e) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.ciphertextHmac, n = e.mediaKey, r = e.mediaTypeDetails, a = e.plaintextHash;
			_.LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Using default plaintext verifier"])));
			var i = t.byteLength - o("WAMediaCrypto").HMAC_LENGTH, l = new Uint8Array(t, i), s = new Uint8Array(t, 0, i), u;
			r.type === "preview" ? u = o("WAMediaCrypto").computeMediaKeysForPreview(n) : u = o("WAMediaCrypto").computeMediaKeys(n, r.mediaType);
			var c, g = null;
			if (c = yield u.then(function(e) {
				var t = e.cipherKey, n = e.hmacKey, r = e.iv;
				return o("WAMediaCrypto").hmacAndDecrypt(t, r, s, n, l);
			}).then(o("WAResultOrError").makeResult).catch(function(e) {
				return _.ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Download Plaintext Error ", ""])), e), e instanceof o("WAMediaCrypto").HmacValidationError ? o("WAResultOrError").makeError("enc-hash-mismatch") : o("WAResultOrError").makeError("decryption-error");
			}), c.success === !1 && c.error === "enc-hash-mismatch") {
				var h = yield f(s, l, r, n);
				c = h.hmacAndDecryptResult, g = h.alternativeHmacSaltUsed;
			}
			if (!c.success) return c;
			var y = c.value, C = y.plaintext, b = y.plaintextHash;
			return a !== b ? o("WAResultOrError").makeError("hash-mismatch") : (_.LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Download Plaintext Success"]))), o("WAResultOrError").makeResult({
				plaintext: C,
				alternativeHmacSaltUsed: g
			}));
		}), y.apply(this, arguments);
	}
	l.decryptMedia = h;
}), 98);
