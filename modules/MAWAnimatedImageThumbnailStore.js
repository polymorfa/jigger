__d("MAWAnimatedImageThumbnailStore", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = new Map();
	function l(t) {
		var n;
		return (n = e.get(t)) != null ? n : null;
	}
	function s(t, n) {
		e.set(t, n);
	}
	i.getThumbnailSpec = l, i.setThumbnailSpec = s;
}), 66);
