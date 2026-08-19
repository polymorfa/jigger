__d("WAWebExistingCommunitySelectionDrawer.react", [
	"fbt",
	"WAWebCellFrame.react",
	"WAWebCommunityGatingUtils",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebFbtCommon",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10NAccentFold",
	"WAWebNavigableFlatList.react",
	"WAWebSearchInput",
	"WAWebSectionHeader.react",
	"WAWebSingleSelection",
	"WAWebText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebActiveSelection",
	"useWAWebDebouncedSearch",
	"useWAWebFocusOnMount",
	"useWAWebParticipatingCommunities"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useMemo, m = {
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
	function p(e) {
		var t = e.isSearching;
		return c.jsx(r("WAWebDrawerSection.react"), {
			xstyle: [m.marginVert32, m.marginHoriz12],
			children: c.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
					textAlign: "center",
					children: t ? r("WAWebFbtCommon")("No results found") : s._(
						/*BTDS*/
						""
					)
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	var _ = "community_row", f = "header_row";
	function g(e) {
		var t = o("react-compiler-runtime").c(30), n = e.active, a = e.item, i = e.onCommunitySelected, l;
		t[0] !== a.parentGroupMetadata || t[1] !== a.type ? (l = a.type === _ ? a.parentGroupMetadata.id.toString() : "", t[0] = a.parentGroupMetadata, t[1] = a.type, t[2] = l) : l = t[2];
		var s = r("useWAWebActiveSelection")(n, l), u = s[0], d = s[1];
		switch (a.type) {
			case _: {
				var m;
				t[3] !== a.parentGroupMetadata.id ? (m = c.jsx(o("WAWebDetailImage.react").DetailImage, {
					size: 49,
					id: a.parentGroupMetadata.id,
					shape: o("WAWebDetailImage.react").DetailImageShape.Squircle
				}), t[3] = a.parentGroupMetadata.id, t[4] = m) : m = t[4];
				var p = m, g = a.parentGroupMetadata.joinedSubgroups.length + a.parentGroupMetadata.unjoinedSubgroups.length, y = g > o("WAWebCommunityGatingUtils").getParentGroupLinkLimit(), C = h, b;
				t[5] !== y || t[6] !== a.parentGroupMetadata || t[7] !== i ? (b = function(t) {
					t.preventDefault(), t.stopPropagation(), !y && i(a.parentGroupMetadata);
				}, t[5] = y, t[6] = a.parentGroupMetadata, t[7] = i, t[8] = b) : b = t[8];
				var v = b, S;
				t[9] !== v ? (S = {
					enter: v,
					space: v
				}, t[9] = v, t[10] = S) : S = t[10];
				var R = S, L = y ? "disabled-no-border" : "no-border", E;
				t[11] !== a.parentGroupMetadata.subject ? (E = c.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: a.parentGroupMetadata.subject,
					ellipsify: !0
				}), t[11] = a.parentGroupMetadata.subject, t[12] = E) : E = t[12];
				var k;
				t[13] !== y || t[14] !== g ? (k = C(y, g), t[13] = y, t[14] = g, t[15] = k) : k = t[15];
				var I;
				t[16] !== v || t[17] !== p || t[18] !== d || t[19] !== y || t[20] !== L || t[21] !== E || t[22] !== k ? (I = c.jsx(r("WAWebCellFrame.react"), {
					active: d,
					theme: L,
					primary: E,
					secondary: k,
					image: p,
					onClick: v,
					disabled: y
				}), t[16] = v, t[17] = p, t[18] = d, t[19] = y, t[20] = L, t[21] = E, t[22] = k, t[23] = I) : I = t[23];
				var T;
				return t[24] !== R || t[25] !== u || t[26] !== I ? (T = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
					ref: u,
					role: "button",
					handlers: R,
					children: I
				}), t[24] = R, t[25] = u, t[26] = I, t[27] = T) : T = t[27], T;
			}
			case f: {
				var D;
				return t[28] !== a.title ? (D = c.jsx(r("WAWebSectionHeader.react"), { header: a.title }), t[28] = a.title, t[29] = D) : D = t[29], D;
			}
		}
		return null;
	}
	function h(e, t) {
		return e ? s._(
			/*BTDS*/
			""
		) : t > 0 ? s._(
			/*BTDS*/
			"",
			[s._plural(t, "number_of_subgroups")]
		) : null;
	}
	function y(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = d(function() {
			return new (r("WAWebFlatListController"))();
		}, []), l = d(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.itemKey;
			});
		}, []), u = r("useWAWebFocusOnMount")(), h = r("useWAWebDebouncedSearch")(), y = h[0], C = h[1], b = r("WAWebFbtCommon")("Search"), v = c.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "list-section",
			children: c.jsx(o("WAWebSearchInput").DrawerSearchInput, {
				searchInputA11yLabel: b,
				placeholder: b,
				onSearch: C,
				focusOnMount: !1
			})
		}), S = r("useWAWebParticipatingCommunities")(), R = d(function() {
			var e = [], t = o("WAWebL10NAccentFold").accentFold(y), n = S.filter(function(e) {
				return o("WAWebL10NAccentFold").accentFold(e.subject).includes(t);
			}).toSorted(function(e, t) {
				return e.subject.toLowerCase().localeCompare(t.subject.toLowerCase());
			}), r = [], a = [];
			return n.forEach(function(e) {
				e.participants.iAmAdmin() ? r.push(e) : a.push(e);
			}), r.length > 0 && (e.push({
				type: f,
				itemKey: "communities-admin-header",
				title: s._(
					/*BTDS*/
					""
				)
			}), r.forEach(function(t) {
				return e.push({
					type: _,
					itemKey: t.id.toString(),
					parentGroupMetadata: t
				});
			})), a.length > 0 && (e.push({
				type: f,
				itemKey: "communities-member-header",
				title: s._(
					/*BTDS*/
					""
				)
			}), a.forEach(function(t) {
				return e.push({
					type: _,
					itemKey: t.id.toString(),
					parentGroupMetadata: t
				});
			})), l.init(e), e;
		}, [
			S,
			l,
			y
		]), L = R.length > 0 ? c.jsx(r("WAWebNavigableFlatList.react"), {
			listData: R,
			onRenderItem: function(t) {
				return c.jsx(g, {
					item: t,
					active: l,
					onCommunitySelected: a.onCommunitySelected
				});
			},
			selection: l,
			rotateList: !0,
			ariaLabel: s._(
				/*BTDS*/
				""
			)
		}) : c.jsx(p, { isSearching: y !== "" });
		return c.jsx("div", {
			role: "complementary",
			ref: u,
			tabIndex: -1,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: c.jsxs(r("WAWebDrawer.react"), {
				ref: n,
				xstyle: m.drawer,
				testid: "existing-existing--drawer",
				tsNavigationData: {
					surface: "unknown",
					viewName: "existing-community-selection"
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
					v,
					c.jsx(r("WAWebDrawerBody.react"), {
						flatListControllers: [i],
						children: L
					})
				]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
