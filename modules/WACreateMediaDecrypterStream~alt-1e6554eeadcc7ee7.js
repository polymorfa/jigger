__d("WACreateMediaDecrypterStream", [
	"WABinary",
	"WAMediaCrypto",
	"WAResultOrError",
	"WATagsLogger",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = o("WATagsLogger").TAGS(["WADecryptStream"]);
	function f(t, n, r, a, i) {
		if (a.byteLength === 0) return _.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["expectedHmacs must have at least one element"]))), o("WAResultOrError").makeError("missing-expected-hmacs");
		if (a.byteLength !== i.length * o("WAMediaCrypto").HMAC_LENGTH) return _.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["expectedHmacs and ciphertextLengths must have the same length"]))), o("WAResultOrError").makeError("hmac-chiphertext-array-mismatch");
		var l = g(a), m = n, p = new (o("WABinary")).Binary(), f = 0, y = async function(n, a) {
			for (p.writeByteArray(n); f < l.length && p.size() >= i[f]; f++) {
				var e = p.readByteArrayView(i[f]);
				_.DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"Processing scan ",
					" of size ",
					""
				])), f, e.length);
				var s = f === i.length - 1;
				try {
					var d = await o("WAMediaCrypto").hmacAndDecryptPartial(t, m, e, r, l[f]), g = d.nextIv, y = d.plaintext;
					s ? a.enqueue(h(y)) : a.enqueue(y), m = g;
				} catch (e) {
					_.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
						"Unable to decrypt chunk. isLastChunk: ",
						" error: ",
						""
					])), s, e), e instanceof o("WAMediaCrypto").HmacValidationError ? a.error("enc-hash-mismatch") : a.error("decryption-error");
				}
			}
		}, C = new TransformStream({
			transform: function(t, n) {
				var e = t;
				return y(e, n);
			},
			flush: function(t) {
				p.size() > 0 && _.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Unexpected ciphertext in buffer following flush"])));
			}
		});
		return o("WAResultOrError").makeResult(C);
	}
	function g(e) {
		var t = [];
		if (e.byteLength % o("WAMediaCrypto").HMAC_LENGTH !== 0) throw r("err")("Sidecar length is not a multiple of hmac length");
		for (var n = 0; n < e.byteLength; n += o("WAMediaCrypto").HMAC_LENGTH) {
			var a = new Uint8Array(e, n, o("WAMediaCrypto").HMAC_LENGTH);
			t.push(a);
		}
		return t;
	}
	function h(e) {
		if (e.length < o("WAMediaCrypto").CBC_BLOCK_SIZE) return _.ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Plaintext size is less than CBC_BLOCK_SIZE"]))), e;
		var t = e[e.length - 1];
		return t === 0 || t > o("WAMediaCrypto").CBC_BLOCK_SIZE ? (_.ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Invalid PKCS padding length"]))), e) : e.subarray(0, -t);
	}
	l.createDefaultDecryptStream = f;
}), 98);
