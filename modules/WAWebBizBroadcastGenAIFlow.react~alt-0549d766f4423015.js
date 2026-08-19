__d("WAWebBizBroadcastGenAIFlow.react", [
	"WAWebBizBroadcastGenAICreateModal.react",
	"WAWebBizBroadcastGenAIGating",
	"WAWebBizBroadcastGenAISuggestionsModal.react",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState;
	function m(e) {
		var t = e.broadcastJids, n = e.draftMessage, a = e.onAuthFailure, i = e.onClose, l = e.onUseMessage, u = o("WAWebBizBroadcastGenAIGating").countWords(n) < o("WAWebBizBroadcastGenAIGating").getGenAIComposerMinWords(), m = d(u ? {
			draftMessage: n,
			type: "create"
		} : {
			draftMessage: n,
			type: "suggestions"
		}), _ = m[0], f = m[1], g = c(function(e) {
			f({
				draftMessage: e,
				type: "suggestions"
			});
		}, []), h = c(function() {
			f(function(e) {
				return {
					draftMessage: e.draftMessage,
					type: "create"
				};
			});
		}, []);
		return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: s.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: p.root,
				children: _.type === "create" ? s.jsx(r("WAWebBizBroadcastGenAICreateModal.react"), {
					draftMessage: _.draftMessage,
					onClose: i,
					onSubmit: g
				}) : s.jsx(r("WAWebBizBroadcastGenAISuggestionsModal.react"), {
					broadcastJids: t,
					draftMessage: _.draftMessage,
					onAuthFailure: a,
					onBack: u ? h : null,
					onClose: i,
					onUseMessage: l
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = { root: {
		boxSizing: "x9f619",
		height: "x1d9x2de",
		width: "xr6pica",
		$$css: !0
	} };
	l.default = m;
}), 98);
