__d("MWV2OnAuthoritativeThreadInsert", [
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n, a) {
		var i = t[0], l = o("ReQL").fromTableAscending(n.tables.threads.index("clientThreadKey")).getKeyRange(i).subscribe(function(t, n) {
			if (n.operation !== "delete") {
				var i = n.value;
				if ((e || (e = o("I64"))).equal(i.authorityLevel, (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE))) return a(i), l();
			}
		});
	}
	l.onAuthoritativeThreadInsert = u;
}), 98);
