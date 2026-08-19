__d("WAWebBizAiSmartComposerWrapper.react", [
	"ReactDOM",
	"WAWebBizAiSmartComposerDraftCard.react",
	"WAWebBizAiSmartComposerModePill.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.cardSlot, n = e.chatId, a = e.onInsert, i = e.pillSlot;
		return s.jsxs(s.Fragment, { children: [i != null && o("ReactDOM").createPortal(s.jsx(r("WAWebBizAiSmartComposerModePill.react"), { chatId: n }), i), t != null && o("ReactDOM").createPortal(s.jsx(r("WAWebBizAiSmartComposerDraftCard.react"), {
			chatId: n,
			onInsert: a
		}), t)] });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
