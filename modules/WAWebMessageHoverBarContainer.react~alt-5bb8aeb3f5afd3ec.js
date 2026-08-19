__d("WAWebMessageHoverBarContainer.react", [
	"WAWebChatGetters",
	"WAWebDefaultReactions",
	"WAWebErrorBoundary.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebMessageHoverBar.react",
	"WAWebReactionActionsWamEvent",
	"WAWebReactionUserJourneyLogger",
	"WAWebReactionsBEUtils",
	"WAWebReactionsUtils",
	"WAWebWamEnumReactionActionType",
	"WAWebWamEnumReactionUserJourneyEntryPoint",
	"WAWebWamMsgUtils",
	"react",
	"useVisibility",
	"useWAWebNewsletterReactionTrayState",
	"useWAWebReactionTrayState",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"canReact",
		"msg",
		"onEdit",
		"onMoreOptions",
		"onOpenEmojiPicker",
		"onReaction",
		"onReply"
	], s = [
		"canReact",
		"msg",
		"onEdit",
		"onMoreOptions",
		"onOpenEmojiPicker",
		"onReaction",
		"onReply"
	], u, c = u || (u = o("react"));
	function d(e) {
		var t = e.canReact, n = t === void 0 ? !0 : t, a = e.msg, i = babelHelpers.extends({}, e, { canReact: n }), l = r("useVisibility")({ onVisible: function() {
			n && o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayOpen(o("WAWebFrontendMsgGetters").getChat(a).id, a, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MESSAGE_REACTION_BUTTON);
		} }), s = l[0];
		o("useWAWebTimeout").useTimeout(function() {
			n && new (o("WAWebReactionActionsWamEvent")).ReactionActionsWamEvent({
				mediaType: o("WAWebWamMsgUtils").getWamMediaType(a),
				messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
				reactionAction: o("WAWebWamEnumReactionActionType").REACTION_ACTION_TYPE.OPEN_TRAY
			}).commit();
		}, 500, { immediate: !0 });
		var u = o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(a)), d = a.id.fromMe ? null : a.senderObj, _ = d != null ? o("WAWebFrontendContactGetters").getDisplayName(d) : null;
		return c.jsx("div", {
			ref: s,
			children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "WAWebMessageHoverBarContainer",
				children: u ? c.jsx(p, babelHelpers.extends({}, i, { messageSenderDisplayName: _ })) : c.jsx(m, babelHelpers.extends({}, i, { messageSenderDisplayName: _ }))
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(t) {
		var n = t.canReact, a = t.msg, i = t.onEdit, l = t.onMoreOptions, s = t.onOpenEmojiPicker, u = t.onReaction, d = t.onReply, m = babelHelpers.objectWithoutPropertiesLoose(t, e), p = r("useWAWebReactionTrayState")(a.id.toString()), _ = p.handleSelection, f = p.reactionOptions, g = p.selectedIndex, h = function(t) {
			var e = _(t);
			if (e === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
				u == null || u(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
				return;
			}
			u == null || u(t);
		}, y = g != null ? f[g] : null, C = o("WAWebReactionsUtils").getHoverBarSelectedIndex(o("WAWebDefaultReactions").HOVER_BAR_REACTIONS, y);
		return c.jsx(r("WAWebMessageHoverBar.react"), babelHelpers.extends({
			allowTabEscape: !0,
			canReact: n,
			reactions: o("WAWebDefaultReactions").HOVER_BAR_REACTIONS,
			selectedIndex: C,
			onReaction: n ? h : null,
			onOpenEmojiPicker: n ? s : null,
			onEdit: i,
			onMoreOptions: l,
			onReply: i != null ? null : d
		}, m));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.canReact, n = e.msg, a = e.onEdit, i = e.onMoreOptions, l = e.onOpenEmojiPicker, u = e.onReaction, d = e.onReply, m = babelHelpers.objectWithoutPropertiesLoose(e, s), p = r("useWAWebNewsletterReactionTrayState")(n, u), _ = p.handleReaction, f = p.reactionOptions, g = p.selectedIndex, h = p.showFullDefaultSet, y = g != null ? f[g] : null, C = o("WAWebReactionsUtils").getHoverBarSelectedIndex(o("WAWebDefaultReactions").HOVER_BAR_REACTIONS, y), b = h ? f : o("WAWebDefaultReactions").HOVER_BAR_REACTIONS, v = h ? g : C;
		return c.jsx(r("WAWebMessageHoverBar.react"), babelHelpers.extends({
			allowTabEscape: !0,
			canReact: t,
			reactions: b,
			selectedIndex: v,
			onReaction: t ? _ : null,
			onOpenEmojiPicker: t && !h ? l : null,
			onEdit: a,
			onMoreOptions: i,
			onReply: a != null ? null : d
		}, m));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = d;
}), 98);
