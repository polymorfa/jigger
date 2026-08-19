__d("WADownloadMedia", [
	"Promise",
	"WAByteArray",
	"WACryptoSha256",
	"WACryptoUtils",
	"WADownloadAndDecryptMedia",
	"WADownloadDownloadablePreview",
	"WADownloadProgressiveJpegPlaintextStreamer",
	"WADownloadProgressiveJpegPreview",
	"WAErrorMessage",
	"WAHashUtils",
	"WAMediaCrypto",
	"WAMediaUtils",
	"WAPrepareMediaDownload",
	"WAProgressiveJpegAddJPEGTrailingTag",
	"WAProgressiveJpegGetPJpegDetails",
	"WAPromiseManagement",
	"WAResultOrError",
	"WAStreamAsyncIterator",
	"WATagsLogger",
	"WATypedArraysConcat",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["hash"], s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R = o("WATagsLogger").TAGS(["MediaDownload"]);
	function L(e) {
		var t = e.downloadMediaMetric, n = e.handleMediaPreviewBeforeDownload, r = e.handleMediaPreviewDownload, a = e.handleMediaPreviewDownloadFailed, i = e.hash, l = e.mediaEntry, s = e.protocolMsgId, u = o("WAPrepareMediaDownload").prepareMediaDownload({
			mediaDownloadFlow: t,
			mediaEntry: l,
			hash: i,
			logger: R
		}), c = u.logDownloadResult;
		return c(k({
			downloadMediaMetric: t,
			hash: i,
			mediaEntry: l,
			protocolMsgId: s,
			handleMediaPreviewDownload: r,
			handleMediaPreviewBeforeDownload: n,
			handleMediaPreviewDownloadFailed: a
		}));
	}
	var E = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.downloadMediaMetric, r = e.handleMediaPreviewBeforeDownload, a = e.handleMediaPreviewDownload, i = e.handleMediaPreviewDownloadFailed, l = e.hash, p = e.mediaEntry, _ = e.protocolMsgId, f = o("WAMediaUtils").validateDecodedMediaEntryForDownload(p);
			if (!f.success) return R.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["mediaEntry is incomplete. ", ""])), f.error), f;
			var g = f.value, h = g.directPath, y = g.fileEncSha256, C = g.fileSha256, b = g.mediaKey, v = g.serverMediaType, L = o("WAProgressiveJpegGetPJpegDetails").maybeGetProgressiveJpegDetailsUsingMediaEntry(p);
			L.success === !1 && (R.WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to get ProgressiveJpeg details: ", ""])), L.error), t.addPoint(L.error));
			var E = L.success === !0 ? L.value : null, k = function(t) {
				if (t == null) return (S || (S = n("Promise"))).resolve();
				var e = o("WAMediaCrypto").convertServerMediaTypeToPreviewMediaType(v);
				return e == null ? (R.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["media: mediaPreview - unsupported preview media type ", ""])), v), (S || (S = n("Promise"))).resolve()) : a(l, t, e, _).then(function() {});
			};
			if (E != null && o("WAMediaUtils").isTransformStreamSupported() && v === "image") {
				var T = yield P({
					directPath: h,
					downloadFlow: t,
					fileEncSha256: y,
					handleMediaPreviewBlob: k,
					hash: l,
					mediaKey: b,
					progressiveJpegDetails: E,
					serverMediaType: v,
					fileSha256: C,
					handleMediaPreviewBeforeDownload: r,
					handleMediaPreviewDownloadFailed: i
				});
				if (T.success) return o("WAResultOrError").makeResult({
					mimeType: o("WAMediaUtils").getMimeTypeFromServerMediaType(v),
					plaintext: T.value,
					serverMediaType: v
				});
				var D = T.error;
				switch (R.WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"Media Streaming failed to download progressive jpeg. Reason: ",
					". PlaintextHash: ",
					""
				])), D, o("WAHashUtils").sanitisePlaintextHash(l)), D) {
					case "signature-expired":
					case "request-error": return R.LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
						"Skipping fallback for ",
						". PlaintextHash: ",
						""
					])), D, o("WAHashUtils").sanitisePlaintextHash(l)), o("WAResultOrError").makeError(D);
				}
			}
			t == null || t.addPoint("fallback_to_non_streaming_download");
			var x = $({
				hash: l,
				mediaEntry: p,
				progressiveJpegDetails: E,
				protocolMsgId: _,
				serverMediaType: v,
				handleMediaPreviewBeforeDownload: r,
				handleMediaPreviewDownloadFailed: i,
				downloadEntry: t.downloadEntry,
				triggerUIView: t.triggerUIView
			});
			return x.then(function(e) {
				return e.success === !1 ? k(null) : k(e.value);
			}), I({
				downloadMediaMetric: t,
				mediaEntry: f.value
			});
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), k = o("WAPromiseManagement").cacheWhilePending(function(e) {
		var t = e.hash;
		return t;
	}, E), I = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.abortSignal, n = e.downloadMediaMetric, r = e.mediaEntry, a = r.directPath, i = r.fileEncSha256, l = r.fileSha256, s = r.mediaKey, u = r.serverMediaType, c = yield D({
				abortSignal: t,
				downloadFlow: n,
				mediaTypeDetails: {
					mediaType: u,
					type: "regular"
				},
				directPath: a,
				fileEncSha256: i,
				fileSha256: l,
				mediaKey: s
			});
			return c.success ? o("WAResultOrError").makeResult({
				mimeType: o("WAMediaUtils").getMimeTypeFromServerMediaType(u),
				plaintext: c.value,
				serverMediaType: u
			}) : c;
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), T = o("WAPromiseManagement").cacheWhilePending(function(e) {
		var t = e.hash;
		return t;
	}, function(t) {
		var n = t.hash, r = babelHelpers.objectWithoutPropertiesLoose(t, e), a = o("WAPrepareMediaDownload").prepareMediaDownload({
			hash: n,
			mediaDownloadFlow: r.downloadMediaMetric,
			mediaEntry: r.mediaEntry,
			logger: R
		}), i = a.logDownloadResult;
		return i(I(r));
	});
	function D(e) {
		return x.apply(this, arguments);
	}
	function x() {
		return x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.abortSignal, n = e.directPath, r = e.downloadFlow, a = e.fileEncSha256, i = e.fileSha256, l = e.mediaKey, s = e.mediaTypeDetails, u = o("WAHashUtils").toPlaintextHash(i), c = yield o("WADownloadAndDecryptMedia").downloadAndDecryptMedia({
				abortSignal: t,
				directPath: n,
				eventFlow: r,
				fileEncSha256: a,
				mediaKey: l,
				mediaTypeDetails: s,
				plaintextHash: u
			});
			if (c.success === !1) {
				var d = c.error;
				switch (d) {
					case "signature-expired":
					case "media-not-found": return o("WAResultOrError").makeError(d);
					case "enc-hash-mismatch": return R.ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["downloadMedia: enc-hash-mismatch"]))), o("WAResultOrError").makeError(d);
					default: return o("WAResultOrError").makeError(d);
				}
			} else {
				var m = c.value;
				return o("WAResultOrError").makeResult(m);
			}
		}), x.apply(this, arguments);
	}
	function $(e) {
		var t = e.downloadEntry, n = e.handleMediaPreviewBeforeDownload, r = e.handleMediaPreviewDownloadFailed, a = e.hash, i = e.mediaEntry, l = e.progressiveJpegDetails, s = e.protocolMsgId, u = e.serverMediaType, c = e.triggerUIView;
		return l == null ? o("WADownloadDownloadablePreview").maybeDownloadDownloadablePreview(s, a, u, i, t, {
			handleMediaPreviewBeforeDownload: n,
			handleMediaPreviewDownloadFailed: r
		}, c) : o("WADownloadProgressiveJpegPreview").maybeDownloadProgressiveJpegPreview({
			protocolMsgId: s,
			hash: a,
			serverMediaType: u,
			mediaEntry: i,
			progressiveJpegDetails: l,
			handleMediaPreviewBeforeDownload: n,
			handleMediaPreviewDownloadFailed: r,
			downloadEntry: t,
			triggerUIView: c
		}).then(function(e) {
			return e.success !== !0 ? o("WADownloadDownloadablePreview").maybeDownloadDownloadablePreview(s, a, u, i, t, {
				handleMediaPreviewBeforeDownload: n,
				handleMediaPreviewDownloadFailed: r
			}, c) : e;
		});
	}
	function P(e) {
		return N.apply(this, arguments);
	}
	function N() {
		return N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.directPath, n = e.downloadFlow, r = e.fileEncSha256, a = e.fileSha256, i = e.handleMediaPreviewBeforeDownload, l = e.handleMediaPreviewBlob, s = e.handleMediaPreviewDownloadFailed, u = e.hash, c = e.mediaKey, d = e.progressiveJpegDetails, m = e.serverMediaType, p = R.TAGS(["MediaStreaming"]);
			p.LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Using Media Streaming to download ProgressiveJpeg. PlaintextHash: ", ""])), o("WAHashUtils").sanitisePlaintextHash(u)), n.addPoint("media_streaming_start");
			var S = o("WADownloadProgressiveJpegPreview").getPreviewTargetScan(d.scanLengths) - 1;
			p.LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
				"Targeting scanIndex ",
				" for preview. PlaintextHash: ",
				""
			])), S, o("WAHashUtils").sanitisePlaintextHash(u)), n.addAnnotations({ int: { scans: d.scanLengths.length } }), i(u);
			var L = yield o("WADownloadProgressiveJpegPlaintextStreamer").downloadProgressiveJpegPlaintextUsingStreams({
				directPath: t,
				eventFlow: n,
				fileEncSha256: r,
				mediaKey: c,
				progressiveJpegDetails: d,
				serverMediaType: m
			});
			if (L.success === !1) return n.addPoint("media_streaming_fail", { string: { wa_media_download_streaming_fail_reason: L.error } }), s(u, L.error), L;
			n.addPoint("download_pjpeg_preview_start");
			var E = [], k = 0;
			try {
				var I = !1, T = !1, D;
				try {
					for (var x = babelHelpers.asyncIterator(o("WAStreamAsyncIterator").streamAsyncIterator(L.value)), $; I = !($ = yield x.next()).done; I = !1) {
						var P = $.value;
						{
							if (P == null) continue;
							if (p.LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
								"Processing scan ",
								" for plaintextHash ",
								""
							])), k, o("WAHashUtils").sanitisePlaintextHash(u)), E.push(P), k === S) {
								n.addPoint("media_streaming_preview_processed"), p.LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
									"Handling preview from scan ",
									" for plaintextHash ",
									""
								])), k, o("WAHashUtils").sanitisePlaintextHash(u));
								var N = o("WAByteArray").uint8ArrayToBuffer(o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [].concat(E, [o("WAProgressiveJpegAddJPEGTrailingTag").JPEG_TRAILING_TAG])));
								l(N), n.addPoint("download_pjpeg_preview_end");
							}
							k++;
						}
					}
				} catch (e) {
					T = !0, D = e;
				} finally {
					try {
						I && x.return != null && (yield x.return());
					} finally {
						if (T) throw D;
					}
				}
				k < S && (p.ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["pjpeg stream ended before reaching previewTargetScanIndex for plaintextHash ", ""])), o("WAHashUtils").sanitisePlaintextHash(u)), n.addPoint("download_pjpeg_preview_fail"));
				var M = o("WAByteArray").uint8ArrayToBuffer(o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [].concat(E))), w = yield o("WACryptoSha256").sha256(M);
				return o("WACryptoUtils").arrayBuffersEqual(a, w) ? (p.LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["Media streaming for ProgressiveJpeg download successful. PlaintextHash: ", ""])), o("WAHashUtils").sanitisePlaintextHash(u)), n.addPoint("media_streaming_end"), o("WAResultOrError").makeResult(M)) : (p.WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose(["Media streaming for ProgressiveJpeg download failed due to plaintext hash mismatch. PlaintextHash: ", ""])), o("WAHashUtils").sanitisePlaintextHash(u)), n.addPoint("media_streaming_fail", { string: { wa_media_download_streaming_fail_reason: "hash-mismatch" } }), o("WAResultOrError").makeError("hash-mismatch"));
			} catch (e) {
				return p.ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["Exception occurred during Media Streaming: Reason: ", ""])), e), k < S && (n.addPoint("download_pjpeg_preview_fail"), s(u, o("WAErrorMessage").maybeGetMessageFromError(e))), n == null || n.addPoint("media_streaming_fail", { string: { wa_media_download_streaming_fail_reason: o("WAErrorMessage").maybeGetMessageFromError(e) } }), o("WAResultOrError").makeError("stream-error");
			}
		}), N.apply(this, arguments);
	}
	l.mediaDownloadLogger = R, l.downloadMedia = L, l.downloadFullMediaOnly = I, l.cachedDownloadFullMediaOnly = T, l.downloadMediaImpl = D;
}), 98);
