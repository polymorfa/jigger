__d("MAWOptimisticUploadMedia", [
	"MAWFrontendMediaUtils",
	"MAWGetDownloadableThumbnailForMediaApi",
	"MAWMediaUtils",
	"MAWOptimisticUploadManager",
	"MAWUploadAndHandleMedia",
	"MWFBLogger",
	"WABlobToArrayBuffer",
	"WAHashUtils",
	"WAMediaCrypto",
	"WAResultOrError",
	"WAStartMediaUploadQplFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = o("MWFBLogger").MWMediaLogger().tags(["OptimisticUploadMedia"]);
	async function y(t, n, r) {
		h.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start uploading type: ", ""])), String(r));
		var a = await o("MAWMediaUtils").hashBlob(t), i = o("WAHashUtils").toPlaintextHash(a), l = o("MAWOptimisticUploadManager").getOptimisticUploadManager(), s = l.get(i);
		if (s != null) return o("WAResultOrError").makeError("already_uploading");
		var u = r.type === "regular" ? r.mediaType : "preview", c = await o("WAStartMediaUploadQplFlow").startMediaUploadQplFlow({
			chatJid: n,
			fileSize: t.size,
			serverMediaType: u,
			uploadEntry: "optimisticUploadMedia"
		}), d = o("MAWUploadAndHandleMedia").uploadAndHandleMedia({
			chatJid: n,
			dbCallbacks: { getDownloadableThumbnailForMedia: o("MAWGetDownloadableThumbnailForMediaApi").getDownloadableThumbnailForMedia },
			filename: u === "document" ? t.name : void 0,
			hash: i,
			mediaTypeDetails: r,
			plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(t),
			protocolMsgId: null,
			serverMediaType: u,
			size: t.size,
			uploadMediaMetric: c
		});
		return o("WAResultOrError").makeResult({
			plaintextHash: i,
			uploadPromise: d
		});
	}
	async function C(e) {
		var t = e.file, n = e.jid, r = e.thumbnail, a = o("MAWOptimisticUploadManager").getOptimisticUploadManager(), i = o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(t.type), l = i.serverMediaType;
		h.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["file uploading"])));
		var g = await y(t, n, {
			mediaType: l,
			type: "regular"
		});
		g.success === !0 ? (h.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["fileUploadResult success"]))), a.set(g.value.plaintextHash, {
			file: t,
			optimisticUploadPromise: g.value.uploadPromise,
			previewPlaintextHash: null
		})) : (g.error, h.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["File is already being uploaded"]))));
		var C = null;
		if (h.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["thumbnail_exists: ", ""])), r != null), r && b(l)) {
			h.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["preview uploading"])));
			var v = o("WAMediaCrypto").convertServerMediaTypeToPreviewMediaType(l);
			if (v == null) {
				h.MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["unsupported preview media type ", ""])), l);
				return;
			}
			var S = await y(r, n, {
				messageType: v,
				type: "preview"
			});
			S.success === !0 && (h.DEBUG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["previewUploadResult success"]))), C = S.value.plaintextHash, a.set(S.value.plaintextHash, {
				file: r,
				optimisticUploadPromise: S.value.uploadPromise
			}), g.success === !0 && (h.DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["fileUploadResult success, setting with previewPlaintextHash"]))), a.set(g.value.plaintextHash, {
				file: t,
				optimisticUploadPromise: g.value.uploadPromise,
				previewPlaintextHash: C
			})));
		}
	}
	function b(e) {
		switch (e) {
			case "gif": return !1;
			case "image": return !1;
			case "video": return !0;
			default: return h.DEBUG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Skipping preview upload for media type ", ""])), e), !1;
		}
	}
	l.optimisticUploadMedia = C, l.shouldUploadPreview = b;
}), 98);
