__d("WAWebEmojiPanelEmojiSuggestionsPanel.react", [
	"WAWebCmd",
	"WAWebDropdown.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEmojiSkinTonePicker.react",
	"WAWebEmojiVariantCollection",
	"WAWebKeyboardHotKeys.react",
	"WAWebStopEvent",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebUimUieTooltip.react",
	"nullthrows",
	"react",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebStableCallback",
	"useWAWebTimeout",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useImperativeHandle, p = c.useRef, _ = c.useState, f = 44, g = { emojiItem: {
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
	} };
	function h(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.emojiList, l = a.emojiSuggestionSelect, s = a.maxWidth, c = a.onEmoji, h = a.onFocusRelease, y = a.onSkinTonePicker, C = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), b = o("useWAWebListener").useAddListenerOnce(), v = b[0], S = r("useWAWebUIM")(), R = _(null), L = R[0], E = R[1], k = _(0), I = k[0], T = k[1], D = p(null), x = p(null), $ = p(null), P = function(t) {
			return o("WAWebEmoji").EmojiUtil.getSkinToneBase(t) ? o("WAWebEmojiVariantCollection").EmojiVariantCollection.getVariant(t) : null;
		}, N = Math.floor(s / f), M = Math.min(i.length, N), w = function() {
			h == null || h();
		}, A = function(t) {
			c(t), w();
		}, F = function(t, n, r) {
			return o("WAWebStopEvent").stopEvent(t), A(r), o("WAWebEmojiVariantCollection").EmojiVariantCollection.setVariant(n, r), S && (S.pop(o("WAWebUim").DismissReason.UIM_INTERACTION, !1), S.requestDismiss()), !1;
		}, O = function(t, n, a) {
			U();
			var e = r("nullthrows")(o("WAWebEmoji").EmojiUtil.getSkinToneBase(t));
			E({
				menu: u.jsx(r("WAWebEmojiSkinTonePicker.react"), {
					base: e,
					action: F,
					unicode: t,
					preVariant: n.dataset.emoji
				}),
				anchor: n,
				type: o("WAWebDropdown.react").MenuType.Picker,
				dirX: o("WAWebDropdown.react").DirX.RIGHT,
				dirY: o("WAWebDropdown.react").DirY.TOP,
				horizontal: !0,
				autoFocus: a,
				findFirstItem: !0
			}), y == null || y(!0);
		}, B = o("useWAWebTimeout").useTimeout(function() {
			v(o("WAWebCmd").Cmd, "window_click", o("WAWebStopEvent").stopEvent), x.current && D.current && O(x.current, D.current);
		}, 250), W = B[0], q = B[1];
		function U() {
			q();
		}
		var V = function(t) {
			o("WAWebStopEvent").stopEvent(t), U();
			var e = t.target;
			if (e instanceof HTMLElement) {
				var n = e.dataset.unicode;
				D.current = e, x.current = n, W(), v(window, "mouseup", U, { capture: !0 });
			}
		}, H = function(t) {
			if (o("WAWebStopEvent").stopEvent(t), t.target instanceof HTMLElement) {
				var e = t.target.dataset.unicode;
				e && o("WAWebEmoji").EmojiUtil.getSkinToneBase(e) && V(t);
			}
		}, G = function(t) {
			o("WAWebStopEvent").stopEvent(t);
			var e = t.target;
			if (e instanceof HTMLElement) {
				var n = e.dataset.unicode;
				n && o("WAWebEmoji").EmojiUtil.getSkinToneBase(n) && O(n, e);
			}
		}, z = function(t) {
			if (o("WAWebStopEvent").stopEvent(t), t.target instanceof HTMLElement) {
				var e = t.target.dataset.unicode;
				if (e) if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(e)) {
					var n = P(e);
					n ? A(n) : G(t);
				} else A(e);
			}
		}, j = r("useWAWebStableCallback")(function() {
			L && (E(null), y == null || y(!1));
		}), K = function(t) {
			if (!(t < 0) && $.current) {
				var e = $.current.children;
				if (!(t >= e.length)) return e[t];
			}
		}, Q = function(t) {
			var e;
			return (e = i[t]) != null ? e : null;
		}, X = function() {
			var e = Q(I);
			if (e) if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(e)) {
				var t = P(e);
				if (t) A(t);
				else {
					var n = K(I);
					n && O(e, n, !0);
				}
			} else A(e);
		}, Y = function() {
			var e = Math.min(I + 1, M - 1);
			T(e), l == null || l(e.toString());
		}, J = function() {
			var e = Math.max(I - 1, 0);
			T(e), l == null || l(e.toString());
		};
		d(function() {
			j();
		}, [j, i]), d(function() {
			T(Math.min(I, i.length - 1));
		}, [I, i]), o("useWAWebListener").useListener(o("WAWebEmojiVariantCollection").EmojiVariantCollection, [
			"add",
			"remove",
			"change:variant"
		], C), m(n, function() {
			return {
				moveSelectionLeft: J,
				moveSelectionRight: Y,
				pickSelectedEmoji: X
			};
		});
		var Z;
		L && (Z = u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "SkinTonePicker",
			popable: !0,
			escapable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: j,
			children: u.jsx(r("WAWebUimUieTooltip.react"), { tooltip: L })
		}));
		var ee = i.slice(0, M).map(function(e, t) {
			var n = P(e), o = I === t && !L;
			return u.jsx(r("WAWebEmoji.react"), {
				element: "span",
				emoji: n != null ? n : e,
				size: "large",
				"data-unicode": e,
				"data-variant": n,
				tabIndex: -1,
				"data-emoji-index": t,
				selected: o,
				xstyle: g.emojiItem
			}, e);
		}), te = M * f;
		return u.jsxs("div", {
			style: { width: te },
			children: [u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				onMouseDown: H,
				onClick: z,
				onContextMenu: G,
				children: u.jsx("div", {
					ref: $,
					children: ee
				})
			}), Z]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);
