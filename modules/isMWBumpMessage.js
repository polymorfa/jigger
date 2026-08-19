__d("isMWBumpMessage", [
	"EntMessageReplyType",
	"I64",
	"LSIntEnum"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		return t != null && (e || (e = o("I64"))).equal(t, (s || (s = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").BUMP));
	}
	l.default = u;
}), 98);
