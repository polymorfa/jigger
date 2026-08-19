__d("MAWGetThumbnailBlobDataUrlByMediaIdApi", [
	"MAWCreateMaybeAddPointForHeroTracing",
	"MAWCreateMaybeAddPointForMediaRender",
	"MAWDbChunkTxns",
	"MAWDbMedia",
	"MAWDbMediaTxns",
	"MAWIndexedDb",
	"MAWMaybeWithTimeout",
	"MAWMediaPreviewDownloadManager",
	"MAWTransactionMode",
	"MWFBLogger",
	"MpsMediaEntryCache",
	"MpsMediaManagerV2",
	"WAErrorMessage",
	"WAHashUtils",
	"WAMediaManager",
	"WAResultOrError",
	"WAStartMediaDownloadQplFlow",
	"blobToDataUri"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v = o("MWFBLogger").MWMediaLogger().tags(["getThumbnailBlobDataUrlByMediaId"]), S = async function(n, a, i) {
		v.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"Get thumbnail blob for ",
			" from , from ",
			""
		])), n, a);
		var t = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(i), l = { string: {
			description: a,
			fetch_by: "mediaId"
		} };
		t("fetch_thumbnail_blob_api_start", l), t("get_media_from_db_start", l);
		var g = await k(n);
		if (t("get_media_from_db_finish", { bool: { db_media_found: g != null } }), g == null) throw v.WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["No media found for ", ""])), n), t("fetch_thumbnail_blob_api_fail_no_media_found_in_db", l), v.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId because media is not in the media db. mediaId is %s, from %s", n, a);
		var h = T(g);
		if (h.success === !0) {
			v.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Found jpegThumbnail entry for ", ""])), n), t("fetch_thumbnail_blob_api_success", l);
			var y = await r("blobToDataUri")(h.value);
			if (!y) throw v.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to create thumbnail data uri from blob for ", ""])), n), t("fetch_thumbnail_blob_api_fail_no_data_uri", l), v.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId because data uri is null. mediaId is %s, from %s", n, a);
			return v.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Returning data uri for ", ""])), n), y;
		}
		var C = h.error;
		switch (C) {
			case "missing_jpeg_thumbnail":
				if (g.mediaType === o("MAWDbMedia").MEDIA_TYPE.IMAGE || g.mediaType === o("MAWDbMedia").MEDIA_TYPE.VIDEO) {
					var b = await L(g, i);
					if (b != null) {
						t("fetch_thumbnail_blob_api_success", l);
						var S = await r("blobToDataUri")(b);
						if (!S) throw v.MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to create thumbnail data uri from blob for ", ""])), n), t("fetch_thumbnail_blob_api_fail_no_data_uri", l), v.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId because data uri is null. mediaId is %s, from %s", n, a);
						return v.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Returning data uri for ", ""])), n), S;
					}
					if ((g == null ? void 0 : g.mediaType) === o("MAWDbMedia").MEDIA_TYPE.VIDEO) throw t("fetch_thumbnail_blob_api_fail_not_able_to_generate_video_thumbnail_on_the_fly", l), v.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId in time (for video). mediaId is %s, from %s", n, a);
					var R = await E(g, i);
					if (R == null) throw t("fetch_thumbnail_blob_api_fail_not_able_to_generate_image_thumbnail_on_the_fly", l), v.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId in time or to generate thumnbail on the fly. mediaId is %s, from %s", n, a);
					t("fetch_thumbnail_blob_api_success", l);
					var I = await r("blobToDataUri")(R);
					if (!I) throw v.MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to create thumbnail data uri from blob for ", ""])), n), t("fetch_thumbnail_blob_api_fail_no_data_uri", l), v.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId because data uri is null. mediaId is %s, from %s", n, a);
					return v.DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Returning data uri for ", ""])), n), I;
				}
				throw t("fetch_thumbnail_blob_api_fail_missing_thumbnail", l), v.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId, invalid media (missing_jpeg_thumbnail). mediaId is %s, from %s", n, a);
			case "invalid_media": throw t("fetch_thumbnail_blob_api_fail_invalid_media", l), v.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId, invalid media. mediaId is %s, from %s", n, a);
		}
	}, R = async function(t, n, a, i) {
		var e, l = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(a), s = o("MAWCreateMaybeAddPointForHeroTracing").createMaybeAddPointForHeroTracing(i), u = { string: {
			description: n,
			fetch_by: "hashedPlaintextHash"
		} };
		l("fetch_thumbnail_blob_api_start", u), v.DEBUG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
			"Get thumbnail blob for ",
			" from ",
			""
		])), o("WAHashUtils").sanitisePlaintextHash(t), n);
		var c = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
			downloadEntry: "UILayout",
			e2eePlatform: (e = o("MpsMediaEntryCache").getEntry(t)) == null ? void 0 : e.e2eePlatform,
			msgType: null,
			protocolMsgId: null,
			triggerUIView: null
		}), d = o("MpsMediaManagerV2").mpsMediaManager(), m = d.enqueueDownloadFullSizeAndPreview({
			fullSizePlaintextHash: t,
			mediaDownloadFlow: c,
			priority: o("WAMediaManager").MediaTaskPriority.HIGH
		}), p = await m.previewPromise;
		if (p.success) {
			var _;
			c.endSuccess(), l("fetch_thumbnail_blob_api_success", babelHelpers.extends({}, u, { string: babelHelpers.extends({}, u.string, { media_source: p.value.source }) })), s("fetch_thumbnail_blob_api_success", { media_source: p.value.source });
			var f = p.value.validatedResult.validatedPlaintext, h = new Blob([f], { type: (_ = p.value.validatedResult.mimeType) != null ? _ : p.value.unvalidatedMimeType }), y = await r("blobToDataUri")(h);
			return y;
		}
		if (p.error !== "preview-not-supported") throw c.endFail(p.error, { string: { failReason: p.error } }), o("MWFBLogger").MPSLogger().mustfixThrow("Failed to getThumbnailBlobDataUrlByHashedPlaintextHash. plaintextHash is %s, from %s, error: %s", o("WAHashUtils").sanitisePlaintextHash(t), n, p.error);
		var C = await m.fullsizePromise;
		if (C.success) {
			var b;
			c.endSuccess(), l("fetch_thumbnail_blob_api_success", babelHelpers.extends({}, u, { string: babelHelpers.extends({}, u.string, { media_source: C.value.source }) })), s("fetch_thumbnail_blob_api_success", { media_source: C.value.source });
			var S = C.value.validatedResult.validatedPlaintext, R = new Blob([S], { type: (b = C.value.validatedResult.mimeType) != null ? b : C.value.unvalidatedMimeType }), L = await r("blobToDataUri")(R);
			return L;
		}
		throw c.endFail(C.error, { string: { failReason: C.error } }), o("MWFBLogger").MPSLogger().mustfixThrow("Failed to getThumbnailBlobDataUrlByHashedPlaintextHash. plaintextHash is %s, from %s, error: %s", o("WAHashUtils").sanitisePlaintextHash(t), n, C.error);
	}, L = function(t, n) {
		var e = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(n);
		e("fetch_thumbnail_blob_api_thumbnail_download_start");
		var r = o("MAWMediaPreviewDownloadManager").getMediaPreviewDownloadingResolvable(t.plaintextHash);
		return r == null ? (e("fetch_thumbnail_blob_api_thumbnail_download_fail_no_resolvable"), Promise.resolve(null)) : o("MAWMaybeWithTimeout").maybeWithTimeout(r.promise, 1e4, function() {
			throw v.mustfixThrow("timeout waiting for thumbnail to download");
		}).then(function(t) {
			return e("fetch_thumbnail_blob_api_thumbnail_download_success"), t;
		}).catch(function(t) {
			var n = o("WAErrorMessage").maybeGetMessageFromError(t);
			return v.MUSTFIX(h || (h = babelHelpers.taggedTemplateLiteralLoose(["Exception when waiting for thumbnail to download: ", ""])), n), e("fetch_thumbnail_blob_api_thumbnail_download_fail_exception", { string: { wait_for_thumbnail_download_exception: n } }), null;
		});
	}, E = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (b = o("MAWTransactionMode")).READONLY,
		media: b.READONLY
	}, "generateThumbnailFromMediaChunk", function(e) {
		return function(t, n) {
			var r = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(n);
			return r("fetch_thumbnail_blob_api_thumbnail_generate_from_media_start"), o("MAWDbChunkTxns").maybeGetChunkFromHash(e, t.hashedPlaintextHash).then(function(e) {
				if (e == null) {
					v.MUSTFIX(y || (y = babelHelpers.taggedTemplateLiteralLoose(["getImageThumbnail: unable to get a thumbnail as the media chunk is missing"]))), r("fetch_thumbnail_blob_api_thumbnail_generate_from_media_fail_chunk_missing");
					return;
				}
				return v.WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose(["getImageThumbnail: using media chunk as the thumbnail"]))), r("fetch_thumbnail_blob_api_thumbnail_generate_from_media_success"), new Blob([e.blobData], { type: e.mimetype });
			});
		};
	}), k = o("MAWIndexedDb").makeMsgrTransactor({ media: b.READONLY }, "getFullMedia", function(e) {
		return function(t) {
			return o("MAWDbMediaTxns").maybeGetMediaFromMediaId(e, t);
		};
	}), I = o("MAWIndexedDb").makeMsgrTransactor({ media: b.READONLY }, "getFullMedia", function(e) {
		return function(t) {
			return o("MAWDbMediaTxns").maybeGetMediaFromPlaintextHash(e, t);
		};
	}), T = function(t) {
		var e = D(t);
		if (e.success === !1) return e;
		var n = e.value.jpegThumbnail;
		return n != null ? o("WAResultOrError").makeResult(new Blob([n], { type: "image/jpeg" })) : o("WAResultOrError").makeError("missing_jpeg_thumbnail");
	}, D = function(t) {
		var e, n;
		switch (t.mediaType) {
			case o("MAWDbMedia").MEDIA_TYPE.IMAGE: return o("WAResultOrError").makeResult({ jpegThumbnail: (e = t.validatedImageInfo) == null ? void 0 : e.jpegThumbnail });
			case o("MAWDbMedia").MEDIA_TYPE.VIDEO: return o("WAResultOrError").makeResult({ jpegThumbnail: (n = t.validatedVideoInfo) == null ? void 0 : n.jpegThumbnail });
			case o("MAWDbMedia").MEDIA_TYPE.PTT:
			case o("MAWDbMedia").MEDIA_TYPE.STICKER:
			case o("MAWDbMedia").MEDIA_TYPE.GIF:
			case o("MAWDbMedia").MEDIA_TYPE.DOCUMENT_FILE: return o("WAResultOrError").makeError("invalid_media");
			default: return t.mediaType, o("WAResultOrError").makeError("invalid_media");
		}
	};
	l.getThumbnailBlobDataUrlByMediaId = S, l.getThumbnailBlobDataUrlByHashedPlaintextHash = R, l.getFullMediaWithPlaintextHash = I;
}), 98);
