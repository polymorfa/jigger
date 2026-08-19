__d("WAWebVoipUiToastContainer.react", [
	"WAWebVoipUiPopoutWindowContext",
	"WDSToast.react",
	"react",
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
		var n, a = t.areCallControlsVisible, i = t.isSidePanelVisible, l = i === void 0 ? !1 : i, s = t.ref, c = d(r("WAWebVoipUiPopoutWindowContext")), m = f("center"), h = m[0], C = m[1], b = f(null), v = b[0], S = b[1], R = g.toastBottomDefault;
		a && (R = c.isContextInPopoutWindow ? g.toastBottomWithControlsPopout : g.toastBottomWithControls);
		var L = h === "start" ? g.toastAlignStart : h === "end" ? g.toastAlignEnd : null, E = _(null);
		return p(s, function() {
			return { showToast: function(t) {
				var e;
				C((e = t.align) != null ? e : "center"), E.current == null || E.current(t);
			} };
		}), u.jsxs(u.Fragment, { children: [u.jsx("div", babelHelpers.extends({ ref: S }, (e || (e = r("stylex"))).props(g.toastContainer, l && g.toastContainerWithSidePanel, L, R))), v != null && u.jsx(o("WDSToast.react").WDSToastProvider, {
			target: v,
			targetWindow: (n = c.windowEl) != null ? n : window,
			children: u.jsx(y, { onMount: function(t) {
				E.current = t;
			} })
		})] });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.onMount, n = o("WDSToast.react").useWDSToast(), r = n.showToast;
		return m(function() {
			t(r);
		}, [r, t]), null;
	}
	y.displayName = y.name + " [from " + i.id + "]", l.WAWebVoipUiToastContainer = h;
}), 98);
