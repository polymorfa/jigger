__d("WAWebCarousel.react", [
	"WAWebChevronCustomIcons",
	"WAWebChevronIcon.react",
	"WAWebResizeObserver",
	"WAWebStopEvent",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"react",
	"react-compiler-runtime",
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
		var t, n, r = o("react-compiler-runtime").c(81), a = e.allowPartialCards, i = e.cardWidth, l = e.carouselMargins, u = e.children, c = e.enableWheelScroll, p = e.isRTL, g = e.onStepBackward, y = e.onStepForward, b = e.ref, S = e.spacing, R = e.stepButtonProps, L = e.stepButtonScrollEasing, k = e.stepButtonScrollSpeed, I = _(), T = _(), $ = x(T, p), P;
		r[0] !== $ || r[1] !== L || r[2] !== k ? (P = {
			scrollIf: $,
			stepButtonScrollEasing: L,
			stepButtonScrollSpeed: k
		}, r[0] = $, r[1] = L, r[2] = k, r[3] = P) : P = r[3];
		var N = D(P), M = N[1], w = f(!1), A = w[0], F = w[1], O = f(!0), B = O[0], W = O[1], q = i + S, U;
		r[4] !== l ? (U = function() {
			var e = T.current;
			return e == null ? null : l != null ? e.clientWidth - l.left - l.right : e.clientWidth;
		}, r[4] = l, r[5] = U) : U = r[5];
		var V = U, H;
		r[6] !== q || r[7] !== M ? (H = function(t) {
			M(t * q, !0);
		}, r[6] = q, r[7] = M, r[8] = H) : H = r[8];
		var G = H, z;
		r[9] !== G ? (z = function() {
			return {
				outerDivRef: I,
				scrollToCard: G
			};
		}, r[9] = G, r[10] = z) : z = r[10], d(b, z);
		var j;
		r[11] !== V || r[12] !== g || r[13] !== $ || r[14] !== q || r[15] !== M ? (j = function(t) {
			var e = $.getScrollLeft(), n = V();
			if (!(e == null || n == null)) {
				var r = Math.ceil((e - h) / q), a = Math.floor((n + h) / q);
				M((r - a) * q), g == null || g(r), o("WAWebStopEvent").stopPropagation(t);
			}
		}, r[11] = V, r[12] = g, r[13] = $, r[14] = q, r[15] = M, r[16] = j) : j = r[16];
		var K = j, Q;
		r[17] !== V || r[18] !== y || r[19] !== $ || r[20] !== q || r[21] !== M ? (Q = function(t) {
			var e = $.getScrollLeft(), n = V();
			if (!(e == null || n == null)) {
				var r = Math.floor((e + n + h) / q);
				M(r * q);
				var a = Math.ceil((e - h) / q);
				y == null || y(a), o("WAWebStopEvent").stopPropagation(t);
			}
		}, r[17] = V, r[18] = y, r[19] = $, r[20] = q, r[21] = M, r[22] = Q) : Q = r[22];
		var X = Q, Y;
		if (r[23] !== i || r[24] !== u) {
			var J;
			r[26] !== i ? (J = function(t, n) {
				return s.jsx(v, {
					width: i,
					children: t
				}, n);
			}, r[26] = i, r[27] = J) : J = r[27], Y = u.map(J), r[23] = i, r[24] = u, r[25] = Y;
		} else Y = r[25];
		var Z = Y, ee;
		if (r[28] !== Z || r[29] !== S) {
			ee = [];
			for (var te = 0; te < Z.length; te++) ee.push(Z[te]), te < Z.length - 1 && ee.push(s.jsx("div", {
				className: "x1rg5ohu",
				style: { width: S + "px" }
			}, "spacer-post-" + te));
			r[28] = Z, r[29] = S, r[30] = ee;
		} else ee = r[30];
		var ne;
		r[31] !== p || r[32] !== $ ? (ne = function() {
			var e = $.getScrollLeft(), t = T.current;
			if (!(e == null || t == null)) {
				var n = t.scrollWidth - t.clientWidth - e > h, r = e > h;
				F(p ? n : r), W(p ? r : n);
			}
		}, r[31] = p, r[32] = $, r[33] = ne) : ne = r[33];
		var re = ne, oe = _(u.length), ae, ie;
		r[34] !== u.length || r[35] !== re ? (ie = function() {
			if (I.current != null) {
				var e = I.current, t = oe.current;
				return oe.current = u.length, t !== u.length && re(), o("WAWebResizeObserver").observe(e, re);
			}
		}, ae = [u.length, re], r[34] = u.length, r[35] = re, r[36] = ae, r[37] = ie) : (ae = r[36], ie = r[37]), m(ie, ae);
		var le, se;
		r[38] !== c || r[39] !== M ? (le = function() {
			if (c === !0) {
				var e = I.current;
				if (e != null) {
					var t = function(t) {
						var e = T.current;
						e != null && t.deltaX !== 0 && (M(null), t.preventDefault(), t.stopPropagation(), e.scrollLeft = e.scrollLeft + t.deltaX);
					};
					return e.addEventListener("wheel", t, { passive: !1 }), (function() {
						e.removeEventListener("wheel", t);
					});
				}
			}
		}, se = [c, M], r[38] = c, r[39] = M, r[40] = le, r[41] = se) : (le = r[40], se = r[41]), m(le, se);
		var ue;
		r[42] !== l ? (ue = l ? {
			paddingInlineStart: l.left,
			paddingInlineEnd: l.right
		} : null, r[42] = l, r[43] = ue) : ue = r[43];
		var ce = ue, de = (t = l == null ? void 0 : l.left) != null ? t : S / 2, me = (n = l == null ? void 0 : l.right) != null ? n : S / 2, pe;
		r[44] !== a || r[45] !== i || r[46] !== me || r[47] !== de || r[48] !== S ? (pe = a === !0 ? { width: "100%" } : {
			marginInlineStart: de,
			marginInlineEnd: me,
			width: C({
				cardWidth: i,
				marginEnd: me,
				marginInlineStart: de,
				spacing: S
			})
		}, r[44] = a, r[45] = i, r[46] = me, r[47] = de, r[48] = S, r[49] = pe) : pe = r[49];
		var _e = pe, fe;
		r[50] === Symbol.for("react.memo_cache_sentinel") ? (fe = "x1n2onr6", r[50] = fe) : fe = r[50];
		var ge;
		r[51] !== p || r[52] !== A || r[53] !== K || r[54] !== R || r[55] !== X ? (ge = A && (R == null ? void 0 : R.hideButtons) !== !0 && s.jsx(E, {
			direction: "left",
			onClick: p ? X : K,
			stepButtonProps: R
		}), r[51] = p, r[52] = A, r[53] = K, r[54] = R, r[55] = X, r[56] = ge) : ge = r[56];
		var he;
		r[57] !== p || r[58] !== B || r[59] !== K || r[60] !== R || r[61] !== X ? (he = B && (R == null ? void 0 : R.hideButtons) !== !0 && s.jsx(E, {
			direction: "right",
			onClick: p ? K : X,
			stepButtonProps: R
		}), r[57] = p, r[58] = B, r[59] = K, r[60] = R, r[61] = X, r[62] = he) : he = r[62];
		var ye;
		r[63] === Symbol.for("react.memo_cache_sentinel") ? (ye = { className: "x1n2onr6 xh8yej3 x14aock7 x1rife3k x1rohswg xfk6m8" }, r[63] = ye) : ye = r[63];
		var Ce;
		r[64] !== M ? (Ce = function() {
			return M(null);
		}, r[64] = M, r[65] = Ce) : Ce = r[65];
		var be;
		r[66] !== l ? (be = {
			0: { className: "x1n2onr6 x3nfvp2 x1q0g3np x1iyjqo2 x1qjc9v5" },
			1: { className: "x1n2onr6 x3nfvp2 x1q0g3np x1iyjqo2 x1qjc9v5 x9f619" }
		}[!!l << 0], r[66] = l, r[67] = be) : be = r[67];
		var ve;
		r[68] !== ee || r[69] !== ce || r[70] !== be ? (ve = s.jsx("div", babelHelpers.extends({}, be, {
			style: ce,
			children: ee
		})), r[68] = ee, r[69] = ce, r[70] = be, r[71] = ve) : ve = r[71];
		var Se;
		r[72] !== re || r[73] !== Ce || r[74] !== ve ? (Se = s.jsx("div", babelHelpers.extends({ ref: T }, ye, {
			onWheel: Ce,
			onScroll: re,
			children: ve
		})), r[72] = re, r[73] = Ce, r[74] = ve, r[75] = Se) : Se = r[75];
		var Re;
		return r[76] !== _e || r[77] !== ge || r[78] !== he || r[79] !== Se ? (Re = s.jsxs("div", {
			className: fe,
			ref: I,
			style: _e,
			children: [
				ge,
				he,
				Se
			]
		}), r[76] = _e, r[77] = ge, r[78] = he, r[79] = Se, r[80] = Re) : Re = r[80], Re;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, r = e.width, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = "x78zum5 xdt5ytf x6ikm8r x10wlt62", t[0] = a) : a = t[0];
		var i = r + "px", l;
		t[1] !== i ? (l = { width: i }, t[1] = i, t[2] = l) : l = t[2];
		var u;
		return t[3] !== n || t[4] !== l ? (u = s.jsx("div", {
			className: a,
			style: l,
			children: n
		}), t[3] = n, t[4] = l, t[5] = u) : u = t[5], u;
	}
	var S = 45, R = -40, L = 30;
	function E(e) {
		var t, n, a, i, l = o("react-compiler-runtime").c(14), u = e.direction, c = e.onClick, d = e.stepButtonProps, m = (t = d == null ? void 0 : d.size) != null ? t : S, p = (n = d == null ? void 0 : d.offset) != null ? n : R, _ = (a = d == null ? void 0 : d.iconSize) != null ? a : L, f = d == null ? void 0 : d.verticalOffset, h = d == null ? void 0 : d.tabIndex, C = (i = d == null ? void 0 : d.useWdsIcons) != null ? i : !1, b = d != null, v;
		l[0] !== p || l[1] !== m || l[2] !== u || l[3] !== b || l[4] !== f ? (v = b ? babelHelpers.extends({
			width: m,
			height: m,
			top: "calc(50% - " + m / 2 + "px" + (f != null ? " + " + f + "px" : "") + ")"
		}, u === "left" ? { left: p } : { right: p }) : void 0, l[0] = p, l[1] = m, l[2] = u, l[3] = b, l[4] = f, l[5] = v) : v = l[5];
		var E = v, k;
		return l[6] !== _ || l[7] !== u || l[8] !== b || l[9] !== c || l[10] !== E || l[11] !== h || l[12] !== C ? (k = u === "left" ? s.jsx("button", babelHelpers.extends({}, {
			0: { className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 xar8odu" },
			1: { className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 xar8odu x78zum5 x6s0dn4 xl56j7k" }
		}[!!b << 0], {
			style: E,
			onClick: c,
			tabIndex: h,
			children: C ? s.jsx(r("WDSIconIcChevronLeft.react"), {
				width: _,
				height: _,
				iconXstyle: y.chevronCentered
			}) : s.jsx(o("WAWebChevronCustomIcons").ChevronLeftCustomIcon, {
				width: _,
				height: _,
				xstyle: [b ? y.chevronCentered : y.leftChevron, g.paddingAuto]
			})
		})) : s.jsx("button", babelHelpers.extends({}, {
			0: { className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 x1mrsgf3" },
			1: { className: "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 x1mrsgf3 x78zum5 x6s0dn4 xl56j7k" }
		}[!!b << 0], {
			style: E,
			onClick: c,
			tabIndex: h,
			children: C ? s.jsx(r("WDSIconIcChevronRight.react"), {
				width: _,
				height: _,
				iconXstyle: y.chevronCentered
			}) : s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				width: _,
				height: _,
				xstyle: b ? y.chevronCentered : y.rightChevron
			})
		})), l[6] = _, l[7] = u, l[8] = b, l[9] = c, l[10] = E, l[11] = h, l[12] = C, l[13] = k) : k = l[13], k;
	}
	var k = 50, I = .08, T = 1;
	function D(e) {
		var t = o("react-compiler-runtime").c(14), n = e.scrollIf, a = e.stepButtonScrollEasing, i = e.stepButtonScrollSpeed, l = f(null), s = l[0], u = l[1], c = f(!1), d = c[0], m = c[1], p = _(null), g;
		t[0] !== n || t[1] !== s || t[2] !== a || t[3] !== i ? (g = function() {
			var e = n.getScrollLeft();
			if (e == null || s == null) {
				m(!1);
				return;
			}
			var t = s, r = e;
			if (r === t) {
				m(!1);
				return;
			}
			var o = i != null ? i : k, l = Math.abs(t - r), u;
			a === !0 ? u = Math.max(Math.min(l * I, o), T) : u = o;
			var c = l < u ? t : r + Math.sign(t - r) * u;
			n.scrollTo({
				left: c,
				behavior: "instant"
			});
			var d = p.current == null || n.getScrollLeft() !== p.current;
			p.current = n.getScrollLeft(), d || m(!1);
		}, t[0] = n, t[1] = s, t[2] = a, t[3] = i, t[4] = g) : g = t[4];
		var h = g, y;
		t[5] !== d ? (y = { active: d }, t[5] = d, t[6] = y) : y = t[6], r("useWAWebAnimationFrames")(h, y);
		var C;
		t[7] !== n ? (C = function(t, r) {
			if (r === !0 && t != null) {
				n.scrollTo({
					left: t,
					behavior: "instant"
				});
				return;
			}
			u(t), m(!0);
		}, t[7] = n, t[8] = C) : C = t[8];
		var b = C, v;
		t[9] !== b ? (v = function(t, n) {
			return b(t, n);
		}, t[9] = b, t[10] = v) : v = t[10];
		var S;
		return t[11] !== s || t[12] !== v ? (S = [s, v], t[11] = s, t[12] = v, t[13] = S) : S = t[13], S;
	}
	function x(e, t) {
		var n = o("react-compiler-runtime").c(3), r;
		return n[0] !== t || n[1] !== e ? (r = {
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
		}, n[0] = t, n[1] = e, n[2] = r) : r = n[2], r;
	}
	l.default = b;
}), 98);
