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
		var t = e.documentEl, n = e.ref, a = e.type, i = e.windowEl, l = t != null ? t : document, u = i != null ? i : window, y = _(null), b = _(null), S = _(null), R = f(null), L = R[0], E = R[1], k = f(null), I = k[0], T = k[1];
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, a === g.MENU ? "open_context_menu" : "open_tooltip", function(e, n) {
			var a, i, s, u, c, d, m;
			if (h(e.menuOptions.anchor, t)) {
				L == null || L.uim.pop(), b.current = n;
				var p = l.activeElement;
				(p instanceof HTMLElement || o("WAWebUimUtils").isCrossWindowHTMLElement(p)) && (S.current = p);
				var _ = e.menuOptions, f = e.uim, g = _.event;
				g == null || g.stopPropagation();
				var y = g == null ? 0 : 10;
				T(null);
				var C = typeof (g == null ? void 0 : g.clientX) == "number" ? g.clientX : (a = _.offsetX) != null ? a : 0, v = typeof (g == null ? void 0 : g.clientY) == "number" ? g.clientY : (i = _.offsetY) != null ? i : 0;
				E(babelHelpers.extends({}, _, {
					type: (s = _.type) != null ? s : o("WAWebDropdown.react").MenuType.Dropdown,
					originX: C,
					originY: v,
					offsetX: (u = _.offsetX) != null ? u : y,
					offsetY: (c = _.offsetY) != null ? c : y,
					dirX: (d = _.dirX) != null ? d : r("WAWebL10N").isRTL() ? o("WAWebDropdown.react").DirX.LEFT : o("WAWebDropdown.react").DirX.RIGHT,
					dirY: (m = _.dirY) != null ? m : o("WAWebDropdown.react").DirY.BOTTOM,
					key: Math.random(),
					uim: f
				}));
			}
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, a === g.MENU ? "close_context_menu" : "close_tooltip", function(e) {
			if (e == null || (L == null ? void 0 : L.uim) === e) {
				var t = e == null ? void 0 : e.dismissEvent;
				t != null && t instanceof KeyboardEvent ? (r("WAWebFocusTracer").focus(S.current), S.current = null) : o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup") && (S.current = null), E(null), T(null);
			}
		}), p(function() {
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
						windowRef: u
					}));
				}
			}
		}, [
			L,
			I,
			u
		]), m(n, function() {
			return { isOpen: function() {
				return L != null;
			} };
		});
		var D = d(function(e) {
			e != null && (b.current == null || b.current(e.getElement()), b.current = null);
		}, []), x;
		if (o("WAWebABProps").getABPropConfigValue("context_menu_content_fix")) x = s.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: (L == null ? void 0 : L.type) === o("WAWebDropdown.react").MenuType.Picker ? "dropdown-picker" : "dropdown",
			children: L != null ? s.jsx(C, {
				adjustedMenuPosition: I,
				dropdownRef: y,
				handleRef: D,
				menu: L
			}, "key-" + L.key) : null
		});
		else if (L == null) x = s.jsx(r("WAWebVelocityTransitionGroup"), { transitionName: "dropdown" });
		else {
			var $ = L.autoFocus, P = L.findFirstItem, N = L.horizontal, M = L.key, w = L.menu, A = L.raiseAboveMenu, F = L.testid, O = L.theme, B = L.tooltipColorScheme, W = L.type, q = I != null ? I : L, U = q.dirX, V = q.dirY, H = q.offsetX, G = q.offsetY, z = q.originX, j = q.originY, K = Array.isArray(w) ? w.map(function(e) {
				return c(e, O === void 0 ? null : { theme: O });
			}) : w;
			x = s.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: W === o("WAWebDropdown.react").MenuType.Picker ? "dropdown-picker" : "dropdown",
				children: s.jsx(o("WAWebDropdown.react").Dropdown, {
					ref: y,
					origin: {
						x: z + H,
						y: j + G
					},
					type: W,
					dirX: U,
					dirY: V,
					horizontal: N,
					autoFocus: $,
					findFirstItem: P,
					isTemporaryRender: I == null,
					tooltipColorScheme: B,
					testid: F,
					raiseAboveMenu: A,
					darkMode: L.darkMode,
					children: s.jsx(r("WAWebUimUieItem.react"), {
						ref: D,
						children: K
					})
				}, "key-" + M)
			});
		}
		return s.jsx(r("WAWebUimContext").Consumer, { children: function(t) {
			return s.jsx(r("WAWebUimContext").Provider, {
				value: (L == null ? void 0 : L.uim) || t,
				children: x
			});
		} });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.adjustedMenuPosition, n = e.dropdownRef, a = e.handleRef, i = e.menu, l = i.autoFocus, u = i.findFirstItem, d = i.horizontal, m = i.menu, p = i.raiseAboveMenu, _ = i.testid, f = i.theme, g = i.tooltipColorScheme, h = i.type, y = t != null ? t : i, C = y.dirX, b = y.dirY, v = y.offsetX, S = y.offsetY, R = y.originX, L = y.originY, E = Array.isArray(m) ? m.map(function(e) {
			return c(e, f === void 0 ? null : { theme: f });
		}) : m;
		return s.jsx(o("WAWebDropdown.react").Dropdown, {
			ref: n,
			origin: {
				x: R + v,
				y: L + S
			},
			type: h,
			dirX: C,
			dirY: b,
			horizontal: d,
			autoFocus: l,
			findFirstItem: u,
			isTemporaryRender: t == null,
			tooltipColorScheme: g,
			testid: _,
			raiseAboveMenu: p,
			darkMode: i.darkMode,
			children: s.jsx(r("WAWebUimUieItem.react"), {
				ref: a,
				children: E
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
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
