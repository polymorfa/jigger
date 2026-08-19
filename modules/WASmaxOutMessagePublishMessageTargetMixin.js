__d("WASmaxOutMessagePublishMessageTargetMixin", [
	"WASmaxAttrs",
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t, n = e.metaTargetId, r = e.metaTargetSenderJid, a = e.metaTargetChatJid, i = e.metaTargetChatJidLid, l = o("WASmaxJsx").smax("meta", {
			target_id: (t = o("WAWap")).STANZA_ID(n),
			target_sender_jid: o("WASmaxAttrs").OPTIONAL(t.USER_JID, r),
			target_chat_jid: o("WASmaxAttrs").OPTIONAL(t.JID, a),
			target_chat_jid_lid: o("WASmaxAttrs").OPTIONAL(t.JID, i)
		});
		return l;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeMessageTargetMixin = s;
}), 98);
