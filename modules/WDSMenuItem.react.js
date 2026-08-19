__d("WDSMenuItem.react", [
	"BaseContextualLayer.react",
	"BaseMenuFocusGroup",
	"BaseMenuItemRoleContext",
	"WAWebKeyboardShortcuts",
	"WDSGlobalContext",
	"WDSIconIcArrowRight.react",
	"WDSIconIcCheck.react",
	"WDSMenuContext",
	"WDSMenuItemConfig",
	"WDSShortcut.react",
	"WDSText.react",
	"react",
	"react-strict-dom",
	"stylex",
	"useResizeObserver"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useMemo, f = c.useRef, g = c.useState, h = {
		button: {
			backgroundColor: "xjbqb8w",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			color: "x1heor9g",
			cursor: "x1ypdohk",
			outline: "x1a2a7pz",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			textAlign: "x1yc453h",
			width: "xh8yej3",
			$$css: !0
		},
		disabled: {
			cursor: "xt0e3qv",
			$$css: !0
		},
		focusRing: {
			":focus-visible_outlineColor": "xtnn1bt",
			":focus-visible_outlineOffset": "x1bqaal",
			":focus-visible_outlineStyle": "x9v5kkp",
			":focus-visible_outlineWidth": "x784prv",
			$$css: !0
		}
	};
	function y(t) {
		var n, a, i = t.Icon, l = t.closeMenuOnPress, s = l === void 0 ? !0 : l, c = t.destructive, y = c === void 0 ? !1 : c, C = t.disabled, b = C === void 0 ? !1 : C, v = t.hasIndent, S = v === void 0 ? !1 : v, R = t.hasNumber, L = R === void 0 ? !1 : R, E = t.hasSubmenu, k = E === void 0 ? !1 : E, I = t.iconDirectional, T = t.iconXstyle, D = t.isToggleable, x = D === void 0 ? !1 : D, $ = t.number, P = t.onHoverIn, N = t.onHoverOut, M = t.onPress, w = t.profilePhoto, A = t.shortcut, F = t.submenuContent, O = t.subtitle, B = t.testid, W = t.title, q = t.toggled, U = q === void 0 ? !1 : q, V = t.truncateText, H = V === void 0 ? !1 : V, G = t.type, z = g(!1), j = z[0], K = z[1], Q = g(!1), X = Q[0], Y = Q[1], J = g(!1), Z = J[0], ee = J[1], te = g(!1), ne = te[0], re = te[1], oe = f(null), ae = f(null), ie = f(null), le = f(null), se = m(o("WDSGlobalContext").WDSContext), ue = se.closeAllMenus, ce = m(o("WDSMenuContext").WDSMenuSubmenuNavigationContext), de = ce.exitSubmenu, me = (n = m(r("BaseMenuItemRoleContext"))) != null ? n : "menuitem", pe = x ? "menuitemcheckbox" : me, _e = d(function() {
			re(!0), le.current = self.setTimeout(function() {
				var e;
				re(!1), ee(!1), (e = oe.current) == null || e.focus();
			}, o("WDSGlobalContext").MENU_EXIT_ANIMATION_DURATION);
		}, []), fe = _(function() {
			return { exitSubmenu: _e };
		}, [_e]);
		p(function() {
			return function() {
				le.current != null && self.clearTimeout(le.current), ie.current != null && self.clearTimeout(ie.current);
			};
		}, []);
		var ge = d(function() {
			M == null || M(), !k && s && ue();
		}, [
			M,
			ue,
			k,
			s
		]);
		p(function() {
			var e = oe.current;
			if (e != null) {
				var t = function(t) {
					var e = t.key.toLowerCase();
					if ((e === "enter" || e === " ") && !b) {
						t.preventDefault(), ge();
						return;
					}
					if (e === "arrowright" && k && !Z) {
						t.preventDefault(), t.stopPropagation(), ee(!0);
						return;
					}
					e === "arrowleft" && (t.preventDefault(), t.stopPropagation(), de());
				};
				return e.addEventListener("keydown", t), function() {
					return e.removeEventListener("keydown", t);
				};
			}
		}, [
			k,
			Z,
			de,
			b,
			ge
		]);
		var he = d(function() {
			var e;
			(e = ae.current) == null || e.reposition({ autoflip: !0 });
		}, []), ye = _(function() {
			return { repositionSubmenu: he };
		}, [he]), Ce = r("useResizeObserver")(function() {
			Z && he();
		}), be = _(function() {
			return { isClosing: ne };
		}, [ne]), ve = function(t) {
			ie.current != null && (self.clearTimeout(ie.current), ie.current = null), K(!0), k && (ie.current = self.setTimeout(function() {
				ee(!0);
			}, 200)), P == null || P(t);
		}, Se = function(t) {
			ie.current != null && (self.clearTimeout(ie.current), ie.current = null), K(!1), k && Z && (ie.current = self.setTimeout(function() {
				_e();
			}, o("WDSGlobalContext").MENU_EXIT_ANIMATION_DURATION)), N == null || N(t);
		}, Re = d(function() {
			var e;
			(e = oe.current) != null && e.matches(":focus-visible") && Y(!0);
		}, []), Le = d(function() {
			Y(!1);
		}, []), Ee = o("WDSMenuItemConfig").getMenuItemLayoutStyles(), ke;
		if (A != null && (typeof A == "object" ? ke = A : ke = o("WAWebKeyboardShortcuts").getWDSShortcuts(A)), G === "separator") return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(Ee.separator)));
		if (G === "groupHeader") return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(Ee.groupHeader), { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			selectable: !1,
			children: W
		}) }));
		var Ie = i != null, Te = O != null, De = ke != null || k || L, xe = w != null, $e = o("WDSMenuItemConfig").getMenuItemLayoutStyles({
			hasIcon: Ie,
			hasSubtitle: Te,
			hasEndSection: De,
			isToggleable: x,
			hasIndent: S,
			hasProfilePhoto: xe,
			number: $
		}), Pe = u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.listItemBase, Te && $e.listItemWithSubtitle), { children: [
			S && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.indentContainer))),
			w != null && !x && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.profilePhotoContainer, $e.startEndContainer), { children: w })),
			x && u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.toggledContainer), { children: [u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.iconContainer), { children: U && u.jsx(r("WDSIconIcCheck.react"), {
				height: o("WDSMenuItemConfig").WDSMenuItemIconSize,
				width: o("WDSMenuItemConfig").WDSMenuItemIconSize
			}) })), w != null ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.profilePhotoContainer), { children: w })) : i != null && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.iconContainer, T), { children: u.jsx(i, {
				directional: I,
				height: o("WDSMenuItemConfig").WDSMenuItemIconSize,
				width: o("WDSMenuItemConfig").WDSMenuItemIconSize,
				xstyle: T
			}) }))] })),
			!x && w == null && i != null && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.iconContainer, $e.startEndContainer, T), { children: u.jsx(i, {
				directional: I,
				"aria-hidden": !0,
				height: o("WDSMenuItemConfig").WDSMenuItemIconSize,
				width: o("WDSMenuItemConfig").WDSMenuItemIconSize,
				xstyle: T
			}) })),
			u.jsxs("div", babelHelpers.extends({ title: H && W != null ? W.toString() : void 0 }, e.props($e.textContainer, !De && $e.listItemEndPadding, !i && !x && !S && !w && $e.listItemDefault), { children: [W != null && u.jsx(r("WDSText.react"), {
				maxLines: H ? 1 : void 0,
				children: W,
				colorName: o("WDSMenuItemConfig").getMenuItemTextColorStyles(b, y, !1, j, X),
				type: "Body2",
				selectable: !1
			}), Te && u.jsx(r("WDSText.react"), {
				children: O,
				colorName: o("WDSMenuItemConfig").getMenuItemTextColorStyles(b, y, !0, j, X),
				type: "Body3",
				selectable: !1
			})] })),
			De && u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.endSectionContainer), { children: [
				ke != null && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.shortcutContainer), { children: u.jsx(r("WDSShortcut.react"), babelHelpers.extends({}, ke, { inverse: !1 })) })),
				k && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.iconContainer, $e.submenuContainer), { children: u.jsx(r("WDSIconIcArrowRight.react"), {
					"aria-hidden": !0,
					directional: !0,
					height: o("WDSMenuItemConfig").WDSMenuItemIconSize,
					width: o("WDSMenuItemConfig").WDSMenuItemIconSize
				}) })),
				L && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props($e.numberContainer), { children: u.jsx(r("WDSText.react"), {
					children: $,
					colorName: o("WDSMenuItemConfig").getMenuItemTextColorStyles(b, y, !1, j, X),
					type: "Body3",
					selectable: !1
				}) }))
			] }))
		] })), Ne = o("WDSMenuItemConfig").getMenuItemColorStyles(y, b), Me = Z && F ? u.jsx(r("BaseContextualLayer.react"), {
			imperativeRef: ae,
			contextRef: oe,
			position: "end",
			align: "start",
			containFocus: !0,
			children: u.jsx(o("react-strict-dom").html.div, {
				ref: Ce,
				"data-menu-content": !0,
				onMouseEnter: ve,
				onMouseLeave: Se,
				children: u.jsx(o("WDSMenuContext").WDSMenuSubmenuRepositionContext.Provider, {
					value: ye,
					children: u.jsx(o("WDSMenuContext").WDSMenuSubmenuNavigationContext.Provider, {
						value: fe,
						children: u.jsx(o("WDSMenuContext").WDSMenuAnimationContext.Provider, {
							value: be,
							children: F
						})
					})
				})
			})
		}) : null;
		return u.jsxs(u.Fragment, { children: [u.jsx(r("BaseMenuFocusGroup").FocusItem, {
			disabled: b,
			children: u.jsx(o("react-strict-dom").html.button, {
				ref: oe,
				"aria-label": W != null ? W : "",
				"aria-checked": x ? U : void 0,
				"data-testid": void 0,
				disabled: b,
				onClick: ge,
				onFocusIn: Re,
				onFocusOut: Le,
				onMouseEnter: ve,
				onMouseLeave: Se,
				role: pe,
				style: [
					h.button,
					h.focusRing,
					b && h.disabled,
					Ne == null || (a = Ne.xstyleConfig) == null ? void 0 : a.item
				],
				children: Pe
			})
		}), Me] });
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 98);
