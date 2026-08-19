__d("WADownloadPreviewOnlyTask", [
	"EncryptedBackupsResignCdnUrl",
	"MAWAttachmentCdnUrlReader",
	"MAWAttachmentCdnUrlWriter",
	"MAWEBSwitch",
	"MAWKaleidoscopeMediaTypeMapping",
	"WADownloadMediaPreviewV2",
	"WAIsMediaExpiredError",
	"WAIsPreviewSupported",
	"WAMediaManagerGetMostRecentMediaEntry",
	"WAMediaManagerPrepareMediaDownload",
	"WAProgressiveJpegGetPJpegDetails",
	"WAResultOrError",
	"WATimeUtils",
	"WAValidateMedia",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	async function c(e) {
		var t = e.abortSignal, n = e.dbCallbacks, r = e.fullSizePlaintextHash, a = e.logger, i = e.mediaDownloadFlow, l = await o("WAMediaManagerGetMostRecentMediaEntry").getMostRecentMediaEntry({
			fullSizePlaintextHash: r,
			getMediaEntries: n.getMediaEntries,
			mediaDownloadFlow: i
		});
		if (!l.success) return { previewPromise: Promise.resolve(l) };
		var s = l.value, u = s.mediaEntries, c = s.msgIdOfRecentMediaEntry, m = s.recentMediaEntry, p = o("WAMediaManagerPrepareMediaDownload").mediaManagerPrepareMediaDownload({
			hash: r,
			logger: a,
			mediaDownloadFlow: i,
			mediaEntry: m
		}), _ = p.logDownloadResult, f = d({
			abortSignal: t,
			dbCallbacks: n,
			fullSizePlaintextHash: r,
			logger: a,
			mediaDownloadFlow: i,
			mediaEntries: u,
			msgIdOfRecentMediaEntry: c,
			recentMediaEntry: m
		}).then(async function(e) {
			if (!e.success) return e;
			var t = await o("WAValidateMedia").validateMedia(e.value.plaintext, i, o("MAWKaleidoscopeMediaTypeMapping").kaleidoscopeMediaTypeFromServerMediaType(e.value.serverMediaType));
			return t.success ? o("WAResultOrError").makeResult({
				msgIdAndMediaEntry: [c, m],
				serverMediaType: e.value.serverMediaType,
				source: "network",
				unvalidatedMimeType: e.value.mimeType,
				validatedResult: t.value
			}) : t;
		});
		return { previewPromise: _(f) };
	}
	async function d(t) {
		var n, a, i, l = t.abortSignal, c = t.dbCallbacks, d = t.fullSizePlaintextHash, p = t.logger, _ = t.mediaDownloadFlow, f = t.mediaEntries, g = t.msgIdOfRecentMediaEntry, h = t.recentMediaEntry, y = r("MAWEBSwitch").isEnabled() && r("gkx")("23960");
		y && _.addPoint("forcing_eb_download");
		var C = o("WAIsPreviewSupported").checkPreviewSupport(h), b = C[0], v = C[1];
		if (b === o("WAIsPreviewSupported").PjpegPreviewSupport.NO && v === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO) return o("WAResultOrError").makeError("preview-not-supported");
		var S = o("WAProgressiveJpegGetPJpegDetails").maybeGetProgressiveJpegDetailsUsingMediaEntry(h), R = S.success === !0 ? S.value : null, L = {
			abortSignal: l,
			hash: d,
			logger: p,
			mediaDownloadFlow: _,
			progressiveJpegDetails: R
		};
		_.addPoint("download_preview_start", { string: {
			preview_downloadable_support: v,
			preview_pjpeg_support: b
		} });
		var E = y ? o("WAResultOrError").makeError("signature-expired") : await o("WADownloadMediaPreviewV2").downloadMediaPreview(babelHelpers.extends({}, L, { mediaEntry: h }));
		if (E.success) return _.addPoint("download_preview_end"), o("WAResultOrError").makeResult({
			mimeType: E.value.mimeType,
			plaintext: E.value.plaintext,
			serverMediaType: E.value.serverMediaType
		});
		if (_.addPoint("download_preview_fail"), !o("WAIsMediaExpiredError").isMediaExpiredError(E.error) || !r("MAWEBSwitch").isEnabled()) return _.addPoint("skip_resign_cdn_url", { string: { skipResignCdnUrlReason: r("MAWEBSwitch").isEnabled() ? "error-not-expired" : "maw-eb-switch-disabled" } }), E;
		var k = v === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO ? null : (n = (a = h.downloadableThumbnail) == null ? void 0 : a.objectId) != null ? n : null, I = b === o("WAIsPreviewSupported").PjpegPreviewSupport.NO ? null : (i = h.objectId) != null ? i : null, T = r("gkx")("7808"), D = T && k != null ? await o("MAWAttachmentCdnUrlReader").getAttachmentCdnUrlDirectPath(k) : null, x = T && I != null ? await o("MAWAttachmentCdnUrlReader").getAttachmentCdnUrlDirectPath(I) : null;
		if (D != null || x != null) {
			D != null && _.addPoint("resign_cdn_url_inline_hit", { string: { inlineDbLeg: "thumbnail" } }), x != null && _.addPoint("resign_cdn_url_inline_hit", { string: { inlineDbLeg: "pjpeg" } }), _.addPoint("restore_cdn_url_download_start");
			var $ = await o("WADownloadMediaPreviewV2").downloadMediaPreview(babelHelpers.extends({}, L, {
				mediaDownloadFlow: babelHelpers.extends({}, _, { addPoint: function(t, n) {
					_.addPoint("restore_cdn_url_" + t, n);
				} }),
				mediaEntry: babelHelpers.extends({}, h, {
					directPath: x != null ? x : h.directPath,
					downloadableThumbnail: h.downloadableThumbnail == null ? null : babelHelpers.extends({}, h.downloadableThumbnail, { directPath: D != null ? D : h.downloadableThumbnail.directPath })
				})
			}));
			if ($.success) return _.addPoint("restore_cdn_url_download_end"), o("WAResultOrError").makeResult({
				mimeType: $.value.mimeType,
				plaintext: $.value.plaintext,
				serverMediaType: $.value.serverMediaType
			});
			_.addPoint("restore_cdn_url_download_fail"), p.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to download preview with DB CDN URL, falling back to resign: ", ""])), $.error);
		}
		var P = await c.getProtocolMsgIdAndSortOrderMs(g);
		if (P == null) return o("WAResultOrError").makeError("missing-sort-order-ms-for-restore");
		var N = P.protocolMsgId, M = P.sortOrderMs, w = h, A = g, F = m({
			legName: "thumbnail",
			logger: p,
			mediaDownloadFlow: _,
			mediaKey: w.mediaKey,
			mediaType: "preview",
			msgId: A,
			objectId: k,
			protocolMsgId: N,
			sortOrderMs: M
		}), O = m({
			legName: "pjpeg",
			logger: p,
			mediaDownloadFlow: _,
			mediaKey: w.mediaKey,
			mediaType: "image",
			msgId: A,
			objectId: I,
			protocolMsgId: N,
			sortOrderMs: M
		});
		if (F == null && O == null) {
			var B, W, q;
			_.addPoint("skip_resign_cdn_url", { string: {
				serverMediaType: (B = w.serverMediaType) != null ? B : "null",
				skipResignCdnUrlReason: w.objectId == null && ((W = w.downloadableThumbnail) == null ? void 0 : W.objectId) == null ? "missing-object-id-for-pjpeg-and-thumbnail" : w.objectId == null && v === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO ? "missing-object-id-for-pjpeg-and-thumbnail-unsupported" : ((q = w.downloadableThumbnail) == null ? void 0 : q.objectId) == null && b === o("WAIsPreviewSupported").PjpegPreviewSupport.NO ? "missing-object-id-for-thumbnail-and-pjpeg-unsupported" : "no-resign-attempt-available"
			} });
		}
		var U = await Promise.all([F, O]), V = U[0], H = U[1];
		if ((V == null ? void 0 : V.success) !== !0 && (H == null ? void 0 : H.success) !== !0) {
			var G;
			return p.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"Failed to download media and restore failed. downloadableThumbnail error: ",
				". pjpegPreview error: ",
				""
			])), V == null ? void 0 : V.error, H == null ? void 0 : H.error), (G = H != null ? H : V) != null ? G : o("WAResultOrError").makeError("preview-not-supported");
		}
		T && (_.addPoint("write_cdn_to_db_start"), await o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls([(V == null ? void 0 : V.success) === !0 && k != null ? {
			cdnUrl: V.value,
			objectId: k,
			timestampMs: o("WATimeUtils").millisTime()
		} : null, (H == null ? void 0 : H.success) === !0 && I != null ? {
			cdnUrl: H.value,
			objectId: I,
			timestampMs: o("WATimeUtils").millisTime()
		} : null].filter(Boolean)), _.addPoint("write_cdn_to_db_end")), _.addPoint("second_download_preview_start");
		var z = await o("WADownloadMediaPreviewV2").downloadMediaPreview(babelHelpers.extends({}, L, {
			mediaDownloadFlow: babelHelpers.extends({}, _, { addPoint: function(t, n) {
				_.addPoint("second_" + t, n);
			} }),
			mediaEntry: babelHelpers.extends({}, w, {
				directPath: (H == null ? void 0 : H.success) === !0 ? H.value : w.directPath,
				downloadableThumbnail: w.downloadableThumbnail == null ? null : babelHelpers.extends({}, w.downloadableThumbnail, { directPath: (V == null ? void 0 : V.success) === !0 ? V.value : w.downloadableThumbnail.directPath })
			})
		}));
		return z.success ? (_.addPoint("second_download_preview_end"), o("WAResultOrError").makeResult({
			mimeType: z.value.mimeType,
			plaintext: z.value.plaintext,
			serverMediaType: z.value.serverMediaType
		})) : (p.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media after restore CDN URL: ", ""])), z.error), _.addPoint("second_download_preview_fail"), z);
	}
	function m(e) {
		var t = e.legName, n = e.logger, r = e.mediaDownloadFlow, a = e.mediaKey, i = e.mediaType, l = e.msgId, s = e.objectId, u = e.protocolMsgId, c = e.sortOrderMs;
		return s == null ? null : (r.addPoint("resign_cdn_url_inline_miss", { string: { inlineCacheLeg: t } }), o("EncryptedBackupsResignCdnUrl").resignCdnUrl({
			deliveryObjectId: s,
			logger: n,
			mediaDownloadFlow: r,
			mediaKey: a,
			mediaType: i,
			msgId: l,
			protocolMsgId: u,
			sortOrderMs: c
		}));
	}
	l.startDownloadPreviewTask = c, l.downloadOrRestorePreviewOnly = d;
}), 98);
