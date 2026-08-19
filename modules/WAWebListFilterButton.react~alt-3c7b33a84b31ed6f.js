__d("WAWebListFilterButton.react", [
	"WAWebFlex.react",
	"WAWebListChatListFilterRightClickMenu.react",
	"WAWebNoop",
	"WAWebThemeContext",
	"WAWebUnstyledButton.react",
	"WDSChip.react",
	"WDSFocusStateStyles",
	"WDSPaddings.stylex",
	"react",
	"useMergeRefs",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useRef, d = { paddingBlock6: {
		paddingTop: "x1yrsyyn",
		paddingBottom: "x10b6aqq",
		$$css: !0
	} }, m = {
		filterRefreshed: {
			borderStartStartRadius: "xtf1z3e",
			borderStartEndRadius: "x18i4vdl",
			borderEndEndRadius: "x17ka9pb",
			borderEndStartRadius: "xaozknv",
			fontSize: "x6prxxf",
			fontWeight: "xo1l8bm",
			lineHeight: "x1btupbp",
			color: "xhslqc4",
			backgroundColor: "x1280gxy",
			boxShadow: "x1hdfv4t",
			$$css: !0
		},
		filterHoverRefreshed: {
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		selectedRefreshed: {
			color: "xk4n5i7",
			backgroundColor: "x1abdmlv",
			$$css: !0
		},
		drawerHeader: {
			backgroundColor: "x1p8t8ri",
			color: "xk4n5i7",
			borderTopColor: "xx42vgk",
			borderBottomColor: "x120ee7l",
			borderInlineEndColor: "xbogo7e",
			borderInlineStartColor: "x1vb5itz",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			":disabled_color": "x1f47i5p",
			":disabled_backgroundColor": "x1oqui1x",
			":disabled_cursor": "x1s07b3s",
			$$css: !0
		},
		drawerHeaderDark: {
			backgroundColor: "xjbqb8w",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.count, l = a.disabled, s = a.endIcon, p = a.id, _ = a.label, f = a.listId, g = a.listType, h = a.onBeforeContextMenu, y = a.onClick, C = a.onFocus, b = a.restrictSize, v = a.selected, S = a.startIcon, R = a.tabOrder, L = a.testIdSuffix, E = a.theme, k = E === void 0 ? "list-filter" : E, I = o("WAWebThemeContext").useIsDarkTheme(), T = c(null), D = r("useMergeRefs")(n, T), x = o("WAWebListChatListFilterRightClickMenu.react").allowToDisplayListFilterPillContextMenu(g), $ = x ? o("WAWebListChatListFilterRightClickMenu.react").buildFilterPillContextMenu(g, f) : null, P = r("useWDSMenu")({
			targetRef: T,
			menu: $,
			enableUIM: !1
		}), N = P.menuPortal, M = P.openMenu, w = function(t) {
			!x || $ == null || (t.preventDefault(), h == null || h(), M());
		}, A = i == null ? 0 : i, F = A > 0 ? { endNumber: A } : {};
		if (s == null && !!S == !!a.startWDSIcon) return u.jsxs(u.Fragment, { children: [u.jsx("div", {
			ref: T,
			"data-testid": "filter-button",
			role: "none",
			onContextMenu: x ? w : void 0,
			children: u.jsx(r("WDSChip.react"), babelHelpers.extends({
				tabOrder: Number(a.tabIndex) >= 0 ? R : void 0,
				truncateText: !0,
				ref: n,
				id: p,
				isDisabled: l,
				label: _
			}, F, {
				isSelected: v,
				onPress: function(t) {
					y == null || y(t);
				},
				onFocus: C != null ? C : r("WAWebNoop"),
				role: a.role,
				"aria-selected": a["aria-selected"],
				"aria-controls": a["aria-controls"],
				Icon: a.startWDSIcon,
				showEndDropdownIcon: a.showEndDropdownIcon,
				testid: "chat_list_filter_button_pill" + (L == null ? "" : "_" + L)
			}))
		}), N] });
		var O = [d.paddingBlock6, o("WDSPaddings.stylex").wdsPaddings.paddingHor12];
		return O.push(m.filterRefreshed, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), v ? O.push(m.selectedRefreshed) : O.push(m.filterHoverRefreshed), k === "drawer-header" && O.push(I ? [m.drawerHeader, m.drawerHeaderDark] : m.drawerHeader), u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebUnstyledButton.react"), {
			ref: D,
			testid: "chat_list_filter_button_pill" + (L == null ? "" : "_" + L),
			dataTab: R,
			onClick: y,
			onFocus: C,
			onContextMenu: x ? w : null,
			"aria-pressed": v,
			disabled: l,
			xstyle: O,
			id: a.id,
			role: a.role,
			"aria-selected": a["aria-selected"],
			"aria-controls": a["aria-controls"],
			tabIndex: a.tabIndex,
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				columnGap: 8,
				align: "center",
				children: [
					S,
					u.jsx("div", babelHelpers.extends({ "data-testid": "list-filter-button-text" }, {
						0: {},
						1: { className: "x6ikm8r x10wlt62 xuxw1ft xlyipyv x1qh4rir xeuugli" }
					}[!!b << 0], { children: _ })),
					i != null && i > 0 && u.jsx("div", {
						"data-testid": "list-filter-button-count",
						className: "x2lah0s",
						children: i
					}),
					s
				]
			})
		}), N] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
