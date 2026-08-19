__d("WAWebSendReactionsTrayNewsletterContainer.react", [
	"WAWebDefaultReactions",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebNewsletterGatingUtils",
	"WAWebReactionsBEUtils",
	"WAWebReactionsUtils",
	"WAWebSendReactionsTray.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNewsletterReactions"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(50), n = e.disableAutoFocus, a = e.isInlineMode, i = e.msg, l = e.onMouseEnter, u = e.onMouseLeave, m = e.onMouseOver, p = e.onShiftTabToMenu, _ = e.onTabToMenu, f = e.ref, g = e.rotateFocusArrowsRef, h = e.selectedCallback, y = n === void 0 ? !1 : n, C;
		t[0] !== i.id ? (C = [i.id], t[0] = i.id, t[1] = C) : C = t[1];
		var b = r("useWAWebNewsletterReactions")(C), v = b[0], S = d(null), R = S[0], L = S[1], E;
		t[2] !== (v == null ? void 0 : v.myReaction) || t[3] !== h ? (E = function(t) {
			if (t === (v == null ? void 0 : v.myReaction)) return L(null), h(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
			L(o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, v == null ? void 0 : v.myReaction).indexOf(t)), h(t);
		}, t[2] = v == null ? void 0 : v.myReaction, t[3] = h, t[4] = E) : E = t[4];
		var k = E, I;
		t[5] !== (v == null ? void 0 : v.myReaction) ? (I = function() {
			var e = v == null ? void 0 : v.myReaction;
			L(e != null ? o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, e).indexOf(e) : null);
		}, t[5] = v == null ? void 0 : v.myReaction, t[6] = I) : I = t[6];
		var T = v == null ? void 0 : v.myReaction, D;
		t[7] !== T ? (D = [T], t[7] = T, t[8] = D) : D = t[8], c(I, D);
		var x = v == null ? void 0 : v.myReaction, $;
		t[9] !== x ? ($ = o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, x), t[9] = x, t[10] = $) : $ = t[10];
		var P = $, N, M, w, A, F, O, B, W, q, U;
		if (t[11] !== a || t[12] !== i || t[13] !== l || t[14] !== u || t[15] !== m || t[16] !== P || t[17] !== f || t[18] !== R || t[19] !== k) {
			var V = o("WAWebFrontendMsgGetters").getChat(i);
			O = f, B = l, W = m, q = u, N = o("WAWebSendReactionsTray.react").SendReactionsTray, U = a, M = R, w = k, A = P, F = o("WAWebNewsletterGatingUtils").shouldShowAllReactionsForNewsletter(V), t[11] = a, t[12] = i, t[13] = l, t[14] = u, t[15] = m, t[16] = P, t[17] = f, t[18] = R, t[19] = k, t[20] = N, t[21] = M, t[22] = w, t[23] = A, t[24] = F, t[25] = O, t[26] = B, t[27] = W, t[28] = q, t[29] = U;
		} else N = t[20], M = t[21], w = t[22], A = t[23], F = t[24], O = t[25], B = t[26], W = t[27], q = t[28], U = t[29];
		var H;
		t[30] !== i ? (H = o("WAWebMsgGetters").getIsSentByMe(i), t[30] = i, t[31] = H) : H = t[31];
		var G;
		t[32] !== N || t[33] !== y || t[34] !== p || t[35] !== _ || t[36] !== g || t[37] !== M || t[38] !== w || t[39] !== A || t[40] !== F || t[41] !== H || t[42] !== U ? (G = s.jsx(N, {
			isInlineMode: U,
			selectedIndex: M,
			selectedCallback: w,
			reactions: A,
			showMoreOption: F,
			disableAutoFocus: y,
			isParentMsgSentByMe: H,
			onShiftTabToMenu: p,
			onTabToMenu: _,
			rotateFocusArrowsRef: g
		}), t[32] = N, t[33] = y, t[34] = p, t[35] = _, t[36] = g, t[37] = M, t[38] = w, t[39] = A, t[40] = F, t[41] = H, t[42] = U, t[43] = G) : G = t[43];
		var z;
		return t[44] !== O || t[45] !== B || t[46] !== W || t[47] !== q || t[48] !== G ? (z = s.jsx("div", {
			ref: O,
			onMouseEnter: B,
			onMouseOver: W,
			onMouseLeave: q,
			children: G
		}), t[44] = O, t[45] = B, t[46] = W, t[47] = q, t[48] = G, t[49] = z) : z = t[49], z;
	}
	l.SendReactionsTrayNewsletterContainer = m;
}), 98);
