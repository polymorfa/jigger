__d("WAWebEmojiPanelContentEmojiRow.react", [
	"WAWebCmd",
	"WAWebDropdown.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEmojiSkinTonePicker.react",
	"WAWebEmojiVariantCollection",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebMiscGatingUtils",
	"WAWebPanelsDisplayLocation",
	"WAWebReactionsSelectionContext",
	"WAWebRecentReactionsCollection",
	"WAWebStopEvent",
	"WAWebThemeContext",
	"WAWebUimUie.react",
	"WAWebUimUieTooltip.react",
	"WAWebUimUtils",
	"react",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebStableCallback",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useImperativeHandle, p = c.useRef, _ = c.useState, f = { emoji: {
		marginTop: "x1k70j0n",
		marginInlineEnd: "xbelrpt",
		marginBottom: "xzueoph",
		marginInlineStart: "xdzw4kq",
		cursor: "x1ypdohk",
		borderStartStartRadius: "x7uoqk1",
		borderStartEndRadius: "x1p4qogd",
		borderEndEndRadius: "x1fr94nc",
		borderEndStartRadius: "x1633rxx",
		$$css: !0
	} }, g = 250, h = 12, y = 44, C = 44;
	function b(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.allowVariantPrompt, l = a.displayLocation, s = a.emojis, c = a.focusAbove, h = a.focusBelow, y = a.numColumns, C = a.onEmoji, b = a.onEmojiFocus, v = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), L = o("useWAWebListener").useAddListenerOnce(), E = L[0], k = p(null), I = p(null), T = p(null), D = p(null), x = p(!1), $ = p(null), P = _(null), N = P[0], M = P[1], w = l === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions, A = o("WAWebThemeContext").useIsDarkTheme(), F = d(r("WAWebReactionsSelectionContext")), O = function(t, n) {
			var e = t;
			if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(e)) {
				var r = o("WAWebEmojiVariantCollection").EmojiVariantCollection.getVariantIfExists(e);
				if (w) if (n != null) {
					var a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n);
					r = a != null ? a : e;
				} else {
					var l = R(t);
					l != null && (r = l);
				}
				if (r != null) e = r;
				else if (i) return !0;
			}
			C(e);
		}, B = function(t, n, r) {
			o("WAWebMiscGatingUtils").multiSkinToneEmojiPickerEnabled() && M(null), o("WAWebStopEvent").stopEvent(t), w || o("WAWebEmojiVariantCollection").EmojiVariantCollection.setVariant(n, r), O(n, r);
		}, W = function(t, n, a) {
			var e = o("WAWebEmoji").EmojiUtil.getSkinToneBase(t);
			e && ($.current = t, x.current = !0, M({
				menu: u.jsx(r("WAWebEmojiSkinTonePicker.react"), {
					base: e,
					action: B,
					unicode: t,
					preVariant: n.dataset.emoji
				}),
				anchor: n,
				type: o("WAWebDropdown.react").MenuType.Picker,
				dirX: o("WAWebDropdown.react").DirX.RIGHT,
				dirY: o("WAWebDropdown.react").DirY.TOP,
				horizontal: !0,
				autoFocus: a,
				findFirstItem: !0,
				raiseAboveMenu: w,
				darkMode: A
			}));
		}, q = o("useWAWebTimeout").useTimeout(function() {
			T.current != null && D.current != null && W(T.current, D.current), E(o("WAWebCmd").Cmd, "window_click", o("WAWebStopEvent").stopEvent);
		}, g), U = q[0], V = q[1], H = function(t) {
			var e = parseInt(t.dataset.emojiIndex, 10);
			isNaN(e) || (r("WAWebFocusTracer").focus(t, { preventScroll: !0 }), b(t), I.current = t);
		}, G = r("useWAWebStableCallback")(function() {
			x.current && (x.current = !1);
			var e = N == null ? void 0 : N.anchor;
			e && e instanceof HTMLElement && H(e), M(null);
		}), z = function(t) {
			var e = S(t);
			if (e != null) {
				var n = s[e];
				return n || null;
			}
		}, j = function(t) {
			var e, n = s.length - 1, r = Math.max(Math.min(t, n), 0);
			if (k.current != null) {
				var o = k.current.children[r];
				if (o != null) return (e = o.querySelector("[data-emoji]")) != null ? e : o;
			}
		}, K = function(t, n) {
			T.current = t, D.current = n, U(), E(window, "mouseup", V, { capture: !0 });
		}, Q = function(t) {
			if (t != null) {
				var e = s[t];
				if (e) {
					var n = j(t);
					if (n) {
						V();
						var r = O(e);
						r && W(e, n, !0);
					}
				}
			}
		}, X = function(t) {
			o("WAWebStopEvent").stopEvent(t);
			var e = S(t);
			e != null && h && h(e);
		}, Y = function(t) {
			var e = j(t);
			e && H(e);
		}, J = function(t) {
			o("WAWebStopEvent").stopEvent(t);
			var e = S(t);
			if (e != null) {
				var n = e - 1;
				if (n < 0) {
					c(y - 1);
					return;
				}
				Y(n);
			}
		}, Z = function(t) {
			o("WAWebStopEvent").stopEvent(t);
			var e = S(t);
			if (e != null) {
				var n = e + 1;
				if (n >= s.length) {
					h == null || h(0);
					return;
				}
				Y(n);
			}
		}, ee = function(t) {
			o("WAWebStopEvent").stopEvent(t);
			var e = S(t);
			e != null && c(e);
		}, te = function(t) {
			o("WAWebStopEvent").stopEvent(t);
			var e = S(t);
			Q(e);
		}, ne = function(t) {
			r("WAWebL10N").isRTL() ? Z(t) : J(t);
		}, re = function(t) {
			r("WAWebL10N").isRTL() ? J(t) : Z(t);
		}, oe = function(t) {
			o("WAWebStopEvent").stopEvent(t);
			var e = S(t);
			z(t) != null && $.current != null && $.current !== z(t) ? (Q(e), $.current = z(t), x.current = !1) : x.current ? x.current = !1 : Q(e);
		}, ae = function(t) {
			o("WAWebStopEvent").stopEvent(t);
			var e = z(t);
			e && t.target instanceof HTMLElement && W(e, t.target);
		}, ie = function(t) {
			o("WAWebStopEvent").stopEvent(t), M(null);
			var e = t.target;
			if (e instanceof HTMLElement) {
				var n = z(t);
				n && K(n, e);
			}
		}, le = function() {
			Q(0);
		}, se = function() {
			I.current && H(I.current);
		};
		o("useWAWebListener").useListener(o("WAWebEmojiVariantCollection").EmojiVariantCollection, [
			"add",
			"remove",
			"change:variant"
		], v), m(n, function() {
			return {
				focusEmojiAt: Y,
				selectFirstEmoji: le,
				restoreFocus: se
			};
		});
		var ue;
		if (N && (ue = u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "SkinTonePicker",
			popable: !0,
			escapable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: G,
			requestRecentFocusOnUnmount: !1,
			children: u.jsx(r("WAWebUimUieTooltip.react"), { tooltip: N })
		})), !s.length) return null;
		var ce = null;
		return F != null && (ce = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(F)), u.jsxs("div", {
			className: "xbmvrgn x1diwwjn",
			children: [u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				onMouseDown: ie,
				onClick: oe,
				onContextMenu: ae,
				tabIndex: null,
				handlers: {
					up: ee,
					down: X,
					left: ne,
					right: re,
					enter: te,
					space: te
				},
				children: u.jsx("div", babelHelpers.extends({ ref: k }, {
					0: { className: "xuxw1ft" },
					1: { className: "xuxw1ft x1nn3v0j x1120s5i x1c1uobl xyri2b" }
				}[(l === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions) << 0], {
					role: "row",
					children: s.map(function(e, t) {
						var n = o("WAWebEmojiVariantCollection").EmojiVariantCollection.getVariantIfExists(e), a = !1;
						if (w) {
							a = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e) === ce;
							var i = R(e);
							i != null && (n = i);
						}
						var l = u.jsx(r("WAWebEmoji.react"), {
							element: "span",
							emoji: n || e,
							size: "large",
							tabIndex: -1,
							"data-emoji-index": t,
							xstyle: f.emoji
						}, e);
						return w ? u.jsx("div", babelHelpers.extends({
							tabIndex: -1,
							role: "gridcell",
							"aria-label": e,
							"data-emoji-index": t
						}, {
							0: { className: "x1rg5ohu x7uoqk1 x1p4qogd x1fr94nc x1633rxx x1s2ixkd" },
							1: { className: "x1rg5ohu x9f619 xzuapc8 xqvfhly x4wrhlh x1c9tyrk xeusxvb x1pahc9y x1ertn4p" }
						}[!!a << 0], { children: l }), e) : l;
					})
				}))
			}), ue]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	var v = b;
	function S(e) {
		if (!(o("WAWebUimUtils").isCrossWindowHTMLElement(e.target) || e.target instanceof HTMLElement)) return null;
		var t = parseInt(e.target.dataset.emojiIndex, 10);
		return isNaN(t) ? null : t;
	}
	function R(e) {
		var t = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e), n = o("WAWebRecentReactionsCollection").RecentReactionsCollection.get(t);
		if (n) return o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n.reactionText);
	}
	l.SIDE_MARGIN = h, l.EMOJI_HEIGHT = y, l.EMOJI_WIDTH = C, l.EmojiRow = v;
}), 98);
