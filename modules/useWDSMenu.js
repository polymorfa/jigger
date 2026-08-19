__d("useWDSMenu", [
	"BaseContextualLayer.react",
	"WAWebUimUie.react",
	"WDSGlobalContext",
	"WDSMenuContext",
	"react",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect, p = u.useId, _ = u.useMemo, f = u.useRef, g = u.useState, h = {
		menu: {
			zIndex: "xoz0ns6",
			$$css: !0
		},
		menuGap: {
			paddingTop: "x1tiyuxx",
			paddingBottom: "x1nbhmlj",
			$$css: !0
		}
	}, y = {
		LEFT: 0,
		RIGHT: 2
	};
	function C(e, t) {
		var n = t.defaultView;
		if (n == null) return e.isConnected;
		var r = e.getBoundingClientRect();
		return r.bottom > 0 && r.right > 0 && r.top < n.innerHeight && r.left < n.innerWidth;
	}
	function b(e, t) {
		var n = document.createElement("div");
		return n.style.position = "fixed", n.style.left = e + "px", n.style.top = t + "px", n.style.width = "0px", n.style.height = "0px", n.style.pointerEvents = "none", n;
	}
	function v() {
		var e = g(null), t = e[0], n = e[1], r = f(null), o = c(function(e, t) {
			var o = b(e, t);
			return document.body && document.body.appendChild(o), r.current = o, n(o), o;
		}, []), a = c(function() {
			var e = r.current;
			e != null && (document.body.removeChild(e), r.current = null), n(null);
		}, []);
		return {
			virtualElement: t,
			createAndMount: o,
			cleanup: a
		};
	}
	function S(e) {
		e === void 0 && (e = {});
		var t = e, n = t.align, a = t.contextMenuArea, i = a === void 0 ? !1 : a, l = t.dismissable, u = l === void 0 ? !0 : l, b = t.enableUIM, S = b === void 0 ? !0 : b, R = t.isContainer, L = R === void 0 ? !1 : R, E = t.menu, k = t.onClose, I = t.onOpen, T = t.ownerDocument, D = t.position, x = t.positionOnAnyClick, $ = x === void 0 ? !1 : x, P = t.repositionOnScroll, N = P === void 0 ? !1 : P, M = t.targetRef, w = p(), A = d(o("WDSGlobalContext").WDSContext), F = A.closeAllMenus, O = A.registerMenu, B = A.unregisterMenu, W = g(!1), q = W[0], U = W[1], V = g(!1), H = V[0], G = V[1], z = f(null), j = f(null), K = v(), Q = K.cleanup, X = K.createAndMount, Y = K.virtualElement;
		function J(e) {
			return e.button === y.RIGHT || e.button === y.LEFT && (e.ctrlKey === !0 || e.metaKey === !0);
		}
		var Z = c(function(e) {
			if (e == null) return null;
			var t = J(e);
			return $ && e.clientX != null && e.clientY != null ? (e.preventDefault(), {
				x: e.clientX,
				y: e.clientY
			}) : t ? (e.preventDefault(), {
				x: e.clientX,
				y: e.clientY
			}) : null;
		}, [$]), ee = c(function() {
			H || (U(function(e) {
				return e;
			}), B(w), G(!0), self.setTimeout(function() {
				U(!1), G(!1), Q(), k == null || k();
			}, o("WDSGlobalContext").MENU_EXIT_ANIMATION_DURATION));
		}, [
			w,
			k,
			B,
			H,
			Q
		]), te = c(function(e) {
			G(!0), U(!1), Q(), window.requestAnimationFrame(function() {
				X(e.x, e.y), G(!1), U(function(e) {
					return e || I == null || I(), !0;
				});
			});
		}, [
			Q,
			X,
			I
		]), ne = c(function(e) {
			X(e.x, e.y), G(!1), U(function(e) {
				return e || (O(w, ee), I == null || I()), !0;
			});
		}, [
			X,
			O,
			w,
			ee,
			I
		]), re = c(function() {
			G(!1), U(function(e) {
				return e || (O(w, ee), I == null || I()), !0;
			});
		}, [
			O,
			w,
			ee,
			I
		]), oe = c(function(e) {
			if (!H) {
				var t = Z(e), n = t != null;
				if (q && n && t != null) {
					te(t);
					return;
				}
				F(), n && t != null ? ne(t) : (M == null ? void 0 : M.current) != null && re();
			}
		}, [
			H,
			Z,
			q,
			te,
			F,
			ne,
			re,
			M
		]), ae = c(function(e) {
			var t, n, r = z.current, o = (t = r == null || (n = r.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : self, a = o.Node, i = o.Element;
			return e instanceof a ? r && r.contains(e) ? !0 : e instanceof i ? e.closest("[data-menu-content]") != null : !1 : !1;
		}, []);
		m(function() {
			if (q && u) {
				var e = function(t) {
					var e, n, r = M == null ? void 0 : M.current;
					if (r == null || t == null) return !1;
					var o = (e = (n = r.ownerDocument) == null || (n = n.defaultView) == null ? void 0 : n.Node) != null ? e : Node;
					return t instanceof o && r.contains(t);
				}, t = function(n) {
					var t = n.target, r = n != null && J(n), o = n.button === y.LEFT;
					if (r) {
						if (ae(t)) {
							n.preventDefault(), n.stopPropagation();
							return;
						}
						e(t) || (G(!0), ee());
						return;
					}
					o && (ae(t) || !i && e(t) || (G(!0), ee()));
				}, n = T != null ? T : document;
				n.addEventListener("mousedown", t, !0);
				var r = T != null && T !== document;
				return r && document.addEventListener("mousedown", t, !0), function() {
					n.removeEventListener("mousedown", t, !0), r && document.removeEventListener("mousedown", t, !0);
				};
			}
		}, [
			q,
			u,
			ee,
			M,
			i,
			ae,
			T
		]);
		var ie = c(function(e) {
			e.stopPropagation(), e.preventDefault();
		}, []), le = c(function(e) {
			var t = e.key.toLowerCase(), n = e.ctrlKey || e.metaKey || e.altKey;
			if (!n) {
				if (t === "escape") {
					ie(e), ee();
					return;
				}
				if (L) {
					[
						"arrowup",
						"arrowdown",
						"arrowleft",
						"arrowright",
						"tab"
					].includes(t) && e.stopPropagation();
					return;
				}
				ie(e);
			}
		}, [
			ie,
			ee,
			L
		]), se = c(function(e) {
			e.preventDefault();
		}, []), ue = Y ? { current: Y } : M;
		m(function() {
			if (!(!q || !u)) {
				var e = function(t) {
					if (!ae(t.target)) {
						if (N) {
							var e, n = T != null ? T : document, r = Y != null ? Y : M == null ? void 0 : M.current;
							if (r == null || !C(r, n)) {
								ee();
								return;
							}
							(e = j.current) == null || e.reposition({ autoflip: !0 });
							return;
						}
						ee();
					}
				}, t = T != null ? T : document;
				return t.addEventListener("scroll", e, {
					capture: !0,
					passive: !0
				}), function() {
					t.removeEventListener("scroll", e, { capture: !0 });
				};
			}
		}, [
			ee,
			u,
			ae,
			T,
			N,
			q,
			M,
			Y
		]);
		var ce = _(function() {
			return {
				isClosing: H,
				position: D != null ? D : "below",
				align: n != null ? n : "start"
			};
		}, [
			H,
			D,
			n
		]), de = q ? s.jsx(r("BaseContextualLayer.react"), {
			contextRef: ue,
			imperativeRef: j,
			xstyle: h.menu,
			align: n != null ? n : "start",
			position: D != null ? D : "below",
			ownerDocument: T,
			containFocus: !0,
			children: s.jsx(o("react-strict-dom").html.div, {
				style: h.menuGap,
				children: s.jsx(o("react-strict-dom").html.div, {
					ref: z,
					"data-menu-content": !0,
					onContextMenu: se,
					onKeyDown: le,
					children: s.jsx(o("WDSMenuContext").WDSMenuAnimationContext.Provider, {
						value: ce,
						children: E
					})
				})
			})
		}) : null, me = S && de != null ? s.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "WDSMenu",
			escapable: !0,
			popable: !L,
			dismissOnWindowResize: !0,
			requestDismiss: function(t, n) {
				var e, r, o = (e = (r = z.current) == null || (r = r.ownerDocument) == null || (r = r.defaultView) == null ? void 0 : r.MouseEvent) != null ? e : MouseEvent;
				n instanceof o && ae(n.target) || ee();
			},
			children: s.jsx("div", { children: de })
		}) : de;
		return {
			openMenu: oe,
			closeMenu: ee,
			isMenuOpen: q && !H,
			menuPortal: me,
			menuRef: z
		};
	}
	l.default = S;
}), 98);
