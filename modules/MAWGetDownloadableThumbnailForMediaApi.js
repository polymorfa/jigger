__d("MAWGetDownloadableThumbnailForMediaApi", [
	"MAWOptimisticUploadManager",
	"WALogger",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n, r = o("MAWOptimisticUploadManager").getOptimisticUploadManager().get(t);
			if (r == null) return null;
			var a = r.previewPlaintextHash;
			if (a == null) return null;
			var i = o("MAWOptimisticUploadManager").getOptimisticUploadManager().get(a);
			if (i == null) return null;
			var l = yield (n = i.optimisticUploadPromise) == null ? void 0 : n.catch(function(t) {
				return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["GetDownloadableThumbnail - previewEntry optimistedPromise rejected with ", ""])), t), o("WAResultOrError").makeError("runtime-error");
			});
			if (l == null || l.success !== !0) return null;
			var s = l.value, u = s.directPath, c = s.fileEncSha256, d = s.fileSha256, m = s.mediaKey, p = s.mediaKeyTimestamp, _ = s.objectId;
			return {
				directPath: u,
				fileEncSha256: c,
				fileSha256: d,
				mediaKey: m,
				mediaKeyTimestamp: p,
				objectId: _
			};
		});
		return function(n) {
			return t.apply(this, arguments);
		};
	})();
	l.getDownloadableThumbnailForMedia = s;
}), 98);
