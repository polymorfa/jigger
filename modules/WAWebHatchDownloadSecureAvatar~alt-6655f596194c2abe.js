__d("WAWebHatchDownloadSecureAvatar", [
	"WAAbortError",
	"WALogger",
	"WARaceSignal",
	"WAWebDownloadManager",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMmsMediaTypes",
	"WAWebStartMediaDownloadQpl",
	"WAWebWamEnumDownloadOriginType",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = "image/webp", u = "video/mp4", c = 3e4;
	async function d(t, n) {
		if (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(t.filehash)) return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
		var a = t.mediaType === "video", i = a ? o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO : o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE, l = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({ entryPoint: "DownloadHatchAvatar" }), d = new AbortController(), m = !1, p = window.setTimeout(function() {
			m = !0, d.abort();
		}, c);
		try {
			return await r("WARaceSignal")([n, d.signal], async function(e) {
				var n, r = await o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt({
					directPath: t.directPath,
					encFilehash: t.encFilehash,
					filehash: t.filehash,
					mediaKey: t.mediaKey,
					mimetype: t.mimeType,
					staticUrl: t.staticUrl,
					type: i,
					signal: e,
					userDownloadAttemptCount: 0,
					downloadQpl: l,
					downloadOrigin: o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.PROFILE_PICTURE
				}), c = (n = t.mimeType) != null ? n : a ? u : s, d = new Blob([r], { type: c });
				o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(t.filehash, d);
				var m = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
				return l.endSuccess(), m;
			});
		} catch (t) {
			var _ = r("getErrorSafe")(t);
			if (_.name === o("WAAbortError").ABORT_ERROR) {
				var f = m ? "download_timed_out" : "download_aborted";
				return l.endFailWithError(f, f), null;
			}
			return l.endFailWithError("download_failed", _.message), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["hatch: secure avatar download failed"]))).catching(_).sendLogs("hatch-secure-avatar-download-failed"), null;
		} finally {
			window.clearTimeout(p);
		}
	}
	l.downloadHatchSecureMedia = d;
}), 98);
