__d("MAWUpdateMsg", ["MAWBridgeBuildMsg", "MAWMsgFetchLSReplyMsgAndAttachment"], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, n, r) {
		var a = o("MAWBridgeBuildMsg").buildNewAndUpdatedMessageSharedParams(t, r), i = babelHelpers.extends({}, n, a);
		await e.messages.upsert([
			n.threadKey,
			n.timestampMs,
			n.messageId
		], i), await o("MAWMsgFetchLSReplyMsgAndAttachment").updateMessagesReplyingToMsg(e, i);
	}
	l.call = e;
}), 98);
