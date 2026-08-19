__d("WAWebQuestionReplyQuotedMessage.react", [
	"WAWebChatEntryPoint",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMsgCollection",
	"WAWebMsgModelFromData",
	"WAWebNewsletterOpenAtAction",
	"WAWebNewsletterValidationUtils",
	"WAWebQuotedMsgContent.react",
	"WAWebQuotedMsgWrapper.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo, c = {
		barColor: {
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		contentWrapper: {
			paddingInlineEnd: "x1nzty39",
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			backgroundColor: "x1bu39yj",
			width: "xh8yej3",
			$$css: !0
		},
		responseBody: {
			paddingTop: "x1tiyuxx",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(27), n = e.questionReplyQuotedMessage, a = e.replyMsg, i;
		t[0] !== a ? (i = a && o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(o("WAWebFrontendMsgGetters").getChat(a).id.toJid()), t[0] = a, t[1] = i) : i = t[1];
		var l = i, u = a == null ? void 0 : a.serverId, d;
		t[2] !== l || t[3] !== u ? (d = function() {
			u == null || l == null || o("WAWebNewsletterOpenAtAction").openNewsletterAt({
				newsletterJid: l,
				serverId: u,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatQuestionReply
			});
		}, t[2] = l, t[3] = u, t[4] = d) : d = t[4];
		var m = d, p;
		t[5] !== m || t[6] !== l || t[7] !== n.questionServerId ? (p = async function() {
			l != null && o("WAWebNewsletterOpenAtAction").openNewsletterAt({
				newsletterJid: l,
				serverId: n.questionServerId,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatQuestionReply,
				onMessageDeleted: m,
				onMessageNotFound: m
			});
		}, t[5] = m, t[6] = l, t[7] = n.questionServerId, t[8] = p) : p = t[8];
		var _ = p, f;
		if (t[9] !== n.quotedQuestion) {
			var g = o("WAWebMsgModelFromData").msgModelFromMsgData(n.quotedQuestion);
			f = o("WAWebMsgCollection").MsgCollection.gadd(g), t[9] = n.quotedQuestion, t[10] = f;
		} else f = t[10];
		var h = f, y = a != null, C;
		t[11] !== a ? (C = a == null ? void 0 : a.safe(), t[11] = a, t[12] = C) : C = t[12];
		var b;
		t[13] !== h ? (b = h.safe(), t[13] = h, t[14] = b) : b = t[14];
		var v;
		t[15] !== b ? (v = s.jsx(r("WAWebQuotedMsgContent.react"), {
			msg: b,
			theme: "questions"
		}), t[15] = b, t[16] = v) : v = t[16];
		var S;
		t[17] !== n.quotedResponse.body ? (S = s.jsx(o("WAWebEmojiText.react").EmojiText, {
			xstyle: c.responseBody,
			text: n.quotedResponse.body,
			breakWord: !0
		}), t[17] = n.quotedResponse.body, t[18] = S) : S = t[18];
		var R;
		t[19] !== v || t[20] !== S ? (R = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.contentWrapper,
			children: [v, S]
		}), t[19] = v, t[20] = S, t[21] = R) : R = t[21];
		var L;
		return t[22] !== _ || t[23] !== R || t[24] !== y || t[25] !== C ? (L = s.jsx(r("WAWebQuotedMsgWrapper.react"), {
			authorBackgroundStyle: c.barColor,
			handleClick: _,
			clickable: y,
			rootMsg: C,
			children: R
		}), t[22] = _, t[23] = R, t[24] = y, t[25] = C, t[26] = L) : L = t[26], L;
	}
	l.default = d;
}), 98);
