__d("WADownloadMediaPreviewV2", [
	"WADownloadMedia",
	"WADownloadProgressiveJpegPreview",
	"WAMediaCrypto",
	"WAMediaUtils",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.abortSignal, r = t.hash, a = t.logger, i = t.mediaDownloadFlow, l = t.mediaEntry, s = t.progressiveJpegDetails, u = l.serverMediaType, c = o("WAMediaUtils").getMimeTypeFromServerMediaType(u), d = s == null ? o("WAResultOrError").makeError("jpeg-stream-not-supported") : yield o("WADownloadProgressiveJpegPreview").maybeDownloadProgressiveJpegPreviewV2({
				abortSignal: n,
				hash: r,
				serverMediaType: u,
				mediaEntry: l,
				progressiveJpegDetails: s,
				mediaDownloadFlow: i
			});
			if (d.success === !0) return o("WAResultOrError").makeResult({
				plaintext: d.value,
				mimeType: c,
				serverMediaType: u
			});
			i.addPoint("fallback_to_downloadable_thumbnail");
			var m = l.downloadableThumbnail;
			if ((m == null ? void 0 : m.directPath) == null) return o("WAResultOrError").makeError("media-not-found");
			var p = o("WAMediaUtils").validateDownloadableThumbnailForDownload(m);
			if (p.success === !1) return a.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["preview mediaEntry is incomplete: ", ""])), p.error), o("WAResultOrError").makeError(p.error[0]);
			var _ = p.value, f = _.directPath, g = _.fileEncSha256, h = _.fileSha256, y = _.mediaKey, C = o("WAMediaCrypto").convertServerMediaTypeToPreviewMediaType(u);
			if (C == null) return o("WAResultOrError").makeError("request-error");
			var b = yield o("WADownloadMedia").downloadMediaImpl({
				abortSignal: n,
				downloadFlow: i,
				mediaTypeDetails: {
					messageType: C,
					type: "preview"
				},
				directPath: f,
				fileEncSha256: g,
				fileSha256: h,
				mediaKey: y
			});
			return b.success === !1 ? b : o("WAResultOrError").makeResult({
				plaintext: b.value,
				mimeType: c,
				serverMediaType: u
			});
		}), u.apply(this, arguments);
	}
	l.downloadMediaPreview = s;
}), 98);
