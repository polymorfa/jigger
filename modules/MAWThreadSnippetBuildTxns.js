__d("MAWThreadSnippetBuildTxns", [
	"FBLogger",
	"MAWDbMsg",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWJidUtils",
	"MAWLocalizationType",
	"MAWThreadSnippetUtils",
	"MAWUserJidWrapper",
	"WAJids",
	"WAProtocolMsgId",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return o("WAJids").switchOnMsgrChatJidType(n, {
			group: function(r) {
				return s(e, t, !0);
			},
			user: function(r) {
				return s(e, t, !1);
			}
		});
	}
	function s(e, t, n) {
		var a;
		o("WAJids").isAuthorMe(e) ? (r("FBLogger")("messenger_web").warn("[MAWThreadSnippetBuildTxns] Reaction snippet author should not be @me"), a = o("WAJids").userIdFromJid(o("MAWUserJidWrapper").getMyUserJid())) : a = o("WAJids").userIdFromJid(e);
		var i = {
			contactIDs: [],
			strings: []
		}, l = n ? o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REACT_MESSAGE_IN_GROUP : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REACT_MESSAGE;
		return i.contactIDs.push(a), i.strings.push(t), {
			snippetParams: i,
			snippetSenderContactId: a,
			snippetType: l
		};
	}
	function u(e, t, n, r) {
		var a, i = n.newestReaction, l = n.reactionsToClear;
		if (i != null && o("WATimeUtils").castUnixTimeToMillisTime(i.ts) > ((a = t.snippetMsgTs) != null ? a : 0)) return o("MAWDexieTable").dexieResolve({
			newestReaction: i,
			thread: c(t, i, r)
		});
		var s = l != null && l.length > 0;
		return s && t.snippetMsg != null ? e.reactions.get({ reactionId: t.snippetMsg }).then(function(n) {
			var r = !1;
			if (n == null) r = !0;
			else {
				var a = o("MAWJidUtils").maybeToProtocolMsgId(n.author, n.threadJid, n.reactToExternalId);
				a != null && (r = l.some(function(e) {
					var t = o("MAWJidUtils").maybeToProtocolMsgId(e.author, e.threadJid, e.reactToExternalId);
					return t != null && o("WAProtocolMsgId").equals(t, a);
				}));
			}
			return r ? d(e, t).then(function(e) {
				return {
					newestReaction: null,
					thread: e
				};
			}) : o("MAWDexieTable").dexieResolve({
				newestReaction: null,
				thread: t
			});
		}) : o("MAWDexieTable").dexieResolve({
			newestReaction: null,
			thread: t
		});
	}
	function c(e, t, n) {
		return babelHelpers.extends({}, e, {
			snippetMsg: t.reactionId,
			snippetMsgTs: o("WATimeUtils").castUnixTimeToMillisTime(t.ts)
		});
	}
	function d(e, t) {
		return o("MAWThreadSnippetUtils").recalculateSnippetFromScratch_EXPENSIVE(e, t).then(function(e) {
			if (e == null) return r("FBLogger")("messenger_web").mustfix("[Occamadillo] ThreadUpdated handler called for clear snippet when centralized thread bump is enabled"), babelHelpers.extends({}, t, {
				snippetMsg: void 0,
				snippetMsgTs: void 0
			});
			var n = o("WATimeUtils").castUnixTimeToMillisTime(o("MAWDbMsg").getCanonicalTsFromMsg(e));
			return babelHelpers.extends({}, t, {
				snippetMsg: e.msgId,
				snippetMsgTs: n
			});
		});
	}
	function m(e, t) {
		return d(e, t).then(function(t) {
			return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(t, {
				snippetMsg: t.snippetMsg,
				snippetMsgTs: t.snippetMsgTs
			}, "MAWThreadSnippetBuildTxns.refreshThreadSnippet"), o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.put(t).then(r("emptyFunction"));
		});
	}
	l.buildReactionThreadSnippet = e, l.getThreadChangesetForReactionChanges = u, l.refreshThreadSnippet = m;
}), 98);
