__d("MAWMpsMessagePointQuery", [
	"EBMessagePointQuery",
	"WAJids",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n = e.ctx, a = e.messageIds, i = e.threadId;
			(t = n.metric) == null || t.addPoint("mps_message_point_query_start", { int: { batchSize: a.length } });
			var l = o("WAJids").validateChatJid(i), s = r("nullthrows")(l, "invalid threadId passed to validateThreadId: " + i), u = yield o("EBMessagePointQuery").messagePointQuery({
				chatJid: s,
				messageIds: a
			});
			return u.success ? o("WAResultOrError").makeResult(u.value) : o("WAResultOrError").makeError(u.error.errorCode);
		}), s.apply(this, arguments);
	}
	l.MAWMpsMessagePointQuery = e;
}), 98);
