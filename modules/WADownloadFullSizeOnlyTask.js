__d("WADownloadFullSizeOnlyTask", [
	"EncryptedBackupsResignCdnUrl",
	"MAWAttachmentCdnUrlReader",
	"MAWAttachmentCdnUrlWriter",
	"MAWCastToMsgrServerMediaType",
	"MAWEBSwitch",
	"MAWKaleidoscopeMediaTypeMapping",
	"Promise",
	"WADownloadMedia",
	"WAIsMediaExpiredError",
	"WAMediaManagerGetMostRecentMediaEntry",
	"WAMediaManagerPrepareMediaDownload",
	"WAResultOrError",
	"WATimeUtils",
	"WAValidateMedia",
	"asyncToGeneratorRuntime",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d;
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.abortSignal, r = e.dbCallbacks, a = e.fullSizePlaintextHash, i = e.logger, l = e.mediaDownloadFlow, s = yield o("WAMediaManagerGetMostRecentMediaEntry").getMostRecentMediaEntry({
				fullSizePlaintextHash: a,
				getMediaEntries: r.getMediaEntries,
				mediaDownloadFlow: l
			});
			if (!s.success) return { fullsizePromise: (d || (d = n("Promise"))).resolve(s) };
			var u = s.value, c = u.mediaEntries, m = u.msgIdOfRecentMediaEntry, p = u.recentMediaEntry, f = o("WAMediaManagerPrepareMediaDownload").mediaManagerPrepareMediaDownload({
				hash: a,
				logger: i,
				mediaDownloadFlow: l,
				mediaEntry: p
			}), g = f.logDownloadResult, h = _({
				abortSignal: t,
				dbCallbacks: r,
				logger: i,
				mediaDownloadFlow: l,
				mediaEntries: c,
				msgIdOfRecentMediaEntry: m,
				recentMediaEntry: p
			}).then((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					if (!e.success) return e;
					var t = yield o("WAValidateMedia").validateMedia(e.value.plaintext, l, o("MAWKaleidoscopeMediaTypeMapping").kaleidoscopeMediaTypeFromServerMediaType(e.value.serverMediaType));
					return t.success ? o("WAResultOrError").makeResult({
						msgIdAndMediaEntry: [m, p],
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
			return { fullsizePromise: g(h) };
		}), p.apply(this, arguments);
	}
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.abortSignal, a = t.dbCallbacks, i = t.logger, l = t.mediaDownloadFlow, d = t.mediaEntries, m = t.msgIdOfRecentMediaEntry, p = t.recentMediaEntry, _ = r("MAWEBSwitch").isEnabled() && r("gkx")("23960");
			_ && l.addPoint("forcing_eb_download");
			var f = _ ? o("WAResultOrError").makeError("signature-expired") : yield o("WADownloadMedia").downloadFullMediaOnly({
				abortSignal: n,
				downloadMediaMetric: l,
				mediaEntry: p
			});
			if (f.success) return f;
			if (!o("WAIsMediaExpiredError").isMediaExpiredError(f.error) || !r("MAWEBSwitch").isEnabled()) return l.addPoint("skip_resign_cdn_url", { string: { skipResignCdnUrlReason: r("MAWEBSwitch").isEnabled() ? "error-not-expired" : "maw-eb-switch-disabled" } }), f;
			var g = yield a.getProtocolMsgIdAndSortOrderMs(m);
			if (g == null) return o("WAResultOrError").makeError("missing-sort-order-ms-for-restore");
			var h = g.protocolMsgId, y = g.sortOrderMs, C = p, b = m, v = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(C.serverMediaType), S = C.objectId, R = S != null && r("gkx")("7808") ? yield o("MAWAttachmentCdnUrlReader").getAttachmentCdnUrlDirectPath(S) : null;
			if (R != null) {
				l.addPoint("resign_cdn_url_inline_hit"), l.addPoint("restore_cdn_url_download_start");
				var L = yield o("WADownloadMedia").downloadFullMediaOnly({
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
			var E = yield o("EncryptedBackupsResignCdnUrl").resignCdnUrl({
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
			r("gkx")("7808") && (l.addPoint("write_cdn_to_db_start"), yield o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls([{
				cdnUrl: E.value,
				objectId: S,
				timestampMs: o("WATimeUtils").millisTime()
			}]), l.addPoint("write_cdn_to_db_end"));
			var k = yield o("WADownloadMedia").downloadFullMediaOnly({
				abortSignal: n,
				downloadMediaMetric: babelHelpers.extends({}, l, { addPoint: function(t, n) {
					l.addPoint("second_" + t, n);
				} }),
				mediaEntry: babelHelpers.extends({}, C, { directPath: E.value })
			});
			return k.success ? o("WAResultOrError").makeResult(k.value) : (i.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media after restore CDN URL: ", ""])), k.error), k);
		}), f.apply(this, arguments);
	}
	l.startDownloadFullSizeTask = m, l.downloadOrRestoreFullSize = _;
}), 98);
