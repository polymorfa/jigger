__d("WAWebChatListFilterListsDropdown.react", [
	"fbt",
	"WAWebChatCollection",
	"WAWebChatListAiStatusFilterPills",
	"WAWebChatSearchFilters",
	"WAWebCountRenderingUtils",
	"WAWebCreateOrEditListDrawer.react",
	"WAWebDrawerManager",
	"WAWebFilterLogging",
	"WAWebLabelCollection",
	"WAWebLabelFlowLoadable",
	"WAWebListPeopleIcon.react",
	"WAWebListUtils",
	"WAWebListsGatingUtils",
	"WAWebListsIntroPopupLoadable",
	"WAWebListsUtil",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebPaymentSendIcon.react",
	"WAWebSMBListsIntroPopup.react",
	"WAWebSchemaLabel",
	"WAWebTabOrder",
	"WAWebWamEnumUpdateEntryPoint",
	"WDSChip.react",
	"WDSIconIcAdd.react",
	"WDSIconIcAlternateEmail.react",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcFavorite.react",
	"WDSIconIcGroup.react",
	"WDSIconIcUnread.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useMergeRefs",
	"useWAWebListener",
	"useWAWebNux",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e = [
		"ref",
		"currentFilter",
		"filters",
		"filterSession",
		"onDropdownOpen",
		"onSelect"
	], u = [
		"ref",
		"onClick",
		"opened",
		"tabOrder"
	], c, d = c || (c = o("react")), m = c, p = m.useMemo, _ = m.useRef, f = m.useState, g = { iconColor: {
		color: "x1tk34jx",
		$$css: !0
	} };
	function h(e) {
		var t = o("react-compiler-runtime").c(2), n;
		return t[0] !== e ? (n = d.jsx(o("WAWebPaymentSendIcon.react").PaymentSendIcon, babelHelpers.extends({}, e, {
			height: 12,
			width: 12
		})), t[0] = e, t[1] = n) : n = t[1], n;
	}
	function y(t) {
		var n, a, i = o("react-compiler-runtime").c(57), l, u, c, m, p, y, R;
		i[0] !== t ? (y = t.ref, l = t.currentFilter, c = t.filters, u = t.filterSession, m = t.onDropdownOpen, p = t.onSelect, R = babelHelpers.objectWithoutPropertiesLoose(t, e), i[0] = t, i[1] = l, i[2] = u, i[3] = c, i[4] = m, i[5] = p, i[6] = y, i[7] = R) : (l = i[1], u = i[2], c = i[3], m = i[4], p = i[5], y = i[6], R = i[7]);
		var L = (n = l) == null ? void 0 : n.kind, E = (a = l) == null ? void 0 : a.label, k;
		i[8] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebListsGatingUtils").isListsEnabled(), i[8] = k) : k = i[8];
		var I = k, T;
		i[9] === Symbol.for("react.memo_cache_sentinel") ? (T = o("WAWebMobilePlatforms").isSMB(), i[9] = T) : T = i[9];
		var D = T, x;
		i[10] === Symbol.for("react.memo_cache_sentinel") ? (x = I ? o("WAWebListUtils").getListsUnreadChatCountMap() : new Map(), i[10] = x) : x = i[10];
		var $ = f(x), P = $[0], N = $[1], M = D ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS, w = r("useWAWebNux")(M), A = w[0], F = w[1], O = _(null), B = r("useMergeRefs")(O, y), W = f(void 0), q = W[0], U = W[1], V;
		i[11] === Symbol.for("react.memo_cache_sentinel") ? (V = function() {
			return N(o("WAWebListUtils").getListsUnreadChatCountMap());
		}, i[11] = V) : V = i[11];
		var H = V;
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:showUnreadInTitle change:archive add remove reset change:unreadCount change:isFavorite", H), o("useWAWebListener").useListener(I ? o("WAWebLabelCollection").LabelCollection : null, "change:count", H);
		var G = Array.from(P.values()).some(v), z;
		if (i[12] !== G || i[13] !== c || i[14] !== p || i[15] !== L || i[16] !== E || i[17] !== A || i[18] !== P || i[19] !== F) {
			var j;
			if (i[21] !== G || i[22] !== p || i[23] !== L || i[24] !== E || i[25] !== P ? (j = function(t, n) {
				var e = o("WAWebListUtils").resolvePillLabel(t.getLabel), a = function() {
					p(t.filter, t.listId, t.listType, n);
				}, i = o("WAWebListUtils").getUnreadChatsCountForFilter(t, P), l = L === t.filter && (o("WAWebListUtils").isBuiltInList(t.listType) || t.listId == null || E === t.listId) || L == null && t.filter == null, s = o("WAWebCountRenderingUtils").renderCount(i, 100, "unread_message"), u = o("WAWebChatListAiStatusFilterPills").isAiStatusFilter(t.filter), c = o("WAWebListUtils").shouldShowListIcon(t.listType, t.color) || u && t.color != null, m = t.listType === o("WAWebSchemaLabel").ListType.FAVORITES, _ = t.listType === o("WAWebSchemaLabel").ListType.GROUPS, f = t.listType === o("WAWebSchemaLabel").ListType.UNREAD, y = t.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU, C = function() {
					if (D) {
						if (m) return r("WDSIconIcFavorite.react");
						if (_) return r("WDSIconIcGroup.react");
						if (f) return r("WDSIconIcUnread.react");
						if (y) return r("WDSIconIcAlternateEmail.react");
						if (c) return h;
					}
				}, b = d.jsx(r("WDSMenuItem.react"), {
					Icon: C(),
					iconXstyle: c ? g.iconColor : void 0,
					title: e,
					onPress: a,
					hasNumber: G,
					number: s != null ? s : void 0,
					isToggleable: !0,
					toggled: l,
					testid: t.testid,
					truncateText: !0
				}, t.id);
				return c ? d.jsx("span", {
					className: "xjp7ctv",
					style: { "--list-icon-color": t.color },
					children: b
				}, t.id) : b;
			}, i[21] = G, i[22] = p, i[23] = L, i[24] = E, i[25] = P, i[26] = j) : j = i[26], z = c.map(j), c.length > 0) {
				var K;
				i[27] === Symbol.for("react.memo_cache_sentinel") ? (K = d.jsx(r("WDSMenuItem.react"), { type: "separator" }, "separator"), i[27] = K) : K = i[27], z.push(K);
			}
			var Q = b, X;
			i[28] !== A || i[29] !== F ? (X = function() {
				if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
					o("WAWebListsUtil").showMaxListsModal(I);
					return;
				}
				if (A) {
					var e = D ? o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
					o("WAWebModalManager").ModalManager.open(d.jsx(e, { onContinue: function() {
						F(), Q();
					} }));
				} else Q();
			}, i[28] = A, i[29] = F, i[30] = X) : X = i[30];
			var Y = X, J;
			i[31] === Symbol.for("react.memo_cache_sentinel") ? (J = s._(
				/*BTDS*/
				""
			), i[31] = J) : J = i[31];
			var Z;
			if (i[32] !== Y ? (Z = d.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcAdd.react"),
				title: J,
				onPress: Y,
				testid: "create-new-list-item",
				truncateText: !0
			}, "create-new-list-item"), i[32] = Y, i[33] = Z) : Z = i[33], z.push(Z), o("WAWebListsGatingUtils").isListsM2Enabled()) {
				var ee = C, te;
				i[34] === Symbol.for("react.memo_cache_sentinel") ? (te = d.jsx(r("WDSMenuItem.react"), {
					Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
					title: s._(
						/*BTDS*/
						""
					),
					onPress: ee,
					testid: "manage-lists-item",
					truncateText: !0
				}, "manage-lists-item"), i[34] = te) : te = i[34], z.push(te);
			}
			i[12] = G, i[13] = c, i[14] = p, i[15] = L, i[16] = E, i[17] = A, i[18] = P, i[19] = F, i[20] = z;
		} else z = i[20];
		var ne;
		i[35] !== q || i[36] !== z ? (ne = {
			targetRef: O,
			menu: d.jsx(r("WDSMenu.react"), {
				maxHeight: q,
				children: z
			})
		}, i[35] = q, i[36] = z, i[37] = ne) : ne = i[37];
		var re = r("useWDSMenu")(ne), oe = re.closeMenu, ae = re.isMenuOpen, ie = re.menuPortal, le = re.openMenu, se;
		i[38] !== oe || i[39] !== u || i[40] !== ae || i[41] !== m || i[42] !== le ? (se = function() {
			if (ae) oe();
			else {
				if (m == null || m(), O.current != null) {
					var e = O.current.getBoundingClientRect(), t = window.innerHeight - e.bottom - 16;
					U(Math.max(100, t));
				}
				le(), u != null && o("WAWebFilterLogging").logLabelDropdownShownEvent(u.newSessionId());
			}
		}, i[38] = oe, i[39] = u, i[40] = ae, i[41] = m, i[42] = le, i[43] = se) : se = i[43];
		var ue = se, ce = R["aria-selected"], de = R["aria-controls"], me;
		i[44] !== ue || i[45] !== ae || i[46] !== B || i[47] !== R.id || i[48] !== R.onFocus || i[49] !== R.role || i[50] !== R.tabIndex || i[51] !== ce || i[52] !== de ? (me = d.jsx(S, {
			ref: B,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
			opened: ae,
			onClick: ue,
			id: R.id,
			role: R.role,
			"aria-selected": ce,
			"aria-controls": de,
			tabIndex: R.tabIndex,
			onFocus: R.onFocus
		}, "filters-dropdown"), i[44] = ue, i[45] = ae, i[46] = B, i[47] = R.id, i[48] = R.onFocus, i[49] = R.role, i[50] = R.tabIndex, i[51] = ce, i[52] = de, i[53] = me) : me = i[53];
		var pe;
		return i[54] !== ie || i[55] !== me ? (pe = d.jsxs(d.Fragment, { children: [me, ie] }), i[54] = ie, i[55] = me, i[56] = pe) : pe = i[56], pe;
	}
	function C() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(d.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
			isInitialStep: !0,
			entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LIST_FILTER_MANAGE
		}));
	}
	function b() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(d.jsx(r("WAWebCreateOrEditListDrawer.react"), {
			onBack: o("WAWebDrawerManager").closeDrawerLeft,
			onClose: o("WAWebDrawerManager").closeDrawerLeft,
			entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.ADD_LIST_FILTER
		}));
	}
	function v(e) {
		return e > 0;
	}
	function S(e) {
		var t, n = o("react-compiler-runtime").c(22), a, i, l, c, m;
		n[0] !== e ? (l = e.ref, a = e.onClick, i = e.opened, m = e.tabOrder, c = babelHelpers.objectWithoutPropertiesLoose(e, u), n[0] = e, n[1] = a, n[2] = i, n[3] = l, n[4] = c, n[5] = m) : (a = n[1], i = n[2], l = n[3], c = n[4], m = n[5]);
		var p;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), n[6] = p) : p = n[6];
		var _ = p, f;
		n[7] !== a ? (f = function(t) {
			a == null || a(t);
		}, n[7] = a, n[8] = f) : f = n[8];
		var g = (t = c.onFocus) != null ? t : void 0, h = c["aria-selected"], y = c["aria-controls"], C;
		n[9] !== i || n[10] !== l || n[11] !== c.id || n[12] !== c.role || n[13] !== f || n[14] !== g || n[15] !== h || n[16] !== y ? (C = d.jsx(r("WDSChip.react"), {
			ref: l,
			id: c.id,
			label: _,
			onPress: f,
			onFocus: g,
			role: c.role,
			"aria-pressed": i,
			"aria-selected": h,
			"aria-controls": y,
			Icon: r("WDSIconIcArrowDropDown.react"),
			iconOnly: !0,
			testid: "chat_list_more_lists_pill"
		}), n[9] = i, n[10] = l, n[11] = c.id, n[12] = c.role, n[13] = f, n[14] = g, n[15] = h, n[16] = y, n[17] = C) : C = n[17];
		var b;
		return n[18] !== c.tabIndex || n[19] !== C || n[20] !== m ? (b = d.jsx("div", {
			tabIndex: c.tabIndex,
			"data-tab": m,
			children: C
		}), n[18] = c.tabIndex, n[19] = C, n[20] = m, n[21] = b) : b = n[21], b;
	}
	l.default = y;
}), 226);
