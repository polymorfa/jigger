__d("MAWGetBumpTimestampMs", [
	"I64",
	"MAWAckLevel",
	"MAWDbMsgOrReaction",
	"MAWExtractMsFromExternalId",
	"MAWTimeUtils",
	"WALongInt",
	"WATimeUtils",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		var r = n == null ? null : o("MAWExtractMsFromExternalId").extractMsFromExternalId(n);
		return (e || (e = o("I64"))).add(o("MAWTimeUtils").millisTimeToTimestamp(t), e.of_int32(r != null ? r : 0));
	}
	function u(t) {
		var n = t.msg, a = t.throwIfNoServerTs, i = a ? r("nullthrows")(n.serverTs) : n.serverTs;
		return s(o("WATimeUtils").castUnixTimeToMillisTime(i != null ? i : n.ts), (e || (e = o("I64"))).of_string(n.externalId));
	}
	function c(t) {
		return t.senderTimestampMs != null ? (e || (e = o("I64"))).of_string(o("WALongInt").longIntToDecimalString(t.senderTimestampMs)) : s(o("WATimeUtils").castUnixTimeToMillisTime(t.ts), (e || (e = o("I64"))).of_string(t.externalId));
	}
	function d(t) {
		return o("MAWDbMsgOrReaction").switchOnMsgOrReactionMaybeUnstoredNullish(t, {
			forMessage: function(n) {
				return o("MAWAckLevel").isMsgAuthoritative(n.ack) && n.sortOrderMs != null ? (e || (e = o("I64"))).of_float(n.sortOrderMs) : u({
					msg: n,
					throwIfNoServerTs: !1
				});
			},
			forNull: function() {
				return (e || (e = o("I64"))).zero;
			},
			forReaction: c
		});
	}
	l.getBumpTimestampMs = d;
}), 98);
