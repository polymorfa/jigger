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
		var t = e.active, n = e.item, a = e.onCommunitySelected, i = r("useWAWebActiveSelection")(t, n.type === _ ? n.parentGroupMetadata.id.toString() : ""), l = i[0], u = i[1];
		switch (n.type) {
			case _: {
				var d = c.jsx(o("WAWebDetailImage.react").DetailImage, {
					size: 49,
					id: n.parentGroupMetadata.id,
					shape: o("WAWebDetailImage.react").DetailImageShape.Squircle
				}), m = n.parentGroupMetadata.joinedSubgroups.length + n.parentGroupMetadata.unjoinedSubgroups.length, p = m > o("WAWebCommunityGatingUtils").getParentGroupLinkLimit(), g = function(t, n) {
					return t ? s._(
						/*BTDS*/
						""
					) : n > 0 ? s._(
						/*BTDS*/
						"",
						[s._plural(n, "number_of_subgroups")]
					) : null;
				}, h = function(t) {
					t.preventDefault(), t.stopPropagation(), !p && a(n.parentGroupMetadata);
				}, y = {
					enter: h,
					space: h
				};
				return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
					ref: l,
					role: "button",
					handlers: y,
					children: c.jsx(r("WAWebCellFrame.react"), {
						active: u,
						theme: p ? "disabled-no-border" : "no-border",
						primary: c.jsx(o("WAWebEmojiText.react").EmojiText, {
							text: n.parentGroupMetadata.subject,
							ellipsify: !0
						}),
						secondary: g(p, m),
						image: d,
						onClick: h,
						disabled: p
					})
				});
			}
			case f: return c.jsx(r("WAWebSectionHeader.react"), { header: n.title });
		}
		return null;
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(t) {
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
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
