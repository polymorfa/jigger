__d("WASmaxOutMessagePublishIndividualBotResponseFanoutMixin", [
	"WASmaxChildren",
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishBotResponseMixin",
	"WASmaxOutMessagePublishContentTypeTextOrIndividualBotResponseMediaFanoutMixinGroup",
	"WASmaxOutMessagePublishEncTypeMessageSecretMessageMixin",
	"WASmaxOutMessagePublishEncVersionBot",
	"WASmaxOutMessagePublishMessageTargetMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.toArgs, n = o("WASmaxJsx").smax("participants", null, o("WASmaxChildren").REPEATED_CHILD(s, t, 2, 2));
		return n;
	}
	function s(e) {
		var t = e.toJid, n = o("WASmaxJsx").smax("to", { jid: o("WAWap").USER_JID(t) });
		return n;
	}
	function u(t) {
		var n, r = t.participantsArgs, a = t.messageTo, i = t.contentTypeTextOrIndividualBotResponseMediaFanoutMixinGroupArgs, l = t.botResponseMixinArgs, s = t.messageTargetMixinArgs, u = t.encTypeMessageSecretMessageMixinArgs, c = t.encVersionBotArgs, d = o("WASmaxOutMessagePublishContentTypeTextOrIndividualBotResponseMediaFanoutMixinGroup").mergeContentTypeTextOrIndividualBotResponseMediaFanoutMixinGroup((n = o("WASmaxJsx")).smax("message", { to: o("WAWap").USER_JID(a) }, o("WASmaxOutMessagePublishBotResponseMixin").mergeBotResponseMixin(n.smax("bot", null), l), o("WASmaxOutMessagePublishMessageTargetMixin").mergeMessageTargetMixin(n.smax("meta", null), s), o("WASmaxOutMessagePublishEncVersionBot").mergeEncVersionBot(o("WASmaxOutMessagePublishEncTypeMessageSecretMessageMixin").mergeEncTypeMessageSecretMessageMixin(n.smax("enc", null), u), c), o("WASmaxChildren").OPTIONAL_CHILD(e, r)), i);
		return d;
	}
	function c(e, t) {
		var n = u(t);
		return o("WASmaxMixins").mergeStanzas(e, n);
	}
	l.makeIndividualBotResponseFanoutParticipants = e, l.makeIndividualBotResponseFanoutParticipantsTo = s, l.mergeIndividualBotResponseFanoutMixin = c;
}), 98);
