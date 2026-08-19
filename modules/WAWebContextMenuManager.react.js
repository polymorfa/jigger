__d("WAWebContextMenuManager.react", [
	"WAWebABProps",
	"WAWebCmd",
	"WAWebDropdown.react",
	"WAWebFocusTracer",
	"WAWebL10N",
	"WAWebUimContext",
	"WAWebUimUieItem.react",
	"WAWebUimUtils",
	"WAWebVelocityTransitionGroup",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.cloneElement, d = u.useCallback, m = u.useImperativeHandle, p = u.useLayoutEffect, _ = u.useRef, f = u.useState, g = {
		MENU: "MENU",
		TOOLTIP: "TOOLTIP"
	};
	function h(e, t) {
		var n = null;
		if (e instanceof HTMLElement) n = e.ownerDocument;
		else {
			var r = e != null ? e : null;
			o("WAWebUimUtils").isCrossWindowHTMLElement(r) && (n = r.ownerDocument);
		}
		if (n == null) return !0;
		var a = t != null ? t : document;
		return n === a;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(43), n = e.documentEl, a = e.ref, i = e.type, l = e.windowEl, u = n != null ? n : document, d = l != null ? l : window, y = _(null), b = _(null), S = _(null), R = f(null), L = R[0], E = R[1], k = f(null), I = k[0], T = k[1], D;
		t[0] !== n || t[1] !== u || t[2] !== (L == null ? void 0 : L.uim) ? (D = function(t, a) {
			var e, i, l, s, c, d, m;
			if (h(t.menuOptions.anchor, n)) {
				L == null || L.uim.pop(), b.current = a;
				var p = u.activeElement;
				(p instanceof HTMLElement || o("WAWebUimUtils").isCrossWindowHTMLElement(p)) && (S.current = p);
				var _ = t.menuOptions, f = t.uim, g = _.event;
				g == null || g.stopPropagation();
				var y = g == null ? 0 : 10;
				T(null);
				var C = typeof (g == null ? void 0 : g.clientX) == "number" ? g.clientX : (e = _.offsetX) != null ? e : 0, v = typeof (g == null ? void 0 : g.clientY) == "number" ? g.clientY : (i = _.offsetY) != null ? i : 0;
				E(babelHelpers.extends({}, _, {
					type: (l = _.type) != null ? l : o("WAWebDropdown.react").MenuType.Dropdown,
					originX: C,
					originY: v,
					offsetX: (s = _.offsetX) != null ? s : y,
					offsetY: (c = _.offsetY) != null ? c : y,
					dirX: (d = _.dirX) != null ? d : r("WAWebL10N").isRTL() ? o("WAWebDropdown.react").DirX.LEFT : o("WAWebDropdown.react").DirX.RIGHT,
					dirY: (m = _.dirY) != null ? m : o("WAWebDropdown.react").DirY.BOTTOM,
					key: Math.random(),
					uim: f
				}));
			}
		}, t[0] = n, t[1] = u, t[2] = L == null ? void 0 : L.uim, t[3] = D) : D = t[3], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, i === g.MENU ? "open_context_menu" : "open_tooltip", D);
		var x;
		t[4] !== (L == null ? void 0 : L.uim) ? (x = function(t) {
			if (t == null || (L == null ? void 0 : L.uim) === t) {
				var e = t == null ? void 0 : t.dismissEvent;
				e != null && e instanceof KeyboardEvent ? (r("WAWebFocusTracer").focus(S.current), S.current = null) : o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup") && (S.current = null), E(null), T(null);
			}
		}, t[4] = L == null ? void 0 : L.uim, t[5] = x) : x = t[5], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, i === g.MENU ? "close_context_menu" : "close_tooltip", x);
		var $, P;
		t[6] !== I || t[7] !== d || t[8] !== L ? ($ = function() {
			var e, t, n = y.current;
			if (!(L == null || n == null)) {
				var r = L.anchor;
				if (r != null && (r instanceof HTMLElement || o("WAWebUimUtils").isCrossWindowHTMLElement(r != null ? r : null)) && r.isConnected === !1) {
					L.uim.requestDismiss();
					return;
				}
				if (I == null) {
					var a = n.clientWidth, i = n.clientHeight + 10;
					T(v({
						anchor: (e = L.anchor) != null ? e : (t = L.anchorRef) == null ? void 0 : t.current,
						temporaryMenuPosition: L,
						menuWidth: a,
						menuHeight: i,
						windowRef: d
					}));
				}
			}
		}, P = [
			L,
			I,
			d
		], t[6] = I, t[7] = d, t[8] = L, t[9] = $, t[10] = P) : ($ = t[9], P = t[10]), p($, P);
		var N;
		t[11] !== L ? (N = function() {
			return { isOpen: function() {
				return L != null;
			} };
		}, t[11] = L, t[12] = N) : N = t[12], m(a, N);
		var M;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (M = function(t) {
			t != null && (b.current == null || b.current(t.getElement()), b.current = null);
		}, t[13] = M) : M = t[13];
		var w = M, A;
		if (t[14] !== I || t[15] !== L) {
			if (o("WAWebABProps").getABPropConfigValue("context_menu_content_fix")) A = s.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: (L == null ? void 0 : L.type) === o("WAWebDropdown.react").MenuType.Picker ? "dropdown-picker" : "dropdown",
				children: L != null ? s.jsx(C, {
					adjustedMenuPosition: I,
					dropdownRef: y,
					handleRef: w,
					menu: L
				}, "key-" + L.key) : null
			});
			else if (L == null) A = s.jsx(r("WAWebVelocityTransitionGroup"), { transitionName: "dropdown" });
			else {
				var F = L.autoFocus, O = L.findFirstItem, B = L.horizontal, W = L.key, q = L.menu, U = L.raiseAboveMenu, V = L.testid, H = L.theme, G = L.tooltipColorScheme, z = L.type, j = I != null ? I : L, K = j.dirX, Q = j.dirY, X = j.offsetX, Y = j.offsetY, J = j.originX, Z = j.originY, ee;
				t[17] !== q || t[18] !== H ? (ee = Array.isArray(q) ? q.map(function(e) {
					return c(e, H === void 0 ? null : { theme: H });
				}) : q, t[17] = q, t[18] = H, t[19] = ee) : ee = t[19];
				var te = ee, ne = J + X, re = Z + Y, oe;
				t[20] !== ne || t[21] !== re ? (oe = {
					x: ne,
					y: re
				}, t[20] = ne, t[21] = re, t[22] = oe) : oe = t[22];
				var ae = "key-" + W, ie = I == null, le;
				t[23] !== te ? (le = s.jsx(r("WAWebUimUieItem.react"), {
					ref: w,
					children: te
				}), t[23] = te, t[24] = le) : le = t[24];
				var se;
				t[25] !== F || t[26] !== K || t[27] !== Q || t[28] !== O || t[29] !== B || t[30] !== L.darkMode || t[31] !== z || t[32] !== U || t[33] !== oe || t[34] !== ae || t[35] !== ie || t[36] !== le || t[37] !== V || t[38] !== G ? (se = s.jsx(o("WAWebDropdown.react").Dropdown, {
					ref: y,
					origin: oe,
					type: z,
					dirX: K,
					dirY: Q,
					horizontal: B,
					autoFocus: F,
					findFirstItem: O,
					isTemporaryRender: ie,
					tooltipColorScheme: G,
					testid: V,
					raiseAboveMenu: U,
					darkMode: L.darkMode,
					children: le
				}, ae), t[25] = F, t[26] = K, t[27] = Q, t[28] = O, t[29] = B, t[30] = L.darkMode, t[31] = z, t[32] = U, t[33] = oe, t[34] = ae, t[35] = ie, t[36] = le, t[37] = V, t[38] = G, t[39] = se) : se = t[39], A = s.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: z === o("WAWebDropdown.react").MenuType.Picker ? "dropdown-picker" : "dropdown",
					children: se
				});
			}
			t[14] = I, t[15] = L, t[16] = A;
		} else A = t[16];
		var ue;
		return t[40] !== (L == null ? void 0 : L.uim) || t[41] !== A ? (ue = s.jsx(r("WAWebUimContext").Consumer, { children: function(t) {
			return s.jsx(r("WAWebUimContext").Provider, {
				value: (L == null ? void 0 : L.uim) || t,
				children: A
			});
		} }), t[40] = L == null ? void 0 : L.uim, t[41] = A, t[42] = ue) : ue = t[42], ue;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(24), n = e.adjustedMenuPosition, a = e.dropdownRef, i = e.handleRef, l = e.menu, u = l.autoFocus, d = l.findFirstItem, m = l.horizontal, p = l.menu, _ = l.raiseAboveMenu, f = l.testid, g = l.theme, h = l.tooltipColorScheme, y = l.type, C = n != null ? n : l, b = C.dirX, v = C.dirY, S = C.offsetX, R = C.offsetY, L = C.originX, E = C.originY, k;
		t[0] !== p || t[1] !== g ? (k = Array.isArray(p) ? p.map(function(e) {
			return c(e, g === void 0 ? null : { theme: g });
		}) : p, t[0] = p, t[1] = g, t[2] = k) : k = t[2];
		var I = k, T = L + S, D = E + R, x;
		t[3] !== T || t[4] !== D ? (x = {
			x: T,
			y: D
		}, t[3] = T, t[4] = D, t[5] = x) : x = t[5];
		var $ = n == null, P;
		t[6] !== I || t[7] !== i ? (P = s.jsx(r("WAWebUimUieItem.react"), {
			ref: i,
			children: I
		}), t[6] = I, t[7] = i, t[8] = P) : P = t[8];
		var N;
		return t[9] !== u || t[10] !== b || t[11] !== v || t[12] !== a || t[13] !== d || t[14] !== m || t[15] !== l.darkMode || t[16] !== _ || t[17] !== x || t[18] !== $ || t[19] !== P || t[20] !== f || t[21] !== h || t[22] !== y ? (N = s.jsx(o("WAWebDropdown.react").Dropdown, {
			ref: a,
			origin: x,
			type: y,
			dirX: b,
			dirY: v,
			horizontal: m,
			autoFocus: u,
			findFirstItem: d,
			isTemporaryRender: $,
			tooltipColorScheme: h,
			testid: f,
			raiseAboveMenu: _,
			darkMode: l.darkMode,
			children: P
		}), t[9] = u, t[10] = b, t[11] = v, t[12] = a, t[13] = d, t[14] = m, t[15] = l.darkMode, t[16] = _, t[17] = x, t[18] = $, t[19] = P, t[20] = f, t[21] = h, t[22] = y, t[23] = N) : N = t[23], N;
	}
	var b = y;
	function v(e) {
		var t = e.anchor, n = e.menuHeight, r = e.menuWidth, a = e.temporaryMenuPosition, i = e.windowRef, l = i.innerWidth, s = i.innerHeight, u = a.dirX, c = a.dirY, d = a.offsetX, m = a.offsetY, p = a.originX, _ = a.originY, f = p, g = p, h = _, y = _, C = 0;
		if (t != null && (t instanceof HTMLElement || o("WAWebUimUtils").isCrossWindowHTMLElement(t))) {
			var b = t.getBoundingClientRect();
			f = b.left, g = b.right, y = b.bottom, h = b.top, C = t.offsetWidth;
		}
		var v = u;
		v === o("WAWebDropdown.react").DirX.RIGHT && f + r > l && g - r > 0 ? v = o("WAWebDropdown.react").DirX.LEFT : v === o("WAWebDropdown.react").DirX.LEFT && g - r < 0 && f + r < l ? v = o("WAWebDropdown.react").DirX.RIGHT : v === o("WAWebDropdown.react").DirX.CENTER && (g + r / 2 > l ? v = o("WAWebDropdown.react").DirX.LEFT : f - r / 2 < 0 && (v = o("WAWebDropdown.react").DirX.RIGHT));
		var R = c;
		R === o("WAWebDropdown.react").DirY.BOTTOM && y + n + m > s && h - n > 0 ? R = o("WAWebDropdown.react").DirY.TOP : R === o("WAWebDropdown.react").DirY.TOP && h - n < 0 && (R = o("WAWebDropdown.react").DirY.BOTTOM);
		var L;
		R === o("WAWebDropdown.react").DirY.TOP ? L = h : L = y;
		var E = d, k = m;
		return t || (v === o("WAWebDropdown.react").DirX.LEFT && (E = 0), R === o("WAWebDropdown.react").DirY.TOP && (k = 0)), {
			dirX: v,
			dirY: R,
			originX: S({
				anchorWidth: C,
				dx: v,
				left: f,
				right: g
			}),
			originY: L,
			offsetX: E,
			offsetY: k
		};
	}
	function S(e) {
		var t = e.anchorWidth, n = e.dx, r = e.left, a = e.right;
		switch (n) {
			case o("WAWebDropdown.react").DirX.RIGHT: return r;
			case o("WAWebDropdown.react").DirX.LEFT: return a;
			case o("WAWebDropdown.react").DirX.CENTER: return r + t / 2;
		}
	}
	l.Type = g, l.shouldHandleTooltipEvent = h, l.ContextMenuManager = b, l.calculateAdjustedMenuPosition = v;
}), 98);
