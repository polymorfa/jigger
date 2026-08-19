__d("WAWebVoipUiToastContainer.react", [
	"WAWebVoipUiPopoutWindowContext",
	"WDSToast.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useEffect, p = c.useImperativeHandle, _ = c.useRef, f = c.useState, g = {
		toastContainer: {
			position: "x10l6tqk",
			zIndex: "xfo81ep",
			width: "xh8yej3",
			pointerEvents: "x47corl",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			insetInlineStart: "x1o0tod",
			$$css: !0
		},
		toastAlignStart: {
			justifyContent: "x1nhvcw1",
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		toastAlignEnd: {
			justifyContent: "x13a6bvl",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		toastBottomDefault: {
			bottom: "x191j7n5",
			$$css: !0
		},
		toastBottomWithControls: {
			bottom: "xy75b87",
			$$css: !0
		},
		toastBottomWithControlsPopout: {
			bottom: "x1kiq0my",
			$$css: !0
		},
		toastContainerWithSidePanel: {
			width: "x7ntjzr",
			$$css: !0
		}
	};
	function h(t) {
		var n = o("react-compiler-runtime").c(13), a = t.areCallControlsVisible, i = t.isSidePanelVisible, l = t.ref, s = i === void 0 ? !1 : i, c = d(r("WAWebVoipUiPopoutWindowContext")), m = f("center"), h = m[0], C = m[1], b = f(null), v = b[0], S = b[1], R = g.toastBottomDefault;
		a && (R = c.isContextInPopoutWindow ? g.toastBottomWithControlsPopout : g.toastBottomWithControls);
		var L = h === "start" ? g.toastAlignStart : h === "end" ? g.toastAlignEnd : null, E = _(null), k;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			return { showToast: function(t) {
				var e;
				C((e = t.align) != null ? e : "center"), E.current == null || E.current(t);
			} };
		}, n[0] = k) : k = n[0], p(l, k);
		var I;
		n[1] !== L || n[2] !== s || n[3] !== R ? (I = (e || (e = r("stylex"))).props(g.toastContainer, s && g.toastContainerWithSidePanel, L, R), n[1] = L, n[2] = s, n[3] = R, n[4] = I) : I = n[4];
		var T;
		n[5] !== I ? (T = u.jsx("div", babelHelpers.extends({ ref: S }, I)), n[5] = I, n[6] = T) : T = n[6];
		var D;
		if (n[7] !== c || n[8] !== v) {
			var x;
			D = v != null && u.jsx(o("WDSToast.react").WDSToastProvider, {
				target: v,
				targetWindow: (x = c.windowEl) != null ? x : window,
				children: u.jsx(y, { onMount: function(t) {
					E.current = t;
				} })
			}), n[7] = c, n[8] = v, n[9] = D;
		} else D = n[9];
		var $;
		return n[10] !== T || n[11] !== D ? ($ = u.jsxs(u.Fragment, { children: [T, D] }), n[10] = T, n[11] = D, n[12] = $) : $ = n[12], $;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onMount, r = o("WDSToast.react").useWDSToast(), a = r.showToast, i, l;
		return t[0] !== n || t[1] !== a ? (i = function() {
			n(a);
		}, l = [a, n], t[0] = n, t[1] = a, t[2] = i, t[3] = l) : (i = t[2], l = t[3]), m(i, l), null;
	}
	l.WAWebVoipUiToastContainer = h;
}), 98);
