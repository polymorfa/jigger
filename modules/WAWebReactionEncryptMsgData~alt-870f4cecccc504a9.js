__d("WAWebReactionEncryptMsgData", [
	"WAWebAddonEncryption",
	"WAWebAddonEncryptionError",
	"WAWebBackendApi",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebProcessBaseMsgInfo",
	"WAWebWidFactory",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = await o("WAWebBackendApi").frontendSendAndReceive("getGroupMetadata", { groupWid: e.id.remote });
		if (n != null && n.isCag) {
			var a, i = self.crypto.getRandomValues(new Uint8Array(12)), l = {
				type: (a = o("WAWebMsgType")).MsgKind.ReactionDecrypted,
				encode: {
					text: e.reactionText,
					senderTimestampMs: e.reactionTimestamp
				}
			}, s = o("WAWebAddonEncryptionError").getValidatedMessageSecret(a.MsgKind.ReactionDecrypted, t), u = await o("WAWebAddonEncryption").encryptAddOn(l, {
				messageSecret: s,
				iv: i,
				stanzaId: t.id.id,
				originalMessageSender: r("nullthrows")(o("WAWebMsgGetters").getOriginalSender(t)),
				addOnSender: o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(e)))
			}), c = u.encPayload;
			return babelHelpers.extends({}, o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(e), {
				type: a.MSG_TYPE.REACTION_ENC,
				kind: a.MsgKind.ReactionEncrypted,
				targetMessageKey: t.id,
				encPayload: c,
				encIv: i.buffer
			});
		}
		return e;
	}
	l.encryptReactionMsgData = e;
}), 98);
