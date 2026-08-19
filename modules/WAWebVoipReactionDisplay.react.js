__d("WAWebVoipReactionDisplay.react", [
	"WAWebEmoji",
	"WAWebEmoji.react",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(21), a = t.emojiSize, i = t.reaction, l = t.shouldHaveOffset, s = t.spacing, c = a === void 0 ? "default" : a, g = l === void 0 ? !1 : l, h = s === void 0 ? "compact" : s, y = p(!1), C = y[0], b = y[1], v = p(null), S = v[0], R = v[1], L = p(null), E = L[0], k = L[1], I = m(null);
		i !== E && (k(i), i != null && i !== "" ? (R(i), b(!0)) : b(!1));
		var T, D;
		if (n[0] !== i ? (T = function() {
			return i == null || i === "" ? I.current = window.setTimeout(function() {
				R(null), I.current = null;
			}, _) : I.current != null && (window.clearTimeout(I.current), I.current = null), (function() {
				I.current != null && (window.clearTimeout(I.current), I.current = null);
			});
		}, D = [i], n[0] = i, n[1] = T, n[2] = D) : (T = n[1], D = n[2]), d(T, D), S == null) return null;
		var x;
		n[3] !== S ? (x = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(S), n[3] = S, n[4] = x) : x = n[4];
		var $ = x, P = null;
		g && (h === "large" && c === "large" ? P = f.offsetLargeEmojiLarge : h === "large" ? P = f.offsetLarge : P = f.offset);
		var N;
		n[5] !== P || n[6] !== h ? (N = (e || (e = r("stylex"))).props(f.container, h === "large" ? f.spacingLarge : f.spacingCompact, P), n[5] = P, n[6] = h, n[7] = N) : N = n[7];
		var M;
		n[8] !== c || n[9] !== C ? (M = {
			0: { className: "xngnso2 xo5v014 xldrc09 xg01cxk x12y6twl" },
			2: { className: "xo5v014 xldrc09 x579bpy xg01cxk x12y6twl" },
			1: { className: "xngnso2 xo5v014 xldrc09 x1hc1fzr x3oybdh" },
			3: { className: "xo5v014 xldrc09 x579bpy x1hc1fzr x3oybdh" }
		}[(c === "large") << 1 | !!C << 0], n[8] = c, n[9] = C, n[10] = M) : M = n[10];
		var w;
		n[11] !== S || n[12] !== c || n[13] !== $ ? (w = $ != null ? u.jsx(r("WAWebEmoji.react"), {
			emoji: $,
			size: c === "large" ? "large" : void 0
		}) : S, n[11] = S, n[12] = c, n[13] = $, n[14] = w) : w = n[14];
		var A;
		n[15] !== M || n[16] !== w ? (A = u.jsx("span", babelHelpers.extends({}, M, { children: w })), n[15] = M, n[16] = w, n[17] = A) : A = n[17];
		var F;
		return n[18] !== A || n[19] !== N ? (F = u.jsx("div", babelHelpers.extends({}, N, {
			"data-testid": "voip-reaction-display",
			children: A
		})), n[18] = A, n[19] = N, n[20] = F) : F = n[20], F;
	}
	l.default = g;
}), 98);
