__d("useWAWebDrawerManagerEvents", [
	"Promise",
	"WADeepEquals",
	"WALogger",
	"WAWebDrawerContext",
	"WAWebDrawerManager.react",
	"WAWebDrawerResolver.react",
	"WAWebFocusTracer",
	"WAWebKeyboardTabUtils",
	"WAWebNonEmptyString",
	"react",
	"react-compiler-runtime",
	"uniqueID",
	"useWAWebStableCallback",
	"useWAWebUiIdle"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = d.useState, g = function(t) {
		switch (t) {
			case o("WAWebDrawerManager.react").Dir.LEFT:
			case o("WAWebDrawerManager.react").Dir.FULLSCREEN: return o("WAWebDrawerManager.react").Transition.LEFT;
			case o("WAWebDrawerManager.react").Dir.MID: return o("WAWebDrawerManager.react").Transition.MID;
			default: return o("WAWebDrawerManager.react").Transition.RIGHT;
		}
	};
	function h(e, t) {
		var a = o("react-compiler-runtime").c(44), i = r("useWAWebUiIdle")(), l = _(null), u = _(null), d = _(null), m = _(!1), p = _(null), h = _(0), C = r("useWAWebStableCallback")(t), b;
		a[0] !== e ? (b = function() {
			return {
				drawer: void 0,
				drawerId: null,
				transition: g(e),
				uim: void 0,
				noFocus: void 0,
				onEnterAnimationComplete: void 0,
				drawerContext: o("WAWebDrawerContext").undefinedDrawerContext,
				focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
				disableRotateFocus: !1,
				focusOnUnMount: !1
			};
		}, a[0] = e, a[1] = b) : b = a[1];
		var v = f(b), S = v[0], R = v[1], L = S.disableRotateFocus, E = S.drawer, k = S.drawerContext, I = S.drawerId, T = S.focusOnUnMount, D = S.focusType, x = S.noFocus, $ = S.onEnterAnimationComplete, P = S.transition, N = S.uim, M;
		a[2] !== e || a[3] !== E || a[4] !== C || a[5] !== i ? (M = function(n, a) {
			var t = a === void 0 ? {} : a, l = t.transition, s = t.uim, _ = t.noFocus, f = t.onEnterAnimationComplete, y = t.newDrawerContext, b = t.focusType, v = t.disableRotateFocus, S = t.focusOnUnMount, L = t.onGuardProceed, k = t.onGuardReject, I = l === void 0 ? g(e) : l, T = y === void 0 ? o("WAWebDrawerContext").undefinedDrawerContext : y, D = S === void 0 ? !1 : S, x;
			n != null && typeof n == "object" && "descriptorType" in n ? x = c.jsx(r("WAWebDrawerResolver.react"), { descriptor: n }) : x = n;
			var $ = o("WAWebNonEmptyString").asMaybeNonEmptyString(r("uniqueID")("DrawerManager" + e)), P = null;
			D && (P = document.activeElement), u.current = P;
			var N = function() {
				R({
					drawer: x,
					drawerId: $,
					transition: I,
					uim: s,
					noFocus: _,
					onEnterAnimationComplete: f,
					drawerContext: T,
					focusType: b,
					disableRotateFocus: v,
					focusOnUnMount: D
				});
			};
			if (!m.current && E) {
				if (E.key != null && o("WADeepEquals").deepEqual(E.key, x.key)) return !0;
				var M = function() {
					C("updated"), d.current = o("WAWebDrawerManager.react").Transition.NONE, N(), i(function() {
						d.current = I;
					});
				}, w = p.current;
				if (w != null) {
					var A = h.current = h.current + 1;
					return w("replace").then(function(e) {
						e && h.current === A ? (p.current = null, M(), L == null || L()) : e || k == null || k();
					}), !1;
				}
				M();
			} else C("opened"), N();
			return !0;
		}, a[2] = e, a[3] = E, a[4] = C, a[5] = i, a[6] = M) : M = a[6];
		var w = M, A;
		a[7] !== T || a[8] !== C || a[9] !== i ? (A = function(t) {
			m.current = !0, R(y);
			var e = t != null && t.isConflictingDrawerOpening ? "replaced" : "closed";
			if (C(e), i(function() {
				m.current = !1;
			}), T) {
				var n = u == null ? void 0 : u.current;
				n && r("WAWebFocusTracer").focus(n);
			}
		}, a[7] = T, a[8] = C, a[9] = i, a[10] = A) : A = a[10];
		var F = A, O = r("useWAWebStableCallback")(F), B;
		a[11] !== E || a[12] !== I || a[13] !== F || a[14] !== O ? (B = function(t, n) {
			if (t != null && I !== t || !E) return !0;
			var e = p.current;
			if (e != null) {
				var r = (n == null ? void 0 : n.isConflictingDrawerOpening) === !0 ? "conflict" : "close", o = h.current = h.current + 1;
				return e(r).then(function(e) {
					e && h.current === o ? (p.current = null, O(n), n == null || n.onGuardProceed == null || n.onGuardProceed()) : e || n == null || n.onGuardReject == null || n.onGuardReject();
				}), !1;
			}
			return F(n), !0;
		}, a[11] = E, a[12] = I, a[13] = F, a[14] = O, a[15] = B) : B = a[15];
		var W = B, q;
		a[16] === Symbol.for("react.memo_cache_sentinel") ? (q = function() {
			var e, t = (e = l.current) == null ? void 0 : e.getElement();
			if (t) {
				var n = o("WAWebKeyboardTabUtils").getNextTabbableElement(t);
				n && r("WAWebFocusTracer").focus(n);
			}
		}, a[16] = q) : q = a[16];
		var U = q, V;
		a[17] !== W || a[18] !== I ? (V = function() {
			W(I);
		}, a[17] = W, a[18] = I, a[19] = V) : V = a[19];
		var H = V, G;
		a[20] === Symbol.for("react.memo_cache_sentinel") ? (G = function(t) {
			return p.current = t, (function() {
				p.current === t && (p.current = null);
			});
		}, a[20] = G) : G = a[20];
		var z = G, j;
		a[21] === Symbol.for("react.memo_cache_sentinel") ? (j = function() {
			return p.current != null;
		}, a[21] = j) : j = a[21];
		var K = j, Q = _(null), X;
		a[22] === Symbol.for("react.memo_cache_sentinel") ? (X = function() {
			Q.current != null && (Q.current(!1), Q.current = null);
		}, a[22] = X) : X = a[22];
		var Y = X, J;
		a[23] !== w ? (J = function(t, r) {
			return Y(), new (s || (s = (n("Promise"))))(function(e) {
				var n = w(t, babelHelpers.extends({}, r, {
					onGuardProceed: function() {
						Q.current = null, e(!0);
					},
					onGuardReject: function() {
						Q.current = null, e(!1);
					}
				}));
				n ? e(!0) : Q.current = e;
			});
		}, a[23] = w, a[24] = J) : J = a[24];
		var Z = J, ee;
		a[25] !== W ? (ee = function(t, r) {
			return Y(), new (s || (s = (n("Promise"))))(function(e) {
				var n = W(t != null ? t : null, babelHelpers.extends({}, r, {
					onGuardProceed: function() {
						Q.current = null, e(!0);
					},
					onGuardReject: function() {
						Q.current = null, e(!1);
					}
				}));
				n ? e(!0) : Q.current = e;
			});
		}, a[25] = W, a[26] = ee) : ee = a[26];
		var te = ee, ne;
		a[27] !== E ? (ne = function() {
			return m.current === !0 ? !1 : !!E;
		}, a[27] = E, a[28] = ne) : ne = a[28];
		var re = ne, oe;
		a[29] === Symbol.for("react.memo_cache_sentinel") ? (oe = function(t) {
			R(function(e) {
				return babelHelpers.extends({}, e, { drawerContext: t });
			});
		}, a[29] = oe) : oe = a[29];
		var ae = oe, ie;
		return a[30] !== te || a[31] !== L || a[32] !== E || a[33] !== k || a[34] !== I || a[35] !== re || a[36] !== D || a[37] !== H || a[38] !== x || a[39] !== $ || a[40] !== Z || a[41] !== P || a[42] !== N ? (ie = {
			drawer: E,
			drawerId: I,
			transition: P,
			uim: N,
			noFocus: x,
			onEnterAnimationComplete: $,
			drawerContext: k,
			focusType: D,
			disableRotateFocus: L,
			uieRef: l,
			blockTransitionRef: d,
			handleRequestDismiss: H,
			openDrawer: Z,
			closeDrawer: te,
			existsDrawer: re,
			focusDrawer: U,
			updateContext: ae,
			registerCloseGuard: z,
			hasCloseGuard: K
		}, a[30] = te, a[31] = L, a[32] = E, a[33] = k, a[34] = I, a[35] = re, a[36] = D, a[37] = H, a[38] = x, a[39] = $, a[40] = Z, a[41] = P, a[42] = N, a[43] = ie) : ie = a[43], ie;
	}
	function y(e) {
		return babelHelpers.extends({}, e, {
			drawer: void 0,
			drawerContext: o("WAWebDrawerContext").undefinedDrawerContext
		});
	}
	l.useDrawerManagerEvents = h;
}), 98);
