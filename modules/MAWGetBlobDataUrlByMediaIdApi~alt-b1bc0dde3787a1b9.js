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
	"WAAssertUnreachable",
	"WALogger",
	"WAMediaManager",
	"WAResultOrError",
	"WAStartMediaDownloadQplFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 6e4, c = function(n, a, i) {
		var t = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(i);
		return t("fetch_blob_api_start", { string: {
			call_site: a,
			fetch_by: "mediaId"
		} }), d(n, a).then(function(i) {
			if (i.success === !1) switch (i.error) {
				case "missing_media": throw t("fetch_blob_api_fail_no_media_found", { string: { fetch_blob_api_fail_no_media_found_error: i.error } }), r("FBLogger")("messenger_web_media").mustfixThrow("Failed to getBlobDataUrlByMediaId because media is not in the media db. mediaId is %s, from %s", n, a);
				default: throw r("WAAssertUnreachable")(i.error);
			}
			var l = i.value, s = l.blob, c = l.media;
			return s != null ? (t("fetch_blob_api_success", { bool: { has_blob: s.size > 0 } }), s) : (t("fetch_blob_api_no_media_blob_found"), o("MAWMaybeWithTimeout").maybeWithTimeout(new Promise(function(e) {
				t("fetch_blob_api_fetch_chunk_start"), o("MAWLegacyMediaDownloadManager").setToMediaDownloadManager(c.mediaId, e);
			}).then(function(e) {
				return t("fetch_blob_api_fetch_chunk_success"), t("fetch_blob_api_success", { bool: { has_blob: e.size > 0 } }), e;
			}), u, function() {
				throw t("fetch_blob_api_fetch_chunk_fail_timeout"), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"getBlobDataUrlByMediaIdDbCall cannot find chunk with mediaId: ",
					", from ",
					""
				])), n, a), r("FBLogger")("messenger_web_media").mustfixThrow("Failed to getBlobDataUrlByMediaId in time. mediaId is %s, from %s", n, a);
			}));
		});
	}, d = o("MAWIndexedDb").makeMsgrTransactor({
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
	}), m = function(t, n, r, o) {
		return p(t, n, r, o);
	}, p = async function(t, n, a, i) {
		var e, l, s = o("MAWCreateMaybeAddPointForMediaRender").createMaybeAddPointForMediaRender(a), u = o("MAWCreateMaybeAddPointForHeroTracing").createMaybeAddPointForHeroTracing(i);
		s("fetch_blob_api_start", { string: {
			call_site: n,
			fetch_by: "plaintextHash"
		} });
		var c = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
			downloadEntry: "UILayout",
			e2eePlatform: (e = o("MpsMediaEntryCache").getEntry(t)) == null ? void 0 : e.e2eePlatform,
			msgType: null,
			protocolMsgId: null,
			triggerUIView: null
		}), d = o("MpsMediaManagerV2").mpsMediaManager(), m = await d.enqueueDownloadFullSizeAndPreview({
			fullSizePlaintextHash: t,
			mediaDownloadFlow: c,
			priority: o("WAMediaManager").MediaTaskPriority.HIGH
		}).fullsizePromise;
		if (!m.success) throw c.endFail(m.error), s("fetch_blob_api_fail_no_media_found", { string: { fetch_blob_api_fail_no_media_found_error: m.error } }), r("FBLogger")("messenger_web_media").mustfixThrow("Failed to getBlobDataUrlByPlaintextHash because hash is not in the media db. hash is %s, from %s", t, n);
		var p = m.value, _ = p.source, f = p.unvalidatedMimeType, g = p.validatedResult, h = (l = g.mimeType) != null ? l : f, y = new Blob([g.validatedPlaintext], { type: h });
		return c.endSuccess(), s("fetch_blob_api_success", {
			bool: { has_blob: y.size > 0 },
			string: { media_source: _ }
		}), u("fetch_blob_api_success", { media_source: _ }), y;
	};
	l.getBlobDataUrlByMediaId = c, l.getBlobDataUrlByHashedPlaintextHash = m, l.getBlobDataUrlByPlaintextHash = p;
}), 98);
