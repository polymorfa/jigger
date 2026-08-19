__d("WAWebMediaViewerCaption.react", [
	"WAWebFormatConfigurationConversation",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgMentionMap",
	"WAWebMsgPhoneNumbers"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.id, n = e.msg;
		return o("WAWebFormatConfigurationConversation").Conversation({
			mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(n),
			groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(n),
			phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(n),
			links: o("WAWebMsgLinks").getLinksFromMsg(n),
			trusted: !0,
			fromMe: t.fromMe,
			fromChatWid: t.remote,
			parseLists: !0,
			parseQuotes: !0,
			parseInlineCode: !0,
			messageHasSpoiler: o("WAWebMsgGetters").getIsSpoiler(n),
			spoilerInteractive: !0
		});
	}
	l.getCaptionFormatters = e;
}), 98);
