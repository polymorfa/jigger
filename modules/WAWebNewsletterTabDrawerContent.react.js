__d("WAWebNewsletterTabDrawerContent.react", [
	"fbt",
	"WAWebChatEntryPoint",
	"WAWebChatSearchQuery",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebKeyboardHotKeys.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebNewsletterCollection",
	"WAWebNewsletterDirectoryFilterUtils",
	"WAWebNewsletterDirectoryFunnelLogging",
	"WAWebNewsletterDrawerListItem.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterInboxSearch.react",
	"WAWebNewsletterInboxSearchLogging",
	"WAWebNewsletterRecommendedUnit.flow",
	"WAWebNewsletterRecommendedUnitProvider.react",
	"WAWebNewsletterTabDrawerUtils",
	"WAWebSideNavButtonsActivityModel",
	"WAWebSingleSelection",
	"WAWebTabOrder",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebWamEnumUpdateTabSearchEventType",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useDelayedBooleanState",
	"useLazyRef",
	"useWAWebDebouncedSearch",
	"useWAWebNewsletterDirectoryResults",
	"useWAWebNewsletterInboxSearch",
	"useWAWebRecommendedNewsletters"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = d.useState, g = {
		flatListContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		flatListContainerRefreshed: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "xefzj8c",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		flatList: {
			overflowAnchor: "x1xzczws",
			$$css: !0
		},
		flatListViewport: {
			paddingTop: "x16ovd2e",
			$$css: !0
		}
	}, h = 150;
	function y(t) {
		var n = t.initialScrollTop, a = t.newsletters, i = t.onCreateNewsletter, l = t.onNewsletterDirectorySearch, u = t.setScrollTop, d = a.length <= 0, y = o("useWAWebRecommendedNewsletters").useRecommendedNewsletters(), v = y[0], R = y[1], L = f([]), E = L[0], k = L[1], I = _(), T = _(), D = _(n != null ? n : 0), x = _(n != null ? n : 0), $ = _(!1), P = _(), N = _(), M = _(new (o("WAWebNewsletterDirectoryFunnelLogging")).NewsletterDirectoryFunnelLogger()), w = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), A = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.itemKey;
			});
		}), F = A.current, O = F.list, B = F.value, W = p(function() {
			return E.filter(function(e) {
				return e.type === o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_CHAT_CELL || e.type === o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_DIRECTORY_CELL;
			});
		}, [E]);
		(O.length === 0 || W !== O) && (F.init(W), B != null && F.setVal(B));
		var q = r("useWAWebDebouncedSearch")(o("WAWebNewsletterGatingUtils").getNewsletterDirectorySearchDebounce()), U = q[0], V = q[1], H = f(0), G = H[0], z = H[1], j = _(new (o("WAWebChatSearchQuery")).SearchQuery()), K = U.trim(), Q = o("useWAWebNewsletterDirectoryResults").useNewsletterDirectoryResults({
			searchText: K,
			countryCode: o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getMaybeMyCountryCodeIso(),
			listView: o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView.Recommended,
			newsletterDirectoryFunnelLogger: M.current,
			skipSubscribedNewsletters: !0,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterUpdatesTab
		}), X = Q[0], Y = Q[1], J = Q[2], Z = Q[3], ee = Q[4], te = Q[5], ne = r("useDelayedBooleanState")(te, h), re = o("useWAWebNewsletterInboxSearch").useNewsletterInboxSearch({ filteredText: K });
		m(function() {
			var e = re(a);
			z(e.length);
			var t = S({
				subscribedNewsletters: e,
				directoryNewsletters: X,
				trimmedSearchText: K,
				loadingDirectory: te
			});
			k(t);
		}, [
			a,
			re,
			X,
			K,
			te
		]), m(function() {
			K !== "" && J();
		}, [J, K]), m(function() {
			if (K === "") {
				var e;
				(e = w.current) == null || e.setScrollFromStart(x.current);
				return;
			}
			if (E.length > 0) {
				var t;
				(t = T.current) == null || t.scrollIntoViewIfNeeded(0);
			}
		}, [
			K,
			w,
			E.length
		]), m(function() {
			var e;
			if (!((e = N.current) != null && e.hasFocus())) {
				var t = r("WAWebNewsletterCollection").getActive(), n = E.find(function(e) {
					return e.type === o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_CHAT_CELL && e.newsletter === t;
				});
				n != null && A.current.setVal(n, !1);
			}
		}, [E, A]), m(function() {
			return E.length && $.current === !1 && (w.current.setScrollFromStart(n != null ? n : 0), $.current = !0), function() {
				return u == null ? void 0 : u(D.current);
			};
		}, [
			E.length,
			n,
			u,
			w
		]);
		var oe = function(t) {
			D.current = t.currentTarget.scrollTop, U.trim() === "" && (x.current = t.currentTarget.scrollTop);
			var e = I.current;
			e == null || K === "" || o("WAWebNewsletterTabDrawerUtils").isScrollAtBottomOfList(e) && Y() && Z();
		}, ae = function() {
			var e = o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT;
			return e + 4;
		}, ie = function(t) {
			switch (t.type) {
				case o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_CHAT_CELL:
				case o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_DIRECTORY_CELL:
					o("WAWebSideNavButtonsActivityModel").setLastActiveNewsletterEntryPoint(t.chatEntryPoint);
					break;
			}
			if (K !== "") switch (t.type) {
				case o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_CHAT_CELL:
					o("WAWebNewsletterInboxSearchLogging").logNewsletterInboxSearchEvent({ updateTabSearchEventType: o("WAWebWamEnumUpdateTabSearchEventType").UPDATE_TAB_SEARCH_EVENT_TYPE.ITEM_TAP });
					break;
				case o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_DIRECTORY_CELL:
					o("WAWebNewsletterInboxSearchLogging").logNewsletterInboxSearchEvent({ updateTabSearchEventType: o("WAWebWamEnumUpdateTabSearchEventType").UPDATE_TAB_SEARCH_EVENT_TYPE.ITEM_TAP });
					break;
			}
			A.current.setVal(t);
		}, le = function() {
			if (T.current) {
				var e = A.current.value;
				if (e == null) return;
				var t = E.findIndex(function(t) {
					return t.itemKey === e.itemKey;
				});
				if (t !== -1) {
					var n;
					(n = T.current) == null || n.scrollIntoViewIfNeeded(t, 100);
				}
			}
		}, se = function(t) {
			if (a.length !== 0) {
				t == null || t.preventDefault(), t == null || t.stopPropagation();
				var e = A.current.prev();
				e > -1 && (A.current.setPrev(!0), le());
			}
		}, ue = function(t) {
			if (a.length !== 0) {
				t == null || t.preventDefault(), t == null || t.stopPropagation();
				var e = A.current.next();
				A.current.index !== e && (A.current.setNext(!0), le());
			}
		}, ce = function() {
			if (A.current.value) {
				var e = A.current.index;
				A.current.setVal(E[e], !0);
			} else A.current.setFirst(!0);
		}, de = {
			down: ue,
			up: se
		}, me = d ? null : c.jsx(r("WAWebNewsletterInboxSearch.react"), {
			ref: N,
			filteredText: K,
			handleSearchChange: V,
			handleSelectNewsletter: ie,
			listData: E,
			loading: ne,
			newsletters: a,
			searchQuery: j.current
		}), pe = K === "" && !d && (R.length > 0 || v), _e = c.jsxs(r("WAWebFlatListContainer.react"), {
			className: (e || (e = r("stylex")))([g.flatListContainer, g.flatListContainerRefreshed]),
			ref: I,
			onScroll: oe,
			flatListControllers: [w.current],
			children: [c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				tabIndex: E.length === 0 ? -1 : 0,
				"data-tab": o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_LIST,
				handlers: de,
				onFocus: function(t) {
					t.target === P.current && ce();
				},
				ref: P,
				children: c.jsx(o("WAWebFlatList.react").FlatList, {
					ref: T,
					data: E,
					containerXstyles: g.flatList,
					flatListController: w.current,
					direction: "vertical",
					role: "navigation",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					defaultItemHeight: ae(),
					viewportXstyles: g.flatListViewport,
					renderItem: function(t, n) {
						return c.jsx(o("WAWebNewsletterDrawerListItem.react").NewsletterDrawerListItem, {
							data: t,
							selectionRef: A.current,
							onSelect: ie,
							onNewsletterDirectorySearch: l,
							loading: v,
							bottomDirectoryIndex: X.length - 1,
							firstCellInList: t.type === o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_CHAT_CELL && t.firstCellInList && K !== "",
							searchQuery: j.current,
							index: n,
							subscribedNewslettersCount: G
						});
					}
				})
			}), pe && c.jsx(r("WAWebNewsletterRecommendedUnitProvider.react"), {
				isLoading: v,
				layout: o("WAWebNewsletterRecommendedUnit.flow").RecommendedUnitLayoutType.Row,
				recommendedNewsletters: R,
				onSeeAllClick: l,
				onCreateNewsletter: i
			})]
		});
		return c.jsxs(c.Fragment, { children: [
			me,
			d && c.jsx(r("WAWebNewsletterRecommendedUnitProvider.react"), {
				isLoading: v,
				layout: o("WAWebNewsletterRecommendedUnit.flow").RecommendedUnitLayoutType.Block,
				recommendedNewsletters: R,
				onSeeAllClick: l,
				onCreateNewsletter: i
			}),
			K !== "" ? c.jsx(b, { children: _e }) : c.jsx(C, { children: _e })
		] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("react-compiler-runtime").c(1), n = e.children, r;
		return t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { surface: "channel-updates-home" }, t[0] = r) : r = t[0], o("WAWebTimeSpentLoggingNavigation").useTsNavigation(r), n;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(1), n = e.children, r;
		return t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { surface: "channel-updates-home-search" }, t[0] = r) : r = t[0], o("WAWebTimeSpentLoggingNavigation").useTsNavigation(r), n;
	}
	var v = 58;
	function S(e) {
		var t = e.directoryNewsletters, n = e.loadingDirectory, r = e.subscribedNewsletters, a = e.trimmedSearchText, i = [], l = a !== "";
		return l && r.length > 0 && i.push({
			type: o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_CELL_HEADER,
			itemKey: "followed_channels_search_header",
			title: s._(
				/*BTDS*/
				""
			),
			height: v,
			hasTopBorder: !1
		}), r.forEach(function(e, t) {
			i.push({
				itemKey: "newsletter-local-" + e.id.toString(),
				type: o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_CHAT_CELL,
				newsletter: e,
				index: t,
				firstCellInList: t === 0,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterChatlist
			});
		}), l && !n && (t.length > 0 ? (i.push({
			type: o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_CELL_HEADER,
			itemKey: "other_channels_search_header",
			title: s._(
				/*BTDS*/
				""
			),
			height: v,
			hasTopBorder: !0
		}), i.push.apply(i, t)) : r.length === 0 && i.push({
			type: o("WAWebNewsletterDrawerListItem.react").TabCellDataType.NEWSLETTER_DIRECTORY_NO_RESULTS,
			itemKey: "no_results_found",
			height: 120
		}), i.push({
			itemKey: "search-footer",
			type: o("WAWebNewsletterDrawerListItem.react").TabCellDataType.SEARCH_FOOTER
		})), i;
	}
	l.default = y;
}), 226);
