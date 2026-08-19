__d("MAWPreloadSecureMessages", [
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSResult",
	"MAWMessagesDirection",
	"MAWPreloadSecureMessagesRangeDataSource",
	"MWV2OnAuthoritativeThreadInsert",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = async function(n, a, i, l) {
		var t;
		if (!(e || (e = o("I64"))).equal(l, (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE))) return Promise.resolve();
		var u = r("MAWPreloadSecureMessagesRangeDataSource")(n), c, d = await new Promise(function(t, n) {
			c = u.getOrCreateMessageRangeCoveringCursor({
				externalId: null,
				messageId: null,
				threadKey: a,
				timestampMs: (e || (e = o("I64"))).max_int
			}).subscribe({
				complete: t,
				error: n,
				next: function(n) {
					t(n);
				}
			});
		});
		if ((t = c) == null || t.unsubscribe(), d && o("MAWMessagesDirection").isFirstPageRange(d.range, "desc")) return u.extendRange(d.range, {
			maxExternalId: null,
			minExternalId: null
		}, "desc", i);
	}, c = async function(n, a) {
		var t = await o("ReQL").firstAsync(o("ReQL").fromTableDescending(n.tables.threads).getKeyRange(a));
		if (t == null) return null;
		if ((e || (e = o("I64"))).equal(t.authorityLevel, (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE))) return t;
		var i = t.clientThreadKey;
		return i != null ? new Promise(function(e) {
			o("MWV2OnAuthoritativeThreadInsert").onAuthoritativeThreadInsert(r("LSResult")(i), n, function(t) {
				return e(t);
			});
		}) : null;
	}, d = async function(t, n, r) {
		var e = await c(t, n);
		return e == null ? Promise.resolve() : u(t, e.threadKey, r, e.authorityLevel);
	};
	l.preloadSecureMessages = u, l.preloadSecureMessagesByThreadKey = d;
}), 98);
