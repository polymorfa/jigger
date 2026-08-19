__d("WAUploadMediaQuick", [
	"WACreateRetrier",
	"WAEncryptAndUploadPlaintext",
	"WAMediaUtils",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.logger, r = t.mediaUploadFlow, a = t.plaintext, i = t.plaintextHash, l = t.serverMediaType;
			n.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start uploadMediaQuick"]))), r.addPoint("create_upload_retrier_start");
			var s = yield o("WACreateRetrier").createUploadRetrier(l, r);
			if (!s.success) return r.addPoint("create_upload_retrier_fail"), s;
			r.addPoint("create_upload_retrier_end"), r.addPoint("create_media_key_start");
			var u = o("WAMediaUtils").createMediaKey(), c = o("WAMediaUtils").createUploadToken(), d = o("WATimeUtils").unixTime();
			r.addPoint("create_media_key_end");
			var m = yield o("WAEncryptAndUploadPlaintext").encryptAndUploadPlaintext({
				mediaKey: u,
				mediaKeyTimestamp: d,
				serverMediaType: l,
				mediaUploadFlow: r,
				plaintext: a,
				plaintextHash: i,
				uploadRetrier: s.value,
				uploadToken: c
			});
			return m;
		}), u.apply(this, arguments);
	}
	l.uploadMediaQuick = s;
}), 98);
