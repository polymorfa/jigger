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
	"WAStartMediaUploadQplFlow",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = o("MWFBLogger").MWMediaLogger().tags(["OptimisticUploadMedia"]);
	function y(e, t, n) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			h.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["start uploading type: ", ""])), String(n));
			var r = yield o("MAWMediaUtils").hashBlob(e), a = o("WAHashUtils").toPlaintextHash(r), i = o("MAWOptimisticUploadManager").getOptimisticUploadManager(), l = i.get(a);
			if (l != null) return o("WAResultOrError").makeError("already_uploading");
			var u = n.type === "regular" ? n.mediaType : "preview", c = yield o("WAStartMediaUploadQplFlow").startMediaUploadQplFlow({
				chatJid: t,
				fileSize: e.size,
				serverMediaType: u,
				uploadEntry: "optimisticUploadMedia"
			}), d = o("MAWUploadAndHandleMedia").uploadAndHandleMedia({
				chatJid: t,
				dbCallbacks: { getDownloadableThumbnailForMedia: o("MAWGetDownloadableThumbnailForMediaApi").getDownloadableThumbnailForMedia },
				filename: u === "document" ? e.name : void 0,
				hash: a,
				mediaTypeDetails: n,
				plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(e),
				protocolMsgId: null,
				serverMediaType: u,
				size: e.size,
				uploadMediaMetric: c
			});
			return o("WAResultOrError").makeResult({
				plaintextHash: a,
				uploadPromise: d
			});
		}), C.apply(this, arguments);
	}
	function b(e) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.file, n = e.jid, r = e.thumbnail, a = o("MAWOptimisticUploadManager").getOptimisticUploadManager(), i = o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(t.type), l = i.serverMediaType;
			h.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["file uploading"])));
			var s = yield y(t, n, {
				mediaType: l,
				type: "regular"
			});
			s.success === !0 ? (h.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["fileUploadResult success"]))), a.set(s.value.plaintextHash, {
				file: t,
				optimisticUploadPromise: s.value.uploadPromise,
				previewPlaintextHash: null
			})) : (s.error, h.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["File is already being uploaded"]))));
			var C = null;
			if (h.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["thumbnail_exists: ", ""])), r != null), r && S(l)) {
				h.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["preview uploading"])));
				var b = o("WAMediaCrypto").convertServerMediaTypeToPreviewMediaType(l);
				if (b == null) {
					h.MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["unsupported preview media type ", ""])), l);
					return;
				}
				var v = yield y(r, n, {
					messageType: b,
					type: "preview"
				});
				v.success === !0 && (h.DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["previewUploadResult success"]))), C = v.value.plaintextHash, a.set(v.value.plaintextHash, {
					file: r,
					optimisticUploadPromise: v.value.uploadPromise
				}), s.success === !0 && (h.DEBUG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["fileUploadResult success, setting with previewPlaintextHash"]))), a.set(s.value.plaintextHash, {
					file: t,
					optimisticUploadPromise: s.value.uploadPromise,
					previewPlaintextHash: C
				})));
			}
		}), v.apply(this, arguments);
	}
	function S(t) {
		switch (t) {
			case "gif": return !1;
			case "image": return !1;
			case "video": return !0;
			default: return h.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Skipping preview upload for media type ", ""])), t), !1;
		}
	}
	l.optimisticUploadMedia = b, l.shouldUploadPreview = S;
}), 98);
