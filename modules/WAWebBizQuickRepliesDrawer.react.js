__d("WAWebBizQuickRepliesDrawer.react", [
	"fbt",
	"WAWebBizQuickRepliesModal.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmptyState.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlatList.react",
	"WAWebFlatListController",
	"WAWebModalManager",
	"WAWebPlusIcon.react",
	"WAWebQuickRepliesDrawerItem.react",
	"WAWebQuickReplyCollection",
	"WAWebQuickReplyEnum",
	"WAWebQuickReplyGetters",
	"WAWebQuickReplyLogging",
	"WAWebTabOrder",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useState;
	function _(t) {
		var n = o("react-compiler-runtime").c(25), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.isInitialStep, d = l.onBack, m = u === void 0 ? !1 : u, _ = g, h = p(_), y = h[0], b = h[1], v;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			b(_());
		}, n[3] = v) : v = n[3], o("useWAWebListener").useListener(o("WAWebQuickReplyCollection").QuickReplyCollection, "add change remove", v);
		var S;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), n[4] = S) : S = n[4];
		var R = S, L;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (L = new (r("WAWebFlatListController"))(), n[5] = L) : L = n[5];
		var E = L, k;
		n[6] !== y ? (k = y.length > 0 ? c.jsx(o("WAWebFlatList.react").FlatList, {
			data: y,
			direction: "vertical",
			flatListController: E,
			renderItem: C
		}) : c.jsx(o("WAWebEmptyState.react").NoQuickReplies, {}), n[6] = y, n[7] = k) : k = n[7];
		var I = k, T = f, D;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(r("WDSMenuBarItem.react"), {
			testid: "menu-bar-add-quick-reply",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			icon: o("WAWebPlusIcon.react").PlusIcon,
			onClick: T,
			title: s._(
				/*BTDS*/
				""
			)
		}, "menu-bar-add-quick-reply"), n[8] = D) : D = n[8];
		var x = D, $;
		n[9] !== m || n[10] !== d ? ($ = {}, m ? $.onCancel = d : $.onBack = d, n[9] = m, n[10] = d, n[11] = $) : $ = n[11];
		var P;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (P = { surface: "smb-quick-reply-list" }, n[12] = P) : P = n[12];
		var N;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (N = [x], n[13] = N) : N = n[13];
		var M;
		n[14] !== $ ? (M = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({ title: R }, $, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0,
			menu: N
		})), n[14] = $, n[15] = M) : M = n[15];
		var w;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (w = [E], n[16] = w) : w = n[16];
		var A;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "xx42vgk x13fuv20 x178xt8z x1h678fw xv6tirj xdx6fka xvtqlqk" }, n[17] = A) : A = n[17];
		var F;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (F = c.jsx("div", babelHelpers.extends({}, A, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBizQuickRepliesFaqUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}) })), n[18] = F) : F = n[18];
		var O;
		n[19] !== I ? (O = c.jsx(r("WAWebDrawerBody.react"), {
			flatListControllers: w,
			children: c.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				children: [I, F]
			})
		}), n[19] = I, n[20] = O) : O = n[20];
		var B;
		return n[21] !== i || n[22] !== O || n[23] !== M ? (B = c.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			tsNavigationData: P,
			children: [M, O]
		}), n[21] = i, n[22] = O, n[23] = M, n[24] = B) : B = n[24], B;
	}
	function f() {
		o("WAWebQuickReplyLogging").logQuickReplyAddClickEvent(), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizQuickRepliesModal.react"), {
			quickReply: null,
			tsNavigationData: { surface: "smb-quick-reply-add" }
		}));
	}
	function g() {
		return o("WAWebQuickReplyCollection").QuickReplyCollection.filter(y).map(h);
	}
	function h(e) {
		return {
			itemKey: e.id,
			quickReply: e
		};
	}
	function y(e) {
		return o("WAWebQuickReplyGetters").getType(e) === o("WAWebQuickReplyEnum").QuickReplyTypes.TEXT;
	}
	function C(e) {
		return c.jsx(r("WAWebQuickRepliesDrawerItem.react"), { quickReply: e.quickReply });
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = _;
}), 226);
