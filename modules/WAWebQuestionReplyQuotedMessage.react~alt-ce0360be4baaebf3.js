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
	"react"
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
		var t = e.questionReplyQuotedMessage, n = e.replyMsg, a = n && o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(o("WAWebFrontendMsgGetters").getChat(n).id.toJid()), i = n == null ? void 0 : n.serverId, l = function() {
			i == null || a == null || o("WAWebNewsletterOpenAtAction").openNewsletterAt({
				newsletterJid: a,
				serverId: i,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatQuestionReply
			});
		}, d = async function() {
			a != null && o("WAWebNewsletterOpenAtAction").openNewsletterAt({
				newsletterJid: a,
				serverId: t.questionServerId,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatQuestionReply,
				onMessageDeleted: l,
				onMessageNotFound: l
			});
		}, m = u(function() {
			var e = o("WAWebMsgModelFromData").msgModelFromMsgData(t.quotedQuestion);
			return o("WAWebMsgCollection").MsgCollection.gadd(e);
		}, [t.quotedQuestion]);
		return s.jsx(r("WAWebQuotedMsgWrapper.react"), {
			authorBackgroundStyle: c.barColor,
			handleClick: d,
			clickable: n != null,
			rootMsg: n == null ? void 0 : n.safe(),
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.contentWrapper,
				children: [s.jsx(r("WAWebQuotedMsgContent.react"), {
					msg: m.safe(),
					theme: "questions"
				}), s.jsx(o("WAWebEmojiText.react").EmojiText, {
					xstyle: c.responseBody,
					text: t.quotedResponse.body,
					breakWord: !0
				})]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
