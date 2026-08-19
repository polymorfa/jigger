__d("WAWebChatSearchDrawer.react", [
	"fbt",
	"WAAbortError",
	"WAFtsIsSearchQueryEligibleForMessageSearch",
	"WAPromiseRaceAbort",
	"WAShiftTimer",
	"WAWebBackendErrors",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebChatMessageSearch",
	"WAWebChatSearchMessageList.react",
	"WAWebCmd",
	"WAWebContactGetters",
	"WAWebCoreActionsODS",
	"WAWebDatePickerContainer.react",
	"WAWebDesktopUpsellPlatformAwareHooks",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdown.react",
	"WAWebEmptyState.react",
	"WAWebFlatList.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebFrontendConstants",
	"WAWebFtsConstants",
	"WAWebFtsMsgsCollection",
	"WAWebHistorySyncComponents.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebMsgCollection",
	"WAWebNonEmptyString",
	"WAWebNoop",
	"WAWebSearchByDateUtils",
	"WAWebSearchUserJourneyLogger",
	"WAWebSingleSelection",
	"WAWebSpinner.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebWamEnumSearchUjDismissType",
	"WAWebWamEnumTsSurface",
	"WDSButton.react",
	"WDSFlex.stylex",
	"WDSIconWdsIcCalendarSearch.react",
	"WDSSearchBar.react",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebDebouncedCallback",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebUIM",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useMemo, f = m.useRef, g = m.useState, h = {
		flexNone: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			$$css: !0
		},
		wdsSearchBarContainer: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			paddingBottom: "x1nbhmlj",
			rowGap: "x8a3fw1",
			columnGap: "x1aj3ljl",
			$$css: !0
		},
		paddingVert24: {
			paddingTop: "xl7twdi",
			paddingBottom: "xvg22vi",
			$$css: !0
		}
	};
	function y(e) {
		var t = e.chat, n = e.resultsUnavailable, a = e.searching, i = e.searchText, l = (i || "").trim();
		return r("WAFtsIsSearchQueryEligibleForMessageSearch")(l) ? a ? d.jsx(o("WAWebEmptyState.react").SearchingMessages, {}) : n ? d.jsx(o("WAWebEmptyState.react").SearchMessagesUnavailable, {}) : d.jsx(o("WAWebEmptyState.react").SearchMessages, {}) : o("WAWebEmptyState.react").BeforeSearchMessages({
			chatName: t.title(),
			isGroup: o("WAWebChatGetters").getIsGroup(t),
			isMessageYourselfChat: o("WAWebContactGetters").getIsMe(t.contact)
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.isInFlow, c = a.threadId, m = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), C = r("useWAWebUIM")(), b = r("useWAWebUnmountSignal")(), v = g(""), S = v[0], R = v[1], L = g(!1), E = L[0], k = L[1], I = g(!1), T = I[0], D = I[1], x = g(null), $ = x[0], P = x[1], N = _(function() {
			return new (r("WAWebFlatListController"))();
		}, []), M = _(function() {
			return new (r("WAWebFtsMsgsCollection"))(i, c);
		}, [i, c]), w = f(null), A = f(null), F = _(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}, []), O = f(!1), B = f({}), W = f(null), q = f(null), U = f(null), V = f(null), H = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(function() {
				var e = B.current;
				e.searchText !== void 0 && R(e.searchText), e.searching !== void 0 && k(e.searching), e.resultsUnavailable !== void 0 && D(e.resultsUnavailable), B.current = {};
			});
		}), G = function(t, n) {
			n === void 0 && (n = 75), Object.assign(B.current, t), t.searching === !0 ? H.current.debounce(0) : H.current.debounce(n);
		}, z = function(t) {
			return t == null || !(t.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE > t.scrollHeight - t.clientHeight) ? !1 : !(!M.hasMoreMsgs || O.current || E || M.searchPromise || !r("WAFtsIsSearchQueryEligibleForMessageSearch")((S || "").trim()));
		}, j = function() {
			var e = B.current;
			if ("searching" in e) {
				var t;
				return (t = e.searching) != null ? t : !1;
			}
			return E;
		}, K = function(t) {
			var e;
			t.repeat || W.current && (w.current && w.current.selectionEnd !== w.current.value.length || (t.preventDefault(), t.stopPropagation(), (e = W.current) == null || e.focusFirst()));
		}, Q = function() {
			var e;
			(e = w.current) == null || e.focus();
		}, X = function() {
			C == null || C.requestDismiss();
		}, Y = function() {
			return Math.round(window.innerHeight / o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT) + 1;
		}, J = r("useWAWebDebouncedCallback")(function() {
			var e;
			O.current = !1;
			var t = (S || "").trim();
			if (r("WAFtsIsSearchQueryEligibleForMessageSearch")(t)) {
				(e = V.current) == null || e.abort(), V.current = new AbortController();
				var n = V.current.signal, a = Promise.resolve().then(function() {
					j() || G({ searching: !0 });
				}).then(function() {
					return M.search({
						chat: i,
						count: Y(),
						searchTerm: t
					});
				});
				U.current = r("WAPromiseRaceAbort")(a, n).then(function(e) {
					if (b.aborted) throw new (o("WAAbortError")).AbortError();
					e && !e.canceled && t === S.trim() && G({
						searching: !1,
						resultsUnavailable: !1
					});
				}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).finally(function() {
					U.current = void 0, V.current = void 0;
				}).catch(function(e) {
					O.current || G({
						searching: !1,
						resultsUnavailable: e instanceof o("WAWebBackendErrors").E404
					});
				});
			}
		}, o("WAWebFtsConstants").FTS_TYPING_DELAY), Z = function() {
			var e;
			J.cancel(), M.resetSearch(), M.delete(), (e = V.current) == null || e.abort(), O.current = !1, R(""), k(!1), o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER);
		}, ee = function(t) {
			var e = t.trim();
			if (r("WAFtsIsSearchQueryEligibleForMessageSearch")(e)) J(), O.current = !0, E || G({ searching: !0 });
			else {
				var n;
				J.cancel(), M.resetSearch(), M.delete(), (n = V.current) == null || n.abort(), O.current = !1, E && G({
					searching: !1,
					resultsUnavailable: !1
				});
			}
		}, te = function(t) {
			if (!t) {
				Z();
				return;
			}
			if (t !== S) {
				var e = {
					searchText: t,
					resultsUnavailable: !1
				};
				ee(t), R(t), G(e);
			}
		}, ne = function(t) {
			te(t);
		}, re = function() {
			o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.searchCtaClicked(o("WAWebWamEnumTsSurface").TS_SURFACE.SEARCH);
		}, oe = function() {
			S || o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER);
		}, ae = function(t) {
			z(t.currentTarget) && (J(), O.current = !0);
		};
		p(function() {
			return function() {
				var e;
				J.cancel(), M.delete(!0), (e = V.current) == null || e.abort(), H.current.cancel();
			};
		}, []), o("useWAWebListener").useListener(M, ["bulk_remove"], m);
		var ie = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck(), le = M.toArray(), se = le.length ? null : d.jsx(y, {
			chat: i,
			searchText: S,
			searching: E,
			resultsUnavailable: T
		});
		if (se == null) {
			var ue = S ? o("WAWebNonEmptyString").asMaybeNonEmptyString(S.trim()) : null;
			se = d.jsx(r("WAWebChatSearchMessageList.react"), {
				ref: W,
				flatListController: N,
				searchText: ue,
				ftsResult: le,
				selection: F,
				onFocusSearch: Q,
				threadId: c
			});
		}
		var ce = { down: K }, de = E && le.length ? d.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: [h.flexNone, h.paddingVert24],
			children: d.jsx(o("WAWebSpinner.react").Spinner, {
				stroke: 6,
				size: 24
			})
		}) : null, me, pe = (S || "").trim();
		ie !== !0 && r("WAFtsIsSearchQueryEligibleForMessageSearch")(pe) && (me = d.jsx(o("WAWebHistorySyncComponents.react").HistorySyncChatSearchIncompletePlaceholder, {}));
		var _e = function() {
			P(null);
		}, fe = f(null), ge = async function(t) {
			o("WAWebCoreActionsODS").logCalendarDateSelectedFromSearchDrawer(), fe.current = t;
			var e = await o("WAWebSearchByDateUtils").getClosestMessageFromDate(i.id.toString(), t);
			if (_e(), e) {
				var n, r = o("WAWebMsgCollection").MsgCollection.get(e.toString()), a = o("WAWebChatMessageSearch").getSearchContext({
					chat: i,
					msgKey: (n = r == null ? void 0 : r.id) != null ? n : e
				});
				a.highlightMentionMsg = !0, a.enableAnimation = !1, a && o("WAWebCmd").Cmd.openChatAt({
					chat: i,
					msgContext: a,
					threadId: c,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ChatSearch
				});
			} else o("WAWebCmd").Cmd.openChatBottom({
				chat: i,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ChatSearch
			});
		}, he = function() {
			var e;
			o("WAWebCoreActionsODS").logCalendarOpenFromSearchDrawer();
			var t = A == null ? void 0 : A.current;
			P({
				dirY: o("WAWebDropdown.react").DirY.TOP,
				dirX: o("WAWebDropdown.react").DirX.CENTER,
				type: o("WAWebDropdown.react").MenuType.DatePicker,
				menu: d.jsx(r("WAWebDatePickerContainer.react"), {
					chatId: i.id,
					onDateSelected: function(t) {
						ge(t);
					},
					defaultActiveStartDate: (e = fe.current) != null ? e : new Date()
				}),
				flipOnRTL: !0,
				anchor: t
			});
		}, ye = $ ? d.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "DatePicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: _e,
			children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: $ })
		}) : null, Ce = {};
		return l === !0 ? Ce.onBack = X : Ce.onCancel = X, d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			tsNavigationData: {
				surface: "search",
				viewName: "chat-search"
			},
			children: [
				d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
				}, Ce)),
				d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
					handlers: ce,
					ref: q,
					className: "x1280gxy x1c4vz4f x2lah0s xdl72j9",
					children: d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRow, h.wdsSearchBarContainer), { children: [d.jsx(r("WDSButton.react"), {
						variant: "borderless",
						Icon: r("WDSIconWdsIcCalendarSearch.react"),
						testid: "chat-message-search-calendar-button",
						onPress: he,
						ref: A,
						"aria-label": s._(
							/*BTDS*/
							""
						)
					}), d.jsx("div", babelHelpers.extends({}, u.props(o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.flexShrink1), { children: d.jsx(r("WDSSearchBar.react"), {
						ref: w,
						hintText: s._(
							/*BTDS*/
							""
						),
						onBlur: oe,
						onFocus: re,
						onValueChange: ne,
						value: S,
						testid: "chat_thread_message_search_bar"
					}) }))] }))
				}),
				ye,
				d.jsxs(r("WAWebDrawerBody.react"), {
					flatListControllers: [N],
					className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy",
					onScroll: ae,
					id: "pane-side",
					children: [
						se,
						de,
						me
					]
				})
			]
		}, "search-modal");
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
