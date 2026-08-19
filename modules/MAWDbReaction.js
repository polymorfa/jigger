__d("MAWDbReaction", [
	"FBLogger",
	"I64",
	"MAWAckLevel",
	"MAWGetBumpTimestampMs",
	"MAWUserJidWrapper",
	"WAJids",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		var t = e.author, n = e.reaction, r = e.reactToAuthor, a = o("MAWUserJidWrapper").getMyUserJid();
		return !(n == null || n === "" || r !== "@me" && r !== a || t === "@me" || t === "@system" || t === a);
	}
	function u(e) {
		var t = o("MAWUserJidWrapper").getMyUserJid();
		if (e.reactToAuthor !== "@me" && e.reactToAuthor !== t || e.reaction == null) return null;
		var n = e.author === "@me" || e.author === "@system" ? null : e.author;
		return n == null ? null : babelHelpers.extends({}, e, {
			author: n,
			reaction: e.reaction,
			reactToAuthor: "@me"
		});
	}
	function c(e) {
		var t = u(e);
		if (t == null) throw r("FBLogger")("messenger_web").mustfixThrow("Cannot cast reaction to incomingDbReaction");
		return t;
	}
	function d(e, t, n) {
		var r = o("MAWUserJidWrapper").getMyUserJid();
		return e.find(function(e) {
			return e.threadJid === t && o("WAJids").authorToUserId(e.author, r) === o("WAJids").authorToUserId(n, r);
		});
	}
	function m(e, t, n, r, a, i, l, s, u, c, d, m, p) {
		m === void 0 && (m = o("MAWAckLevel").ACK.clock);
		var _ = {
			ack: m,
			author: c,
			externalId: t,
			groupingKey: i,
			reaction: a,
			reactionId: n,
			reactToAuthor: l,
			reactToExternalId: r,
			reactToMsgId: s,
			senderTimestampMs: p,
			threadJid: e,
			ts: u
		};
		return d != null ? babelHelpers.extends({}, _, { rowId: d }) : _;
	}
	function p(t) {
		var n = o("MAWGetBumpTimestampMs").getBumpTimestampMs(t);
		return o("WATimeUtils").castToMillisTime((e || (e = o("I64"))).to_float(n));
	}
	l.isIncomingReaction = s, l.maybeCastToIncomingDbReaction = u, l.castToIncomingDbReaction = c, l.findMatchingReaction = d, l.formatReactionForDb = m, l.getReactionTimeMs = p;
}), 98);
