__d("MAWGetMediaDownloadStatusApi", [
	"MAWCreateMaybeAddPointForMediaRender",
	"MAWDbChunkTxns",
	"MAWDbMedia",
	"MAWGetMediaApi",
	"MAWIndexedDb",
	"MAWLoggerUtils",
	"MAWMediaDownloadStatus",
	"MAWTransactionMode",
	"MWFBLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MWFBLogger").MWMediaLogger().tags([o("MAWLoggerUtils").Tag.MediaDownload, o("MAWLoggerUtils").Tag.MessageReceive]), c = async function(n, a) {
		var t = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(a);
		t("get_media_download_status_api_start", { string: { fetch_by: "mediaId" } }), t("get_media_download_status_api_get_media_start");
		var i = await o("MAWGetMediaApi").getMediaByMediaId(n);
		if (t("get_media_download_status_api_get_media_end", { bool: { has_media: i != null } }), i == null) return t("get_media_download_status_api_fail", { string: { fail_reason: "media_not_found" } }), u.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["getMediaDownloadStatusByMediaId - media not found for mediaId: ", ""])), n), {
			mainMediaStatus: r("MAWMediaDownloadStatus").MISSING_FILE,
			mainMediaStatusDetails: "get_by_mediaId_missing_media",
			previewMediaStatus: r("MAWMediaDownloadStatus").MISSING_FILE,
			previewMediaStatusDetails: "get_by_mediaId_missing_media"
		};
		t("get_media_download_status_api_get_status_from_media_start");
		var l = await m(i);
		return t("get_media_download_status_api_get_status_from_media_end"), t("get_media_download_status_api_end"), l;
	}, d = async function(t, n) {
		var e = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(n);
		e("get_media_download_status_api_start", { string: { fetch_by: "plaintextHash" } }), e("get_media_download_status_api_get_media_start");
		var a = await o("MAWGetMediaApi").getMediaByPlaintextHash(t);
		if (e("get_media_download_status_api_get_media_end", { bool: { has_media: a != null } }), a == null) return e("get_media_download_status_api_fail", { string: { fail_reason: "media_not_found" } }), u.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["getMediaDownloadStatusByPlaintextHash - media not found for plaintextHash: ", ""])), t), {
			mainMediaStatus: r("MAWMediaDownloadStatus").MISSING_FILE,
			mainMediaStatusDetails: "get_by_mediaPlaintextHash_missing_media",
			previewMediaStatus: r("MAWMediaDownloadStatus").MISSING_FILE,
			previewMediaStatusDetails: "get_by_mediaPlaintextHash_missing_media"
		};
		var i = await m(a);
		return e("get_media_download_status_api_get_status_from_media_end"), e("get_media_download_status_api_end"), i;
	};
	async function m(e) {
		var t = await p(e), n = t.hasDownloadedMainMedia, o = t.hasDownloadedThumbnail, a = t.hasThumbnail;
		return {
			mainMediaStatus: n ? r("MAWMediaDownloadStatus").SUCCESS : r("MAWMediaDownloadStatus").MISSING_FILE,
			mainMediaStatusDetails: "status_from_media",
			previewMediaStatus: a ? o ? r("MAWMediaDownloadStatus").SUCCESS : r("MAWMediaDownloadStatus").MISSING_FILE : void 0,
			previewMediaStatusDetails: "status_from_media"
		};
	}
	var p = o("MAWIndexedDb").makeMsgrTransactor({ chunk: o("MAWTransactionMode").READONLY }, "checkMediaDownloadStatus", function(e) {
		return function(t) {
			var n = _(t);
			return o("MAWDbChunkTxns").hasMediaChunk(e, t.hashedPlaintextHash).then(function(e) {
				return {
					hasDownloadedMainMedia: e,
					hasDownloadedThumbnail: (n == null ? void 0 : n.jpegThumbnail) != null,
					hasThumbnail: n != null
				};
			});
		};
	});
	function _(e) {
		var t, n;
		switch (e.mediaType) {
			case o("MAWDbMedia").MEDIA_TYPE.IMAGE: return { jpegThumbnail: (t = e.validatedImageInfo) == null ? void 0 : t.jpegThumbnail };
			case o("MAWDbMedia").MEDIA_TYPE.VIDEO: return { jpegThumbnail: (n = e.validatedVideoInfo) == null ? void 0 : n.jpegThumbnail };
		}
	}
	l.getMediaDownloadStatusByMediaId = c, l.getMediaDownloadStatusByPlaintextHash = d;
}), 98);
