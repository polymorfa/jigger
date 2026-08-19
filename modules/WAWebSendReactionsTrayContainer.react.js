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
	"react-compiler-runtime",
	"useVisibility",
	"useWAWebReactionTrayState"
], (function(t, n, r, o, a, i, l) {
	var e = ["userJourneyEntryPoint"], s, u = s || (s = o("react")), c = s.useEffect;
	function d(t) {
		var n = o("react-compiler-runtime").c(6), a = t.userJourneyEntryPoint, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = r("useVisibility")({ onVisible: function() {
			o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayOpen(o("WAWebFrontendMsgGetters").getChat(i.msg).id, i.msg, a);
		} }), s = l[0];
		if (o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(i.msg))) {
			var c;
			return n[0] !== i || n[1] !== s ? (c = o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled() ? u.jsx(o("WAWebSendReactionsTrayNewsletterContainer.react").SendReactionsTrayNewsletterContainer, babelHelpers.extends({ ref: s }, i)) : null, n[0] = i, n[1] = s, n[2] = c) : c = n[2], c;
		}
		var d;
		return n[3] !== i || n[4] !== s ? (d = u.jsx(m, babelHelpers.extends({ ref: s }, i)), n[3] = i, n[4] = s, n[5] = d) : d = n[5], d;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(27), n = e.disableAutoFocus, a = e.isInlineMode, i = e.msg, l = e.onMouseEnter, s = e.onMouseLeave, d = e.onMouseOver, m = e.onShiftTabToMenu, p = e.onTabToMenu, _ = e.ref, f = e.rotateFocusArrowsRef, g = e.selectedCallback, h, y;
		t[0] !== i ? (h = function() {
			new (o("WAWebReactionActionsWamEvent")).ReactionActionsWamEvent({
				mediaType: o("WAWebWamMsgUtils").getWamMediaType(i),
				messageType: o("WAWebWamMsgUtils").getWamMessageType(i),
				reactionAction: o("WAWebWamEnumReactionActionType").REACTION_ACTION_TYPE.OPEN_TRAY
			}).commit();
		}, y = [i], t[0] = i, t[1] = h, t[2] = y) : (h = t[1], y = t[2]), c(h, y);
		var C;
		t[3] !== i.id ? (C = i.id.toString(), t[3] = i.id, t[4] = C) : C = t[4];
		var b = r("useWAWebReactionTrayState")(C), v = b.handleSelection, S = b.reactionOptions, R = b.selectedIndex, L;
		t[5] !== v || t[6] !== g ? (L = function(t) {
			var e = v(t);
			if (e === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
				g(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
				return;
			}
			g(t);
		}, t[5] = v, t[6] = g, t[7] = L) : L = t[7];
		var E = L, k = S.length > o("WAWebDefaultReactions").DEFAULT_REACTIONS.length, I = !k, T;
		t[8] !== i ? (T = o("WAWebMsgGetters").getIsSentByMe(i), t[8] = i, t[9] = T) : T = t[9];
		var D;
		t[10] !== n || t[11] !== a || t[12] !== m || t[13] !== p || t[14] !== S || t[15] !== f || t[16] !== R || t[17] !== E || t[18] !== I || t[19] !== T ? (D = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "SendReactionsTrayContainer",
			children: u.jsx(o("WAWebSendReactionsTray.react").SendReactionsTray, {
				isInlineMode: a,
				selectedIndex: R,
				selectedCallback: E,
				reactions: S,
				showMoreOption: I,
				isParentMsgSentByMe: T,
				disableAutoFocus: n,
				onShiftTabToMenu: m,
				onTabToMenu: p,
				rotateFocusArrowsRef: f
			})
		}), t[10] = n, t[11] = a, t[12] = m, t[13] = p, t[14] = S, t[15] = f, t[16] = R, t[17] = E, t[18] = I, t[19] = T, t[20] = D) : D = t[20];
		var x;
		return t[21] !== l || t[22] !== s || t[23] !== d || t[24] !== _ || t[25] !== D ? (x = u.jsx("div", {
			ref: _,
			onMouseEnter: l,
			onMouseOver: d,
			onMouseLeave: s,
			children: D
		}), t[21] = l, t[22] = s, t[23] = d, t[24] = _, t[25] = D, t[26] = x) : x = t[26], x;
	}
	l.SendReactionsTrayContainer = d;
}), 98);
