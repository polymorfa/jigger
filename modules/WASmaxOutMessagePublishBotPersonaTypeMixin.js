__d("WASmaxOutMessagePublishBotPersonaTypeMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.botPersonaType, n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("bot", { persona_type: o("WAWap").CUSTOM_STRING(t) }));
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeBotPersonaTypeMixin = s;
}), 98);
