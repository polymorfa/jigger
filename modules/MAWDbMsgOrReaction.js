__d("MAWDbMsgOrReaction", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e, t) {
		return e.reactToExternalId != null ? t.forReaction(e) : t.forMessage(e);
	}
	function l(e, t) {
		return e == null ? t.forNull() : e.reactToExternalId != null ? t.forReaction(e) : t.forMessage(e);
	}
	function s(e, t) {
		return e.reactToExternalId != null ? t.forReaction(e) : t.forMessage(e);
	}
	function u(e, t) {
		return e == null ? t.forNull() : e.reactToExternalId != null ? t.forReaction(e) : t.forMessage(e);
	}
	i.switchOnMsgOrReaction = e, i.switchOnMsgOrReactionNullish = l, i.switchOnMsgOrReactionMaybeUnstored = s, i.switchOnMsgOrReactionMaybeUnstoredNullish = u;
}), 66);
