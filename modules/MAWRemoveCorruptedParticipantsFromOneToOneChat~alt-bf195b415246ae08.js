__d("MAWRemoveCorruptedParticipantsFromOneToOneChat", [
	"I64",
	"ReQL",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(t, n, r, a) {
		var i = o("WAJids").extractUserId(r), l = [i];
		a !== i && l.push(a);
		var s = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.participants).getKeyRange(n)), u = s.filter(function(t) {
			return !l.includes((e || (e = o("I64"))).to_string(t.contactId));
		}).map(function(e) {
			return e.contactId;
		});
		await Promise.all(u.map(function(e) {
			return t.participants.delete(n, e);
		}));
	}
	l.default = s;
}), 98);
