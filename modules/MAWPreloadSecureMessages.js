__d("MAWPreloadSecureMessages", [
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSResult",
	"MAWMessagesDirection",
	"MAWPreloadSecureMessagesRangeDataSource",
	"MWV2OnAuthoritativeThreadInsert",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l) {
			var c;
			if (!(s || (s = o("I64"))).equal(l, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE))) return (e || (e = n("Promise"))).resolve();
			var d = r("MAWPreloadSecureMessagesRangeDataSource")(t), m, p = yield new (e || (e = (n("Promise"))))(function(e, t) {
				m = d.getOrCreateMessageRangeCoveringCursor({
					externalId: null,
					messageId: null,
					threadKey: a,
					timestampMs: (s || (s = o("I64"))).max_int
				}).subscribe({
					complete: e,
					error: t,
					next: function(n) {
						e(n);
					}
				});
			});
			if ((c = m) == null || c.unsubscribe(), p && o("MAWMessagesDirection").isFirstPageRange(p.range, "desc")) return d.extendRange(p.range, {
				maxExternalId: null,
				minExternalId: null
			}, "desc", i);
		});
		return function(n, r, o, a) {
			return t.apply(this, arguments);
		};
	})(), d = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
			var i = yield o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.tables.threads).getKeyRange(a));
			if (i == null) return null;
			if ((s || (s = o("I64"))).equal(i.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE))) return i;
			var l = i.clientThreadKey;
			return l != null ? new (e || (e = (n("Promise"))))(function(e) {
				o("MWV2OnAuthoritativeThreadInsert").onAuthoritativeThreadInsert(r("LSResult")(l), t, function(t) {
					return e(t);
				});
			}) : null;
		});
		return function(n, r) {
			return t.apply(this, arguments);
		};
	})(), m = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o) {
			var a = yield d(t, r);
			return a == null ? (e || (e = n("Promise"))).resolve() : c(t, a.threadKey, o, a.authorityLevel);
		});
		return function(n, r, o) {
			return t.apply(this, arguments);
		};
	})();
	l.preloadSecureMessages = c, l.preloadSecureMessagesByThreadKey = m;
}), 98);
