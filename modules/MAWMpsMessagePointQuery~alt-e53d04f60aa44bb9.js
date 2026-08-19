__d("MAWMpsMessagePointQuery", [
	"EBMessagePointQuery",
	"WAJids",
	"WAResultOrError",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		var t, n = e.ctx, a = e.messageIds, i = e.threadId;
		(t = n.metric) == null || t.addPoint("mps_message_point_query_start", { int: { batchSize: a.length } });
		var l = o("WAJids").validateChatJid(i), s = r("nullthrows")(l, "invalid threadId passed to validateThreadId: " + i), u = await o("EBMessagePointQuery").messagePointQuery({
			chatJid: s,
			messageIds: a
		});
		return u.success ? o("WAResultOrError").makeResult(u.value) : o("WAResultOrError").makeError(u.error.errorCode);
	}
	l.MAWMpsMessagePointQuery = e;
}), 98);
