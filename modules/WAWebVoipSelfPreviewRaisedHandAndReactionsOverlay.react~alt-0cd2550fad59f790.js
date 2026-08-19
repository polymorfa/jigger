__d("WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay.react", [
	"WAWebVoipRaisedHandDisplay.react",
	"WAWebVoipReactionDisplay.react",
	"react",
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
		var n = t.effectiveHeight, o = t.effectiveWidth, a = t.isDragging, i = a === void 0 ? !1 : a, l = t.isResizing, s = l === void 0 ? !1 : l, c = t.isSelfHandRaised, _ = t.overlayRef, h = t.previewPosition, y = h === void 0 ? null : h, C = t.selfReaction, b = p(!1), v = b[0], S = b[1], R = p(c), L = R[0], E = R[1], k = m(null);
		return c !== L && (E(c), S(!c)), d(function() {
			if (!c) return k.current = window.setTimeout(function() {
				S(!1), k.current = null;
			}, g), function() {
				k.current != null && (window.clearTimeout(k.current), k.current = null);
			};
		}, [c]), !c && !v && C == null ? null : u.jsx("div", babelHelpers.extends({ ref: _ }, (e || (e = r("stylex"))).props([
			f.selfRaisedHandAndReactionsOverlay,
			f.customWidthHeight(o, n),
			i && f.selfRaisedHandAndReactionsOverlayDragging,
			s && f.selfRaisedHandAndReactionsOverlayResizing,
			y != null && f.selfPreviewCanvasPosition(y.y, y.x)
		]), { children: u.jsxs("div", {
			className: "x10l6tqk xbfrwjf x1v1hl4c x78zum5 x1q0g3np x13a9art xuk3077",
			children: [u.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
				isHandRaised: c,
				spacing: "compact"
			}), C != null && u.jsx(r("WAWebVoipReactionDisplay.react"), {
				reaction: C,
				shouldHaveOffset: c
			})]
		}) }));
	}
	h.displayName = h.name + " [from " + i.id + "]", l.WAWebVoipSelfPreviewRaisedHandAndReactionsOverlay = h;
}), 98);
