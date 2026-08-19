__d("MAWWriteGroupPollMessageTxns", [
	"FBLogger",
	"I64",
	"MAWCurrentUser",
	"MAWDbPoll",
	"MAWDbPollTxns",
	"MAWDbPollUtils",
	"MAWDexieTable",
	"MAWGroupPollsDualEncryptionUtils",
	"MAWIndexedDb",
	"MAWMsgType",
	"MAWWriteMsgTxns",
	"WALongInt",
	"WAResultOrError",
	"WAStanzaUtils",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, r, a) {
		var i, l = r.decrypted, s = r.encryptedMessage, d = n.author, m = (i = s.pollCreationMessageKey) == null ? void 0 : i.id;
		return m == null || d == null || l == null ? o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeError({ type: "invalid_args_poll_update_message" })) : o("MAWDbPollTxns").getPoll(t, a.jid, m).then(function(r) {
			if (r == null) return o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeError({ type: "missing_poll_for_update" }));
			var i = u(r, l), s = i.optionsToAdd, p = i.selectedOptions, _ = o("MAWDbPollUtils").getAdminMessageForUpdate(r, d, s, p), f = o("WAStanzaUtils").toStanzaId(m), g = babelHelpers.extends({}, n, {
				msgContent: _,
				pollStanzaId: f,
				type: o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE
			});
			return o("MAWDexieTable").dexieAll([c(t, r, d, l), o("MAWWriteMsgTxns").writeNewIncomingMsg(t, g, a)]).then(function(n) {
				var r = n[0], i = n[1];
				return o("MAWDbPollTxns").maybeGetLatestPollUpdateMsg(t, f, a.jid).then(function(t) {
					var n, a;
					return o("MAWIndexedDb").afterTransaction({
						tag: "NewPoll",
						value: {
							contactIdForCurrentUser: (e || (e = o("I64"))).of_string(o("MAWCurrentUser").getID()),
							dbPoll: r,
							latestUpdateMsgId: (n = t == null ? void 0 : t.msgId) != null ? n : i.msgId,
							latestUpdateTimestampMs: o("WATimeUtils").castUnixTimeToMillisTime((a = t == null ? void 0 : t.ts) != null ? a : i.ts)
						}
					}), o("WAResultOrError").makeResult();
				});
			});
		});
	}
	function u(e, t) {
		var n, r = t.optionsToAdd, a = t.vote, i = e.pollOptions, l = ((n = a == null ? void 0 : a.selectedOptions) != null ? n : []).map(function(e) {
			var t, n = o("MAWGroupPollsDualEncryptionUtils").getBase64EncodedHash(e), r = (t = i.get(n)) == null ? void 0 : t.optionText;
			return r == null ? null : {
				hashedOptionName: o("MAWDbPoll").convertOptionHashToString(n),
				optionName: r
			};
		}).filter(Boolean);
		return {
			optionsToAdd: (r != null ? r : []).map(function(e) {
				return e.optionName;
			}),
			selectedOptions: l
		};
	}
	function c(e, t, n, a) {
		var i, l, s = a.optionsToAdd, u = a.vote, c = t.pollOptions, p = s;
		d(p, c);
		var _ = o("WALongInt").maybeNumber((i = u == null ? void 0 : u.senderTimestampMs) != null ? i : 0);
		if (_ != null && _ > ((l = t.latestSenderTimestampsMs.get(n)) != null ? l : 0)) {
			t.latestSenderTimestampsMs.set(n, o("WATimeUtils").castToMillisTime(_));
			var f = u;
			m(f, c, n);
		} else _ === 0 ? r("FBLogger")("GroupPollsE2EE").warn("Poll vote message doesn't have a timestamp") : _ == null ? r("FBLogger")("GroupPollsE2EE").warn("Poll vote message timestamp is not a valid number") : _ === 0 ? r("FBLogger")("GroupPollsE2EE").mustfix("Poll vote message doesn't have a timestamp") : _ == null ? r("FBLogger")("GroupPollsE2EE").mustfix("Poll vote message timestamp is not a valid number") : r("FBLogger")("GroupPollsE2EE").info("Dropping poll vote message since we already have a newer vote message from this author %s", n);
		var g = babelHelpers.extends({}, t, { pollOptions: c });
		return o("MAWDbPollTxns").updatePoll(e, g).then(function() {
			return t;
		});
	}
	function d(e, t) {
		e == null || e.forEach(function(e) {
			var n = e.hashedOptionName, r = {
				optionText: e.optionName,
				voteAuthors: new Set()
			}, o = t.get(n);
			o == null ? t.set(n, r) : o.optionText === void 0 && t.set(n, {
				optionText: e.optionName,
				voteAuthors: o.voteAuthors
			});
		});
	}
	function m(e, t, n) {
		t.values().forEach(function(e) {
			e.voteAuthors.delete(n);
		}), e == null || e.selectedOptions.forEach(function(e) {
			var r, a = o("MAWGroupPollsDualEncryptionUtils").getBase64EncodedHash(e);
			if (!t.has(a)) {
				var i = {
					optionText: void 0,
					voteAuthors: new Set()
				};
				t.set(a, i);
			}
			(r = t.get(a)) == null || r.voteAuthors.add(n);
		});
	}
	l.handleGroupPollUpdate = s;
}), 98);
