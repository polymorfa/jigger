__d("MAWUploadAndHandleMedia", [
	"MWFBLogger",
	"MpsMediaManagerV2",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MWFBLogger").MWMediaLogger();
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.chatJid, a = t.dbCallbacks, i = t.filename, l = t.hash, c = t.plaintext, d = t.protocolMsgId, m = t.serverMediaType, p = t.size, _ = t.uploadMediaMetric, f = yield o("MpsMediaManagerV2").mpsMediaManager().enqueueUploadFullSize({
				chatJid: n,
				mediaUploadFlow: _,
				plaintext: c,
				plaintextHash: l,
				serverMediaType: m
			});
			if (f.success !== !0) return u.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to enqueue upload full size: ", ""])), f.error), _.endFail(f.error), f;
			_.addPoint("get_downloadable_thumbnail_start");
			var g = yield a.getDownloadableThumbnailForMedia(l).catch(function(e) {
				return u.catching(r("getErrorSafe")(e)).MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["getDownloadableThumbnailForMedia unexpected runtime-erorr: ", ""])), String(e)), null;
			});
			_.addPoint("get_downloadable_thumbnail_end");
			var h = babelHelpers.extends({}, f.value, {
				downloadableThumbnail: g,
				filename: i,
				size: p
			});
			return _.endSuccess(), o("WAResultOrError").makeResult(h);
		}), d.apply(this, arguments);
	}
	l.uploadAndHandleMedia = c;
}), 98);
