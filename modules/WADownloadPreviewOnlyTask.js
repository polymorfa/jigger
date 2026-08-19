__d("WADownloadPreviewOnlyTask", [
	"EncryptedBackupsResignCdnUrl",
	"MAWAttachmentCdnUrlReader",
	"MAWAttachmentCdnUrlWriter",
	"MAWEBSwitch",
	"MAWKaleidoscopeMediaTypeMapping",
	"Promise",
	"WADownloadMediaPreviewV2",
	"WAIsMediaExpiredError",
	"WAIsPreviewSupported",
	"WAMediaManagerGetMostRecentMediaEntry",
	"WAMediaManagerPrepareMediaDownload",
	"WAProgressiveJpegGetPJpegDetails",
	"WAResultOrError",
	"WATimeUtils",
	"WAValidateMedia",
	"asyncToGeneratorRuntime",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.abortSignal, r = e.dbCallbacks, a = e.fullSizePlaintextHash, i = e.logger, l = e.mediaDownloadFlow, s = yield o("WAMediaManagerGetMostRecentMediaEntry").getMostRecentMediaEntry({
				fullSizePlaintextHash: a,
				getMediaEntries: r.getMediaEntries,
				mediaDownloadFlow: l
			});
			if (!s.success) return { previewPromise: (c || (c = n("Promise"))).resolve(s) };
			var u = s.value, d = u.mediaEntries, m = u.msgIdOfRecentMediaEntry, _ = u.recentMediaEntry, f = o("WAMediaManagerPrepareMediaDownload").mediaManagerPrepareMediaDownload({
				hash: a,
				logger: i,
				mediaDownloadFlow: l,
				mediaEntry: _
			}), g = f.logDownloadResult, h = p({
				abortSignal: t,
				dbCallbacks: r,
				fullSizePlaintextHash: a,
				logger: i,
				mediaDownloadFlow: l,
				mediaEntries: d,
				msgIdOfRecentMediaEntry: m,
				recentMediaEntry: _
			}).then((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					if (!e.success) return e;
					var t = yield o("WAValidateMedia").validateMedia(e.value.plaintext, l, o("MAWKaleidoscopeMediaTypeMapping").kaleidoscopeMediaTypeFromServerMediaType(e.value.serverMediaType));
					return t.success ? o("WAResultOrError").makeResult({
						msgIdAndMediaEntry: [m, _],
						serverMediaType: e.value.serverMediaType,
						source: "network",
						unvalidatedMimeType: e.value.mimeType,
						validatedResult: t.value
					}) : t;
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})());
			return { previewPromise: g(h) };
		}), m.apply(this, arguments);
	}
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a, i, l, d = t.abortSignal, m = t.dbCallbacks, p = t.fullSizePlaintextHash, _ = t.logger, g = t.mediaDownloadFlow, h = t.mediaEntries, y = t.msgIdOfRecentMediaEntry, C = t.recentMediaEntry, b = r("MAWEBSwitch").isEnabled() && r("gkx")("23960");
			b && g.addPoint("forcing_eb_download");
			var v = o("WAIsPreviewSupported").checkPreviewSupport(C), S = v[0], R = v[1];
			if (S === o("WAIsPreviewSupported").PjpegPreviewSupport.NO && R === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO) return o("WAResultOrError").makeError("preview-not-supported");
			var L = o("WAProgressiveJpegGetPJpegDetails").maybeGetProgressiveJpegDetailsUsingMediaEntry(C), E = L.success === !0 ? L.value : null, k = {
				abortSignal: d,
				hash: p,
				logger: _,
				mediaDownloadFlow: g,
				progressiveJpegDetails: E
			};
			g.addPoint("download_preview_start", { string: {
				preview_downloadable_support: R,
				preview_pjpeg_support: S
			} });
			var I = b ? o("WAResultOrError").makeError("signature-expired") : yield o("WADownloadMediaPreviewV2").downloadMediaPreview(babelHelpers.extends({}, k, { mediaEntry: C }));
			if (I.success) return g.addPoint("download_preview_end"), o("WAResultOrError").makeResult({
				mimeType: I.value.mimeType,
				plaintext: I.value.plaintext,
				serverMediaType: I.value.serverMediaType
			});
			if (g.addPoint("download_preview_fail"), !o("WAIsMediaExpiredError").isMediaExpiredError(I.error) || !r("MAWEBSwitch").isEnabled()) return g.addPoint("skip_resign_cdn_url", { string: { skipResignCdnUrlReason: r("MAWEBSwitch").isEnabled() ? "error-not-expired" : "maw-eb-switch-disabled" } }), I;
			var T = R === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO ? null : (a = (i = C.downloadableThumbnail) == null ? void 0 : i.objectId) != null ? a : null, D = S === o("WAIsPreviewSupported").PjpegPreviewSupport.NO ? null : (l = C.objectId) != null ? l : null, x = r("gkx")("7808"), $ = x && T != null ? yield o("MAWAttachmentCdnUrlReader").getAttachmentCdnUrlDirectPath(T) : null, P = x && D != null ? yield o("MAWAttachmentCdnUrlReader").getAttachmentCdnUrlDirectPath(D) : null;
			if ($ != null || P != null) {
				$ != null && g.addPoint("resign_cdn_url_inline_hit", { string: { inlineDbLeg: "thumbnail" } }), P != null && g.addPoint("resign_cdn_url_inline_hit", { string: { inlineDbLeg: "pjpeg" } }), g.addPoint("restore_cdn_url_download_start");
				var N = yield o("WADownloadMediaPreviewV2").downloadMediaPreview(babelHelpers.extends({}, k, {
					mediaDownloadFlow: babelHelpers.extends({}, g, { addPoint: function(t, n) {
						g.addPoint("restore_cdn_url_" + t, n);
					} }),
					mediaEntry: babelHelpers.extends({}, C, {
						directPath: P != null ? P : C.directPath,
						downloadableThumbnail: C.downloadableThumbnail == null ? null : babelHelpers.extends({}, C.downloadableThumbnail, { directPath: $ != null ? $ : C.downloadableThumbnail.directPath })
					})
				}));
				if (N.success) return g.addPoint("restore_cdn_url_download_end"), o("WAResultOrError").makeResult({
					mimeType: N.value.mimeType,
					plaintext: N.value.plaintext,
					serverMediaType: N.value.serverMediaType
				});
				g.addPoint("restore_cdn_url_download_fail"), _.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to download preview with DB CDN URL, falling back to resign: ", ""])), N.error);
			}
			var M = yield m.getProtocolMsgIdAndSortOrderMs(y);
			if (M == null) return o("WAResultOrError").makeError("missing-sort-order-ms-for-restore");
			var w = M.protocolMsgId, A = M.sortOrderMs, F = C, O = y, B = f({
				legName: "thumbnail",
				logger: _,
				mediaDownloadFlow: g,
				mediaKey: F.mediaKey,
				mediaType: "preview",
				msgId: O,
				objectId: T,
				protocolMsgId: w,
				sortOrderMs: A
			}), W = f({
				legName: "pjpeg",
				logger: _,
				mediaDownloadFlow: g,
				mediaKey: F.mediaKey,
				mediaType: "image",
				msgId: O,
				objectId: D,
				protocolMsgId: w,
				sortOrderMs: A
			});
			if (B == null && W == null) {
				var q, U, V;
				g.addPoint("skip_resign_cdn_url", { string: {
					serverMediaType: (q = F.serverMediaType) != null ? q : "null",
					skipResignCdnUrlReason: F.objectId == null && ((U = F.downloadableThumbnail) == null ? void 0 : U.objectId) == null ? "missing-object-id-for-pjpeg-and-thumbnail" : F.objectId == null && R === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO ? "missing-object-id-for-pjpeg-and-thumbnail-unsupported" : ((V = F.downloadableThumbnail) == null ? void 0 : V.objectId) == null && S === o("WAIsPreviewSupported").PjpegPreviewSupport.NO ? "missing-object-id-for-thumbnail-and-pjpeg-unsupported" : "no-resign-attempt-available"
				} });
			}
			var H = yield (c || (c = n("Promise"))).all([B, W]), G = H[0], z = H[1];
			if ((G == null ? void 0 : G.success) !== !0 && (z == null ? void 0 : z.success) !== !0) {
				var j;
				return _.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"Failed to download media and restore failed. downloadableThumbnail error: ",
					". pjpegPreview error: ",
					""
				])), G == null ? void 0 : G.error, z == null ? void 0 : z.error), (j = z != null ? z : G) != null ? j : o("WAResultOrError").makeError("preview-not-supported");
			}
			x && (g.addPoint("write_cdn_to_db_start"), yield o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls([(G == null ? void 0 : G.success) === !0 && T != null ? {
				cdnUrl: G.value,
				objectId: T,
				timestampMs: o("WATimeUtils").millisTime()
			} : null, (z == null ? void 0 : z.success) === !0 && D != null ? {
				cdnUrl: z.value,
				objectId: D,
				timestampMs: o("WATimeUtils").millisTime()
			} : null].filter(Boolean)), g.addPoint("write_cdn_to_db_end")), g.addPoint("second_download_preview_start");
			var K = yield o("WADownloadMediaPreviewV2").downloadMediaPreview(babelHelpers.extends({}, k, {
				mediaDownloadFlow: babelHelpers.extends({}, g, { addPoint: function(t, n) {
					g.addPoint("second_" + t, n);
				} }),
				mediaEntry: babelHelpers.extends({}, F, {
					directPath: (z == null ? void 0 : z.success) === !0 ? z.value : F.directPath,
					downloadableThumbnail: F.downloadableThumbnail == null ? null : babelHelpers.extends({}, F.downloadableThumbnail, { directPath: (G == null ? void 0 : G.success) === !0 ? G.value : F.downloadableThumbnail.directPath })
				})
			}));
			return K.success ? (g.addPoint("second_download_preview_end"), o("WAResultOrError").makeResult({
				mimeType: K.value.mimeType,
				plaintext: K.value.plaintext,
				serverMediaType: K.value.serverMediaType
			})) : (_.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media after restore CDN URL: ", ""])), K.error), g.addPoint("second_download_preview_fail"), K);
		}), _.apply(this, arguments);
	}
	function f(e) {
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
	l.startDownloadPreviewTask = d, l.downloadOrRestorePreviewOnly = p;
}), 98);
