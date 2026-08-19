__d("MAWMediaPreviewDownloadManager", ["WAResolvable"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 1e4, s = [], u = new Map();
	function c(e) {
		if (!u.has(e)) {
			_();
			var t = new (o("WAResolvable")).Resolvable();
			u.set(e, t), s.push(e);
		}
	}
	function d(e, t) {
		var n = u.get(e);
		n != null && (n.reject(t), p(e));
	}
	function m(e) {
		return u.get(e);
	}
	function p(e) {
		u.delete(e);
	}
	function _() {
		if (s.length >= e) {
			var t = s.shift();
			t != null && u.delete(t);
		}
	}
	function f() {
		s = [], u.clear();
	}
	l.markMediaPreviewAsDownloading = c, l.markMediaPreviewAsFailed = d, l.getMediaPreviewDownloadingResolvable = m, l.removeMediaPreviewDownloadingResolvable = p, l.clear = f;
}), 98);
