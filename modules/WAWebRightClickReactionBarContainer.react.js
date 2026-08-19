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
	"react-compiler-runtime",
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
		var n, a, i = o("react-compiler-runtime").c(30), l, s;
		i[0] !== t ? (s = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), i[0] = t, i[1] = l, i[2] = s) : (l = i[1], s = i[2]);
		var m = l, f = m.canAnimateExpand, g = m.canReact, h = m.disableAutoFocus, y = m.isExpanded, C = m.msg, b = m.onCollapseEmojiPicker, v = m.onMouseEnter, S = m.onMouseLeave, R = m.onOpenEmojiPicker, L = m.onReaction, E = m.onShiftTabToMenu, k = m.onTabToMenu, I = m.pickerAnimationStore, T = m.rotateFocusArrowsRef, D = m.userJourneyEntryPoint, x = g === void 0 ? !0 : g, $ = c((n = I == null ? void 0 : I.subscribe) != null ? n : d, (a = I == null ? void 0 : I.getSnapshot) != null ? a : o("WAWebNullFunc").returnNull), P = $ != null ? $.isExpanded : y, N = $ != null ? $.canAnimateExpand : f, M;
		i[3] !== x || i[4] !== C || i[5] !== D ? (M = { onVisible: function() {
			x && (o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayOpen(o("WAWebFrontendMsgGetters").getChat(C).id, C, D), new (o("WAWebReactionActionsWamEvent")).ReactionActionsWamEvent({
				mediaType: o("WAWebWamMsgUtils").getWamMediaType(C),
				messageType: o("WAWebWamMsgUtils").getWamMessageType(C),
				reactionAction: o("WAWebWamEnumReactionActionType").REACTION_ACTION_TYPE.OPEN_TRAY
			}).commit());
		} }, i[3] = x, i[4] = C, i[5] = D, i[6] = M) : M = i[6];
		var w = r("useVisibility")(M), A = w[0], F = r("useMergeRefs")(s, A), O;
		i[7] !== C ? (O = o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(C)), i[7] = C, i[8] = O) : O = i[8];
		var B = O, W = C.id.fromMe ? null : C.senderObj, q;
		i[9] !== W ? (q = W != null ? o("WAWebFrontendContactGetters").getDisplayName(W) : null, i[9] = W, i[10] = q) : q = i[10];
		var U = q, V;
		i[11] !== N || i[12] !== x || i[13] !== h || i[14] !== P || i[15] !== B || i[16] !== U || i[17] !== C || i[18] !== b || i[19] !== v || i[20] !== S || i[21] !== R || i[22] !== L || i[23] !== E || i[24] !== k || i[25] !== T ? (V = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebRightClickReactionBarContainer",
			children: B ? u.jsx(_, {
				canAnimateExpand: N,
				canReact: x,
				disableAutoFocus: h,
				isExpanded: P,
				messageSenderDisplayName: U,
				msg: C,
				onCollapseEmojiPicker: b,
				onMouseEnter: v,
				onMouseLeave: S,
				onOpenEmojiPicker: R,
				onReaction: L,
				onShiftTabToMenu: E,
				onTabToMenu: k,
				rotateFocusArrowsRef: T
			}) : u.jsx(p, {
				canAnimateExpand: N,
				canReact: x,
				disableAutoFocus: h,
				isExpanded: P,
				messageSenderDisplayName: U,
				msg: C,
				onCollapseEmojiPicker: b,
				onMouseEnter: v,
				onMouseLeave: S,
				onOpenEmojiPicker: R,
				onReaction: L,
				onShiftTabToMenu: E,
				onTabToMenu: k,
				rotateFocusArrowsRef: T
			})
		}), i[11] = N, i[12] = x, i[13] = h, i[14] = P, i[15] = B, i[16] = U, i[17] = C, i[18] = b, i[19] = v, i[20] = S, i[21] = R, i[22] = L, i[23] = E, i[24] = k, i[25] = T, i[26] = V) : V = i[26];
		var H;
		return i[27] !== F || i[28] !== V ? (H = u.jsx("div", {
			ref: F,
			children: V
		}), i[27] = F, i[28] = V, i[29] = H) : H = i[29], H;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(21), n = e.canAnimateExpand, a = e.canReact, i = e.disableAutoFocus, l = e.isExpanded, s = e.messageSenderDisplayName, c = e.msg, d = e.onCollapseEmojiPicker, m = e.onMouseEnter, p = e.onMouseLeave, _ = e.onOpenEmojiPicker, f = e.onReaction, g = e.onShiftTabToMenu, h = e.onTabToMenu, y = e.rotateFocusArrowsRef, C = n === void 0 ? !1 : n, b = a === void 0 ? !0 : a, v = i === void 0 ? !0 : i, S = l === void 0 ? !1 : l, R;
		t[0] !== c.id ? (R = c.id.toString(), t[0] = c.id, t[1] = R) : R = t[1];
		var L = r("useWAWebReactionTrayState")(R), E = L.handleSelection, k = L.reactionOptions, I = L.selectedIndex, T;
		t[2] !== E || t[3] !== f ? (T = function(t) {
			var e = E(t);
			if (e === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
				f == null || f(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
				return;
			}
			f == null || f(t);
		}, t[2] = E, t[3] = f, t[4] = T) : T = t[4];
		var D = T, x = b ? D : null, $ = b ? _ : null, P = b ? d : null, N;
		return t[5] !== C || t[6] !== b || t[7] !== v || t[8] !== S || t[9] !== s || t[10] !== m || t[11] !== p || t[12] !== g || t[13] !== h || t[14] !== k || t[15] !== y || t[16] !== I || t[17] !== x || t[18] !== $ || t[19] !== P ? (N = u.jsx(r("WAWebMessageHoverBar.react"), {
			canAnimateExpand: C,
			canReact: b,
			collapseLabel: "menu",
			disableAutoFocus: v,
			isExpanded: S,
			messageSenderDisplayName: s,
			reactions: k,
			reactionsChangeOnExpand: !1,
			selectedIndex: I,
			onReaction: x,
			onOpenEmojiPicker: $,
			onCollapseEmojiPicker: P,
			onMouseEnter: m,
			onMouseLeave: p,
			onShiftTabToMenu: g,
			onTabToMenu: h,
			rotateFocusArrowsRef: y
		}), t[5] = C, t[6] = b, t[7] = v, t[8] = S, t[9] = s, t[10] = m, t[11] = p, t[12] = g, t[13] = h, t[14] = k, t[15] = y, t[16] = I, t[17] = x, t[18] = $, t[19] = P, t[20] = N) : N = t[20], N;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(16), n = e.canAnimateExpand, a = e.canReact, i = e.disableAutoFocus, l = e.isExpanded, s = e.messageSenderDisplayName, c = e.msg, d = e.onCollapseEmojiPicker, m = e.onMouseEnter, p = e.onMouseLeave, _ = e.onOpenEmojiPicker, f = e.onReaction, g = e.onShiftTabToMenu, h = e.onTabToMenu, y = e.rotateFocusArrowsRef, C = n === void 0 ? !1 : n, b = a === void 0 ? !0 : a, v = i === void 0 ? !0 : i, S = l === void 0 ? !1 : l, R = r("useWAWebNewsletterReactionTrayState")(c, f), L = R.handleReaction, E = R.reactionOptions, k = R.selectedIndex, I = R.showFullDefaultSet, T = S && !I, D = b ? L : null, x = b && !I ? _ : null, $ = b && !I ? d : null, P;
		return t[0] !== C || t[1] !== b || t[2] !== v || t[3] !== T || t[4] !== s || t[5] !== m || t[6] !== p || t[7] !== g || t[8] !== h || t[9] !== E || t[10] !== y || t[11] !== k || t[12] !== D || t[13] !== x || t[14] !== $ ? (P = u.jsx(r("WAWebMessageHoverBar.react"), {
			canAnimateExpand: C,
			canReact: b,
			collapseLabel: "menu",
			disableAutoFocus: v,
			isExpanded: T,
			messageSenderDisplayName: s,
			reactions: E,
			reactionsChangeOnExpand: !1,
			selectedIndex: k,
			onReaction: D,
			onOpenEmojiPicker: x,
			onCollapseEmojiPicker: $,
			onMouseEnter: m,
			onMouseLeave: p,
			onShiftTabToMenu: g,
			onTabToMenu: h,
			rotateFocusArrowsRef: y
		}), t[0] = C, t[1] = b, t[2] = v, t[3] = T, t[4] = s, t[5] = m, t[6] = p, t[7] = g, t[8] = h, t[9] = E, t[10] = y, t[11] = k, t[12] = D, t[13] = x, t[14] = $, t[15] = P) : P = t[15], P;
	}
	l.default = m;
}), 98);
