__d("MAWMsgReplySnippet", [
	"fbt",
	"FBLogger",
	"I64",
	"LSIntEnum",
	"LSReplyMessageAttachmentType",
	"MAWBumpMessageMsgReplySnippet",
	"MAWCurrentUser",
	"MAWPostMentionXMASnippetFbt",
	"MAWReplyBuilder"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u;
	function c(t) {
		var n = t.isAuthorMe, a = t.isBumpMsg, i = a === void 0 ? !1 : a, l = t.isDeletedMsg, c = t.isFBPostMention, d = c === void 0 ? !1 : c, m = t.isFBStoryMention, p = m === void 0 ? !1 : m, _ = t.isIGStoryMention, f = _ === void 0 ? !1 : _, g = t.isIGXMAStoryShare, h = g === void 0 ? !1 : g, y = t.isMsgHighlightsTabFriendUpdatesReply, C = y === void 0 ? !1 : y, b = t.isNoteReply, v = b === void 0 ? !1 : b, S = t.isPostPrivateReply, R = S === void 0 ? !1 : S, L = t.isStoryHighlightShare, E = L === void 0 ? !1 : L, k = t.isStoryProducerReply, I = t.isStoryReaction, T = I === void 0 ? !1 : I, D = t.isStoryReply, x = D === void 0 ? !1 : D, $ = t.isStoryShare, P = $ === void 0 ? !1 : $, N = t.recipientName, M = t.replyAttachmentType, w = t.replySenderIsMe, A = w === void 0 ? !1 : w, F = t.replySenderIsRecipient, O = F === void 0 ? !1 : F, B = t.senderName;
		switch (!0) {
			case d: return n ? o("MAWPostMentionXMASnippetFbt").getCurrentUserSendPostMentionSnippetFbt(N) : o("MAWPostMentionXMASnippetFbt").getParticipantSendPostMentionSnippetFbt(B);
			case i: return o("MAWBumpMessageMsgReplySnippet").buildBumpMessageReplySnippet({
				isAuthorMe: n,
				recipientName: N,
				replySenderIsMe: A,
				replySenderIsRecipient: O,
				senderName: B
			});
			case E: return s._(
				/*BTDS*/
				""
			);
			case h && M != null && (e || (e = o("I64"))).equal(M, (u || (u = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").FEED_POST)): return s._(
				/*BTDS*/
				""
			);
			case n && l: return s._(
				/*BTDS*/
				""
			);
			case n && P: return s._(
				/*BTDS*/
				""
			);
			case n && T: return s._(
				/*BTDS*/
				""
			);
			case n && f: return N != null ? s._(
				/*BTDS*/
				"",
				[s._param("name", N)]
			) : s._(
				/*BTDS*/
				""
			);
			case n && p: return N != null ? s._(
				/*BTDS*/
				"",
				[s._param("name", N)]
			) : s._(
				/*BTDS*/
				""
			);
			case f:
			case p: return s._(
				/*BTDS*/
				""
			);
			case !n && C: return s._(
				/*BTDS*/
				"",
				[s._param("name", B)]
			);
			case n && C: return s._(
				/*BTDS*/
				""
			);
			case n && R: return N != null ? s._(
				/*BTDS*/
				"",
				[s._param("name", N)]
			) : s._(
				/*BTDS*/
				""
			);
			case R: return s._(
				/*BTDS*/
				"",
				[s._param("name", B)]
			);
			case !n && v: return s._(
				/*BTDS*/
				"",
				[s._param("name", B)]
			);
			case n && v: return s._(
				/*BTDS*/
				""
			);
			case n && A: return s._(
				/*BTDS*/
				""
			);
			case n && x: return k === !0 ? s._(
				/*BTDS*/
				""
			) : N != null ? s._(
				/*BTDS*/
				"",
				[s._param("name", N)]
			) : s._(
				/*BTDS*/
				""
			);
			case n: return N != null ? s._(
				/*BTDS*/
				"",
				[s._param("other_name", N)]
			) : s._(
				/*BTDS*/
				""
			);
			case l: return s._(
				/*BTDS*/
				"",
				[s._param("name", B)]
			);
			case P: return s._(
				/*BTDS*/
				"",
				[s._param("user", B)]
			);
			case T: return s._(
				/*BTDS*/
				""
			);
			case O: return s._(
				/*BTDS*/
				"",
				[s._param("other", B)]
			);
			case A && x: return k === !0 ? s._(
				/*BTDS*/
				"",
				[s._param("name", B)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("name", B)]
			);
			case A: return s._(
				/*BTDS*/
				"",
				[s._param("other_name", B)]
			);
			default: return N != null ? s._(
				/*BTDS*/
				"",
				[s._param("other", B), s._param("other_name", N)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("other", B)]
			);
		}
	}
	function d(t, n, r, a, i) {
		if (a === void 0 && (a = !1), (e || (e = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(25))) {
			var l = t ? o("MAWPostMentionXMASnippetFbt").getCurrentUserSendPostMentionSnippetFbt(r) : o("MAWPostMentionXMASnippetFbt").getParticipantSendPostMentionSnippetFbt(i);
			return l == null ? void 0 : l.toString();
		}
		if ((e || (e = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(22))) return t ? r != null ? s._(
			/*BTDS*/
			"",
			[s._param("name", r)]
		).toString() : s._(
			/*BTDS*/
			""
		).toString() : s._(
			/*BTDS*/
			""
		).toString();
		if ((e || (e = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(14))) return t ? s._(
			/*BTDS*/
			""
		).toString() : s._(
			/*BTDS*/
			"",
			[s._param("name", i)]
		).toString();
		if ((e || (e = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(13))) return t ? r != null ? s._(
			/*BTDS*/
			"",
			[s._param("name", r)]
		).toString() : s._(
			/*BTDS*/
			""
		).toString() : s._(
			/*BTDS*/
			"",
			[s._param("name", i)]
		).toString();
		if ((e || (e = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(18))) return t ? s._(
			/*BTDS*/
			""
		).toString() : s._(
			/*BTDS*/
			"",
			[s._param("name", i)]
		).toString();
		if ((e || (e = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(2)) || (e || (e = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(24))) {
			var c = (e || (e = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(24));
			if (t) return c ? s._(
				/*BTDS*/
				""
			).toString() : r != null ? s._(
				/*BTDS*/
				"",
				[s._param("name", r)]
			).toString() : s._(
				/*BTDS*/
				""
			).toString();
			if (a) return c ? s._(
				/*BTDS*/
				"",
				[s._param("name", i)]
			).toString() : s._(
				/*BTDS*/
				"",
				[s._param("name", i)]
			).toString();
		}
		if ((e || (e = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(12))) return t ? s._(
			/*BTDS*/
			""
		).toString() : s._(
			/*BTDS*/
			""
		).toString();
		if ((e || (e = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(4))) return t ? s._(
			/*BTDS*/
			""
		).toString() : s._(
			/*BTDS*/
			"",
			[s._param("user", i)]
		).toString();
	}
	function m(t, n, a, i) {
		var l = t.senderId, s = (e || (e = o("I64"))).to_string(t.senderId) === a, u = n === a;
		if (l == null || n == null) throw r("FBLogger")("messenger_e2ee_web").mustfix("Error getting reply snippet without replyToUserId or / and replying message sender");
		var c = "$PARTICIPANT_FIRST_NAME(" + e.to_string(l) + ")", m = "$PARTICIPANT_FIRST_NAME(" + n + ")", p = d(u, i, c, s, m);
		return p == null ? void 0 : p.toString();
	}
	function p(e) {
		var t = e.replyContent, n = e.sender;
		if (t != null) {
			var r = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplySnippet(t, n, o("MAWCurrentUser").getID());
			return r;
		}
	}
	l.buildLocalizedReplySnippetLegacy = c, l.getReplySnippetFromLSMessage = m, l.getReplySnippet = p;
}), 226);
