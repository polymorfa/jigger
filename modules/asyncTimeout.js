__d("asyncTimeout", ["Promise"], (function(t, n, r, o, a, i) {
	"use strict";
	var e;
	function l(t) {
		return new (e || (e = (n("Promise"))))(function(e) {
			return setTimeout(e, t);
		});
	}
	i.default = l;
}), 66);
