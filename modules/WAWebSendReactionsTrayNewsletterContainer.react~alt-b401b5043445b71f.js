__d("WAWebSendReactionsTrayNewsletterContainer.react", [
	"WAWebDefaultReactions",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebNewsletterGatingUtils",
	"WAWebReactionsBEUtils",
	"WAWebReactionsUtils",
	"WAWebSendReactionsTray.react",
	"react",
	"useWAWebNewsletterReactions"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = e.disableAutoFocus, n = t === void 0 ? !1 : t, a = e.isInlineMode, i = e.msg, l = e.onMouseEnter, u = e.onMouseLeave, m = e.onMouseOver, p = e.onShiftTabToMenu, _ = e.onTabToMenu, f = e.ref, g = e.rotateFocusArrowsRef, h = e.selectedCallback, y = r("useWAWebNewsletterReactions")([i.id]), C = y[0], b = d(null), v = b[0], S = b[1], R = function(t) {
			if (t === (C == null ? void 0 : C.myReaction)) return S(null), h(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
			S(o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, C == null ? void 0 : C.myReaction).indexOf(t)), h(t);
		};
		c(function() {
			var e = C == null ? void 0 : C.myReaction;
			S(e != null ? o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, e).indexOf(e) : null);
		}, [C == null ? void 0 : C.myReaction]);
		var L = o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, C == null ? void 0 : C.myReaction), E = o("WAWebFrontendMsgGetters").getChat(i);
		return s.jsx("div", {
			ref: f,
			onMouseEnter: l,
			onMouseOver: m,
			onMouseLeave: u,
			children: s.jsx(o("WAWebSendReactionsTray.react").SendReactionsTray, {
				isInlineMode: a,
				selectedIndex: v,
				selectedCallback: R,
				reactions: L,
				showMoreOption: o("WAWebNewsletterGatingUtils").shouldShowAllReactionsForNewsletter(E),
				disableAutoFocus: n,
				isParentMsgSentByMe: o("WAWebMsgGetters").getIsSentByMe(i),
				onShiftTabToMenu: p,
				onTabToMenu: _,
				rotateFocusArrowsRef: g
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.SendReactionsTrayNewsletterContainer = m;
}), 98);
