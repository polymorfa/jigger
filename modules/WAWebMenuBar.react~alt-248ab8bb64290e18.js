__d("WAWebMenuBar.react", [
	"WAWebMenuBarStyles",
	"WAWebPopoverContext.react",
	"WAWebTooltip.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebVelocityTransitionGroup",
	"WDSFocusStateStyles",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.createContext, p = d.useContext, _ = d.useEffect, f = d.useMemo, g = d.useRef, h = d.useState, y = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} };
	function C(e) {
		return c.jsx(r("WAWebVelocityTransitionGroup"), babelHelpers.extends({}, e, { xstyle: [r("WAWebMenuBarStyles").itemChild, e.xstyle] }));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = m({});
	function v(e) {
		var t = e.children, n = e.gap, o = e.theme, a = (s || (s = r("stylex")))(r("WAWebMenuBarStyles").menu, o == null && r("WAWebMenuBarStyles").menuDefault, o === "strong" && r("WAWebMenuBarStyles").menuStrong, o === "inverse" && r("WAWebMenuBarStyles").menuInverse, o === "nav-bar" && r("WAWebMenuBarStyles").menuNavBar, n === "single" && r("WAWebMenuBarStyles").menuGapSingle), i = f(function() {
			return o ? { theme: o } : {};
		}, [o]);
		return c.jsx(b.Provider, {
			value: i,
			children: c.jsx("div", {
				className: a,
				children: t
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	var S = -10;
	function R(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.buttonStyle, l = a.disabled, u = l === void 0 ? !1 : l, d = a.dropdownMenu, m = a.icon, f = a.onTransitionEnd, v = a.onTransitionStart, R = a.selected, L = a.showHoverTooltip, E = L === void 0 ? !1 : L, k = a.testid, I = a.text, T = a.theme, D = a.title, x = a.transitionName, $ = x === void 0 ? "dropdown" : x, P = a.vertical, N = a.xstyle, M = p(b), w = M.theme, A = h(!1), F = A[0], O = A[1], B = function() {
			if (v == null || v(), d != null) {
				var e, t = d.offsetX;
				t == null && (t = S), O(!0), Q(babelHelpers.extends({}, d, {
					anchor: (e = d.anchor) != null ? e : z.current,
					offsetX: t
				})), a.onOpen == null || a.onOpen();
			}
		}, W = function(t) {
			f == null || f(), O(!1), Q(null), a.onClose == null || a.onClose(t);
		}, q = function(t) {
			a.onClick && a.onClick(t), !(t == null || t.isDefaultPrevented()) && (t.preventDefault(), F || B());
		}, U = r("useWAWebStaticButtonA11y")(q, { disabled: u }), V = U[0], H = U[1], G = (s || (s = r("stylex")))(r("WAWebMenuBarStyles").item, N, R === !0 && r("WAWebMenuBarStyles").itemSelected, F === !0 && r("WAWebMenuBarStyles").itemActive, u !== !0 && r("WAWebMenuBarStyles").itemActiveStateNotDisabled, u !== !0 && r("WAWebMenuBarStyles").itemShowHoverBg, P === !0 && y.marginTop10, u === !0 && r("WAWebMenuBarStyles").itemDisabled, u === !0 && H.role === "button" && r("WAWebMenuBarStyles").itemDisabledRoleBtn, w === "nav-bar" && r("WAWebMenuBarStyles").itemThemeNavBar, w === "media-editor" && r("WAWebMenuBarStyles").itemThemeMediaEditor), z = g(null), j = h(null), K = j[0], Q = j[1], X = r("useMergeRefs")(V, z);
		return _(function() {
			d && F === !0 && B();
		}, []), c.jsxs("div", {
			ref: n,
			className: G,
			"data-testid": k,
			children: [
				c.jsxs("button", babelHelpers.extends({ "aria-expanded": F }, H, s.props(r("WAWebMenuBarStyles").itemButton, o("WDSPaddings.stylex").wdsPaddings.padding8, i, T === "force-size" && r("WAWebMenuBarStyles").btnThemeForceSize, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), {
					"data-tab": u ? void 0 : a.tabOrder,
					title: E ? "" : D,
					"aria-label": D,
					ref: X,
					children: [m, I != null && I !== "" && c.jsx("span", {
						className: "x7r5mf7 x1p8j9ns xahult9 x7phf20",
						children: I
					})]
				})),
				K != null && c.jsx(C, {
					transitionName: $,
					children: c.jsx(o("WAWebUimUie.react").UIE, {
						displayName: "MenuBarMenuItem",
						escapable: !0,
						popable: !0,
						dismissOnWindowResize: !0,
						requestDismiss: W,
						children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: K })
					})
				}),
				E && c.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
					targetRef: z,
					popover: c.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
						targetRef: "context",
						alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
						position: o("WAWebTooltip.react").PopoverPosition.End,
						openingDelay: 350,
						children: D
					})
				})
			]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.MenuBarVelocityTransitionGroup = C, l.MenuBar = v, l.MENU_BAR_ITEM_DROPDOWN_OFFSET = S, l.MenuBarItem = R;
}), 98);
