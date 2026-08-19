__d("WACreateMediaDecrypterStream", [
	"WABinary",
	"WAMediaCrypto",
	"WAResultOrError",
	"WATagsLogger",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = o("WATagsLogger").TAGS(["WADecryptStream"]);
	function f(t, r, a, i, l) {
		if (i.byteLength === 0) return _.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["expectedHmacs must have at least one element"]))), o("WAResultOrError").makeError("missing-expected-hmacs");
		if (i.byteLength !== l.length * o("WAMediaCrypto").HMAC_LENGTH) return _.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["expectedHmacs and ciphertextLengths must have the same length"]))), o("WAResultOrError").makeError("hmac-chiphertext-array-mismatch");
		var m = g(i), p = r, f = new (o("WABinary")).Binary(), y = 0, C = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, n) {
				for (f.writeByteArray(e); y < m.length && f.size() >= l[y]; y++) {
					var r = f.readByteArrayView(l[y]);
					_.DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"Processing scan ",
						" of size ",
						""
					])), y, r.length);
					var i = y === l.length - 1;
					try {
						var s = yield o("WAMediaCrypto").hmacAndDecryptPartial(t, p, r, a, m[y]), d = s.nextIv, g = s.plaintext;
						i ? n.enqueue(h(g)) : n.enqueue(g), p = d;
					} catch (e) {
						_.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
							"Unable to decrypt chunk. isLastChunk: ",
							" error: ",
							""
						])), i, e), e instanceof o("WAMediaCrypto").HmacValidationError ? n.error("enc-hash-mismatch") : n.error("decryption-error");
					}
				}
			});
			return function(n, r) {
				return e.apply(this, arguments);
			};
		})(), b = new TransformStream({
			transform: function(t, n) {
				var e = t;
				return C(e, n);
			},
			flush: function(t) {
				f.size() > 0 && _.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Unexpected ciphertext in buffer following flush"])));
			}
		});
		return o("WAResultOrError").makeResult(b);
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
