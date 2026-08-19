__d("WAWebChatListFiltersDynamic.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebChatCollection",
	"WAWebChatListAiStatusFilterPills",
	"WAWebChatListFilterListsDropdown.react",
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
	"WAWebNoop",
	"WAWebSchemaLabel",
	"WAWebTabOrder",
	"isStringNullOrEmpty",
	"react",
	"shallowEqual",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebMaxVisibleFilters"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g, h = ["config"], y = ["config"], C = ["ref"], b, v = b || (b = o("react")), S = b, R = S.useCallback, L = S.useImperativeHandle, E = S.useLayoutEffect, k = S.useMemo, I = S.useRef, T = {
		id: "all-filter",
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "all-filter"
	}, D = {
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
	}, x = {
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
	}, $ = {
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
	}, P = {
		id: "to-you-filter",
		filter: o("WAWebChatSearchFilters").SearchFilters.TO_YOU,
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "to-you-filter"
	}, N = function(t) {
		return t === o("WAWebSchemaLabel").ListType.UNREAD ? D.getLabel : t === o("WAWebSchemaLabel").ListType.GROUPS ? x.getLabel : t === o("WAWebSchemaLabel").ListType.FAVORITES ? $.getLabel : null;
	}, M = function(t) {
		return t == null ? o("WAWebChatSearchFilters").SearchFilters.LABELS : t === o("WAWebSchemaLabel").ListType.NONE || t === o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED || t === o("WAWebSchemaLabel").ListType.DRAFTED || t === o("WAWebSchemaLabel").ListType.AI_HANDOFF || t === o("WAWebSchemaLabel").ListType.CHANNELS || t === o("WAWebSchemaLabel").ListType.AI_RESPONDING ? null : t === o("WAWebSchemaLabel").ListType.UNREAD ? o("WAWebChatSearchFilters").SearchFilters.UNREAD : t === o("WAWebSchemaLabel").ListType.GROUPS ? o("WAWebChatSearchFilters").SearchFilters.GROUP : t === o("WAWebSchemaLabel").ListType.FAVORITES ? o("WAWebChatSearchFilters").SearchFilters.FAVORITES : t === o("WAWebSchemaLabel").ListType.COMMUNITY ? o("WAWebChatSearchFilters").SearchFilters.COMMUNITY : t === o("WAWebSchemaLabel").ListType.PREDEFINED || t === o("WAWebSchemaLabel").ListType.CUSTOM || t === o("WAWebSchemaLabel").ListType.LEAD ? o("WAWebChatSearchFilters").SearchFilters.LABELS : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
	}, w = function(t) {
		return t.type === o("WAWebSchemaLabel").ListType.AI_HANDOFF ? "var(--WDS-secondary-negative)" : t.type === o("WAWebSchemaLabel").ListType.AI_RESPONDING ? "var(--WDS-secondary-positive)" : t.colorIndex != null ? o("WAWebListUtils").colorIndexToHex(t.colorIndex) : t.color;
	}, A = function(t) {
		var e = t.findIndex(function(e) {
			return e.listId != null && !o("WAWebListUtils").isBuiltInList(e.listType) && e.listType !== o("WAWebSchemaLabel").ListType.AI_HANDOFF && e.listType !== o("WAWebSchemaLabel").ListType.AI_RESPONDING;
		});
		e === -1 ? t.push(P) : t.splice(e, 0, P);
	}, F = function(t) {
		var e, n = [T, D], r = o("WAWebChatListAiStatusFilterPills").getAiStatusFilterPills();
		if ((e = n).push.apply(e, r), t && n.push($), n.push(x), o("WAWebLabelCollection").LabelCollection.length !== 0) {
			var a, i = o("WAWebLabelCollection").LabelCollection.toArray();
			o("WAWebListUtils").sortLabels(i), n = o("WAWebChatListAiStatusFilterPills").withoutRelocatedAiPills(n, r, i.map(function(e) {
				return e.type;
			}));
			var l = i.reduce(function(e, t) {
				var a;
				if (o("WAWebListUtils").isAiList(t.type)) {
					var i = o("WAWebChatListAiStatusFilterPills").getAiPillForListType(r, t.type);
					return i != null && e.push(i), e;
				}
				if (!t.name) return e;
				var l = M(t.type), s = null;
				if (o("WAWebListUtils").isBuiltInList(t.type)) {
					var u;
					s = (u = n.find(function(e) {
						return e.filter === l;
					})) == null ? void 0 : u.testid, n = n.filter(function(e) {
						return e.filter !== l;
					});
				}
				if (t.isActive === !1) return e;
				var c = {
					id: "label_item_" + t.id,
					getLabel: (a = N(t.type)) != null ? a : t.name,
					testid: s != null ? s : "label_item_" + t.id,
					listId: t.id,
					listType: t.type,
					color: w(t)
				};
				return l != null && (c.filter = l), e.push(c), e;
			}, []);
			(a = n).push.apply(a, l);
		}
		return o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled() && A(n), n;
	}, O = function(t) {
		var e = t.filtersConfigs, n = t.maxVisibleFilters, r = t.selectedChatFilter, a = t.selectedIndex;
		if (a < n) return e.filter(function(e) {
			return e.filter !== o("WAWebChatSearchFilters").SearchFilters.TO_YOU;
		}).slice(0, n);
		var i = [T], l = e.find(function(e) {
			return e.listId === String(r.label) || (o("WAWebListUtils").isBuiltInList(e.listType) || o("WAWebChatListAiStatusFilterPills").isAiStatusFilter(e.filter) || e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU) && r.kind === e.filter;
		});
		return l != null && i.push(l), i;
	}, B = function(t, n, a) {
		return t.map(function(e, t) {
			var i;
			return v.jsx(r("WAWebListFilterButton.react"), {
				ref: function(r) {
					n.current[t] = r;
				},
				id: "measurement-" + e.id,
				label: o("WAWebListUtils").resolvePillLabel(e.getLabel),
				selected: !1,
				restrictSize: !0,
				startIcon: (i = o("WAWebChatListAiStatusFilterPills").renderPillStartIcon(e)) != null ? i : void 0,
				count: o("WAWebListUtils").getUnreadChatsCountForFilter(e, a),
				onClick: r("WAWebNoop"),
				tabIndex: -1
			}, "measurement-" + e.id);
		});
	};
	function W() {
		return o("WAWebABProps").getABPropConfigValue("web_optimized_pills");
	}
	var q = { filterPillsContainer: {
		paddingTop: "x1iorvi4",
		paddingBottom: "x10b6aqq",
		paddingInlineStart: "x106a9eq",
		paddingInlineEnd: "x2vl965",
		backgroundColor: "x1280gxy",
		display: "x78zum5",
		flexDirection: "x1q0g3np",
		flexWrap: "xozqiw3",
		flexShrink: "x2lah0s",
		columnGap: "xfex06f",
		minWidth: "xeuugli",
		minHeight: "x2lwn1j",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} };
	function U(e, t) {
		var n = e.config, o = babelHelpers.objectWithoutPropertiesLoose(e, h), a = t.config, i = babelHelpers.objectWithoutPropertiesLoose(t, y);
		return r("shallowEqual")(n, a) && r("shallowEqual")(o, i);
	}
	var V = v.memo(function(t) {
		var e, n = t.config, a = t.count, i = t.isHidden, l = t.onBeforeContextMenu, s = t.onFilterClick, u = t.onFocus, c = t.pillRef, d = t.selected, m = t.tabIndex, p = r("isStringNullOrEmpty")(n.listId) ? {} : { listId: n.listId }, _ = s != null ? function() {
			return s(n.filter, n.listId, n.listType);
		} : r("WAWebNoop");
		return v.jsx("div", babelHelpers.extends({}, {
			0: {},
			1: { className: "x10l6tqk xlshs6z x47corl xqtp20y" }
		}[!!i << 0], {
			"aria-hidden": i ? "true" : void 0,
			children: v.jsx(r("WAWebListFilterButton.react"), babelHelpers.extends({
				ref: c,
				id: n.id,
				role: i ? void 0 : "tab",
				"aria-selected": i ? void 0 : d,
				"aria-controls": i ? void 0 : "chat-list",
				listType: n.listType
			}, p, {
				testIdSuffix: n.testid,
				tabOrder: i ? void 0 : o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
				tabIndex: m,
				label: o("WAWebListUtils").resolvePillLabel(n.getLabel),
				selected: d,
				restrictSize: !0,
				startIcon: (e = o("WAWebChatListAiStatusFilterPills").renderPillStartIcon(n)) != null ? e : void 0,
				count: a,
				onBeforeContextMenu: i ? void 0 : l,
				onClick: _,
				onFocus: i ? void 0 : u
			}))
		}));
	}, U);
	function H(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, C), i = a.filter, l = a.filterSession, s = a.onDropdownOpen, h = a.onFilterChange, y = a.onMouseDown, b = i.kind, S = i.label, T = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), D = I(null), x = I([]), $ = I(null), P = I(null), N = o("WAWebListsGatingUtils").isListsChatListRowPillEnabled(), w = F(o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()), A = r("useWAWebMaxVisibleFilters")(D, w), U = A.maxVisibleCount, H = A.measurementContainerRef, G = A.pillRefs, z = U, j = function(t, n) {
			if (x.current[n] = t, !(n >= w.length)) {
				var e = w[n].filter;
				e === b && ($.current = t);
			}
		}, K = k(function() {
			return Array.from({ length: w.length }, function(e, t) {
				return function(e) {
					G.current[t] = e;
				};
			});
		}, [w.length, G]), Q = function(t) {
			t && (t.focus(), P.current = t);
		};
		o("useWAWebListener").useListener(S != null ? o("WAWebLabelCollection").LabelCollection : null, "remove", function(t) {
			t.id === S && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] label removed -> reset to ALL"]))), h({ kind: null }));
		}), o("useWAWebListener").useListener(S != null ? o("WAWebLabelCollection").LabelCollection : null, "change:count", function(e, t) {
			e.id === S && t === 0 && (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] label count=0 -> reset to ALL"]))), h({ kind: null }));
		}), o("useWAWebListener").useListener(b != null ? o("WAWebLabelCollection").LabelCollection : null, "change:isActive", function(e) {
			if (e.isActive === !1) {
				var t = S != null && e.id === S, n = b != null && M(e.type) === b, r = e.type === o("WAWebSchemaLabel").ListType.AI_HANDOFF && b === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF || e.type === o("WAWebSchemaLabel").ListType.AI_RESPONDING && b === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING;
				(t || n || r) && (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] label deactivated -> reset to ALL"]))), h({ kind: null }));
			}
		}), o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "change:count change:sort change:name change:color change:isActive remove add reorder", function() {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] forceUpdate: LabelCollection"]))), T();
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:showUnreadInTitle change:unreadCount change:isFavorite", function() {
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] forceUpdate: ChatCollection"]))), T();
		}), o("useWAWebListener").useListener(N ? o("WAWebChatCollection").ChatCollection : null, "change:labels", function() {
			o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] forceUpdate: ChatCollection change:labels"]))), T();
		});
		var X = function(t, n) {
			var e = {
				kind: t != null ? t : null,
				label: n != null ? n : null
			};
			if (i.kind === e.kind && i.label === e.label) {
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] onFilterChange skip: unchanged"])));
				return;
			}
			(l == null ? void 0 : l.sessionId) != null && o("WAWebFilterLogging").logSelectFilterEvent(l.newSessionId(), e), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] onFilterChange: handleSetActiveFilter"]))), h(e);
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "set_active_filter", X), L(n, function() {
			return { focus: function() {
				Q($.current);
			} };
		});
		var Y = R(function(e, t, n) {
			var a = e === b, i = t === S, s = t == null, u = a && s && !i, c = u ? { kind: null } : {
				kind: e != null ? e : null,
				label: o("WAWebListUtils").isBuiltInList(n) || r("isStringNullOrEmpty")(t) ? null : t
			};
			(l == null ? void 0 : l.sessionId) != null && o("WAWebFilterLogging").logSelectFilterEvent(l.newSessionId(), c), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[ChatListFilters] onFilterChange: handleFilterClick"]))), h(c);
		}, [
			b,
			S,
			l,
			h
		]), J = function(t) {
			var e = x.current.indexOf(P.current), n;
			r("WAWebL10N").isRTL() ? n = e + (t === "next" ? -1 : 1) : n = e + (t === "next" ? 1 : -1);
			var o = x.current[n];
			o && Q(o);
		}, Z = {
			left: function() {
				return J("previous");
			},
			right: function() {
				return J("next");
			}
		}, ee = R(function(e) {
			var t = e.target;
			t instanceof HTMLElement && (P.current = t);
		}, []), te = o("WAWebListUtils").getListsUnreadChatCountMap(), ne = w.findIndex(function(e) {
			return b === e.filter && (o("WAWebListUtils").isBuiltInList(e.listType) || S === e.listId || S == null && e.listId == null) || b == null && e.filter == null;
		});
		b === o("WAWebChatSearchFilters").SearchFilters.TO_YOU && (ne = z);
		var re = O({
			filtersConfigs: w,
			maxVisibleFilters: z,
			selectedChatFilter: i,
			selectedIndex: ne
		}), oe = w.filter(function(e) {
			return !re.some(function(t) {
				return t.id === e.id;
			});
		});
		E(function() {
			W() && re.forEach(function(e, t) {
				var n = w.indexOf(e), r = G.current[n];
				j(r, t);
			});
		}, void 0);
		var ae = ne >= z, ie = ae ? w : w.filter(function(e) {
			return !re.some(function(t) {
				return t.id === e.id || t.listId != null && t.listId === e.listId;
			});
		}), le = w.length > z || o("WAWebLabelCollection").LabelCollection.getCustomLists().length > 0 || o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled();
		ne >= z && (ne = 1);
		var se = re.map(function(e, t) {
			var n, a = ne === t, i = r("isStringNullOrEmpty")(e.listId) ? {} : { listId: e.listId };
			return v.createElement(r("WAWebListFilterButton.react"), babelHelpers.extends({
				ref: function(n) {
					return j(n, t);
				},
				id: e.id,
				role: "tab",
				"aria-selected": a,
				"aria-controls": "chat-list",
				listType: e.listType
			}, i, {
				testIdSuffix: e.testid,
				key: e.id,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
				tabIndex: a ? 0 : -1,
				label: o("WAWebListUtils").resolvePillLabel(e.getLabel),
				selected: a,
				restrictSize: !0,
				startIcon: (n = o("WAWebChatListAiStatusFilterPills").renderPillStartIcon(e)) != null ? n : void 0,
				count: o("WAWebListUtils").getUnreadChatsCountForFilter(e, te),
				onBeforeContextMenu: s,
				onClick: function() {
					return Y(e.filter, e.listId, e.listType);
				},
				onFocus: ee
			}));
		}), ue = re.length, ce, de;
		return le ? ce = v.jsx(r("WAWebChatListFilterListsDropdown.react"), {
			ref: function(t) {
				return j(t, ue);
			},
			id: "additional-filters",
			role: "tab",
			"aria-selected": !1,
			"aria-controls": "chat-list",
			filters: ie,
			currentFilter: i,
			tabIndex: -1,
			filterSession: l,
			onDropdownOpen: s,
			onSelect: Y,
			onFocus: ee
		}) : de = v.jsx(r("WAWebChatListFiltersNewListButton.react"), {
			ref: function(t) {
				return j(t, ue);
			},
			id: "new-filter",
			role: "tab",
			"aria-selected": !1,
			"aria-controls": "chat-list",
			tabIndex: -1,
			onFocus: ee
		}), W() ? v.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: D,
			role: "tablist",
			"aria-label": "chat-list-filters",
			handlers: Z,
			onMouseDown: y,
			xstyle: q.filterPillsContainer,
			children: [
				v.jsx("div", {
					ref: H,
					hidden: !0
				}),
				re.map(function(e, t) {
					var n = ne === t, r = w.indexOf(e);
					return v.jsx(V, {
						config: e,
						configIndex: r,
						count: o("WAWebListUtils").getUnreadChatsCountForFilter(e, te),
						selected: n,
						isHidden: !1,
						pillRef: K[r],
						onFilterClick: Y,
						onFocus: ee,
						onBeforeContextMenu: s,
						tabIndex: n ? 0 : -1
					}, e.id);
				}),
				ce,
				de,
				oe.map(function(e) {
					var t = w.indexOf(e);
					return v.jsx(V, {
						config: e,
						configIndex: t,
						count: o("WAWebListUtils").getUnreadChatsCountForFilter(e, te),
						selected: !1,
						isHidden: !0,
						pillRef: K[t],
						tabIndex: -1
					}, e.id);
				})
			]
		}) : v.jsxs(v.Fragment, { children: [v.jsx("div", {
			ref: H,
			className: "x10l6tqk xlshs6z xqtp20y x6ikm8r x10wlt62 x78zum5 x1q0g3np xfex06f x47corl",
			"aria-hidden": "true",
			children: B(w, G, te)
		}), v.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: D,
			role: "tablist",
			"aria-label": "chat-list-filters",
			handlers: Z,
			onMouseDown: y,
			xstyle: q.filterPillsContainer,
			children: [
				se,
				ce,
				de
			]
		})] });
	}
	H.displayName = H.name + " [from " + i.id + "]", l.default = H;
}), 226);
