__d("WAWebChatListSearch.react", [
	"fbt",
	"$InternalEnum",
	"Keys",
	"WALogger",
	"WAWebABProps",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebChatEntryPoint",
	"WAWebChatListFilterLabelsDropdownMenu.react",
	"WAWebChatSearchFilters",
	"WAWebChatlistPanelMode",
	"WAWebChatlistUtils",
	"WAWebCmd",
	"WAWebConnModel",
	"WAWebDropdownItem.react",
	"WAWebFbtCommon",
	"WAWebFeatureFlagName",
	"WAWebFilterIcon.react",
	"WAWebFilterLogging",
	"WAWebFlex.react",
	"WAWebInboxFiltersGatingUtils",
	"WAWebL10NIsUsingSupportedBritishEnglishLocale",
	"WAWebLabelCollection",
	"WAWebListsLabelGatingUtils",
	"WAWebMessageYourselfMetricUtils",
	"WAWebMsgCollection",
	"WAWebNonContactsIcon.react",
	"WAWebSearchUnreadIcon.react",
	"WAWebSearchUserJourneyLogger",
	"WAWebSearchZeroState.react",
	"WAWebSearchZeroStateGatingUtils",
	"WAWebTabOrder",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebUseRecentlySearchedChats",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumSearchUjCriteriaType",
	"WAWebWamEnumSearchUjDismissType",
	"WAWebWamEnumSearchUjItemType",
	"WDSButton.react",
	"WDSIconIcPerson.react",
	"WDSIconWdsIcCalendarSearch.react",
	"WDSIconWdsIcCommunities.react",
	"WDSIconWdsIcLogoMetaAiColor.react",
	"WDSIconWdsIcTransferOwnership.react",
	"WDSSearchBar.react",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebGetFeatureFlag",
	"useWAWebListener",
	"useWAWebOnUnmount",
	"useWAWebStableCallback",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g, h = ["ref"], y, C, b = C || (C = o("react")), v = C, S = v.useDeferredValue, R = v.useEffect, L = v.useImperativeHandle, E = v.useRef, k = v.useState, I = v.useTransition, T = {
		marginInlineEnd10: {
			marginInlineEnd: "x1sa5p1d",
			$$css: !0
		},
		marginTop7: {
			marginTop: "x1rhet7l",
			$$css: !0
		}
	}, D = {
		icon: {
			width: "xvy4d1p",
			fill: "x117rol3",
			$$css: !0
		},
		iconButton: {
			color: "xhslqc4",
			$$css: !0
		},
		chatlistFilterEnabled: {
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		listSearch: {
			position: "x1n2onr6",
			zIndex: "x11uqc5h",
			boxSizing: "x9f619",
			display: "x78zum5",
			flex: "x1okw0bk",
			alignItems: "x6s0dn4",
			height: "xdj0cbh",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1iw51ew",
			backgroundColor: "x1280gxy",
			borderBottomWidth: "x1qhh985",
			borderBottomStyle: "x1sy0etr",
			$$css: !0
		},
		container: {
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			alignItems: "x7a106z",
			marginBottom: "x4tpdpg",
			$$css: !0
		}
	}, x = n("$InternalEnum").Mirrored([
		"CHAT_MSG_SEARCH",
		"NEW_CHAT_CONTACT_SEARCH",
		"FORWARD_MSG_SEARCH",
		"NEWSLETTER_SEARCH"
	]), $ = [
		x.CHAT_MSG_SEARCH,
		x.NEW_CHAT_CONTACT_SEARCH,
		x.NEWSLETTER_SEARCH
	], P = function() {};
	function N(e) {
		var t = o("react-compiler-runtime").c(14), n = e.icon, r = e.iconContainerClass, a = e.kind, i = e.label, l = e.onClick, s = "chat_filter_" + (a || ""), u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = { className: "x9f619 x78zum5 x6s0dn4 x193iq5w x16ovd2e x1evaxtz x12xbjc7 xb0esv5 x6ikm8r x10wlt62 xhslqc4 x1ypdohk" }, t[0] = u) : u = t[0];
		var c;
		t[1] !== n || t[2] !== r ? (c = b.jsx("div", {
			className: r,
			children: n
		}), t[1] = n, t[2] = r, t[3] = c) : c = t[3];
		var d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x150mmf0 x1f6kntn x1o2sk6j" }, t[4] = d) : d = t[4];
		var m;
		t[5] !== i ? (m = b.jsx("div", babelHelpers.extends({}, d, { children: i })), t[5] = i, t[6] = m) : m = t[6];
		var p;
		t[7] !== c || t[8] !== m ? (p = b.jsxs("div", babelHelpers.extends({}, u, { children: [c, m] })), t[7] = c, t[8] = m, t[9] = p) : p = t[9];
		var _;
		return t[10] !== s || t[11] !== l || t[12] !== p ? (_ = b.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			action: l,
			testid: s,
			children: p
		}), t[10] = s, t[11] = l, t[12] = p, t[13] = _) : _ = t[13], _;
	}
	function M(e) {
		var t = o("react-compiler-runtime").c(27), n = e.updateSearchFilter, a = [], i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = b.jsx(o("WAWebSearchUnreadIcon.react").SearchUnreadIcon, { iconXstyle: D.icon }), t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var u;
		if (t[2] !== n ? (u = b.jsx(N, {
			icon: i,
			kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
			label: l,
			onClick: function() {
				return n({ kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD });
			}
		}, "unread"), t[2] = n, t[3] = u) : u = t[3], a.push(u), o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
			var c;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = b.jsx(r("WDSIconIcPerson.react"), { iconXstyle: D.icon }), t[4] = c) : c = t[4];
			var d;
			t[5] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
				/*BTDS*/
				""
			), t[5] = d) : d = t[5];
			var m;
			t[6] !== n ? (m = b.jsx(N, {
				icon: c,
				kind: o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
				label: d,
				onClick: function() {
					return n({ kind: o("WAWebChatSearchFilters").SearchFilters.FAVORITES });
				}
			}, "favorites"), t[6] = n, t[7] = m) : m = t[7], a.push(m);
		}
		var p = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled;
		if (p) {
			var _, f;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (_ = b.jsx(r("WDSIconWdsIcTransferOwnership.react"), { iconXstyle: D.icon }), f = "x1n2onr6 x1xf60ip", t[8] = _, t[9] = f) : (_ = t[8], f = t[9]);
			var g;
			t[10] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
				/*BTDS*/
				""
			), t[10] = g) : g = t[10];
			var h;
			t[11] !== n ? (h = b.jsx(N, {
				icon: _,
				iconContainerClass: f,
				kind: o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU,
				label: g,
				onClick: function() {
					return n({ kind: o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU });
				}
			}, "assigned-to-you"), t[11] = n, t[12] = h) : h = t[12], a.push(h);
		}
		if (o("WAWebListsLabelGatingUtils").smartFiltersEnabled()) {
			var y;
			t[13] === Symbol.for("react.memo_cache_sentinel") ? (y = b.jsx(r("WDSIconIcPerson.react"), { iconXstyle: D.icon }), t[13] = y) : y = t[13];
			var C;
			t[14] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
				/*BTDS*/
				""
			), t[14] = C) : C = t[14];
			var v;
			t[15] !== n ? (v = b.jsx(N, {
				icon: y,
				kind: o("WAWebChatSearchFilters").SearchFilters.CONTACT,
				label: C,
				onClick: function() {
					return n({ kind: o("WAWebChatSearchFilters").SearchFilters.CONTACT });
				}
			}, "contact"), t[15] = n, t[16] = v) : v = t[16];
			var S;
			t[17] === Symbol.for("react.memo_cache_sentinel") ? (S = b.jsx(o("WAWebNonContactsIcon.react").NonContactsIcon, { iconXstyle: D.icon }), t[17] = S) : S = t[17];
			var R;
			t[18] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
				/*BTDS*/
				""
			), t[18] = R) : R = t[18];
			var L;
			t[19] !== n ? (L = b.jsx(N, {
				icon: S,
				kind: o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT,
				label: R,
				onClick: function() {
					return n({ kind: o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT });
				}
			}, "non_contact"), t[19] = n, t[20] = L) : L = t[20], a.push(v, L);
		}
		var E;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (E = b.jsx(r("WDSIconWdsIcCommunities.react"), {
			height: 24,
			width: 24,
			iconXstyle: D.icon
		}), t[21] = E) : E = t[21];
		var k;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), t[22] = k) : k = t[22];
		var I;
		t[23] !== n ? (I = b.jsx(N, {
			icon: E,
			kind: o("WAWebChatSearchFilters").SearchFilters.GROUP,
			label: k,
			onClick: function() {
				return n({ kind: o("WAWebChatSearchFilters").SearchFilters.GROUP });
			}
		}, "group"), t[23] = n, t[24] = I) : I = t[24], a.push(I);
		var T;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x889kno xsfy40s x1a8lsjc x13jy36j x14ug900" }, t[25] = T) : T = t[25];
		var x;
		return t[26] === Symbol.for("react.memo_cache_sentinel") ? (x = b.createElement("div", babelHelpers.extends({}, T, { key: "chat_filter_kind_header" }), s._(
			/*BTDS*/
			""
		)), t[26] = x) : x = t[26], [x].concat(a);
	}
	function w(e) {
		var t = o("react-compiler-runtime").c(11), n = e.active, r = e.onClick, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebConnModel").Conn.isSMB ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "xdj266r xqf2s3x xat24cr x150mmf0" }, t[1] = l) : l = t[1];
		var u;
		t[2] !== n ? (u = {
			0: "x23j0i4 xd7y6wv xhslqc4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
			1: "x23j0i4 xd7y6wv x1c9tyrk xeusxvb x1pahc9y x1ertn4p x67lv5d xa9qhua"
		}[!!n << 0], t[2] = n, t[3] = u) : u = t[3];
		var c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = b.jsx(o("WAWebFilterIcon.react").FilterIcon, {
			height: 20,
			width: 20
		}), t[4] = c) : c = t[4];
		var d;
		t[5] !== u ? (d = b.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			className: u,
			justify: "center",
			children: c
		}), t[5] = u, t[6] = d) : d = t[6];
		var m;
		return t[7] !== n || t[8] !== r || t[9] !== d ? (m = b.jsx("button", babelHelpers.extends({
			"aria-label": i,
			"aria-pressed": n,
			"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
			onClick: r,
			title: i
		}, l, { children: d })), t[7] = n, t[8] = r, t[9] = d, t[10] = m) : m = t[10], m;
	}
	function A(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, h), l = i.loading, C = l === void 0 ? !1 : l, v = i.ariaLabel, N = i.placeholder, A = i.spellCheck, F = i.listFilterEnabled, O = F === void 0 ? !1 : F, B = i.onSearch, W = i.type, q = i.showPlaceholderUntilType, U = q === void 0 ? !1 : q, V = i.filterSession, H = i.chatlistFilterEnabled, G = H === void 0 ? !1 : H, z = i.mode, j = z === void 0 ? r("WAWebChatlistPanelMode").Chatlist : z, K = i.actionElem, Q = i.focusOnMount, X = Q === void 0 ? !1 : Q, Y = i.inboxFiltersEnabled, J = Y === void 0 ? !1 : Y, Z = i.inboxFilter, ee = i.showJumpToDateButton, te = i.onJumpToDateButtonClicked, ne = i.onBackButton, re = i.onSearchInputFocus, oe = i.handleKeyDown, ae = i.usernameSearchEnabled, ie = ae === void 0 ? !1 : ae, le = i.searchZeroStateAllowed, se = le === void 0 ? !1 : le, ue = i.askMetaAiButtonAllowed, ce = ue === void 0 ? !1 : ue, de = E(null), me = E(null), pe = E(null), _e = k(""), fe = _e[0], ge = _e[1], he = k(null), ye = he[0], Ce = he[1], be = k(!1), ve = be[0], Se = be[1], Re = k(null), Le = Re[0], Ee = Re[1], ke = I(), Ie = ke[1], Te = o("WAWebUseRecentlySearchedChats").useRecentlySearchedChats(), De = Te.clearAllRecentSearches, xe = Te.recentChats, $e = E(null), Pe = E(null), Ne = (n = Z == null ? void 0 : Z.label) != null ? n : null, Me = J ? Z == null ? void 0 : Z.kind : ye, we = !!(Me || Ne), Ae = k(!1), Fe = Ae[0], Oe = Ae[1], Be = se && (ve || Fe) && !we && !fe && xe.length > 0 && o("WAWebSearchZeroStateGatingUtils").isSearchZeroStateEnabled(), We = S(Be), qe = Be && We, Ue = function() {
			var e = de.current;
			!e || Le || ge("");
		}, Ve = r("useWAWebStableCallback")(function() {
			if (Ue(), j === r("WAWebChatlistPanelMode").Chatlist) {
				var t;
				(t = de.current) == null || t.blur(), Se(!1);
			}
			!G && !J ? (Ce(null), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ChatListSearch] handleCancel: clear (no filters)"]))), B("")) : (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[ChatListSearch] handleCancel: clear kind=",
				" label=",
				""
			])), Me != null ? Me : "none", !!Ne), B("", {
				kind: Me,
				label: Ne
			})), o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER);
		}), He = k(null), Ge = He[0], ze = He[1];
		o("useWAWebListener").useListener(Ge, "keydown", function(e) {
			e.keyCode === r("Keys").ESC && (e.target instanceof HTMLInputElement || (e.stopPropagation(), Ve()));
		}), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "new_msg_sent", function() {
			we && Ve();
		}), R(function() {
			if (!(!ve || fe || we)) {
				var e = me.current;
				(!e || !e.contains(e.ownerDocument.activeElement)) && Ve();
			}
		}, [
			fe,
			we,
			ve,
			Ve
		]), R(function() {
			ve && !fe && !we && o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.nullStateShow(xe.length);
		}, [
			we,
			ve,
			xe.length,
			fe
		]), r("useWAWebOnUnmount")(Ve);
		var je = E(null), Ke = o("useWAWebTimeout").useManualTimeout(function() {
			var e, t = je.current;
			je.current = null;
			var n = (e = $e.current) == null || e.getElement == null ? void 0 : e.getElement();
			if (n != null && t instanceof HTMLElement && n.contains(t)) {
				Oe(!0), Se(!1);
				return;
			}
			fe || o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER), Se(!1);
		}), Qe = Ke[0], Xe = Ke[1], Ye = function(t) {
			t.relatedTarget != null && (Lt.current || (je.current = t.relatedTarget, Qe(0)));
		}, Je = function() {
			Oe(!1);
		}, Ze = function(t) {
			if (t.keyCode === r("Keys").DOWN && qe) {
				var e;
				(e = $e.current) == null || e.focus(), Oe(!0), t.preventDefault();
				return;
			}
			return oe == null || oe(t), t.keyCode !== r("Keys").ESC ? !1 : (Ve(), !0);
		}, et = function(t) {
			t.keyCode === r("Keys").RETURN && (i.onEnter == null || i.onEnter(t)), t.keyCode === r("Keys").ESC && t.stopPropagation(), Ze(t);
		}, tt = function() {
			o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER);
		}, nt = function(t) {
			var e = typeof t == "string" ? t : t.text;
			ge(e), e && o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.searchStart(i.tsSurface, o("WAWebWamEnumSearchUjCriteriaType").SEARCH_UJ_CRITERIA_TYPE.TEXT_MATCH_FILTER), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"[ChatListSearch] handleChange: text=",
				" label=",
				" kind=",
				""
			])), !!e, !!Ne, Me != null ? Me : "none"), Ie(function() {
				B(e, {
					label: Ne,
					kind: Me
				});
			});
		}, rt = function() {
			Ee(null);
		}, ot = function(t) {
			var e, n;
			Le && rt(), Ce((e = t.kind) != null ? e : null), V && o("WAWebFilterLogging").logSelectFilterEvent(V.sessionId, t), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"[ChatListSearch] updateSearchFilter: text=",
				" kind=",
				" label=",
				""
			])), !!fe, (n = t.kind) != null ? n : "none", !!t.label), B(fe, t);
		}, at = function() {
			var e;
			Xe();
			var t = Pe.current;
			t && (t.style.display = ""), (e = de.current) == null || e.focus(), Se(!0), Oe(!1);
		}, it = function() {
			Xe(), j === r("WAWebChatlistPanelMode").Chatlist || W === x.FORWARD_MSG_SEARCH ? (o("WAWebMessageYourselfMetricUtils").UiMessageYourselfSearchAction.startSession(), o("WAWebMessageYourselfMetricUtils").UiMessageYourselfSearchAction.searchBarPressed()) : W === x.NEW_CHAT_CONTACT_SEARCH && o("WAWebMessageYourselfMetricUtils").UiMessageYourselfNewChatAction.searchBarPressed(), at(), re == null || re(), o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.searchCtaClicked(i.tsSurface);
		}, lt = function(t) {
			V && o("WAWebFilterLogging").logOpenFilterEvent(V.newSessionId()), t.stopPropagation();
			var e = function(t) {
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[ChatListSearch] showFilterSelector: label filter"]))), ot({
					label: t,
					kind: o("WAWebChatSearchFilters").SearchFilters.LABELS
				});
			};
			Ee({
				menu: b.jsxs(b.Fragment, { children: [W !== x.CHAT_MSG_SEARCH ? b.jsx(M, { updateSearchFilter: ot }) : null, b.jsx(r("WAWebChatListFilterLabelsDropdownMenu.react"), { updateSearchFilter: e })] }),
				anchor: t.target
			});
		}, st = function(t) {
			if (we) {
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[ChatListSearch] handleChatlistFilterButtonClick: clear"]))), ot({
					kind: null,
					label: null
				});
				return;
			}
			if (!o("WAWebConnModel").Conn.isSMB) {
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[ChatListSearch] handleChatlistFilterButtonClick: UNREAD"]))), ot({ kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD });
				return;
			}
			lt(t);
		}, ut = function() {
			var e = de.current;
			return e == null ? !1 : e.selectionEnd === e.value.length;
		}, ct = function() {
			var e;
			(e = de.current) == null || e.select();
		}, dt = function() {
			o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[ChatListSearch] clearFilter: clear"]))), ot({
				kind: null,
				label: null
			});
		}, mt = function() {
			return pe;
		}, pt = function() {
			return ve;
		}, _t = function() {
			var e = Pe.current;
			e && (e.style.display = "none"), Se(!1), Oe(!1);
		};
		L(a, function() {
			return {
				cursorIsAtEnd: ut,
				select: ct,
				focus: at,
				clearSearch: Ue,
				clearFilter: dt,
				dismissZeroState: _t,
				getCalendarElementRef: mt,
				hasFocus: pt
			};
		});
		var ft;
		ve && (ft = b.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ListSearch",
			escapable: !0,
			requestDismiss: Ve,
			requestFocus: at,
			requestRecentFocusOnUnmount: !1,
			uimState: o("WAWebUim").UIMState.PASSIVE
		}));
		var gt = (y || (y = r("stylex")))([
			D.listSearch,
			G && D.chatlistFilterEnabled,
			(j === r("WAWebChatlistPanelMode").Chatlist || j === r("WAWebChatlistPanelMode").CallsTab) && D.container
		]), ht = !fe && (U || !ve || we || j === r("WAWebChatlistPanelMode").CommandPalette), yt = null;
		ht && (N != null ? yt = N : j === r("WAWebChatlistPanelMode").Chatlist && (W == null || !$.includes(W)) && Me == null ? yt = ce && o("WAWebBotGating").isAiSearchAskButtonEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : j === r("WAWebChatlistPanelMode").CommandPalette ? yt = s._(
			/*BTDS*/
			""
		) : j === r("WAWebChatlistPanelMode").CallsTab ? yt = ie ? r("WAWebFbtCommon")("Search name, number or @username") : r("WAWebFbtCommon")("Search name or number") : Ne != null ? yt = s._(
			/*BTDS*/
			"",
			[s._param("labelName", o("WAWebLabelCollection").LabelCollection.assertGet(Ne).name)]
		) : Me === o("WAWebChatSearchFilters").SearchFilters.GROUP ? yt = J ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : Me === o("WAWebChatSearchFilters").SearchFilters.UNREAD ? yt = s._(
			/*BTDS*/
			""
		) : Me === o("WAWebChatSearchFilters").SearchFilters.LABELS ? yt = s._(
			/*BTDS*/
			""
		) : Me === o("WAWebChatSearchFilters").SearchFilters.FAVORITES ? yt = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : Me === o("WAWebChatSearchFilters").SearchFilters.BROADCAST ? yt = s._(
			/*BTDS*/
			""
		) : Me === o("WAWebChatSearchFilters").SearchFilters.CONTACT ? yt = J ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : Me === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT ? yt = s._(
			/*BTDS*/
			""
		) : Me === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU ? yt = s._(
			/*BTDS*/
			""
		) : yt = r("WAWebFbtCommon")("Search"));
		var Ct = ce && fe.trim().length > 0 && !we && o("WAWebBotGating").isAiSearchAskButtonEnabled(), bt = function() {
			var e = fe.trim();
			e.length !== 0 && (o("WAWebBotFrontendUtils").sendMetaBotQuery(e, o("WAWebChatEntryPoint").ChatEntryPoint.MetaAISearchAskButton).catch(function(e) {
				o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Failed to send Meta AI query"]))).catching(r("getErrorSafe")(e)).sendLogs("meta-ai-search-ask-fail");
			}), Ve());
		}, vt = Ct ? {
			kind: "chip",
			props: {
				Icon: r("WDSIconWdsIcLogoMetaAiColor.react"),
				label: s._(
					/*BTDS*/
					""
				),
				isNeutral: !0,
				onPress: bt,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH,
				testid: "ask-meta-ai-pill",
				"aria-label": s._(
					/*BTDS*/
					""
				)
			}
		} : void 0, St = function(t, n) {
			o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.nullStateItemClick(o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.RECENT_SEARCH_INDIVIDUAL_SUGGESTION, n, xe.length), o("WAWebChatlistUtils").openExistingChat(t.id).then(function() {
				o("WAWebCmd").Cmd.scrollToActiveChat(), Ve();
			});
		}, Rt = function() {
			o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.recentSearchesClearAllClick(), De();
		}, Lt = E(!1), Et = function(t) {
			Lt.current = t;
		};
		return b.jsxs(b.Fragment, { children: [b.jsxs("div", {
			className: gt,
			"data-testid": "chat-list-search-container",
			ref: me,
			children: [
				ee === !0 && b.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconWdsIcCalendarSearch.react"),
					xstyle: [
						T.marginInlineEnd10,
						T.marginTop7,
						D.iconButton
					],
					onPress: te != null ? te : P,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					variant: "borderless"
				}),
				b.jsx("div", {
					ref: ze,
					className: "x1n2onr6 x9f619 x98rzlu x1plvlek xryxfnj",
					children: b.jsx("div", {
						className: "x1gxa6cn xa0aww2",
						children: b.jsx(r("WDSSearchBar.react"), {
							autoFocus: X,
							ref: de,
							endAccessory: vt,
							testid: W === x.CHAT_MSG_SEARCH ? "chat_thread_message_search_bar" : "chat_list_search_bar",
							gpuAnimationEnabled: o("WAWebABProps").getABPropConfigValue("web_anr_spinner_gpu_animation"),
							hintText: ht ? String(yt) : "",
							loading: C,
							onBlur: Ye,
							onClear: tt,
							onFocus: it,
							onKeyDown: et,
							onValueChange: nt,
							tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH,
							value: fe
						})
					})
				}),
				G && b.jsx(w, {
					active: we,
					onClick: st
				}),
				K,
				ft
			]
		}), b.jsx("div", {
			ref: Pe,
			children: b.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "ai-search-suggestions",
				children: qe ? b.jsx(r("WAWebSearchZeroState.react"), {
					onBlur: Je,
					recentChats: xe,
					onChatClick: St,
					onClearAll: Rt,
					onKeyDown: oe,
					onSearchFocus: at,
					onSetShowingClearConfirmation: Et,
					ref: $e
				}) : null
			})
		})] });
	}
	A.displayName = A.name + " [from " + i.id + "]";
	var F = A;
	l.ListSearchType = x, l.ListSearch = F;
}), 226);
