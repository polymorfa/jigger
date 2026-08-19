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
		var t = 12;
		return d.jsx(o("WAWebPaymentSendIcon.react").PaymentSendIcon, babelHelpers.extends({}, e, {
			height: t,
			width: t
		}));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.ref, a = t.currentFilter, i = t.filters, l = t.filterSession, u = t.onDropdownOpen, c = t.onSelect, m = babelHelpers.objectWithoutPropertiesLoose(t, e), y = a == null ? void 0 : a.kind, b = a == null ? void 0 : a.label, v = o("WAWebListsGatingUtils").isListsEnabled(), S = o("WAWebMobilePlatforms").isSMB(), R = f(v ? o("WAWebListUtils").getListsUnreadChatCountMap() : new Map()), L = R[0], E = R[1], k = S ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS, I = r("useWAWebNux")(k), T = I[0], D = I[1], x = _(null), $ = r("useMergeRefs")(x, n), P = f(void 0), N = P[0], M = P[1], w = function() {
			return E(o("WAWebListUtils").getListsUnreadChatCountMap());
		};
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:showUnreadInTitle change:archive add remove reset change:unreadCount change:isFavorite", w), o("useWAWebListener").useListener(v ? o("WAWebLabelCollection").LabelCollection : null, "change:count", w);
		var A = p(function() {
			return Array.from(L.values()).some(function(e) {
				return e > 0;
			});
		}, [L]), F = i.map(function(e, t) {
			var n = o("WAWebListUtils").resolvePillLabel(e.getLabel), a = function() {
				c(e.filter, e.listId, e.listType, t);
			}, i = o("WAWebListUtils").getUnreadChatsCountForFilter(e, L), l = y === e.filter && (o("WAWebListUtils").isBuiltInList(e.listType) || e.listId == null || b === e.listId) || y == null && e.filter == null, s = o("WAWebCountRenderingUtils").renderCount(i, 100, "unread_message"), u = o("WAWebChatListAiStatusFilterPills").isAiStatusFilter(e.filter), m = o("WAWebListUtils").shouldShowListIcon(e.listType, e.color) || u && e.color != null, p = e.listType === o("WAWebSchemaLabel").ListType.FAVORITES, _ = e.listType === o("WAWebSchemaLabel").ListType.GROUPS, f = e.listType === o("WAWebSchemaLabel").ListType.UNREAD, C = e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU, v = function() {
				if (S) {
					if (p) return r("WDSIconIcFavorite.react");
					if (_) return r("WDSIconIcGroup.react");
					if (f) return r("WDSIconIcUnread.react");
					if (C) return r("WDSIconIcAlternateEmail.react");
					if (m) return h;
				}
			}, R = d.jsx(r("WDSMenuItem.react"), {
				Icon: v(),
				iconXstyle: m ? g.iconColor : void 0,
				title: n,
				onPress: a,
				hasNumber: A,
				number: s != null ? s : void 0,
				isToggleable: !0,
				toggled: l,
				testid: e.testid,
				truncateText: !0
			}, e.id);
			return m ? d.jsx("span", {
				className: "xjp7ctv",
				style: { "--list-icon-color": e.color },
				children: R
			}, e.id) : R;
		});
		i.length > 0 && F.push(d.jsx(r("WDSMenuItem.react"), { type: "separator" }, "separator"));
		var O = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(d.jsx(r("WAWebCreateOrEditListDrawer.react"), {
				onBack: o("WAWebDrawerManager").closeDrawerLeft,
				onClose: o("WAWebDrawerManager").closeDrawerLeft,
				entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.ADD_LIST_FILTER
			}));
		}, B = function() {
			if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
				o("WAWebListsUtil").showMaxListsModal(v);
				return;
			}
			if (T) {
				var e = S ? o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
				o("WAWebModalManager").ModalManager.open(d.jsx(e, { onContinue: function() {
					D(), O();
				} }));
			} else O();
		};
		if (F.push(d.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcAdd.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: B,
			testid: "create-new-list-item",
			truncateText: !0
		}, "create-new-list-item")), o("WAWebListsGatingUtils").isListsM2Enabled()) {
			var W = function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerLeft(d.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
					isInitialStep: !0,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LIST_FILTER_MANAGE
				}));
			};
			F.push(d.jsx(r("WDSMenuItem.react"), {
				Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
				title: s._(
					/*BTDS*/
					""
				),
				onPress: W,
				testid: "manage-lists-item",
				truncateText: !0
			}, "manage-lists-item"));
		}
		var q = r("useWDSMenu")({
			targetRef: x,
			menu: d.jsx(r("WDSMenu.react"), {
				maxHeight: N,
				children: F
			})
		}), U = q.closeMenu, V = q.isMenuOpen, H = q.menuPortal, G = q.openMenu, z = function() {
			if (V) U();
			else {
				if (u == null || u(), x.current != null) {
					var e = x.current.getBoundingClientRect(), t = window.innerHeight - e.bottom - 16;
					M(Math.max(100, t));
				}
				G(), l != null && o("WAWebFilterLogging").logLabelDropdownShownEvent(l.newSessionId());
			}
		};
		return d.jsxs(d.Fragment, { children: [d.jsx(C, {
			ref: $,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
			opened: V,
			onClick: z,
			id: m.id,
			role: m.role,
			"aria-selected": m["aria-selected"],
			"aria-controls": m["aria-controls"],
			tabIndex: m.tabIndex,
			onFocus: m.onFocus
		}, "filters-dropdown"), H] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t, n = e.ref, o = e.onClick, a = e.opened, i = e.tabOrder, l = babelHelpers.objectWithoutPropertiesLoose(e, u), c = s._(
			/*BTDS*/
			""
		);
		return d.jsx("div", {
			tabIndex: l.tabIndex,
			"data-tab": i,
			children: d.jsx(r("WDSChip.react"), {
				ref: n,
				id: l.id,
				label: c,
				onPress: function(t) {
					o == null || o(t);
				},
				onFocus: (t = l.onFocus) != null ? t : void 0,
				role: l.role,
				"aria-pressed": a,
				"aria-selected": l["aria-selected"],
				"aria-controls": l["aria-controls"],
				Icon: r("WDSIconIcArrowDropDown.react"),
				iconOnly: !0,
				testid: "chat_list_more_lists_pill"
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);
