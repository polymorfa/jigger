__d("MAWConcurrent", ["Promise"], (function(t, n, r, o, a, i) {
	"use strict";
	var e;
	function l() {
		for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
		return (e || (e = n("Promise"))).all(r);
	}
	i.concurrent = l;
}), 66);
