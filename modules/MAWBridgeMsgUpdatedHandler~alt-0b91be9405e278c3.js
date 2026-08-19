__d("MAWBridgeMsgUpdatedHandler", [
	"FBLogger",
	"MAWAdminMsgCTA",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWMsgFetchLSReplyMsgAndAttachment",
	"MAWUpdateMsg",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.chatJid, "MAWBridgeMsgUpdatedHandler", async function(n, a) {
			var i, l = await (i = o("ReQL")).firstAsync(i.fromTableAscending(n.messages.index("messageId")).getKeyRange(t.msgId)), u = await i.firstAsync(i.fromTableAscending(n.attachments).getKeyRange(a, t.msgId));
			if (l == null) {
				r("FBLogger")("messenger_web").info("existing message is null for type %s, and attachment is null: %s", t.type_, u == null);
				return;
			}
			var c = await o("MAWAdminMsgCTA").getAdminMsgCtaStep(n, a, t), d = await s(e, t);
			return o("MAWUpdateMsg").call(n, d, l, c);
		});
	}
	async function s(e, t) {
		var n = await o("MAWMsgFetchLSReplyMsgAndAttachment").fetchReplyLocalViaLS(e, t);
		return n != null ? n : t;
	}
	l.call = e;
}), 98);
