__d("WADownloadProgressiveJpegUsingMediaStreaming", [
	"WAByteArray",
	"WACryptoSha256",
	"WACryptoUtils",
	"WADownloadProgressiveJpegPlaintextStreamer",
	"WADownloadProgressiveJpegPreview",
	"WAErrorMessage",
	"WAMediaUtils",
	"WAProgressiveJpegAddJPEGTrailingTag",
	"WAResolvable",
	"WAResultOrError",
	"WAStreamAsyncIterator",
	"WATypedArraysConcat"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _;
	async function f(t) {
		var n = t.abortSignal, r = t.directPath, a = t.downloadFlow, i = t.fileEncSha256, l = t.fileSha256, m = t.logger, p = t.mediaKey, _ = t.progressiveJpegDetails, f = t.serverMediaType, h = m.TAGS(["MediaStreaming"]);
		h.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Using Media Streaming to download ProgressiveJpeg."]))), a.addPoint("create_pjpeg_stream_start");
		var y = await o("WADownloadProgressiveJpegPlaintextStreamer").downloadProgressiveJpegPlaintextUsingStreams({
			abortSignal: n,
			directPath: r,
			eventFlow: a,
			fileEncSha256: i,
			mediaKey: p,
			progressiveJpegDetails: _,
			serverMediaType: f
		}).catch(function(e) {
			return h.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["create DownloadAndDecryptPJpegStream unexpected runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), o("WAResultOrError").makeError("runtime-error");
		});
		if (y.success === !1) return a.addPoint("create_pjpeg_stream_fail"), y;
		a.addPoint("create_pjpeg_stream_end");
		var C = new (o("WAResolvable")).Resolvable(), b = !1, v = g({
			downloadFlow: a,
			fileSha256: l,
			mediaStreamingLogger: h,
			previewResolvable: C,
			progressiveJpegDetails: _,
			progressiveJpegDownloadStream: y.value,
			serverMediaType: f
		}).then(function(e) {
			return b = !0, h.DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["handleProgressiveJpegDownloadStream completed"]))), e;
		}).catch(function(e) {
			return b = !0, h.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["handleProgressiveJpegDownloadStream unexpected runtime-error: ", ""])), o("WAErrorMessage").maybeGetMessageFromError(e)), C.reject(e), o("WAResultOrError").makeError("runtime-error");
		}), S = o("WAMediaUtils").getMimeTypeFromServerMediaType(f);
		function R(e) {
			return e.success === !1 ? e : o("WAResultOrError").makeResult({
				mimeType: S,
				plaintext: e.value,
				serverMediaType: f
			});
		}
		var L = v.then(R), E = C.promise.then(R), k = await C.promise;
		if (k.success === !0 && b === !0 && h.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["fullsizeResolvable is settled before previewResolvable"]))), k.success === !0) return o("WAResultOrError").makeResult({
			fullsizePromise: L,
			previewPromise: E
		});
		var I = await v;
		return k.success, I.success === !0 ? o("WAResultOrError").makeResult({
			fullsizePromise: L,
			previewPromise: E
		}) : (I.success, I);
	}
	async function g(e) {
		var t = e.downloadFlow, n = e.fileSha256, r = e.mediaStreamingLogger, a = e.previewResolvable, i = e.progressiveJpegDetails, l = e.progressiveJpegDownloadStream;
		t.addPoint("download_pjpeg_preview_start");
		var s = 0, u = o("WADownloadProgressiveJpegPreview").getPreviewTargetScan(i.scanLengths) - 1;
		try {
			var c = [], d = !1, f = !1, g;
			try {
				for (var h = babelHelpers.asyncIterator(o("WAStreamAsyncIterator").streamAsyncIterator(l)), y; d = !(y = await h.next()).done; d = !1) {
					var C = y.value;
					{
						if (C == null) continue;
						if (c.push(C), s === u) {
							t.addPoint("media_streaming_preview_processed");
							var b = o("WAByteArray").uint8ArrayToBuffer(o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [].concat(c, [o("WAProgressiveJpegAddJPEGTrailingTag").JPEG_TRAILING_TAG])));
							a.resolve(o("WAResultOrError").makeResult(b)), t.addPoint("download_pjpeg_preview_end");
						}
						s++;
					}
				}
			} catch (e) {
				f = !0, g = e;
			} finally {
				try {
					d && h.return != null && await h.return();
				} finally {
					if (f) throw g;
				}
			}
			a.isSettled === !1 && (r.ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["pjpeg stream ended before reaching previewTargetScanIndex"]))), a.resolve(o("WAResultOrError").makeError("runtime-error")), t.addPoint("download_pjpeg_preview_fail"));
			var v = o("WAByteArray").uint8ArrayToBuffer(o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [].concat(c))), S = await o("WACryptoSha256").sha256(v);
			return o("WACryptoUtils").arrayBuffersEqual(n, S) ? o("WAResultOrError").makeResult(v) : (r.WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Media streaming for ProgressiveJpeg download failed due to plaintext hash mismatch."]))), o("WAResultOrError").makeError("hash-mismatch"));
		} catch (e) {
			return r.ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Exception occurred during Media Streaming: Reason: ", ""])), e), a.isSettled === !1 && (a.resolve(o("WAResultOrError").makeError("runtime-error")), t.addPoint("download_pjpeg_preview_fail")), o("WAResultOrError").makeError("runtime-error");
		}
	}
	l.downloadProgresiveJpegUsingMediaStreaming = f;
}), 98);
