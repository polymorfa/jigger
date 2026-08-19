__d("WAWebEmptyState.react", [
	"fbt",
	"$InternalEnum",
	"CometHeroHoldTrigger.react",
	"WAWebABProps",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebAddToFavoritesModalLoadable",
	"WAWebArchivedFlowLoadable",
	"WAWebButton.react",
	"WAWebChatSearchFilters",
	"WAWebDrawerManager",
	"WAWebDrawerManagerGlobalContext",
	"WAWebEmojiText.react",
	"WAWebEmptyBlockedIcon.react",
	"WAWebFavoriteCollection",
	"WAWebFbtCommon",
	"WAWebFilterLogging",
	"WAWebInboxFiltersGatingUtils",
	"WAWebL10NIsUsingSupportedBritishEnglishLocale",
	"WAWebLabelCollection",
	"WAWebLabelFilledIcon.react",
	"WAWebListsGatingUtils",
	"WAWebModalManager",
	"WAWebNewGroupFlowLoadable",
	"WAWebNoop",
	"WAWebSpinner.react",
	"WAWebTabOrder",
	"WAWebUnstyledButton.react",
	"WAWebWdsIllFavoritesIcon.react",
	"WAWebWdsIllMakeGroupIcon.react",
	"WAWebWdsPictoSuccessTickIcon.react",
	"WDSIconIcArchive.react",
	"WDSIllustrationWdsIllMakeGroup.react",
	"WDSIllustrationWdsIllReadChatsTick.react",
	"WDSIllustrationWdsPictoArchive.react",
	"WDSIllustrationWdsPictoMessageReportAndroid.react",
	"WDSIllustrationWdsPictoStar.react",
	"WDSIllustrationWdsPictoUserBlock.react",
	"WDSMargins.stylex",
	"WDSTextLayout.react",
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useEffect;
	function m() {
		return o("WAWebABProps").getABPropConfigValue("empty_unread_filter_cta_variant") !== 0;
	}
	function p() {
		return o("WAWebABProps").getABPropConfigValue("empty_unread_filter_cta_variant") === 1;
	}
	var _ = n("$InternalEnum")({
		Compact: "compact",
		LabelFilter: "label-filter",
		FavoritesFilter: "favorites-filter",
		GroupsFilter: "groups-filter",
		UnreadFilter: "unread-filter"
	}), f = {
		empty: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			height: "x5yr21d",
			paddingTop: "x13crsa5",
			paddingInlineEnd: "xx281p9",
			paddingBottom: "x1rxj1xn",
			paddingInlineStart: "x67w97k",
			color: "xhslqc4",
			textAlign: "x2b8uid",
			$$css: !0
		},
		emptyTop: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			justifyContent: "x1nhvcw1",
			height: "xt7dq6l",
			paddingTop: "x15uerrv",
			paddingInlineEnd: "xx281p9",
			paddingBottom: "x1j3kn9t",
			paddingInlineStart: "x67w97k",
			$$css: !0
		},
		compact: {
			paddingTop: "x889kno",
			paddingInlineEnd: "x1xnnf8n",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "x106a9eq",
			$$css: !0
		},
		title: {
			marginBottom: "x1c436fg",
			$$css: !0
		},
		text: {
			fontSize: "x1f6kntn",
			lineHeight: "x1fc57z9",
			color: "xhslqc4",
			$$css: !0
		},
		action: {
			display: "x1rg5ohu",
			fontSize: "x1f6kntn",
			lineHeight: "x1fc57z9",
			color: "xo1mcw5",
			$$css: !0
		},
		labelFilterTitle: {
			marginTop: "x98l61r",
			fontSize: "xngnso2",
			$$css: !0
		},
		labelFilterText: {
			marginTop: "x1xmf6yo",
			marginBottom: "x1hq5gj4",
			$$css: !0
		},
		labelIcon: {
			opacity: "xmdcrrr",
			$$css: !0
		},
		filterCtaTitle: {
			fontSize: "xngnso2",
			fontWeight: "x117nqv4",
			lineHeight: "x1evy7pa",
			color: "x14ug900",
			$$css: !0
		},
		filterCtaText: {
			color: "x14ug900",
			$$css: !0
		},
		emptyStarredWithNavbar: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		emptyStateContainer: {
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			height: "x5yr21d",
			justifyContent: "xl56j7k",
			overflowWrap: "xj0a0fe",
			paddingTop: "x1sk1jro",
			paddingBottom: "x1ci70gm",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		noFilteredChats: {
			overflowWrap: "xj0a0fe",
			$$css: !0
		},
		unreadIconInner: {
			fill: "x1ss2flk",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(18), a = t.children, i = t.icon, l = t.onClick, s = t.testid, u = t.text, d = t.theme, m = t.title, p = t.xstyle, g;
		n[0] !== s || n[1] !== d || n[2] !== m ? (g = m != null && m !== "" ? c.jsx("div", babelHelpers.extends({ "data-testid": s }, (e || (e = r("stylex"))).props(f.title, d === _.LabelFilter && f.labelFilterTitle, (d === _.FavoritesFilter || d === _.GroupsFilter || d === _.UnreadFilter) && [
			f.filterCtaTitle,
			o("WDSMargins.stylex").wdsMargins.marginTop24,
			o("WDSMargins.stylex").wdsMargins.marginBottom0
		]), { children: m })) : null, n[0] = s, n[1] = d, n[2] = m, n[3] = g) : g = n[3];
		var h = g, y;
		n[4] !== s || n[5] !== u || n[6] !== d ? (y = u != null && u !== "" ? c.jsx("div", babelHelpers.extends({ "data-testid": s }, (e || (e = r("stylex"))).props(f.text, d === _.LabelFilter && f.labelFilterText, (d === _.FavoritesFilter || d === _.GroupsFilter || d === _.UnreadFilter) && [f.filterCtaText, o("WDSMargins.stylex").wdsMargins.marginTop8]), { children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: u }) })) : null, n[4] = s, n[5] = u, n[6] = d, n[7] = y) : y = n[7];
		var C = y, b;
		n[8] !== d || n[9] !== p ? (b = (e || (e = r("stylex")))(f.empty, p, d === _.Compact && f.compact, (d === _.FavoritesFilter || d === _.GroupsFilter || d === _.UnreadFilter) && f.emptyTop), n[8] = d, n[9] = p, n[10] = b) : b = n[10];
		var v = b, S;
		return n[11] !== a || n[12] !== v || n[13] !== i || n[14] !== l || n[15] !== C || n[16] !== h ? (S = c.jsxs("div", {
			className: v,
			onClick: l,
			children: [
				i,
				h,
				C,
				a
			]
		}), n[11] = a, n[12] = v, n[13] = i, n[14] = l, n[15] = C, n[16] = h, n[17] = S) : S = n[17], S;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(10), n = e.onAddBlockedContact, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var u = l, d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsx("div", {
			className: "x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xl0us3e xa0zjtf xzbmw64 xg6s713 x1p9h2j9 x1amiio9 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
			children: c.jsx(o("WAWebEmptyBlockedIcon.react").EmptyBlockedIcon, {})
		}), t[2] = d) : d = t[2];
		var m = d;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var p;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i" }, t[3] = p) : p = t[3];
			var _;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = c.jsx(r("WDSIllustrationWdsPictoUserBlock.react"), {}), t[4] = _) : _ = t[4];
			var f;
			t[5] !== n ? (f = n != null ? {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: n,
				variant: "filled"
			} : void 0, t[5] = n, t[6] = f) : f = t[6];
			var h;
			return t[7] !== f ? (h = c.jsx("div", babelHelpers.extends({ "data-testid": "add-blocked-container" }, p, { children: c.jsx(r("WDSTextLayout.react"), {
				headline: i,
				body: u,
				illustration: _,
				actionsWidth: "hug",
				primaryAction: f,
				testid: "add-blocked-description"
			}) })), t[7] = f, t[8] = h) : h = t[8], h;
		}
		var y;
		return t[9] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsx(g, {
			icon: m,
			title: i,
			text: u,
			testid: "add-blocked-description"
		}), t[9] = y) : y = t[9], y;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(5), n = e.onViewAllChats, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i = a;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var l;
			t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i" }, t[1] = l) : l = t[1];
			var u;
			return t[2] !== n ? (u = c.jsx("div", babelHelpers.extends({ "data-testid": "archived-empty-container" }, l, { children: n == null ? c.jsx(r("WDSTextLayout.react"), {
				headline: i,
				illustration: c.jsx(r("WDSIllustrationWdsPictoArchive.react"), {}),
				testid: "archived-empty"
			}) : c.jsx(r("WDSTextLayout.react"), {
				actionsWidth: "hug",
				headline: i,
				illustration: c.jsx(r("WDSIllustrationWdsPictoArchive.react"), {}),
				primaryAction: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: n,
					variant: "borderless"
				},
				testid: "archived-empty"
			}) })), t[2] = n, t[3] = u) : u = t[3], u;
		}
		var d;
		if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
			var m = c.jsx("div", {
				className: "x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xl0us3e xa0zjtf xzbmw64 xg6s713 x1p9h2j9 x1amiio9 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
				children: c.jsx(r("WDSIconIcArchive.react"), {})
			});
			d = c.jsx(g, {
				icon: m,
				title: i,
				testid: "archived-empty"
			}), t[4] = d;
		} else d = t[4];
		return d;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(10), n = e.testid, a = e.text;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var i = n + "-container", l;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i" }, t[0] = l) : l = t[0];
			var s;
			t[1] !== n || t[2] !== a ? (s = c.jsx(r("WDSTextLayout.react"), {
				headline: a,
				testid: n
			}), t[1] = n, t[2] = a, t[3] = s) : s = t[3];
			var u;
			return t[4] !== i || t[5] !== s ? (u = c.jsx("div", babelHelpers.extends({ "data-testid": i }, l, { children: s })), t[4] = i, t[5] = s, t[6] = u) : u = t[6], u;
		}
		var d;
		return t[7] !== n || t[8] !== a ? (d = c.jsx(g, {
			xstyle: f.emptyTop,
			text: a,
			testid: n
		}), t[7] = n, t[8] = a, t[9] = d) : d = t[9], d;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(16), n = e.hasFilter, a = e.noResultsText, i = e.onClearFilter, l = n === void 0 ? !1 : n, u = i === void 0 ? r("WAWebNoop") : i, d;
		t[0] !== a ? (d = a != null ? a : v(), t[0] = a, t[1] = d) : d = t[1];
		var m = d;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var p;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i" }, t[2] = p) : p = t[2];
			var _;
			t[3] !== l || t[4] !== u ? (_ = l ? {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					u();
				},
				variant: "borderless",
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
				testid: "clear-filter"
			} : void 0, t[3] = l, t[4] = u, t[5] = _) : _ = t[5];
			var h;
			return t[6] !== _ || t[7] !== m ? (h = c.jsx("div", babelHelpers.extends({ "data-testid": "search-no-chats-or-contacts-container" }, p, { children: c.jsx(r("WDSTextLayout.react"), {
				headline: m,
				actionsWidth: "hug",
				primaryAction: _,
				testid: "search-no-chats-or-contacts"
			}) })), t[6] = _, t[7] = m, t[8] = h) : h = t[8], h;
		}
		var y = l ? m : void 0, C = l ? void 0 : m, b;
		t[9] !== l || t[10] !== u ? (b = l && c.jsx(r("WAWebUnstyledButton.react"), {
			dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
			testid: "clear-filter",
			onClick: u,
			xstyle: f.action,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[9] = l, t[10] = u, t[11] = b) : b = t[11];
		var S;
		return t[12] !== y || t[13] !== C || t[14] !== b ? (S = c.jsx(g, {
			xstyle: f.emptyTop,
			title: y,
			text: C,
			testid: "search-no-chats-or-contacts",
			children: b
		}), t[12] = y, t[13] = C, t[14] = b, t[15] = S) : S = t[15], S;
	}
	function v() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function S() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, {
			xstyle: o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? f.emptyStateContainer : f.emptyTop,
			text: R(),
			testid: "searching-chats-contacts-messages"
		}), e[0] = t) : t = e[0], t;
	}
	function R() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function L() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, {
			xstyle: f.emptyTop,
			text: s._(
				/*BTDS*/
				""
			),
			testid: "searching-messages"
		}), e[0] = t) : t = e[0], t;
	}
	function E() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(C, {
			testid: "search-no-contacts",
			text: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0], t;
	}
	function k() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(C, {
			testid: "search-no-results-without-keyword",
			text: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0], t;
	}
	function I(e) {
		var t = o("react-compiler-runtime").c(4), n = e.keyword, r;
		t[0] !== n ? (r = s._(
			/*BTDS*/
			"",
			[s._param("keyword", n)]
		), t[0] = n, t[1] = r) : r = t[1];
		var a;
		return t[2] !== r ? (a = c.jsx(C, {
			testid: "search-no-results-without-keyword",
			text: r
		}), t[2] = r, t[3] = a) : a = t[3], a;
	}
	function T() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, {
			xstyle: f.emptyTop,
			text: s._(
				/*BTDS*/
				""
			),
			testid: "searching-non-contact"
		}), e[0] = t) : t = e[0], t;
	}
	function D(e) {
		var t = o("react-compiler-runtime").c(6), n = e.xstyle, r;
		t[0] !== n ? (r = [f.emptyTop, n], t[0] = n, t[1] = r) : r = t[1];
		var a;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx("div", {
			className: "xdqhqc9",
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				size: 24,
				stroke: 6,
				color: "highlight"
			})
		}), t[2] = a) : a = t[2];
		var i;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			element: "div",
			xstyle: f.text,
			text: s._(
				/*BTDS*/
				""
			)
		}), t[3] = i) : i = t[3];
		var l;
		return t[4] !== r ? (l = c.jsxs(g, {
			xstyle: r,
			testid: "searching-non-contact-with-spinner",
			children: [a, i]
		}), t[4] = r, t[5] = l) : l = t[5], l;
	}
	function x(e) {
		var t = o("react-compiler-runtime").c(6), n = e.error, a = e.onClick, i;
		t[0] !== n.retryStr || t[1] !== a ? (i = n.retryStr != null ? c.jsx(r("WAWebUnstyledButton.react"), {
			dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
			testid: "retry-search",
			onClick: a,
			xstyle: f.action,
			children: n.retryStr
		}) : null, t[0] = n.retryStr, t[1] = a, t[2] = i) : i = t[2];
		var l = i, s;
		return t[3] !== n.text || t[4] !== l ? (s = c.jsx(g, {
			xstyle: f.emptyTop,
			title: n.text,
			testid: "search-non-contacts",
			children: l
		}), t[3] = n.text, t[4] = l, t[5] = s) : s = t[5], s;
	}
	function $() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(C, {
			testid: "search-no-groups",
			text: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0], t;
	}
	function P() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(C, {
			testid: "search-no-messages",
			text: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0], t;
	}
	function N() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, {
			xstyle: f.emptyTop,
			text: s._(
				/*BTDS*/
				""
			),
			testid: "search-results-unavailable"
		}), e[0] = t) : t = e[0], t;
	}
	function M() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, {
			text: w(),
			testid: "no-chats"
		}), e[0] = t) : t = e[0], t;
	}
	function w() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function A(e) {
		var t = o("react-compiler-runtime").c(5), n = e.catalogLoadError, r = e.hasCatalog, a = n === void 0 ? !1 : n, i = r === void 0 ? !0 : r, l;
		if (i) {
			var u;
			if (t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
				/*BTDS*/
				""
			), t[0] = u) : u = t[0], l = u, a) {
				var d;
				t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
					/*BTDS*/
					""
				), t[1] = d) : d = t[1], l = d;
			}
		} else {
			var m;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
				/*BTDS*/
				""
			), t[2] = m) : m = t[2], l = m;
		}
		var p;
		return t[3] !== l ? (p = c.jsx(g, {
			text: l,
			testid: "no-products"
		}), t[3] = l, t[4] = p) : p = t[4], p;
	}
	function F(e) {
		var t = e.chatName, n = e.isGroup, r = e.isMessageYourselfChat, o = r ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("chatName", t)]
		), a = n ? s._(
			/*BTDS*/
			"",
			[s._param("chatName", t)]
		) : o;
		return c.jsx(g, {
			xstyle: f.emptyTop,
			text: a,
			testid: "chat-search-prompt"
		});
	}
	F.displayName = F.name + " [from " + i.id + "]";
	function O() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, {}), e[0] = t) : t = e[0], t;
	}
	function B() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "archived" } : c.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }));
	}
	function W() {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = s._(
			/*BTDS*/
			""
		), t[0] = n) : n = t[0];
		var a = n;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var i;
			t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i" }, t[1] = i) : i = t[1];
			var l;
			return t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsx("div", babelHelpers.extends({ "data-testid": "all-chats-archived-container" }, i, { children: c.jsx(r("WDSTextLayout.react"), {
				actionsWidth: "hug",
				headline: q(),
				illustration: c.jsx(r("WDSIllustrationWdsPictoArchive.react"), {}),
				primaryAction: {
					label: a,
					onPress: B,
					variant: "borderless"
				},
				testid: "all-chats-archived"
			}) })), t[2] = l) : l = t[2], l;
		}
		var u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = q(), t[3] = u) : u = t[3];
		var d;
		return t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsx(g, {
			title: u,
			testid: "all-chats-archived",
			children: c.jsx("div", babelHelpers.extends({
				"data-testid": "see-archived",
				role: "button",
				onClick: B
			}, (e || (e = r("stylex"))).props(f.action, o("WDSMargins.stylex").wdsMargins.marginVer8), { children: a }))
		}), t[4] = d) : d = t[4], d;
	}
	function q() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function U() {
		var e = o("react-compiler-runtime").c(4), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			""
		), e[0] = t) : t = e[0];
		var n = t;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var a;
			e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i x1280gxy" }, e[1] = a) : a = e[1];
			var i;
			return e[2] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx("div", babelHelpers.extends({ "data-testid": "no-starred-messages-container" }, a, { children: c.jsx(r("WDSTextLayout.react"), {
				headline: n,
				body: s._(
					/*BTDS*/
					""
				),
				illustration: c.jsx(r("WDSIllustrationWdsPictoStar.react"), {}),
				testid: "no-starred-messages"
			}) })), e[2] = i) : i = e[2], i;
		}
		var l;
		return e[3] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsx(g, {
			text: n,
			testid: "no-starred-messages",
			xstyle: f.emptyStarredWithNavbar
		}), e[3] = l) : l = e[3], l;
	}
	function V() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, { text: s._(
			/*BTDS*/
			""
		) }), e[0] = t) : t = e[0], t;
	}
	function H() {
		var e = o("react-compiler-runtime").c(4), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			""
		), e[0] = t) : t = e[0];
		var n = t;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var a;
			e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i" }, e[1] = a) : a = e[1];
			var i;
			return e[2] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx("div", babelHelpers.extends({ "data-testid": "sent-for-admin-review-container" }, a, { children: c.jsx(r("WDSTextLayout.react"), {
				headline: n,
				body: s._(
					/*BTDS*/
					""
				),
				illustration: c.jsx(r("WDSIllustrationWdsPictoMessageReportAndroid.react"), {}),
				testid: "sent-for-admin-review-empty"
			}) })), e[2] = i) : i = e[2], i;
		}
		var l;
		return e[3] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsx(g, { text: n }), e[3] = l) : l = e[3], l;
	}
	function G() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, {
			text: s._(
				/*BTDS*/
				""
			),
			testid: "no-media"
		}), e[0] = t) : t = e[0], t;
	}
	function z() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, {
			text: s._(
				/*BTDS*/
				""
			),
			testid: "no-links"
		}), e[0] = t) : t = e[0], t;
	}
	function j() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, {
			text: s._(
				/*BTDS*/
				""
			),
			testid: "no-docs"
		}), e[0] = t) : t = e[0], t;
	}
	function K(e) {
		var t = o("react-compiler-runtime").c(5), n = e.description, a = n === void 0 ? "Loading" : n, i;
		t[0] !== a ? (i = c.jsx(r("CometHeroHoldTrigger.react"), {
			description: a,
			hold: !0
		}), t[0] = a, t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsx(o("WAWebSpinner.react").Spinner, {
			size: 50,
			stroke: 4
		}), t[2] = l) : l = t[2];
		var s;
		return t[3] !== i ? (s = c.jsxs(g, { children: [i, l] }), t[3] = i, t[4] = s) : s = t[4], s;
	}
	function Q(e) {
		var t = o("react-compiler-runtime").c(9), n = e.description, a = e.text, i = n === void 0 ? "LoadingWithText" : n, l;
		t[0] !== i ? (l = c.jsx(r("CometHeroHoldTrigger.react"), {
			description: i,
			hold: !0
		}), t[0] = i, t[1] = l) : l = t[1];
		var s;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx("div", {
			className: "xdqhqc9",
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 4
			})
		}), t[2] = s) : s = t[2];
		var u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = "x1f6kntn x1fc57z9 xhslqc4", t[3] = u) : u = t[3];
		var d;
		t[4] !== a ? (d = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			element: "div",
			className: u,
			text: a
		}), t[4] = a, t[5] = d) : d = t[5];
		var m;
		return t[6] !== l || t[7] !== d ? (m = c.jsxs(g, { children: [
			l,
			s,
			d
		] }), t[6] = l, t[7] = d, t[8] = m) : m = t[8], m;
	}
	function X(e) {
		var t = o("react-compiler-runtime").c(5), n = e.labelId, r = o("WAWebLabelCollection").LabelCollection.get(n);
		if (!r) return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = "x1f6kntn x1fc57z9 xhslqc4", t[0] = a) : a = t[0];
		var i;
		t[1] !== n ? (i = Y(n), t[1] = n, t[2] = i) : i = t[2];
		var l;
		return t[3] !== i ? (l = c.jsx(g, { children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
			element: "div",
			className: a,
			text: i
		}) }), t[3] = i, t[4] = l) : l = t[4], l;
	}
	function Y(e) {
		var t = o("WAWebLabelCollection").LabelCollection.get(e);
		return t ? s._(
			/*BTDS*/
			"",
			[s._param("labelName", t.name)]
		) : null;
	}
	function J() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(g, {
			text: "No quick replies",
			testid: "no-quick-replies"
		}), e[0] = t) : t = e[0], t;
	}
	function Z(e, t) {
		var n, a, i, l, u, d = "clear-filter", g = o("WAWebABProps").getABPropConfigValue("wds_web_text_layout");
		switch (e) {
			case o("WAWebChatSearchFilters").SearchFilters.UNREAD:
				if (m()) {
					var h = ee(e, g);
					u = h.icon, l = h.theme, n = s._(
						/*BTDS*/
						""
					), i = s._(
						/*BTDS*/
						""
					), p() ? (d = "find-chat", a = s._(
						/*BTDS*/
						""
					)) : a = s._(
						/*BTDS*/
						""
					);
				} else o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() ? (n = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				)) : (n = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				));
				break;
			case o("WAWebChatSearchFilters").SearchFilters.FAVORITES:
				if (o("WAWebFavoriteCollection").FavoriteCollection.length === 0 && o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
					d = "add-favorite";
					var y = ee(e, g);
					u = y.icon, l = y.theme, n = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					), i = s._(
						/*BTDS*/
						""
					), a = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					);
				} else n = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebChatSearchFilters").SearchFilters.TO_YOU:
				n = s._(
					/*BTDS*/
					""
				), i = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebChatSearchFilters").SearchFilters.CONTACT:
				n = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebChatSearchFilters").SearchFilters.GROUP:
				if (o("WAWebABProps").getABPropConfigValue("wa_web_create_group_in_filter")) {
					d = "create-group";
					var C = ee(e, g);
					u = C.icon, l = C.theme, n = s._(
						/*BTDS*/
						""
					), i = s._(
						/*BTDS*/
						""
					), a = s._(
						/*BTDS*/
						""
					);
				} else n = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU:
				n = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebChatSearchFilters").SearchFilters.LABELS:
				if (o("WAWebListsGatingUtils").isListsEnabled()) {
					var b = r("isStringNullOrEmpty")(t) ? null : o("WAWebLabelCollection").LabelCollection.get(t);
					b == null ? n = s._(
						/*BTDS*/
						""
					) : n = s._(
						/*BTDS*/
						"",
						[s._param("list-name", b.name)]
					), a = s._(
						/*BTDS*/
						""
					);
				} else u = c.jsx(o("WAWebLabelFilledIcon.react").LabelFilledIcon, {
					height: 48,
					width: 48,
					iconXstyle: f.labelIcon
				}), l = _.LabelFilter, n = s._(
					/*BTDS*/
					""
				), i = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebChatSearchFilters").SearchFilters.COMMUNITY:
				var v = ee(e, g);
				u = v.icon, l = v.theme, n = s._(
					/*BTDS*/
					""
				), i = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING:
				n = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF:
				n = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					""
				);
				break;
			default: break;
		}
		return n == null || a == null ? null : {
			title: n,
			actionLabel: a,
			actionKind: d,
			paragraph: i,
			theme: l,
			icon: u
		};
	}
	function ee(e, t) {
		return e === o("WAWebChatSearchFilters").SearchFilters.UNREAD ? t ? { icon: c.jsx(r("WDSIllustrationWdsIllReadChatsTick.react"), {}) } : {
			icon: c.jsx(o("WAWebWdsPictoSuccessTickIcon.react").WdsPictoSuccessTickIcon, {
				width: 88,
				height: 88,
				innerStyles: { inner: f.unreadIconInner }
			}),
			theme: _.UnreadFilter
		} : e === o("WAWebChatSearchFilters").SearchFilters.FAVORITES ? t ? { icon: c.jsx(o("WAWebWdsIllFavoritesIcon.react").WdsIllFavoritesIcon, {}) } : {
			icon: c.jsx(o("WAWebWdsIllFavoritesIcon.react").WdsIllFavoritesIcon, { width: 180 }),
			theme: _.FavoritesFilter
		} : e === o("WAWebChatSearchFilters").SearchFilters.GROUP || e === o("WAWebChatSearchFilters").SearchFilters.COMMUNITY ? t ? { icon: c.jsx(r("WDSIllustrationWdsIllMakeGroup.react"), {}) } : {
			icon: c.jsx(o("WAWebWdsIllMakeGroupIcon.react").WdsIllMakeGroupIcon, {
				width: 197,
				height: 80
			}),
			theme: _.GroupsFilter
		} : {};
	}
	function te() {
		o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebAddToFavoritesModalLoadable").AddToFavoritesModalLoadable, { onClose: o("WAWebModalManager").closeModalManager }), { transition: "modal-flow" });
	}
	function ne() {
		var e;
		(e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")) == null || e.openDrawer(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
			descriptorType: "new_group",
			isSubFlow: !1
		} : c.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
			onEnd: o("WAWebDrawerManager").closeDrawerLeft,
			onCreateGroup: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield e, o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()
		}));
	}
	function re(e, t, n) {
		var r = function() {
			t(), n == null || n();
		}, o = function() {
			t();
		};
		return e === "add-favorite" ? te : e === "find-chat" ? r : e === "create-group" ? ne : e === "clear-filter" ? o : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function oe(e) {
		var t = o("react-compiler-runtime").c(40), n = e.filter, a = e.filterSession, i = e.onClearFilter, l = e.onShowSearch, s, u;
		t[0] !== n || t[1] !== a.sessionId ? (s = function() {
			o("WAWebFilterLogging").logEmptyStateViewedFilterEvent(a.sessionId, n);
		}, u = [n, a.sessionId], t[0] = n, t[1] = a.sessionId, t[2] = s, t[3] = u) : (s = t[2], u = t[3]), d(s, u);
		var m, p, h, y, C, b, v, S;
		if (t[4] !== n.kind || t[5] !== n.label || t[6] !== i || t[7] !== l) {
			b = Symbol.for("react.early_return_sentinel");
			e: {
				var R = n.kind != null ? Z(n.kind, n.label) : null;
				if (R == null) {
					b = null;
					break e;
				}
				m = R.actionKind, p = R.actionLabel, h = R.icon, y = R.paragraph, v = R.theme, S = R.title, C = re(m, i, l);
			}
			t[4] = n.kind, t[5] = n.label, t[6] = i, t[7] = l, t[8] = m, t[9] = p, t[10] = h, t[11] = y, t[12] = C, t[13] = b, t[14] = v, t[15] = S;
		} else m = t[8], p = t[9], h = t[10], y = t[11], C = t[12], b = t[13], v = t[14], S = t[15];
		if (b !== Symbol.for("react.early_return_sentinel")) return b;
		var L = C;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var E;
			t[16] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i" }, t[16] = E) : E = t[16];
			var k;
			t[17] !== m || t[18] !== p || t[19] !== L ? (k = {
				label: p,
				onPress: L,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
				testid: m,
				variant: "borderless"
			}, t[17] = m, t[18] = p, t[19] = L, t[20] = k) : k = t[20];
			var I;
			return t[21] !== h || t[22] !== y || t[23] !== k || t[24] !== S ? (I = c.jsx("div", babelHelpers.extends({ "data-testid": "no-filtered-chats-container" }, E, { children: c.jsx(r("WDSTextLayout.react"), {
				actionsWidth: "hug",
				body: y,
				headline: S,
				illustration: h,
				primaryAction: k,
				testid: "no-filtered-chats"
			}) })), t[21] = h, t[22] = y, t[23] = k, t[24] = S, t[25] = I) : I = t[25], I;
		}
		var T = v === _.FavoritesFilter || v === _.UnreadFilter || v === _.GroupsFilter, D = T ? void 0 : f.noFilteredChats, x;
		t[26] !== T ? (x = T ? [f.action, o("WDSMargins.stylex").wdsMargins.marginVer8] : f.action, t[26] = T, t[27] = x) : x = t[27];
		var $;
		t[28] !== m || t[29] !== p || t[30] !== L || t[31] !== x ? ($ = c.jsx(r("WAWebUnstyledButton.react"), {
			dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
			testid: m,
			onClick: L,
			xstyle: x,
			children: p
		}), t[28] = m, t[29] = p, t[30] = L, t[31] = x, t[32] = $) : $ = t[32];
		var P;
		return t[33] !== h || t[34] !== y || t[35] !== D || t[36] !== $ || t[37] !== v || t[38] !== S ? (P = c.jsx(g, {
			title: S,
			text: y,
			theme: v,
			icon: h,
			xstyle: D,
			testid: "no-filtered-chats",
			children: $
		}), t[33] = h, t[34] = y, t[35] = D, t[36] = $, t[37] = v, t[38] = S, t[39] = P) : P = t[39], P;
	}
	function ae(t) {
		var n = t.buttonText, a = t.center, i = t.onClick, l = t.testid, s = t.text, u = t.xstyle, d = c.jsx(g, {
			testid: l,
			text: s,
			xstyle: u,
			children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginTop4), { children: c.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
				onClick: i,
				testid: "empty-state-error-button",
				shadowOnHover: !1,
				children: n != null ? n : r("WAWebFbtCommon")("Try again")
			}) }))
		});
		return a ? d : c.jsx("div", { children: d });
	}
	ae.displayName = ae.name + " [from " + i.id + "]";
	function ie(e) {
		var t = e.center, n = e.testid, o = e.xstyle, a = c.jsx(g, {
			xstyle: o,
			text: r("WAWebFbtCommon")("No results found"),
			testid: n != null ? n : "no-search-results"
		});
		return t ? a : c.jsx("div", { children: a });
	}
	ie.displayName = ie.name + " [from " + i.id + "]";
	function le(e) {
		var t = o("react-compiler-runtime").c(4), n = e.testid, r = e.xstyle, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i = n != null ? n : "no-search-results", l;
		return t[1] !== i || t[2] !== r ? (l = c.jsx(g, {
			xstyle: r,
			text: a,
			testid: i
		}), t[1] = i, t[2] = r, t[3] = l) : l = t[3], l;
	}
	l.EmptyStateTheme = _, l.Empty = g, l.Blocked = h, l.Archived = y, l.Search = b, l.searchFbt = v, l.Searching = S, l.searchingFbt = R, l.SearchingMessages = L, l.SearchContacts = E, l.SearchWithoutKeyword = k, l.SearchWithKeyword = I, l.SearchingNonContact = T, l.SearchingNonContactWithSpinner = D, l.SearchingNonContactError = x, l.SearchGroups = $, l.SearchMessages = P, l.SearchMessagesUnavailable = N, l.ListChats = M, l.listChatsFbt = w, l.ListProducts = A, l.BeforeSearchMessages = F, l.ListStatus = O, l.AllArchived = W, l.allArchivedFbt = q, l.StarredMsgs = U, l.KeptMsgs = V, l.SentForAdminReview = H, l.MediaMsgs = G, l.LinkMsgs = z, l.DocMsgs = j, l.Loading = K, l.LoadingWithText = Q, l.NoResultForLabel = X, l.noResultForLabelFbt = Y, l.NoQuickReplies = J, l.getNoFilteredChatsStrings = Z, l.NoFilteredChats = oe, l.EmptyErrorStateWithButton = ae, l.NoSearchResults = ie, l.EnterPhoneNumberToStartChat = le;
}), 226);
