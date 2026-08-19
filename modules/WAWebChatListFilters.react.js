__d("WAWebChatListFilters.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebChatAssignmentUtils",
	"WAWebChatCollection",
	"WAWebChatListAiStatusFilterPills",
	"WAWebChatListFilterListsDropdown.react",
	"WAWebChatListFiltersDynamic.react",
	"WAWebChatListFiltersLabelsPill.react",
	"WAWebChatListFiltersNewListButton.react",
	"WAWebChatSearchFilters",
	"WAWebCmd",
	"WAWebFilterLogging",
	"WAWebInboxFiltersGatingUtils",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebL10NIsUsingSupportedBritishEnglishLocale",
	"WAWebLabelCollection",
	"WAWebListFilterButton.react",
	"WAWebListUtils",
	"WAWebListsGatingUtils",
	"WAWebMobilePlatforms",
	"WAWebSchemaLabel",
	"WAWebTabOrder",
	"isStringNullOrEmpty",
	"justknobx",
	"react",
	"react-compiler-runtime",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g, h = ["ref"], y = ["ref"], C, b = C || (C = o("react")), v = C, S = v.useImperativeHandle, R = v.useRef, L = {
		id: "all-filter",
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "all-filter"
	}, E = {
		id: "unread-filter",
		filter: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		listType: o("WAWebSchemaLabel").ListType.UNREAD,
		testid: "unread-filter",
		count: 0
	}, k = {
		id: "group-filter",
		filter: o("WAWebChatSearchFilters").SearchFilters.GROUP,
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		listType: o("WAWebSchemaLabel").ListType.GROUPS,
		testid: "group-filter",
		count: 0
	}, I = {
		id: "favorites-filter",
		filter: o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
		getLabel: function() {
			return o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		},
		listType: o("WAWebSchemaLabel").ListType.FAVORITES,
		testid: "favorites-filter",
		count: 0
	}, T = {
		id: "assigned-to-you-filter",
		filter: o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU,
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "assigned-to-you-filter"
	}, D = {
		id: "to-you-filter",
		filter: o("WAWebChatSearchFilters").SearchFilters.TO_YOU,
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "to-you-filter"
	}, x = function(t) {
		return t === o("WAWebSchemaLabel").ListType.UNREAD ? E.getLabel : t === o("WAWebSchemaLabel").ListType.GROUPS ? k.getLabel : t === o("WAWebSchemaLabel").ListType.FAVORITES ? I.getLabel : null;
	}, $ = function(t) {
		return t == null ? o("WAWebChatSearchFilters").SearchFilters.LABELS : t === o("WAWebSchemaLabel").ListType.NONE || t === o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED || t === o("WAWebSchemaLabel").ListType.DRAFTED || t === o("WAWebSchemaLabel").ListType.AI_HANDOFF || t === o("WAWebSchemaLabel").ListType.CHANNELS || t === o("WAWebSchemaLabel").ListType.AI_RESPONDING ? null : t === o("WAWebSchemaLabel").ListType.UNREAD ? o("WAWebChatSearchFilters").SearchFilters.UNREAD : t === o("WAWebSchemaLabel").ListType.GROUPS ? o("WAWebChatSearchFilters").SearchFilters.GROUP : t === o("WAWebSchemaLabel").ListType.FAVORITES ? o("WAWebChatSearchFilters").SearchFilters.FAVORITES : t === o("WAWebSchemaLabel").ListType.COMMUNITY ? o("WAWebChatSearchFilters").SearchFilters.COMMUNITY : t === o("WAWebSchemaLabel").ListType.PREDEFINED || t === o("WAWebSchemaLabel").ListType.CUSTOM || t === o("WAWebSchemaLabel").ListType.LEAD ? o("WAWebChatSearchFilters").SearchFilters.LABELS : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
	}, P = function(t) {
		return t.type === o("WAWebSchemaLabel").ListType.AI_HANDOFF ? "var(--WDS-secondary-negative)" : t.type === o("WAWebSchemaLabel").ListType.AI_RESPONDING ? "var(--WDS-secondary-positive)" : t.colorIndex != null ? o("WAWebListUtils").colorIndexToHex(t.colorIndex) : t.color;
	}, N = function(t) {
		var e = t.findIndex(function(e) {
			return e.listId != null && !o("WAWebListUtils").isBuiltInList(e.listType) && e.listType !== o("WAWebSchemaLabel").ListType.AI_HANDOFF && e.listType !== o("WAWebSchemaLabel").ListType.AI_RESPONDING;
		});
		e === -1 ? t.push(D) : t.splice(e, 0, D);
	}, M = function(t) {
		var e, n = t.assignChatsEnabled, r = t.favoritesEnabled, a = t.isListsFlowEnabled, i = [L, E], l = o("WAWebChatListAiStatusFilterPills").getAiStatusFilterPills();
		if ((e = i).push.apply(e, l), r && i.push(I), i.push(k), n && i.push(T), a && o("WAWebLabelCollection").LabelCollection.length !== 0) {
			var s, u = o("WAWebLabelCollection").LabelCollection.toArray();
			o("WAWebListUtils").sortLabels(u), i = o("WAWebChatListAiStatusFilterPills").withoutRelocatedAiPills(i, l, u.map(function(e) {
				return e.type;
			}));
			var c = u.reduce(function(e, t) {
				var n;
				if (o("WAWebListUtils").isAiList(t.type)) {
					var r = o("WAWebChatListAiStatusFilterPills").getAiPillForListType(l, t.type);
					return r != null && e.push(r), e;
				}
				if (!t.name) return e;
				var a = $(t.type);
				if (o("WAWebListUtils").isBuiltInList(t.type) && (i = i.filter(function(e) {
					return e.filter !== a;
				})), t.isActive === !1) return e;
				var s = {
					id: "label_item_" + t.id,
					getLabel: (n = x(t.type)) != null ? n : function() {
						return t.name;
					},
					testid: "label_item_" + t.id,
					listId: t.id,
					listType: t.type,
					color: P(t)
				};
				return a != null && (s.filter = a), e.push(s), e;
			}, []);
			(s = i).push.apply(s, c);
		}
		return o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled() && N(i), i;
	}, w = function(t, n, r, a) {
		if (a < t) return r.filter(function(e) {
			return e.filter !== o("WAWebChatSearchFilters").SearchFilters.TO_YOU;
		}).slice(0, t);
		var e = [L], i = r.find(function(e) {
			return e.listId === String(n.label) || (o("WAWebListUtils").isBuiltInList(e.listType) || o("WAWebChatListAiStatusFilterPills").isAiStatusFilter(e.filter) || e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU) && n.kind === e.filter;
		});
		return i != null && e.push(i), e;
	};
	function A(e) {
		return e >= 1600 ? 4 : e >= 1e3 && e < 1600 ? 3 : 2;
	}
	var F = { filterPillsContainer: {
		paddingTop: "x1nn3v0j",
		paddingBottom: "x1ykpatu",
		paddingInlineStart: "x106a9eq",
		paddingInlineEnd: "x2vl965",
		backgroundColor: "x1280gxy",
		display: "x78zum5",
		flexDirection: "x1q0g3np",
		flexWrap: "x1a02dak",
		flexShrink: "x2lah0s",
		rowGap: "x3pnbk8",
		columnGap: "xfex06f",
		minWidth: "xeuugli",
		minHeight: "x2lwn1j",
		$$css: !0
	} };
	function O(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, h), i = a.filter, l = a.filterSession, s = a.onDropdownOpen, y = a.onFilterChange, C = a.onMouseDown, v = i.kind, L = i.label, E = v === o("WAWebChatSearchFilters").SearchFilters.LABELS, k = r("useWAWebWindowSize")(), I = k.width, T = A(I), D = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), x = R([]), P = R(null), N = R(null), O = o("WAWebListsGatingUtils").isListsEnabled(), B = o("WAWebListsGatingUtils").isListsChatListRowPillEnabled(), W = M({
			assignChatsEnabled: o("WAWebChatAssignmentUtils").canAssignChats(),
			favoritesEnabled: o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled(),
			isListsFlowEnabled: O
		}), q = function(t, n) {
			if (x.current[n] = t, !(n >= W.length)) {
				var e = W[n].filter;
				e === v && (P.current = t);
			}
		}, U = function(t) {
			t && (t.focus(), N.current = t);
		};
		o("useWAWebListener").useListener(L != null ? o("WAWebLabelCollection").LabelCollection : null, "remove", function(t) {
			t.id === L && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] label removed -> reset to ALL"]))), y({ kind: null }));
		}), o("useWAWebListener").useListener(L != null ? o("WAWebLabelCollection").LabelCollection : null, "change:count", function(e, t) {
			e.id === L && t === 0 && (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] label count=0 -> reset to ALL"]))), y({ kind: null }));
		}), o("useWAWebListener").useListener(v != null ? o("WAWebLabelCollection").LabelCollection : null, "change:isActive", function(e) {
			if (e.isActive === !1) {
				var t = L != null && e.id === L, n = v != null && $(e.type) === v, r = e.type === o("WAWebSchemaLabel").ListType.AI_HANDOFF && v === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF || e.type === o("WAWebSchemaLabel").ListType.AI_RESPONDING && v === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING;
				(t || n || r) && (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] label deactivated -> reset to ALL"]))), y({ kind: null }));
			}
		}), o("useWAWebListener").useListener(O ? o("WAWebLabelCollection").LabelCollection : null, "change:count change:sort change:name change:color change:isActive remove add reorder", function() {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] LabelCollection change -> forceUpdate"]))), D();
		}), o("useWAWebListener").useListener(O ? o("WAWebChatCollection").ChatCollection : null, "change:showUnreadInTitle change:unreadCount change:isFavorite", function() {
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] ChatCollection change -> forceUpdate"]))), D();
		}), o("useWAWebListener").useListener(B ? o("WAWebChatCollection").ChatCollection : null, "change:labels", function() {
			o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] ChatCollection change:labels->forceUpdate"]))), D();
		});
		var V = function(t, n) {
			var e, r = {
				kind: t != null ? t : null,
				label: n != null ? n : null
			};
			if (i.kind === r.kind && i.label === r.label) {
				var a;
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
					"[ChatListFilters] skip unchanged filter=",
					" label=",
					""
				])), (a = r.kind) != null ? a : "none", !!r.label);
				return;
			}
			(l == null ? void 0 : l.sessionId) != null && o("WAWebFilterLogging").logSelectFilterEvent(l.newSessionId(), r), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
				"[ChatListFilters] setFilter=",
				" label=",
				""
			])), (e = r.kind) != null ? e : "none", !!r.label), y(r);
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "set_active_filter", V), S(n, function() {
			return { focus: function() {
				U(P.current);
			} };
		});
		var H = function(t, n, a) {
			var e, i = t === v, s = n === L, u = n == null, c = i && u && !s, d = c ? { kind: null } : {
				kind: t != null ? t : null,
				label: o("WAWebListUtils").isBuiltInList(a) || r("isStringNullOrEmpty")(n) ? null : n
			};
			(l == null ? void 0 : l.sessionId) != null && o("WAWebFilterLogging").logSelectFilterEvent(l.newSessionId(), d), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
				"[ChatListFilters] select filter=",
				" label=",
				""
			])), (e = d.kind) != null ? e : "none", !!d.label), y(d);
		}, G = function(t) {
			var e = x.current.indexOf(N.current), n;
			r("WAWebL10N").isRTL() ? n = e + (t === "next" ? -1 : 1) : n = e + (t === "next" ? 1 : -1);
			var o = x.current[n];
			o && U(o);
		}, z = {
			left: function() {
				return G("previous");
			},
			right: function() {
				return G("next");
			}
		}, j = function(t) {
			var e = t.target;
			e instanceof HTMLElement && (N.current = e);
		}, K = o("WAWebListUtils").getListsUnreadChatCountMap(), Q, X, Y, J, Z;
		if (O) {
			var ee = W.findIndex(function(e) {
				return v === e.filter && (o("WAWebListUtils").isBuiltInList(e.listType) || L === e.listId || L == null && e.listId == null) || v == null && e.filter == null;
			});
			v === o("WAWebChatSearchFilters").SearchFilters.TO_YOU && (ee = T);
			var te = w(T, i, W, ee), ne = ee >= T, re = ne ? W : W.filter(function(e) {
				return !te.some(function(t) {
					return t.id === e.id || t.listId != null && t.listId === e.listId;
				});
			}), oe = W.length > T || o("WAWebLabelCollection").LabelCollection.getCustomLists().length > 0 || o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled();
			ee >= T && (ee = 1), Y = te.map(function(e, t) {
				var n, a = ee === t, i = r("isStringNullOrEmpty")(e.listId) ? {} : { listId: e.listId };
				return b.createElement(r("WAWebListFilterButton.react"), babelHelpers.extends({
					ref: function(n) {
						return q(n, t);
					},
					id: e.id,
					role: "tab",
					"aria-selected": a,
					"aria-controls": "chat-list",
					listType: e.listType
				}, i, {
					testIdSuffix: e.testid,
					key: o("WAWebListUtils").resolvePillLabel(e.getLabel).toString(),
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
					tabIndex: a ? 0 : -1,
					label: o("WAWebListUtils").resolvePillLabel(e.getLabel),
					selected: a,
					restrictSize: !0,
					startIcon: (n = o("WAWebChatListAiStatusFilterPills").renderPillStartIcon(e)) != null ? n : void 0,
					count: o("WAWebListUtils").getUnreadChatsCountForFilter(e, K),
					onBeforeContextMenu: s,
					onClick: function() {
						return H(e.filter, e.listId, e.listType);
					},
					onFocus: j
				}));
			});
			var ae = te.length;
			oe ? J = b.jsx(r("WAWebChatListFilterListsDropdown.react"), {
				ref: function(t) {
					return q(t, ae);
				},
				id: "additional-filters",
				role: "tab",
				"aria-selected": !1,
				"aria-controls": "chat-list",
				filters: re,
				currentFilter: i,
				tabIndex: -1,
				filterSession: l,
				onSelect: H,
				onFocus: j
			}) : Z = b.jsx(r("WAWebChatListFiltersNewListButton.react"), {
				ref: function(t) {
					return q(t, ae);
				},
				id: "new-filter",
				role: "tab",
				"aria-selected": !1,
				"aria-controls": "chat-list",
				tabIndex: -1,
				onFocus: j
			});
		} else Q = W.map(function(e, t) {
			var n = e.filter, a = e.getLabel, i = e.id, l = e.listId, u = e.listType, c = e.testid, d = v === n || v == null && n == null;
			return b.jsx(r("WAWebListFilterButton.react"), {
				ref: function(n) {
					return q(n, t);
				},
				testIdSuffix: c,
				id: i,
				count: o("WAWebMobilePlatforms").isSMB() && O ? o("WAWebListUtils").getUnreadChatsCountForFilter({
					filter: n,
					getLabel: a,
					testid: c,
					listId: l,
					listType: u,
					id: i
				}, K) : void 0,
				role: "tab",
				"aria-selected": d,
				"aria-controls": "chat-list",
				listType: u,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
				tabIndex: d ? 0 : -1,
				label: o("WAWebListUtils").resolvePillLabel(a),
				selected: d,
				onClick: function() {
					return H(n, l, u);
				},
				onBeforeContextMenu: s,
				onFocus: function(t) {
					var e = t.target;
					e instanceof HTMLElement && (N.current = e);
				}
			}, o("WAWebListUtils").resolvePillLabel(a).toString());
		}), X = o("WAWebInboxFiltersGatingUtils").inboxCustomFiltersEnabled() ? b.jsx(r("WAWebChatListFiltersLabelsPill.react"), {
			ref: function(t) {
				return q(t, Q.length);
			},
			id: "labels-filter",
			role: "tab",
			"aria-selected": E,
			"aria-controls": "chat-list",
			filterSession: l,
			isSelected: E,
			onClick: function(t) {
				return H(o("WAWebChatSearchFilters").SearchFilters.LABELS, t);
			},
			onDropdownOpen: s,
			selectedLabelId: L,
			tabIndex: E ? 0 : -1,
			onFocus: j,
			unreadChatsCountMap: K
		}, o("WAWebChatSearchFilters").SearchFilters.LABELS) : null;
		return b.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			role: "tablist",
			"aria-label": "chat-list-filters",
			handlers: z,
			onMouseDown: C,
			xstyle: F.filterPillsContainer,
			children: [
				Q,
				X,
				Y,
				J,
				Z
			]
		});
	}
	O.displayName = O.name + " [from " + i.id + "]";
	function B(e) {
		var t = o("react-compiler-runtime").c(9), n, a;
		if (t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, y), t[0] = e, t[1] = n, t[2] = a) : (n = t[1], a = t[2]), (!o("WAWebMobilePlatforms").isSMB() || o("WAWebListsGatingUtils").isListsEnabled()) && r("justknobx")._("2386") && o("WAWebABProps").getABPropConfigValue("wa_web_lists_full_width_filters")) {
			var i;
			return t[3] !== n || t[4] !== a ? (i = b.jsx(r("WAWebChatListFiltersDynamic.react"), babelHelpers.extends({ ref: a }, n)), t[3] = n, t[4] = a, t[5] = i) : i = t[5], i;
		}
		var l;
		return t[6] !== n || t[7] !== a ? (l = b.jsx(O, babelHelpers.extends({ ref: a }, n)), t[6] = n, t[7] = a, t[8] = l) : l = t[8], l;
	}
	var W = B;
	l.ChatListFilters = W;
}), 226);
