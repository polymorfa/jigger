__d("WAWebDropdown.react", [
	"$InternalEnum",
	"WAWebCmd",
	"WAWebDropdown.stylex",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebMiscGatingUtils",
	"WAWebNoop",
	"WDSPaddings.stylex",
	"WDSVars.stylex",
	"nullthrows",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useLayoutEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = {
		paddingInline10: {
			paddingInlineStart: "xe2zdcy",
			paddingInlineEnd: "x2vl965",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingBottom7: {
			paddingBottom: "x1ykpatu",
			$$css: !0
		}
	}, y = 388, C = 573, b = C, v = y, S = 32, R = 32, L = 10, E = n("$InternalEnum").Mirrored([
		"Dropdown",
		"DropdownMenu",
		"DropdownText",
		"AttachMenu",
		"Picker",
		"EmojiPicker",
		"StickerPicker",
		"ColorPicker",
		"LabelColorPicker",
		"Tooltip",
		"ReactionDetailsPane",
		"ReactionSendTray",
		"ReactionPicker",
		"DatePicker",
		"Suggestions",
		"AttachMenuPopup",
		"ExpressionsPanel",
		"EventsRSVPPopup",
		"NewsletterWamoSubMessageTypePopup",
		"DropdownMenuPopup",
		"BusinessProfileDropdown"
	]), k = n("$InternalEnum").Mirrored(["Default", "Highlight"]), I = n("$InternalEnum").Mirrored([
		"LEFT",
		"CENTER",
		"RIGHT"
	]), T = n("$InternalEnum").Mirrored(["TOP", "BOTTOM"]), D = {
		eventsRSVPPopup: {
			boxSizing: "x9f619",
			borderStartStartRadius: "x1rsuxf0",
			borderStartEndRadius: "xcgujcq",
			borderEndEndRadius: "x1igtfuo",
			borderEndStartRadius: "x13up0n2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		attachMenu: {
			position: "x10l6tqk",
			bottom: "x1ey2m1c",
			zIndex: "xfo81ep",
			boxSizing: "x1afcbsf",
			width: "x19ueb17",
			pointerEvents: "x71s49j",
			cursor: "xt0e3qv",
			$$css: !0
		},
		attachMenuPopup: {
			bottom: "xacj9c0",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			$$css: !0
		},
		newsletterWamoSubMessageTypePopup: {
			bottom: "xacj9c0",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			$$css: !0
		},
		dropdownMenuPopup: {
			width: "x17q7fqb",
			maxWidth: "xwcfh7u",
			$$css: !0
		},
		businessProfileDropdown: {
			width: "x1czfd9k",
			maxWidth: "x1x1rfll",
			$$css: !0
		}
	};
	function x(e) {
		switch (e) {
			case E.AttachMenu: return [
				D.attachMenu,
				o("WDSPaddings.stylex").wdsPaddings.paddingTop0,
				h.paddingInline10,
				h.paddingBottom7
			];
			case E.EventsRSVPPopup: return [D.eventsRSVPPopup, o("WDSPaddings.stylex").wdsPaddings.paddingVer0];
			case E.AttachMenuPopup: return [D.attachMenuPopup];
			case E.NewsletterWamoSubMessageTypePopup: return [D.newsletterWamoSubMessageTypePopup];
			case E.DropdownMenuPopup: return [D.dropdownMenuPopup];
			case E.BusinessProfileDropdown: return [D.businessProfileDropdown];
			default: return [];
		}
	}
	function $(e) {
		switch (e) {
			case I.RIGHT: return I.LEFT;
			case I.LEFT: return I.RIGHT;
			case I.CENTER: return I.CENTER;
		}
	}
	function P(e, t, n) {
		var o = n && r("WAWebL10N").isRTL() ? $(e) : e;
		return [o, t];
	}
	function N(e, t) {
		var n = $(e), r = t === T.TOP ? T.BOTTOM : T.TOP;
		return r + " " + n;
	}
	function M(e, t, n) {
		var r = n - t - S, o = Math.min(r, e), a = !1;
		return o < 0 && (o = 0, a = !0), {
			isDetached: o !== e,
			needsScroll: a,
			top: o
		};
	}
	function w(e, t, n, r) {
		var o, a, i, l, s = {}, u = (o = r == null || (a = r.ownerDocument) == null ? void 0 : a.defaultView) != null ? o : window, c = !1;
		switch (e) {
			case I.RIGHT:
				s.left = Math.min(u.innerWidth - ((i = r == null ? void 0 : r.offsetWidth) != null ? i : 0) - R, n.x);
				break;
			case I.LEFT:
				s.right = u.innerWidth - n.x;
				break;
			case I.CENTER:
				s.left = n.x - ((l = r == null ? void 0 : r.offsetWidth) != null ? l : 0) / 2, s.marginLeft = 0, s.marginRight = 0;
				break;
		}
		switch (t) {
			case T.BOTTOM: {
				s.top = n.y;
				var d = r == null ? void 0 : r.offsetHeight;
				if (d != null) {
					var m = M(n.y, d, u.innerHeight);
					s.top = m.top, m.needsScroll && (s.height = u.innerHeight - S, s.overflowY = "auto"), c = m.isDetached;
				}
				break;
			}
			case T.TOP: {
				s.bottom = u.innerHeight - n.y;
				break;
			}
		}
		return {
			isDetached: c,
			style: s
		};
	}
	function A(e, t, n) {
		return e !== I.CENTER || t == null || n == null ? null : { left: t.offsetWidth / 2 - n.offsetWidth / 2 };
	}
	function F(e, t, n, r, a) {
		var i = e === E.Dropdown || e === E.DropdownMenu || e === E.DropdownMenuPopup || e === E.EmojiPicker || e === E.StickerPicker || e === E.ColorPicker || e === E.LabelColorPicker || e === E.ReactionDetailsPane || e === E.ReactionSendTray || e === E.ReactionPicker || e === E.DatePicker || e === E.Suggestions || e === E.DropdownText || e === E.AttachMenuPopup || e === E.ExpressionsPanel || e === E.EventsRSVPPopup || e === E.NewsletterWamoSubMessageTypePopup || e === E.BusinessProfileDropdown, l = (e === E.Picker || e === E.EmojiPicker || e === E.StickerPicker || e === E.ColorPicker || e === E.LabelColorPicker || e === E.ReactionDetailsPane || e === E.ReactionSendTray || e === E.ReactionPicker || e === E.DatePicker || e === E.DropdownText || e === E.Tooltip) && t === I.LEFT, s = (e === E.EmojiPicker || e === E.StickerPicker || e === E.ColorPicker || e === E.LabelColorPicker || e === E.ReactionDetailsPane || e === E.ReactionSendTray || e === E.ReactionPicker || e === E.DatePicker || e === E.DropdownText) && n === T.TOP, u = e === E.EmojiPicker || e === E.StickerPicker || e === E.ColorPicker || e === E.LabelColorPicker || e === E.ReactionDetailsPane;
		return [
			i && o("WAWebDropdown.stylex").styles.container,
			o("WAWebDropdown.stylex").styles.containerMaterial,
			(e === E.Dropdown || e === E.DropdownMenu || e === E.DropdownMenuPopup || e === E.BusinessProfileDropdown) && o("WAWebDropdown.stylex").styles.containerMaterialPadding,
			e === E.Suggestions && o("WAWebDropdown.stylex").styles.containerSuggestions,
			e === E.ReactionDetailsPane && o("WAWebDropdown.stylex").styles.containerReactionDetails,
			e === E.ReactionSendTray && o("WAWebDropdown.stylex").styles.containerReactionSendTray,
			e === E.DatePicker && o("WAWebDropdown.stylex").styles.containerDatePicker,
			(e === E.DropdownMenu || e === E.DropdownMenuPopup || e === E.BusinessProfileDropdown) && o("WAWebDropdown.stylex").styles.right,
			e === E.Picker && o("WAWebDropdown.stylex").styles.pickerTooltipBase,
			e === E.Picker && o("WAWebDropdown.stylex").styles.picker,
			e === E.Tooltip && o("WAWebDropdown.stylex").styles.pickerTooltipBase,
			e === E.Tooltip && o("WAWebDropdown.stylex").styles.tooltip,
			r === k.Highlight && o("WAWebDropdown.stylex").styles.tooltipHighlight,
			e === E.Picker && l && o("WAWebDropdown.stylex").styles.pickerInverse,
			e === E.Tooltip && l && o("WAWebDropdown.stylex").styles.tooltipInverse,
			u && o("WAWebDropdown.stylex").styles.panelBase,
			e === E.EmojiPicker && o("WAWebDropdown.stylex").styles.emoji,
			e === E.EmojiPicker && o("WAWebDropdown.stylex").styles.emojiXl,
			e === E.StickerPicker && o("WAWebDropdown.stylex").styles.sticker,
			e === E.ColorPicker && o("WAWebDropdown.stylex").styles.colorPicker,
			e === E.LabelColorPicker && o("WAWebDropdown.stylex").styles.labelColorPicker,
			e === E.ReactionDetailsPane && o("WAWebDropdown.stylex").styles.reactionDetails,
			e === E.ReactionPicker && o("WAWebDropdown.stylex").styles.reactionPicker,
			(e === E.EmojiPicker || e === E.StickerPicker || e === E.ReactionPicker) && l && o("WAWebDropdown.stylex").styles.panelInverse,
			(e === E.EmojiPicker || e === E.StickerPicker || e === E.ReactionPicker || e === E.ColorPicker || e === E.LabelColorPicker || e === E.ReactionDetailsPane) && s && o("WAWebDropdown.stylex").styles.panelInverseVertical,
			e === E.DropdownText && o("WAWebDropdown.stylex").styles.text,
			e === E.DropdownText && l && o("WAWebDropdown.stylex").styles.textInverse,
			e === E.DropdownText && s && o("WAWebDropdown.stylex").styles.textInverseVertical,
			e === E.ExpressionsPanel && o("WAWebDropdown.stylex").styles.expressionsPanel,
			e === E.ExpressionsPanel && o("WAWebDropdown.stylex").styles.expressionsPanelXl,
			e === E.ExpressionsPanel && o("WAWebDropdown.stylex").styles.expressionsPanelInsideInput,
			a && o("WAWebDropdown.stylex").styles.pickerAboveMenu
		];
	}
	function O(e, t, n, r) {
		var a = (e === E.Picker || e === E.Tooltip || e === E.EmojiPicker || e === E.StickerPicker || e === E.LabelColorPicker || e === E.DropdownText) && t === I.LEFT, i = (e === E.EmojiPicker || e === E.StickerPicker || e === E.LabelColorPicker || e === E.DropdownText) && n === T.TOP;
		return e === E.Picker || e === E.Tooltip ? [
			o("WAWebDropdown.stylex").styles.nibPickerTooltip,
			r === k.Highlight && o("WAWebDropdown.stylex").styles.nibPickerTooltipHighlight,
			a && o("WAWebDropdown.stylex").styles.nibPickerTooltipInverse
		] : e === E.EmojiPicker || e === E.StickerPicker || e === E.LabelColorPicker ? [
			o("WAWebDropdown.stylex").styles.nibPanel,
			e === E.LabelColorPicker && o("WAWebDropdown.stylex").styles.nibPanelLabelColorPicker,
			a && o("WAWebDropdown.stylex").styles.nibPanelInverse,
			i && o("WAWebDropdown.stylex").styles.nibPanelInverseVertical,
			i && e === E.LabelColorPicker && o("WAWebDropdown.stylex").styles.nibPanelInverseVerticalLabelColorPicker
		] : e === E.DropdownText ? [
			o("WAWebDropdown.stylex").styles.nibText,
			a && o("WAWebDropdown.stylex").styles.nibTextInverse,
			i && o("WAWebDropdown.stylex").styles.nibTextInverseVertical
		] : [];
	}
	function B(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.type, l = i === void 0 ? E.Dropdown : i, u = a.dirX, d = u === void 0 ? I.RIGHT : u, h = a.dirY, y = h === void 0 ? T.BOTTOM : h, C = a.children, b = a.flipOnRTL, v = a.origin, S = a.style, R = a.horizontal, k = a.isTemporaryRender, D = a.autoFocus, $ = a.findFirstItem, M = a.onDefault, B = a.testid, q = a.tooltipColorScheme, U = a.raiseAboveMenu, V = U === void 0 ? !1 : U, H = a.darkMode, G = H === void 0 ? !1 : H, z = g(!1), j = z[0], K = z[1], Q = g(null), X = Q[0], Y = Q[1], J = g(!1), Z = J[0], ee = J[1], te = f(null), ne = f(), re = f(), oe = r("useMergeRefs")(n, te), ae = r("useWAWebUIM")();
		p(function() {
			te.current != null && !Z && ee(!0);
		}, [Z]);
		var ie = _(function() {
			return l !== E.EmojiPicker && l !== E.Suggestions && l !== E.ReactionDetailsPane && l !== E.ReactionSendTray && l !== E.StickerPicker && l !== E.DatePicker && l !== E.ColorPicker && l !== E.LabelColorPicker && l !== E.ReactionPicker && l !== E.DropdownText;
		}, [l]);
		m(function() {
			if (ie) if (D === !0) {
				var e, t = (e = re.current) == null ? void 0 : e.querySelector("[tabindex]"), n;
				$ === !0 && t || re.current && re.current.firstChild instanceof HTMLDivElement && t ? n = t : re.current && re.current.children.length > 0 && (n = re.current.children[0]), r("WAWebFocusTracer").focus(n), K(!0), Y(n);
			} else r("WAWebFocusTracer").focus(te.current);
		}, []), m(function() {
			!re.current || !te.current || k === !0 || V || o("WAWebCmd").Cmd.floaterEscapeOverlap(te.current, L);
		}, [k, V]);
		var le = _(function() {
			var e = P(d, y, b), t = e[0], n = e[1], r = {
				borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusDouble,
				transformOrigin: N(t, n)
			}, a = S != null ? S : {};
			if (!v) return {
				containerStyle: babelHelpers.extends({}, a, r),
				isNibDetached: !1
			};
			var i = te.current, l = w(t, n, v, i), s = l.isDetached, u = l.style;
			return {
				containerStyle: babelHelpers.extends({}, a, r, u),
				isNibDetached: s
			};
		}, [
			d,
			y,
			b,
			Z,
			v,
			S
		]), se = le.containerStyle, ue = le.isNibDetached, ce = function(t) {
			r("WAWebFocusTracer").focus(te.current), K(!1);
		}, de = function(t, n) {
			var e = (n < 0 ? t.length - 1 : n) % t.length;
			r("WAWebFocusTracer").focus(t[e]), K(!0), Y(t[e]);
		}, me = function() {
			var e = Array.from(r("nullthrows")(re.current).querySelectorAll("li:not(.dropdown-item-disabled)"));
			return {
				activeChildren: e,
				currentlyFocusedIndex: X == null ? -1 : e.indexOf(X)
			};
		}, pe = function(t) {
			W(t);
			var e = me(), n = e.activeChildren, r = e.currentlyFocusedIndex;
			n.length !== 0 && de(n, r - 1);
		}, _e = function(t) {
			W(t);
			var e = me(), n = e.activeChildren, r = e.currentlyFocusedIndex;
			n.length !== 0 && de(n, r + 1);
		}, fe = function(t) {
			W(t);
			var e = me(), n = e.activeChildren, r = e.currentlyFocusedIndex;
			if (n.length !== 0) {
				if (n.length > 12 || n.length === 6) {
					_e(t);
					return;
				}
				var o, a = (n.length - 2) / 2, i = 0, l = a - 1, s = a, u = n.length - 3;
				r === -1 ? o = i : r >= s && r <= u ? o = r - a : r >= i && r <= l ? o = r : o = s, de(n, o);
			}
		}, ge = function(t) {
			W(t);
			var e = me(), n = e.activeChildren, r = e.currentlyFocusedIndex;
			if (n.length !== 0) {
				if (n.length > 12 || n.length === 6) {
					pe(t);
					return;
				}
				var o, a = (n.length - 2) / 2, i = 0, l = a - 1, s = a, u = n.length - 3;
				r >= s && r <= u ? o = u + 1 : r >= i && r <= l ? o = r + a : o = r, de(n, o);
			}
		}, he = function(t) {
			t.preventDefault(), ae == null || ae.requestDismiss();
		}, ye = function(t) {
			M && (ae == null || ae.requestDismiss(), M(t));
		}, Ce = function(t) {
			t.stopPropagation(), r("WAWebFocusTracer").focus(te.current), Y(void 0);
		}, be = (s || (s = r("stylex"))).apply(void 0, F(l, d, y, q, V).concat(x(l))), ve = G ? babelHelpers.extends({}, se, { "--picker-background": "#233138" }) : se, Se = O(l, d, y, q), Re = l === E.Picker || l === E.EmojiPicker || l === E.StickerPicker || l === E.LabelColorPicker || l === E.DropdownText || l === E.Tooltip, Le = Re && !ue ? c.jsx("div", {
			"data-testid": "tooltip-nib",
			ref: ne,
			className: (s || (s = r("stylex"))).apply(void 0, Se),
			"data-animate-dropdown-nib": !0,
			style: A(d, te.current, ne.current)
		}) : null;
		if (ie) {
			var Ee = {
				enter: ye,
				tab: W,
				"shift+tab": W,
				up: r("WAWebNoop"),
				down: r("WAWebNoop")
			}, ke, Ie;
			if (o("WAWebMiscGatingUtils").multiSkinToneEmojiPickerEnabled() && l === E.Picker ? r("WAWebL10N").isRTL() ? (ke = ge, Ie = fe) : (ke = fe, Ie = ge) : (ke = pe, Ie = _e), R) {
				var Te;
				Ee[(Te = r("WAWebL10N")).LR("left", "right")] = pe, Ee[Te.LR("right", "left")] = _e, Ee[Te.LR("up", "down")] = ke, Ee[Te.LR("down", "up")] = Ie;
			} else l === E.AttachMenu ? (Ee.up = _e, Ee.down = pe) : (Ee.up = pe, Ee.down = _e), l !== E.ExpressionsPanel && (Ee[r("WAWebL10N").LR("left", "right")] = he, Ee[r("WAWebL10N").LR("right", "left")] = ye);
			return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
				ref: oe,
				handlers: Ee,
				role: "application",
				className: be,
				style: ve,
				onMouseMove: j ? ce : null,
				onMouseUp: Ce,
				children: [c.jsx("ul", babelHelpers.extends({
					"data-testid": B,
					ref: re
				}, {
					0: {},
					1: { className: "x78zum5 x3ieub6" }
				}[(l === E.AttachMenu) << 0], { children: C })), Le]
			});
		}
		return c.jsxs("div", {
			ref: oe,
			className: be,
			style: ve,
			"data-testid": B,
			children: [C, Le]
		});
	}
	B.displayName = B.name + " [from " + i.id + "]";
	function W(e) {
		e.stopPropagation(), e.preventDefault();
	}
	l.EMOJI_PICKER_WIDTH = b, l.REACTIONS_PANEL_WIDTH = v, l.MenuType = E, l.TooltipColorScheme = k, l.DirX = I, l.DirY = T, l.getBottomMenuPlacement = M, l.Dropdown = B;
}), 98);
