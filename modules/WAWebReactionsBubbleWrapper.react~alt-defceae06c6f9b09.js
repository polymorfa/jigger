__d("WAWebReactionsBubbleWrapper.react", [
	"WAWebAddOnBubblesContainerConditions",
	"WAWebKeyboardHotKeys.react",
	"WAWebReactionsBubble.react",
	"WAWebReactionsUtils",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { reactionBubbleContainer: {
		height: "xo0jvv6",
		$$css: !0
	} };
	function c(e) {
		var t = e.closeDetailsPane, n = e.detailsPane, a = e.handlers, i = e.hasReaction, l = e.isFirstData, c = e.numberOfSenderReactions, m = e.openDetailsPane, p = e.reactionArrayEmojis, _ = e.reactionBubbleVisible, f = o("WAWebAddOnBubblesContainerConditions").hasHiddenSenderReactions(c, _), g = o("WAWebReactionsUtils").reactionBubbleAriaLabelString(c, p), h = n && s.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "DetailsPane",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: t,
			children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: n })
		}), y = null;
		return f ? i && (y = s.jsx("div", { className: "xo0jvv6" })) : y = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			"data-testid": "reaction-bubble",
			onClick: m,
			onDoubleClick: d,
			handlers: a,
			component: "button",
			"aria-haspopup": !0,
			tabIndex: 0,
			"aria-label": g,
			xstyle: u.reactionBubbleContainer,
			children: s.jsx(r("WAWebReactionsBubble.react"), {
				reactions: p,
				reactionsAggregateCount: c,
				isFirstData: l
			})
		}), s.jsxs(s.Fragment, { children: [y, h] });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		e.preventDefault(), e.stopPropagation();
	}
	l.default = c;
}), 98);
