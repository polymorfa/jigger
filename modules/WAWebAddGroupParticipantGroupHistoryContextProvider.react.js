__d("WAWebAddGroupParticipantGroupHistoryContextProvider.react", [
	"WAWebAddGroupParticipantGroupHistoryContext.react",
	"WAWebGroupHistoryPostJoinEligibility",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(22), n = e.chat, a = e.children, i = e.enterFlowTimestamp, l = e.messageCountPromise, u = m(null), c = u[0], d = u[1], p = m(!1), _ = p[0], f = p[1], g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = ["groupMetadata"], t[0] = g) : g = t[0];
		var h = o("useWAWebModelValues").useModelValues(n, g), y = h.groupMetadata, C;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (C = ["memberShareGroupHistoryMode", "participants"], t[1] = C) : C = t[1];
		var b = o("useWAWebModelValues").useOptionalModelValues(y, C), v;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (v = function(t) {
			d(t);
		}, t[2] = v) : v = t[2];
		var S = v, R;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (R = function(t) {
			f(t);
		}, t[3] = R) : R = t[3];
		var L = R, E;
		if (t[4] !== (b == null ? void 0 : b.participants)) {
			var k;
			E = b == null || (k = b.participants) == null ? void 0 : k.iAmAdmin(), t[4] = b == null ? void 0 : b.participants, t[5] = E;
		} else E = t[5];
		var I = E === !0, T;
		if (t[6] !== (b == null ? void 0 : b.participants)) {
			var D;
			T = b == null || (D = b.participants) == null ? void 0 : D.iAmSuperAdmin(), t[6] = b == null ? void 0 : b.participants, t[7] = T;
		} else T = t[7];
		var x = T === !0, $ = b == null ? void 0 : b.memberShareGroupHistoryMode, P;
		t[8] !== I || t[9] !== x || t[10] !== $ ? (P = o("WAWebGroupHistoryPostJoinEligibility").canCurrentUserShareHistory(I, x, $), t[8] = I, t[9] = x, t[10] = $, t[11] = P) : P = t[11];
		var N = P, M;
		t[12] !== N || t[13] !== n.id || t[14] !== i || t[15] !== l || t[16] !== c || t[17] !== _ ? (M = {
			enterFlowTimestamp: i,
			groupWid: n.id,
			messageCountPromise: l,
			selectedMessageCount: c,
			setSelectedMessageCount: S,
			shouldSendGroupHistory: _,
			setShouldSendGroupHistory: L,
			canShareGroupHistory: N
		}, t[12] = N, t[13] = n.id, t[14] = i, t[15] = l, t[16] = c, t[17] = _, t[18] = M) : M = t[18];
		var w = M, A;
		return t[19] !== a || t[20] !== w ? (A = s.jsx(r("WAWebAddGroupParticipantGroupHistoryContext.react"), {
			value: w,
			children: a
		}), t[19] = a, t[20] = w, t[21] = A) : A = t[21], A;
	}
	l.default = p;
}), 98);
