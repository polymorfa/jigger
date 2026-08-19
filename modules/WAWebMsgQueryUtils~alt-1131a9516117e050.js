__d("WAWebMsgQueryUtils", [
	"WAWebCollectionConstants",
	"WAWebDBGetGroupMemberUpdateMessages",
	"WAWebDBMessageFindLocal",
	"WAWebMsgCollection"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t, n) {
		var r = typeof t == "number" && !isNaN(t) ? t : o("WAWebCollectionConstants").PAGE_SIZE, a = { add: "search" }, i = await o("WAWebDBMessageFindLocal").msgFindStarred({
			count: r,
			chat: e != null ? e : void 0,
			anchor: n
		});
		return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(void 0, i, a, "msgCollectionGetStarred");
	}
	async function s(e, t, n) {
		var r = typeof t == "number" && !Number.isNaN(t) ? t : o("WAWebCollectionConstants").PAGE_SIZE, a = { add: "search" }, i = await o("WAWebDBMessageFindLocal").msgFindEvents({
			count: r,
			chat: e,
			anchor: n
		});
		return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(void 0, i, a, "msgCollectionGetEvents");
	}
	async function u(e, t, n) {
		var r = typeof t == "number" && !Number.isNaN(t) ? t : o("WAWebCollectionConstants").PAGE_SIZE, a = { add: "search" }, i = await o("WAWebDBGetGroupMemberUpdateMessages").getGroupMemberUpdateMessagesForChat(e, r, n);
		return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(void 0, i, a, "msgCollectionGetGroupMemberUpdates");
	}
	async function c(e, t) {
		var n = typeof e == "number" && !isNaN(e) ? e : o("WAWebCollectionConstants").PAGE_SIZE, r = await o("WAWebDBMessageFindLocal").msgFindCallLog({
			count: n,
			anchor: t
		});
		return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(void 0, r, { add: "search" }, "msgCollectionGetVoipCallLogs");
	}
	async function d(e, t, n) {
		var r = e != null ? e : o("WAWebMsgCollection").MEDIA_QUERY_LIMIT, a = n === "after" ? "after" : "before", i = await o("WAWebDBMessageFindLocal").getAllDocsMessages({
			chat: t == null ? void 0 : t.remote,
			count: r,
			direction: a,
			msgKey: t
		});
		return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(void 0, i, { add: "search" }, "msgCollectionGetAllMedia");
	}
	l.getStarred = e, l.getEventMsgs = s, l.getGroupMemberUpdateMsgs = u, l.getVoipCallLogMsgs = c, l.getAllDocsMsgs = d;
}), 98);
