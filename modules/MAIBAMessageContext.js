__d("MAIBAMessageContext", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useContext, m = u.useMemo, p = function() {}, _ = Object.freeze([]), f = {
		hasUserSkippedPlan: !1,
		isMultiCampaignPlan: !1,
		isSkipFullAnalysisButtonVisible: !1,
		lastShownProgressUpdate: null,
		onUserSkipPlanMode: p,
		progressUpdates: _,
		setLastShownProgressUpdate: p
	}, g = {
		botResponseId: null,
		externalConversationId: null,
		isFromHistory: !1,
		isStreaming: !1,
		messageIndex: null,
		offlineThreadingId: null,
		plannerContext: f,
		rowIndexFromBottom: null,
		streamingState: null
	}, h = c(g);
	function y(e) {
		var t = o("react-compiler-runtime").c(13), n = e.botResponseId, r = e.children, a = e.externalConversationId, i = e.isFromHistory, l = e.isStreaming, u = e.messageIndex, c = e.offlineThreadingId, d = e.plannerContext, m = e.rowIndexFromBottom, p = e.streamingState, _ = i === void 0 ? !1 : i, g = l === void 0 ? !1 : l, y = d === void 0 ? f : d, C = p === void 0 ? null : p, b;
		t[0] !== n || t[1] !== a || t[2] !== _ || t[3] !== g || t[4] !== u || t[5] !== c || t[6] !== y || t[7] !== m || t[8] !== C ? (b = {
			botResponseId: n,
			externalConversationId: a,
			isFromHistory: _,
			isStreaming: g,
			messageIndex: u,
			offlineThreadingId: c,
			plannerContext: y,
			rowIndexFromBottom: m,
			streamingState: C
		}, t[0] = n, t[1] = a, t[2] = _, t[3] = g, t[4] = u, t[5] = c, t[6] = y, t[7] = m, t[8] = C, t[9] = b) : b = t[9];
		var v = b, S;
		return t[10] !== r || t[11] !== v ? (S = s.jsx(h.Provider, {
			value: v,
			children: r
		}), t[10] = r, t[11] = v, t[12] = S) : S = t[12], S;
	}
	function C() {
		return d(h);
	}
	function b() {
		return d(h).isFromHistory;
	}
	l.MAIBAMessageContextProvider = y, l.useMAIBAMessageContext = C, l.useIsFromHistory = b;
}), 98);
