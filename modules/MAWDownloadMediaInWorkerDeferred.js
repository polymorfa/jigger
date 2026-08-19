__d("MAWDownloadMediaInWorkerDeferred", ["requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("MAWDownloadMediaInWorker").__setRef("MAWDownloadMediaInWorkerDeferred");
	function s(t) {
		e.onReady(function(e) {
			return e.maybeDownloadMediaInWorker(t);
		});
	}
	function u(t) {
		e.onReady(function(e) {
			return e.downloadMediaInWorker(t);
		});
	}
	function c(t) {
		e.onReady(function(e) {
			return e.maybeBulkDownloadMediaInWorker(t);
		});
	}
	l.maybeDownloadMediaInWorker = s, l.downloadMediaInWorker = u, l.maybeBulkDownloadMediaInWorker = c;
}), 98);
