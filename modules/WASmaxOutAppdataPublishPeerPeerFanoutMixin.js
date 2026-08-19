__d("WASmaxOutAppdataPublishPeerPeerFanoutMixin", [
	"WASmaxChildren",
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutAppdataPublishEncTypeIndividualMixin",
	"WASmaxOutAppdataPublishEncVersionFutureproofMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.toJid, n = e.encVersionFutureproofMixinArgs, r = e.encTypeIndividualMixinArgs, a = o("WASmaxJsx").smax("to", { jid: o("WAWap").DEVICE_JID(t) }, o("WASmaxOutAppdataPublishEncTypeIndividualMixin").mergeEncTypeIndividualMixin(o("WASmaxOutAppdataPublishEncVersionFutureproofMixin").mergeEncVersionFutureproofMixin(o("WASmaxJsx").smax("enc", null), n), r));
		return a;
	}
	function s(t) {
		var n = t.toArgs, r = t.appdataTo, a = o("WASmaxJsx").smax("appdata", { to: o("WAWap").USER_JID(r) }, o("WASmaxJsx").smax("participants", null, o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 24)));
		return a;
	}
	function u(e, t) {
		var n = s(t);
		return o("WASmaxMixins").mergeStanzas(e, n);
	}
	l.makePeerPeerFanoutParticipantsTo = e, l.mergePeerPeerFanoutMixin = u;
}), 98);
