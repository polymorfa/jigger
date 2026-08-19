__d("MAWFetchUserJids", [
	"I64",
	"MAWJids",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		var r = (e || (e = o("I64"))).of_string(n);
		return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.tables.participants).getKeyRange(r).filter(function(t) {
			return !(e || (e = o("I64"))).equal(t.contactId, r);
		}).map(function(t) {
			return o("MAWJids").toUserJid((e || (e = o("I64"))).to_string(t.contactId));
		}));
	}
	l.fetchUserJids = s;
}), 98);
