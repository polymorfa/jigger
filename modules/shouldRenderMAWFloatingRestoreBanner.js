__d("shouldRenderMAWFloatingRestoreBanner", [
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n) {
		return t && (n == null || (e || (e = o("I64"))).equal(n.authorityLevel, (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)));
	}
	l.default = u;
}), 98);
