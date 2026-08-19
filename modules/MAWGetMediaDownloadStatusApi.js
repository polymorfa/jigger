__d("MAWGetMediaDownloadStatusApi", [
	"MAWCreateMaybeAddPointForMediaRender",
	"MAWDbChunkTxns",
	"MAWDbMedia",
	"MAWGetMediaApi",
	"MAWIndexedDb",
	"MAWLoggerUtils",
	"MAWMediaDownloadStatus",
	"MAWTransactionMode",
	"MWFBLogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MWFBLogger").MWMediaLogger().tags([o("MAWLoggerUtils").Tag.MediaDownload, o("MAWLoggerUtils").Tag.MessageReceive]), c = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var a = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(n);
			a("get_media_download_status_api_start", { string: { fetch_by: "mediaId" } }), a("get_media_download_status_api_get_media_start");
			var i = yield o("MAWGetMediaApi").getMediaByMediaId(t);
			if (a("get_media_download_status_api_get_media_end", { bool: { has_media: i != null } }), i == null) return a("get_media_download_status_api_fail", { string: { fail_reason: "media_not_found" } }), u.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["getMediaDownloadStatusByMediaId - media not found for mediaId: ", ""])), t), {
				mainMediaStatus: r("MAWMediaDownloadStatus").MISSING_FILE,
				mainMediaStatusDetails: "get_by_mediaId_missing_media",
				previewMediaStatus: r("MAWMediaDownloadStatus").MISSING_FILE,
				previewMediaStatusDetails: "get_by_mediaId_missing_media"
			};
			a("get_media_download_status_api_get_status_from_media_start");
			var l = yield m(i);
			return a("get_media_download_status_api_get_status_from_media_end"), a("get_media_download_status_api_end"), l;
		});
		return function(n, r) {
			return t.apply(this, arguments);
		};
	})(), d = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(t);
			n("get_media_download_status_api_start", { string: { fetch_by: "plaintextHash" } }), n("get_media_download_status_api_get_media_start");
			var a = yield o("MAWGetMediaApi").getMediaByPlaintextHash(e);
			if (n("get_media_download_status_api_get_media_end", { bool: { has_media: a != null } }), a == null) return n("get_media_download_status_api_fail", { string: { fail_reason: "media_not_found" } }), u.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["getMediaDownloadStatusByPlaintextHash - media not found for plaintextHash: ", ""])), e), {
				mainMediaStatus: r("MAWMediaDownloadStatus").MISSING_FILE,
				mainMediaStatusDetails: "get_by_mediaPlaintextHash_missing_media",
				previewMediaStatus: r("MAWMediaDownloadStatus").MISSING_FILE,
				previewMediaStatusDetails: "get_by_mediaPlaintextHash_missing_media"
			};
			var i = yield m(a);
			return n("get_media_download_status_api_get_status_from_media_end"), n("get_media_download_status_api_end"), i;
		});
		return function(n, r) {
			return e.apply(this, arguments);
		};
	})();
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield _(e), n = t.hasDownloadedMainMedia, o = t.hasDownloadedThumbnail, a = t.hasThumbnail;
			return {
				mainMediaStatus: n ? r("MAWMediaDownloadStatus").SUCCESS : r("MAWMediaDownloadStatus").MISSING_FILE,
				mainMediaStatusDetails: "status_from_media",
				previewMediaStatus: a ? o ? r("MAWMediaDownloadStatus").SUCCESS : r("MAWMediaDownloadStatus").MISSING_FILE : void 0,
				previewMediaStatusDetails: "status_from_media"
			};
		}), p.apply(this, arguments);
	}
	var _ = o("MAWIndexedDb").makeMsgrTransactor({ chunk: o("MAWTransactionMode").READONLY }, "checkMediaDownloadStatus", function(e) {
		return function(t) {
			var n = f(t);
			return o("MAWDbChunkTxns").hasMediaChunk(e, t.hashedPlaintextHash).then(function(e) {
				return {
					hasDownloadedMainMedia: e,
					hasDownloadedThumbnail: (n == null ? void 0 : n.jpegThumbnail) != null,
					hasThumbnail: n != null
				};
			});
		};
	});
	function f(e) {
		var t, n;
		switch (e.mediaType) {
			case o("MAWDbMedia").MEDIA_TYPE.IMAGE: return { jpegThumbnail: (t = e.validatedImageInfo) == null ? void 0 : t.jpegThumbnail };
			case o("MAWDbMedia").MEDIA_TYPE.VIDEO: return { jpegThumbnail: (n = e.validatedVideoInfo) == null ? void 0 : n.jpegThumbnail };
		}
	}
	l.getMediaDownloadStatusByMediaId = c, l.getMediaDownloadStatusByPlaintextHash = d;
}), 98);
