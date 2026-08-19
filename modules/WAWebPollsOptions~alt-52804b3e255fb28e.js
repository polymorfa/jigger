__d("WAWebPollsOptions", [
	"JSResourceForInteraction",
	"WAWebFrontendMsgGetters",
	"WAWebPollCreationUtils",
	"WAWebPollsOptionRow",
	"compactMap",
	"react",
	"useWAWebPollAssociatedMessagesMap"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t, n, a = e.associatedMessages, i = e.checkedOptionLocalIds, l = e.correctOptionIndex, c = e.isPollEnded, d = e.isPollInvalid, m = e.msg, p = e.onDetailImageClick, _ = e.onOptionToggle, f = e.onPhotoThumbClick, g = e.options, h = e.readonly, y = e.selectableOptionsCount, C = e.trusted, b = e.view, v = u(function() {
			return Array.from(g.entries());
		}, [g]), S = u(function() {
			return Array.from(g.keys());
		}, [g]), R = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(S, a), L = u(function() {
			return a.length > 0 && a.length > R.size;
		}, [a.length, R.size]), E = u(function() {
			return r("compactMap")(a, function(e) {
				return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
			});
		}, [a]), k = o("WAWebFrontendMsgGetters").getChat(m.unsafe()), I = (t = (n = k.newsletterMetadata) == null ? void 0 : n.iAmAdminOrOwner()) != null ? t : !1, T = m.pollType === o("WAWebPollCreationUtils").PollType.QUIZ && !I && i.size === 0, D = m.pollType === o("WAWebPollCreationUtils").PollType.QUIZ ? r("JSResourceForInteraction")("WAWebConfettiAnimationData").__setRef("WAWebPollsOptions").load() : null;
		return s.jsx(s.Fragment, { children: v.map(function(e, t) {
			var n = e[0], o = e[1], a = i.has(n.localId), u = !d && !h && (a || y === 1 || i.size < y), g = l != null ? l === t : null;
			return s.jsx("div", { children: s.jsx(r("WAWebPollsOptionRow"), {
				albumMsgs: E,
				msg: m,
				associatedMsg: R.get(n),
				option: n,
				result: o,
				index: t,
				onOptionToggle: _,
				onDetailImageClick: p,
				checked: a,
				selectable: u,
				trusted: C,
				readonly: h,
				isPollEnded: c,
				onPhotoThumbClick: f,
				view: b,
				loadingPhotoThumb: L,
				hideResults: T,
				isCorrectOption: g,
				animationPromise: D,
				isAdminOrOwner: I
			}) }, t);
		}) });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
