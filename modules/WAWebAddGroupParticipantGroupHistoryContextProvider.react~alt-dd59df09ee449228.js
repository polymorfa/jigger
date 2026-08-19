__d("WAWebAddGroupParticipantGroupHistoryContextProvider.react", [
	"WAWebAddGroupParticipantGroupHistoryContext.react",
	"WAWebGroupHistoryPostJoinEligibility",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState;
	function p(e) {
		var t, n, a = e.chat, i = e.children, l = e.enterFlowTimestamp, u = e.messageCountPromise, p = m(null), _ = p[0], f = p[1], g = m(!1), h = g[0], y = g[1], C = o("useWAWebModelValues").useModelValues(a, ["groupMetadata"]), b = C.groupMetadata, v = o("useWAWebModelValues").useOptionalModelValues(b, ["memberShareGroupHistoryMode", "participants"]), S = c(function(e) {
			f(e);
		}, [f]), R = c(function(e) {
			y(e);
		}, [y]), L = o("WAWebGroupHistoryPostJoinEligibility").canCurrentUserShareHistory((v == null || (t = v.participants) == null ? void 0 : t.iAmAdmin()) === !0, (v == null || (n = v.participants) == null ? void 0 : n.iAmSuperAdmin()) === !0, v == null ? void 0 : v.memberShareGroupHistoryMode), E = d(function() {
			return {
				enterFlowTimestamp: l,
				groupWid: a.id,
				messageCountPromise: u,
				selectedMessageCount: _,
				setSelectedMessageCount: S,
				shouldSendGroupHistory: h,
				setShouldSendGroupHistory: R,
				canShareGroupHistory: L
			};
		}, [
			a.id,
			l,
			u,
			_,
			S,
			h,
			R,
			L
		]);
		return s.jsx(r("WAWebAddGroupParticipantGroupHistoryContext.react"), {
			value: E,
			children: i
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
