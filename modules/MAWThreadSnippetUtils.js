__d("MAWThreadSnippetUtils", [
	"MAWDbReaction",
	"MAWEphemeralMsgUtils",
	"MAWJidUtils",
	"MAWLocalizationType",
	"MAWLocalizationUtils",
	"MAWMsgType",
	"MAWThreadNewestMsgOrReactionUtils",
	"MAWThreadSnippet",
	"MAWThreadSnippetBuildTxns",
	"MAWXMAUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t;
		if (d(e.xmaMessageType)) return !0;
		var n = ((t = e.msgContent) == null ? void 0 : t.adminType) != null ? o("MAWLocalizationUtils").isDeviceChangeAdminMsg(e.msgContent.adminType) : !1;
		if (e.type !== o("MAWMsgType").MSG_TYPE.ADMIN) return !1;
		var r = e.msgContent.adminType;
		return r === o("MAWLocalizationType").LOCALIZATION_TYPE.DEBUG_MSG ? !0 : n;
	}
	function s(t, n, r) {
		return t.messages.where("[threadJid+sortOrderMs]").between([n.jid, Number.MIN_SAFE_INTEGER], [n.jid, Number.MAX_SAFE_INTEGER], !1, !1).filter(function(t) {
			return (r == null || o("MAWEphemeralMsgUtils").filterNonExpiredMsg(r)(t)) && !e(t);
		}).reverse().first();
	}
	var u = {
		snippetParams: {
			contactIDs: [],
			mentionJIDs: [],
			strings: []
		},
		snippetSenderContactId: null,
		snippetType: o("MAWLocalizationType").LOCALIZATION_TYPE.EMPTY_SNIPPET
	};
	function c(e, t, n, r) {
		return r == null || r.addPoint("fetching_from_db_from_scratch_" + (n != null ? n : 0) + "_start"), o("MAWThreadNewestMsgOrReactionUtils").getNewestMsgOrReactionForSnippet(e, t).then(function(e) {
			return r == null || r.addPoint("fetching_from_db_from_scratch_" + (n != null ? n : 0) + "_end"), e == null ? { snippet: u } : m(t, e);
		});
	}
	function d(e) {
		return o("MAWXMAUtils").isXMAStoryReply(e) || o("MAWXMAUtils").isXMAMsgHighlightsTabFriendUpdatesReply(e);
	}
	function m(e, t) {
		var n, r, a, i, l, s, c;
		if (t.reactionId != null) {
			var d = o("MAWDbReaction").maybeCastToIncomingDbReaction(t);
			return d == null ? { snippet: u } : {
				snippet: o("MAWThreadSnippetBuildTxns").buildReactionThreadSnippet(d.author, d.reaction, e),
				snippetMsgOrReaction: t
			};
		}
		switch (t.type) {
			case o("MAWMsgType").MSG_TYPE.XMA: {
				var m, p, _, f, g, h, y, C = o("MAWJidUtils").toProtocolMsgId(t);
				return C == null ? { snippet: u } : {
					snippet: o("MAWThreadSnippet").buildThreadSnippet({
						adminMsgContent: (m = t.msgContent) == null ? void 0 : m.adminMsgContent,
						adminType: (p = t.msgContent) == null ? void 0 : p.adminType,
						author: t.author,
						chatJid: t.threadJid,
						content: (_ = t.msgContent) == null ? void 0 : _.content,
						mentionedJids: (f = t.msgContent) == null ? void 0 : f.mentionedJids,
						msgType: t.type,
						ravenMediaType: t.ravenMediaType,
						replyAuthor: (g = t.quote) == null ? void 0 : g.content.author,
						replyType: (h = t.quote) == null ? void 0 : h.content.type,
						specialTextSize: t.specialTextSize,
						unsupportedType: (y = t.msgContent) == null ? void 0 : y.subtype,
						xmaMessageType: t.xmaMessageType
					}),
					snippetMsgOrReaction: t
				};
			}
			default: return {
				snippet: o("MAWThreadSnippet").buildThreadSnippet({
					adminMsgContent: (n = t.msgContent) == null ? void 0 : n.adminMsgContent,
					adminType: (r = t.msgContent) == null ? void 0 : r.adminType,
					author: t.author,
					chatJid: t.threadJid,
					content: (a = t.msgContent) == null ? void 0 : a.content,
					mentionedJids: (i = t.msgContent) == null ? void 0 : i.mentionedJids,
					msgType: t.type,
					ravenMediaType: t.ravenMediaType,
					replyAuthor: (l = t.quote) == null ? void 0 : l.content.author,
					replyType: (s = t.quote) == null ? void 0 : s.content.type,
					specialTextSize: t.specialTextSize,
					unsupportedType: (c = t.msgContent) == null ? void 0 : c.subtype,
					xmaMessageType: t.xmaMessageType
				}),
				snippetMsgOrReaction: t
			};
		}
	}
	l.isDbMsgDisabledForThreadSnippet = e, l.recalculateSnippetFromScratch_EXPENSIVE = s, l.EMPTY_SNIPPET_DATA = u, l.getThreadSnippetFromScratch = c, l.shouldIgnoreXMAMsgForSnippet = d;
}), 98);
