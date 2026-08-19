__d("WAWebSlicedMatcher", ["WAWebTimeSlicedRunner"], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		return e.sortResults != null ? e.sortResults(t) : t;
	}
	function s(e, t) {
		return e.isTimedOut() ? !0 : e.limit != null && t >= e.limit;
	}
	function u(t) {
		var n = [];
		for (var r of t.candidates) {
			if (s(t, n.length)) break;
			var o = t.matchOne(r);
			o != null && n.push(o);
		}
		return e(t, n);
	}
	async function c(t, n) {
		var r = Array.from(t.candidates), a = [];
		return await o("WAWebTimeSlicedRunner").runTimeSliced(r, function(e) {
			if (s(t, a.length)) return !1;
			var n = t.matchOne(e);
			n != null && a.push(n);
		}, { signal: n }), (n == null ? void 0 : n.aborted) === !0 ? [] : e(t, a);
	}
	async function d(e, t) {
		var n = e();
		return n == null ? [] : c(n, t);
	}
	l.drainMatcherSync = u, l.drainMatcherAsync = c, l.searchFuzzyAsync = d;
}), 98);
