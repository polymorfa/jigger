__d("WAEncryptAndUploadPlaintext", [
	"MAWCastToMsgrServerMediaType",
	"MIHttpResumeCheck",
	"MIHttpUploadMedia",
	"MIMediaUrl",
	"WABase64",
	"WAErrorMessage",
	"WAGlobals",
	"WAHttpRegularUploadMedia",
	"WAHttpResumeCheck",
	"WALogger",
	"WAMediaCrypto",
	"WAMediaUrl",
	"WAProgressiveJpegGetPJpegDetails",
	"WAResultOrError",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f;
	async function g(t) {
		var n = t.fromOffset, a = n === void 0 ? 0 : n, i = t.mediaKey, l = t.mediaKeyTimestamp, g = t.mediaUploadFlow, h = t.plaintext, y = t.plaintextHash, C = t.serverMediaType, b = t.uploadRetrier, v = t.uploadToken;
		g.addPoint("encrypt_and_upload_plaintext_start"), g.addPoint("compute_media_keys_start");
		var S = C === "preview" ? await o("WAMediaCrypto").computeMediaKeysForPreview(i) : await o("WAMediaCrypto").computeMediaKeys(i, C), R = S.cipherKey, L = S.hmacKey, E = S.iv;
		g.addPoint("compute_media_keys_end"), g.addPoint("encrypt_and_hmac_start");
		var k = await o("WAMediaCrypto").encryptAndHmac(R, E, L, h, C), I = k.ciphertext, T = k.ciphertextHash, D = k.ivCiphertextHmac, x = k.sidecar;
		g.addPoint("encrypt_and_hmac_end");
		var $ = null;
		if (C === "image") {
			g.addPoint("get_progressive_jpeg_details_start");
			var P = await o("WAProgressiveJpegGetPJpegDetails").getProgressiveJpegDetails(new Uint8Array(h), D, L), N = o("WAProgressiveJpegGetPJpegDetails").isValidProgressiveJpegDetails(P);
			N.success === !1 ? (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext: Created invalid progressiveJpeg details during encrypt and upload: ", ""])), N.error), g.addPoint(N.error)) : N.value === !0 && o("WAGlobals").getConfig().isProgressiveJpegSendEnabled() && (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext: Found valid progressiveJpeg details. Adding to media entry."]))), $ = P, g.addPoint("get_progressive_jpeg_details_end"));
		}
		var M = {
			fileSha256: o("WABase64").decodeB64UrlSafe(y),
			fileEncSha256: T,
			mediaKey: i,
			mediaKeyTimestamp: l,
			serverMediaType: C,
			uploadToken: v,
			sidecar: x,
			progressiveJpegDetails: $,
			size: h.byteLength,
			filename: void 0,
			lastDownloadAttemptTimestamp: void 0,
			directPath: void 0
		}, w, A = r("gkx")("1921");
		g.addAnnotations({ bool: { useMIUpload: A } });
		var F = await b.run(async function(e, t, n) {
			var r = e.domain, i = a;
			if (n > 0) {
				g.addPoint("network_retry", { int: { network_retry_attempt: n } });
				try {
					g.addPoint("resume_check_start");
					var l = A ? await o("MIHttpResumeCheck").miHttpResumeCheck(o("MIMediaUrl").buildMIUploadUrl(v, T, void 0, !0)) : await o("WAHttpResumeCheck").httpResumeCheck(o("WAMediaUrl").buildUploadUrl(C, v, T, r, t, !0));
					if (l.success) {
						g.addPoint("resume_check_end");
						var s = l.value;
						if (s.type === "media-found") return g.addAnnotations({ bool: { existingMediaFound: !0 } }), o("WAResultOrError").makeResult(o("WAResultOrError").makeResult({
							directPath: s.directPath,
							objectId: null,
							handle: null
						}));
						s.type === "media-partial-found" && (i = s.resumeFromBytes);
					}
					g.addPoint("resume_check_fail", { string: { resume_check_error: l.error } });
				} catch (e) {
					g.addPoint("resume_check_fail", { string: { resume_check_error: o("WAErrorMessage").maybeGetMessageFromError(e) } }), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext: error during retrier ", ""])), e);
				}
			}
			i > 0 && i < I.byteLength ? (g.addAnnotations({
				int: { fromOffset: i },
				bool: { continuedFromOffset: !0 }
			}), w = I.subarray(i)) : w = I;
			function _() {
				if (A) {
					var e, n = o("MIMediaUrl").buildMIUploadUrl(v, T, i);
					return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext: start MI upload media to ", ""])), n), g.addPoint("http_upload_start"), o("MIHttpUploadMedia").miHttpUploadMedia(n, w, {
						entityLength: I.byteLength,
						entityName: encodeURIComponent(o("WABase64").encodeB64UrlSafe(T)),
						mediaType: (e = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(C)) != null ? e : "file",
						offset: i
					});
				} else {
					var a = o("WAMediaUrl").buildUploadUrl(C, v, T, r, t, !1, i);
					return o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext: start upload media to ", ""])), a), g.addPoint("http_upload_start"), o("WAHttpRegularUploadMedia").httpRegularUploadMedia(a, w);
				}
			}
			var f = _();
			return f.then(function(e) {
				if (e.success) return g.addPoint("http_upload_end", { int: { attempt: n } }), o("WAResultOrError").makeResult(e);
				var t = e.error;
				switch (g.addPoint("http_upload_fail", { string: { http_upload_error: t } }), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext error: ", ""])), t), t) {
					case "server-timeout":
					case "unspecified-http-error": return o("WAResultOrError").makeError({ progressMade: !0 });
					default: return o("WAResultOrError").makeResult(o("WAResultOrError").makeError(t));
				}
			}).catch(function(e) {
				var t = o("WAErrorMessage").maybeGetMessageFromError(e);
				return g.addPoint("http_upload_fail", { string: { http_upload_error: t } }), o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext error: ", ""])), t), o("WAResultOrError").makeError({ progressMade: !1 });
			});
		});
		if (F == null) return o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext given up"]))), o("WAResultOrError").makeError("max-attempts-exceeded");
		if (F.success === !1) return F;
		var O = F.value, B = O.directPath, W = O.handle, q = O.objectId, U = babelHelpers.extends({}, M, {
			directPath: B,
			handle: W,
			objectId: q
		});
		o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
			"encryptAndUploadPlaintext: upload success ",
			" ",
			""
		])), { directPath: B }, { objectId: q });
		var V = "undefined";
		return q != null && (V = q.length > 60 ? "new" : "old"), g.addPoint("encrypt_and_upload_plaintext_end", { string: { object_id_type: V } }), o("WAResultOrError").makeResult(U);
	}
	l.encryptAndUploadPlaintext = g;
}), 98);
