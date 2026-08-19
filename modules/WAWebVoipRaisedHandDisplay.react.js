__d("WAWebVoipRaisedHandDisplay.react", [
	"fbt",
	"WAWebAccessibility.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = d.useState, g = 300, h = {
		container: {
			position: "x10l6tqk",
			zIndex: "x1n327nk",
			pointerEvents: "x47corl",
			$$css: !0
		},
		spacingCompactStart: {
			bottom: "xajswfj",
			insetInlineStart: "x1gzglq8",
			left: null,
			right: null,
			$$css: !0
		},
		spacingCompactEnd: {
			bottom: "xajswfj",
			insetInlineEnd: "xe9xzdg",
			left: null,
			right: null,
			$$css: !0
		},
		spacingLargeStart: {
			bottom: "x1t6nodo",
			insetInlineStart: "x4brfc7",
			left: null,
			right: null,
			$$css: !0
		},
		spacingLargeEnd: {
			bottom: "x1t6nodo",
			insetInlineEnd: "x67dgr1",
			left: null,
			right: null,
			$$css: !0
		}
	}, y = "✋", C = {
		large: {
			start: h.spacingLargeStart,
			end: h.spacingLargeEnd
		},
		compact: {
			start: h.spacingCompactStart,
			end: h.spacingCompactEnd
		}
	};
	function b(t) {
		var n = o("react-compiler-runtime").c(24), a = t.emojiSize, i = t.inlinePosition, l = t.isHandRaised, s = t.participantName, u = t.spacing, d = a === void 0 ? "default" : a, p = i === void 0 ? "start" : i, b = l === void 0 ? !1 : l, S = s === void 0 ? null : s, R = u === void 0 ? "compact" : u, L = f(!1), E = L[0], k = L[1], I = f(!1), T = I[0], D = I[1], x = f(!1), $ = x[0], P = x[1], N = _(null);
		b !== $ && (P(b), b ? (D(!0), k(!0)) : k(!1));
		var M, w;
		n[0] !== b ? (M = function() {
			return b ? N.current != null && (window.clearTimeout(N.current), N.current = null) : N.current = window.setTimeout(function() {
				D(!1), N.current = null;
			}, g), (function() {
				N.current != null && (window.clearTimeout(N.current), N.current = null);
			});
		}, w = [b], n[0] = b, n[1] = M, n[2] = w) : (M = n[1], w = n[2]), m(M, w);
		var A;
		n[3] !== E || n[4] !== S ? (A = v(E, S), n[3] = E, n[4] = S, n[5] = A) : A = n[5];
		var F = A;
		if (!T) return null;
		var O;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (O = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(y), n[6] = O) : O = n[6];
		var B = O, W;
		if (n[7] !== p || n[8] !== R) {
			var q;
			W = (e || (e = r("stylex"))).props(h.container, (q = C[R]) == null ? void 0 : q[p]), n[7] = p, n[8] = R, n[9] = W;
		} else W = n[9];
		var U;
		n[10] !== d || n[11] !== E ? (U = {
			0: { className: "xngnso2 xo5v014 xldrc09 xg01cxk x12y6twl" },
			2: { className: "xo5v014 xldrc09 x579bpy xg01cxk x12y6twl" },
			1: { className: "xngnso2 xo5v014 xldrc09 x1hc1fzr x3oybdh" },
			3: { className: "xo5v014 xldrc09 x579bpy x1hc1fzr x3oybdh" }
		}[(d === "large") << 1 | !!E << 0], n[10] = d, n[11] = E, n[12] = U) : U = n[12];
		var V;
		n[13] !== d ? (V = B != null ? c.jsx(r("WAWebEmoji.react"), {
			emoji: B,
			size: d === "large" ? "large" : void 0
		}) : y, n[13] = d, n[14] = V) : V = n[14];
		var H;
		n[15] !== U || n[16] !== V ? (H = c.jsx("span", babelHelpers.extends({ "aria-hidden": !0 }, U, { children: V })), n[15] = U, n[16] = V, n[17] = H) : H = n[17];
		var G;
		n[18] !== F ? (G = c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, { text: F }), n[18] = F, n[19] = G) : G = n[19];
		var z;
		return n[20] !== W || n[21] !== H || n[22] !== G ? (z = c.jsxs("div", babelHelpers.extends({}, W, {
			"data-testid": "voip-raised-hand-display",
			children: [H, G]
		})), n[20] = W, n[21] = H, n[22] = G, n[23] = z) : z = n[23], z;
	}
	function v(e, t) {
		return e ? t != null ? s._(
			/*BTDS*/
			"",
			[s._param("name", t)]
		) : s._(
			/*BTDS*/
			""
		) : t != null ? s._(
			/*BTDS*/
			"",
			[s._param("name", t)]
		) : s._(
			/*BTDS*/
			""
		);
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = b;
}), 226);
