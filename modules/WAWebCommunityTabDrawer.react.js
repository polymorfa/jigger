__d("WAWebCommunityTabDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebChatEntryPoint",
	"WAWebChatLockUtils",
	"WAWebChatModel",
	"WAWebCmd",
	"WAWebCommunityActivityCollection",
	"WAWebCommunityActivityModel",
	"WAWebCommunityCells.react",
	"WAWebCommunityDailyUtils",
	"WAWebCommunityGatingUtils",
	"WAWebCommunityGroupJourneyEventImpl",
	"WAWebComposeBoxActions",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmptyCommunityTabNux.react",
	"WAWebErrorBoundary.react",
	"WAWebFlatList.react",
	"WAWebFlatListController",
	"WAWebGroupInfoSeparator.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebSingleSelection",
	"WAWebTabOrder",
	"WAWebWamEnumChatFilterActionTypes",
	"WAWebWamEnumSurfaceType",
	"WDSIconIcAddCircle.react",
	"WDSMenuBarItem.react",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useMergeRefs",
	"useWAWebCallbackOnce",
	"useWAWebDebouncedCallback",
	"useWAWebFocusOnMount",
	"useWAWebForceUpdate",
	"useWAWebIsKeyboardUser",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState, h = {
		NEW_COMMUNITY_CELL: "NEW_COMMUNITY_CELL",
		COMMUNITY_HEADER_CELL: "COMMUNITY_HEADER",
		ACTIVITY_CELL: "ACTIVITY_CELL",
		SUBGROUP_CHAT_CELL: "SUBGROUP_CHAT_CELL",
		VIEW_ALL_CELL: "VIEW_ALL_CELL",
		GUTTER: "GUTTER"
	};
	function y() {
		return 20;
	}
	var C = {
		drawer: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		flatListViewport: {
			paddingTop: "x16ovd2e",
			$$css: !0
		}
	};
	function b() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = d.jsx(r("WAWebGroupInfoSeparator.react"), {
			animation: !1,
			transparentBackground: !0
		}), e[0] = t) : t = e[0], t;
	}
	var v = function(t) {
		var e, n, r = (e = (n = o("WAWebChatCollection").ChatCollection.get(t.id)) == null ? void 0 : n.t) != null ? e : Number.MIN_SAFE_INTEGER, a = t.joinedSubgroups.map(function(e) {
			var t, n;
			return (t = (n = o("WAWebChatCollection").ChatCollection.get(e)) == null ? void 0 : n.t) != null ? t : Number.MIN_SAFE_INTEGER;
		});
		return Math.max.apply(Math, [r].concat(a));
	}, S = function(t) {
		var e = t.filter(function(e) {
			return o("WAWebChatCollection").ChatCollection.get(e.id) != null;
		}), n = e.filter(function(e) {
			return !o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(o("WAWebChatCollection").ChatCollection.get(e.id));
		}), a = n.sort(function(e, t) {
			return v(t) - v(e);
		}), i = e.filter(function(e) {
			return o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(o("WAWebChatCollection").ChatCollection.get(e.id)) === !0;
		}), l = o("WAWebCommunityGatingUtils").communitiesCreationEnabled() ? [{
			itemKey: "new-community-btn",
			type: h.NEW_COMMUNITY_CELL
		}] : [];
		return a.forEach(function(e) {
			var t = [], n = e.id.toString(), a = o("WAWebChatCollection").ChatCollection.assertGet(e.id), i = e.joinedSubgroups.map(function(e) {
				return o("WAWebChatCollection").ChatCollection.assertGet(e);
			}).filter(function(e) {
				return o("WAWebChatLockUtils").chatIsAccessible(e);
			}).sort(function(e, t) {
				var n, r;
				return ((n = t == null ? void 0 : t.t) != null ? n : Number.MIN_SAFE_INTEGER) - ((r = e == null ? void 0 : e.t) != null ? r : Number.MIN_SAFE_INTEGER);
			}), s = r("WAWebCommunityActivityCollection").getActivityFor(e.id), u = s.some(function(e) {
				return e.type === o("WAWebCommunityActivityModel").ActivityTypeType.NEW_COMMUNITY;
			});
			t.push({
				itemKey: "community-header-" + n,
				type: h.COMMUNITY_HEADER_CELL,
				parentGroupMetadata: e,
				parentGroupChat: a,
				isNewCommunity: u
			});
			var c = s.filter(function(t) {
				var n;
				return t.type === o("WAWebCommunityActivityModel").ActivityTypeType.SUB_GROUP_LINK && ((n = e.lastSeenActivityTimestamp) != null ? n : 0) < t.timestamp;
			});
			c.length && t.push({
				itemKey: "community-activity-" + n,
				type: h.ACTIVITY_CELL,
				activities: c,
				parentGroupMetadata: e
			});
			var d = i.find(function(e) {
				var t;
				return (t = e.groupMetadata) == null ? void 0 : t.defaultSubgroup;
			});
			d != null && t.push({
				itemKey: "community-subgroup-" + d.id.toString(),
				type: h.SUBGROUP_CHAT_CELL,
				subgroup: d
			});
			var m = i.filter(function(e) {
				return e !== d;
			});
			m[0] != null && t.push({
				itemKey: "community-subgroup-" + m[0].id.toString(),
				type: h.SUBGROUP_CHAT_CELL,
				subgroup: m[0]
			}), !c.length && m[1] != null && t.push({
				itemKey: "community-subgroup-" + m[1].id.toString(),
				type: h.SUBGROUP_CHAT_CELL,
				subgroup: m[1]
			}), t.length > 1 && t.push({
				itemKey: "community-view-all-" + n,
				type: h.VIEW_ALL_CELL,
				parentGroupWid: e.id,
				height: 52
			}), t.push({
				itemKey: "community-gutter-" + n,
				type: h.GUTTER,
				height: y()
			}), l.push.apply(l, t);
		}), i.forEach(function(e) {
			var t = [], n = e.id.toString(), r = o("WAWebChatCollection").ChatCollection.get(e.id);
			r != null && (t.push({
				itemKey: "community-header-" + n,
				type: h.COMMUNITY_HEADER_CELL,
				parentGroupMetadata: e,
				parentGroupChat: r,
				isNewCommunity: !1
			}), t.push({
				itemKey: "community-gutter-" + n,
				type: h.GUTTER,
				height: y()
			}), l.push.apply(l, t));
		}), l.length && l[l.length - 1].type === h.GUTTER && l.pop(), l;
	};
	function R(t) {
		"use no forget";
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, u), l = g([]), c = l[0], m = l[1], y = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), v = f(), R = f(), L = f(), E = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.itemKey;
			});
		}), k = f((n = i.initialScrollTop) != null ? n : 0), I = f(!1), T = r("useWAWebIsKeyboardUser")(), D = T.isKeyboardUser, x = T.setIsKeyboardUser, $ = p(function() {
			return c.filter(function(e) {
				return e.type !== h.GUTTER;
			});
		}, [c]), P = r("useWAWebCallbackOnce")(function(e) {
			i.onCommunityHome(e);
		}), N = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(r("WAWebCommunityActivityCollection"), "add remove change", N);
		var M = r("useWAWebCallbackOnce")(function(e) {
			i.onActivityCell(e.id);
		}), w = function(t) {
			var e = E.current.list.findIndex(function(e) {
				return e.itemKey === t.itemKey;
			});
			E.current.set(e), A(t.subgroup, !0);
		}, A = function(n, a) {
			a === void 0 && (a = !1), o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType.TAB_GROUP_NAVIGATIONS), n instanceof o("WAWebChatModel").Chat && n !== o("WAWebChatCollection").ChatCollection.getActive() ? o("WAWebCmd").Cmd.openChatFromUnread({
				chat: n,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab
			}).then(function(e) {
				e && a && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to open community subgroup chat from communities tab"]))).catching(r("getErrorSafe")(t)).sendLogs("community-tab-open-chat-fail");
			}) : a && n instanceof o("WAWebChatModel").Chat && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
		}, F = r("useWAWebDebouncedCallback")(function(e) {
			e && e.preventDefault();
			var t = (e == null ? void 0 : e.type) === "keydown";
			x(t);
			var n = E.current.getVal();
			if (!(n == null || n.type !== h.SUBGROUP_CHAT_CELL)) {
				var r = n.subgroup;
				r && A(r);
			}
		}, 200), O = function() {
			if (v.current) {
				var e = E.current.value;
				if (e == null) return;
				var t = c.findIndex(function(t) {
					return t.itemKey === e.itemKey;
				});
				if (t !== -1) {
					var n;
					(n = v.current) == null || n.scrollIntoViewIfNeeded(t, 100);
				}
			}
		}, B = function(t) {
			O(), F(t), t == null || t.preventDefault(), t == null || t.stopPropagation();
		}, W = function(t, n) {
			E.current.setItemKey(t.itemKey), B(n);
		}, q = function(t) {
			return t.type === h.COMMUNITY_HEADER_CELL || t.type === h.NEW_COMMUNITY_CELL;
		}, U = function(t) {
			var e = E.current.getList(), n = E.current.index, r = e.slice(n + 1).find(q);
			r != null && W(r, t);
		}, V = function(t) {
			var e = E.current.getList(), n = E.current.index, r = e.slice(0, n).reverse().find(q);
			r != null && W(r, t);
		}, H = function(t) {
			if (i.parentGroups.length !== 0) {
				var e = E.current.prev();
				e > -1 && (E.current.setPrev(!0), O(), F(t), t == null || t.preventDefault(), t == null || t.stopPropagation());
			}
		}, G = function(t) {
			if (i.parentGroups.length !== 0) {
				t == null || t.preventDefault(), t == null || t.stopPropagation();
				var e = E.current.next();
				E.current.index !== e && (E.current.setNext(!0), O(), F(t));
			}
		}, z = function(t) {
			t.target === L.current && D && (E.current.index < 0 ? (E.current.setFirst(!0), O()) : E.current.reset(!0));
		}, j = function(t) {
			var e = L.current, n = t.relatedTarget;
			!n || !e || !(n instanceof HTMLElement) || e.contains(n) || E.current.set(-1, !1);
		}, K = function(t) {
			k.current = t.currentTarget.scrollTop;
		}, Q = function() {
			var e = o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT;
			return e + 4;
		};
		_(function() {
			var e = new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
				action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.VIEW,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_TAB
			});
			e.commit();
		}, []), _(function() {
			m(S(i.parentGroups));
		}, [i.parentGroups]), _(function() {
			E.current.list.length === 0 && E.current.init($());
		}, [
			E,
			c,
			$
		]), _(function() {
			if (c.length && I.current === !1) {
				var e;
				y.current.setScrollFromStart((e = i.initialScrollTop) != null ? e : 0), I.current = !0;
			}
			return function() {
				return i.setScrollTop == null ? void 0 : i.setScrollTop(k.current);
			};
		}, [
			c,
			y,
			i
		]);
		var X = {
			down: G,
			up: H,
			j: G,
			k: H,
			tab: U,
			"shift+tab": V
		}, Y;
		o("WAWebCommunityGatingUtils").communitiesCreationEnabled() && (Y = d.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.TAB_HEADER,
			testid: "menu-btn-new-community",
			icon: r("WDSIconIcAddCircle.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: i.onNewCommunity
		}, "menu-btn-new-community"));
		var J = { theme: "custom-scroll" }, Z = r("useWAWebFocusOnMount")(), ee = r("useMergeRefs")(Z, R);
		return d.jsx("div", {
			ref: ee,
			tabIndex: 0,
			className: "x5yr21d",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"data-testid": "community-tab-drawer",
			children: d.jsxs(r("WAWebDrawer.react"), {
				ref: a,
				xstyle: C.drawer,
				tsNavigationData: { surface: "community-tab" },
				testid: "community-drawer",
				children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
					menu: [Y],
					onBack: i.onBack
				}), i.parentGroups.length > 0 ? d.jsxs(r("WAWebDrawerBody.react"), babelHelpers.extends({
					flatListControllers: [y.current],
					onScroll: K
				}, J, { children: [d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
					ref: L,
					tabIndex: 0,
					"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
					handlers: X,
					onFocus: z,
					onBlur: j,
					children: d.jsx(o("WAWebFlatList.react").FlatList, {
						ref: v,
						data: c,
						renderItem: function(t) {
							var e;
							switch (t.type) {
								case h.NEW_COMMUNITY_CELL:
									e = d.jsx(r("WAWebDrawerSection.react"), {
										animation: !1,
										children: d.jsx(o("WAWebCommunityCells.react").NewCommunityCell, {
											onNewCommunity: i.onNewCommunity,
											active: E.current
										})
									});
									break;
								case h.COMMUNITY_HEADER_CELL:
									e = d.jsx(r("WAWebDrawerSection.react"), {
										animation: !1,
										children: d.jsx(o("WAWebCommunityCells.react").CommunityCell, {
											parentGroupMetadata: t.parentGroupMetadata,
											parentGroupChat: t.parentGroupChat,
											onClick: function() {
												return P(t.parentGroupChat.id);
											},
											isNew: t.isNewCommunity,
											active: E.current,
											inTabDrawer: !0
										})
									});
									break;
								case h.GUTTER:
									e = d.jsx(b, {});
									break;
								case h.ACTIVITY_CELL:
									e = d.jsx(r("WAWebDrawerSection.react"), {
										animation: !1,
										children: d.jsx(o("WAWebCommunityCells.react").ActivityCell, {
											activities: t.activities,
											onClick: function() {
												return M(t.parentGroupMetadata);
											},
											parentGroupWid: t.parentGroupMetadata.id,
											active: E.current
										})
									});
									break;
								case h.SUBGROUP_CHAT_CELL:
									e = d.jsx(r("WAWebDrawerSection.react"), {
										animation: !1,
										children: d.jsx(o("WAWebCommunityCells.react").SubgroupChatCell, {
											subgroup: t.subgroup,
											onClick: function() {
												return w(t);
											},
											active: E.current
										})
									});
									break;
								case h.VIEW_ALL_CELL:
									e = d.jsx(r("WAWebDrawerSection.react"), {
										animation: !1,
										children: d.jsx(o("WAWebCommunityCells.react").ViewAllCell, {
											onClick: function() {
												return P(t.parentGroupWid);
											},
											parentGroupWid: t.parentGroupWid,
											active: E.current
										})
									});
									break;
							}
							return d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
								name: "community-drawer-section",
								children: e
							});
						},
						flatListController: y.current,
						direction: "vertical",
						defaultItemHeight: Q(),
						role: "navigation",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						viewportXstyles: C.flatListViewport
					})
				}), d.jsx("div", { className: "xexx8yu xyri2b xefzj8c x1c1uobl" })] })) : d.jsx(r("WAWebDrawerBody.react"), { children: d.jsx(r("WAWebEmptyCommunityTabNux.react"), { onNewCommunity: i.onNewCommunity }) })]
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);
