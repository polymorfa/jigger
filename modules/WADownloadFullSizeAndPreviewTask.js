__d("WADownloadFullSizeAndPreviewTask", [
	"EncryptedBackupsResignCdnUrl",
	"MAWAttachmentCdnUrlReader",
	"MAWAttachmentCdnUrlWriter",
	"MAWCastToMsgrServerMediaType",
	"MAWEBSwitch",
	"MAWKaleidoscopeMediaTypeMapping",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C;
	function b(e) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.abortSignal, r = e.dbCallbacks, a = e.fullSizePlaintextHash, i = e.logger, l = e.mediaDownloadFlow, s = yield o("WAMediaManagerGetMostRecentMediaEntry").getMostRecentMediaEntry({
				fullSizePlaintextHash: a,
				getMediaEntries: r.getMediaEntries,
				mediaDownloadFlow: l
			});
			if (!s.success) return {
				fullsizePromise: (C || (C = n("Promise"))).resolve(s),
				previewPromise: C.resolve(s)
			};
			var d = s.value, m = d.mediaEntries, p = d.msgIdOfRecentMediaEntry, _ = d.recentMediaEntry;
			return L({
				abortSignal: t,
				dbCallbacks: r,
				fullSizePlaintextHash: a,
				logger: i,
				mediaDownloadFlow: l,
				mediaEntries: m,
				msgIdOfRecentMediaEntry: p,
				recentMediaEntry: _
			}).then(function(e) {
				if (i.DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["outter promise: ", ""])), e.success === !0 ? "success" : e.error), !e.success) return i.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["outter promise failed: ", ""])), e.error), {
					fullsizePromise: (C || (C = n("Promise"))).resolve(e),
					previewPromise: C.resolve(e)
				};
				var t = e.value, r = t.fullsizePromise, o = t.previewPromise;
				return {
					fullsizePromise: r,
					previewPromise: o
				};
			});
		}), v.apply(this, arguments);
	}
	function S(e, t, n) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
			var a = yield e;
			if (!a.success) return (C || (C = n("Promise"))).resolve(a);
			var i = yield o("WAValidateMedia").validateMedia(a.value.plaintext, r, o("MAWKaleidoscopeMediaTypeMapping").kaleidoscopeMediaTypeFromServerMediaType(a.value.serverMediaType));
			return i.success ? o("WAResultOrError").makeResult({
				msgIdAndMediaEntry: t,
				serverMediaType: a.value.serverMediaType,
				source: "network",
				unvalidatedMimeType: a.value.mimeType,
				validatedResult: i.value
			}) : i;
		}), R.apply(this, arguments);
	}
	function L(e) {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.abortSignal, n = e.dbCallbacks, r = e.fullSizePlaintextHash, a = e.logger, i = e.mediaDownloadFlow, l = e.mediaEntries, s = e.msgIdOfRecentMediaEntry, u = e.recentMediaEntry, c = o("WAMediaManagerPrepareMediaDownload").mediaManagerPrepareMediaDownload({
				hash: r,
				logger: a,
				mediaDownloadFlow: i,
				mediaEntry: u
			}), m = c.logDownloadResult, p = {
				abortSignal: t,
				dbCallbacks: n,
				logger: a,
				mediaDownloadFlow: i,
				mediaEntries: l,
				msgIdOfRecentMediaEntry: s,
				recentMediaEntry: u
			}, _ = yield k(babelHelpers.extends({}, p, { fullSizePlaintextHash: r }));
			if (_.success) {
				var f = _.value, g = f.fullsizePromise, h = f.previewPromise, y = g.then(function(e) {
					return e.success ? e : (i.addPoint("fallback_to_non_streaming_download", { string: { streaming_fallback_reason: e.error } }), o("WADownloadFullSizeOnlyTask").downloadOrRestoreFullSize(p));
				}), C = [s, u];
				return o("WAResultOrError").makeResult({
					fullsizePromise: m(S(y, C, i)),
					previewPromise: S(h, C, i)
				});
			}
			var b = x(_.error);
			if (!b.shouldFallback) return o("WAResultOrError").makeError(b.error);
			i.addPoint("fallback_to_non_streaming_download", { string: { streaming_fallback_reason: b.error } }), a.LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["fallback to non-streaming download"])));
			var v = S(o("WADownloadFullSizeOnlyTask").downloadOrRestoreFullSize(p), [s, u], i), R = T(babelHelpers.extends({}, p, {
				fullSizePlaintextHash: r,
				fullsizePromise: v
			}));
			return o("WAResultOrError").makeResult({
				fullsizePromise: m(v),
				previewPromise: R
			});
		}), E.apply(this, arguments);
	}
	function k(e) {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n = e.abortSignal, a = e.dbCallbacks, i = e.logger, l = e.mediaDownloadFlow, s = e.mediaEntries, u = e.msgIdOfRecentMediaEntry, c = e.recentMediaEntry, d = r("MAWEBSwitch").isEnabled() && r("gkx")("23960");
			d && l.addPoint("forcing_eb_download");
			var C = c.directPath, b = c.fileEncSha256, v = c.fileSha256, S = c.mediaKey, R = c.serverMediaType, L = (t = o("WAProgressiveJpegGetPJpegDetails").maybeGetProgressiveJpegDetailsUsingMediaEntry(c).value) != null ? t : null;
			if (L == null || c.serverMediaType !== "image" || !o("WAMediaUtils").isTransformStreamSupported() || r("UserAgent").isBrowser("Safari < 18") || r("UserAgent").isBrowser("Mobile Safari < 18")) return c.serverMediaType === "image" && L == null && (i.LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["skip pjpeg streaming because pjpeg metadata is null"]))), i.DEV(p || (p = babelHelpers.taggedTemplateLiteralLoose(["media entry: ", ""])), c)), o("WAResultOrError").makeError("jpeg-stream-not-supported");
			l.addPoint("media_streaming_start");
			var E = d ? o("WAResultOrError").makeError("signature-expired") : yield o("WADownloadProgressiveJpegUsingMediaStreaming").downloadProgresiveJpegUsingMediaStreaming({
				abortSignal: n,
				directPath: C,
				downloadFlow: l,
				fileEncSha256: b,
				fileSha256: v,
				logger: i,
				mediaKey: S,
				progressiveJpegDetails: L,
				serverMediaType: R
			}).catch(function(e) {
				return i.ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["downloadProgresiveJpegUsingMediaStreaming unexpected runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), o("WAResultOrError").makeError("runtime-error");
			});
			if (E.success) return l.addPoint("media_streaming_end"), E;
			if (!o("WAIsMediaExpiredError").isMediaExpiredError(E.error) || !r("MAWEBSwitch").isEnabled()) return l.addPoint("skip_resign_cdn_url", { string: { skipResignCdnUrlReason: r("MAWEBSwitch").isEnabled() ? "error-not-expired" : "maw-eb-switch-disabled" } }), D(l, E), E;
			var k = yield a.getProtocolMsgIdAndSortOrderMs(u);
			if (k == null) return o("WAResultOrError").makeError("missing-sort-order-ms-for-restore");
			var I = k.protocolMsgId, T = k.sortOrderMs, x = c, $ = u, P = x.fileEncSha256, N = x.fileSha256, M = x.mediaKey, w = x.serverMediaType, A = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(w), F = x.objectId, O = F != null && r("gkx")("7808") ? yield o("MAWAttachmentCdnUrlReader").getAttachmentCdnUrlDirectPath(F) : null;
			if (O != null) {
				l.addPoint("resign_cdn_url_inline_hit"), l.addPoint("restore_cdn_url_download_start");
				var B = yield o("WADownloadProgressiveJpegUsingMediaStreaming").downloadProgresiveJpegUsingMediaStreaming({
					abortSignal: n,
					directPath: O,
					downloadFlow: babelHelpers.extends({}, l, { addPoint: function(t, n) {
						l.addPoint("restore_cdn_url_" + t, n);
					} }),
					fileEncSha256: b,
					fileSha256: v,
					logger: i,
					mediaKey: S,
					progressiveJpegDetails: L,
					serverMediaType: R
				}).catch(function(e) {
					return i.ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["downloadProgresiveJpegUsingMediaStreaming unexpected runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), o("WAResultOrError").makeError("runtime-error");
				});
				if (B.success) return l.addPoint("restore_cdn_url_download_end"), B;
				l.addPoint("restore_cdn_url_download_fail"), D(l, B), i.WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Failed to download pjpeg with DB CDN URL, falling back to resign: ", ""])), B.error);
			}
			if (A == null || F == null) {
				var W;
				return l.addPoint("skip_resign_cdn_url", { string: {
					serverMediaType: (W = x.serverMediaType) != null ? W : "null",
					skipResignCdnUrlReason: F == null && A == null ? "missing-object-id-and-media-type" : F == null ? "missing-object-id" : "unsupported-media-type"
				} }), i.ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media and can not restore: ", ""])), E.error), E;
			}
			l.addPoint("resign_cdn_url_inline_miss");
			var q = yield o("EncryptedBackupsResignCdnUrl").resignCdnUrl({
				deliveryObjectId: F,
				logger: i,
				mediaDownloadFlow: l,
				mediaKey: x.mediaKey,
				mediaType: A,
				msgId: $,
				protocolMsgId: I,
				sortOrderMs: T
			});
			if (!q.success) return q;
			r("gkx")("7808") && (l.addPoint("write_cdn_to_db_start"), yield o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls([{
				cdnUrl: q.value,
				objectId: F,
				timestampMs: o("WATimeUtils").millisTime()
			}]), l.addPoint("write_cdn_to_db_end")), l.addPoint("resign_cdn_url_download_start");
			var U = yield o("WADownloadProgressiveJpegUsingMediaStreaming").downloadProgresiveJpegUsingMediaStreaming({
				abortSignal: n,
				directPath: q.value,
				downloadFlow: babelHelpers.extends({}, l, { addPoint: function(t, n) {
					l.addPoint("resign_cdn_url_" + t, n);
				} }),
				fileEncSha256: P,
				fileSha256: N,
				logger: i,
				mediaKey: M,
				progressiveJpegDetails: L,
				serverMediaType: w
			}).catch(function(e) {
				return i.ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["downloadProgresiveJpegUsingMediaStreaming unexpected runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), o("WAResultOrError").makeError("runtime-error");
			});
			return U.success ? (l.addPoint("resign_cdn_url_download_end"), U) : (D(l, U), U);
		}), I.apply(this, arguments);
	}
	function T(t) {
		var r = t.abortSignal, a = t.dbCallbacks, i = t.fullSizePlaintextHash, l = t.fullsizePromise, u = t.logger, c = t.mediaDownloadFlow, d = t.mediaEntries, m = t.msgIdOfRecentMediaEntry, p = t.recentMediaEntry, _ = p.serverMediaType, f = o("WAIsPreviewSupported").checkPreviewSupport(p), g = f[0], h = f[1];
		if (g === o("WAIsPreviewSupported").PjpegPreviewSupport.NO && h === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO) return u.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["preview not supported"]))), (C || (C = n("Promise"))).resolve(o("WAResultOrError").makeError("preview-not-supported"));
		if (h === o("WAIsPreviewSupported").DownloadablePreviewSupport.DuplicatedWithFullSize) return u.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["preview duplicated with fullsize"]))), l;
		var y = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
			downloadEntry: c.downloadEntry,
			isPreview: !0,
			msgType: null,
			protocolMsgId: null,
			triggerUIView: null
		}), b = o("WAMediaManagerPrepareMediaDownload").mediaManagerPrepareMediaDownload({
			hash: i,
			logger: u,
			mediaDownloadFlow: y,
			mediaEntry: p
		}), v = b.logDownloadResult;
		y.addAnnotations({
			bool: { isMediaManager: !0 },
			string: {
				downloadKind: "fullsizeAndPreview",
				fullSizeMediaType: _,
				mediaType: "preview",
				sanitisedMediaHash: o("WAHashUtils").sanitisePlaintextHash(i)
			}
		});
		var R = o("WADownloadPreviewOnlyTask").downloadOrRestorePreviewOnly({
			abortSignal: r,
			dbCallbacks: a,
			fullSizePlaintextHash: i,
			logger: u,
			mediaDownloadFlow: y,
			mediaEntries: d,
			msgIdOfRecentMediaEntry: m,
			recentMediaEntry: p
		});
		return v(S(R, [m, p], y)).then(function(e) {
			return e.success ? y.endSuccess() : y.endFail(e.error, { string: { failReason: e.error } }), e;
		}).catch(function(e) {
			return y.endFail("runtime-error", { string: { failReason: o("WAErrorMessage").maybeGetMessageFromError(e) } }), o("WAResultOrError").makeError("runtime-error");
		});
	}
	function D(e, t) {
		e.addPoint("media_streaming_fail", { string: { wa_media_download_streaming_fail_reason: o("WAErrorMessage").maybeGetMessageFromError(t.error) } });
	}
	function x(e) {
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
	l.startDownloadFullSizeAndPreviewTask = b;
}), 98);
