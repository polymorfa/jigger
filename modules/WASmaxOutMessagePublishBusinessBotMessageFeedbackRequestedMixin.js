__d("WASmaxOutMessagePublishBusinessBotMessageFeedbackRequestedMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.botFeedbackRequested, n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("bot", { feedback_requested: o("WAWap").CUSTOM_STRING(t) }));
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeBusinessBotMessageFeedbackRequestedMixin = s;
}), 98);
