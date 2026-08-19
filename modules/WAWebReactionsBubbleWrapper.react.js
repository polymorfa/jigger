__d("WAWebReactionsBubbleWrapper.react", [
	"WAWebAddOnBubblesContainerConditions",
	"WAWebKeyboardHotKeys.react",
	"WAWebReactionsBubble.react",
	"WAWebReactionsUtils",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { reactionBubbleContainer: {
		height: "xo0jvv6",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(19), n = e.closeDetailsPane, a = e.detailsPane, i = e.handlers, l = e.hasReaction, c = e.isFirstData, m = e.numberOfSenderReactions, p = e.openDetailsPane, _ = e.reactionArrayEmojis, f = e.reactionBubbleVisible, g = o("WAWebAddOnBubblesContainerConditions").hasHiddenSenderReactions(m, f), h;
		t[0] !== m || t[1] !== _ ? (h = o("WAWebReactionsUtils").reactionBubbleAriaLabelString(m, _), t[0] = m, t[1] = _, t[2] = h) : h = t[2];
		var y = h, C;
		t[3] !== n || t[4] !== a ? (C = a && s.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "DetailsPane",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: n,
			children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: a })
		}), t[3] = n, t[4] = a, t[5] = C) : C = t[5];
		var b = C, v = null;
		if (g) {
			if (l) {
				var L;
				t[15] === Symbol.for("react.memo_cache_sentinel") ? (L = s.jsx("div", { className: "xo0jvv6" }), t[15] = L) : L = t[15], v = L;
			}
		} else {
			var S;
			t[6] !== c || t[7] !== m || t[8] !== _ ? (S = s.jsx(r("WAWebReactionsBubble.react"), {
				reactions: _,
				reactionsAggregateCount: m,
				isFirstData: c
			}), t[6] = c, t[7] = m, t[8] = _, t[9] = S) : S = t[9];
			var R;
			t[10] !== i || t[11] !== p || t[12] !== y || t[13] !== S ? (R = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				"data-testid": "reaction-bubble",
				onClick: p,
				onDoubleClick: d,
				handlers: i,
				component: "button",
				"aria-haspopup": !0,
				tabIndex: 0,
				"aria-label": y,
				xstyle: u.reactionBubbleContainer,
				children: S
			}), t[10] = i, t[11] = p, t[12] = y, t[13] = S, t[14] = R) : R = t[14], v = R;
		}
		var E;
		return t[16] !== v || t[17] !== b ? (E = s.jsxs(s.Fragment, { children: [v, b] }), t[16] = v, t[17] = b, t[18] = E) : E = t[18], E;
	}
	function d(e) {
		e.preventDefault(), e.stopPropagation();
	}
	l.default = c;
}), 98);
