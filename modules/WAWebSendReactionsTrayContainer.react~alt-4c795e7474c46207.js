__d("WAWebSendReactionsTrayContainer.react", [
	"WAWebChatGetters",
	"WAWebDefaultReactions",
	"WAWebErrorBoundary.react",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebNewsletterExtendedGatingUtils",
	"WAWebReactionActionsWamEvent",
	"WAWebReactionUserJourneyLogger",
	"WAWebReactionsBEUtils",
	"WAWebSendReactionsTray.react",
	"WAWebSendReactionsTrayNewsletterContainer.react",
	"WAWebWamEnumReactionActionType",
	"WAWebWamMsgUtils",
	"react",
	"useVisibility",
	"useWAWebReactionTrayState"
], (function(t, n, r, o, a, i, l) {
	var e = ["userJourneyEntryPoint"], s, u = s || (s = o("react")), c = s.useEffect;
	function d(t) {
		var n = t.userJourneyEntryPoint, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = r("useVisibility")({ onVisible: function() {
			o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayOpen(o("WAWebFrontendMsgGetters").getChat(a.msg).id, a.msg, n);
		} }), l = i[0];
		return o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(a.msg)) ? o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled() ? u.jsx(o("WAWebSendReactionsTrayNewsletterContainer.react").SendReactionsTrayNewsletterContainer, babelHelpers.extends({ ref: l }, a)) : null : u.jsx(m, babelHelpers.extends({ ref: l }, a));
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.disableAutoFocus, n = e.isInlineMode, a = e.msg, i = e.onMouseEnter, l = e.onMouseLeave, s = e.onMouseOver, d = e.onShiftTabToMenu, m = e.onTabToMenu, p = e.ref, _ = e.rotateFocusArrowsRef, f = e.selectedCallback;
		c(function() {
			new (o("WAWebReactionActionsWamEvent")).ReactionActionsWamEvent({
				mediaType: o("WAWebWamMsgUtils").getWamMediaType(a),
				messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
				reactionAction: o("WAWebWamEnumReactionActionType").REACTION_ACTION_TYPE.OPEN_TRAY
			}).commit();
		}, [a]);
		var g = r("useWAWebReactionTrayState")(a.id.toString()), h = g.handleSelection, y = g.reactionOptions, C = g.selectedIndex, b = function(t) {
			var e = h(t);
			if (e === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
				f(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
				return;
			}
			f(t);
		}, v = y.length > o("WAWebDefaultReactions").DEFAULT_REACTIONS.length;
		return u.jsx("div", {
			ref: p,
			onMouseEnter: i,
			onMouseOver: s,
			onMouseLeave: l,
			children: u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "SendReactionsTrayContainer",
				children: u.jsx(o("WAWebSendReactionsTray.react").SendReactionsTray, {
					isInlineMode: n,
					selectedIndex: C,
					selectedCallback: b,
					reactions: y,
					showMoreOption: !v,
					isParentMsgSentByMe: o("WAWebMsgGetters").getIsSentByMe(a),
					disableAutoFocus: t,
					onShiftTabToMenu: d,
					onTabToMenu: m,
					rotateFocusArrowsRef: _
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.SendReactionsTrayContainer = d;
}), 98);
