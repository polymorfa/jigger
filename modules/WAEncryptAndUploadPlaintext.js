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
	"asyncToGeneratorRuntime",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f;
	function g(e) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = t.fromOffset, i = a === void 0 ? 0 : a, l = t.mediaKey, g = t.mediaKeyTimestamp, h = t.mediaUploadFlow, y = t.plaintext, C = t.plaintextHash, b = t.serverMediaType, v = t.uploadRetrier, S = t.uploadToken;
			h.addPoint("encrypt_and_upload_plaintext_start"), h.addPoint("compute_media_keys_start");
			var R = b === "preview" ? yield o("WAMediaCrypto").computeMediaKeysForPreview(l) : yield o("WAMediaCrypto").computeMediaKeys(l, b), L = R.cipherKey, E = R.hmacKey, k = R.iv;
			h.addPoint("compute_media_keys_end"), h.addPoint("encrypt_and_hmac_start");
			var I = yield o("WAMediaCrypto").encryptAndHmac(L, k, E, y, b), T = I.ciphertext, D = I.ciphertextHash, x = I.ivCiphertextHmac, $ = I.sidecar;
			h.addPoint("encrypt_and_hmac_end");
			var P = null;
			if (b === "image") {
				h.addPoint("get_progressive_jpeg_details_start");
				var N = yield o("WAProgressiveJpegGetPJpegDetails").getProgressiveJpegDetails(new Uint8Array(y), x, E), M = o("WAProgressiveJpegGetPJpegDetails").isValidProgressiveJpegDetails(N);
				M.success === !1 ? (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext: Created invalid progressiveJpeg details during encrypt and upload: ", ""])), M.error), h.addPoint(M.error)) : M.value === !0 && o("WAGlobals").getConfig().isProgressiveJpegSendEnabled() && (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext: Found valid progressiveJpeg details. Adding to media entry."]))), P = N, h.addPoint("get_progressive_jpeg_details_end"));
			}
			var w = {
				fileSha256: o("WABase64").decodeB64UrlSafe(C),
				fileEncSha256: D,
				mediaKey: l,
				mediaKeyTimestamp: g,
				serverMediaType: b,
				uploadToken: S,
				sidecar: $,
				progressiveJpegDetails: P,
				size: y.byteLength,
				filename: void 0,
				lastDownloadAttemptTimestamp: void 0,
				directPath: void 0
			}, A, F = r("gkx")("1921");
			h.addAnnotations({ bool: { useMIUpload: F } });
			var O = yield v.run((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
					var r = e.domain, a = i;
					if (n > 0) {
						h.addPoint("network_retry", { int: { network_retry_attempt: n } });
						try {
							h.addPoint("resume_check_start");
							var l = F ? yield o("MIHttpResumeCheck").miHttpResumeCheck(o("MIMediaUrl").buildMIUploadUrl(S, D, void 0, !0)) : yield o("WAHttpResumeCheck").httpResumeCheck(o("WAMediaUrl").buildUploadUrl(b, S, D, r, t, !0));
							if (l.success) {
								h.addPoint("resume_check_end");
								var s = l.value;
								if (s.type === "media-found") return h.addAnnotations({ bool: { existingMediaFound: !0 } }), o("WAResultOrError").makeResult(o("WAResultOrError").makeResult({
									directPath: s.directPath,
									objectId: null,
									handle: null
								}));
								s.type === "media-partial-found" && (a = s.resumeFromBytes);
							}
							h.addPoint("resume_check_fail", { string: { resume_check_error: l.error } });
						} catch (e) {
							h.addPoint("resume_check_fail", { string: { resume_check_error: o("WAErrorMessage").maybeGetMessageFromError(e) } }), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext: error during retrier ", ""])), e);
						}
					}
					a > 0 && a < T.byteLength ? (h.addAnnotations({
						int: { fromOffset: a },
						bool: { continuedFromOffset: !0 }
					}), A = T.subarray(a)) : A = T;
					function _() {
						if (F) {
							var e, n = o("MIMediaUrl").buildMIUploadUrl(S, D, a);
							return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext: start MI upload media to ", ""])), n), h.addPoint("http_upload_start"), o("MIHttpUploadMedia").miHttpUploadMedia(n, A, {
								entityLength: T.byteLength,
								entityName: encodeURIComponent(o("WABase64").encodeB64UrlSafe(D)),
								mediaType: (e = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(b)) != null ? e : "file",
								offset: a
							});
						} else {
							var i = o("WAMediaUrl").buildUploadUrl(b, S, D, r, t, !1, a);
							return o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext: start upload media to ", ""])), i), h.addPoint("http_upload_start"), o("WAHttpRegularUploadMedia").httpRegularUploadMedia(i, A);
						}
					}
					var f = _();
					return f.then(function(e) {
						if (e.success) return h.addPoint("http_upload_end", { int: { attempt: n } }), o("WAResultOrError").makeResult(e);
						var t = e.error;
						switch (h.addPoint("http_upload_fail", { string: { http_upload_error: t } }), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext error: ", ""])), t), t) {
							case "server-timeout":
							case "unspecified-http-error": return o("WAResultOrError").makeError({ progressMade: !0 });
							default: return o("WAResultOrError").makeResult(o("WAResultOrError").makeError(t));
						}
					}).catch(function(e) {
						var t = o("WAErrorMessage").maybeGetMessageFromError(e);
						return h.addPoint("http_upload_fail", { string: { http_upload_error: t } }), o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext error: ", ""])), t), o("WAResultOrError").makeError({ progressMade: !1 });
					});
				});
				return function(t, n, r) {
					return e.apply(this, arguments);
				};
			})());
			if (O == null) return o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["encryptAndUploadPlaintext given up"]))), o("WAResultOrError").makeError("max-attempts-exceeded");
			if (O.success === !1) return O;
			var B = O.value, W = B.directPath, q = B.handle, U = B.objectId, V = babelHelpers.extends({}, w, {
				directPath: W,
				handle: q,
				objectId: U
			});
			o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
				"encryptAndUploadPlaintext: upload success ",
				" ",
				""
			])), { directPath: W }, { objectId: U });
			var H = "undefined";
			return U != null && (H = U.length > 60 ? "new" : "old"), h.addPoint("encrypt_and_upload_plaintext_end", { string: { object_id_type: H } }), o("WAResultOrError").makeResult(V);
		}), h.apply(this, arguments);
	}
	l.encryptAndUploadPlaintext = g;
}), 98);
