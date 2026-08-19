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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(21), n = e.canReact, a = e.msg, i = n === void 0 ? !0 : n, l;
		t[0] !== i || t[1] !== e ? (l = babelHelpers.extends({}, e, { canReact: i }), t[0] = i, t[1] = e, t[2] = l) : l = t[2];
		var s = l, u;
		t[3] !== i || t[4] !== a ? (u = { onVisible: function() {
			i && o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayOpen(o("WAWebFrontendMsgGetters").getChat(a).id, a, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MESSAGE_REACTION_BUTTON);
		} }, t[3] = i, t[4] = a, t[5] = u) : u = t[5];
		var d = r("useVisibility")(u), _ = d[0], f;
		t[6] !== i || t[7] !== a ? (f = function() {
			i && new (o("WAWebReactionActionsWamEvent")).ReactionActionsWamEvent({
				mediaType: o("WAWebWamMsgUtils").getWamMediaType(a),
				messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
				reactionAction: o("WAWebWamEnumReactionActionType").REACTION_ACTION_TYPE.OPEN_TRAY
			}).commit();
		}, t[6] = i, t[7] = a, t[8] = f) : f = t[8];
		var g;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (g = { immediate: !0 }, t[9] = g) : g = t[9], o("useWAWebTimeout").useTimeout(f, 500, g);
		var h;
		t[10] !== a ? (h = o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(a)), t[10] = a, t[11] = h) : h = t[11];
		var y = h, C = a.id.fromMe ? null : a.senderObj, b;
		t[12] !== C ? (b = C != null ? o("WAWebFrontendContactGetters").getDisplayName(C) : null, t[12] = C, t[13] = b) : b = t[13];
		var v = b, S;
		t[14] !== y || t[15] !== v || t[16] !== s ? (S = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebMessageHoverBarContainer",
			children: y ? c.jsx(p, babelHelpers.extends({}, s, { messageSenderDisplayName: v })) : c.jsx(m, babelHelpers.extends({}, s, { messageSenderDisplayName: v }))
		}), t[14] = y, t[15] = v, t[16] = s, t[17] = S) : S = t[17];
		var R;
		return t[18] !== S || t[19] !== _ ? (R = c.jsx("div", {
			ref: _,
			children: S
		}), t[18] = S, t[19] = _, t[20] = R) : R = t[20], R;
	}
	function m(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, u, d, m, p;
		n[0] !== t ? (a = t.canReact, i = t.msg, l = t.onEdit, s = t.onMoreOptions, u = t.onOpenEmojiPicker, d = t.onReaction, m = t.onReply, p = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = u, n[6] = d, n[7] = m, n[8] = p) : (a = n[1], i = n[2], l = n[3], s = n[4], u = n[5], d = n[6], m = n[7], p = n[8]);
		var _;
		n[9] !== i.id ? (_ = i.id.toString(), n[9] = i.id, n[10] = _) : _ = n[10];
		var f = r("useWAWebReactionTrayState")(_), g = f.handleSelection, h = f.reactionOptions, y = f.selectedIndex, C;
		n[11] !== g || n[12] !== d ? (C = function(t) {
			var e = g(t);
			if (e === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
				d == null || d(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
				return;
			}
			d == null || d(t);
		}, n[11] = g, n[12] = d, n[13] = C) : C = n[13];
		var b = C, v = y != null ? h[y] : null, S;
		n[14] !== v ? (S = o("WAWebReactionsUtils").getHoverBarSelectedIndex(o("WAWebDefaultReactions").HOVER_BAR_REACTIONS, v), n[14] = v, n[15] = S) : S = n[15];
		var R = S, L = a ? b : null, E = a ? u : null, k = l != null ? null : m, I;
		return n[16] !== a || n[17] !== R || n[18] !== l || n[19] !== s || n[20] !== p || n[21] !== L || n[22] !== E || n[23] !== k ? (I = c.jsx(r("WAWebMessageHoverBar.react"), babelHelpers.extends({
			allowTabEscape: !0,
			canReact: a,
			reactions: o("WAWebDefaultReactions").HOVER_BAR_REACTIONS,
			selectedIndex: R,
			onReaction: L,
			onOpenEmojiPicker: E,
			onEdit: l,
			onMoreOptions: s,
			onReply: k
		}, p)), n[16] = a, n[17] = R, n[18] = l, n[19] = s, n[20] = p, n[21] = L, n[22] = E, n[23] = k, n[24] = I) : I = n[24], I;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(21), n, a, i, l, u, d, m, p;
		t[0] !== e ? (n = e.canReact, a = e.msg, i = e.onEdit, l = e.onMoreOptions, u = e.onOpenEmojiPicker, d = e.onReaction, m = e.onReply, p = babelHelpers.objectWithoutPropertiesLoose(e, s), t[0] = e, t[1] = n, t[2] = a, t[3] = i, t[4] = l, t[5] = u, t[6] = d, t[7] = m, t[8] = p) : (n = t[1], a = t[2], i = t[3], l = t[4], u = t[5], d = t[6], m = t[7], p = t[8]);
		var _ = r("useWAWebNewsletterReactionTrayState")(a, d), f = _.handleReaction, g = _.reactionOptions, h = _.selectedIndex, y = _.showFullDefaultSet, C = h != null ? g[h] : null, b;
		t[9] !== C ? (b = o("WAWebReactionsUtils").getHoverBarSelectedIndex(o("WAWebDefaultReactions").HOVER_BAR_REACTIONS, C), t[9] = C, t[10] = b) : b = t[10];
		var v = b, S = y ? g : o("WAWebDefaultReactions").HOVER_BAR_REACTIONS, R = y ? h : v, L = n ? f : null, E = n && !y ? u : null, k = i != null ? null : m, I;
		return t[11] !== n || t[12] !== S || t[13] !== R || t[14] !== i || t[15] !== l || t[16] !== p || t[17] !== L || t[18] !== E || t[19] !== k ? (I = c.jsx(r("WAWebMessageHoverBar.react"), babelHelpers.extends({
			allowTabEscape: !0,
			canReact: n,
			reactions: S,
			selectedIndex: R,
			onReaction: L,
			onOpenEmojiPicker: E,
			onEdit: i,
			onMoreOptions: l,
			onReply: k
		}, p)), t[11] = n, t[12] = S, t[13] = R, t[14] = i, t[15] = l, t[16] = p, t[17] = L, t[18] = E, t[19] = k, t[20] = I) : I = t[20], I;
	}
	l.default = d;
}), 98);
