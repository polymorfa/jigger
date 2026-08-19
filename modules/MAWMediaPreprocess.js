__d("MAWMediaPreprocess", [
	"MAWAudioPreProcess",
	"MAWDocumentPreProcess",
	"MAWImagePreProcess",
	"MAWSupportedDocumentTypes",
	"MAWVideoPreProcess",
	"Promise"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, r) {
		var a;
		return r.type === "image" ? o("MAWImagePreProcess").imagePreprocess(t, !1, r.totalNumberOfFilesForLogging, (a = r.hdEnabled) != null ? a : void 0) : r.type === "audio" ? o("MAWAudioPreProcess").audioPreprocess(t, r.totalNumberOfFilesForLogging) : r.type === "document" ? o("MAWDocumentPreProcess").documentPreprocess(t) : r.type === "empty-file" ? (e || (e = n("Promise"))).reject("Empty file") : r.type === "invalid" ? (e || (e = n("Promise"))).reject("Unsupported file type") : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + r.type);
		})();
	}
	function u(t, r, a) {
		e: {
			if (r === "image") return o("MAWImagePreProcess").optimisticImagePreprocess(t);
			if (r === "audio") return o("MAWAudioPreProcess").optimisticAudioPreprocess(t, void 0, a);
			if (r === "document") return o("MAWDocumentPreProcess").optimisticDocumentPreprocess(t);
			if (r === "empty-file") return (e || (e = n("Promise"))).reject("Empty file");
			if (r === "invalid") return (e || (e = n("Promise"))).reject("Unsupported file type");
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + r);
		}
	}
	function c(e) {
		return e.size === 0 ? "empty-file" : o("MAWImagePreProcess").isSupportedImageFileType(e.type) ? "image" : o("MAWVideoPreProcess").isSupportedVideoFileType(e.type) ? "video" : o("MAWAudioPreProcess").isSupportedAudioFileType(e.type) ? "audio" : o("MAWSupportedDocumentTypes").isAllowedType(e.name) ? "document" : "invalid";
	}
	l.getMediaPreprocessPromise = s, l.getOptimisticMediaPreprocessPromise = u, l.getSupportedAttachmentType = c;
}), 98);
