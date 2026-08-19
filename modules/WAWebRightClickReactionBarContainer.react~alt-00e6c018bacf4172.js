__d("WAWebRightClickReactionBarContainer.react", [
	"WAWebChatGetters",
	"WAWebErrorBoundary.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebMessageHoverBar.react",
	"WAWebNoop",
	"WAWebNullFunc",
	"WAWebReactionActionsWamEvent",
	"WAWebReactionUserJourneyLogger",
	"WAWebReactionsBEUtils",
	"WAWebWamEnumReactionActionType",
	"WAWebWamMsgUtils",
	"react",
	"useMergeRefs",
	"useVisibility",
	"useWAWebNewsletterReactionTrayState",
	"useWAWebReactionTrayState"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useSyncExternalStore;
	function d(e) {
		return r("WAWebNoop");
	}
	function m(t) {
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), s = l.canAnimateExpand, m = l.canReact, f = m === void 0 ? !0 : m, g = l.disableAutoFocus, h = l.isExpanded, y = l.msg, C = l.onCollapseEmojiPicker, b = l.onMouseEnter, v = l.onMouseLeave, S = l.onOpenEmojiPicker, R = l.onReaction, L = l.onShiftTabToMenu, E = l.onTabToMenu, k = l.pickerAnimationStore, I = l.rotateFocusArrowsRef, T = l.userJourneyEntryPoint, D = c((n = k == null ? void 0 : k.subscribe) != null ? n : d, (a = k == null ? void 0 : k.getSnapshot) != null ? a : o("WAWebNullFunc").returnNull), x = D != null ? D.isExpanded : h, $ = D != null ? D.canAnimateExpand : s, P = r("useVisibility")({ onVisible: function() {
			f && (o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayOpen(o("WAWebFrontendMsgGetters").getChat(y).id, y, T), new (o("WAWebReactionActionsWamEvent")).ReactionActionsWamEvent({
				mediaType: o("WAWebWamMsgUtils").getWamMediaType(y),
				messageType: o("WAWebWamMsgUtils").getWamMessageType(y),
				reactionAction: o("WAWebWamEnumReactionActionType").REACTION_ACTION_TYPE.OPEN_TRAY
			}).commit());
		} }), N = P[0], M = r("useMergeRefs")(i, N), w = o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(y)), A = y.id.fromMe ? null : y.senderObj, F = A != null ? o("WAWebFrontendContactGetters").getDisplayName(A) : null;
		return u.jsx("div", {
			ref: M,
			children: u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "WAWebRightClickReactionBarContainer",
				children: w ? u.jsx(_, {
					canAnimateExpand: $,
					canReact: f,
					disableAutoFocus: g,
					isExpanded: x,
					messageSenderDisplayName: F,
					msg: y,
					onCollapseEmojiPicker: C,
					onMouseEnter: b,
					onMouseLeave: v,
					onOpenEmojiPicker: S,
					onReaction: R,
					onShiftTabToMenu: L,
					onTabToMenu: E,
					rotateFocusArrowsRef: I
				}) : u.jsx(p, {
					canAnimateExpand: $,
					canReact: f,
					disableAutoFocus: g,
					isExpanded: x,
					messageSenderDisplayName: F,
					msg: y,
					onCollapseEmojiPicker: C,
					onMouseEnter: b,
					onMouseLeave: v,
					onOpenEmojiPicker: S,
					onReaction: R,
					onShiftTabToMenu: L,
					onTabToMenu: E,
					rotateFocusArrowsRef: I
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.canAnimateExpand, n = t === void 0 ? !1 : t, a = e.canReact, i = a === void 0 ? !0 : a, l = e.disableAutoFocus, s = l === void 0 ? !0 : l, c = e.isExpanded, d = c === void 0 ? !1 : c, m = e.messageSenderDisplayName, p = e.msg, _ = e.onCollapseEmojiPicker, f = e.onMouseEnter, g = e.onMouseLeave, h = e.onOpenEmojiPicker, y = e.onReaction, C = e.onShiftTabToMenu, b = e.onTabToMenu, v = e.rotateFocusArrowsRef, S = r("useWAWebReactionTrayState")(p.id.toString()), R = S.handleSelection, L = S.reactionOptions, E = S.selectedIndex, k = function(t) {
			var e = R(t);
			if (e === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
				y == null || y(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
				return;
			}
			y == null || y(t);
		};
		return u.jsx(r("WAWebMessageHoverBar.react"), {
			canAnimateExpand: n,
			canReact: i,
			collapseLabel: "menu",
			disableAutoFocus: s,
			isExpanded: d,
			messageSenderDisplayName: m,
			reactions: L,
			reactionsChangeOnExpand: !1,
			selectedIndex: E,
			onReaction: i ? k : null,
			onOpenEmojiPicker: i ? h : null,
			onCollapseEmojiPicker: i ? _ : null,
			onMouseEnter: f,
			onMouseLeave: g,
			onShiftTabToMenu: C,
			onTabToMenu: b,
			rotateFocusArrowsRef: v
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.canAnimateExpand, n = t === void 0 ? !1 : t, o = e.canReact, a = o === void 0 ? !0 : o, i = e.disableAutoFocus, l = i === void 0 ? !0 : i, s = e.isExpanded, c = s === void 0 ? !1 : s, d = e.messageSenderDisplayName, m = e.msg, p = e.onCollapseEmojiPicker, _ = e.onMouseEnter, f = e.onMouseLeave, g = e.onOpenEmojiPicker, h = e.onReaction, y = e.onShiftTabToMenu, C = e.onTabToMenu, b = e.rotateFocusArrowsRef, v = r("useWAWebNewsletterReactionTrayState")(m, h), S = v.handleReaction, R = v.reactionOptions, L = v.selectedIndex, E = v.showFullDefaultSet, k = c && !E;
		return u.jsx(r("WAWebMessageHoverBar.react"), {
			canAnimateExpand: n,
			canReact: a,
			collapseLabel: "menu",
			disableAutoFocus: l,
			isExpanded: k,
			messageSenderDisplayName: d,
			reactions: R,
			reactionsChangeOnExpand: !1,
			selectedIndex: L,
			onReaction: a ? S : null,
			onOpenEmojiPicker: a && !E ? g : null,
			onCollapseEmojiPicker: a && !E ? p : null,
			onMouseEnter: _,
			onMouseLeave: f,
			onShiftTabToMenu: y,
			onTabToMenu: C,
			rotateFocusArrowsRef: b
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = m;
}), 98);
