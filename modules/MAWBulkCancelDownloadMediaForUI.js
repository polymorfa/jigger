__d("MAWBulkCancelDownloadMediaForUI", ["MpsMediaManagerV2"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		e.forEach(function(e) {
			o("MpsMediaManagerV2").mpsMediaManager().dequeueDownload(e);
		});
	}
	l.bulkCancelDownloadMediaForUI = e;
}), 98);
