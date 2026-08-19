__d("MAWMessageIntegrityCheckFlytrapResultCache", ["I64"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		if (n.length === 0) return null;
		var r = n[0].offlineThreadingId, a = n[n.length - 1].offlineThreadingId;
		return (e || (e = o("I64"))).to_string(t) + "_" + r + "_" + a;
	}
	l.generateMessageIntegrityCheckPageKey = s;
}), 98);
