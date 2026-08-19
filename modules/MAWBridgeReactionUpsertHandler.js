__d("MAWBridgeReactionUpsertHandler", [
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWTimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n, a, i, l) {
		return {
			actorId: (e || (e = o("I64"))).of_string(t),
			authorityLevel: (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE),
			messageId: a,
			reaction: l,
			reactionCreationTimestampMs: o("MAWTimeUtils").toTimestamp(i),
			threadKey: n,
			timestampMs: o("MAWTimeUtils").toTimestamp(i),
			transportKey: "WhatsApp"
		};
	}
	function c(t, n, r, a, i, l) {
		return t.reactions.upsert([
			r,
			a,
			(e || (e = o("I64"))).of_string(n)
		], u(n, r, a, i, l));
	}
	function d(e, t, n, r, o, a) {
		return c(e, t, n, r, o, a);
	}
	function m(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.chatJid, "MAWBridgeReactionUpsertHandler", function(e, n) {
			return c(e, t.actorId, n, t.messageId, t.ts, t.reaction);
		});
	}
	l.composeReaction = u, l.attachmentMutationsOptimisticHandler = d, l.call = m;
}), 98);
