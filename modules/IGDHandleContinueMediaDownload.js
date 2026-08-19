__d("IGDHandleContinueMediaDownload", [
	"MediaDownloadMediator",
	"Promise",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			return yield o("MediaDownloadMediator").handleNewCDNUrlFromMI(t.deliveryObjectId, t.cdnUrl), (e || (e = n("Promise"))).resolve();
		}), u.apply(this, arguments);
	}
	l.handleContinueMediaDownload = s;
}), 98);
