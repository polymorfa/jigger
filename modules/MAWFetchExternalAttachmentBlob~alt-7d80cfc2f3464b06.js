__d("MAWFetchExternalAttachmentBlob", ["sendToSentQPLLogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t) {
		var n = await window.fetch(e, {}).then(function(e) {
			return e.blob();
		}).catch(function(e) {
			throw o("sendToSentQPLLogger").markSendToSentPoint(t, "fetch_external_attachment_failed"), e;
		});
		return n;
	}
	l.fetchExternalAttachmentBlob = e;
}), 98);
