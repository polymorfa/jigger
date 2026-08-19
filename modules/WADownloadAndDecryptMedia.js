__d("WADownloadAndDecryptMedia", [
	"WADecryptMedia",
	"WADownloadCiphertext",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.abortSignal, n = e.directPath, r = e.eventFlow, a = e.fileEncSha256, i = e.mediaKey, l = e.mediaTypeDetails, s = e.plaintextHash, u = yield o("WADownloadCiphertext").cachedDownloadCiphertext({
				abortSignal: t,
				mediaTypeDetails: l,
				fileEncSha256: a,
				directPath: n,
				eventFlow: r,
				plaintextHash: s
			});
			if (u.success !== !0) return u;
			var c = yield o("WADecryptMedia").decryptMedia({
				mediaKey: i,
				mediaTypeDetails: l,
				plaintextHash: s,
				ciphertextHmac: u.value
			});
			return c.success !== !0 ? c : (c.value.alternativeHmacSaltUsed != null && r.addAnnotations({ string: { alternativeHmacSaltUsed: c.value.alternativeHmacSaltUsed } }), o("WAResultOrError").makeResult(c.value.plaintext));
		}), s.apply(this, arguments);
	}
	l.downloadAndDecryptMedia = e;
}), 98);
