__d("WADownloadProgressiveJpegPlaintextStreamerWithoutRetry", [
	"WACreateMediaDecrypterStream",
	"WAHttpDownloadMedia",
	"WAMediaCrypto",
	"WAMediaProgressiveJpegTransformStream",
	"WAProgressiveJpegGetPJpegDetails",
	"WAResultOrError",
	"WATagsLogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("WATagsLogger").TAGS(["WADownloadProgressiveJpegPlaintextStreamer"]);
	function c(e) {
		return e;
	}
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.abortSignal, r = t.cachePolicy, a = t.downloadUrl, i = t.eventFlow, l = t.mediaKey, c = t.progressiveJpegDetails, d = t.serverMediaType, m = yield o("WAHttpDownloadMedia").httpDownloadMedia(a, {
				mediaMetrics: i,
				abortSignal: n,
				cachePolicy: r
			});
			if (m.success !== !0) return m;
			var p = m.value.body;
			if (p == null) return o("WAResultOrError").makeError("body-network-error");
			var _ = m.value.headers.get("Content-Length");
			if (_ == null) return u.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Content-Length header is missing"]))), o("WAResultOrError").makeError("missing-content-length-header");
			var f = Number(_);
			if (Number.isNaN(f)) return u.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Content-Length header is not a number"]))), o("WAResultOrError").makeError("invalid-content-length-header");
			var g = o("WAProgressiveJpegGetPJpegDetails").getExtendedProgressiveJpegDetails({
				progressiveJpegDetails: c,
				ciphertextLength: f
			}), h = yield o("WAMediaCrypto").computeMediaKeys(l, d), y = o("WACreateMediaDecrypterStream").createDefaultDecryptStream(h.cipherKey, h.iv, h.hmacKey, g.sidecar, g.alignedScanLengths);
			if (y.success !== !0) return y;
			var C = y.value, b = o("WAMediaProgressiveJpegTransformStream").makeProgressiveJpegHandlerTransformStream(g), v = p.pipeThrough(C).pipeThrough(b);
			return o("WAResultOrError").makeResult(v);
		}), m.apply(this, arguments);
	}
	l.unsafeCastToDownloadAndDecryptPJpegStream = c, l.downloadProgressiveJpegPlaintextUsingStreamsWithoutRetry = d;
}), 98);
