__d("WADownloadFullSizeAndPreviewTask", [
	"EncryptedBackupsResignCdnUrl",
	"MAWAttachmentCdnUrlReader",
	"MAWAttachmentCdnUrlWriter",
	"MAWCastToMsgrServerMediaType",
	"MAWEBSwitch",
	"MAWKaleidoscopeMediaTypeMapping",
	"UserAgent",
	"WADownloadFullSizeOnlyTask",
	"WADownloadPreviewOnlyTask",
	"WADownloadProgressiveJpegUsingMediaStreaming",
	"WAErrorMessage",
	"WAHashUtils",
	"WAIsMediaExpiredError",
	"WAIsPreviewSupported",
	"WAMediaManagerGetMostRecentMediaEntry",
	"WAMediaManagerPrepareMediaDownload",
	"WAMediaUtils",
	"WAProgressiveJpegGetPJpegDetails",
	"WAResultOrError",
	"WAStartMediaDownloadQplFlow",
	"WATimeUtils",
	"WAValidateMedia",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y;
	async function C(t) {
		var n = t.abortSignal, r = t.dbCallbacks, a = t.fullSizePlaintextHash, i = t.logger, l = t.mediaDownloadFlow, u = await o("WAMediaManagerGetMostRecentMediaEntry").getMostRecentMediaEntry({
			fullSizePlaintextHash: a,
			getMediaEntries: r.getMediaEntries,
			mediaDownloadFlow: l
		});
		if (!u.success) return {
			fullsizePromise: Promise.resolve(u),
			previewPromise: Promise.resolve(u)
		};
		var c = u.value, d = c.mediaEntries, m = c.msgIdOfRecentMediaEntry, p = c.recentMediaEntry;
		return v({
			abortSignal: n,
			dbCallbacks: r,
			fullSizePlaintextHash: a,
			logger: i,
			mediaDownloadFlow: l,
			mediaEntries: d,
			msgIdOfRecentMediaEntry: m,
			recentMediaEntry: p
		}).then(function(t) {
			if (i.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["outter promise: ", ""])), t.success === !0 ? "success" : t.error), !t.success) return i.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["outter promise failed: ", ""])), t.error), {
				fullsizePromise: Promise.resolve(t),
				previewPromise: Promise.resolve(t)
			};
			var n = t.value, r = n.fullsizePromise, o = n.previewPromise;
			return {
				fullsizePromise: r,
				previewPromise: o
			};
		});
	}
	async function b(e, t, n) {
		var r = await e;
		if (!r.success) return Promise.resolve(r);
		var a = await o("WAValidateMedia").validateMedia(r.value.plaintext, n, o("MAWKaleidoscopeMediaTypeMapping").kaleidoscopeMediaTypeFromServerMediaType(r.value.serverMediaType));
		return a.success ? o("WAResultOrError").makeResult({
			msgIdAndMediaEntry: t,
			serverMediaType: r.value.serverMediaType,
			source: "network",
			unvalidatedMimeType: r.value.mimeType,
			validatedResult: a.value
		}) : a;
	}
	async function v(e) {
		var t = e.abortSignal, n = e.dbCallbacks, r = e.fullSizePlaintextHash, a = e.logger, i = e.mediaDownloadFlow, l = e.mediaEntries, s = e.msgIdOfRecentMediaEntry, c = e.recentMediaEntry, d = o("WAMediaManagerPrepareMediaDownload").mediaManagerPrepareMediaDownload({
			hash: r,
			logger: a,
			mediaDownloadFlow: i,
			mediaEntry: c
		}), m = d.logDownloadResult, p = {
			abortSignal: t,
			dbCallbacks: n,
			logger: a,
			mediaDownloadFlow: i,
			mediaEntries: l,
			msgIdOfRecentMediaEntry: s,
			recentMediaEntry: c
		}, _ = await S(babelHelpers.extends({}, p, { fullSizePlaintextHash: r }));
		if (_.success) {
			var f = _.value, g = f.fullsizePromise, h = f.previewPromise, y = g.then(function(e) {
				return e.success ? e : (i.addPoint("fallback_to_non_streaming_download", { string: { streaming_fallback_reason: e.error } }), o("WADownloadFullSizeOnlyTask").downloadOrRestoreFullSize(p));
			}), C = [s, c];
			return o("WAResultOrError").makeResult({
				fullsizePromise: m(b(y, C, i)),
				previewPromise: b(h, C, i)
			});
		}
		var v = E(_.error);
		if (!v.shouldFallback) return o("WAResultOrError").makeError(v.error);
		i.addPoint("fallback_to_non_streaming_download", { string: { streaming_fallback_reason: v.error } }), a.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["fallback to non-streaming download"])));
		var L = b(o("WADownloadFullSizeOnlyTask").downloadOrRestoreFullSize(p), [s, c], i), k = R(babelHelpers.extends({}, p, {
			fullSizePlaintextHash: r,
			fullsizePromise: L
		}));
		return o("WAResultOrError").makeResult({
			fullsizePromise: m(L),
			previewPromise: k
		});
	}
	async function S(e) {
		var t, n = e.abortSignal, a = e.dbCallbacks, i = e.logger, l = e.mediaDownloadFlow, s = e.mediaEntries, u = e.msgIdOfRecentMediaEntry, h = e.recentMediaEntry, y = r("MAWEBSwitch").isEnabled() && r("gkx")("23960");
		y && l.addPoint("forcing_eb_download");
		var C = h.directPath, b = h.fileEncSha256, v = h.fileSha256, S = h.mediaKey, R = h.serverMediaType, E = (t = o("WAProgressiveJpegGetPJpegDetails").maybeGetProgressiveJpegDetailsUsingMediaEntry(h).value) != null ? t : null;
		if (E == null || h.serverMediaType !== "image" || !o("WAMediaUtils").isTransformStreamSupported() || r("UserAgent").isBrowser("Safari < 18") || r("UserAgent").isBrowser("Mobile Safari < 18")) return h.serverMediaType === "image" && E == null && (i.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["skip pjpeg streaming because pjpeg metadata is null"]))), i.DEV(d || (d = babelHelpers.taggedTemplateLiteralLoose(["media entry: ", ""])), h)), o("WAResultOrError").makeError("jpeg-stream-not-supported");
		l.addPoint("media_streaming_start");
		var k = y ? o("WAResultOrError").makeError("signature-expired") : await o("WADownloadProgressiveJpegUsingMediaStreaming").downloadProgresiveJpegUsingMediaStreaming({
			abortSignal: n,
			directPath: C,
			downloadFlow: l,
			fileEncSha256: b,
			fileSha256: v,
			logger: i,
			mediaKey: S,
			progressiveJpegDetails: E,
			serverMediaType: R
		}).catch(function(e) {
			return i.ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["downloadProgresiveJpegUsingMediaStreaming unexpected runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), o("WAResultOrError").makeError("runtime-error");
		});
		if (k.success) return l.addPoint("media_streaming_end"), k;
		if (!o("WAIsMediaExpiredError").isMediaExpiredError(k.error) || !r("MAWEBSwitch").isEnabled()) return l.addPoint("skip_resign_cdn_url", { string: { skipResignCdnUrlReason: r("MAWEBSwitch").isEnabled() ? "error-not-expired" : "maw-eb-switch-disabled" } }), L(l, k), k;
		var I = await a.getProtocolMsgIdAndSortOrderMs(u);
		if (I == null) return o("WAResultOrError").makeError("missing-sort-order-ms-for-restore");
		var T = I.protocolMsgId, D = I.sortOrderMs, x = h, $ = u, P = x.fileEncSha256, N = x.fileSha256, M = x.mediaKey, w = x.serverMediaType, A = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(w), F = x.objectId, O = F != null && r("gkx")("7808") ? await o("MAWAttachmentCdnUrlReader").getAttachmentCdnUrlDirectPath(F) : null;
		if (O != null) {
			l.addPoint("resign_cdn_url_inline_hit"), l.addPoint("restore_cdn_url_download_start");
			var B = await o("WADownloadProgressiveJpegUsingMediaStreaming").downloadProgresiveJpegUsingMediaStreaming({
				abortSignal: n,
				directPath: O,
				downloadFlow: babelHelpers.extends({}, l, { addPoint: function(t, n) {
					l.addPoint("restore_cdn_url_" + t, n);
				} }),
				fileEncSha256: b,
				fileSha256: v,
				logger: i,
				mediaKey: S,
				progressiveJpegDetails: E,
				serverMediaType: R
			}).catch(function(e) {
				return i.ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["downloadProgresiveJpegUsingMediaStreaming unexpected runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), o("WAResultOrError").makeError("runtime-error");
			});
			if (B.success) return l.addPoint("restore_cdn_url_download_end"), B;
			l.addPoint("restore_cdn_url_download_fail"), L(l, B), i.WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to download pjpeg with DB CDN URL, falling back to resign: ", ""])), B.error);
		}
		if (A == null || F == null) {
			var W;
			return l.addPoint("skip_resign_cdn_url", { string: {
				serverMediaType: (W = x.serverMediaType) != null ? W : "null",
				skipResignCdnUrlReason: F == null && A == null ? "missing-object-id-and-media-type" : F == null ? "missing-object-id" : "unsupported-media-type"
			} }), i.ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media and can not restore: ", ""])), k.error), k;
		}
		l.addPoint("resign_cdn_url_inline_miss");
		var q = await o("EncryptedBackupsResignCdnUrl").resignCdnUrl({
			deliveryObjectId: F,
			logger: i,
			mediaDownloadFlow: l,
			mediaKey: x.mediaKey,
			mediaType: A,
			msgId: $,
			protocolMsgId: T,
			sortOrderMs: D
		});
		if (!q.success) return q;
		r("gkx")("7808") && (l.addPoint("write_cdn_to_db_start"), await o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls([{
			cdnUrl: q.value,
			objectId: F,
			timestampMs: o("WATimeUtils").millisTime()
		}]), l.addPoint("write_cdn_to_db_end")), l.addPoint("resign_cdn_url_download_start");
		var U = await o("WADownloadProgressiveJpegUsingMediaStreaming").downloadProgresiveJpegUsingMediaStreaming({
			abortSignal: n,
			directPath: q.value,
			downloadFlow: babelHelpers.extends({}, l, { addPoint: function(t, n) {
				l.addPoint("resign_cdn_url_" + t, n);
			} }),
			fileEncSha256: P,
			fileSha256: N,
			logger: i,
			mediaKey: M,
			progressiveJpegDetails: E,
			serverMediaType: w
		}).catch(function(e) {
			return i.ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["downloadProgresiveJpegUsingMediaStreaming unexpected runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), o("WAResultOrError").makeError("runtime-error");
		});
		return U.success ? (l.addPoint("resign_cdn_url_download_end"), U) : (L(l, U), U);
	}
	function R(e) {
		var t = e.abortSignal, n = e.dbCallbacks, r = e.fullSizePlaintextHash, a = e.fullsizePromise, i = e.logger, l = e.mediaDownloadFlow, s = e.mediaEntries, u = e.msgIdOfRecentMediaEntry, c = e.recentMediaEntry, d = c.serverMediaType, m = o("WAIsPreviewSupported").checkPreviewSupport(c), p = m[0], _ = m[1];
		if (p === o("WAIsPreviewSupported").PjpegPreviewSupport.NO && _ === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO) return i.LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["preview not supported"]))), Promise.resolve(o("WAResultOrError").makeError("preview-not-supported"));
		if (_ === o("WAIsPreviewSupported").DownloadablePreviewSupport.DuplicatedWithFullSize) return i.LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["preview duplicated with fullsize"]))), a;
		var f = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
			downloadEntry: l.downloadEntry,
			isPreview: !0,
			msgType: null,
			protocolMsgId: null,
			triggerUIView: null
		}), g = o("WAMediaManagerPrepareMediaDownload").mediaManagerPrepareMediaDownload({
			hash: r,
			logger: i,
			mediaDownloadFlow: f,
			mediaEntry: c
		}), C = g.logDownloadResult;
		f.addAnnotations({
			bool: { isMediaManager: !0 },
			string: {
				downloadKind: "fullsizeAndPreview",
				fullSizeMediaType: d,
				mediaType: "preview",
				sanitisedMediaHash: o("WAHashUtils").sanitisePlaintextHash(r)
			}
		});
		var v = o("WADownloadPreviewOnlyTask").downloadOrRestorePreviewOnly({
			abortSignal: t,
			dbCallbacks: n,
			fullSizePlaintextHash: r,
			logger: i,
			mediaDownloadFlow: f,
			mediaEntries: s,
			msgIdOfRecentMediaEntry: u,
			recentMediaEntry: c
		});
		return C(b(v, [u, c], f)).then(function(e) {
			return e.success ? f.endSuccess() : f.endFail(e.error, { string: { failReason: e.error } }), e;
		}).catch(function(e) {
			return f.endFail("runtime-error", { string: { failReason: o("WAErrorMessage").maybeGetMessageFromError(e) } }), o("WAResultOrError").makeError("runtime-error");
		});
	}
	function L(e, t) {
		e.addPoint("media_streaming_fail", { string: { wa_media_download_streaming_fail_reason: o("WAErrorMessage").maybeGetMessageFromError(t.error) } });
	}
	function E(e) {
		switch (e) {
			case "runtime-error":
			case "jpeg-stream-not-supported": return {
				error: e,
				shouldFallback: !0
			};
			case "missing-expected-hmacs":
			case "hmac-chiphertext-array-mismatch": return {
				error: e,
				shouldFallback: !0
			};
			case "missing-media-entry":
			case "missing-media-entry-for-restore":
			case "missing-sort-order-ms-for-restore":
			case "preview-not-supported": return {
				error: e,
				shouldFallback: !1
			};
			case "derive-primary-key-secret-error":
			case "derive-access-token-secret-error":
			case "direct-path-undefined":
			case "direct-path-corrupted":
			case "direct-path-empty":
			case "create-payload-failed":
			case "resign-cdn-url-request-error":
			case "resign-cdn-url-runtime-error":
			case "resign-cdn-url-timeout":
			case "resign-cdn-url-gql-error": return {
				error: e,
				shouldFallback: !1
			};
			case "invalid-media": return {
				error: e,
				shouldFallback: !1
			};
			case "decryption-error":
			case "enc-hash-mismatch":
			case "hash-mismatch":
			case "ciphertext-hash-mismatch": return {
				error: e,
				shouldFallback: !0
			};
			case "access-expired":
			case "disconnected":
			case "backoff":
			case "body-network-error":
			case "http-fetch-exception":
			case "http-fetch-aborted":
			case "no-host":
			case "server-timeout":
			case "unspecified-http-error":
			case "media-not-found":
			case "download-throttled":
			case "request-error":
			case "max-attempts-exceeded":
			case "signature-expired":
			case "media-entry-invalid": return {
				error: e,
				shouldFallback: !1
			};
			case "media-entry-invalid-direct-path":
			case "media-entry-invalid-file-enc-sha256":
			case "media-entry-invalid-file-sha256":
			case "media-entry-invalid-media-key":
			case "media-entry-invalid-server-media-type": return {
				error: e,
				shouldFallback: !1
			};
		}
	}
	l.startDownloadFullSizeAndPreviewTask = C;
}), 98);
