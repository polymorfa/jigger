__d("MAWFetchContacts", [
	"I64",
	"LSContactTypeExact",
	"LSIntEnum",
	"MAWContactRelationshipType",
	"ReQL",
	"WAJids",
	"asyncToGeneratorRuntime",
	"requireDeferred",
	"toMsgrUserJid"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("requireDeferred")("LSDatabaseSingletonLazyWrapper").__setRef("MAWFetchContacts");
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield u.load(), a = yield n(), i = new Set(t.map(function(e) {
				return o("WAJids").extractUserId(e);
			}));
			return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(a.tables.contacts).filter(function(t) {
				return i.has((e || (e = o("I64"))).to_string(t.id));
			})).then(function(t) {
				return new Map(t.map(function(t) {
					return [r("toMsgrUserJid")((e || (e = o("I64"))).to_string(t.id)), t];
				}));
			});
		}), d.apply(this, arguments);
	}
	function m(e) {
		return c(e).then(function(e) {
			var t = new Map();
			return e.forEach(function(e, n) {
				t.set(n, o("MAWContactRelationshipType").getContactRelationshipType(e));
			}), t;
		});
	}
	function p(t) {
		return c(t).then(function(t) {
			var n = new Map();
			return t.forEach(function(t, a) {
				var i = t.contactTypeExact != null && (e || (e = o("I64"))).equal(t.contactTypeExact, (s || (s = o("LSIntEnum"))).ofNumber(r("LSContactTypeExact").MESSENGER_ONLY_NOT_ALLOWED_ON_FB));
				n.set(a, i);
			}), n;
		});
	}
	l.fetchContacts = c, l.fetchContactsRelationships = m, l.fetchContactsIsMsplit = p;
}), 98);
