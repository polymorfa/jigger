__d("WASmaxOutMessagePublishBotClientMultiThreadIDMessageMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishBotClientMultiThreadIDMixin",
	"WASmaxOutMessagePublishBotConversationThreadIDMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.botClientMultiThreadIDMixinArgs, n = e.botConversationThreadIDMixinArgs, r = o("WASmaxJsx").smax("message", null, o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishBotConversationThreadIDMixin").mergeBotConversationThreadIDMixin, o("WASmaxOutMessagePublishBotClientMultiThreadIDMixin").mergeBotClientMultiThreadIDMixin(o("WASmaxJsx").smax("bot", null), t), n));
		return r;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeBotClientMultiThreadIDMessageMixin = s;
}), 98);
