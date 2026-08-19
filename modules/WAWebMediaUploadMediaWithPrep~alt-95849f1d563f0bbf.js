__d("WAWebMediaUploadMediaWithPrep", [
	"invariant",
	"WALogger",
	"WAMediaCalculateFilehash",
	"WAWebABProps",
	"WAWebCanvasUtils",
	"WAWebCryptoRandomMediaKey",
	"WAWebImageUtils",
	"WAWebMediaConstants",
	"WAWebMediaEntry",
	"WAWebMediaGatingShouldClearUploadedBlobs",
	"WAWebMediaInMemoryKeyCache",
	"WAWebMediaMmsV4Upload",
	"WAWebMediaPrepHelpers",
	"WAWebMediaUploadMmsThumbnail",
	"WAWebMmsMediaTypes",
	"WAWebMsgType",
	"WAWebURLUtils",
	"WAWebWamEnumUploadOriginType",
	"nullthrows"
], (function(t, n, r, o, a, i, l, s) {
	var e, u;
	async function c(t, n) {
		var a, i, l, c, d, m = t.mediaObject;
		m || o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("media-fault: incorrect media object for created msg"), m || s(0, 56330);
		var p = o("WAWebMmsMediaTypes").getMsgMediaType(t), _, f = (a = n.canEnableFastForward) != null ? a : !0;
		f === !0 && (_ = m.entries.getUploadEntry(n.isMediaCryptoExpectedForChat === !0));
		var g = _ instanceof o("WAWebMediaEntry").EncryptedMediaEntry ? {
			key: _.mediaKey,
			timestamp: _.mediaKeyTimestamp
		} : r("WAWebCryptoRandomMediaKey")(), h = m.contentInfo, y = h.fullPreviewData, C = h.fullPreviewSize, b = t.safe(), v = o("WAWebMediaPrepHelpers").shouldUploadThumbnail(b), S = o("WAWebABProps").getABPropConfigValue("wa_web_enable_status_hq_thumbnail"), R = !1, L = !1;
		S ? (R = (!y || y.size() > o("WAWebMediaConstants").MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES) && v, L = b.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && v) : (R = !y && v, L = v);
		var E = !C && v, k = t.body;
		if ((R || E || L) && m.contentInfo.preview) try {
			var I = await o("WAWebImageUtils").base64ImageToCanvas(m.contentInfo.preview.url()), T = R ? o("WAWebABProps").getABPropConfigValue("web_pdf_thumbnail_size_in_bytes") : o("WAWebMediaConstants").MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES, D = await o("WAWebCanvasUtils").generateMicroThumb(I, T, {
				mimetype: "image/jpeg",
				maxAttempts: 10
			});
			y = m.contentInfo.preview, C = {
				width: D.width,
				height: D.height
			}, k = r("WAWebURLUtils").parseDataURL(D.dataUrl).data;
		} catch (e) {
			o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[media] microthumb generation failed, skipping: ", ""])), e).sendLogs("media-microthumb-generation-failed");
		}
		var x = y && C && v, $ = y && x === !0 ? r("WAWebMediaUploadMmsThumbnail")({
			thumbnail: y,
			mediaKeyInfo: g,
			mediaType: r("nullthrows")(o("WAWebMediaPrepHelpers").getMediaTypeForThumbnails(b)),
			uploadOrigin: (i = n.uploadOriginForChat) != null ? i : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
			forwardedFromWeb: !!t.forwardedFromWeb,
			isViewOnce: !!t.isViewOnce
		}) : Promise.resolve(null), P = {
			mimetype: t.mimetype,
			canEnableFastForward: n.canEnableFastForward,
			mediaObject: m,
			mediaType: p,
			forwardedFromWeb: !!t.forwardedFromWeb,
			uploadOrigin: (l = n.uploadOriginForChat) != null ? l : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
			isViewOnce: !!t.isViewOnce,
			earlyUpload: n.earlyUpload
		}, N = n.isMediaCryptoExpectedForChat === !0 ? o("WAWebMediaMmsV4Upload").uploadMedia(babelHelpers.extends({}, P, { mediaKeyInfo: g })) : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia(babelHelpers.extends({}, P, { calculateToken: o("WAMediaCalculateFilehash").getRandomFilehash })), M = m.filehash;
		o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() && M != null && o("WAWebMediaInMemoryKeyCache").MediaKeyCache.put(M, g);
		var w = await Promise.all([N, $]), A = w[0], F = w[1];
		r("WAWebMediaGatingShouldClearUploadedBlobs")(p) && m.clearBlob({ reset: !0 });
		var O = A.mediaEntry;
		if (!O) return {
			mediaResult: A,
			mmsThumbnailData: null,
			body: k,
			fbid: null
		};
		o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() && M != null && o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(M);
		var B = (c = o("WAWebMediaPrepHelpers").maybeGetThumbnailData({
			uploadThumbnailResult: F,
			mediaResultEntry: O,
			uploadEncryptedThumbnail: x,
			mediaObject: m,
			fullPreviewSize: C,
			mediaType: p
		})) != null ? c : {}, W = O instanceof o("WAWebMediaEntry").UnencryptedMediaEntry && (d = O.fbid) != null ? d : null;
		return {
			mediaResult: A,
			mmsThumbnailData: B,
			body: k,
			fbid: W
		};
	}
	l.uploadMediaWithPrep = c;
}), 98);
