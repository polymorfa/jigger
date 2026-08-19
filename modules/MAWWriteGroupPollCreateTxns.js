__d("MAWWriteGroupPollCreateTxns", [
	"I64",
	"MAWArmadilloPollTableSchema.pb",
	"MAWCurrentUser",
	"MAWDbParticipantTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWWriteMsgTxns",
	"WAResultOrError",
	"WATimeUtils",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, r) {
		var a = n.optionsHashed;
		if (a == null) return o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeError({ type: "invalid_args_poll_option_hashes" }));
		var i = t.author, l = t.externalId, s = t.ts, d = r.jid;
		return o("MAWDexieTable").dexieAll([u(e, d, n, i, l), o("MAWWriteMsgTxns").writeNewIncomingMsg(e, t, r)]).then(function(e) {
			var t = e[0], n = e[1];
			c(t, n.msgId, o("WATimeUtils").castUnixTimeToMillisTime(s));
		}).then(function() {
			return o("WAResultOrError").makeResult();
		});
	}
	function u(e, t, n, a, i) {
		var l = n.encKey, s = n.latestSenderTimestampsMs, u = n.name, c = n.optionsHashed, d = n.selectableOptionsCount;
		return o("MAWDbParticipantTxns").getParticipantsInThread(e, t).then(function(n) {
			var m = {
				chatJid: t,
				encKey: l,
				latestSenderTimestampsMs: s,
				pollAuthor: a,
				pollOptions: r("nullthrows")(c),
				pollParticipantCount: n.length,
				pollStanzaId: i,
				pollState: o("MAWArmadilloPollTableSchema.pb").POLL_STATE.OPEN,
				selectableOptionsCount: d,
				title: u
			};
			return e.poll.put(m).then(function() {
				return m;
			});
		});
	}
	function c(t, n, r) {
		o("MAWIndexedDb").afterTransaction({
			tag: "NewPoll",
			value: {
				contactIdForCurrentUser: (e || (e = o("I64"))).of_string(o("MAWCurrentUser").getID()),
				dbPoll: t,
				latestUpdateMsgId: n,
				latestUpdateTimestampMs: r
			}
		});
	}
	l.handleIncomingGroupPollCreate = s;
}), 98);
