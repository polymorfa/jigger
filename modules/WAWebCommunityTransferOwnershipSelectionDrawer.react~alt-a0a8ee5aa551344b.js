__d("WAWebCommunityTransferOwnershipSelectionDrawer.react", [
	"fbt",
	"WAWebChatContactList.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebL10NAccentFold",
	"WAWebPhoneNumberSearch",
	"WAWebSearchInput",
	"WAWebText.react",
	"WAWebUserPrefsMeUser",
	"react",
	"useWAWebCommunityAdmins",
	"useWAWebDebouncedSearch"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef, _ = {
		drawer: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		marginVert32: {
			marginTop: "x1ci5j9l",
			marginBottom: "xg6s713",
			$$css: !0
		},
		marginHoriz12: {
			marginInlineStart: "x1uvdrpn",
			marginInlineEnd: "x14mko6t",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		}
	};
	function f(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onTransferOwnershipSelection, u = p(), d = r("useWAWebDebouncedSearch")(), f = d[0], h = d[1], y = r("WAWebFbtCommon")("Search"), C = m(function() {
			return new (r("WAWebFlatListController"))();
		}, []), b = c.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "list-section",
			children: c.jsx(o("WAWebSearchInput").DrawerSearchInput, {
				searchInputA11yLabel: y,
				placeholder: y,
				onSearch: h,
				focusOnMount: !1
			})
		}), v = r("useWAWebCommunityAdmins")(i).map(function(e) {
			return e.contact;
		}), S = m(function() {
			var e = v.filter(function(e) {
				return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
			}), t = o("WAWebL10NAccentFold").accentFold(f), n = o("WAWebPhoneNumberSearch").numberSearch(t);
			return e.filter(function(e) {
				return !t || e.searchMatchExact(t, n);
			});
		}, [v, f]), R = {
			contacts: S,
			header: s._(
				/*BTDS*/
				""
			)
		}, L = c.jsx(r("WAWebChatContactList.react"), {
			ref: u,
			contacts: [],
			flatListController: C,
			onClick: function(t, n) {
				l(n);
			},
			showMe: !1,
			showBot: !1,
			showPersonGroupDivisionHeader: !0,
			separateContacts: R,
			searchText: f
		}), E = S.length > 0 ? L : c.jsx(g, {});
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			xstyle: _.drawer,
			testid: "community-transfer-ownership-selection-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-transfer-selection"
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
				b,
				c.jsx(r("WAWebDrawerBody.react"), { children: E })
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		return c.jsx(r("WAWebDrawerSection.react"), {
			xstyle: [_.marginVert32, _.marginHoriz12],
			children: c.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
					textAlign: "center",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
