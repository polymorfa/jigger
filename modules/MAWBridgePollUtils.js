__d("MAWBridgePollUtils", [
	"fbt",
	"FBLogger",
	"I64",
	"MAWUserJidWrapper",
	"WAJids"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e;
	function u(t) {
		return t.toSorted(function(t, n) {
			return t.numVotes !== n.numVotes ? n.numVotes - t.numVotes : (e || (e = o("I64"))).equal(t.sortKeyVotingTimestamp, n.sortKeyVotingTimestamp) ? (e || (e = o("I64"))).compare(t.sortKeyCreationTimestamp, n.sortKeyCreationTimestamp) : (e || (e = o("I64"))).compare(n.sortKeyVotingTimestamp, t.sortKeyVotingTimestamp);
		});
	}
	function c(t) {
		if (t === o("WAJids").AUTHOR_SYSTEM) throw r("FBLogger")("messenger_web").mustfixThrow("Not a valid author for poll vote");
		return t === o("WAJids").AUTHOR_ME ? (e || (e = o("I64"))).of_string(o("WAJids").userIdFromJid(o("MAWUserJidWrapper").getMyUserJid())) : (e || (e = o("I64"))).of_string(o("WAJids").userIdFromJid(t));
	}
	function d(e, t) {
		switch (e.length) {
			case 0: return s._(
				/*BTDS*/
				"",
				[s._param("option_name", t)]
			);
			case 1: return s._(
				/*BTDS*/
				"",
				[s._param("option_name", t), s._param("voter_name", e[0])]
			);
			case 2: return s._(
				/*BTDS*/
				"",
				[
					s._param("option_name", t),
					s._param("first_voter_name", e[0]),
					s._param("second_voter_name", e[1])
				]
			);
			case 3: return s._(
				/*BTDS*/
				"",
				[
					s._param("option_name", t),
					s._param("first_voter_name", e[0]),
					s._param("second_voter_name", e[1]),
					s._param("third_voter_name", e[2])
				]
			);
			default: return s._(
				/*BTDS*/
				"",
				[
					s._param("option_name", t),
					s._param("first_voter_name", e[0]),
					s._param("second_voter_name", e[1]),
					s._param("remaining_count", e.length - 2)
				]
			);
		}
	}
	l.sortPollXMAOptions = u, l.getContactIdForAuthor = c, l.getListItemAccessibilityText = d;
}), 226);
