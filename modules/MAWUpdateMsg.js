__d("MAWUpdateMsg", [
	"MAWBridgeBuildMsg",
	"MAWMsgFetchLSReplyMsgAndAttachment",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var a = o("MAWBridgeBuildMsg").buildNewAndUpdatedMessageSharedParams(t, r), i = babelHelpers.extends({}, n, a);
			yield e.messages.upsert([
				n.threadKey,
				n.timestampMs,
				n.messageId
			], i), yield o("MAWMsgFetchLSReplyMsgAndAttachment").updateMessagesReplyingToMsg(e, i);
		}), s.apply(this, arguments);
	}
	l.call = e;
}), 98);
