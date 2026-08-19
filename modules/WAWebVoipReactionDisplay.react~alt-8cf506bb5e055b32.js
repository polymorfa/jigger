__d("WAWebVoipReactionDisplay.react", [
	"WAWebEmoji",
	"WAWebEmoji.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = c.useState, _ = 300, f = {
		container: {
			position: "x10l6tqk",
			zIndex: "x1n327nk",
			pointerEvents: "x47corl",
			$$css: !0
		},
		spacingCompact: {
			bottom: "xajswfj",
			insetInlineStart: "x1gzglq8",
			$$css: !0
		},
		spacingLarge: {
			bottom: "x1t6nodo",
			insetInlineStart: "xxrlk4x",
			$$css: !0
		},
		offset: {
			insetInlineStart: "xr2ch4k",
			left: null,
			right: null,
			$$css: !0
		},
		offsetLarge: {
			insetInlineStart: "x9pwknu",
			left: null,
			right: null,
			$$css: !0
		},
		offsetLargeEmojiLarge: {
			insetInlineStart: "xyx8ycp",
			left: null,
			right: null,
			$$css: !0
		}
	};
	function g(t) {
		var n = t.emojiSize, a = n === void 0 ? "default" : n, i = t.reaction, l = t.shouldHaveOffset, s = l === void 0 ? !1 : l, c = t.spacing, g = c === void 0 ? "compact" : c, h = p(!1), y = h[0], C = h[1], b = p(null), v = b[0], S = b[1], R = p(null), L = R[0], E = R[1], k = m(null);
		if (i !== L && (E(i), i != null && i !== "" ? (S(i), C(!0)) : C(!1)), d(function() {
			return i == null || i === "" ? k.current = window.setTimeout(function() {
				S(null), k.current = null;
			}, _) : k.current != null && (window.clearTimeout(k.current), k.current = null), function() {
				k.current != null && (window.clearTimeout(k.current), k.current = null);
			};
		}, [i]), v == null) return null;
		var I = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(v), T = null;
		return s && (g === "large" && a === "large" ? T = f.offsetLargeEmojiLarge : g === "large" ? T = f.offsetLarge : T = f.offset), u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.container, g === "large" ? f.spacingLarge : f.spacingCompact, T), {
			"data-testid": "voip-reaction-display",
			children: u.jsx("span", babelHelpers.extends({}, {
				0: { className: "xngnso2 xo5v014 xldrc09 xg01cxk x12y6twl" },
				2: { className: "xo5v014 xldrc09 x579bpy xg01cxk x12y6twl" },
				1: { className: "xngnso2 xo5v014 xldrc09 x1hc1fzr x3oybdh" },
				3: { className: "xo5v014 xldrc09 x579bpy x1hc1fzr x3oybdh" }
			}[(a === "large") << 1 | !!y << 0], { children: I != null ? u.jsx(r("WAWebEmoji.react"), {
				emoji: I,
				size: a === "large" ? "large" : void 0
			}) : v }))
		}));
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
