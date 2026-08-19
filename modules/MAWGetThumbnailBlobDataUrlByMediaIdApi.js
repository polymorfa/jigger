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
	"Promise",
	"WAErrorMessage",
	"WAHashUtils",
	"WAMediaManager",
	"WAResultOrError",
	"WAStartMediaDownloadQplFlow",
	"asyncToGeneratorRuntime",
	"blobToDataUri"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S = o("MWFBLogger").MWMediaLogger().tags(["getThumbnailBlobDataUrlByMediaId"]), R = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
			S.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"Get thumbnail blob for ",
				" from , from ",
				""
			])), t, n);
			var i = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(a), l = { string: {
				description: n,
				fetch_by: "mediaId"
			} };
			i("fetch_thumbnail_blob_api_start", l), i("get_media_from_db_start", l);
			var g = yield I(t);
			if (i("get_media_from_db_finish", { bool: { db_media_found: g != null } }), g == null) throw S.WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["No media found for ", ""])), t), i("fetch_thumbnail_blob_api_fail_no_media_found_in_db", l), S.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId because media is not in the media db. mediaId is %s, from %s", t, n);
			var h = D(g);
			if (h.success === !0) {
				S.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Found jpegThumbnail entry for ", ""])), t), i("fetch_thumbnail_blob_api_success", l);
				var y = yield r("blobToDataUri")(h.value);
				if (!y) throw S.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to create thumbnail data uri from blob for ", ""])), t), i("fetch_thumbnail_blob_api_fail_no_data_uri", l), S.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId because data uri is null. mediaId is %s, from %s", t, n);
				return S.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Returning data uri for ", ""])), t), y;
			}
			var C = h.error;
			switch (C) {
				case "missing_jpeg_thumbnail":
					if (g.mediaType === o("MAWDbMedia").MEDIA_TYPE.IMAGE || g.mediaType === o("MAWDbMedia").MEDIA_TYPE.VIDEO) {
						var b = yield E(g, a);
						if (b != null) {
							i("fetch_thumbnail_blob_api_success", l);
							var v = yield r("blobToDataUri")(b);
							if (!v) throw S.MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to create thumbnail data uri from blob for ", ""])), t), i("fetch_thumbnail_blob_api_fail_no_data_uri", l), S.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId because data uri is null. mediaId is %s, from %s", t, n);
							return S.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Returning data uri for ", ""])), t), v;
						}
						if ((g == null ? void 0 : g.mediaType) === o("MAWDbMedia").MEDIA_TYPE.VIDEO) throw i("fetch_thumbnail_blob_api_fail_not_able_to_generate_video_thumbnail_on_the_fly", l), S.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId in time (for video). mediaId is %s, from %s", t, n);
						var R = yield k(g, a);
						if (R == null) throw i("fetch_thumbnail_blob_api_fail_not_able_to_generate_image_thumbnail_on_the_fly", l), S.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId in time or to generate thumnbail on the fly. mediaId is %s, from %s", t, n);
						i("fetch_thumbnail_blob_api_success", l);
						var L = yield r("blobToDataUri")(R);
						if (!L) throw S.MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to create thumbnail data uri from blob for ", ""])), t), i("fetch_thumbnail_blob_api_fail_no_data_uri", l), S.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId because data uri is null. mediaId is %s, from %s", t, n);
						return S.DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Returning data uri for ", ""])), t), L;
					}
					throw i("fetch_thumbnail_blob_api_fail_missing_thumbnail", l), S.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId, invalid media (missing_jpeg_thumbnail). mediaId is %s, from %s", t, n);
				case "invalid_media": throw i("fetch_thumbnail_blob_api_fail_invalid_media", l), S.mustfixThrow("Failed to getThumbnailBlobDataUrlByMediaId, invalid media. mediaId is %s, from %s", t, n);
			}
		});
		return function(n, r, o) {
			return t.apply(this, arguments);
		};
	})(), L = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a) {
			var i, l = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(n), s = o("MAWCreateMaybeAddPointForHeroTracing").createMaybeAddPointForHeroTracing(a), u = { string: {
				description: t,
				fetch_by: "hashedPlaintextHash"
			} };
			l("fetch_thumbnail_blob_api_start", u), S.DEBUG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
				"Get thumbnail blob for ",
				" from ",
				""
			])), o("WAHashUtils").sanitisePlaintextHash(e), t);
			var c = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
				downloadEntry: "UILayout",
				e2eePlatform: (i = o("MpsMediaEntryCache").getEntry(e)) == null ? void 0 : i.e2eePlatform,
				msgType: null,
				protocolMsgId: null,
				triggerUIView: null
			}), d = o("MpsMediaManagerV2").mpsMediaManager(), m = d.enqueueDownloadFullSizeAndPreview({
				fullSizePlaintextHash: e,
				mediaDownloadFlow: c,
				priority: o("WAMediaManager").MediaTaskPriority.HIGH
			}), p = yield m.previewPromise;
			if (p.success) {
				var _;
				c.endSuccess(), l("fetch_thumbnail_blob_api_success", babelHelpers.extends({}, u, { string: babelHelpers.extends({}, u.string, { media_source: p.value.source }) })), s("fetch_thumbnail_blob_api_success", { media_source: p.value.source });
				var f = p.value.validatedResult.validatedPlaintext, h = new Blob([f], { type: (_ = p.value.validatedResult.mimeType) != null ? _ : p.value.unvalidatedMimeType }), y = yield r("blobToDataUri")(h);
				return y;
			}
			if (p.error !== "preview-not-supported") throw c.endFail(p.error, { string: { failReason: p.error } }), o("MWFBLogger").MPSLogger().mustfixThrow("Failed to getThumbnailBlobDataUrlByHashedPlaintextHash. plaintextHash is %s, from %s, error: %s", o("WAHashUtils").sanitisePlaintextHash(e), t, p.error);
			var C = yield m.fullsizePromise;
			if (C.success) {
				var b;
				c.endSuccess(), l("fetch_thumbnail_blob_api_success", babelHelpers.extends({}, u, { string: babelHelpers.extends({}, u.string, { media_source: C.value.source }) })), s("fetch_thumbnail_blob_api_success", { media_source: C.value.source });
				var v = C.value.validatedResult.validatedPlaintext, R = new Blob([v], { type: (b = C.value.validatedResult.mimeType) != null ? b : C.value.unvalidatedMimeType }), L = yield r("blobToDataUri")(R);
				return L;
			}
			throw c.endFail(C.error, { string: { failReason: C.error } }), o("MWFBLogger").MPSLogger().mustfixThrow("Failed to getThumbnailBlobDataUrlByHashedPlaintextHash. plaintextHash is %s, from %s, error: %s", o("WAHashUtils").sanitisePlaintextHash(e), t, C.error);
		});
		return function(n, r, o, a) {
			return e.apply(this, arguments);
		};
	})(), E = function(t, r) {
		var e = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(r);
		e("fetch_thumbnail_blob_api_thumbnail_download_start");
		var a = o("MAWMediaPreviewDownloadManager").getMediaPreviewDownloadingResolvable(t.plaintextHash);
		return a == null ? (e("fetch_thumbnail_blob_api_thumbnail_download_fail_no_resolvable"), (v || (v = n("Promise"))).resolve(null)) : o("MAWMaybeWithTimeout").maybeWithTimeout(a.promise, 1e4, function() {
			throw S.mustfixThrow("timeout waiting for thumbnail to download");
		}).then(function(t) {
			return e("fetch_thumbnail_blob_api_thumbnail_download_success"), t;
		}).catch(function(t) {
			var n = o("WAErrorMessage").maybeGetMessageFromError(t);
			return S.MUSTFIX(h || (h = babelHelpers.taggedTemplateLiteralLoose(["Exception when waiting for thumbnail to download: ", ""])), n), e("fetch_thumbnail_blob_api_thumbnail_download_fail_exception", { string: { wait_for_thumbnail_download_exception: n } }), null;
		});
	}, k = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (b = o("MAWTransactionMode")).READONLY,
		media: b.READONLY
	}, "generateThumbnailFromMediaChunk", function(e) {
		return function(t, n) {
			var r = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(n);
			return r("fetch_thumbnail_blob_api_thumbnail_generate_from_media_start"), o("MAWDbChunkTxns").maybeGetChunkFromHash(e, t.hashedPlaintextHash).then(function(e) {
				if (e == null) {
					S.MUSTFIX(y || (y = babelHelpers.taggedTemplateLiteralLoose(["getImageThumbnail: unable to get a thumbnail as the media chunk is missing"]))), r("fetch_thumbnail_blob_api_thumbnail_generate_from_media_fail_chunk_missing");
					return;
				}
				return S.WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose(["getImageThumbnail: using media chunk as the thumbnail"]))), r("fetch_thumbnail_blob_api_thumbnail_generate_from_media_success"), new Blob([e.blobData], { type: e.mimetype });
			});
		};
	}), I = o("MAWIndexedDb").makeMsgrTransactor({ media: b.READONLY }, "getFullMedia", function(e) {
		return function(t) {
			return o("MAWDbMediaTxns").maybeGetMediaFromMediaId(e, t);
		};
	}), T = o("MAWIndexedDb").makeMsgrTransactor({ media: b.READONLY }, "getFullMedia", function(e) {
		return function(t) {
			return o("MAWDbMediaTxns").maybeGetMediaFromPlaintextHash(e, t);
		};
	}), D = function(t) {
		var e = x(t);
		if (e.success === !1) return e;
		var n = e.value.jpegThumbnail;
		return n != null ? o("WAResultOrError").makeResult(new Blob([n], { type: "image/jpeg" })) : o("WAResultOrError").makeError("missing_jpeg_thumbnail");
	}, x = function(t) {
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
	l.getThumbnailBlobDataUrlByMediaId = R, l.getThumbnailBlobDataUrlByHashedPlaintextHash = L, l.getFullMediaWithPlaintextHash = T;
}), 98);
