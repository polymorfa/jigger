__d("MAWOptimisticCreateOrDeleteReactionLSDB", [
	"I64",
	"LSAuthorityLevel",
	"MAWTimeUtils",
	"QPLUserFlow",
	"ReQL",
	"WATimeUtils",
	"err",
	"getErrorSafe",
	"qpl",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (e || (e = o("react"))).useCallback;
	function c() {
		return u(function(e, t, n, a, l, u) {
			return l.runInTransaction(async function(i) {
				try {
					var l = await i.reactions.get(e, t, u);
					return await i.reactions.upsert([
						e,
						t,
						u
					], {
						actorId: u,
						authorityLevel: (s || (s = o("I64"))).of_int32(r("LSAuthorityLevel").OPTIMISTIC),
						messageId: t,
						reaction: n != null ? n : "",
						threadKey: e,
						timestampMs: o("MAWTimeUtils").toTimestamp(o("WATimeUtils").unixTime()),
						transportKey: "WhatsApp"
					}), l;
				} catch (e) {
					var c = r("getErrorSafe")(e);
					throw r("QPLUserFlow").addPoint(r("qpl")._(1056843664, "1465"), "fail_create_optimistic_reaction", { instanceKey: a }), r("err")("Failed to send or unsend optimistic reaction: " + c.message + " ");
				} finally {
					r("QPLUserFlow").addPoint(r("qpl")._(1056843664, "1465"), "create_optimistic_reaction_end", { instanceKey: a });
				}
			}, "readwrite", void 0, void 0, i.id + ":52");
		}, []);
	}
	function d(e, t, n, a, l) {
		return e.runInTransaction(function(i) {
			return l.then(function(l) {
				if (l != null) return i.reactions.upsert([
					l.threadKey,
					l.messageId,
					l.actorId
				], babelHelpers.extends({}, l));
				var u = o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.reactions).getKeyRange(t, n, a).filter(function(e) {
					return (s || (s = o("I64"))).equal(e.authorityLevel, s.of_int32(r("LSAuthorityLevel").OPTIMISTIC));
				}));
				return u.then(function(e) {
					if (e != null) return i.reactions.delete(e.threadKey, e.messageId, e.actorId);
				});
			});
		}, "readwrite", void 0, void 0, i.id + ":105");
	}
	l.useOptimisticReactionLSDB = c, l.markOptimisticReactionAsFailedLSDB = d;
}), 98);
