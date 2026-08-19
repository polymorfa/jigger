__d("MAWFindMsgsWithMinAndMaxTimestamp", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		if (e.length === 0) return [null, null];
		var t = e.toSorted(function(e, t) {
			var n, r;
			return ((n = e.sortOrderMs) != null ? n : 0) - ((r = t.sortOrderMs) != null ? r : 0);
		});
		return [t[0], t[t.length - 1]];
	}
	function l(e) {
		var t = e.filter(function(e) {
			return e.sortOrderMs != null;
		});
		if (t.length === 0) return [null, null];
		var n = null, r = null;
		for (var o of t) {
			var a, i;
			o.sortOrderMs != null && ((((a = n) == null ? void 0 : a.sortOrderMs) == null || n.sortOrderMs < o.sortOrderMs) && (n = o), (((i = r) == null ? void 0 : i.sortOrderMs) == null || r.sortOrderMs > o.sortOrderMs) && (r = o));
		}
		return [r, n];
	}
	i.findEBMsgsWithMinAndMaxTimestamp = e, i.findMsgsWithMinAndMaxTimestamp = l;
}), 66);
