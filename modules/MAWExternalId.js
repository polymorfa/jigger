__d("MAWExternalId", [
	"I64",
	"Random",
	"WAStanzaUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 131071, u = null, c = 0;
	function d() {
		var e = u, t = Date.now();
		if (e == null || p(e) !== p(t)) return u = t, c = 0, t;
		var n = t + 100 * (c + 1), r = g(t), o = g(n);
		return r == null || o == null || r > o ? t : (c++, n);
	}
	function m(e) {
		return new Date(e).getTime() > 0;
	}
	function p(e) {
		return Math.floor(e / 100) * 100;
	}
	function _(e) {
		return Math.floor(r("Random").random() * e);
	}
	function f() {
		var t = d();
		return o("WAStanzaUtils").toStanzaId((e || (e = o("I64"))).to_string(e.and_(e.or_(e.lsl_(e.of_float(t), 22), e.and_(e.of_float(_(s)), e.of_float(s))), e.max_int)));
	}
	function g(e) {
		return m(e) ? Math.floor(Number(e) % 1e5 / 100) : null;
	}
	l.generateExternalId = f, l.getThreeMostSignificantDigitsForSortOrderTimestamp = g;
}), 98);
