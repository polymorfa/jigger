__d("WADownloadFullSizeOnlyTask", [
	"EncryptedBackupsResignCdnUrl",
	"MAWAttachmentCdnUrlReader",
	"MAWAttachmentCdnUrlWriter",
	"MAWCastToMsgrServerMediaType",
	"MAWEBSwitch",
	"MAWKaleidoscopeMediaTypeMapping",
	"WADownloadMedia",
	"WAIsMediaExpiredError",
	"WAMediaManagerGetMostRecentMediaEntry",
	"WAMediaManagerPrepareMediaDownload",
	"WAResultOrError",
	"WATimeUtils",
	"WAValidateMedia",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	async function d(e) {
		var t = e.abortSignal, n = e.dbCallbacks, r = e.fullSizePlaintextHash, a = e.logger, i = e.mediaDownloadFlow, l = await o("WAMediaManagerGetMostRecentMediaEntry").getMostRecentMediaEntry({
			fullSizePlaintextHash: r,
			getMediaEntries: n.getMediaEntries,
			mediaDownloadFlow: i
		});
		if (!l.success) return { fullsizePromise: Promise.resolve(l) };
		var s = l.value, u = s.mediaEntries, c = s.msgIdOfRecentMediaEntry, d = s.recentMediaEntry, p = o("WAMediaManagerPrepareMediaDownload").mediaManagerPrepareMediaDownload({
			hash: r,
			logger: a,
			mediaDownloadFlow: i,
			mediaEntry: d
		}), _ = p.logDownloadResult, f = m({
			abortSignal: t,
			dbCallbacks: n,
			logger: a,
			mediaDownloadFlow: i,
			mediaEntries: u,
			msgIdOfRecentMediaEntry: c,
			recentMediaEntry: d
		}).then(async function(e) {
			if (!e.success) return e;
			var t = await o("WAValidateMedia").validateMedia(e.value.plaintext, i, o("MAWKaleidoscopeMediaTypeMapping").kaleidoscopeMediaTypeFromServerMediaType(e.value.serverMediaType));
			return t.success ? o("WAResultOrError").makeResult({
				msgIdAndMediaEntry: [c, d],
				serverMediaType: e.value.serverMediaType,
				source: "network",
				unvalidatedMimeType: e.value.mimeType,
				validatedResult: t.value
			}) : t;
		});
		return { fullsizePromise: _(f) };
	}
	async function m(t) {
		var n = t.abortSignal, a = t.dbCallbacks, i = t.logger, l = t.mediaDownloadFlow, d = t.mediaEntries, m = t.msgIdOfRecentMediaEntry, p = t.recentMediaEntry, _ = r("MAWEBSwitch").isEnabled() && r("gkx")("23960");
		_ && l.addPoint("forcing_eb_download");
		var f = _ ? o("WAResultOrError").makeError("signature-expired") : await o("WADownloadMedia").downloadFullMediaOnly({
			abortSignal: n,
			downloadMediaMetric: l,
			mediaEntry: p
		});
		if (f.success) return f;
		if (!o("WAIsMediaExpiredError").isMediaExpiredError(f.error) || !r("MAWEBSwitch").isEnabled()) return l.addPoint("skip_resign_cdn_url", { string: { skipResignCdnUrlReason: r("MAWEBSwitch").isEnabled() ? "error-not-expired" : "maw-eb-switch-disabled" } }), f;
		var g = await a.getProtocolMsgIdAndSortOrderMs(m);
		if (g == null) return o("WAResultOrError").makeError("missing-sort-order-ms-for-restore");
		var h = g.protocolMsgId, y = g.sortOrderMs, C = p, b = m, v = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(C.serverMediaType), S = C.objectId, R = S != null && r("gkx")("7808") ? await o("MAWAttachmentCdnUrlReader").getAttachmentCdnUrlDirectPath(S) : null;
		if (R != null) {
			l.addPoint("resign_cdn_url_inline_hit"), l.addPoint("restore_cdn_url_download_start");
			var L = await o("WADownloadMedia").downloadFullMediaOnly({
				abortSignal: n,
				downloadMediaMetric: babelHelpers.extends({}, l, { addPoint: function(t, n) {
					l.addPoint("restore_cdn_url_" + t, n);
				} }),
				mediaEntry: babelHelpers.extends({}, p, { directPath: R })
			});
			if (L.success) return l.addPoint("restore_cdn_url_download_end"), L;
			l.addPoint("restore_cdn_url_download_fail"), i.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media with DB CDN URL, falling back to resign: ", ""])), L.error);
		}
		if (v == null || S == null) return l.addPoint("skip_resign_cdn_url", { string: { skipResignCdnUrlReason: S == null && v == null ? "missing-object-id-and-media-type" : S == null ? "missing-object-id" : "unsupported-media-type" } }), i.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media and can not restore: ", ""])), f.error), f;
		l.addPoint("resign_cdn_url_inline_miss");
		var E = await o("EncryptedBackupsResignCdnUrl").resignCdnUrl({
			deliveryObjectId: S,
			logger: i,
			mediaDownloadFlow: l,
			mediaKey: C.mediaKey,
			mediaType: v,
			msgId: b,
			protocolMsgId: h,
			sortOrderMs: y
		});
		if (!E.success) return i.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media and restore failed: ", ""])), E.error), E;
		r("gkx")("7808") && (l.addPoint("write_cdn_to_db_start"), await o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls([{
			cdnUrl: E.value,
			objectId: S,
			timestampMs: o("WATimeUtils").millisTime()
		}]), l.addPoint("write_cdn_to_db_end"));
		var k = await o("WADownloadMedia").downloadFullMediaOnly({
			abortSignal: n,
			downloadMediaMetric: babelHelpers.extends({}, l, { addPoint: function(t, n) {
				l.addPoint("second_" + t, n);
			} }),
			mediaEntry: babelHelpers.extends({}, C, { directPath: E.value })
		});
		return k.success ? o("WAResultOrError").makeResult(k.value) : (i.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media after restore CDN URL: ", ""])), k.error), k);
	}
	l.startDownloadFullSizeTask = d, l.downloadOrRestoreFullSize = m;
}), 98);
