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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(15), a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.count, s = i.disabled, p = i.endIcon, _ = i.id, f = i.label, g = i.listId, h = i.listType, y = i.onBeforeContextMenu, C = i.onClick, b = i.onFocus, v = i.restrictSize, S = i.selected, R = i.startIcon, L = i.tabOrder, E = i.testIdSuffix, k = i.theme, I = k === void 0 ? "list-filter" : k, T = o("WAWebThemeContext").useIsDarkTheme(), D = c(null), x = r("useMergeRefs")(a, D), $ = o("WAWebListChatListFilterRightClickMenu.react").allowToDisplayListFilterPillContextMenu(h), P = $ ? o("WAWebListChatListFilterRightClickMenu.react").buildFilterPillContextMenu(h, g) : null, N = r("useWDSMenu")({
			targetRef: D,
			menu: P,
			enableUIM: !1
		}), M = N.menuPortal, w = N.openMenu, A = function(t) {
			!$ || P == null || (t.preventDefault(), y == null || y(), w());
		}, F = l == null ? 0 : l, O;
		n[0] !== F ? (O = F > 0 ? { endNumber: F } : {}, n[0] = F, n[1] = O) : O = n[1];
		var B = O;
		if (p == null && !!R == !!i.startWDSIcon) return u.jsxs(u.Fragment, { children: [u.jsx("div", {
			ref: D,
			"data-testid": "filter-button",
			role: "none",
			onContextMenu: $ ? A : void 0,
			children: u.jsx(r("WDSChip.react"), babelHelpers.extends({
				tabOrder: Number(i.tabIndex) >= 0 ? L : void 0,
				truncateText: !0,
				ref: a,
				id: _,
				isDisabled: s,
				label: f
			}, B, {
				isSelected: S,
				onPress: function(t) {
					C == null || C(t);
				},
				onFocus: b != null ? b : r("WAWebNoop"),
				role: i.role,
				"aria-selected": i["aria-selected"],
				"aria-controls": i["aria-controls"],
				Icon: i.startWDSIcon,
				showEndDropdownIcon: i.showEndDropdownIcon,
				testid: "chat_list_filter_button_pill" + (E == null ? "" : "_" + E)
			}))
		}), M] });
		var W = [d.paddingBlock6, o("WDSPaddings.stylex").wdsPaddings.paddingHor12];
		if (W.push(m.filterRefreshed, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), S ? W.push(m.selectedRefreshed) : W.push(m.filterHoverRefreshed), I === "drawer-header") {
			var q;
			n[2] !== T ? (q = T ? [m.drawerHeader, m.drawerHeaderDark] : m.drawerHeader, n[2] = T, n[3] = q) : q = n[3], W.push(q);
		}
		var U = i.id, V = i.role, H = i["aria-selected"], G = i["aria-controls"], z = i.tabIndex, j = o("WAWebFlex.react").FlexRow, K = 8, Q = "center", X = "list-filter-button-text", Y = {
			0: {},
			1: { className: "x6ikm8r x10wlt62 xuxw1ft xlyipyv x1qh4rir xeuugli" }
		}[!!v << 0], J;
		n[4] !== f || n[5] !== Y ? (J = u.jsx("div", babelHelpers.extends({ "data-testid": X }, Y, { children: f })), n[4] = f, n[5] = Y, n[6] = J) : J = n[6];
		var Z;
		n[7] !== l ? (Z = l != null && l > 0 && u.jsx("div", {
			"data-testid": "list-filter-button-count",
			className: "x2lah0s",
			children: l
		}), n[7] = l, n[8] = Z) : Z = n[8];
		var ee;
		return n[9] !== j || n[10] !== p || n[11] !== R || n[12] !== J || n[13] !== Z ? (ee = u.jsxs(j, {
			columnGap: K,
			align: Q,
			children: [
				R,
				J,
				Z,
				p
			]
		}), n[9] = j, n[10] = p, n[11] = R, n[12] = J, n[13] = Z, n[14] = ee) : ee = n[14], u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebUnstyledButton.react"), {
			ref: x,
			testid: "chat_list_filter_button_pill" + (E == null ? "" : "_" + E),
			dataTab: L,
			onClick: C,
			onFocus: b,
			onContextMenu: $ ? A : null,
			"aria-pressed": S,
			disabled: s,
			xstyle: W,
			id: U,
			role: V,
			"aria-selected": H,
			"aria-controls": G,
			tabIndex: z,
			children: ee
		}), M] });
	}
	l.default = p;
}), 98);
