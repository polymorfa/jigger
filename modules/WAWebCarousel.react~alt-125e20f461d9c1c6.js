__d("WAWebCarousel.react", [
	"WAWebChevronCustomIcons",
	"WAWebChevronIcon.react",
	"WAWebResizeObserver",
	"WAWebStopEvent",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"react",
	"useWAWebAnimationFrames"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useImperativeHandle, m = u.useLayoutEffect, p = u.useMemo, _ = u.useRef, f = u.useState, g = { paddingAuto: {
		paddingTop: null,
		paddingInlineEnd: null,
		paddingBottom: null,
		paddingInlineStart: null,
		$$css: !0
	} }, h = 25, y = {
		leftChevron: {
			position: "x1n2onr6",
			top: "xnfr1j",
			color: "x14ug900",
			$$css: !0
		},
		rightChevron: {
			position: "x1n2onr6",
			insetInlineStart: "xjwk6fx",
			left: null,
			right: null,
			top: "xnfr1j",
			color: "x14ug900",
			$$css: !0
		},
		chevronCentered: {
			color: "x14ug900",
			$$css: !0
		}
	}, C = function(t) {
		var e = t.cardWidth, n = t.marginEnd, r = t.marginInlineStart, o = t.spacing, a = e + o + "px", i = "calc(100% - " + r + "px - " + n + "px + " + o + "px)", l = "calc(round(down, " + i + ", " + a + ") - " + o + "px)";
		return "max(" + l + ", " + e + "px)";
	};
	function b(e) {
		var t, n, r = e.allowPartialCards, a = e.cardWidth, i = e.carouselMargins, l = e.children, u = e.enableWheelScroll, p = e.isRTL, g = e.onStepBackward, y = e.onStepForward, b = e.ref, S = e.spacing, R = e.stepButtonProps, L = e.stepButtonScrollEasing, k = e.stepButtonScrollSpeed, I = _(), T = _(), $ = x(T, p), P = D({
			scrollIf: $,
			stepButtonScrollEasing: L,
			stepButtonScrollSpeed: k
		}), N = P[0], M = P[1], w = f(!1), A = w[0], F = w[1], O = f(!0), B = O[0], W = O[1], q = a + S, U = c(function() {
			var e = T.current;
			return e == null ? null : i != null ? e.clientWidth - i.left - i.right : e.clientWidth;
		}, [i]), V = c(function(e) {
			M(e * q, !0);
		}, [M, q]);
		d(b, function() {
			return {
				outerDivRef: I,
				scrollToCard: V
			};
		});
		for (var H = c(function(e) {
			var t = $.getScrollLeft(), n = U();
			if (!(t == null || n == null)) {
				var r = Math.ceil((t - h) / q), a = Math.floor((n + h) / q);
				M((r - a) * q), g == null || g(r), o("WAWebStopEvent").stopPropagation(e);
			}
		}, [
			U,
			$,
			q,
			M,
			g
		]), G = c(function(e) {
			var t = $.getScrollLeft(), n = U();
			if (!(t == null || n == null)) {
				var r = Math.floor((t + n + h) / q);
				M(r * q);
				var a = Math.ceil((t - h) / q);
				y == null || y(a), o("WAWebStopEvent").stopPropagation(e);
			}
		}, [
			U,
			$,
			q,
			M,
			y
		]), z = l.map(function(e, t) {
			return s.jsx(v, {
				width: a,
				children: e
			}, t);
		}), j = [], K = 0; K < z.length; K++) j.push(z[K]), K < z.length - 1 && j.push(s.jsx("div", {
			className: "x1rg5ohu",
			style: { width: S + "px" }
		}, "spacer-post-" + K));
		var Q = c(function() {
			var e = $.getScrollLeft(), t = T.current;
			if (!(e == null || t == null)) {
				var n = t.scrollWidth - t.clientWidth - e > h, r = e > h;
				F(p ? n : r), W(p ? r : n);
			}
		}, [p, $]), X = _(l.length);
		m(function() {
			if (I.current != null) {
				var e = I.current, t = X.current;
				return X.current = l.length, t !== l.length && Q(), o("WAWebResizeObserver").observe(e, Q);
			}
		}, [l.length, Q]), m(function() {
			if (u === !0) {
				var e = I.current;
				if (e != null) {
					var t = function(t) {
						var e = T.current;
						e != null && t.deltaX !== 0 && (M(null), t.preventDefault(), t.stopPropagation(), e.scrollLeft += t.deltaX);
					};
					return e.addEventListener("wheel", t, { passive: !1 }), function() {
						e.removeEventListener("wheel", t);
					};
				}
			}
		}, [u, M]);
		var Y = i ? {
			paddingInlineStart: i.left,
			paddingInlineEnd: i.right
		} : null, J = (t = i == null ? void 0 : i.left) != null ? t : S / 2, Z = (n = i == null ? void 0 : i.right) != null ? n : S / 2, ee = r === !0 ? { width: "100%" } : {
			marginInlineStart: J,
			marginInlineEnd: Z,
			width: C({
				cardWidth: a,
				marginEnd: Z,
				marginInlineStart: J,
				spacing: S
			})
		};
		return s.jsxs("div", {
			className: "x1n2onr6",
			ref: I,
			style: ee,
			children: [
				A && (R == null ? void 0 : R.hideButtons) !== !0 && s.jsx(E, {
					direction: "left",
					onClick: p ? G : H,
					stepButtonProps: R
				}),
				B && (R == null ? void 0 : R.hideButtons) !== !0 && s.jsx(E, {
					direction: "right",
					onClick: p ? H : G,
					stepButtonProps: R
				}),
				s.jsx("div", {
					ref: T,
					className: "x1n2onr6 xh8yej3 x14aock7 x1rife3k x1rohswg xfk6m8",
					onWheel: function() {
						return M(null);
					},
					onScroll: Q,
					children: s.jsx("div", babelHelpers.extends({}, {
						0: { className: "x1n2onr6 x3nfvp2 x1q0g3np x1iyjqo2 x1qjc9v5" },
						1: { className: "x1n2onr6 x3nfvp2 x1q0g3np x1iyjqo2 x1qjc9v5 x9f619" }
					}[!!i << 0], {
						style: Y,
						children: j
					}))
				})
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.children, n = e.width;
		return s.jsx("div", {
			className: "x78zum5 xdt5ytf x6ikm8r x10wlt62",
			style: { width: n + "px" },
			children: t
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	var S = 45, R = -40, L = 30;
	function E(e) {
		var t, n, a, i, l = e.direction, u = e.onClick, c = e.stepButtonProps, d = (t = c == null ? void 0 : c.size) != null ? t : S, m = (n = c == null ? void 0 : c.offset) != null ? n : R, p = (a = c == null ? void 0 : c.iconSize) != null ? a : L, _ = c == null ? void 0 : c.verticalOffset, f = c == null ? void 0 : c.tabIndex, h = (i = c == null ? void 0 : c.useWdsIcons) != null ? i : !1, C = c != null, b = C ? babelHelpers.extends({
			width: d,
			height: d,
			top: "calc(50% - " + d / 2 + "px" + (_ != null ? " + " + _ + "px" : "") + ")"
		}, l === "left" ? { left: m } : { right: m }) : void 0;
		return l === "left" ? s.jsx("button", babelHelpers.extends({}, {
			0: { className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 xar8odu" },
			1: { className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 xar8odu x78zum5 x6s0dn4 xl56j7k" }
		}[!!C << 0], {
			style: b,
			onClick: u,
			tabIndex: f,
			children: h ? s.jsx(r("WDSIconIcChevronLeft.react"), {
				width: p,
				height: p,
				iconXstyle: y.chevronCentered
			}) : s.jsx(o("WAWebChevronCustomIcons").ChevronLeftCustomIcon, {
				width: p,
				height: p,
				xstyle: [C ? y.chevronCentered : y.leftChevron, g.paddingAuto]
			})
		})) : s.jsx("button", babelHelpers.extends({}, {
			0: { className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 x1mrsgf3" },
			1: { className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 x1mrsgf3 x78zum5 x6s0dn4 xl56j7k" }
		}[!!C << 0], {
			style: b,
			onClick: u,
			tabIndex: f,
			children: h ? s.jsx(r("WDSIconIcChevronRight.react"), {
				width: p,
				height: p,
				iconXstyle: y.chevronCentered
			}) : s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				width: p,
				height: p,
				xstyle: C ? y.chevronCentered : y.rightChevron
			})
		}));
	}
	E.displayName = E.name + " [from " + i.id + "]";
	var k = 50, I = .08, T = 1;
	function D(e) {
		var t = e.scrollIf, n = e.stepButtonScrollEasing, o = e.stepButtonScrollSpeed, a = f(null), i = a[0], l = a[1], s = f(!1), u = s[0], d = s[1], m = _(null), p = c(function() {
			var e = t.getScrollLeft();
			if (e == null || i == null) {
				d(!1);
				return;
			}
			var r = i, a = e;
			if (a === r) {
				d(!1);
				return;
			}
			var l = o != null ? o : k, s = Math.abs(r - a), u;
			n === !0 ? u = Math.max(Math.min(s * I, l), T) : u = l;
			var c = s < u ? r : a + Math.sign(r - a) * u;
			t.scrollTo({
				left: c,
				behavior: "instant"
			});
			var p = m.current == null || t.getScrollLeft() !== m.current;
			m.current = t.getScrollLeft(), p || d(!1);
		}, [
			t,
			o,
			n,
			i
		]);
		r("useWAWebAnimationFrames")(p, { active: u });
		var g = c(function(e, n) {
			if (n === !0 && e != null) {
				t.scrollTo({
					left: e,
					behavior: "instant"
				});
				return;
			}
			l(e), d(!0);
		}, [t]);
		return [i, function(e, t) {
			return g(e, t);
		}];
	}
	function x(e, t) {
		return p(function() {
			return {
				getScrollLeft: function() {
					var n = e.current;
					return n == null ? null : t ? -n.scrollLeft : n.scrollLeft;
				},
				scrollTo: function(r) {
					var n = r.behavior, o = r.left, a = e.current;
					a != null && a.scrollTo({
						left: t ? -o : o,
						behavior: n
					});
				}
			};
		}, [t, e]);
	}
	l.default = b;
}), 98);
