__d("MAWHandleMediaPreviewBeforeDownloadApi", ["MAWMediaPreviewDownloadManager", "Promise"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function(r) {
		return o("MAWMediaPreviewDownloadManager").markMediaPreviewAsDownloading(r), (e || (e = n("Promise"))).resolve();
	};
	l.handleMediaPreviewBeforeDownload = s;
}), 98);
