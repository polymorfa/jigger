__d("MAWFetchExternalAttachmentBlob", ["asyncToGeneratorRuntime", "sendToSentQPLLogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield window.fetch(e, {}).then(function(e) {
				return e.blob();
			}).catch(function(e) {
				throw o("sendToSentQPLLogger").markSendToSentPoint(t, "fetch_external_attachment_failed"), e;
			});
			return n;
		}), s.apply(this, arguments);
	}
	l.fetchExternalAttachmentBlob = e;
}), 98);
