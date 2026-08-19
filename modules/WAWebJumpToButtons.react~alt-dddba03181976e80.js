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
		var n, a, i = t.chat, l = t.handleJumpBackToContext, u = t.handleJumpToBottom, d = t.handleJumpToMention, _ = t.isMostRecentAndNotLoading, g = t.isNearBottom, h = t.newUnread, y = t.unreadMentionCount, C = !g || _ || l != null, b = o("WAWebChatGetters").getIsGroup(i) && y > 0, v = l != null ? l : u, S = null;
		if (b) {
			var R = [o("WAWebJumpToButtons.stylex").styles.boxShadow];
			C ? R.push(p.buttonGap, o("WDSMargins.stylex").wdsMargins.marginBottom16) : R.push(p.borderRadius), S = c.jsx(r("WAWebGroupCatchUpButton.react"), {
				handleJumpToMention: d,
				unreadMentionCount: y,
				xstyle: R
			});
		}
		var L = null;
		if (C) {
			var E = null;
			h && i.unreadCount && (E = c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
				count: h,
				theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.ChatThread
			}, "icon-unread")), L = c.jsxs(r("WAWebUnstyledButton.react"), {
				xstyle: [
					o("WAWebJumpToButtons.stylex").styles.boxShadow,
					o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
					m.padding10
				],
				dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
				onClick: v,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: [c.jsx(o("WAWebIcChevronDownWideIcon.react").IcChevronDownWideIcon, { xstyle: p.chevronRefreshed }), E && c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebJumpToButtons.stylex").styles.unreadRefreshed), { children: E }))]
			});
		}
		var k = ((n = i.contact) == null ? void 0 : n.isBusiness) === !0 && ((a = i.contact) == null || (a = a.id) == null ? void 0 : a.isRegularUser()) === !0 && c.jsx(f, {
			chat: i,
			showGroupMention: b,
			showIncomingMsgs: C
		});
		return C && b ? c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.incomingContainerRefreshed, p.borderRadius, o("WDSMargins.stylex").wdsMargins.marginEnd4), { children: [
			k,
			S,
			L
		] })) : c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.incomingContainer, o("WDSMargins.stylex").wdsMargins.marginEnd4), { children: [
			k,
			S,
			c.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "pop",
				children: L
			})
		] }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n, a = t.chat, i = t.showGroupMention, l = t.showIncomingMsgs, u = o("WAWebChatGetters").getIsGroup(a), _ = d(function() {
			return u ? null : o("WAWebCartCollection").CartCollection.findCart(a.id.toString()).id;
		}, [a.id, u]), f = o("useWAWebCartValues").useOptionalCartValues(_, [o("WAWebCartGetters").getCartItemCount]), g = (n = f == null ? void 0 : f[0]) != null ? n : 0, h = null;
		if (g > 0 && o("WAWebABProps").getABPropConfigValue("wa_web_jump_to_cart")) {
			var y = function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebCartFlowLoadable").CartFlowLoadable, {
					sellerJid: a.id.toString(),
					chat: a
				}));
			};
			h = c.jsxs(r("WAWebUnstyledButton.react"), {
				xstyle: [
					o("WAWebJumpToButtons.stylex").styles.boxShadow,
					o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
					m.padding10,
					(i || l) && p.buttonGap,
					(i || l) && o("WDSMargins.stylex").wdsMargins.marginBottom16
				],
				dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
				onClick: y,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: [c.jsx(r("WDSIconIcShoppingCart.react"), { xstyle: p.chevronRefreshed }), c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebJumpToButtons.stylex").styles.unreadRefreshed), { children: c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
					count: g,
					theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.ChatThread
				}) }))]
			});
		}
		return h;
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 226);
