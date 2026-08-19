__d("MAWDbPollTxns", ["WAStanzaUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return e.poll.put(t).then(function() {
			return t;
		});
	}
	function s(e, t, n) {
		return e.poll.get([t, o("WAStanzaUtils").toStanzaId(n)]);
	}
	function u(e, t, n) {
		return e.messages.where([
			"threadJid",
			"pollStanzaId",
			"sortOrderMs"
		]).between([
			n,
			t,
			Number.MIN_SAFE_INTEGER
		], [
			n,
			t,
			Number.MAX_SAFE_INTEGER
		], !1, !1).reverse().first();
	}
	l.updatePoll = e, l.getPoll = s, l.maybeGetLatestPollUpdateMsg = u;
}), 98);
