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
		var n = t.children, a = t.icon, i = t.onClick, l = t.testid, s = t.text, u = t.theme, d = t.title, m = t.xstyle, p = d != null && d !== "" ? c.jsx("div", babelHelpers.extends({ "data-testid": l }, (e || (e = r("stylex"))).props(f.title, u === _.LabelFilter && f.labelFilterTitle, (u === _.FavoritesFilter || u === _.GroupsFilter || u === _.UnreadFilter) && [
			f.filterCtaTitle,
			o("WDSMargins.stylex").wdsMargins.marginTop24,
			o("WDSMargins.stylex").wdsMargins.marginBottom0
		]), { children: d })) : null, g = s != null && s !== "" ? c.jsx("div", babelHelpers.extends({ "data-testid": l }, (e || (e = r("stylex"))).props(f.text, u === _.LabelFilter && f.labelFilterText, (u === _.FavoritesFilter || u === _.GroupsFilter || u === _.UnreadFilter) && [f.filterCtaText, o("WDSMargins.stylex").wdsMargins.marginTop8]), { children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: s }) })) : null, h = (e || (e = r("stylex")))(f.empty, m, u === _.Compact && f.compact, (u === _.FavoritesFilter || u === _.GroupsFilter || u === _.UnreadFilter) && f.emptyTop);
		return c.jsxs("div", {
			className: h,
			onClick: i,
			children: [
				a,
				p,
				g,
				n
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.onAddBlockedContact, n = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			""
		), i = c.jsx("div", {
			className: "x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xl0us3e xa0zjtf xzbmw64 xg6s713 x1p9h2j9 x1amiio9 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
			children: c.jsx(o("WAWebEmptyBlockedIcon.react").EmptyBlockedIcon, {})
		});
		return o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? c.jsx("div", {
			"data-testid": "add-blocked-container",
			className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i",
			children: c.jsx(r("WDSTextLayout.react"), {
				headline: n,
				body: a,
				illustration: c.jsx(r("WDSIllustrationWdsPictoUserBlock.react"), {}),
				actionsWidth: "hug",
				primaryAction: t != null ? {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: t,
					variant: "filled"
				} : void 0,
				testid: "add-blocked-description"
			})
		}) : c.jsx(g, {
			icon: i,
			title: n,
			text: a,
			testid: "add-blocked-description"
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.onViewAllChats, n = s._(
			/*BTDS*/
			""
		);
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) return c.jsx("div", {
			"data-testid": "archived-empty-container",
			className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i",
			children: t == null ? c.jsx(r("WDSTextLayout.react"), {
				headline: n,
				illustration: c.jsx(r("WDSIllustrationWdsPictoArchive.react"), {}),
				testid: "archived-empty"
			}) : c.jsx(r("WDSTextLayout.react"), {
				actionsWidth: "hug",
				headline: n,
				illustration: c.jsx(r("WDSIllustrationWdsPictoArchive.react"), {}),
				primaryAction: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: t,
					variant: "borderless"
				},
				testid: "archived-empty"
			})
		});
		var a = c.jsx("div", {
			className: "x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xl0us3e xa0zjtf xzbmw64 xg6s713 x1p9h2j9 x1amiio9 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
			children: c.jsx(r("WDSIconIcArchive.react"), {})
		});
		return c.jsx(g, {
			icon: a,
			title: n,
			testid: "archived-empty"
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.testid, n = e.text;
		return o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? c.jsx("div", {
			"data-testid": t + "-container",
			className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i",
			children: c.jsx(r("WDSTextLayout.react"), {
				headline: n,
				testid: t
			})
		}) : c.jsx(g, {
			xstyle: f.emptyTop,
			text: n,
			testid: t
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.hasFilter, n = t === void 0 ? !1 : t, a = e.noResultsText, i = e.onClearFilter, l = i === void 0 ? r("WAWebNoop") : i, u = a != null ? a : v();
		return o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? c.jsx("div", {
			"data-testid": "search-no-chats-or-contacts-container",
			className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i",
			children: c.jsx(r("WDSTextLayout.react"), {
				headline: u,
				actionsWidth: "hug",
				primaryAction: n ? {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						l();
					},
					variant: "borderless",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
					testid: "clear-filter"
				} : void 0,
				testid: "search-no-chats-or-contacts"
			})
		}) : c.jsx(g, {
			xstyle: f.emptyTop,
			title: n ? u : void 0,
			text: n ? void 0 : u,
			testid: "search-no-chats-or-contacts",
			children: n && c.jsx(r("WAWebUnstyledButton.react"), {
				dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
				testid: "clear-filter",
				onClick: l,
				xstyle: f.action,
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function S() {
		return c.jsx(g, {
			xstyle: o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? f.emptyStateContainer : f.emptyTop,
			text: R(),
			testid: "searching-chats-contacts-messages"
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function L() {
		return c.jsx(g, {
			xstyle: f.emptyTop,
			text: s._(
				/*BTDS*/
				""
			),
			testid: "searching-messages"
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E() {
		return c.jsx(C, {
			testid: "search-no-contacts",
			text: s._(
				/*BTDS*/
				""
			)
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k() {
		return c.jsx(C, {
			testid: "search-no-results-without-keyword",
			text: s._(
				/*BTDS*/
				""
			)
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.keyword;
		return c.jsx(C, {
			testid: "search-no-results-without-keyword",
			text: s._(
				/*BTDS*/
				"",
				[s._param("keyword", t)]
			)
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T() {
		return c.jsx(g, {
			xstyle: f.emptyTop,
			text: s._(
				/*BTDS*/
				""
			),
			testid: "searching-non-contact"
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		var t = e.xstyle;
		return c.jsxs(g, {
			xstyle: [f.emptyTop, t],
			testid: "searching-non-contact-with-spinner",
			children: [c.jsx("div", {
				className: "xdqhqc9",
				children: c.jsx(o("WAWebSpinner.react").Spinner, {
					size: 24,
					stroke: 6,
					color: "highlight"
				})
			}), c.jsx(o("WAWebEmojiText.react").EmojiText, {
				element: "div",
				xstyle: f.text,
				text: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = e.error, n = e.onClick, a = t.retryStr != null ? c.jsx(r("WAWebUnstyledButton.react"), {
			dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
			testid: "retry-search",
			onClick: n,
			xstyle: f.action,
			children: t.retryStr
		}) : null;
		return c.jsx(g, {
			xstyle: f.emptyTop,
			title: t.text,
			testid: "search-non-contacts",
			children: a
		});
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $() {
		return c.jsx(C, {
			testid: "search-no-groups",
			text: s._(
				/*BTDS*/
				""
			)
		});
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P() {
		return c.jsx(C, {
			testid: "search-no-messages",
			text: s._(
				/*BTDS*/
				""
			)
		});
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N() {
		return c.jsx(g, {
			xstyle: f.emptyTop,
			text: s._(
				/*BTDS*/
				""
			),
			testid: "search-results-unavailable"
		});
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M() {
		return c.jsx(g, {
			text: w(),
			testid: "no-chats"
		});
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function A(e) {
		var t = e.catalogLoadError, n = t === void 0 ? !1 : t, r = e.hasCatalog, o = r === void 0 ? !0 : r, a;
		return o ? (a = s._(
			/*BTDS*/
			""
		), n && (a = s._(
			/*BTDS*/
			""
		))) : a = s._(
			/*BTDS*/
			""
		), c.jsx(g, {
			text: a,
			testid: "no-products"
		});
	}
	A.displayName = A.name + " [from " + i.id + "]";
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
		return c.jsx(g, {});
	}
	O.displayName = O.name + " [from " + i.id + "]";
	function B() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "archived" } : c.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }));
	}
	function W() {
		var t = s._(
			/*BTDS*/
			""
		);
		return o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? c.jsx("div", {
			"data-testid": "all-chats-archived-container",
			className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i",
			children: c.jsx(r("WDSTextLayout.react"), {
				actionsWidth: "hug",
				headline: q(),
				illustration: c.jsx(r("WDSIllustrationWdsPictoArchive.react"), {}),
				primaryAction: {
					label: t,
					onPress: B,
					variant: "borderless"
				},
				testid: "all-chats-archived"
			})
		}) : c.jsx(g, {
			title: q(),
			testid: "all-chats-archived",
			children: c.jsx("div", babelHelpers.extends({
				"data-testid": "see-archived",
				role: "button",
				onClick: B
			}, (e || (e = r("stylex"))).props(f.action, o("WDSMargins.stylex").wdsMargins.marginVer8), { children: t }))
		});
	}
	W.displayName = W.name + " [from " + i.id + "]";
	function q() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function U() {
		var e = s._(
			/*BTDS*/
			""
		);
		return o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? c.jsx("div", {
			"data-testid": "no-starred-messages-container",
			className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i x1280gxy",
			children: c.jsx(r("WDSTextLayout.react"), {
				headline: e,
				body: s._(
					/*BTDS*/
					""
				),
				illustration: c.jsx(r("WDSIllustrationWdsPictoStar.react"), {}),
				testid: "no-starred-messages"
			})
		}) : c.jsx(g, {
			text: e,
			testid: "no-starred-messages",
			xstyle: f.emptyStarredWithNavbar
		});
	}
	U.displayName = U.name + " [from " + i.id + "]";
	function V() {
		return c.jsx(g, { text: s._(
			/*BTDS*/
			""
		) });
	}
	V.displayName = V.name + " [from " + i.id + "]";
	function H() {
		var e = s._(
			/*BTDS*/
			""
		);
		return o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? c.jsx("div", {
			"data-testid": "sent-for-admin-review-container",
			className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i",
			children: c.jsx(r("WDSTextLayout.react"), {
				headline: e,
				body: s._(
					/*BTDS*/
					""
				),
				illustration: c.jsx(r("WDSIllustrationWdsPictoMessageReportAndroid.react"), {}),
				testid: "sent-for-admin-review-empty"
			})
		}) : c.jsx(g, { text: e });
	}
	H.displayName = H.name + " [from " + i.id + "]";
	function G() {
		return c.jsx(g, {
			text: s._(
				/*BTDS*/
				""
			),
			testid: "no-media"
		});
	}
	G.displayName = G.name + " [from " + i.id + "]";
	function z() {
		return c.jsx(g, {
			text: s._(
				/*BTDS*/
				""
			),
			testid: "no-links"
		});
	}
	z.displayName = z.name + " [from " + i.id + "]";
	function j() {
		return c.jsx(g, {
			text: s._(
				/*BTDS*/
				""
			),
			testid: "no-docs"
		});
	}
	j.displayName = j.name + " [from " + i.id + "]";
	function K(e) {
		var t = e.description, n = t === void 0 ? "Loading" : t;
		return c.jsxs(g, { children: [c.jsx(r("CometHeroHoldTrigger.react"), {
			description: n,
			hold: !0
		}), c.jsx(o("WAWebSpinner.react").Spinner, {
			size: 50,
			stroke: 4
		})] });
	}
	K.displayName = K.name + " [from " + i.id + "]";
	function Q(e) {
		var t = e.description, n = t === void 0 ? "LoadingWithText" : t, a = e.text;
		return c.jsxs(g, { children: [
			c.jsx(r("CometHeroHoldTrigger.react"), {
				description: n,
				hold: !0
			}),
			c.jsx("div", {
				className: "xdqhqc9",
				children: c.jsx(o("WAWebSpinner.react").Spinner, {
					size: 50,
					stroke: 4
				})
			}),
			c.jsx(o("WAWebEmojiText.react").EmojiText, {
				element: "div",
				className: "x1f6kntn x1fc57z9 xhslqc4",
				text: a
			})
		] });
	}
	Q.displayName = Q.name + " [from " + i.id + "]";
	function X(e) {
		var t = e.labelId, n = o("WAWebLabelCollection").LabelCollection.get(t);
		return n ? c.jsx(g, { children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
			element: "div",
			className: "x1f6kntn x1fc57z9 xhslqc4",
			text: Y(t)
		}) }) : null;
	}
	X.displayName = X.name + " [from " + i.id + "]";
	function Y(e) {
		var t = o("WAWebLabelCollection").LabelCollection.get(e);
		return t ? s._(
			/*BTDS*/
			"",
			[s._param("labelName", t.name)]
		) : null;
	}
	function J() {
		return c.jsx(g, {
			text: "No quick replies",
			testid: "no-quick-replies"
		});
	}
	J.displayName = J.name + " [from " + i.id + "]";
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
		var t = e.filter, n = e.filterSession, a = e.onClearFilter, i = e.onShowSearch;
		d(function() {
			o("WAWebFilterLogging").logEmptyStateViewedFilterEvent(n.sessionId, t);
		}, [t, n.sessionId]);
		var l = t.kind != null ? Z(t.kind, t.label) : null;
		if (l == null) return null;
		var s = l.actionKind, u = l.actionLabel, m = l.icon, p = l.paragraph, h = l.theme, y = l.title, C = re(s, a, i);
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) return c.jsx("div", {
			"data-testid": "no-filtered-chats-container",
			className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i",
			children: c.jsx(r("WDSTextLayout.react"), {
				actionsWidth: "hug",
				body: p,
				headline: y,
				illustration: m,
				primaryAction: {
					label: u,
					onPress: C,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
					testid: s,
					variant: "borderless"
				},
				testid: "no-filtered-chats"
			})
		});
		var b = h === _.FavoritesFilter || h === _.UnreadFilter || h === _.GroupsFilter;
		return c.jsx(g, {
			title: y,
			text: p,
			theme: h,
			icon: m,
			xstyle: b ? void 0 : f.noFilteredChats,
			testid: "no-filtered-chats",
			children: c.jsx(r("WAWebUnstyledButton.react"), {
				dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
				testid: s,
				onClick: C,
				xstyle: b ? [f.action, o("WDSMargins.stylex").wdsMargins.marginVer8] : f.action,
				children: u
			})
		});
	}
	oe.displayName = oe.name + " [from " + i.id + "]";
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
		var t = e.testid, n = e.xstyle;
		return c.jsx(g, {
			xstyle: n,
			text: s._(
				/*BTDS*/
				""
			),
			testid: t != null ? t : "no-search-results"
		});
	}
	le.displayName = le.name + " [from " + i.id + "]", l.EmptyStateTheme = _, l.Empty = g, l.Blocked = h, l.Archived = y, l.Search = b, l.searchFbt = v, l.Searching = S, l.searchingFbt = R, l.SearchingMessages = L, l.SearchContacts = E, l.SearchWithoutKeyword = k, l.SearchWithKeyword = I, l.SearchingNonContact = T, l.SearchingNonContactWithSpinner = D, l.SearchingNonContactError = x, l.SearchGroups = $, l.SearchMessages = P, l.SearchMessagesUnavailable = N, l.ListChats = M, l.listChatsFbt = w, l.ListProducts = A, l.BeforeSearchMessages = F, l.ListStatus = O, l.AllArchived = W, l.allArchivedFbt = q, l.StarredMsgs = U, l.KeptMsgs = V, l.SentForAdminReview = H, l.MediaMsgs = G, l.LinkMsgs = z, l.DocMsgs = j, l.Loading = K, l.LoadingWithText = Q, l.NoResultForLabel = X, l.noResultForLabelFbt = Y, l.NoQuickReplies = J, l.getNoFilteredChatsStrings = Z, l.NoFilteredChats = oe, l.EmptyErrorStateWithButton = ae, l.NoSearchResults = ie, l.EnterPhoneNumberToStartChat = le;
}), 226);
