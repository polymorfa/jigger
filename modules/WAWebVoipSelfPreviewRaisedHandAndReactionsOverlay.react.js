__d("WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay.react", [
	"WAWebVoipRaisedHandDisplay.react",
	"WAWebVoipReactionDisplay.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		transform: "xsqj5wx",
		$$css: !0
	}, f = {
		customWidthHeight: function(t, n) {
			return [{
				width: t != null ? "x5lhr3w" : t,
				height: n != null ? "x16ye13r" : n,
				$$css: !0
			}, {
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t),
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(n)
			}];
		},
		selfPreviewCanvasPosition: function(t, n) {
			return [_, { "--x-transform": "translate(" + n + "px, " + t + "px)" != null ? "translate(" + n + "px, " + t + "px)" : void 0 }];
		},
		selfRaisedHandAndReactionsOverlay: {
			position: "x10l6tqk",
			top: "x13vifvy",
			left: "xu96u03",
			zIndex: "x13i6vqj",
			pointerEvents: "x47corl",
			transitionProperty: "x11xpdln",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		selfRaisedHandAndReactionsOverlayDragging: {
			transitionDuration: "x1mq3mr6",
			$$css: !0
		},
		selfRaisedHandAndReactionsOverlayResizing: {
			transitionDuration: "x1mq3mr6",
			$$css: !0
		}
	}, g = 300;
	function h(t) {
		var n = o("react-compiler-runtime").c(22), a = t.effectiveHeight, i = t.effectiveWidth, l = t.isDragging, s = t.isResizing, c = t.isSelfHandRaised, _ = t.overlayRef, h = t.previewPosition, y = t.selfReaction, C = l === void 0 ? !1 : l, b = s === void 0 ? !1 : s, v = h === void 0 ? null : h, S = p(!1), R = S[0], L = S[1], E = p(c), k = E[0], I = E[1], T = m(null);
		c !== k && (I(c), L(!c));
		var D, x;
		if (n[0] !== c ? (D = function() {
			if (!c) return T.current = window.setTimeout(function() {
				L(!1), T.current = null;
			}, g), (function() {
				T.current != null && (window.clearTimeout(T.current), T.current = null);
			});
		}, x = [c], n[0] = c, n[1] = D, n[2] = x) : (D = n[1], x = n[2]), d(D, x), !c && !R && y == null) return null;
		var $;
		n[3] !== a || n[4] !== i || n[5] !== C || n[6] !== b || n[7] !== v ? ($ = (e || (e = r("stylex"))).props([
			f.selfRaisedHandAndReactionsOverlay,
			f.customWidthHeight(i, a),
			C && f.selfRaisedHandAndReactionsOverlayDragging,
			b && f.selfRaisedHandAndReactionsOverlayResizing,
			v != null && f.selfPreviewCanvasPosition(v.y, v.x)
		]), n[3] = a, n[4] = i, n[5] = C, n[6] = b, n[7] = v, n[8] = $) : $ = n[8];
		var P;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "x10l6tqk xbfrwjf x1v1hl4c x78zum5 x1q0g3np x13a9art xuk3077" }, n[9] = P) : P = n[9];
		var N;
		n[10] !== c ? (N = u.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
			isHandRaised: c,
			spacing: "compact"
		}), n[10] = c, n[11] = N) : N = n[11];
		var M;
		n[12] !== c || n[13] !== y ? (M = y != null && u.jsx(r("WAWebVoipReactionDisplay.react"), {
			reaction: y,
			shouldHaveOffset: c
		}), n[12] = c, n[13] = y, n[14] = M) : M = n[14];
		var w;
		n[15] !== N || n[16] !== M ? (w = u.jsxs("div", babelHelpers.extends({}, P, { children: [N, M] })), n[15] = N, n[16] = M, n[17] = w) : w = n[17];
		var A;
		return n[18] !== _ || n[19] !== w || n[20] !== $ ? (A = u.jsx("div", babelHelpers.extends({ ref: _ }, $, { children: w })), n[18] = _, n[19] = w, n[20] = $, n[21] = A) : A = n[21], A;
	}
	l.WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay = h;
}), 98);
