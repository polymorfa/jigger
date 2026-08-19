__d("MAWGetBlobDataUrlByMediaIdApi", [
	"FBLogger",
	"MAWCreateMaybeAddPointForHeroTracing",
	"MAWCreateMaybeAddPointForMediaRender",
	"MAWIndexedDb",
	"MAWLegacyMediaDownloadManager",
	"MAWMaybeWithTimeout",
	"MAWTransactionMode",
	"MpsMediaEntryCache",
	"MpsMediaManagerV2",
	"Promise",
	"WAAssertUnreachable",
	"WALogger",
	"WAMediaManager",
	"WAResultOrError",
	"WAStartMediaDownloadQplFlow",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = 6e4, d = function(a, i, l) {
		var t = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(l);
		return t("fetch_blob_api_start", { string: {
			call_site: i,
			fetch_by: "mediaId"
		} }), m(a, i).then(function(l) {
			if (l.success === !1) switch (l.error) {
				case "missing_media": throw t("fetch_blob_api_fail_no_media_found", { string: { fetch_blob_api_fail_no_media_found_error: l.error } }), r("FBLogger")("messenger_web_media").mustfixThrow("Failed to getBlobDataUrlByMediaId because media is not in the media db. mediaId is %s, from %s", a, i);
				default: throw r("WAAssertUnreachable")(l.error);
			}
			var s = l.value, d = s.blob, m = s.media;
			return d != null ? (t("fetch_blob_api_success", { bool: { has_blob: d.size > 0 } }), d) : (t("fetch_blob_api_no_media_blob_found"), o("MAWMaybeWithTimeout").maybeWithTimeout(new (u || (u = (n("Promise"))))(function(e) {
				t("fetch_blob_api_fetch_chunk_start"), o("MAWLegacyMediaDownloadManager").setToMediaDownloadManager(m.mediaId, e);
			}).then(function(e) {
				return t("fetch_blob_api_fetch_chunk_success"), t("fetch_blob_api_success", { bool: { has_blob: e.size > 0 } }), e;
			}), c, function() {
				throw t("fetch_blob_api_fetch_chunk_fail_timeout"), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"getBlobDataUrlByMediaIdDbCall cannot find chunk with mediaId: ",
					", from ",
					""
				])), a, i), r("FBLogger")("messenger_web_media").mustfixThrow("Failed to getBlobDataUrlByMediaId in time. mediaId is %s, from %s", a, i);
			}));
		});
	}, m = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: o("MAWTransactionMode").READONLY,
		media: o("MAWTransactionMode").READONLY
	}, "getBlobDataUrlByMediaId", function(e) {
		return function(t, n) {
			return e.media.get(t).then(function(r) {
				return r == null ? (o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"getBlobDataUrlByMediaIdDbCall cannot find media with mediaId: ",
					", from ",
					""
				])), t, n), o("WAResultOrError").makeError("missing_media")) : e.chunk.where("hashedPlaintextHash").equals(r.hashedPlaintextHash).first().then(function(e) {
					return e == null ? o("WAResultOrError").makeResult({
						blob: null,
						media: r
					}) : o("WAResultOrError").makeResult({
						blob: new Blob([e.blobData], { type: e.mimetype }),
						media: r
					});
				});
			});
		};
	}), p = function(t, n, r, o) {
		return _(t, n, r, o);
	}, _ = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a) {
			var i, l, s = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(n), u = o("MAWCreateMaybeAddPointForHeroTracing").createMaybeAddPointForHeroTracing(a);
			s("fetch_blob_api_start", { string: {
				call_site: t,
				fetch_by: "plaintextHash"
			} });
			var c = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
				downloadEntry: "UILayout",
				e2eePlatform: (i = o("MpsMediaEntryCache").getEntry(e)) == null ? void 0 : i.e2eePlatform,
				msgType: null,
				protocolMsgId: null,
				triggerUIView: null
			}), d = o("MpsMediaManagerV2").mpsMediaManager(), m = yield d.enqueueDownloadFullSizeAndPreview({
				fullSizePlaintextHash: e,
				mediaDownloadFlow: c,
				priority: o("WAMediaManager").MediaTaskPriority.HIGH
			}).fullsizePromise;
			if (!m.success) throw c.endFail(m.error), s("fetch_blob_api_fail_no_media_found", { string: { fetch_blob_api_fail_no_media_found_error: m.error } }), r("FBLogger")("messenger_web_media").mustfixThrow("Failed to getBlobDataUrlByPlaintextHash because hash is not in the media db. hash is %s, from %s", e, t);
			var p = m.value, _ = p.source, f = p.unvalidatedMimeType, g = p.validatedResult, h = (l = g.mimeType) != null ? l : f, y = new Blob([g.validatedPlaintext], { type: h });
			return c.endSuccess(), s("fetch_blob_api_success", {
				bool: { has_blob: y.size > 0 },
				string: { media_source: _ }
			}), u("fetch_blob_api_success", { media_source: _ }), y;
		});
		return function(n, r, o, a) {
			return e.apply(this, arguments);
		};
	})();
	l.getBlobDataUrlByMediaId = d, l.getBlobDataUrlByHashedPlaintextHash = p, l.getBlobDataUrlByPlaintextHash = _;
}), 98);
