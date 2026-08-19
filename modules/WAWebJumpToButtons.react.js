__d("WAWebJumpToButtons.react", [
	"fbt",
	"WAWebABProps",
	"WAWebCartCollection",
	"WAWebCartFlowLoadable",
	"WAWebCartGetters",
	"WAWebChatGetters",
	"WAWebChatUnreadCount.react",
	"WAWebDrawerManager",
	"WAWebGroupCatchUpButton.react",
	"WAWebIcChevronDownWideIcon.react",
	"WAWebJumpToButtons.stylex",
	"WAWebTabOrder",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WDSIconIcShoppingCart.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebCartValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useMemo, m = { padding10: {
		paddingTop: "x889kno",
		paddingInlineEnd: "x2vl965",
		paddingBottom: "x1a8lsjc",
		paddingInlineStart: "xe2zdcy",
		$$css: !0
	} }, p = {
		incomingContainer: {
			position: "x10l6tqk",
			insetInlineEnd: "x1mhpo7k",
			bottom: "x1qs2g4o",
			zIndex: "x12xzxwr",
			display: "x3nfvp2",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		buttonGap: {
			transition: "x6q2ic0",
			$$css: !0
		},
		chevronRefreshed: {
			color: "xhslqc4",
			$$css: !0
		},
		borderRadius: {
			borderStartStartRadius: "x17m9png",
			borderStartEndRadius: "x91sizk",
			borderEndEndRadius: "x1vva9xg",
			borderEndStartRadius: "x1jfkl46",
			$$css: !0
		},
		incomingContainerRefreshed: {
			position: "x10l6tqk",
			insetInlineEnd: "x1mhpo7k",
			bottom: "x1qs2g4o",
			zIndex: "x12xzxwr",
			display: "x3nfvp2",
			flexDirection: "xdt5ytf",
			$$css: !0
		}
	};
	function _(t) {
		var n = o("react-compiler-runtime").c(35), a = t.chat, i = t.handleJumpBackToContext, l = t.handleJumpToBottom, u = t.handleJumpToMention, d = t.isMostRecentAndNotLoading, _ = t.isNearBottom, g = t.newUnread, h = t.unreadMentionCount, y = !_ || d || i != null, C;
		n[0] !== a || n[1] !== h ? (C = o("WAWebChatGetters").getIsGroup(a) && h > 0, n[0] = a, n[1] = h, n[2] = C) : C = n[2];
		var b = C, v = i != null ? i : l, S = null;
		if (b) {
			var R;
			n[3] !== y ? (R = [o("WAWebJumpToButtons.stylex").styles.boxShadow], y ? R.push(p.buttonGap, o("WDSMargins.stylex").wdsMargins.marginBottom16) : R.push(p.borderRadius), n[3] = y, n[4] = R) : R = n[4];
			var L;
			n[5] !== R || n[6] !== u || n[7] !== h ? (L = c.jsx(r("WAWebGroupCatchUpButton.react"), {
				handleJumpToMention: u,
				unreadMentionCount: h,
				xstyle: R
			}), n[5] = R, n[6] = u, n[7] = h, n[8] = L) : L = n[8], S = L;
		}
		var E = null;
		if (y) {
			var k = null;
			if (g && a.unreadCount) {
				var I;
				n[9] !== g ? (I = c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
					count: g,
					theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.ChatThread
				}, "icon-unread"), n[9] = g, n[10] = I) : I = n[10], k = I;
			}
			var T;
			n[11] === Symbol.for("react.memo_cache_sentinel") ? (T = [
				o("WAWebJumpToButtons.stylex").styles.boxShadow,
				o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
				m.padding10
			], n[11] = T) : T = n[11];
			var D, x;
			n[12] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
				/*BTDS*/
				""
			), x = c.jsx(o("WAWebIcChevronDownWideIcon.react").IcChevronDownWideIcon, { xstyle: p.chevronRefreshed }), n[12] = D, n[13] = x) : (D = n[12], x = n[13]);
			var $;
			n[14] !== k ? ($ = k && c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebJumpToButtons.stylex").styles.unreadRefreshed), { children: k })), n[14] = k, n[15] = $) : $ = n[15];
			var P;
			n[16] !== v || n[17] !== $ ? (P = c.jsxs(r("WAWebUnstyledButton.react"), {
				xstyle: T,
				dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
				onClick: v,
				"aria-label": D,
				children: [x, $]
			}), n[16] = v, n[17] = $, n[18] = P) : P = n[18], E = P;
		}
		var N;
		if (n[19] !== a || n[20] !== b || n[21] !== y) {
			var M, w;
			N = ((M = a.contact) == null ? void 0 : M.isBusiness) === !0 && ((w = a.contact) == null || (w = w.id) == null ? void 0 : w.isRegularUser()) === !0 && c.jsx(f, {
				chat: a,
				showGroupMention: b,
				showIncomingMsgs: y
			}), n[19] = a, n[20] = b, n[21] = y, n[22] = N;
		} else N = n[22];
		var A = N;
		if (y && b) {
			var F;
			n[23] === Symbol.for("react.memo_cache_sentinel") ? (F = (e || (e = r("stylex"))).props(p.incomingContainerRefreshed, p.borderRadius, o("WDSMargins.stylex").wdsMargins.marginEnd4), n[23] = F) : F = n[23];
			var O;
			return n[24] !== S || n[25] !== E || n[26] !== A ? (O = c.jsxs("div", babelHelpers.extends({}, F, { children: [
				A,
				S,
				E
			] })), n[24] = S, n[25] = E, n[26] = A, n[27] = O) : O = n[27], O;
		}
		var B;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (B = (e || (e = r("stylex"))).props(p.incomingContainer, o("WDSMargins.stylex").wdsMargins.marginEnd4), n[28] = B) : B = n[28];
		var W;
		n[29] !== E ? (W = c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop",
			children: E
		}), n[29] = E, n[30] = W) : W = n[30];
		var q;
		return n[31] !== S || n[32] !== A || n[33] !== W ? (q = c.jsxs("div", babelHelpers.extends({}, B, { children: [
			A,
			S,
			W
		] })), n[31] = S, n[32] = A, n[33] = W, n[34] = q) : q = n[34], q;
	}
	function f(t) {
		var n, a = o("react-compiler-runtime").c(20), i = t.chat, l = t.showGroupMention, u = t.showIncomingMsgs, d;
		a[0] !== i ? (d = o("WAWebChatGetters").getIsGroup(i), a[0] = i, a[1] = d) : d = a[1];
		var _ = d, f;
		a[2] !== i.id || a[3] !== _ ? (f = _ ? null : o("WAWebCartCollection").CartCollection.findCart(i.id.toString()).id, a[2] = i.id, a[3] = _, a[4] = f) : f = a[4];
		var g = f, h;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (h = [o("WAWebCartGetters").getCartItemCount], a[5] = h) : h = a[5];
		var y = o("useWAWebCartValues").useOptionalCartValues(g, h), C = (n = y == null ? void 0 : y[0]) != null ? n : 0, b = null;
		if (C > 0 && o("WAWebABProps").getABPropConfigValue("wa_web_jump_to_cart")) {
			var v;
			a[6] !== i ? (v = function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebCartFlowLoadable").CartFlowLoadable, {
					sellerJid: i.id.toString(),
					chat: i
				}));
			}, a[6] = i, a[7] = v) : v = a[7];
			var S = v, R = (l || u) && p.buttonGap, L = (l || u) && o("WDSMargins.stylex").wdsMargins.marginBottom16, E;
			a[8] !== R || a[9] !== L ? (E = [
				o("WAWebJumpToButtons.stylex").styles.boxShadow,
				o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
				m.padding10,
				R,
				L
			], a[8] = R, a[9] = L, a[10] = E) : E = a[10];
			var k, I, T;
			a[11] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
				/*BTDS*/
				""
			), T = c.jsx(r("WDSIconIcShoppingCart.react"), { xstyle: p.chevronRefreshed }), k = (e || (e = r("stylex"))).props(o("WAWebJumpToButtons.stylex").styles.unreadRefreshed), a[11] = k, a[12] = I, a[13] = T) : (k = a[11], I = a[12], T = a[13]);
			var D;
			a[14] !== C ? (D = c.jsx("span", babelHelpers.extends({}, k, { children: c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
				count: C,
				theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.ChatThread
			}) })), a[14] = C, a[15] = D) : D = a[15];
			var x;
			a[16] !== S || a[17] !== D || a[18] !== E ? (x = c.jsxs(r("WAWebUnstyledButton.react"), {
				xstyle: E,
				dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
				onClick: S,
				"aria-label": I,
				children: [T, D]
			}), a[16] = S, a[17] = D, a[18] = E, a[19] = x) : x = a[19], b = x;
		}
		return b;
	}
	l.default = _;
}), 226);
