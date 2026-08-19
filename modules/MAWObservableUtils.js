__d("MAWObservableUtils", [
	"Random",
	"ReStoreKeyComparer",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		return { id: r("Random").uint32() };
	}
	function u(t, n) {
		if (Array.isArray(t) || Array.isArray(n)) {
			if (Array.isArray(t) && Array.isArray(n)) return (e || (e = o("ReStoreKeyComparer"))).compareKey(t, n);
		} else return (e || (e = o("ReStoreKeyComparer"))).compareKey([t], [n]);
		throw r("err")("[Separate Read Chunked Observable] Cannot compare array and non-array");
	}
	function c(e, t, n, o) {
		for (var a = [], i = 0; i < e.length; i += t) {
			for (var l = i + t; l > i && l < e.length - 1 && n(o(e[l - 1]), o(e[l])) === 0;) l--;
			if (l === i) throw r("err")("Entire pagination window sorts identically: this should never happen.");
			a.push(e.slice(i, l)), i -= i + t - l;
		}
		return a;
	}
	l.getUniqueRef = s, l.wrappedCompareKey = u, l.chunkArray = c;
}), 98);
