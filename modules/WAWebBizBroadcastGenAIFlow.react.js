__d("WAWebBizBroadcastGenAIFlow.react", [
	"WAWebBizBroadcastGenAICreateModal.react",
	"WAWebBizBroadcastGenAIGating",
	"WAWebBizBroadcastGenAISuggestionsModal.react",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.broadcastJids, a = e.draftMessage, i = e.onAuthFailure, l = e.onClose, u = e.onUseMessage, c = o("WAWebBizBroadcastGenAIGating").countWords(a) < o("WAWebBizBroadcastGenAIGating").getGenAIComposerMinWords(), m;
		t[0] !== a || t[1] !== c ? (m = c ? {
			draftMessage: a,
			type: "create"
		} : {
			draftMessage: a,
			type: "suggestions"
		}, t[0] = a, t[1] = c, t[2] = m) : m = t[2];
		var f = d(m), g = f[0], h = f[1], y;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (y = function(t) {
			h({
				draftMessage: t,
				type: "suggestions"
			});
		}, t[3] = y) : y = t[3];
		var C = y, b;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (b = function() {
			h(p);
		}, t[4] = b) : b = t[4];
		var v = b, S;
		return t[5] !== n || t[6] !== c || t[7] !== i || t[8] !== l || t[9] !== u || t[10] !== g.draftMessage || t[11] !== g.type ? (S = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: s.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: _.root,
				children: g.type === "create" ? s.jsx(r("WAWebBizBroadcastGenAICreateModal.react"), {
					draftMessage: g.draftMessage,
					onClose: l,
					onSubmit: C
				}) : s.jsx(r("WAWebBizBroadcastGenAISuggestionsModal.react"), {
					broadcastJids: n,
					draftMessage: g.draftMessage,
					onAuthFailure: i,
					onBack: c ? v : null,
					onClose: l,
					onUseMessage: u
				})
			})
		}), t[5] = n, t[6] = c, t[7] = i, t[8] = l, t[9] = u, t[10] = g.draftMessage, t[11] = g.type, t[12] = S) : S = t[12], S;
	}
	function p(e) {
		return {
			draftMessage: e.draftMessage,
			type: "create"
		};
	}
	var _ = { root: {
		boxSizing: "x9f619",
		height: "x1d9x2de",
		width: "xr6pica",
		$$css: !0
	} };
	l.default = m;
}), 98);
