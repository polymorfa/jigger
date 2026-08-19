__d("WAWebBizAiSmartComposerWrapper.react", [
	"ReactDOM",
	"WAWebBizAiSmartComposerDraftCard.react",
	"WAWebBizAiSmartComposerModePill.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(10), n = e.cardSlot, a = e.chatId, i = e.onInsert, l = e.pillSlot, u;
		t[0] !== a || t[1] !== l ? (u = l != null && o("ReactDOM").createPortal(s.jsx(r("WAWebBizAiSmartComposerModePill.react"), { chatId: a }), l), t[0] = a, t[1] = l, t[2] = u) : u = t[2];
		var c;
		t[3] !== n || t[4] !== a || t[5] !== i ? (c = n != null && o("ReactDOM").createPortal(s.jsx(r("WAWebBizAiSmartComposerDraftCard.react"), {
			chatId: a,
			onInsert: i
		}), n), t[3] = n, t[4] = a, t[5] = i, t[6] = c) : c = t[6];
		var d;
		return t[7] !== u || t[8] !== c ? (d = s.jsxs(s.Fragment, { children: [u, c] }), t[7] = u, t[8] = c, t[9] = d) : d = t[9], d;
	}
	l.default = u;
}), 98);
