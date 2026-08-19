__d("WAWebVoipRaisedHandDisplay.react", [
	"fbt",
	"WAWebAccessibility.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"react",
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
		var n, a = t.emojiSize, i = a === void 0 ? "default" : a, l = t.inlinePosition, s = l === void 0 ? "start" : l, u = t.isHandRaised, d = u === void 0 ? !1 : u, b = t.participantName, S = b === void 0 ? null : b, R = t.spacing, L = R === void 0 ? "compact" : R, E = f(!1), k = E[0], I = E[1], T = f(!1), D = T[0], x = T[1], $ = f(!1), P = $[0], N = $[1], M = _(null);
		d !== P && (N(d), d ? (x(!0), I(!0)) : I(!1)), m(function() {
			return d ? M.current != null && (window.clearTimeout(M.current), M.current = null) : M.current = window.setTimeout(function() {
				x(!1), M.current = null;
			}, g), function() {
				M.current != null && (window.clearTimeout(M.current), M.current = null);
			};
		}, [d]);
		var w = p(function() {
			return v(k, S);
		}, [k, S]);
		if (!D) return null;
		var A = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(y);
		return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.container, (n = C[L]) == null ? void 0 : n[s]), {
			"data-testid": "voip-raised-hand-display",
			children: [c.jsx("span", babelHelpers.extends({ "aria-hidden": !0 }, {
				0: { className: "xngnso2 xo5v014 xldrc09 xg01cxk x12y6twl" },
				2: { className: "xo5v014 xldrc09 x579bpy xg01cxk x12y6twl" },
				1: { className: "xngnso2 xo5v014 xldrc09 x1hc1fzr x3oybdh" },
				3: { className: "xo5v014 xldrc09 x579bpy x1hc1fzr x3oybdh" }
			}[(i === "large") << 1 | !!k << 0], { children: A != null ? c.jsx(r("WAWebEmoji.react"), {
				emoji: A,
				size: i === "large" ? "large" : void 0
			}) : y })), c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, { text: w })]
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]";
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
