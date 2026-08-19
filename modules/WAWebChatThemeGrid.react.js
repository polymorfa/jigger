__d("WAWebChatThemeGrid.react", [
	"fbt",
	"WAWebChatThemeCanvas.react",
	"WAWebKeyboardHotKeys.react",
	"WDSButton.react",
	"WDSFlex.stylex",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebHover",
	"useWAWebRovingGridNavigation"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = { themeRow: {
		rowGap: "x1f0uite",
		columnGap: "xs2akgl",
		paddingInlineEnd: "x5s3kwk",
		paddingInlineStart: "xdylf7x",
		$$css: !0
	} };
	function h(e, t) {
		var n = o("react-compiler-runtime").c(13), r = _(null), a = _(null), i = f(!1), l = i[0], s = i[1], u = f(!1), c = u[0], d = u[1], m = o("useWAWebHover").useWAWebHover(a), g;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (g = function() {
			var e = r.current;
			if (e != null) {
				var t = getComputedStyle(e).direction === "rtl", n = t ? -e.scrollLeft : e.scrollLeft;
				s(n > 1), d(n + e.clientWidth < e.scrollWidth - 1);
			}
		}, n[0] = g) : g = n[0];
		var h = g, y, C;
		n[1] !== e ? (y = function() {
			if (e === !0) {
				h();
				var t = r.current;
				if (t != null) {
					var n = new ResizeObserver(function() {
						h();
					});
					n.observe(t);
					var o = t.firstElementChild;
					return o != null && n.observe(o), (function() {
						n.disconnect();
					});
				}
			}
		}, C = [e, h], n[1] = e, n[2] = y, n[3] = C) : (y = n[2], C = n[3]), p(y, C);
		var b = _(t), v, S;
		n[4] !== e || n[5] !== t ? (v = function() {
			var n = b.current;
			b.current = t, n !== t && e === !0 && r.current != null && (r.current.scrollLeft = 0, h());
		}, S = [
			t,
			e,
			h
		], n[4] = e, n[5] = t, n[6] = v, n[7] = S) : (v = n[6], S = n[7]), p(v, S);
		var R;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (R = function(t) {
			var e = r.current;
			if (e != null) {
				var n = getComputedStyle(e).direction === "rtl", o = e.clientWidth * .8, a = t === "end" ? o : -o;
				n && (a = -a), e.scrollBy({
					left: a,
					behavior: "smooth"
				});
			}
		}, n[8] = R) : R = n[8];
		var L = R, E;
		return n[9] !== c || n[10] !== l || n[11] !== m ? (E = {
			scrollRef: r,
			wrapperRef: a,
			canScrollStart: l,
			canScrollEnd: c,
			isHovering: m,
			updateScrollState: h,
			scrollBy: L
		}, n[9] = c, n[10] = l, n[11] = m, n[12] = E) : E = n[12], E;
	}
	function y(t) {
		var n = o("react-compiler-runtime").c(126), a = t.children, i = t.compact, l = t.currentThemeId, u = t.currentWallpaperId, d = t.horizontal, m = t.onSelect, p = t.pickerItems, _ = t.rowSplit, f = t.showDoodle, y = t.solidWallpaperHex, L = t.themeMode, E = t.themes, k = t.variant, I = t.wallpaperIds, T;
		n[0] !== p || n[1] !== E ? (T = p != null ? p.map(S) : E != null ? E : [], n[0] = p, n[1] = E, n[2] = T) : T = n[2];
		var D = T, x;
		n[3] !== p || n[4] !== I ? (x = p != null ? p.map(v) : I, n[3] = p, n[4] = I, n[5] = x) : x = n[5];
		var $ = x, P = h(d, i === !0 ? null : u != null ? u : l), N = P.canScrollEnd, M = P.canScrollStart, w = P.isHovering, A = P.scrollBy, F = P.scrollRef, O = P.updateScrollState, B = P.wrapperRef, W = d === !0 ? _ != null ? _ : Math.ceil(D.length / 2) : D.length, q = k === "color", U, V;
		n[6] !== p ? (U = p != null ? p.map(b) : null, V = U != null && U.some(C), n[6] = p, n[7] = U, n[8] = V) : (U = n[7], V = n[8]);
		var H = V, G;
		n[9] !== U ? (G = function(t) {
			return U != null && U[t] === !0;
		}, n[9] = U, n[10] = G) : G = n[10];
		var z = G, j;
		n[11] !== l || n[12] !== u || n[13] !== H || n[14] !== z || n[15] !== D || n[16] !== $ ? (j = function(t) {
			return H ? z(t) : D[t] === l && ($ == null || $[t] === (u != null ? u : null));
		}, n[11] = l, n[12] = u, n[13] = H, n[14] = z, n[15] = D, n[16] = $, n[17] = j) : j = n[17];
		var K = j, Q;
		if (n[18] !== K || n[19] !== D) {
			var X;
			n[21] !== K ? (X = function(t, n) {
				return K(n);
			}, n[21] = K, n[22] = X) : X = n[22], Q = D.findIndex(X), n[18] = K, n[19] = D, n[20] = Q;
		} else Q = n[20];
		var Y = Q, J = Y !== -1 ? Y : 0, Z;
		n[23] !== d || n[24] !== q || n[25] !== W ? (Z = d === !0 ? R(W) : o("useWAWebRovingGridNavigation").createVerticalGridMovement(q ? 4 : void 0), n[23] = d, n[24] = q, n[25] = W, n[26] = Z) : Z = n[26];
		var ee = Z, te;
		n[27] !== J || n[28] !== ee || n[29] !== D.length ? (te = {
			initialFocusIndex: J,
			itemCount: D.length,
			movement: ee
		}, n[27] = J, n[28] = ee, n[29] = D.length, n[30] = te) : te = n[30];
		var ne = o("useWAWebRovingGridNavigation").useWAWebRovingGridNavigation(te), re = ne.getItemProps, oe = ne.gridRef, ae = ne.handlers, ie;
		n[31] !== re || n[32] !== d || n[33] !== z || n[34] !== K || n[35] !== m || n[36] !== f || n[37] !== y || n[38] !== L || n[39] !== k || n[40] !== $ ? (ie = function(t, n) {
			var e = $ != null ? $[n] : void 0, o = re(n), a = z(n);
			return c.jsx(r("WAWebChatThemeCanvas.react"), {
				themeId: t,
				isSelected: K(n),
				isCurrent: a,
				themeMode: L,
				onSelect: m,
				onFocusChange: o.onFocus,
				onBlur: o.onBlur,
				tabIndex: o.tabIndex,
				variant: k,
				horizontal: d === !0,
				showDoodle: f,
				solidWallpaperHex: y,
				wallpaperId: e,
				ref: o.ref
			}, a ? "custom" : e != null ? e : t);
		}, n[31] = re, n[32] = d, n[33] = z, n[34] = K, n[35] = m, n[36] = f, n[37] = y, n[38] = L, n[39] = k, n[40] = $, n[41] = ie) : ie = n[41];
		var le = ie;
		if (d === !0) {
			var se, ue, ce, de, me, pe, _e, fe, ge, he, ye, Ce, be, ve, Se, Re;
			if (n[42] !== N || n[43] !== M || n[44] !== ae || n[45] !== w || n[46] !== le || n[47] !== A || n[48] !== F || n[49] !== W || n[50] !== D || n[51] !== O || n[52] !== B) {
				var Le = D.slice(0, W), Ee = D.slice(W);
				se = o("WAWebKeyboardHotKeys.react").HotKeys, ve = ae, Se = "radiogroup", n[69] === Symbol.for("react.memo_cache_sentinel") ? (Re = s._(
					/*BTDS*/
					""
				), n[69] = Re) : Re = n[69], ge = B, he = "chat_theme_scroll_wrapper", n[70] === Symbol.for("react.memo_cache_sentinel") ? (ye = { className: "x1n2onr6" }, n[70] = ye) : ye = n[70], n[71] !== M || n[72] !== w || n[73] !== A ? (Ce = w && M && c.jsx("div", {
					"data-testid": "chat_theme_scroll_start_btn",
					className: "x10l6tqk xwa60dl x1cb1t30 x1vjfegm x1osxwv1",
					children: c.jsx(r("WDSButton.react"), {
						variant: "tonal",
						type: "media",
						size: "small",
						Icon: r("WDSIconIcChevronLeft.react"),
						onPress: function() {
							return A("start");
						},
						"aria-label": s._(
							/*BTDS*/
							""
						)
					})
				}), n[71] = M, n[72] = w, n[73] = A, n[74] = Ce) : Ce = n[74], n[75] !== N || n[76] !== w || n[77] !== A ? (be = w && N && c.jsx("div", {
					"data-testid": "chat_theme_scroll_end_btn",
					className: "x10l6tqk xwa60dl x1cb1t30 x1vjfegm x1fm9i1x",
					children: c.jsx(r("WDSButton.react"), {
						variant: "tonal",
						type: "media",
						size: "small",
						Icon: r("WDSIconIcChevronRight.react"),
						onPress: function() {
							return A("end");
						},
						"aria-label": s._(
							/*BTDS*/
							""
						)
					})
				}), n[75] = N, n[76] = w, n[77] = A, n[78] = be) : be = n[78], me = F, pe = O, _e = "chat_theme_scroll_container";
				var ke;
				n[79] === Symbol.for("react.memo_cache_sentinel") ? (fe = { className: "xw2csxc x10wlt62 x16ovd2e xvpt6g3" }, ue = { className: "xezivpi x78zum5 xdt5ytf x1f0uite xs2akgl" }, ke = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRow, o("WDSFlex.stylex").wdsFlex.alignStart, g.themeRow), n[79] = ue, n[80] = fe, n[81] = ke) : (ue = n[79], fe = n[80], ke = n[81]);
				var Ie;
				n[82] !== le ? (Ie = function(t, n) {
					return le(t, n);
				}, n[82] = le, n[83] = Ie) : Ie = n[83];
				var Te = Le.map(Ie);
				n[84] !== Te ? (ce = c.jsx("div", babelHelpers.extends({}, ke, { children: Te })), n[84] = Te, n[85] = ce) : ce = n[85], de = Ee.length > 0 && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRow, o("WDSFlex.stylex").wdsFlex.alignStart, g.themeRow), { children: Ee.map(function(e, t) {
					return le(e, W + t);
				}) })), n[42] = N, n[43] = M, n[44] = ae, n[45] = w, n[46] = le, n[47] = A, n[48] = F, n[49] = W, n[50] = D, n[51] = O, n[52] = B, n[53] = se, n[54] = ue, n[55] = ce, n[56] = de, n[57] = me, n[58] = pe, n[59] = _e, n[60] = fe, n[61] = ge, n[62] = he, n[63] = ye, n[64] = Ce, n[65] = be, n[66] = ve, n[67] = Se, n[68] = Re;
			} else se = n[53], ue = n[54], ce = n[55], de = n[56], me = n[57], pe = n[58], _e = n[59], fe = n[60], ge = n[61], he = n[62], ye = n[63], Ce = n[64], be = n[65], ve = n[66], Se = n[67], Re = n[68];
			var De;
			n[86] !== ue || n[87] !== ce || n[88] !== de ? (De = c.jsxs("div", babelHelpers.extends({}, ue, { children: [ce, de] })), n[86] = ue, n[87] = ce, n[88] = de, n[89] = De) : De = n[89];
			var xe;
			n[90] !== me || n[91] !== pe || n[92] !== _e || n[93] !== fe || n[94] !== De ? (xe = c.jsx("div", babelHelpers.extends({
				ref: me,
				onScroll: pe,
				"data-testid": _e
			}, fe, { children: De })), n[90] = me, n[91] = pe, n[92] = _e, n[93] = fe, n[94] = De, n[95] = xe) : xe = n[95];
			var $e;
			n[96] !== ge || n[97] !== he || n[98] !== ye || n[99] !== Ce || n[100] !== be || n[101] !== xe ? ($e = c.jsxs("div", babelHelpers.extends({
				ref: ge,
				"data-testid": he
			}, ye, { children: [
				Ce,
				be,
				xe
			] })), n[96] = ge, n[97] = he, n[98] = ye, n[99] = Ce, n[100] = be, n[101] = xe, n[102] = $e) : $e = n[102];
			var Pe;
			return n[103] !== se || n[104] !== ve || n[105] !== Se || n[106] !== Re || n[107] !== $e ? (Pe = c.jsx(se, {
				handlers: ve,
				role: Se,
				"aria-label": Re,
				children: $e
			}), n[103] = se, n[104] = ve, n[105] = Se, n[106] = Re, n[107] = $e, n[108] = Pe) : Pe = n[108], Pe;
		}
		var Ne;
		n[109] === Symbol.for("react.memo_cache_sentinel") ? (Ne = s._(
			/*BTDS*/
			""
		), n[109] = Ne) : Ne = n[109];
		var Me;
		n[110] !== i || n[111] !== k ? (Me = {
			0: { className: "xrvj5dj x1t59k0s xl56j7k xs2akgl x1f0uite x1h678fw xv6tirj xcldk2z x1phvje8" },
			2: { className: "xrvj5dj x125q6hc xl56j7k x13a9art x1frt3yj x1h678fw xv6tirj xcldk2z x1phvje8" },
			1: { className: "xrvj5dj x1t59k0s xl56j7k xs2akgl x1f0uite xcldk2z x1phvje8 xexx8yu x18d9i69" },
			3: { className: "xrvj5dj x125q6hc xl56j7k x13a9art x1frt3yj xcldk2z x1phvje8 xexx8yu x18d9i69" }
		}[(k === "color") << 1 | (i === !0) << 0], n[110] = i, n[111] = k, n[112] = Me) : Me = n[112];
		var we;
		if (n[113] !== le || n[114] !== D) {
			var Ae;
			n[116] !== le ? (Ae = function(t, n) {
				return le(t, n);
			}, n[116] = le, n[117] = Ae) : Ae = n[117], we = D.map(Ae), n[113] = le, n[114] = D, n[115] = we;
		} else we = n[115];
		var Fe;
		n[118] !== a || n[119] !== oe || n[120] !== Me || n[121] !== we ? (Fe = c.jsxs("div", babelHelpers.extends({ ref: oe }, Me, { children: [a, we] })), n[118] = a, n[119] = oe, n[120] = Me, n[121] = we, n[122] = Fe) : Fe = n[122];
		var Oe;
		return n[123] !== ae || n[124] !== Fe ? (Oe = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: ae,
			role: "radiogroup",
			"aria-label": Ne,
			children: Fe
		}), n[123] = ae, n[124] = Fe, n[125] = Oe) : Oe = n[125], Oe;
	}
	function C(e) {
		return e;
	}
	function b(e) {
		return e.isCurrent === !0;
	}
	function v(e) {
		return e.wallpaperId;
	}
	function S(e) {
		return e.theme;
	}
	function R(e) {
		return function(t, n, r) {
			var o = r.itemCount, a = t < e, i = a ? 0 : e, l = a ? e - 1 : o - 1, s = {
				down: function() {
					return a && t + e < o ? t + e : t;
				},
				end: function() {
					return l;
				},
				home: function() {
					return i;
				},
				left: function() {
					return t > i ? t - 1 : t;
				},
				right: function() {
					return t < l ? t + 1 : t;
				},
				up: function() {
					return !a && t - e < e ? t - e : t;
				}
			};
			return s[n]();
		};
	}
	l.default = y;
}), 226);
