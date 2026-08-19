__d("MAWBumpMessageMsgReplySnippet", ["getMAWLocalizedBumpMsgReplySnippet"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.isAuthorMe, n = e.recipientName, o = e.replySenderIsMe, a = e.replySenderIsRecipient, i = e.senderName, l = "participantBumpedParticipantMessage";
		return t && o ? l = "currentUserBumpedOwnMessage" : t ? l = "currentUserBumpedMessage" : o ? l = "participantBumpedCurrentUserMessage" : a && (l = "participantBumpedOwnMessage"), r("getMAWLocalizedBumpMsgReplySnippet")(l, i, n);
	}
	l.buildBumpMessageReplySnippet = e;
}), 98);
