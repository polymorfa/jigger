__d("WAProgressiveJpegGetPJpegDetails", [
	"WAMediaCrypto",
	"WAProgressiveJpegAlignScanLengths",
	"WAProgressiveJpegGetScanLengths",
	"WAResultOrError",
	"WATagsLogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("WATagsLogger").TAGS(["WAProgressiveJpegDetails"]);
	function m(e) {
		var t = e.ciphertextLength, n = e.progressiveJpegDetails;
		return babelHelpers.extends({}, n, { alignedScanLengths: o("WAProgressiveJpegAlignScanLengths").progressiveJpegAlignChunkLengthsToMultipleOfAesBlockSize({
			scanLengths: n.scanLengths,
			totalEncryptedBytes: t
		}) });
	}
	function p(e, t, n) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = t.byteLength - o("WAMediaCrypto").IV_LENGTH, a = o("WAProgressiveJpegGetScanLengths").getProgressiveJpegScanLengths(e), i = o("WAProgressiveJpegAlignScanLengths").progressiveJpegAlignChunkLengthsToMultipleOfAesBlockSize({
				scanLengths: a,
				totalEncryptedBytes: r
			}), l = yield f(i, t, n);
			return {
				scanLengths: a,
				sidecar: l
			};
		}), _.apply(this, arguments);
	}
	function f(e, t, n) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			for (var r = new Uint8Array(e.length * 10), a = 0, i = 0, l = t.slice(0, 16), s = t.slice(16), u = 0; u < e.length; u++) {
				var c = e[u];
				i = a + c;
				var d = s.subarray(a, i), m = (yield o("WAMediaCrypto").hmacCiphertext(n, l, d)).slice(0, 10);
				r.set(new Uint8Array(m), u * 10), l = d.slice(d.length - 16, d.length), a = i;
			}
			return r.buffer;
		}), g.apply(this, arguments);
	}
	function h(t) {
		return t.sidecar.byteLength % o("WAMediaCrypto").HMAC_LENGTH !== 0 ? (d.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Progressive Jpeg sidecar has an invalid length"]))), o("WAResultOrError").makeError("pjpeg-check-sidecar-invalid-length")) : t.scanLengths.length > 0 && t.sidecar.byteLength === 0 ? (d.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Progressive Jpeg sidecar is missing"]))), o("WAResultOrError").makeError("pjpeg-check-no-sidecar")) : t.scanLengths.length === 0 ? o("WAResultOrError").makeResult(!1) : t.scanLengths.length * o("WAMediaCrypto").HMAC_LENGTH !== t.sidecar.byteLength ? (d.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Progressive Jpeg sidecar size mismatch"]))), o("WAResultOrError").makeError("pjpeg-check-scan-length-mismatch")) : t.scanLengths.length < 3 ? (d.WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Progressive Jpeg has too few scans"]))), o("WAResultOrError").makeError("pjpeg-too-few-scans")) : o("WAResultOrError").makeResult(!0);
	}
	function y(e, t) {
		var n = 0;
		if (t === 0) return 0;
		for (var r = 0; r < t; r++) {
			var o = e[r];
			o != null && (n += o);
		}
		return n;
	}
	function C(e) {
		var t = e.progressiveJpegDetails;
		if (t == null) return o("WAResultOrError").makeResult(null);
		var n = h(t);
		return n.success === !1 ? n : n.value === !0 ? o("WAResultOrError").makeResult({
			scanLengths: t.scanLengths,
			sidecar: t.sidecar
		}) : o("WAResultOrError").makeResult(null);
	}
	l.getExtendedProgressiveJpegDetails = m, l.getProgressiveJpegDetails = p, l.isValidProgressiveJpegDetails = h, l.getTotalByteSizeForScan = y, l.maybeGetProgressiveJpegDetailsUsingMediaEntry = C;
}), 98);
