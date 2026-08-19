__d("useWAWebShouldShowMetaAiNullState", [
	"WAWebBotBaseGating",
	"WAWebBotFrontendUtils",
	"WAWebBotUtils",
	"WAWebThreadModelResolver",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useMemo, d = s.useState;
	function m(e, t) {
		var n = o("react-compiler-runtime").c(18), a;
		n[0] !== e || n[1] !== t ? (a = o("WAWebThreadModelResolver").resolveThreadOrChat(e, t), n[0] = e, n[1] = t, n[2] = a) : a = n[2];
		var i = a, l;
		n[3] !== e.id || n[4] !== t ? (l = t != null ? t.toString() : e.id.toString(), n[3] = e.id, n[4] = t, n[5] = l) : l = n[5];
		var s = l, u = d(!1), c = u[0], m = u[1], _ = d(s), f = _[0], g = _[1];
		f !== s && (g(s), m(!1));
		var h;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (h = function() {
			m(!0);
		}, n[6] = h) : h = n[6];
		var y = h, C;
		if (n[7] !== e || n[8] !== i) {
			var b = i === e ? [e.msgs] : [e.msgs, i.msgs];
			C = b.flatMap(p), n[7] = e, n[8] = i, n[9] = C;
		} else C = n[9];
		var v = C, S;
		n[10] !== e.id || n[11] !== i ? (S = function() {
			return o("WAWebBotUtils").isMetaAiBot(e.id) && o("WAWebBotFrontendUtils").isMetaAiChatEmpty(i) && i.msgs.msgLoadState.noEarlierMsgs && o("WAWebBotBaseGating").isMetaAiNullStateEnabled();
		}, n[10] = e.id, n[11] = i, n[12] = S) : S = n[12];
		var R;
		n[13] !== e || n[14] !== i ? (R = [i, e], n[13] = e, n[14] = i, n[15] = R) : R = n[15];
		var L = r("useWAWebEventTargetValue")(v, "add remove change:noEarlierMsgs", S, R), E = L && !c, k;
		return n[16] !== E ? (k = [E, y], n[16] = E, n[17] = k) : k = n[17], k;
	}
	function p(e) {
		return [e, e.msgLoadState];
	}
	l.default = m;
}), 98);
