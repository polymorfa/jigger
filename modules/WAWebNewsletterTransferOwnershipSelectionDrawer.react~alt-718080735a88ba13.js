__d("WAWebNewsletterTransferOwnershipSelectionDrawer.react", [
	"fbt",
	"WAWebChatContactList.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmptyState.react",
	"WAWebFbtCommon",
	"WAWebFlatListController",
	"WAWebL10NAccentFold",
	"WAWebNewsletterAdminSelectionFlow.react",
	"WAWebPhoneNumberSearch",
	"WAWebSearchInput",
	"react",
	"useWAWebDebouncedSearch",
	"useWAWebNewsletterAdmins"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = {
		drawer: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		marginTop20: {
			marginTop: "x1nmyh1g",
			$$css: !0
		}
	};
	function g(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onTransferOwnershipSelection, u = _(), d = r("useWAWebDebouncedSearch")(), g = d[0], y = d[1], C = r("WAWebFbtCommon")("Search"), b = p(function() {
			return new (r("WAWebFlatListController"))();
		}, []), v = o("useWAWebNewsletterAdmins").useNewsletterAdmins(i), S = c.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "list-section",
			children: c.jsx(o("WAWebSearchInput").DrawerSearchInput, {
				searchInputA11yLabel: C,
				placeholder: C,
				onSearch: y,
				focusOnMount: !1
			})
		}), R = m(function() {
			var e = o("WAWebL10NAccentFold").accentFold(g), t = o("WAWebPhoneNumberSearch").numberSearch(e);
			return (v != null ? v : []).filter(function(n) {
				return !e || n.searchMatchExact(e, t);
			});
		}, [v, g]), L = m(function() {
			var e = {
				contacts: R(),
				header: s._(
					/*BTDS*/
					""
				)
			};
			return c.jsx(r("WAWebChatContactList.react"), {
				ref: u,
				contacts: [],
				flatListController: b,
				onClick: function(t, n) {
					l(n);
				},
				showMe: !1,
				showBot: !1,
				showPersonGroupDivisionHeader: !0,
				separateContacts: e,
				searchText: g
			});
		}, [
			R,
			b,
			l,
			g
		]), E = v == null || (v == null ? void 0 : v.length) === 0 ? c.jsx(h, { chat: i }) : L();
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			xstyle: f.drawer,
			testid: "newsletter-transfer-ownership-selection-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-transfer-selection"
			},
			children: [
				c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: a.onBack,
					onCancel: a.onCancel
				}),
				S,
				c.jsx(r("WAWebDrawerBody.react"), { children: E })
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.chat;
		return c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
			xstyle: f.marginTop20,
			center: !1,
			text: s._(
				/*BTDS*/
				""
			),
			buttonText: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				o("WAWebNewsletterAdminSelectionFlow.react").startAdminInviteFlow({ chat: t });
			},
			testid: "transfer-ownership-no-admins"
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);
