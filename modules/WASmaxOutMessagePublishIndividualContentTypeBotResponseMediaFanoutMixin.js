__d("WASmaxOutMessagePublishIndividualContentTypeBotResponseMediaFanoutMixin", [
	"WASmaxChildren",
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishContentTypeMediaMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.toCount, n = o("WASmaxJsx").smax("participants", null, o("WASmaxChildren").REPEATED_CHILD_COUNT(s, t, 2, 2));
		return n;
	}
	function s() {
		var e = o("WASmaxJsx").smax("to", null, o("WASmaxJsx").smax("enc", { mediatype: "image" }));
		return e;
	}
	function u(t) {
		var n = t.participantsArgs, r = o("WASmaxOutMessagePublishContentTypeMediaMixin").mergeContentTypeMediaMixin(o("WASmaxJsx").smax("message", null, o("WASmaxChildren").OPTIONAL_CHILD(e, n)));
		return r;
	}
	function c(e, t) {
		var n = u(t);
		return o("WASmaxMixins").mergeStanzas(e, n);
	}
	l.makeIndividualContentTypeBotResponseMediaFanoutParticipants = e, l.makeIndividualContentTypeBotResponseMediaFanoutParticipantsTo = s, l.mergeIndividualContentTypeBotResponseMediaFanoutMixin = c;
}), 98);
