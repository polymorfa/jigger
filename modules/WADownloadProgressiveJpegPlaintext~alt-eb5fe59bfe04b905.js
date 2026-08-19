__d("WADownloadProgressiveJpegPlaintext", [
	"WADownloadCiphertext",
	"WAMediaCrypto",
	"WAProgressiveJpegAddJPEGTrailingTag",
	"WAProgressiveJpegGetPJpegDetails",
	"WAResultOrError",
	"WATagsLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("WATagsLogger").TAGS(["DownloadProgressiveJpeg"]);
	async function d(e) {
		var t = e.abortSignal, n = e.directPath, r = e.eventFlow, a = e.fileEncSha256, i = e.mediaKey, l = e.mediaTypeDetails, s = e.plaintextHash, u = e.progressiveJpegDetails, c = e.size, d = e.targetScan, _ = o("WAProgressiveJpegGetPJpegDetails").getExtendedProgressiveJpegDetails({
			progressiveJpegDetails: u,
			ciphertextLength: p(c)
		}), f = o("WAProgressiveJpegGetPJpegDetails").getTotalByteSizeForScan(_.alignedScanLengths, d), g = await o("WADownloadCiphertext").cachedDownloadCiphertext({
			abortSignal: t,
			mediaTypeDetails: l,
			fileEncSha256: a,
			directPath: n,
			fromBytes: 0,
			toBytes: f - 1,
			eventFlow: r,
			plaintextHash: s
		});
		return g.success !== !0 ? g : m(i, l, d, _, g.value);
	}
	async function m(t, n, r, a, i) {
		c.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Using progressiveJpeg decryptAndVerify"])));
		var l = new Uint8Array(i), d;
		n.type === "preview" ? d = o("WAMediaCrypto").computeMediaKeysForPreview(t) : d = o("WAMediaCrypto").computeMediaKeys(t, n.mediaType);
		var m = await d.then(function(e) {
			var t = e.cipherKey, n = e.hmacKey, i = e.iv;
			return o("WAMediaCrypto").decryptPartialChunks(t, i, l, n, r, a);
		}).then(o("WAResultOrError").makeResult).catch(function(e) {
			return c.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Download Plaintext Error ", ""])), e), e instanceof o("WAMediaCrypto").HmacValidationError ? o("WAResultOrError").makeError("enc-hash-mismatch") : o("WAResultOrError").makeError("decryption-error");
		});
		if (!m.success) return m;
		c.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["ProgressiveJpeg download and decrypt successful. Partial: ", ""])), r < a.scanLengths.length);
		var p = o("WAProgressiveJpegAddJPEGTrailingTag").addJPEGTrailingTag(m.value.plaintext);
		return o("WAResultOrError").makeResult(p);
	}
	function p(e) {
		if (e == null) return null;
		var t = o("WAMediaCrypto").CBC_BLOCK_SIZE - e % o("WAMediaCrypto").CBC_BLOCK_SIZE;
		return e + t + o("WAMediaCrypto").HMAC_LENGTH;
	}
	l.downloadProgressiveJpegPlaintext = d;
}), 98);
