__d("MAWLegacyMediaDownloadManager", ["MAWLegacyDownloadManager"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new (o("MAWLegacyDownloadManager")).LegacyDownloadManager(), s = new (o("MAWLegacyDownloadManager")).LegacyDownloadManager();
	function u(t, n) {
		e.setToDownloadManager(t, n);
	}
	function c(t) {
		return e.getFromDownloadManager(t);
	}
	function d(t) {
		e.removeFromMediaDownloadManager(t);
	}
	function m(e) {
		return s.getFromDownloadManager(e);
	}
	function p(e) {
		s.removeFromMediaDownloadManager(e);
	}
	l.setToMediaDownloadManager = u, l.getFromMediaDownloadManager = c, l.removeFromMediaDownloadManager = d, l.getFromMediaPlaintextDownloadManager = m, l.removeFromMediaPlaintextDownloadManager = p;
}), 98);
