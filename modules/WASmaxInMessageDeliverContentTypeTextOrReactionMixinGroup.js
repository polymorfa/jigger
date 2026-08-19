__d("WASmaxInMessageDeliverContentTypeTextOrReactionMixinGroup", [
	"WAResultOrError",
	"WASmaxInMessageDeliverContentTypeReactionMixin",
	"WASmaxInMessageDeliverContentTypeTextMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxInMessageDeliverContentTypeTextMixin").parseContentTypeTextMixin(e);
		if (t.success) return o("WAResultOrError").makeResult({
			name: "ContentTypeText",
			value: t.value
		});
		var n = o("WASmaxInMessageDeliverContentTypeReactionMixin").parseContentTypeReactionMixin(e);
		return n.success ? o("WAResultOrError").makeResult({
			name: "ContentTypeReaction",
			value: n.value
		}) : o("WASmaxParseUtils").errorMixinDisjunction(e, ["ContentTypeText", "ContentTypeReaction"], [t, n]);
	}
	l.parseContentTypeTextOrReactionMixinGroup = e;
}), 98);
